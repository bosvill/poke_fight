import React from 'react';
import { v4 } from 'uuid'

const Player = ({poke, style}) => {
    return (
        <div className='player'>
						<h3 style={style}>{poke.name.toUpperCase()} </h3>
						<img src={poke.sprites.other.home.front_default} alt='' />
						<div>
							<h3>Base</h3>
							{poke.stats.map(el => (
								<li key={v4()}>
									{el.stat.name}: <span style={{ color: '#d8b054' }}>{el.base_stat}</span>
								</li>
							))}
						</div>
					</div>
    );
}

export default Player;
