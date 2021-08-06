/**
 * Created by meg on 8/1/21.
 */
import React, { Component }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SmallCard.scss';

export class SmallCard extends Component {
	render () {
		return (
			<div className="card grow shadow-lg m-5">
				<div className="card-body rounded">
					<FontAwesomeIcon icon={ this.props.icon } className="icon-shadow text-xs-center mr-1 mt-2 mb-3"
					                 size="3x" style={{ color: '#ed1c22' }} />
					<h4 className="card-title">{this.props.title}</h4>
					<p className="card-text">{this.props.text}</p>
				</div>
			</div>
		);
	}
}


