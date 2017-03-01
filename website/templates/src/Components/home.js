import React from 'react';

const Home = () => {
	return (
		<main className="container">
			<div className="col-md-9 welcome">
				<h3>Escatel Tax Law</h3>
				<p>"A boutique law firm providing cliets innovative and practical solutions to a wide range of tax issues..."</p>
			</div>
			<div className="col-md-3 links text-center">
				News, Events, Updates...
				<button>LinkedIn</button>
				<button>Twitter</button>
				<button>Social Media</button>
			</div>
		</main>
	)	
}

export default Home