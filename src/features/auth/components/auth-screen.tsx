'use client'

import { useState } from 'react'

import styles from '../auth-styles/auth-screen.module.scss'
import { SignInFlow } from '../types'

import { SignInCard } from './sign-in-card'
import { SignUpCard } from './sign-up-card'

export const AuthScreen = () => {
	const [state, setState] = useState<SignInFlow>('signIn')

	return (
		<div className={styles.authScreen}>
			<div className={styles.authForm}>
				{state === 'signIn' ? (
					<SignInCard setState={setState} />
				) : (
					<SignUpCard setState={setState} />
				)}
			</div>
		</div>
	)
}
