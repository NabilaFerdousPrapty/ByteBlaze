import { Link } from "react-router-dom";
import { MdAutoDelete } from "react-icons/md";
import placeHolderImg from "../assets/404.jpg";

const BlogCard = ({ blog ,deletable,handleDelete}) => {
  const { cover_image, title, description,published_at,id } = blog;
  
  return (
   
    <div className="relative">
        <div className="transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 p-4 rounded-2xl xl:h-[450px]">
      <Link
        to={`/blog/${id}`}
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
     {
      deletable && <div onClick={()=>{handleDelete(id)}} className="p-4 rounded-full absolute -top-5 -right-5 bg-primary text-secondary bg-opacity-20 hover:bg-opacity-30" ><MdAutoDelete className="text-3xl" /></div>
    }
    </div>
   
    
  );
};

export default BlogCard;
