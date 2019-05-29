import React, { Component } from 'react';

export class Testimonials extends Component {
	render () {
		return(
			<div>
				<div className="jumbotron jumbotron-fluid mb-0 bg-light " style={{ paddingTop: '100px' }}>
					<div className="container">
						<h2 className="display-4 pt-5">Testimonials</h2>
					</div>
				</div>

				<div className="row my-5">
					<div className="col-md-12">
						<section className="team-section text-center my-5">
							<div className="row my-5 text-center">
								<div className="col-md-4 mb-md-0 mb-5">
									<div>
										<div className="mx-auto">
											<img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" className="rounded-circle z-depth-1 img-fluid"
											     style={{ height: '150px', width: '150px' }}/>
										</div>
										<h4 className="font-weight-bold dark-grey-text mt-4">Anna Deynah</h4>
										<h6 className="font-weight-bold blue-text my-3">Client</h6>
										<p className="font-weight-normal dark-grey-text">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
											eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
										</p>
										<div className="orange-text">
											<i className="fas fa-star"> </i>
											<i className="fas fa-star"> </i>
											<i className="fas fa-star"> </i>
											<i className="fas fa-star"> </i>
											<i className="fas fa-star-half-alt"> </i>
										</div>
									</div>

								</div>

								<div className="col-md-4 mb-md-0 mb-5">
									<div>
										<div className="mx-auto">
											<img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" className="rounded-circle z-depth-1 img-fluid"
											     style={{ height: '150px', width: '150px' }}/>
										</div>
										<h4 className="font-weight-bold dark-grey-text mt-4">John Doe</h4>
										<h6 className="font-weight-bold blue-text my-3">Realtor</h6>
										<p className="font-weight-normal dark-grey-text">
											t enim ad minima veniam, quis nostrum exercitationem ullam
											corporis suscipit laboriosam, nisi ut aliquid commodi.
										</p>
										<div className="orange-text">
											<i className="fas fa-star"> </i>
											<i className="fas fa-star"> </i>
											<i className="fas fa-star"> </i>
											<i className="fas fa-star"> </i>
											<i className="fas fa-star"> </i>
										</div>
									</div>

								</div>

								<div className="col-md-4">
									<div>
										<div className="mx-auto">
											<img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle z-depth-1 img-fluid"
											     style={{ height: '150px', width: '150px' }}/>
										</div>
										<h4 className="font-weight-bold dark-grey-text mt-4">Maria Kate</h4>
										<h6 className="font-weight-bold blue-text my-3">Client</h6>
										<p className="font-weight-normal dark-grey-text">
											At vero eos et accusamus et iusto odio dignissimos ducimus qui
											blanditiis praesentium voluptatum deleniti atque corrupti.
										</p>
										<div className="orange-text">
											<i className="fas fa-star"> </i>
											<i className="fas fa-star"> </i>
											<i className="fas fa-star"> </i>
											<i className="fas fa-star"> </i>
											<i className="far fa-star"> </i>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>




				<section className="text-center my-5 p-1">
					<div className="row">

						<div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
							<div className="card">
								<div className="card-header border-0 py-5"
									style={{ backgroundColor: '#0b143d' }}>
								</div>
								<div className="mx-auto">
									<img
										src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
										className="border border-light rounded-circle img-fluid"
										style={{ height: '150px', width: '150px', marginTop: '-50%', borderWidth: '10px' }}
									/>
								</div>
								<div className="card-body">
									<h4 className="font-weight-bold mb-4">John Doe</h4>
									<h6 className="font-weight-bold blue-text my-3">Client</h6>
									<hr/>
									<p className="dark-grey-text mt-4">Neque cupiditate assumenda in maiores repudiandae mollitia architecto.</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
							<div className="card">
								<div className="card-header border-0 py-5"
									style={{ backgroundColor: '#0b143d' }}>
								</div>
								<div className="mx-auto">
									<img
										src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
										className="border border-5 border-light rounded-circle img-fluid"
										style={{ height: '150px', width: '150px', marginTop: '-50%', borderWidth: '15px !important' }}
									/>
								</div>
								<div className="card-body">
									<h4 className="font-weight-bold mb-4">Jane Doe</h4>
									<h6 className="font-weight-bold blue-text my-3">Realtor</h6>
									<hr/>
									<p className="dark-grey-text mt-4">Neque cupiditate assumenda in maiores repudiandae mollitia architecto.</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
							<div className="card">
								<div className="card-header border-0 py-5"
									style={{ backgroundColor: '#0b143d' }}>
								</div>
								<div className="mx-auto">
									<img
										src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
										className="border border-5 border-light rounded-circle img-fluid"
										style={{ height: '150px', width: '150px', marginTop: '-50%', borderWidth: '15px !important' }}
									/>
								</div>
								<div className="card-body">
									<h4 className="font-weight-bold mb-4">Jill Doe</h4>
									<h6 className="font-weight-bold blue-text my-3">Client</h6>
									<hr/>
									<p className="dark-grey-text mt-4">Neque cupiditate assumenda in maiores repudiandae mollitia architecto.</p>
								</div>
							</div>
						</div>

					</div>
				</section>
			</div>
		);
	}
}
