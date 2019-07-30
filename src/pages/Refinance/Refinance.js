import React, { Component } from 'react';
import { MainCard } from '../../components/MainCard/MainCard';
import { JumboFooterHeader } from '../../components/JumboFooterHeader/JumboFooterHeader';
import { BouncingChevron } from '../../components/BouncingChevron/BouncingChevron';
import refinanceBckgrd from '../../media/Room16.jpeg';

export class Refinance extends Component {
	render () {
		return(
			<div className="row">
				<div className="col-md-12">
					<div className="row background-container">
						<div className="col-md-12">
							<div className="media-overlay">
								<img src={ refinanceBckgrd } alt="home page background" className="img-fluid" style={{ width: '100%' }} />
								<MainCard
									textAlignment="text-left"
									top="45%"
									left="50%"
									heading="Refinance To"
									subHeading="Meet Your Goals"
									text="Lower your rate. Pay off your loan faster."
									numberOfButtons="1"
									button1Text="Get Started"
									button1Link="https://raycerobinson.floify.com/apply" rel="noopener noreferrer preconnect" target="_blank"
								/>
								<BouncingChevron />
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-10 offset-md-1">
							<h2 className="display-4 my-3">Mortgage Refinance</h2>
							<p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
								et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat.
							</p>
							<p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
								et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
								officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
					</div>

					<JumboFooterHeader
						firstIcon="comments"
						firstTitle="Chat With Us"
						firstText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rerum et sed quos quaerat enim."
						secondIcon="smile"
						secondTitle="Happy Customers"
						secondText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rerum et sed quos quaerat enim."
						thirdIcon="bolt"
						thirdTitle="Fast Support"
						thirdText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rerum et sed quos quaerat enim."
					/>

				</div>
			</div>
		);
	}
}