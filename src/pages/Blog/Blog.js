import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Blog extends Component {
	render () {
		return(
			<div>
				<div className="jumbotron jumbotron-fluid mb-0 bg-light " style={{ paddingTop: '100px' }}>
					<div className="container">
						<h2 className="display-4 pt-5">Mortgage Videos</h2>
						<p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					</div>
				</div>

				<section className="my-5">
					<div className="container">
						<div className="row my-5">
							<div className="col-md-12 mx-auto">
								<div className="row">
									<div className="input-group col-md-6 offset-md-3 mb-5">
										<input
											className="form-control py-2 border-right-0 border" type="search"
							        placeholder="Filter by topic" id="example-search-input"/>
										<span className="input-group-append">
				              <button className="btn btn-outline-secondary border-left-0 border" type="button">
					              <FontAwesomeIcon icon="search"/>
				              </button>
				            </span>
									</div>
								</div>

								<hr className="mt-2 mb-5" />

								<div className="row text-center text-lg-left">

									<div className="col-lg-3 col-md-4 col-6 mb-5">
										<div className="embed-responsive embed-responsive-4by3 border rounded-sm">
											<iframe title="placeholder-video" className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
										</div>
									</div>
									<div className="col-lg-3 col-md-4 col-6 mb-5">
										<div className="embed-responsive embed-responsive-4by3 border rounded-sm">
											<iframe title="placeholder-video" className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
										</div>
									</div>
									<div className="col-lg-3 col-md-4 col-6 mb-5">
										<div className="embed-responsive embed-responsive-4by3 border rounded-sm">
											<iframe title="placeholder-video" className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
										</div>
									</div>
									<div className="col-lg-3 col-md-4 col-6 mb-5">
										<div className="embed-responsive embed-responsive-4by3 border rounded-sm">
											<iframe title="placeholder-video" className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
										</div>
									</div>
									<div className="col-lg-3 col-md-4 col-6 mb-5">
										<div className="embed-responsive embed-responsive-4by3 border rounded-sm">
											<iframe title="placeholder-video" className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
										</div>
									</div>
									<div className="col-lg-3 col-md-4 col-6 mb-5">
										<div className="embed-responsive embed-responsive-4by3 border rounded-sm">
											<iframe title="placeholder-video" className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
										</div>
									</div>
									<div className="col-lg-3 col-md-4 col-6 mb-5">
										<div className="embed-responsive embed-responsive-4by3 border rounded-sm">
											<iframe title="placeholder-video" className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
										</div>
									</div>
									<div className="col-lg-3 col-md-4 col-6 mb-5">
										<div className="embed-responsive embed-responsive-4by3 border rounded-sm">
											<iframe title="placeholder-video" className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
										</div>
									</div>
									<div className="col-lg-3 col-md-4 col-6 mb-5">
										<div className="embed-responsive embed-responsive-4by3 border rounded-sm">
											<iframe title="placeholder-video" className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
										</div>
									</div>
									<div className="col-lg-3 col-md-4 col-6 mb-5">
										<div className="embed-responsive embed-responsive-4by3 border rounded-sm">
											<iframe title="placeholder-video" className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
										</div>
									</div>
									<div className="col-lg-3 col-md-4 col-6 mb-5">
										<div className="embed-responsive embed-responsive-4by3 border rounded-sm">
											<iframe title="placeholder-video" className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
										</div>
									</div>
									<div className="col-lg-3 col-md-4 col-6 mb-5">
										<div className="embed-responsive embed-responsive-4by3 border rounded-sm">
											<iframe title="placeholder-video" className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
										</div>
									</div>
								</div>

								<hr className="mt-2 mb-5" />

							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}