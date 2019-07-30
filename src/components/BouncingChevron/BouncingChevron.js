import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BouncingChevron.scss';

export class BouncingChevron extends Component {
	render() {
		return (
			<div>
				{/*<small>Learn More</small>*/}
				<a href="#anchorTag" id="chevron" className="bounce"><FontAwesomeIcon icon="chevron-down" size="3x"/></a>
			</div>
		)
	}
}