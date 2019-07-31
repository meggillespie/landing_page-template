import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BouncingChevron.scss';

export class BouncingChevron extends Component {
	render() {
		return (
			<div>
				<div className="center-con">
					<small>Scroll Down</small>
					<div className="round">
						<div id="cta">
							<span className="arrow first next "></span>
							<span className="arrow second next "></span>
						</div>
					</div>
				</div>
				{/*<a href="#anchorTag" id="chevron" className="bounce"><FontAwesomeIcon icon="chevron-down" size="3x"/></a>*/}
			</div>
		)
	}
}