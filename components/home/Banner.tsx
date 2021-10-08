import Image from 'next/image';
import aquilaBgLogo from '../../assets/aquila-696x698.png';

const Banner = () => {
	return (
		<section style={{height: "85vh"}}  className="mt-4 md:mt-0 px-4 font-raleway flex flex-col justify-center ">
      <div className="mx-auto block w-6/12 md:w-96 mt-10">
        <Image  src={aquilaBgLogo} alt="Aquila Logo" />
      </div>
      <h3 className="text-center text-4xl font-bold mt-10 mb-3">Social bookmarking for polymaths.</h3>
      <p className="text-center">let your bookmarks speak for you, while you go down the rabbit hole.</p>
      <div className="text-center mt-8">
        <button className="bg-white p-2 mr-4  text-blue-600">Explore</button>
        <button className="bg-red-500 p-2 rounded-full px-4 text-white">Join Beta Program</button>
      </div>
    </section>
	)
}

export default Banner;