import React from "react"
import aquilaBgLogo from '../../images/aquila-696x698.png';

const Banner = () => {
	return (
		<section style={{height: "70vh"}}  className="font-raleway grid mt-20 content-end">
      <div className="grid justify-center object-contain">
        <img className="h-40" src={aquilaBgLogo} alt="Aquila Logo" />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-center text-5xl font-bold mt-10">Human-curated Search Engine</h3>
        {/* <h3 className="text-center text-4xl font-bold"></h3> */}
        <h3 className="text-center text-4xl font-bold mt-4 mb-4">for Communities and Teams</h3>
        {/* <p className="text-center text-gray-900 text-lg font-bold mb-5">Liberate those powerful bookmarks you are keeping under the mattress 🤷</p> */}
        <p className="text-center text-gray-700">Aquila Network allows you to build a curated list of websites.<br/> Spread new ideas, build a fanbase. Works with paywall-protected websites.</p>
        <div className="text-center mt-10">
          <a href="https://x.aquila.network/explore" target="_blank" className="bg-white p-2 mr-4  text-blue-600 underline" rel="noreferrer">Explore</a>
          <a href="https://airtable.com/shrhvlKgL6otYCnlb" target="__blank" className="bg-red-500 p-2 rounded-full px-4 text-white">Get Started</a>
        </div>
        </div>
    </section>
	)
}

export default Banner;
