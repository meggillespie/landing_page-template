import React, { Component } from 'react';
import logo from '../../media/brand-logo.png';
import './NavigationBar.scss';
import {
	Collapse, Navbar, NavbarToggler,
	NavbarBrand, Nav, NavItem, NavLink,
	UncontrolledDropdown, DropdownToggle,
	DropdownMenu, DropdownItem
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
			fontSize: '20px',
			logoWidth: '190',
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
					// WebkitTransitionProperty: 'background',
					// WebkitTransitionDuration: '1s',
					// WebkitTransitionTimingFunction: 'ease',
					// transitionProperty: 'background',
					// transitionDuration: '1s',
					// transitionTimingFunction: 'ease'
				}
			});
		}
		else if ( e.target.scrollTop > 15  && this.state.navStyle.backgroundColor !== 'rgba(255, 255, 255)') {
			this.setState({
				navStyle: {
					background: 'rgba(255, 255, 255)',
					boxShadow: '0px 5px 5px grey',
					WebkitTransitionProperty: 'background',
					WebkitTransitionDuration: '1s',
					WebkitTransitionTimingFunction: 'ease',
					transitionProperty: 'background',
					transitionDuration: '1s',
					transitionTimingFunction: 'ease'
				},
				scrollTopArr: this.state.scrollTopArr.concat(e.target.scrollTop)
			});
		}
		// else if ( e.target.scrollTop >= 80 && this.state.navStyle.backgroundColor !== 'rgba(255, 255, 255)') {
		// 	this.setState({
		// 		fontWeight: 'bold',
		// 		fontSize: '14px',
		// 		logoWidth: '100',
		// 		logoHeight: '50',
		// 		navStyle: {
		// 			background: 'rgba(255, 255, 255)',
		// 			boxShadow: '0px 5px 5px grey',
		// 			height: '55px'
		// 		},
		// 		scrollTopArr: this.state.scrollTopArr.concat(e.target.scrollTop)
		// 	});
		// }
		else {
			this.setState({
				navStyle: {
					background: 'rgba(255, 255, 255, 0)',
					boxShadow: 'none',
					WebkitTransitionProperty: 'background',
					WebkitTransitionDuration: '1.5s',
					WebkitTransitionTimingFunction: 'ease',
					transitionProperty: 'background',
					transitionDuration: '1.5s',
					transitionTimingFunction: 'ease'
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
				<NavbarBrand href="/" rel="preconnect">
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
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Loan Programs
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem href="/home-loans" rel="preconnect">
									Home Loans
								</DropdownItem>
								<DropdownItem href="/home-refinance" rel="preconnect">
									Refinance
								</DropdownItem>
								<DropdownItem href="/reverse-mortgage" rel="preconnect">
									Reverse
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>

						<NavItem>
							<NavLink href="/blog" rel="preconnect">Blog</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/mortgage-rates" rel="preconnect">Low Rates</NavLink>
						</NavItem>

						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Resources
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem href="/mortgage-calculators" rel="preconnect">
									Calculators
								</DropdownItem>
								<DropdownItem href="/blog" rel="preconnect">
									Video Gallery
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>

						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret className="mr-lg-3">
								Company
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem href="/about" rel="preconnect">
									About
								</DropdownItem>
								<DropdownItem href="/testimonials" rel="preconnect">
									Testimonials
								</DropdownItem>
								<DropdownItem href="/contact" rel="preconnect">
									Contact
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>

						<a href="https://raycerobinson.floify.com/apply" rel="noopener noreferrer preconnect" target="_blank">
							{ this.state.fontSize === '14px' ? (
								<button
									className="btn btn-outline-primary btn-sm mt-md-3 mt-lg-1"
									type="button"
								>Apply</button>
							) : (
								<button
									className="btn btn-outline-primary btn-lg mt-md-3 mt-lg-1"
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