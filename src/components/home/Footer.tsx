import React from "react"
import { IonIcon } from "@ionic/react";
import { logoGithub, logoMedium, logoYoutube } from 'ionicons/icons';

const Footer = () => {
	return (
	<section className="pt-10 pb-24 font-raleway bg-gray-800 text-white">
      {/* <div className="container"> */}
        <p className="text-sm text-center">Copyright © 2022 - All right reserved by Aquila Network</p>
        <ul className="mt-10 flex justify-center">
          {/* <li className="mr-3 text-base underline">
            <a href="https://docs.aquila.network" target="_blank" rel="noreferrer">
              Documentation
            </a>
          </li> */}
          <li className="mr-3">
            <a href="https://github.com/Aquila-Network/awesome-aquila-network" target="_blank" rel="noreferrer">
              <IonIcon className="text-3xl" icon={logoGithub} />
            </a>
          </li>
          <li className="mr-3">
            <a href="https://medium.com/aquila-network" target="_blank" rel="noreferrer">
              <IonIcon className="text-3xl" icon={logoMedium} />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCcghHPcdlh0V5TdQfLHjhOA" target="_blank" rel="noreferrer">
              <IonIcon className="text-3xl" icon={logoYoutube} />
            </a>
          </li>
        </ul>
      {/* </div> */}
    </section>
	)
}

export default Footer;