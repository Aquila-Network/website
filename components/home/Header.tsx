import { IonIcon } from "@ionic/react";
import { logoMedium, logoYoutube, mail, bulbOutline, logoGithub, menuOutline } from 'ionicons/icons';
import { useState } from "react";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  }

	return (
<header className="fixed top-0 left-0 w-full bg-white z-10 px-3">
		<div className="flex items-center justify-between h-20 container m-auto  ">
      <div className="font-medium">AQUILA NETWORK</div>
      <nav className="md:block hidden">
        <ul className="flex justify-between">
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
          <li className="mr-5">
            <a href="https://airtable.com/shrhvlKgL6otYCnlb" className="rounded-full bg-red-500  p-2 px-3 text-white">
              Join Beta <IonIcon icon={bulbOutline} className="-mb-0.5" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Aquila-Network/awesome-aquila-network" className=" rounded-full text-white bg-gray-900 p-2 px-3">
              Github <IonIcon icon={logoGithub} className="-mb-0.5" />
            </a>
          </li>
        </ul>
      </nav>
      <IonIcon className="text-xl md:hidden cursor-pointer" icon={menuOutline} onClick={handleMenuToggle} />
			</div>
      <nav className={`md:hidden block  ${ !menuToggle ? 'hidden' : ''}`}>
        <ul className="flex justify-center py-3">
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
        </ul>
        <ul className="flex justify-center py-2 mb-3">
          <li className="mr-5">
            <a href="https://airtable.com/shrhvlKgL6otYCnlb" className="rounded-full bg-red-500  p-2 px-3 text-white">
              Join Beta <IonIcon icon={bulbOutline} className="-mb-0.5" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Aquila-Network/awesome-aquila-network" className=" rounded-full text-white bg-gray-900 p-2 px-3">
              Github <IonIcon icon={logoGithub} className="-mb-0.5" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
	)
}

export default Header;