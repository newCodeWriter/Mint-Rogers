/** @format */
import React, { Component } from 'react';
import { Fade } from '@material-ui/core';
import { homeImages } from '../constants';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { index: 1 };
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			if (this.state.index === homeImages.length) {
				this.setState({ index: 1 });
			} else {
				this.setState((state) => {
					return { index: state.index + 1 };
				});
			}
		}, 4000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<>
				{homeImages.map(({ url, index, description }) => (
					<Fade key={index} in={this.state.index === index}>
						<img
							src={url}
							alt={description}
							style={{
								display: this.state.index !== index ? 'none' : 'block',
							}}
							width='100%'
						/>
					</Fade>
				))}
			</>
		);
	}
}

export default Home;
