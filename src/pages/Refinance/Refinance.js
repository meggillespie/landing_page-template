/**
 * Created by meg on 12/20/20.
 */
import React, { Component } from 'react';
import { LeadForm } from '../../components/LeadForm/LeadForm';

export class Refinance extends Component {
	render () {
		return(
			<div className="row">
				<div className="col-md-10 offset-md-1" style={{ marginTop: '25vh'}}>

					<h1>Refinance Rate Checker</h1>

					<div className="row mb-5 mt-5">
						<div className="col-md-8 offset-md-2">
							<LeadForm formIndicator="refinance" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}