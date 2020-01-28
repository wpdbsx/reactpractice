import React, { Component } from 'react';

class Counter extends Component {
	// constructor(props) {
	// 	super(props);
	// 	//state의 초기값 설정
	// 	this.state = {
	// 		number: 0,
	// 		fixedNumber: 0
	// 	};
	// }
	state = {
		number: 0,
		fixedNumber: 0
	};
	render() {
		const { number, fixedNumber } = this.state;
		return (
			<div>
				<h1>{number}</h1>
				<h2>바뀌지않는 값 : {fixedNumber}</h2>
				<button
					onClick={() => {
						this.setState(
							a => {
								return {
									number: a.number + 1
								};
							},
							() => {
								return {
									number: number + 1
								};
							}
						);
					}}
				>
					+1
				</button>
			</div>
		);
	}
}
export default Counter;
