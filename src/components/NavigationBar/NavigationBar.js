import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../media/brand-logo.png';
import './NavigationBar.scss';
import {
	Collapse, Navbar, NavbarToggler,
	NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap'

export class NavigationBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
			scrollTopArr: [],
			navStyle: {
				backgroundColor: 'transparent',
			},
			fontWeight: 'bold',
			fontSize: '16px',
			logoWidth: '175',
			logoHeight: '75'
		};

		this.controlNavStyle = this.controlNavStyle.bind(this);
		this.toggleNav = this.toggleNav.bind(this);
	}

	componentDidMount() {

		window.addEventListener('load',
			(e) => {
				this.controlNavStyle(e)
			}, true);

		window.addEventListener('resize',
			(e) => {
				this.controlNavStyle(e)
			}, true);


		window.addEventListener('scroll',
			(e) => {
				window.requestAnimationFrame( () => {
					this.controlNavStyle(e)
				});
			}, true);

	}

	componentWillUnmount() {
		window.removeEventListener('load', this.controlNavStyle);
		window.removeEventListener('resize', this.controlNavStyle);
		window.removeEventListener('scroll', this.controlNavStyle);
	}

	controlNavStyle(e) {
		if ( (e.currentTarget && e.currentTarget.innerWidth < 1024) || e.target.clientWidth < 1024  ) {
			this.setState({
				navStyle: {
					background: 'rgba(255, 255, 255)',
					boxShadow: '0px 5px 5px grey',
				}
			});
		}
		else if ( e.target.scrollTop > 15  && this.state.navStyle.backgroundColor !== 'rgba(255, 255, 255)') {
			this.setState({
				navStyle: {
					background: 'rgba(255, 255, 255)',
					boxShadow: '0px 5px 5px grey',
					WebkitTransitionProperty: 'background',
					WebkitTransitionDuration: '1.75s',
					WebkitTransitionTimingFunction: 'linear',
					transitionProperty: 'background',
					transitionDuration: '1.75s',
					transitionTimingFunction: 'linear'
				},
				scrollTopArr: this.state.scrollTopArr.concat(e.target.scrollTop)
			});
		}
		else {
			this.setState({
				navStyle: {
					background: 'rgba(255, 255, 255, 0)',
					boxShadow: 'none',
					WebkitTransitionProperty: 'background',
					WebkitTransitionDuration: '1.75s',
					WebkitTransitionTimingFunction: 'linear',
					transitionProperty: 'background',
					transitionDuration: '1.75s',
					transitionTimingFunction: 'linear'
				}
			});
		}
	}

	toggleNav() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render () {
		return(
			<Navbar style={ this.state.navStyle } expand="lg" fixed={`top`}>
				<NavbarBrand href="/" rel="preconnect" className="my-2">
					<img
						alt="Lakeway Lending Logo"
						src={ logo }
						width={this.state.logoWidth}
						height={this.state.logoHeight}
						className="d-inline-block align-top"
					/>
				</NavbarBrand>
				<NavbarToggler className="custom-toggler" onClick={this.toggleNav} />
				<Collapse navbar isOpen={ this.state.isOpen } style={{ 'backgroundColor': this.state.isOpen && this.state.navStyle.backgroundColor === 'rgba(255, 255, 255)' ? '#fff' : 'transparent' }} >
					<Nav className="ml-auto my-md-3" navbar style={{ fontSize: this.state.fontSize, fontWeight: this.state.fontWeight }}>

						<NavItem>
							<NavLink href="#" rel="preconnect" className="mr-3">
								<a href="tel:+15126428688">
									<ul className="list-inline">
										<li className="list-inline-item">
											<FontAwesomeIcon icon="phone" className=" text-xs-center mr-1" size="2x" rotation={90} />
										</li>

										<li className="list-inline-item">
											<span>Call Now</span>
											<br/>
											<span style={{ fontWeight: '400' }}>(512) 642-8688</span>
										</li>
									</ul>
								</a>
							</NavLink>
						</NavItem>

						<NavItem className="align-middle">
							<NavLink href="#" rel="preconnect" className="mr-3">
								<a href="sms:+15126428688">
									<ul className="list-inline">
										<li className="list-inline-item">
											<FontAwesomeIcon icon="comments" className="mr-1" size="2x"/>
										</li>

										<li className="list-inline-item">
											<span>Message Our</span>
											<br/>
											<span style={{ fontWeight: '400' }}>Loan Advisors</span>
										</li>
									</ul>
								</a>

								{/*<a href="mailto:megan@lakewaylending.com">*/}
									{/*<ul className="list-inline">*/}
										{/*<li className="list-inline-item">*/}
											{/*<FontAwesomeIcon icon="envelope" className="align-self-center text-xs-center mr-1" size="2x"/>*/}
										{/*</li>*/}

										{/*<li className="list-inline-item">*/}
											{/*<span>Message Our</span>*/}
											{/*<br/>*/}
											{/*<span style={{ fontWeight: '400' }}>Loan Advisors</span>*/}
										{/*</li>*/}
									{/*</ul>*/}
								{/*</a>*/}


							</NavLink>
						</NavItem>

						<a href="https://www.blink.mortgage/app/signup/p/lakewaylendingllc/megangillespie" rel="noopener noreferrer preconnect" target="_blank">
							{ this.state.fontSize === '14px' ? (
								<button
									className="btn btn-outline-primary btn-sm my-auto mx-4"
									type="button"
								>Apply</button>
							) : (
								<button
									className="btn btn-outline-primary btn-lg my-auto mx-4"
									type="button"
								>Apply</button>)
							}
						</a>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}