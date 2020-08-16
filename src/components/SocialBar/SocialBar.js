import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class SocialBar extends Component {
	render () {
		return(
			<div className="pagewide py-1 px-2 d-none d-lg-block fixed-top bg-light border-bottom shadow" style={{borderColor: '#999'}}>
				<div className="row d-flex align-items-end">

					<div className="col-md-10 col-lg-6"></div>

					<div className="col-md-5 col-lg-6 ml-lg-0">

						<div className="text-md-right font-weight-light font-small">
							<ul className="list-unstyled list-inline">
								<li className="list-inline-item">
									<a href="tel:+15126428688">Call: (512) 642-8688 </a>
								</li>
								<li className="list-inline-item"> |
								</li>
								<li className="list-inline-item">
									<a href="mailto:megan@lakewaylending.com">Megan@LakewayLending.com</a>
								</li>
								{/*<li className="list-inline-item"> |*/}
								{/*</li>*/}
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
							</ul>
						</div>

					</div>

				</div>

			</div>
		);
	}
}