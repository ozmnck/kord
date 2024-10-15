import React from 'react'

import styles from '@/components/css-modules/button.module.scss'

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?:
		| 'primary'
		| 'default'
		| 'destructive'
		| 'outline'
		| 'secondary'
		| 'ghost'
		| 'link'
	size?: 'default' | 'sm' | 'lg' | 'icon'
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className = '',
			variant = 'default',
			size = 'default',
			asChild = false,
			...props
		},
		ref,
	) => {
		const variantClass = styles[`button-${variant}`] || ''
		const sizeClass = styles[`button-size-${size}`] || ''
		const combinedClasses = `${styles.button} ${variantClass} ${sizeClass} ${className}`

		return <button className={combinedClasses} ref={ref} {...props} />
	},
)

Button.displayName = 'Button'

export { Button }
