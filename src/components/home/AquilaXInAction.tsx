import React from "react"
import { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { logoYoutube, closeOutline } from 'ionicons/icons'

import aquilaVideoImg from '../../images/aquila-video-img.jpeg';

interface YouTubeVideoProps {
	onClose: Function
}

const YouTubeVideo = (props: YouTubeVideoProps) => {

	const handleClose = () => {
		props.onClose();
	}

	return (
		<div onClick={handleClose} className="fixed flex items-center bg-gray-800 bg-opacity-50 z-20 top-0 left-0 w-full h-screen m-auto">
			<IonIcon className="absolute top-20 right-16 text-4xl cursor-pointer text-white" icon={closeOutline} />
			<div className="w-4/5 m-auto h-4/5">
				<iframe height="100%" width="100%" style={{width: '100%', height: '100%' }}  
					src="https://www.youtube.com/embed/AdGZc1TO7z0?autoplay=1&mute=1">
				</iframe>
			</div>
		</div>
	)
}


const AquilaXInAction = () => {
	const [showYoutubeVideo , setShowYoutubeVideo] = useState(false);
	const handleOnClickVideoPlayBtn = () => {
		setShowYoutubeVideo(true);	
	}

	const handleCloseVideoPlayer = () => {
		setShowYoutubeVideo(false);
	}

	return (
		<section className="container m-auto pb-14 pt-14 px-3">
		<h2 className="text-center text-4xl mb-2 font-raleway font-bold">Aquila in action</h2>
		<p className="text-center mb-32 ">Experience the gateway to a better search experience, powered by Aquila Network.</p>
		<div className=" w-9/12 md:w-1/3 m-auto relative">
			<img src={aquilaVideoImg} alt="Aquila in Action Video" />
			<span onClick={handleOnClickVideoPlayBtn}>
				<IonIcon className="absolute cursor-pointer inset-1/2 text-6xl text-purple-500" icon={logoYoutube}  />
			</span>
		</div>
		<h2 className="text-3xl text-center mt-32 mb-4 font-raleway font-semibold ">Next Steps</h2>
		<p className="text-center mb-10">Once you have <a className="text-blue-600" href="https://airtable.com/shrhvlKgL6otYCnlb">generated the secret key</a>, follow the simple steps below to get started.</p>
		<ul>
			<li className="flex mb-2">
				<div className="mr-3">
					<span className="block w-10 h-10 bg-purple-700 text-center rounded-full leading-10 text-white">1</span>
				</div>
				<p><b>Install AquilaX browser extension</b> User authentication and website bookmarking are managed from your browser. AquilaX browser extensions will help you with this. We currently support all Firefox and Chrome variants. <a className="text-blue-600" href="https://addons.mozilla.org/en-US/firefox/addon/aquilax/">Click to install for Firefox</a>, <a className="text-blue-600" href="https://chrome.google.com/webstore/detail/aquilax/albdahjdcmldbcpjmbnbcbckgndaibnk">click to install for Chrome</a>, or <a className="text-blue-600" href="https://github.com/Aquila-Network/AquilaX-browser-extension">build from source code</a>.</p>
			</li>
			<li className="flex mb-2">
				<div className="mr-3">
				<span className="block w-10 h-10 bg-purple-700 text-center rounded-full leading-10 text-white">2</span>
				</div>
				<p><b>Add secret key to browser extension.</b> Once you have <a className="text-blue-600" href="https://airtable.com/shrhvlKgL6otYCnlb">obtained the secret key</a> and installed the AquilaX add-on, click on AquilaX extension &#x3E; Edit Settings &#x3E; Paste your secret key &#x3E; Update. 
				Visit your favorite website, click on &#x27;Bookmark&#x27; in the AquilaX browser extension to bookmark it.
</p>
			</li>
			<li className="flex">
				<div className="mr-3">
					<span className="block w-10 h-10 bg-purple-700 text-center rounded-full leading-10 text-white">3</span>
				</div>
				<p><b>Finally, visit</b> the <a className="text-blue-600" href="https://x.aquila.network">Aquila Network</a> page to explore your bookmark collection. </p>
			</li>
		</ul>
		{showYoutubeVideo && <YouTubeVideo onClose={handleCloseVideoPlayer} />}
	</section>
	)
}

export default AquilaXInAction;