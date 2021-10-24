import React from "react"
import { IonIcon } from "@ionic/react";
import { logoGithub, logoMedium, logoYoutube } from 'ionicons/icons';

const Footer = () => {
	return (
	<section className="bg-gray-800 text-white py-10">
      <div className="container">
        <ul className="flex justify-center md:float-right ">
          <li className="mr-3">
            <a href="https://github.com/Aquila-Network/awesome-aquila-network" target="_blank" rel="noreferrer">
              <IonIcon className="text-3xl" icon={logoGithub} />
            </a>
          </li>
          <li className="mr-3">
            <a href="https://medium.com/a-mma" target="_blank" rel="noreferrer">
              <IonIcon className="text-3xl" icon={logoMedium} />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCayvo6QXrel0Ii94ve48zBg" target="_blank" rel="noreferrer">
              <IonIcon className="text-3xl" icon={logoYoutube} />
            </a>
          </li>
        </ul>
        <p className=" clear-both text-center">© Copyright 2021. Created by Love, incubated by a_mma.</p>
      </div>
    </section>
	)
}

export default Footer;