import React, { Component } from 'react';
import { MainCard } from '../../components/MainCard/MainCard';
import { LLCard } from '../../components/LLCard/LLCard';
import { BouncingChevron } from '../../components/BouncingChevron/BouncingChevron';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import homeBckgrd from '../../media/Room8.jpeg';
import loan from '../../media/loan.png';
import military from '../../media/military.png';
import refinance from '../../media/refinance.png';
import reverse from '../../media/reverse.png';
import './Home.scss';

export class Home extends Component {
	render () {
		return(
			<div>
				<div className="row background-container">
					<div className="col-md-12">
						<div className="media-overlay" style={{ height: '100vh', overflowY: 'hidden' }}>
							<img src={ homeBckgrd } alt="home page background" className="img-fluid" style={{ marginTop: '-10%', width: '100%' }} />
							<MainCard
								textAlignment="text-left"
								top="45%"
								left="50%"
								heading="Purchase or refinance"
								subHeading="your home easily."
								text=""
							  numberOfButtons="2"
							  button1Text="Home Purchase"
								button1Link="/home-loans"
								button2Text="Home Refinance"
								button2Link="/home-refinance"
							/>
							<BouncingChevron />
						</div>
					</div>
				</div>

				<div className="row mx-3" id="anchorTag" style={{  paddingTop: '110px', marginTop: '-70px' }}>
					<div className="col-md-10 offset-md-1">
						<h2 className="display-4 pt-3">Our Mission</h2>
						<p className="lead mt-4">At Lakeway Lending, we believe Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					</div>
				</div>

				<div className="row mb-5 mt-5">
					<div className="col-md-8 offset-md-2">
						<div className="embed-responsive embed-responsive-16by9 border border-light rounded-sm">
							<iframe title="placeholder-video" className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
						</div>
					</div>
				</div>

				<div className="jumbotron jumbotron-fluid mb-0 bg-light">
					<div className="container-fluid">
						<h2 className="display-4 pt-5">Lakeway Lending</h2>
						<p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

						<div className="card-deck mt-4">
							<LLCard
								link="/home-purchase"
								src={ loan }
								alt="home loan icon"
								width="30%"
								title="Home Loans"
								text="Conventional loans. FHA loans. Jumbo Loans. Personalized loans to fit your needs."
							/>

							<LLCard
								link="/veterans-loan"
								src={ military }
								alt="va loan icon"
								width="25%"
								title="Veteran Loans"
								text="VA loans. 0% Down Payment. Low closing costs and no mortgage insurance."
							/>

							<LLCard
								link="/home-refinance"
								src={ refinance }
								alt="home refinance icon"
								width="30%"
								title="Home Refinance"
								text="Refinance your rate. Lower your monthly payment. Pay off your loan sooner."
							/>

							<LLCard
								link="/reverse-mortgage"
								src={ reverse }
								alt="reverse mortgage icon"
								width="30%"
								title="Reverse Mortgage"
								text="Interested in a Reverse Mortgage. Want more information?"
							/>
						</div>
					</div>
				</div>

				<section className="bg-light py-5">
					<div className="container">
						<div className="row justify-content-center mb-5 pb-3">
							<div className="col-md-7 text-center heading-section">
								<h2 className="mb-4 display-4">Why Choose Us</h2>
								<p className="lead text-muted">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 d-flex align-self-stretch">
								<div className="media mb-5 services left d-flex align-items-center">
									<div className="icon d-flex align-items-center justify-content-center order-md-last">
										<FontAwesomeIcon className="service-icon" icon="user-tie" size="3x"/>
									</div>
									<div className="media-body pl-4 pl-md-0 pr-md-4 text-md-right">
										<h3 className="heading">Over 30 Years Experience</h3>
										<p className="mb-0">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ullamco laboris ex.</p>
									</div>
								</div>
							</div>
							<div className="col-md-6 d-flex align-self-stretch">
								<div className="media mb-5 services right d-flex align-items-center">
									<div className="icon d-flex align-items-center justify-content-center">
										<FontAwesomeIcon className="service-icon" icon="handshake" size="3x"/>
									</div>
									<div className="media-body pl-4">
										<h3 className="heading">Local Lakeway Service</h3>
										<p className="mb-0">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ullamco laboris ex.</p>
									</div>
								</div>
							</div>
							<div className="col-md-6 d-flex align-self-stretch">
								<div className="media mb-5 services left d-flex align-items-center">
									<div className="icon d-flex align-items-center justify-content-center order-md-last">
										<FontAwesomeIcon className="service-icon" icon="bolt" size="3x"/>
									</div>
									<div className="media-body pl-4 pl-md-0 pr-md-4 text-md-right">
										<h3 className="heading">Fast Closings</h3>
										<p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ullamco laboris ex.</p>
									</div>
								</div>
							</div>
							<div className="col-md-6 d-flex align-self-stretch">
								<div className="media mb-5 services right d-flex align-items-center">
									<div className="icon d-flex align-items-center justify-content-center">
										<FontAwesomeIcon className="service-icon" icon="percentage" size="3x"/>
									</div>
									<div className="media-body pl-4">
										<h3 className="heading">Low Rates & Fees</h3>
										<p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ullamco laboris ex.</p>
									</div>
								</div>
							</div>
							<div className="col-md-6 d-flex align-self-stretch">
								<div className="media mb-5 services left d-flex align-items-center">
									<div className="icon d-flex align-items-center justify-content-center order-md-last">
										<FontAwesomeIcon className="service-icon" icon="hands-helping" size="3x"/>
									</div>
									<div className="media-body pl-4 pl-md-0 pr-md-4 text-md-right">
										<h3 className="heading">Hassle Free Mortgage Experience</h3>
										<p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ullamco laboris ex.</p>
									</div>
								</div>
							</div>
							<div className="col-md-6 d-flex align-self-stretch">
								<div className="media mb-5 services right d-flex align-items-center">
									<div className="icon d-flex align-items-center justify-content-center">
										<FontAwesomeIcon className="service-icon" icon="cogs" size="3x"/>
									</div>
									<div className="media-body pl-4">
										<h3 className="heading">Technology Driven Mortgage Company</h3>
										<p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ullamco laboris ex.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}