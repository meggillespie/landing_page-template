import React, { Component }  from 'react';
import { Card, CardBody,
	CardTitle, CardText,  Button } from 'reactstrap';
import './MainCard.scss';

export class MainCard extends Component {
	render () {
		return (
			<div className="card-block px-4 w-30" style={{ position: 'absolute' }} >
				<Card style={{ boxShadow: '0 30px 40px rgba(0,0,0,4)' }} >
					<div className="parallelogram"></div>
					<CardBody className="mx-2">
						<CardTitle className='mb-2 text-center'>
							<h1 style={{ fontWeight: 'bold' }}>
								{ this.props.heading }
							</h1>
						</CardTitle>
						<CardText className="lead mb-0" style={{ fontWeight: '800' }}> {this.props.text1} </CardText>
						<CardText className="lead mb-0" style={{ fontWeight: 'bold' }}> {this.props.text2} </CardText>
						<CardText className="lead my-2" style={{ fontWeight: 'bold' }}> {this.props.text3} </CardText>

						<Button href={ this.props.button1Link } size="lg" className="red-button mx-4 my-3" style={{ position: 'relative', zIndex: '10', fontWeight: '600', color: '#fff' }}>{ this.props.button1Text }</Button>
						<Button href={ this.props.button2Link } size="lg" className="blue-button mx-4 my-3" style={{ position: 'relative', zIndex: '10', fontWeight: '600', color: '#fff' }}>{ this.props.button2Text }</Button>
					</CardBody>
				</Card>
			</div>
		);
	}
}
