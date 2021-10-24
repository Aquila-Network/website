import React from "react"
import aquilaBgLogo from '../../images/aquila-696x698.png';

const Banner = () => {
	return (
		<section style={{height: "85vh"}}  className="mt-4 md:mt-3 px-4 font-raleway flex flex-col justify-center ">
      <div className="mx-auto block w-6/12 md:w-96 mt-20">
        <img src={aquilaBgLogo} alt="Aquila Logo" />
      </div>
      <h3 className="text-center text-4xl font-bold mt-10 mb-3">Social bookmarking for polymaths.</h3>
      <p className="text-center">let your bookmarks speak for you, while you go down the rabbit hole.</p>
      <div className="text-center mt-8">
        <a href="https://x.aquila.network/explore.html" target="_blank" className="bg-white p-2 mr-4  text-blue-600" rel="noreferrer">Explore</a>
        <a href="https://airtable.com/shrhvlKgL6otYCnlb" target="__blank" className="bg-red-500 p-2 rounded-full px-4 text-white">Join Beta Program</a>
      </div>
    </section>
	)
}

export default Banner;
