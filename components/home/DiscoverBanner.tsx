import aquilaXExplore from '../../assets/aquila-x-explore.png';

const DiscoverBanner = () => {
	return (
		<section className="container m-auto flex flex-col md:flex-row items-center h-full md:h-96 py-8 md:py-52 px-3 text-center md:text-left"> 
			<div className="w-full md:w-2/4 h-full items-center flex mb-8 md:mb-0">
				<div>
				<h3 className="text-2xl font-raleway mb-5 font-semibold">Discover new topics and people.!</h3>
				<p className="text-gray-800 font-light text-xl mb-5">Aquila X gives you a familiar interface to access content from Aquila Network.
			Easy organize your bookmarks and share with anyone.</p>
				<p className="text-gray-800 font-light text-xl">Subscribe to your favourite experts to get notified. Maintain a pool of experts and build a search engine out of it.</p>
				</div>
			</div>
			<div className="w-full md:w-2/4">
				<div className="w-4/5 mx-auto">
					<img src={aquilaXExplore}  alt="Aquila X Image"/>
				</div>
			</div>
		</section>
	);
}

export default DiscoverBanner;