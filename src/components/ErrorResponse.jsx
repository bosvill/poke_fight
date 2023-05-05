import React from 'react'
import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

const ErrorResponse = () => {
	const error = useRouteError()

	if (isRouteErrorResponse(error)) {
		if (error.status === 404) {
			return <div>This page doesn't exist!</div>
		}

		if (error.status === 401) {
			return <div>You aren't authorized to see this</div>
		}

		if (error.status === 503) {
			return <div>Looks like our API is down</div>
		}

		if (error.status === 418) {
			return <div>🫖</div>
		}
	}
	return (
		<div className='error-container'>
			<h3>Oops.. Something went wrong</h3>
			<p>
				{error.status} {error.message}
			</p>
		</div>
	)
}

export default ErrorResponse
