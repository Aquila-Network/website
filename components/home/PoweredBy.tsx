import { IonIcon } from "@ionic/react";

import { globeOutline, layersOutline, happyOutline } from 'ionicons/icons'

const PoweredBy = () => {
	return (
		<section className="container m-auto pt-14 pb-14 px-3">
				<h2 className="text-3xl font-semibold text-center mb-5 font-raleway ">Powered by Aquila Network Protocol</h2>
				<p className="text-center mb-20 max-w-screen-sm m-auto">Aquila Network is a set of open protocols to build a decentralized search engine.
	Please read the technical specifications to learn more in detail.</p>
				<ul className="flex items-center justify-center md:justify-around flex-col md:flex-row">
					<li className="text-center w-80 mb-14 md:mb-0">
						<IonIcon className=" text-9xl mb-5 text-pink-600"  icon={globeOutline} />
						<h3 className="text-base font-semibold mb-2">No gatekeeping</h3>
						<p>Independent, decentralized nodes maintain search indexes.</p>
					</li>
					<li className="text-center w-80 mb-14 md:mb-0">
						<IonIcon className=" text-9xl mb-5 text-pink-600"  icon={layersOutline} />
						<h3 className="text-base font-semibold mb-2">To Aquila and beyond</h3>
						<p>Designed to scale from your raspberry pi to dedicated cloud.</p>
					</li>
					<li className="text-center w-80 mb-14 md:mb-0">
						<IonIcon className=" text-9xl mb-5 text-pink-600"  icon={happyOutline} />
						<h3 className="text-base font-semibold mb-2">User first design</h3>
						<p>Varying levels of abstractions to developers and users.</p>
					</li>
				</ul>
			</section>
	);

}

export default PoweredBy;