import React from 'react';
import Slider from 'react-slick';
import bayBridge from './img/bayBridge.jpg';
import ggBridge from './img/ggBridge.jpg';
import pier14 from './img/pier14.jpg';

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
				<img id="slider" src={bayBridge} alt="Bay Bridge"/>
				<img id="slider" src={ggBridge} alt="Golden Gate Bridge"/>
				<img id="slider" src={pier14} alt="Pier 14"/>
			</Slider>
		);
	}
});

export default Slideshow