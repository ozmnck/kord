import { useState } from 'react'

import { FaGithub, FaYandex } from 'react-icons/fa'

import styles from '../auth-styles/sign-in-up-card.module.scss'
import { SignInFlow } from '../types'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

interface SignInCardProps {
	setState: (state: SignInFlow) => void
}

export const SignInCard = ({ setState }: SignInCardProps) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<Card className={styles.card}>
			<CardHeader className={styles['card-header']}>
				<CardTitle>Login to your account</CardTitle>
				<CardDescription>
					Please enter your email and password to sign in.
				</CardDescription>
			</CardHeader>
			<CardContent className={styles['card-content']}>
				<form className={styles['form-container']}>
					<Input
						className={styles['input-field']}
						disabled={false}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type='email'
						placeholder='Email'
						required
					/>
					<Input
						className={styles['input-field']}
						disabled={false}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type='password'
						placeholder='Password'
						required
					/>
					<Button
						variant='primary'
						disabled={false}
						size='default'
						type='submit'
						className={styles['button']}>
						Sign In
					</Button>
				</form>
				<Separator />
				<div className={styles['button-container']}>
					<Button
						disabled={false}
						variant='default'
						size='default'
						type='button'
						className={styles['button-branded']}>
						<FaYandex className={styles['button-icon']} />
						Continue with Яндекс
					</Button>
					<Button
						disabled={false}
						variant='default'
						size='default'
						type='button'
						className={styles['button-branded']}>
						<FaGithub className={styles['button-icon']} />
						Continue with Github
					</Button>
				</div>
				<p className={styles['sign-up-text']}>
					Don&apos;t have an account?
					<span
						onClick={() => setState('signUp')}
						className={styles['sign-up-link']}>
						{' '}
						Sign Up
					</span>
				</p>
			</CardContent>
		</Card>
	)
}
