import React from 'react'

import styles from '../css-modules/separator.module.scss'

export const Separator: React.FC = () => {
	return (
		<div>
			<div className={styles.separatorHorizontal}></div>
		</div>
	)
}
