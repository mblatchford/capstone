import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './index.css';

class Chat extends Component {
	render() {
		// for each message check the name
		// if my name in state make it blue
		// else for incoming messages make them red
		let chatRoom = this.props.chat.map(message => {
			let textColor = 'red';
			if (message.name !== this.props.name) {
				textColor = 'blue';
			}
			return (
				<ul key={uuid()} style={{ listStyleType: 'none', padding: 'none' }}>
					<li>
						<span style={{ color: textColor, fontWeight: 'bold' }}> &lt; {message.name} &gt; </span> {message.text}
					</li>
				</ul>
			);
		});

		return (
			<div>
				{/* return both an input form and a chat history div */}
				<form className="form" onSubmit={this.props.handleSubmit}>
					<div className="formWrapper">
						<input className="inputName" type="text" placeholder="Custom Call-Sign" color="red" />

						<input className="inputMessage" type="text" placeholder="(Clean!) SmackTalk anyone???" />
					</div>
					<input type="submit" value="Send" />
				</form>
				<div
					className="chatMessages"
					style={{
						width: 380 + 'px',
						height: 500 + 'px',
						fontFamily: 'Contrail One, cursive'
					}}
				>
					{chatRoom}
				</div>
			</div>
		);
	}
}

export default Chat;
