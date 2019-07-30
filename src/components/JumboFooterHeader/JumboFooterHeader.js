import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class JumboFooterHeader extends Component {
	render() {
		return (
			<div className="jumbotron jumbotron-fluid mb-0 bg-light">
				<div className="container">
					<div className="row">
						<div className="col-md-4 px-4">
							<FontAwesomeIcon className="service-icon" icon={this.props.firstIcon} size="3x" style={{ color: "#0b143d" }} />
							<h4>{this.props.firstTitle}</h4>
							<p>{this.props.firstText}</p>
						</div>
						<div className="col-md-4 px-4">
							<FontAwesomeIcon className="service-icon" icon={this.props.secondIcon} size="3x" style={{ color: "#0b143d" }} />
							<h4>{this.props.secondTitle}</h4>
							<p>{this.props.secondText}</p>
						</div>
						<div className="col-md-4 px-4">
							<FontAwesomeIcon className="service-icon" icon={this.props.thirdIcon} size="3x" style={{ color: "#0b143d" }} />
							<h4>{this.props.thirdTitle}</h4>
							<p>{this.props.thirdText}</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}