import React from "react"
import { IonIcon } from "@ionic/react";
import { logoMedium, logoYoutube, mail, bulbOutline, logoGithub, menuOutline } from 'ionicons/icons';
import { useState } from "react";
import aquilaBgLogo from '../../images/aquila-696x698.png';

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  }

	return (
<header className="font-raleway fixed top-0 left-0 w-full bg-white z-10 px-3">
		<div className="flex items-center justify-between h-20 container m-auto">
      <div className="flex items-center justify-between h-20">
        <img className="h-9 mr-1" src={aquilaBgLogo} alt="Aquila Logo" />
        <div className="font-bold">AQUILA NETWORK</div>
      </div>
      <nav className="md:block hidden">
        <ul className="flex justify-between text-gray-800">
          {/* <li className="mr-5">
            <a href="https://x.aquila.network/explore" className="text-base">
              Explore
            </a>
          </li> */}
          <li className="mr-5">
            <a href="https://x.aquila.network/extensions.html" className="text-base">
              Download
            </a>
          </li>
          <li className="mr-5">
            <a href="https://blog.aquila.network" className="text-base">
              Blog
            </a>
          </li>
          <li className="mr-5">
            <a href="https://github.com/Aquila-Network" className="text-base">
              Github
            </a>
          </li>
          {/* <li className="mr-5">
            <a href="https://medium.com/aquila-network" rel="nofollow" target="__blank" className="text-2xl">
              <IonIcon icon={logoMedium}/>
            </a>
          </li>
          <li className="mr-5">
            <a href="https://www.youtube.com/channel/UCcghHPcdlh0V5TdQfLHjhOA" target="__blank" className="text-2xl">
              <IonIcon icon={logoYoutube} />
            </a>
          </li>
          <li className="mr-5">
            <a href="mailto:aquilanetworkdev@gmail.com" target="__blank" className="text-2xl">
              <IonIcon icon={mail} />
            </a>
          </li> */}
          {/* <li className="ml-5 mr-5">
            <a href="https://airtable.com/shrhvlKgL6otYCnlb" className="rounded-full bg-green-500  p-2 px-4 text-white font-bold duration-300 hover:bg-green-600">
              Get Started
            </a>
          </li> */}
          <li className="mr-5">
            <a href="https://x.aquila.network/explore" target="_blank" className="text-center text-green-600 font-bold" rel="noreferrer">Explore ➜</a>
          </li>
        </ul>
      </nav>
      <span className="text-xl md:hidden cursor-pointer" onClick={handleMenuToggle}>
        <IonIcon  icon={menuOutline} />
      </span>
			</div>
      <nav className={`md:hidden block  ${ !menuToggle ? 'hidden' : ''}`}>
        {/* <ul className="flex justify-center py-3">
          <li className="mr-5">
            <a href="https://medium.com/a-mma" rel="nofollow" target="__blank" className="text-2xl">
              <IonIcon icon={logoMedium}/>
            </a>
          </li>
          <li className="mr-5">
            <a href="https://www.youtube.com/channel/UCayvo6QXrel0Ii94ve48zBg" target="__blank" className="text-2xl">
              <IonIcon icon={logoYoutube} />
            </a>
          </li>
          <li className="mr-5">
            <a href="mailto:aquilanetworkdev@gmail.com" target="__blank" className="text-2xl">
              <IonIcon icon={mail} />
            </a>
          </li>
        </ul> */}
        <ul className="flex justify-center py-2 mb-3">
          {/* <li className="mr-5">
            <a href="https://airtable.com/shrhvlKgL6otYCnlb" className="rounded-full bg-red-500  p-2 px-3 text-white">
              Get Started <IonIcon icon={bulbOutline} className="-mb-0.5" />
            </a>
          </li> */}
          <li>
            <a href="https://github.com/Aquila-Network/awesome-aquila-network" className=" rounded-full text-white bg-gray-900 p-2 px-3">
              Github <IonIcon icon={logoGithub} className="-mb-0.5" />
            </a>
          </li>
          <li>
            <a href="https://x.aquila.network/explore" target="_blank" className="text-center p-2  px-3 text-green-600 font-bold" rel="noreferrer">Explore ➜</a>
          </li>
        </ul>
      </nav>
    </header>
	)
}

export default Header;