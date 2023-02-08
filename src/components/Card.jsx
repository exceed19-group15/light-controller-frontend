import React from 'react'
import '../styles/Card.css'

const Card = ({ bulb_id, room_name, is_on, is_auto, light_level  }) => {


	// const routeName = `/blub/${bulb_id}`

	return (
		<div className='card'>
            <div className='grid-container'>
            <div>
            <p>{bulb_id}</p>
            </div>
            <div>
            <p>{room_name}</p>
            </div>
            </div>
		</div>
	)
}

export default Card