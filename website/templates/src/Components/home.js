import React from 'react';

const Home = () => {
	return (
		<main id="main" className="container">
			
			<div id="home" style={{display: 'block'}}>
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

			<div id="about" style={{display: 'none'}}>
				<div className="col-md-12 text-center">
					<h3>About</h3>
					<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
				</div>
			</div>

			<div id="PA" style={{display: 'none'}}>
				<div className="col-md-12">
					<h3 className="text-center">Practice Areas</h3>
					<ul className="col-md-6">
						<li>Federal & State Fraud/Evasion</li>
			        	<li>Tax Controversy Practice</li>
			        	<li>Employment Tax Audit (Federal & State)</li>
			        	<li>Business Formation & Tax Planning</li>
					</ul>
			        <ul className="col-md-6">
			        	<li>CA Residency Source of Income Audits</li>
			        	<li>International Taxation</li>
			        	<li>Trusts & Estates</li>
					</ul>
		        	
				</div>
			</div>

			<div id="contact" style={{display: 'none'}}>
				<div className="col-md-12 text-center">
					<h3>Contact Us</h3>
					<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
				</div>
			</div>

		</main>
	)	
}

export default Home