import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { MainCard } from '../../components/MainCard/MainCard';
import { SmallCard } from '../../components/SmallCard/SmallCard';
import homeBckgrd from '../../media/home-min.jpeg';
import './Home.scss';

export class Home extends Component {
	render () {
		return(
			<div>
				<div className="row background-container">
					<div className="col-md-12">
						<div className="media-overlay" style={{ overflowY: 'hidden', boxShadow: '0px 5px 5px grey' }}>
						<img src={ homeBckgrd } alt="home page picture" className="img-fluid"
						     style={{ marginTop: '-14%', height: '100 vh', zIndex: '1' }} />
						<MainCard
							textAlignment="text-center"
							heading="How Much Can You Save?"
							text1="GREAT RATES - FAST CLOSINGS"
							text2="See what you qualify for online."
							button1Text="HOME QUALIFIER"
							button1Link="https://conv-purchase-11482-mg.secure-clix.com/"
							button2Text="REFI QUALIFIER"
							button2Link="https://conv-refi-11482-mg.secure-clix.com/"
						/>
						</div>
					</div>
				</div>

				<div className="row mx-3" style={{ paddingTop: '70px'}}>
					<div className="col-md-10 offset-md-1">
						<h2 className="display-4 pt-2">What We Do</h2>
						<p className="lead text-muted mb-0" style={{ fontWeight: '600' }}>Fast, Easy, Stress Free Mortgage Process</p>
						<p className="lead text-muted mt-0" style={{ fontWeight: '600' }}>Online Quotes & Same Day Approval</p>
					</div>
				</div>

				<div className="row mx-3 my-4">
					<div className="col-md-10 offset-md-1 mb-4">
						<Button href="https://conv-purchase-11482-mg.secure-clix.com/" color="primary" size="lg"
						        className="blue-button mx-5 my-3 py-3 px-5"
						        style={{ position: 'relative', zIndex: '10', fontWeight: '600', color: '#fff' }}>
							HOME QUALIFIER
						</Button>
						<Button href="https://home-valuation-11482-mg.secure-clix.com/" color="primary" size="lg"
						        className="blue-button mx-5 my-3 p-3"
						        style={{ position: 'relative', zIndex: '10', fontWeight: '600', color: '#fff' }}>
							HOME VALUE ESTIMATOR
						</Button>
						<Button href="https://conv-refi-11482-mg.secure-clix.com/" color="primary" size="lg"
						        className="blue-button mx-5 my-3 py-3 px-5"
						        style={{ position: 'relative', zIndex: '10', fontWeight: '600', color: '#fff' }}>
							REFI QUALIFIER
						</Button>
					</div>
				</div>

				<div className="row">
					<div className="col-md-10 offset-md-1">
						<hr />
					</div>
				</div>


				<div className="row mx-2 my-4">
					<div className="col-md-4">
						<SmallCard
							icon="home"
							width="30%"
							title="Home Loans"
							text="Conventional, VA, FHA & USDA loans that benefit from today’s low mortgage rates so you can
							stop wasting money on rent, and buy your dream home."
						/>
					</div>
					<div className="col-md-4">
						<SmallCard
							icon="percent"
							width="30%"
							title="Low Rates"
							text="Secure your terms with today's low interest rates to guarantee your home remains budget-friendly,
							and builds more equity over a shorter span."
						/>
					</div>
					<div className="col-md-4">
						<SmallCard
							icon="dollar-sign"
							width="30%"
							title="Home Refinance"
							text="Use your equity to your advantage. Payoff debt at low rates. Make home improvements & increase
							your value. See what can your equity do for you?"
						/>
					</div>
				</div>

				<div className="row mx-3 my-5 pb-5">
					<div className="col-md-4">
						<SmallCard
							icon="search-location"
							width="30%"
							title="Property Evaluation"
							text="Having a home value report puts you in the best position to assess all your options before
							moving forward."
						/>
					</div>
					<div className="col-md-4">
						<SmallCard
							icon="money-check-alt"
							width="30%"
							title="Fast Funding"
							text="Our process and technology simplify the mortgage process, and get you from start to finish
							in a flash."
						/>
					</div>
					<div className="col-md-4">
						<SmallCard
							icon="vote-yea"
							width="30%"
							title="Quick Approvals"
							text="Our process is fully digital, and user friendly. We can secure your loan approval in the
							same day - What are you waiting for?"
						/>
					</div>
				</div>


				<div className="jumbotron jumbotron-fluid mb-0"  style={{ backgroundColor: '#0b143d', color: '#f5f5f5' }}>
					<div className="container-fluid">
						<div className="row mb-3">
							<div className="col-md-10 offset-md-1">
								<h2 className="display-4">Our Mission</h2>
								<p className="lead mt-4 mb-0" style={{ fontWeight: '500' }} >A mortgage provides more than four walls
									and a roof over your head.
								</p>
								<p className="lead mt-0 mb-0" style={{ fontWeight: '500' }} >It's a place to call home, to raise your
									family, make memories with friends, and build communities.
								</p>
								<p className="lead mt-0" style={{ fontWeight: '500' }} >It's meeting personal financial goals and an
									investment in your future.
								</p>
								<p className="lead mt-4" style={{ fontWeight: '500' }} >At Lakeway Lending, we tailor your mortgage to
									fit your unique needs and goals.
								</p>
							</div>
						</div>

						<div className="row mx-3">
							<div className="col-md-10 offset-md-1 my-3">
								<Button href="https://conv-purchase-11482-mg.secure-clix.com/" outline size="lg" color="primary"
								        className="red-outline mx-5 my-3 px-5"
								        style={{ position: 'relative', zIndex: '10', fontWeight: '600' }}>
									HOME QUALIFIER
								</Button>

								<Button href="https://conv-refi-11482-mg.secure-clix.com/" outline size="lg" color="primary"
								        className="red-outline mx-5 my-3 px-5"
								        style={{ position: 'relative', zIndex: '10', fontWeight: '600' }}>
									REFI QUALIFIER
								</Button>
							</div>
						</div>

						<div className="row mt-4">
							<div className="col-md-8 offset-md-2">
								<div className="embed-responsive embed-responsive-21by9 border border-light rounded-sm">
									<iframe title="intro-video" className="embed-responsive-item" loading="lazy" src="https://www.youtube.com/embed/Z5bVH4vvsyk?version=3&loop=0&playlist=Z5bVH4vvsyk"></iframe>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}