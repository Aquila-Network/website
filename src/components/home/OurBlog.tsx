import React, { FC } from "react"

import blogOne from '../../images/blog1.png';
import blogTwo from '../../images/blog2.jpeg';
import blogThree from '../../images/blog3.jpeg';
import blogFour from '../../images/blog4.jpeg';

interface BlogItemProps {
  image: any;
  title: string;
  content: string;
  url: string;
}

const BlogItem: FC<BlogItemProps> = (props: BlogItemProps) => {
  return (
    <li className="w-9/12 md:w-1/2 m-2 mb-14 md:mb-0">
      <a href={`${props.url}`}>
        <div className="overflow-hidden h-40 mb-5 w-full">
          <img src={props.image} alt="Blog Image" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{props.title}</h3>
      </a>
      <p>{props.content}</p>
    </li>
  );
}

const OurBlog = () => {
  const blogs = [
    {
      image: blogOne,
      title: "Why Aquila Net",
      content: "Search engines are the second biggest gatekeepers on the Internet. We need a native search feature built into the fabric of the Web.",
      url: "https://medium.com/aquila-network/we-are-building-a-web-native-search-engine-that-you-control-introducing-aquila-network-aed145156d46"
    },
    {
      image: blogTwo,
      title: "This is Google 2.0",
      content: "This is how Google 2.0 might look like; Anyone can be a part of it, without competition.",
      url: "https://medium.com/a-mma/this-is-how-google-2-0-might-look-like-anyone-can-be-part-of-it-without-competition-dda41099f049"
    },
    {
      image: blogThree,
      title: "Achieve safe AI",
      content: "Can we achieve safe AI through incentivized emergence.",
      url: "https://medium.com/a-mma/can-we-achieve-safe-ai-through-incentivized-emergence-b2cb7adf6248"
    },
    {
      image: blogFour,
      title: "Search in your app",
      content: "Your app needs an AI search engine today. Here’s your two-minute recipe.",
      url: "https://medium.com/a-mma/your-app-needs-an-ai-search-engine-today-heres-your-two-minute-recipe-c5640b2d967e"
    }
  ];
	return (
	<section className="font-raleway container m-auto">
      <h2 className="text-center text-3xl font-semibold font-raleway">Our Blog</h2>
      <p className="text-center mb-20">Read recent blog posts</p>
      <ul className="flex flex-col items-center md:flex-row">
        {blogs.map((item, i) => <BlogItem key={i} image={item.image} title={item.title} content={item.content} url={item.url} />)}
      </ul>
    </section>
	)
}

export default OurBlog;