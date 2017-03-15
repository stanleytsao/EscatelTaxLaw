import React from 'react';
import Slider from 'react-slick';
import BayBridge2 from '../img/BayBridge2.jpg';
import LakeMerritt from '../img/LakeMerritt.jpg';
import PiedmontGate3 from '../img/PiedmontGate3.png';

var Slideshow = React.createClass({
	render: function () {
	    var settings = {
	    	adaptiveHeight: false,
	    	arrows: false,
	    	autoplay: true,
	     	dots: false,
	     	infinite: true,
	     	fade: true,
	     	speed: 1800,
	    };
		return (
			<Slider {...settings}>
				<img id="slider" src={BayBridge2} alt="Bay Bridge"/>
				<img id="slider" src={LakeMerritt} alt="Lake Merritt"/>
				<img id="slider" src={PiedmontGate3} alt="Piedmont Gate"/>
			</Slider>
		);
	}
});

export default Slideshow