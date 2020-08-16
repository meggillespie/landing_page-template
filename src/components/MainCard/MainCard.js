import React, { Component }  from 'react';
import graphic from '../../media/graphic.png';
import logoImg from '../../media/logo-iconOnly-black.png';
import { Card, CardImg, CardBody,
	CardTitle, CardText,  Button, Image } from 'reactstrap';
import './MainCard.scss';

export class MainCard extends Component {
	render () {
		return (
			<div className="card-block px-4" style={{ top: this.props.top, left: this.props.left }}>
				<Card className="shadow-lg">
					<img src={ logoImg } className="mt-3" alt="embossed logo background"
					     style={{ height: '90%', width: 'auto', position: 'absolute',
						     zIndex: '1', opacity: '.05', left: '21%' }}/>
					<CardImg top src={ graphic } style={{ borderRadius: '4px 0px 0px 0px' }} className="mt-3 ml-4" alt="Card image cap"/>
					<CardBody className="mx-2">
						<CardTitle className={'mb-2 ' + this.props.textAlignment }>
							<h1 style={{ fontWeight: 'bold' }}>
								{ this.props.heading }
								<br/>
								{ this.props.subHeading }
							</h1>
						</CardTitle>
						<CardText className="lead mb-0"> {this.props.text1} </CardText>
						<CardText className="lead mb-2"> {this.props.text2} </CardText>
						{ this.props.numberOfButtons < 2 ? (
							<Button href={ this.props.button1Link } color="primary" size="lg" className="m-2" style={{ position: 'relative', zIndex: '10' }}>{ this.props.button1Text }</Button>
						) : (
							<div>
								<Button href={ this.props.button1Link } color="primary" size="lg" className="m-4" style={{ position: 'relative', zIndex: '10' }}>{ this.props.button1Text }</Button>
								<Button href={ this.props.button2Link } color="primary" size="lg" className="m-4" style={{ position: 'relative', zIndex: '10' }}>{ this.props.button2Text }</Button>
							</div>
						)}
					</CardBody>
				</Card>
			</div>
		);
	}
}
