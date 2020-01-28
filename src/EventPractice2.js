import React, { Component } from 'react';

class EventPractice2 extends Component {
	state = {
		username: '',
		message: ''
	};

	handleChange = e => {
		console.log(e.key);
		console.log(e.target.name);
		console.log(e.target.value);
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	handleClick = e => {
		alert(this.state.username + ':' + this.state.message);
		this.setState({
			username: '',
			message: ''
		});
	};
	handleKeyPress = e => {
		console.log(e.key);
		if (e.key === 'Enter') {
			this.handleClick();
		}
	};
	render() {
		return (
			<div>
				<h1>이벤트 연습</h1>
				<input
					type="text"
					name="username"
					placeholder="사용자명"
					// onChange={e => {
					// 	this.setState({
					// 		message: e.target.value
					// 	});
					// }}
					onChange={this.handleChange}
					value={this.state.username}
				></input>
				<input
					type="text"
					name="message"
					placeholder="아무거나 입력"
					// onChange={e => {
					// 	this.setState({
					// 		message: e.target.value
					// 	});
					// }}
					onChange={this.handleChange}
					value={this.state.message}
					onKeyPress={this.handleKeyPress}
				></input>
				<button
					// onClick={() => {
					// 	alert(this.state.message);
					// 	this.setState({
					// 		message: ''
					// 	});
					// }}
					onClick={this.handleClick}
				>
					확인
				</button>
			</div>
		);
	}
}

export default EventPractice2;
