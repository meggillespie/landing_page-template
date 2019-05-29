import React, { Component }  from 'react';
import './LLCard.scss';

export class LLCard extends Component {
	render () {
		return (
			<div className="card faded-bg m-5">
				<div className="card-body border border-dark rounded">
					<img className="card-img-top img-fluid"
					     style={{ width: this.props.width }}
					     src={ this.props.src }
					     alt={this.props.alt}
					/>
					<h4 className="card-title">{this.props.title}</h4>
					<p className="card-text">{this.props.text}</p>
					<a href={this.props.link} className="btn btn-primary">More...</a>
				</div>
			</div>
		);
	}
}
