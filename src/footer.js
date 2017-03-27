import React from 'react';

const Footer = () => {
	return (
		<footer className="container-fluid">
			<div className="container text-center">
				<div className="col-md-4">
					<p>Escatel Tax Law</p>
					<p>1887 Trestle Glen Road</p>
					<p>Piedmont, CA  94610</p>
				</div>
				<div id="footerLogo" className="col-md-4">
					<img className="logo" src={require("./img/ETLlogo.png")} alt=""/>
				</div>
				<hr />
				<div className="col-md-4">
					<p>Tel: 415.290.4427</p>
					<p>Fax: 510.291.2284</p>
					<p>raul.escatel@gmail.com</p>
				</div>
			</div>	
		</footer>
	)	
}

export default Footer