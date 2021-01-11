import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { MainCard } from '../../components/MainCard/MainCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
								textAlignment="text-center"
								top="45%"
								left="50%"
								heading="How Much Can You Save?"
								text1="Get Your Rate & Qualify Today For Free"
								text2="Low Rates & Fast Closings"
								text3="Get Your Quote Now!"
								numberOfButtons="2"
							  button1Text="Home Purchase"
								button1Link="/home-purchase"
								button2Text="Home Refinance"
								button2Link="/home-refinance"
							/>
						</div>
					</div>
				</div>


				<div className="row mx-3" id="anchorTag" style={{ paddingTop: '100px', marginTop: '-70px' }}>
					<div className="col-md-10 offset-md-1">
						<h2 className="display-4 pt-2">What We Do</h2>
						<p className="lead text-muted mb-0" style={{ fontWeight: '600' }}>Fast, Easy, Stress Free Mortgage Process</p>
						<p className="lead text-muted mt-0" style={{ fontWeight: '600' }}>Online Quotes & Same Day Approval</p>
					</div>
				</div>

				<div className="row mx-3 my-4">
					<div className="col-md-10 offset-md-1">
						<Button href="/home-purchase" color="primary" size="lg" className="mx-5 my-3 px-5" style={{ position: 'relative', zIndex: '10' }}>Home Purchase</Button>
						<Button href="/home-refinance" color="primary" size="lg" className="mx-5 my-3 px-5" style={{ position: 'relative', zIndex: '10' }}>Home Refinance</Button>
					</div>
				</div>

				<div className="row mx-3 my-4">
					<div className="col-md-4">
						<FontAwesomeIcon icon="home" className="text-xs-center mr-1" size="3x"/>
						<h4>Home Loans</h4>
						<p className="lead">Secure a home purchase loan that utilizes today’s great mortgage rates to make your dream home affordable.</p>
					</div>
					<div className="col-md-4">
						<FontAwesomeIcon icon="percent" className="text-xs-center mr-1" size="3x"/>
						<h4>Low Rates</h4>
						<p className="lead">Lock in great terms with current interest rates to ensure your home remains affordable—or build more equity with an update!</p>
					</div>
					<div className="col-md-4">
						<FontAwesomeIcon icon="dollar-sign" className="text-xs-center mr-1" size="3x"/>
						<h4>Home Refinance</h4>
						<p className="lead">Lower your rate to save money or take advantage of your home’s equity with a cash-out refinance. It’s your cash — spend it how you see fit.</p>
					</div>
				</div>

				<div className="row mx-3 my-4">
					<div className="col-md-4">
						<FontAwesomeIcon icon="vote-yea" className="text-xs-center mr-1" size="3x" />
						<h4>Quick Approvals</h4>
						<p className="lead">Our process is fully digital, user friendly, and we can secure your loan approval the same day.</p>
					</div>
					<div className="col-md-4">
						<FontAwesomeIcon icon="search-location" className="text-xs-center mr-1" size="3x" />
						<h4>Property Evaluation</h4>
						<p className="lead">Know where you stand. With a property evaluation in hand, you’ll have better access to your options so you can see the next move.</p>
					</div>
					<div className="col-md-4">
						<FontAwesomeIcon icon="money-check-alt" className="text-xs-center mr-1" size="3x" />
						<h4>Fast Funding</h4>
						<p className="lead">Seize opportunity as soon as you can with our fast funding options, giving you the freedom to cure that house fever.</p>
					</div>
				</div>





				<div className="jumbotron jumbotron-fluid mb-0"  style={{ backgroundColor: '#0b143d', color: '#f5f5f5' }}>
					<div className="container-fluid">

						<div className="row mb-3">
							<div className="col-md-10 offset-md-1">
								<h2 className="display-4">Our Mission</h2>
								<p className="lead mt-4 mb-0" style={{ fontWeight: '500' }} >A mortgage provides more than four walls and a roof over your head.</p>
								<p className="lead mt-0 mb-0" style={{ fontWeight: '500' }} >It's a place to call home, to raise your family, make memories with friends, and build communities.</p>
								<p className="lead mt-0" style={{ fontWeight: '500' }} >It's meeting personal financial goals and an investment in your future.</p>
								<p className="lead mt-4" style={{ fontWeight: '500' }} >We compare rates and terms from various lenders to craft a mortgage and experience to uniquely fit your needs and goals.</p>
							</div>
						</div>

						<div className="row mx-3">
							<div className="col-md-10 offset-md-1">
								<Button href="/home-purchase" color="light" size="lg" className="mx-5 my-3 px-5" style={{ position: 'relative', zIndex: '10' }}>Home Purchase</Button>

								<Button href="/home-refinance" color="light" size="lg" className="mx-5 my-3 px-5" style={{ position: 'relative', zIndex: '10' }}>Home Refinance</Button>
							</div>
						</div>

						<div className="row mt-4">
							<div className="col-md-8 offset-md-2">
								<div className="embed-responsive embed-responsive-16by9 border border-light rounded-sm">
									<iframe title="intro-video" className="embed-responsive-item" src="https://www.youtube.com/embed/Z5bVH4vvsyk?version=3&loop=0&playlist=Z5bVH4vvsyk"></iframe>
								</div>
							</div>
						</div>

					</div>
				</div>

			</div>
		);
	}
}