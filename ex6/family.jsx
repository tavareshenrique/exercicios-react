import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

export default props => (
	<div>
		<h1>Família</h1>

		{/*
		 {props.children}

		 { React.cloneElement(props.children, props) }

		 { React.cloneElement(props.children, {...props}) }

		{ React.Children.map(props.children,
			child => React.cloneElement(child, {...props})) } 
		*/}

		{ childrenWithProps(props.children, props) }


	</div>
)