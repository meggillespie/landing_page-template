import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { MainCard } from '../../components/MainCard/MainCard';
import { RefinanceForm } from '../../components/RefinanceForm/RefinanceForm';

import homeBckgrd from '../../media/Room8.jpeg';
import './Home.scss';

export class Home extends Component {
	render () {
		return(
			<div>
				<div className="row background-container">
					<div className="col-md-12">
						<div className="media-overlay" style={{ height: '100vh', overflowY: 'hidden', boxShadow: '0px 5px 5px grey' }}>
							<img src={ homeBckgrd } alt="home page background" className="img-fluid" style={{ marginTop: '-10%', width: '100%' }} />
							<MainCard
								textAlignment="text-left"
								top="45%"
								left="50%"
								heading="How much can you save?"
								text1="We compare rates from multiple lenders."
								text2="Get your quote now!"
								numberOfButtons="2"
							  button1Text="Home Purchase"
								button1Link="/home-loans"
								button2Text="Home Refinance"
								button2Link="/home-refinance"
							/>
						</div>
					</div>
				</div>

				<div className="row mx-3" id="anchorTag" style={{  paddingTop: '110px', marginTop: '-70px' }}>
					<div className="col-md-10 offset-md-1">
						<h2 className="display-4 pt-3">Our Mission</h2>
						<p className="lead mt-4">Your home is more than a roof over your head. It's a place to call your own,
							raise a family, build memories with friends, and become a part of strong neighborhoods and communities.
							It's meeting personal financial goals and an investment in the future. Our mortgage advisors compare rates
							and terms from various lenders to craft a mortgage and experience to uniquely fit your needs and goals.</p>
					</div>
				</div>

				<div className="row mb-5 mt-5">
					<div className="col-md-8 offset-md-2">
						<div className="embed-responsive embed-responsive-16by9 border border-dark rounded-sm">
							<iframe title="intro-video" className="embed-responsive-item" src="https://www.youtube.com/embed/Z5bVH4vvsyk?version=3&loop=0&playlist=Z5bVH4vvsyk"></iframe>
						</div>
					</div>
				</div>


				<div className="jumbotron jumbotron-fluid mb-0 bg-light">
					<div className="container-fluid">
						<h2 className="display-4 pt-5">Get Your Free Online Quote Now</h2>
						<p className="lead mb-0">Answer a few questions to get your custom loan options.</p>
						<p className="lead mt-0">We never share information with 3rd parties.</p>
						<Button href={ this.props.button1Link } color="primary" size="lg" className="m-4" style={{ position: 'relative', zIndex: '10' }}>Home Purchase</Button>
						<Button href={ this.props.button2Link } color="primary" size="lg" className="m-4" style={{ position: 'relative', zIndex: '10' }}>Home Refinance</Button>
					</div>
				</div>


				<div className="row mb-5 mt-5">
					<div className="col-md-8 offset-md-2">
						<RefinanceForm />
					</div>
				</div>



			</div>
		);
	}
}