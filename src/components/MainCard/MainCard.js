import React, { Component }  from 'react';
import graphic from '../../media/graphic.png';
import { Card, CardImg, CardBody,
	CardTitle, CardText,  Button } from 'reactstrap';
import './MainCard.scss';

export class MainCard extends Component {
	render () {
		return (
			<div className="card-block px-4" style={{ top: this.props.top, left: this.props.left }}>
				<Card className="shadow-lg">
					<CardImg top src={ graphic } className="mt-3 ml-4" alt="Card image cap"/>
					<CardBody className="mx-2">
						<CardTitle className={'mb-4 ' + this.props.textAlignment }>
							<h1 style={{ fontWeight: 'bold' }}>
								{ this.props.heading }
								<br/>
								{ this.props.subHeading }
							</h1>
						</CardTitle>
						<CardText className="lead"> {this.props.text} </CardText>
						{ this.props.numberOfButtons < 2 ? (
							<Button href={ this.props.button1Link } color="primary" size="lg" className="m-2">{ this.props.button1Text }</Button>
						) : (
							<div>
								<Button href={ this.props.button1Link } color="primary" size="lg" className="m-3">{ this.props.button1Text }</Button>
								<Button href={ this.props.button2Link } color="primary" size="lg" className="m-3">{ this.props.button2Text }</Button>
							</div>
						)}
					</CardBody>
				</Card>
			</div>
		);
	}
}
