import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './loader.module.scss';

export const Loader = () => {
	return (
		<div className={ styles.loader }>
			<FontAwesomeIcon icon={ faSpinner } spin size="2x" color="#4198C5" />
		</div>
	);
};
