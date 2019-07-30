import React, { Component } from 'react';
import { MapContainer } from "../../components/MapContainer/MapContainer";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import atx from '../../media/Austin_skyline_blur.jpg';

export class Contact extends Component {
	render () {
		return(
			<div>
				<div className="row" style={{ paddingTop: '100px', marginTop: '-70px' }}>
					<div className="col-md-12">
						<div className="media-overlay">
							<img src={ atx } alt="contact page background" className="img-fluid" style={{ width: '100%' }} />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 pt-5 px-5">
						<h4 className="display-4">Let's Talk!</h4>
						<p className="px-5">Contact us by filling out the following form, sending a chat message, or call our office at the number below.</p>
						<ContactForm />
					</div>
					<div className="col-md-6">
						<MapContainer />
					</div>
				</div>
			</div>
		);
	}
}