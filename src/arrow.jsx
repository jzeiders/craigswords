import styles from './index.scss'
import React from 'react';

export class Arrow extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className={styles.arrow}>
				<span onClick={this.props.onClick}>
					<i className="fa fa-chevron-right fa-4x"></i>
				</span>
			</div>
		)
	}
}
