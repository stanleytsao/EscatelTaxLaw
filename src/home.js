import React from 'react';

const Home = () => {
	return (
		<div id="home">
			<div className="col-md-9">
				<div className="welcome">
					<h3>Welcome to Escatel Tax Law</h3><br />
					<p id="quote">"A boutique law firm providing clients innovative and practical solutions to a wide range of tax issues."</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

				</div>
			</div>
			<div className="col-md-3 text-center">
				<div className="links">
					<h4>News, Events, Updates...</h4><br />
					<button>
						<i className="fa fa-linkedin" aria-hidden="true"></i>{' '}
					</button>
					<button>
						<i className="fa fa-twitter" aria-hidden="true"></i>{' '}
					</button>
					<button>
						<i className="fa fa-facebook" aria-hidden="true"></i>{' '}
					</button>
					<button>
						<i className="fa fa-google-plus" aria-hidden="true"></i>{' '}
					</button>
				</div>
				
			</div>
		</div>
	)	
}

export default Home