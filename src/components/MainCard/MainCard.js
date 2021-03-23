import React, { Component }  from 'react';
import graphic from '../../media/graphic.png';
import logoImg from '../../media/logo-iconOnly-black-min.png';
import { Card, CardImg, CardBody,
	CardTitle, CardText,  Button } from 'reactstrap';
import './MainCard.scss';

export class MainCard extends Component {
	render () {
		return (
			<div className="card-block px-4 w-40" style={{ position: 'absolute' }} >
				<Card style={{ boxShadow: '0 30px 40px rgba(0,0,0,4)' }} >
					<img src={ logoImg } className="mt-3 main-card-img" alt="embossed company logo image"
					     style={{ position: 'absolute', width: 'auto', zIndex: '1', opacity: '0.1' }}/>
					<CardImg top src={ graphic } style={{ borderRadius: '4px 0px 0px 0px' }} className="mt-3 ml-4" alt="abstract graphic"/>
					<CardBody className="mx-2">
						<CardTitle className='mb-2 text-center'>
							<h1 style={{ fontWeight: 'bold' }}>
								{ this.props.heading }
							</h1>
						</CardTitle>
						<CardText className="lead mb-0" style={{ fontWeight: '800' }}> {this.props.text1} </CardText>
						<CardText className="lead mb-0" style={{ fontWeight: 'bold' }}> {this.props.text2} </CardText>
						<CardText className="lead mb-2" style={{ fontWeight: 'bold' }}> {this.props.text3} </CardText>

						<Button href={ this.props.button1Link } size="lg" className="red-button mx-4 my-3" style={{ position: 'relative', zIndex: '10', fontWeight: '600', color: '#fff' }}>{ this.props.button1Text }</Button>
						<Button href={ this.props.button2Link } size="lg" className="blue-button mx-4 my-3" style={{ position: 'relative', zIndex: '10', fontWeight: '600', color: '#fff' }}>{ this.props.button2Text }</Button>
					</CardBody>
				</Card>
			</div>
		);
	}
}
