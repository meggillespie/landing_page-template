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
							<p>Buy a home, or refinance with Lakeway Lending, LLC. Your online resource for personalized mortgage solutions, fast customized quotes, great rates,
								& service with integrity.</p>
						</div>

						<hr className="w-100 clearfix d-md-none" />

						<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
						</div>

						<hr className="w-100 clearfix d-md-none" />

						<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
						</div>

						<hr className="w-100 clearfix d-md-none" />

						<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
							<h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
							<p>
								<FontAwesomeIcon icon="envelope" className="mr-3"/> megan@lakewaylending.com</p>
							<p>
								<FontAwesomeIcon icon="phone" className="mr-3"/> (512) 642 8688</p>
							<p className="mb-0">
								<FontAwesomeIcon icon="home" className="mr-3"/> 2802 Flintrock Trace, #212</p>
							<p className="ml-4 pl-3">Lakeway, TX 78738</p>
						</div>
					</div>

					<hr />

						<div className="row d-flex align-items-center">

							<div className="col-md-10 offset-md-1">

								<p className="text-center text-md-center">&copy; { currentYear.getFullYear() } Lakeway Lending, LLC NMLS# 1916745 | Megan Gillespie NMLS# 1845419 | All Rights Reserved.
								</p>

							</div>

							{/*<div className="col-md-5 col-lg-4 ml-lg-0">*/}

								{/*<div className="text-center text-md-right">*/}
									{/*<ul className="list-unstyled list-inline">*/}
										{/*<li className="list-inline-item">*/}
											{/*<a href="/" className="btn-floating btn-sm rgba-white-slight mx-1">*/}
												{/*<FontAwesomeIcon icon={['fab', 'facebook-f']} />*/}
											{/*</a>*/}
										{/*</li>*/}
										{/*<li className="list-inline-item">*/}
											{/*<a href="/" className="btn-floating btn-sm rgba-white-slight mx-1">*/}
												{/*<FontAwesomeIcon icon={['fab', 'twitter']} />*/}
											{/*</a>*/}
										{/*</li>*/}
										{/*<li className="list-inline-item">*/}
											{/*<a href="/" className="btn-floating btn-sm rgba-white-slight mx-1">*/}
												{/*<FontAwesomeIcon icon={['fab', 'google-plus-g']} />*/}
											{/*</a>*/}
										{/*</li>*/}
										{/*<li className="list-inline-item">*/}
											{/*<a href="/" className="btn-floating btn-sm rgba-white-slight mx-1">*/}
												{/*<FontAwesomeIcon icon={['fab', 'linkedin-in']} />*/}
											{/*</a>*/}
										{/*</li>*/}
									{/*</ul>*/}
								{/*</div>*/}

							{/*</div>*/}

						</div>

				</div>

			</footer>
		);
	}
}