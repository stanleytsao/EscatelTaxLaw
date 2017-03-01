import React from 'react';

const Header = () => {
	return (
		<header className="container-fluid navbar-fixed-top">
			<div className="container">
				<div className="col-md-4">
					<h1>Escatel Tax Law</h1>
				</div>
				<div className="col-md-8 text-right">
					<button>Home</button>
					<button>About</button>
					<button>Practice Areas</button>
					<button>Contact Us</button>
				</div>
			</div>	
		</header>
	)	
}

export default Header