import React, { Component }  from 'react';
import { Card, CardBody, CardTitle, CardText,  Button } from 'reactstrap';
import mtgPic from '../../media/MLO-Pic.png';

import './MainCard.scss';

export class MainCard extends Component {
	render () {
		return (
			<div>
				<div className="card-block px-auto w-30" style={{ position: 'absolute' }} >
					<Card style={{ boxShadow: '0 30px 40px rgba(0,0,0,4)', borderTop: 'solid 25px #ed1c22', opacity: '.92' }} >
						<CardBody className="mx-2">
							<CardTitle className='mb-2 text-center'>
								<h1 style={{ fontWeight: 'bold' }}>{ this.props.heading }</h1>
							</CardTitle>
							<CardText className="lead mb-1" style={{ fontWeight: 'bold' }}> {this.props.text1} </CardText>
							<CardText className="lead mb-0" style={{ fontWeight: 'bold' }}> {this.props.text2} </CardText>

							<Button href={ this.props.button1Link } size="lg" className="blue-button mx-4 my-3"
							        style={{ position: 'relative', zIndex: '10', fontWeight: '600', color: '#fff' }}
							>{ this.props.button1Text }</Button>
							<Button href={ this.props.button2Link } size="lg" className="blue-button mx-4 my-3"
							        style={{ position: 'relative', zIndex: '10', fontWeight: '600', color: '#fff' }}
							>{ this.props.button2Text }</Button>
						</CardBody>
					</Card>
				</div>

				{/*<img src={ mtgPic } className="pic-position img-fluid" alt="Megan"*/}
									     {/*style={{ height: '200px', width: '200px' }} />*/}

					{/*<div className="main-block-1">*/}
						{/*<h1 style={{ fontWeight: 'bold' }}>{ this.props.heading }</h1>*/}
						{/*<h2>{this.props.text1}</h2>*/}
						{/*<h2>{this.props.text2}</h2>*/}
						{/*<Button href={ this.props.button1Link } size="lg" className="blue-button mx-4 my-3"*/}
						        {/*style={{ position: 'relative', zIndex: '10', fontWeight: '600', color: '#fff' }}*/}
						{/*>{ this.props.button1Text }</Button>*/}
						{/*<Button href={ this.props.button2Link } size="lg" className="blue-button mx-4 my-3"*/}
						        {/*style={{ position: 'relative', zIndex: '10', fontWeight: '600', color: '#fff' }}*/}
						{/*>{ this.props.button2Text }</Button>*/}
					{/*</div>*/}

					<img src={ mtgPic } className="pic-position rounded-circle img-fluid" alt="Megan"
					     style={{ height: '200px', width: '200px' }} />
			</div>
		);
	}
}
