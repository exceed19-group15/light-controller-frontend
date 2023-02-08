import React from 'react'
import '../styles/Card.css'

const Card = ({ bulb_id, room_name, is_on, is_auto, light_level  }) => {


	// const routeName = `/blub/${bulb_id}`

	return (
		<div className='card'>
            <p>
                {bulb_id}
            </p>
		</div>
	)
}

export default Card