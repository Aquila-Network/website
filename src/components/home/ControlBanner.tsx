import React from "react"
import aquilaControlInHand from '../../images/aquila-control-in-hand.png';


const ControlBanner = () => {
	return (
		<section className="container m-auto flex-col md:flex-row flex md:h-96 h-auto py-4 md:py-52 items-center text-center md:text-left"> 
		<div className="w-full md:w-2/4">
			<div className="w-9/12 m:w-4/5 m-auto">
				<img src={aquilaControlInHand}  alt="Aquila X Image"/>
			</div>
		</div>
		<div className="w-9/12 md:w-2/4 h-full items-center flex mt-8 md:mt-0">
			<div>
			<h3 className="text-2xl mb-5 font-semibold font-raleway ">You’ve got all the control </h3>
			<p className="text-gray-800 font-light text-xl mb-5">We’re not interested in your personal data. But don’t just take our word for it. We’d love you not to trust us blindly and instead verify our tools, pixel by pixel.</p>
			<p className="text-gray-800 font-light text-xl mb-3">Your login data strictly remains on your browser. You can install the AquilaX addon and provide it with your secret key. </p>
			<p className="text-gray-800 font-light text-xl">Skeptical about a pre-built addon? You are welcome to download our open source code, verify it and build addon yourself. </p>
			</div>
		</div> 
	</section>	
	)
}

export default ControlBanner;