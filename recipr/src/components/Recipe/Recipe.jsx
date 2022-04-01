import React from 'react'

const Recipe = (props) => {
	// props.data.title
	return (
		<div>
			<h1 className='mb-6'>{props.data.title}</h1>
			
		</div>
	)
}

export default Recipe