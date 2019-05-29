import React, { Component } from 'react';
import { LLCard } from '../../components/LLCard/LLCard';
import { BouncingChevron } from '../../components/BouncingChevron/BouncingChevron';
// import purchaseBckgrd from '../../media/purchase-home4.jpeg';
import purchaseBckgrd from '../../media/Room11.jpeg';
import { MainCard } from '../../components/MainCard/MainCard';
import loan from '../../media/loan.png';
import military from '../../media/military.png';
import fha from '../../media/refinance.png';
import './Purchase.scss';
// import { VideoHeader } from '../../components/VideoHeader/VideoHeader';
// import vid from '../../media/purchase2.mov';

export class Purchase extends Component {
	render () {
		return(
			<div>
			{/*<div className="row">*/}
				{/*<div className="col-md-12">*/}
					<div className="row background-container">
						<div className="col-md-12">
							<div className="media-overlay">
								<img src={ purchaseBckgrd } alt="home page background" className="img-fluid" style={{ width: '100%' }} />
								<MainCard
									textAlignment="text-left"
									top="47%"
									left="50%"
									heading="Buying A Home"
									subHeading="Made Easy"
									text="Apply Easily Online"
									numberOfButtons="1"
									button1Text="Get Started"
									button1Link="https://raycerobinson.floify.com/apply" rel="noopener noreferrer preconnect" target="_blank"
								/>
								<BouncingChevron />
							</div>
						</div>
					</div>
					{/*<VideoHeader*/}
					{/*src={ vid }*/}
					{/*heading="Home Refinance"*/}
					{/*subHeading="Lorem Ipsum Dolor Sit Amet"*/}
					{/*/>*/}
					{/*<MainCard*/}
						{/*top="18%"*/}
						{/*left="50%"*/}
						{/*heading="Buy A Home"*/}
					  {/*subHeading="Apply Easily Online"*/}
					  {/*text="Conventional Loans, FHA & VA Loans"*/}
						{/*numberOfButtons="1"*/}
						{/*button1Text="Get Started"*/}
						{/*button1Link="https://portal.mortgagecircles.com/1003N/ouB"*/}
					{/*/>*/}

					<section>
						<div id="anchorTag" className="container-fluid" style={{  paddingTop: '100px', marginTop: '-70px' }}>
							<div className="row py-5">
								<div className="col-md-10 mx-auto">
									<h2 className="display-4">Home Loans</h2>
									<p className="lead mt-4">At Lakeway Lending, we believe Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
								</div>
							</div>

							<div className="row">
								<div className="col-md-3 mx-auto mb-5">
									<a href="/jumbo" className="btn btn-lg btn-block btn-outline-primary" role="button" aria-pressed="true">Jumbo</a>
								</div>
								<div className="col-md-3 mx-auto mb-5">
									<button type="button" className="btn btn-lg btn-block btn-outline-primary">Condo</button>
								</div>
								<div className="col-md-3 mx-auto mb-5">
									<button type="button" className="btn btn-lg btn-block btn-outline-primary">HELOC</button>
								</div>
							</div>

							<div className="row">
								<div className="col-md-3 mx-auto mb-5">
									<button type="button" className="btn btn-lg btn-block btn-outline-primary">Renovation</button>
								</div>
								<div className="col-md-3 mx-auto mb-5">
									<button type="button" className="btn btn-lg btn-block btn-outline-primary">New Construction</button>
								</div>
								<div className="col-md-3 mx-auto mb-5">
									<button type="button" className="btn btn-lg btn-block btn-outline-primary">Manufactured</button>
								</div>
							</div>

							<div className="row">
								<div className="col-md-3 mx-auto mb-5">
									<button type="button" className="btn btn-lg btn-block btn-outline-primary">Cash Out</button>
								</div>
								<div className="col-md-3 mx-auto mb-5">
									<button type="button" className="btn btn-lg btn-block btn-outline-primary">VA IRRLL</button>
								</div>
								<div className="col-md-3 mx-auto mb-5">
									<button type="button" className="btn btn-lg btn-block btn-outline-primary">USDA</button>
								</div>
							</div>

						</div>
					</section>

					<div className="jumbotron jumbotron-fluid mb-0 bg-light">
						<div className="container-fluid">

							<div className="card-deck mt-4">
								<LLCard
									link="/conventional-loan"
									src={ loan }
									alt="home loan icon"
									width="30%"
									title="Conventional Loans"
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
									link="/fha-loan"
									src={ fha }
									alt="FHA icon"
									width="30%"
									title="FHA Loans"
									text="Lower down payment Quis nostrud exercitation ullamco laboris nisi ut aliquip ex."
								/>
							</div>


						</div>
					</div>

					<div className="row my-5">
						<div className="col-md-12">
							<h2 className="display-4 mb-5">Mortgage Timeline</h2>
							<div className="timeline py-5">
								<div className="row">
									<div className="col-md-10 offset-md-1">
										<div className="timeline-container timeline-left w-50">
											<div className="timeline-content rounded p-2">
												<h4>Processing</h4>
												<p>After receiving your complete application. We begin gathering documents necessary to process and approve your loan.</p>
												<p className="text-sm font-weight-bold">After you have applied, do not:</p>
												<ul className="list-unstyled text-sm">
													<li>Apply for ANY new credit</li>
													<li>Make ANY major purchase</li>
													<li>Make ANY changes in your employment</li>
												</ul>
											</div>
										</div>

										<div className="timeline-container timeline-right w-50">
											<div className="timeline-content rounded p-2">
												<h4>Appraisal</h4>
												<p>During the appraisal process an independent appraiser will inspect the home you want to purchase and compare it to similar homes in the area to approximate its value.</p>
											</div>
										</div>

										<div className="timeline-container timeline-left w-50">
											<div className="timeline-content rounded p-2">
												<h4>Underwriting</h4>
												<p>The underwriter will review the loan documentation to verify all informationa and assure it meets the required standards to be approved.</p>
											</div>
										</div>

										<div className="timeline-container timeline-right w-50">
											<div className="timeline-content rounded p-2">
												<h4>Closing</h4>
												<p>At closing you will sign all final documents and receive the keys to your new home.</p>
											</div>
										</div>

									</div>
								</div>

							</div>

						</div>
					</div>

				{/*</div>*/}
			{/*</div>*/}
			</div>
		);
	}
}