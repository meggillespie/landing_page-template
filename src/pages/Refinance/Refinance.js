/**
 * Created by meg on 12/20/20.
 */
import React, { Component } from 'react';
import { LeadForm } from '../../components/LeadForm/LeadForm';

export class Refinance extends Component {
	render () {
		return(
			<div className="row" style={{ backgroundColor: '#fff' }}>
				<div className="col-md-10 offset-md-1" style={{ marginTop: '21vh'}}>
					<h2 className="display-4 pt-2">Refinance Rate Checker</h2>
					<h3 className="lead text-muted mb-5">Get Your Estimated Savings Online Now</h3>

					<div className="row mb-2 mt-3 ">
						<div className="col-md-10 offset-md-1"
						     style={{
						     	paddingLeft: '10vh', paddingRight: '10vh',
						      borderRadius: '4px 4px 4px 4px', border: 'solid 10px #0b143d',
						      boxShadow: '0 30px 40px rgba(0,0,0,4)'
						     }}
						>
							<LeadForm formIndicator="refinance" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}