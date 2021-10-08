import Image from 'next/image';
import { FC } from 'react';

import blogOne from '../../assets/blog1.png';
import blogTwo from '../../assets/blog2.jpeg';
import blogThree from '../../assets/blog3.jpeg';
import blogFour from '../../assets/blog4.jpeg';

interface BlogItemProps {
  image: StaticImageData;
  title: string;
  content: string;
}

const BlogItem: FC<BlogItemProps> = (props: BlogItemProps) => {
  return (
    <li className="w-9/12 md:w-1/2 m-2 mb-14 md:mb-0">
      <div className="overflow-hidden h-40 mb-5 w-full">
        <Image src={props.image} alt="Blog Image" />
      </div>
      <a href="#"><h3 className="text-xl font-semibold mb-2">{props.title}</h3></a>
      <p>{props.content}</p>
    </li>
  );
}

const OurBlog = () => {
  const blogs = [
    {
      image: blogOne,
      title: "Why Aquila Net",
      content: "Search engines are the second biggest gatekeepers on the Internet. We need a native search feature built into the fabric of the Web."
    },
    {
      image: blogTwo,
      title: "This is Google 2.0",
      content: "This is how Google 2.0 might look like; Anyone can be a part of it, without competition."
    },
    {
      image: blogThree,
      title: "Achieve safe AI",
      content: "Can we achieve safe AI through incentivized emergence."
    },
    {
      image: blogFour,
      title: "Search in app",
      content: "Your app needs an AI search engine today. Here’s your two-minute recipe."
    }
  ];
	return (
	<section className="container m-auto">
      <h2 className="text-center text-3xl font-semibold font-raleway">Our Blog</h2>
      <p className="text-center mb-20">Read recent blog posts</p>
      <ul className="flex flex-col items-center md:flex-row">
        {blogs.map((item, i) => <BlogItem key={i} image={item.image} title={item.title} content={item.content} />)}
      </ul>
    </section>
	)
}

export default OurBlog;