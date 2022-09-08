import React from "react"
// import aquilaBgLogo from '../../images/aquila-696x698.png';

const Banner = () => {
	return (
		<section style={{height: "auto"}}  className="font-raleway grid mt-32 content-end">
      {/* <div className="grid justify-center object-contain">
        <img className="h-40" src={aquilaBgLogo} alt="Aquila Logo" />
      </div> */}
      <div className="flex flex-col justify-center">
        <h3 className="text-center text-7xl text-gray-800 font-bold mt-10">Human curated search engine</h3>
        {/* <h3 className="text-center text-4xl font-bold"></h3> */}
        <h3 className="text-center text-4xl text-gray-800 font-bold mt-2 mb-4"></h3>
        {/* <p className="text-center text-gray-900 text-lg font-bold mb-5">Liberate those powerful bookmarks you are keeping under the mattress 🤷</p> */}
        <p className="text-center text-xl mt-2 text-gray-700 font-bold">Build a curated list of websites, aggregate into searchable pool of ideas.<br/>Works with paywall-protected websites.</p>
        <div className="flex flex-row justify-center">
          <div className="text-center flex flex-col mt-10 md:flex-row">
            <a href="https://t.me/aquilanet_bot" target="__blank" className="bg-blue-500 mr-6 p-3 rounded-full px-5 text-white font-bold transition-colors duration-300 hover:bg-blue-600">Sign up with Telegram</a>
            <a href="https://airtable.com/shrhvlKgL6otYCnlb" target="__blank" className="mt-3 md:mt-0  bg-red-500 mr-6 p-3 rounded-full px-5 text-white font-bold transition-colors duration-300 hover:bg-red-600">Sign up with Email</a>
          </div>
        </div>
        {/* <a href="https://x.aquila.network/explore" target="_blank" className="text-center p-2 text-green-600 font-bold" rel="noreferrer">Explore ➜</a> */}
      </div>
    </section>
	)
}

export default Banner;
