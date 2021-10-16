import Image from 'next/image';

import aquilaX from '../../assets/aquila-x.png';

const AquilaXBanner = () => {
	return (
	<section className="container mx-auto py-16 pb-24 ">
      <div className=" md:w-8/12 w-10/12 m-auto">
        <Image src={aquilaX}   alt="Aquila X Image"/>
      </div>
      <div className="w-3/4 m-auto h-full mt-10">
        <h3 className="text-gray-800 border-t-2 border-b-2 pt-6 pb-6 border-gray-300 italic font-sans text-center md:text-2xl text-xl">Aquila X gives you a familiar interface to access content from Aquila Network. Organize your bookmarks with ease and share them with anyone.</h3>
      </div>
    </section>
	);
}

export default AquilaXBanner;