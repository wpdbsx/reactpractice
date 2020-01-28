import React, { useState } from 'react';

const EventPractice3 = () => {
	// const [username, setUsername] = useState('');
	// const [message, setMessage] = useState('');
	// // const onChangeUsername = e => setUsername(e.target.value);
	// const onChangeMessage = e => setMessage(e.target.value);
	const [form, setForm] = useState({
		username: '',
		message: ''
	});
	const { username, message } = form;
	const onChange = e => {
		const nextForm = {
			...form,
			[e.target.name]: e.target.value
		};
		setForm(nextForm);
	};
	const onClick = e => {
		alert(username + ': ' + message);
		// setUsername('');
		// setMessage('');
		setForm({
			message: '',
			username: ''
		});
	};
	const onKeyPress = e => {
		if (e.key === 'Enter') {
			onClick();
		}
	};

	return (
		<div>
			<h1>이벤트연습</h1>
			<input
				type="text"
				name="username"
				placeholder="사용자명"
				value={username}
				onChange={onChange}
			/>
			<input
				type="text"
				name="message"
				placeholder="메세지"
				value={message}
				onChange={onChange}
				onKeyPress={onKeyPress}
			/>
			<button onClick={onClick}>확인</button>
		</div>
	);
};

export default EventPractice3;
