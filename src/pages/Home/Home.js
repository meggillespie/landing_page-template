import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { MainCard } from '../../components/MainCard/MainCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import homeBckgrd from '../../media/home-min.jpeg';
import logoImg from '../../media/logo-iconOnly-black-min.png';
import './Home.scss';

export class Home extends Component {
	render () {
		return(
			<div>
				<div className="row background-container">
					<div className="col-md-12">
						<div className="media-overlay" style={{ overflowY: 'hidden', boxShadow: '0px 5px 5px grey' }}>
							<img src={ homeBckgrd } alt="home background" className="img-fluid" style={{ marginTop: '-10%', width: '100%' }} />
							<img src={ logoImg } className="mt-3 main-card-img" alt="embossed company logo"
							     style={{ position: 'absolute', width: 'auto', zIndex: '1' }}/>
							<MainCard
								textAlignment="text-center"
								heading="How Much Can You Save?"
								text1="Get Your Rate & Qualify Today For Free"
								text2="Low Rates & Fast Closings"
								text3="Get Your Quote Now!"
								numberOfButtons="2"
							  button1Text="BUY A HOME"
								button1Link="https://conv-purchase-11482-mg.secure-clix.com/"
								button2Text="REFINANCE"
								button2Link="https://conv-refi-11482-mg.secure-clix.com/"
							/>
						</div>
					</div>
				</div>

				<div className="row mx-3 anchor-tag" style={{ paddingTop: '100px'}}>
					<div className="col-md-10 offset-md-1">
						<h2 className="display-4 pt-2">What We Do</h2>
						<p className="lead text-muted mb-0" style={{ fontWeight: '600' }}>Fast, Easy, Stress Free Mortgage Process</p>
						<p className="lead text-muted mt-0" style={{ fontWeight: '600' }}>Online Quotes & Same Day Approval</p>
					</div>
				</div>

				<div className="row mx-3 my-4">
					<div className="col-md-10 offset-md-1 mb-4">
						<Button href="https://conv-purchase-11482-mg.secure-clix.com/" color="primary" size="lg"
						        className="blue-button mx-5 my-3 py-3 px-5" style={{ position: 'relative', zIndex: '10', fontWeight: '600', color: '#fff' }}>HOME PURCHASE</Button>
						<Button href="https://home-valuation-11482-mg.secure-clix.com/" color="primary" size="lg"
						        className="red-button mx-5 my-3 p-3" style={{ position: 'relative', zIndex: '10', fontWeight: '600', color: '#fff' }}>HOME VALUE ESTIMATOR</Button>
						<Button href="https://conv-refi-11482-mg.secure-clix.com/" color="primary" size="lg"
						        className="blue-button mx-5 my-3 py-3 px-5" style={{ position: 'relative', zIndex: '10', fontWeight: '600', color: '#fff' }}>HOME REFINANCE</Button>
					</div>
				</div>

				<div className="row mx-3 my-5">
					<div className="col-md-4">
						<FontAwesomeIcon icon="home" className="text-xs-center mr-1 mt-2 mb-3" size="3x" style={{ color: '#ed1c22' }} />
						<h4 style={{ textShadow: '1px 1px 2px #595959' }} >Home Loans</h4>
						<p className="lead">Conventional, VA, FHA & USDA loans that benefit from today’s low mortgage rates so you can stop wasting money on rent, and buy your dream home.</p>
					</div>
					<div className="col-md-4">
						<FontAwesomeIcon icon="percent" className="text-xs-center mr-1 mt-2 mb-3" size="3x" style={{ color: '#ed1c22' }} />
						<h4 style={{ textShadow: '1px 1px 2px #595959' }} >Low Rates</h4>
						<p className="lead">Secure your terms with today's low interest rates to guarantee your home remains budget-friendly, and builds more equity over a shorter span.</p>
					</div>
					<div className="col-md-4">
						<FontAwesomeIcon icon="dollar-sign" className="text-xs-center mr-1 mt-2 mb-3" size="3x" style={{ color: '#ed1c22' }} />
						<h4 style={{ textShadow: '1px 1px 2px #595959' }} >Home Refinance</h4>
						<p className="lead">Use your equity to your advantage...Payoff debt at low rates. Make home improvements & increase your value...What can your equity do for you?</p>
					</div>
				</div>

				<div className="row mx-3 my-5 pb-5">
					<div className="col-md-4">
						<FontAwesomeIcon icon="search-location" className="text-xs-center mr-1 mt-2 mb-3" size="3x" style={{ color: '#ed1c22' }} />
						<h4 style={{ textShadow: '1px 1px 2px #595959' }} >Property Evaluation</h4>
						<p className="lead">Having a home value report puts you in the best position to assess all your options before moving forward.</p>
					</div>
					<div className="col-md-4">
						<FontAwesomeIcon icon="money-check-alt" className="text-xs-center mr-1 mt-2 mb-3" size="3x" style={{ color: '#ed1c22' }}  />
						<h4 style={{ textShadow: '1px 1px 2px #595959' }} >Fast Fundings</h4>
						<p className="lead">Our process and technology simplify the mortgage process, and get you from start to finish in a flash.</p>
					</div>
					<div className="col-md-4">
						<FontAwesomeIcon icon="vote-yea" className="text-xs-center mr-1 mt-2 mb-3" size="3x" style={{ color: '#ed1c22' }} />
						<h4 style={{ textShadow: '1px 1px 2px #595959' }} >Quick Approvals</h4>
						<p className="lead">Our process is fully digital, and user friendly. We can secure your loan approval in the same day - What are you waiting for?</p>
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
								<p className="lead mt-4" style={{ fontWeight: '500' }} >At Lakeway Lending, we tailor your mortgage to fit your unique needs and goals.</p>
							</div>
						</div>

						<div className="row mx-3">
							<div className="col-md-10 offset-md-1 my-3">
								<Button href="https://conv-purchase-11482-mg.secure-clix.com/" outline size="lg" color="primary" className="red-outline mx-5 my-3 px-5" style={{ position: 'relative', zIndex: '10', fontWeight: '600' }}>PURCHASE QUALIFIER</Button>

								<Button href="https://conv-refi-11482-mg.secure-clix.com/" outline size="lg" color="primary" className="red-outline mx-5 my-3 px-5" style={{ position: 'relative', zIndex: '10', fontWeight: '600' }}>REFINANCE QUALIFIER</Button>
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