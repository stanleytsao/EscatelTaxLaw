import React from 'react';

const Home = () => {
	return (
		<main className="container">
			<div className="row">
				<div className="col-md-9">
					<div className="welcome">
						<h3>Welcome to Escatel Tax Law</h3><br />
						<p>"A boutique law firm providing clients innovative and practical solutions to a wide range of tax issues."</p><br />
						<p>"A boutique Bay Area law firm exclusively engaged in the practice of federal, state & local taxes, international taxation and estate and gift taxes."</p><br />
						<p>“A boutique law firm exclusively engaged in the practice of federal and state income tax, business formation and estate and gift tax law.”</p><br />
					</div>
					
				</div>
				<div className="col-md-3 text-center">
					<div className="links">
						<h4>News, Events, Updates...</h4><br />
						<button>LinkedIn</button><br />
						<button>Twitter</button><br />
						<button>Social Media</button><br />
					</div>
					
				</div>
			</div>
		</main>
	)	
}

export default Home