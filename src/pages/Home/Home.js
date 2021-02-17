import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { MainCard } from '../../components/MainCard/MainCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import homeBckgrd from '../../media/home-min.jpeg';
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
					<div className="col-md-10 offset-md-1 mb-4">
						<Button href="/home-purchase" color="primary" size="lg" className="mx-5 my-3 px-5" style={{ position: 'relative', zIndex: '10' }}>Home Purchase</Button>
						<Button href="/home-refinance" color="primary" size="lg" className="mx-5 my-3 px-5" style={{ position: 'relative', zIndex: '10' }}>Home Refinance</Button>
					</div>
				</div>

				<div className="row mx-3 my-4">
					<div className="col-md-4">
						<FontAwesomeIcon icon="home" className="text-xs-center mr-1" size="3x"/>
						<h4>Home Loans</h4>
						<p className="lead">Stop paying rent, and buy your dream home. Get a home purchase loan that benefits from today’s low mortgage rates and make your dream a reality.</p>
					</div>
					<div className="col-md-4">
						<FontAwesomeIcon icon="percent" className="text-xs-center mr-1" size="3x"/>
						<h4>Low Rates</h4>
						<p className="lead">Secure great terms with today's interest rates to guarantee your home remains budget-friendly, and builds equity faster over a shorter span.</p>
					</div>
					<div className="col-md-4">
						<FontAwesomeIcon icon="dollar-sign" className="text-xs-center mr-1" size="3x"/>
						<h4>Home Refinance</h4>
						<p className="lead">Lower your rate to save money. Payoff debt at historically low rates, or just take advantage of your home’s equity with a cash-out refinance.</p>
					</div>
				</div>

				<div className="row mx-3 my-4">
					<div className="col-md-4">
						<FontAwesomeIcon icon="vote-yea" className="text-xs-center mr-1" size="3x" />
						<h4>Quick Approvals</h4>
						<p className="lead">Our process is fully digital, and user friendly. We can secure your loan approval in the same day - What are you waiting for?</p>
					</div>
					<div className="col-md-4">
						<FontAwesomeIcon icon="search-location" className="text-xs-center mr-1" size="3x" />
						<h4>Property Evaluation</h4>
						<p className="lead">Having a home value report puts you in the best position to assess all your options before moving forward.</p>
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
								<p className="lead mt-4" style={{ fontWeight: '500' }} >At Lakeway Lending, we tailor your mortgage to uniquely fit your needs and goals.</p>
							</div>
						</div>

						<div className="row mx-3">
							<div className="col-md-10 offset-md-1 mb-3">
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