import React, { Component } from 'react';
import './VideoHeader.scss';

export class VideoHeader extends Component {
	render () {
		return(
			<div className="video-header">
				<div className="overlay"></div>
				<video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop" preload="meta">
					<source src={this.props.src} />
				</video>
			</div>
		);
	}
}