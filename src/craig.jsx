import styles from './index.scss';
import React from 'react';
import {Arrow} from './arrow.jsx';

export class Craig extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			messages: ["Loading.."],
			increment: 0
		}

	}
	componentWillMount() {
		this.getMessages().then(() => {
			this.setState({
				increment: this.state.increment + 1
			})
		}).catch((err) => {
			console.log(err);
		});
	}
	getMessages() {
		var url = "http://lvh.me:3000/message";
		// var url = "http://smallprojects.herokuapp.com/message"
		return axios.get(url).then((data) => {
			console.log(data)
			this.setState({
				messages: [
					...this.state.messages,
					...data.data
				]
			});
			console.log(this.state)
		}).catch((err) => {
			console.log(err);
		});
	};
	clickHandler(event) {
		console.log("fired")
		if (this.state.messages.length - 5 < this.state.increment) {
			this.setState({
				increment: this.state.increment + 1
			})
			this.getMessages()
		} else {
			this.setState({
				increment: this.state.increment + 1
			})
		}
	}
	render() {
		return (
			<div>
				<div className={styles.body}>
					<div className={styles.phrase}>
						<h3 >{this.state.messages[this.state.increment]}</h3>
						<h4>
							--Douche</h4>
					</div>
					<Arrow onClick={this.clickHandler.bind(this)} id="arrow"/>
				</div>
			</div>
		)
	}
}
