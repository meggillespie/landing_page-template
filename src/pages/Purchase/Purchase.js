/**
 * Created by meg on 12/20/20.
 */
import React, { Component } from 'react';
import { LeadForm } from '../../components/LeadForm/LeadForm';

export class Purchase extends Component {
	render () {
		return(
			<div className="row" >
				<div className="col-md-10 offset-md-1" style={{ marginTop: '21vh' }}>
					<h2 className="display-4 pt-2">Home Purchase Qualifier</h2>
					<h3 className="lead text-muted mb-5">Get Pre-Qualified Online Now</h3>

					<div className="row mb-2 mt-3 ">
						<div className="col-md-10 offset-md-1"
						     style={{
						     	paddingLeft: '10vh', paddingRight: '10vh',
			            borderRadius: '4px 4px 4px 4px', border: 'solid 10px #0b143d',
			            boxShadow: '0 30px 40px rgba(0,0,0,4)'
						     }}
						>
							<LeadForm formIndicator="purchase" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}