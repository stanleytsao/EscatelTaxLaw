import React from 'react';

const Home = () => {
	return (
		<div id="home">
			<div className="col-md-9">
				<div className="welcome">
					<h3>Welcome to Escatel Tax Law</h3><br />
					<p className="quote">"A boutique law firm providing clients innovative and practical solutions to a wide range of tax issues."</p>
					<p className="description">Raul Escatel is an experienced tax lawyer, assisting individuals and businesses minimize taxes through strategic planning; deferring or avoiding taxes altogether. Raul works closely with companies in addressing tax issues affecting the life cycle of a business; from strategic entity formation, through dissolution. Raul assists individuals and families with all their estate planning needs, including business succession planning, trust administration and asset protection. In addition, Raul has significant experience representing individuals and businesses before federal, state and local tax authorities in a wide range of tax disputes, including international tax issues.</p>
				</div>
			</div>
			<div className="col-md-3">
				<div className="links text-center">
					<h4>Social Media</h4>
					<a href="https://www.linkedin.com/in/raulescatel/">
						<i className="fa fa-linkedin" aria-hidden="true"></i>
					</a>
					<a href="https://www.avvo.com/attorneys/94610-ca-raul-escatel-40578.html">
					<i className="fa fa-twitter" aria-hidden="true"></i>
					</a>
					<a href="https://www.facebook.com/search/top/?q=Raul+Escatel&init=public">
					<i className="fa fa-facebook" aria-hidden="true"></i>
					</a>
					<a href="https://plus.google.com/109127960067123976784">
					<i className="fa fa-google-plus" aria-hidden="true"></i>
					</a>
				</div>
				
			</div>
		</div>
	)	
}

export default Home