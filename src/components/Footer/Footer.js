import React, { Component }  from 'react';
import logo from '../../media/brand-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.scss';

export class Footer extends Component {
	render () {
		let currentYear = new Date();

		return (
			<footer className="page-footer font-small mdb-color pt-4">

				<div className="container text-center text-md-left">

					<div className="row text-center text-md-left mt-3 pb-3">

						<div className="col-md-3 col-lg-3 col-xl-3 mx-auto">
							<a href="/">
								<img src={logo} width="155" height="50" className="img-fluid mb-3" alt="Lakeway Lending Logo" style={{ filter: 'none' }}/>
							</a>
							<p>Buy a home, or refinance with LakewayLending.com. Your online resource for personalized mortgage solutions, fast customized quotes, great rates,
								& service with integrity.</p>
						</div>

						<hr className="w-100 clearfix d-md-none" />

							<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
								<h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
								<p>
									<a href="/home-loans">Home Loans</a>
								</p>
								<p>
									<a href="/home-refinance">Refinance</a>
								</p>
								<p>
									<a href="/veterans-loan">VA Loans</a>
								</p>
								<p>
									<a href="/reverse-mortgage">Reverse Mortgage</a>
								</p>
							</div>

							<hr className="w-100 clearfix d-md-none" />

									<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
									<h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
									<p>
										<a href="https://portal.mortgagecircles.com/1003N/ouB" target="_blank" rel="noopener noreferrer">Apply Now</a>
									</p>
									<p>
										<a href="/mortgage-calculators">Calculators</a>
									</p>
									<p>
										<a href="/mortgage-blog">Video Blog</a>
									</p>
										<p>
											<a href="/contact">Contact</a>
										</p>
								</div>

									<hr className="w-100 clearfix d-md-none" />

											<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
										<h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
										<p>
											<FontAwesomeIcon icon="home" className="mr-3"/> Lakeway, TX 78738, US</p>
										<p>
											<FontAwesomeIcon icon="envelope" className="mr-3"/> info@lakewaylending.com</p>
										<p>
											<FontAwesomeIcon icon="phone" className="mr-3"/> + 1 262 955 3478</p>
										<p>
											<FontAwesomeIcon icon="print" className="mr-3"/> + 1 234 567 8910</p>
									</div>

					</div>

					<hr />

						<div className="row d-flex align-items-center">

							<div className="col-md-10 col-lg-8">

								<p className="text-center text-md-left">&copy; { currentYear.getFullYear() } Lakeway Lending. All rights reserved. NMLS# 123456
								</p>

							</div>

							<div className="col-md-5 col-lg-4 ml-lg-0">

								<div className="text-center text-md-right">
									<ul className="list-unstyled list-inline">
										<li className="list-inline-item">
											<a href="/" className="btn-floating btn-sm rgba-white-slight mx-1">
												<FontAwesomeIcon icon={['fab', 'facebook-f']} />
											</a>
										</li>
										<li className="list-inline-item">
											<a href="/" className="btn-floating btn-sm rgba-white-slight mx-1">
												<FontAwesomeIcon icon={['fab', 'twitter']} />
											</a>
										</li>
										<li className="list-inline-item">
											<a href="/" className="btn-floating btn-sm rgba-white-slight mx-1">
												<FontAwesomeIcon icon={['fab', 'google-plus-g']} />
											</a>
										</li>
										<li className="list-inline-item">
											<a href="/" className="btn-floating btn-sm rgba-white-slight mx-1">
												<FontAwesomeIcon icon={['fab', 'linkedin-in']} />
											</a>
										</li>
									</ul>
								</div>

							</div>

						</div>

				</div>

			</footer>
		);
	}
}