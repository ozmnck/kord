import React from 'react'

import styles from '../css-modules/input.module.scss'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={`${styles.input} ${className}`}
				ref={ref}
				{...props}
			/>
		)
	},
)

Input.displayName = 'Input'

export { Input }
