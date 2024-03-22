import { Link } from "react-router-dom";

import placeHolderImg from "../assets/404.jpg";
const BlogCard = ({ blog }) => {
  const { cover_image, title, description,published_at } = blog;
  return (
    <div className="transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 p-4 rounded-2xl">
      <Link
        to="/blog/${id}"
        href="#"
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline p-4 rounded-2xl "
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 "
          src={cover_image || placeHolderImg}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
