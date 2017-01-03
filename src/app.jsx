import styles from './index.scss';
import React from 'react';
import {Craig} from './craig.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<h1 className={styles.title}>
					<u>CRAIGS QUOTES</u></h1>
        <Craig />
			</div>
		)
	}
}
