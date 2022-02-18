import React from "react"
import { IonIcon } from "@ionic/react";
import { chevronDownOutline, chevronUpOutline } from 'ionicons/icons';
import { useState } from "react";

interface FaqItemProps {
  faq: {
    title: string;
    description: string;
  }
}

const FaqItem: React.FC<FaqItemProps> = (props: FaqItemProps) => {
  const [selected, setSelected] = useState(false);
  const handleToggleSelect = () => {
    setSelected(!selected);
  }
  return (
    <li className="mb-5">
      <h3 onClick={handleToggleSelect} className=" font-semibold border-b-2 pb-4 my-2 cursor-pointer ">{props.faq.title}<IonIcon className="float-right" icon={selected? chevronUpOutline : chevronDownOutline} /></h3>
      <p className={`${!selected ? 'h-0 m-0': 'h-auto'} transition-all duration-1000 overflow-hidden`}>{props.faq.description}</p>
    </li>
  );
}

const Faq = () => {
  const faqs = [
    {
      title: "Is Aquila Network a search engine? ",
      description: "Not really. It is a set of protocols that anybody can follow to collectively organize searchable indexes on which many information discovery (search) experiences can be built. Consider the architecture of a search engine as layers of abstractions. Aquila Network builds the lowest fundamental layer for everyone to democratize search engine technology."
    },
    {
      title: "How can I use Aquila Network?",
      description: "Along with the protocol design, the Aquila Network team is actively developing a parallel software suite for non-technical users. You can download and use this software. Anyone with technical knowledge can also access the software and implement their custom versions as long as it complies with the specifications."
    },
    {
      title: "Is Aquila Network Open Source?",
      description: "Yes, both Aquila Network protocol specifications and core implementations are Open Sourced under Apache 2.0 license. This means you can use it without worry."
    },
    {
      title: "Can I install Aquila Network without a license?",
      description: "Aquila Network core implementations are free of cost and Open Sourced under  Apache 2.0 license. No other explicit licensing is required to use it."
    },
    {
      title: "How do Aquila Network developers make money?",
      description: "As mentioned in previous answers, Aquila Network core implementations are free of cost and Open Source. It is worth noting that, many content discovery applications can be leveraged and built on top of Aquila Network. Just like everybody else, we have some cool ideas in our minds. We will re-enter the market to serve specific pain points in search applications to sustain the entire software development. We also have plans to provide Aquila Network core SaaS."
    },
    {
      title: "Can I write my own software for Aquila Network?",
      description: "Sure. Actually, please do. Without community adoption, Aquila Network is nothing but clay lying around. Let us know what you are building. We could definitely help."
    }
  ];
	return (
	<section className="font-raleway py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-10 font-raleway">FAQ</h2>
      <ul className="max-w-screen-md m-auto">
        {faqs.map((item, i) => <FaqItem key={i} faq={item} />)}
      </ul>
    </section>
	)
}

export default Faq;