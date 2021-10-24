import React from "react"
import { IonIcon } from "@ionic/react";

import { arrowDownOutline } from 'ionicons/icons';

const MileStones = () => {
	return (
		<section className="container m-auto py-20 ">
      <div className="max-w-5xl m-auto text-center mb-12">
        <h2 className="text-3xl mb-10 font-raleway font-semibold">We’ve gone through some important milestones that helped us reach you here, take look below to see them.</h2>
        <p>Aquila Network is an open protocol to implement a decentralized information discovery layer. Anybody can participate with their own protocol implementations without any restrictions. Aquila Network team will work on the core protocol, reference implementations for non technical users, and a few applications on top of the fundamental protocol with ease of use and user experience in mind.</p>
      </div>
      <div className="max-w-2xl m-auto">
        <ul>
          <li className="flex">
            <div className="mr-3">
              <span style={{ lineHeight: "60px"}} className="rounded-full block w-16 h-16 text-center text-white bg-pink-600">1</span>
            </div>
            <div className="flex-row mt-3">
              <h4 className="font-semibold">Whitepaper</h4>
              <p>Aquila Network whitepaper released in 2020 Q1.</p>
            </div>
          </li>
          <li className="flex">
            <div className="mr-3">
              <span style={{ lineHeight: "60px"}} className="rounded-full text-3xl text-pink-600 block w-16 h-16 text-center">
                <IonIcon icon={arrowDownOutline} />
              </span>
            </div>
          </li>
          <li className="flex">
            <div className="mr-3">
              <span style={{ lineHeight: "60px"}} className="rounded-full block w-16 h-16 text-center text-white bg-pink-600">2</span>
            </div>
            <div className="flex-row mt-3">
              <h4 className="font-semibold">Specification</h4>
              <p>Aquila Network Technical Specifications initial draft in 2021 February.</p>
            </div>
          </li>
          <li className="flex">
            <div className="mr-3">
              <span style={{ lineHeight: "60px"}} className="rounded-full text-3xl text-pink-600 block w-16 h-16 text-center">
                <IonIcon icon={arrowDownOutline} />
              </span>
            </div>
          </li>
          <li className="flex">
            <div className="mr-3">
              <span style={{ lineHeight: "60px"}} className="rounded-full block w-16 h-16 text-center text-white bg-pink-600">3</span>
            </div>
            <div className="flex-row mt-3">
              <h4 className="font-semibold">Closed Beta Release</h4>
              <p>Closed beta program of Aquila X in 2021 April 1</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
	);
}

export default MileStones;