import { useLoaderData } from "react-router-dom";
import placeHolderImg from "../assets/404.jpg";
import Markdown from 'https://esm.sh/react-markdown@9'
import rehypeRaw from "rehype-raw";

const Content = () => {
    const blog=useLoaderData()
    const { cover_image, title, tags,body_html,url } = blog;
   
    return (
        <div>
             <div
       
        className=" mx-auto group hover:no-underline focus:no-underline p-4 rounded-2xl border-2 border-primary border-opacity-35"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 "
          src={cover_image || placeHolderImg}
        />
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
          {
                tags.map(tag=> <a
                   key={tag}
                    className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900"
                  >
                    #{tag}
                  </a>)
            }
           
           
          </div> 
          
        <div className="space-y-2 ">
          <a href={url} target="_blank" className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </a>
       <div className="overflow-x-hidden">
       <Markdown rehypePlugins={[rehypeRaw]}>{ body_html}</Markdown>
       </div>
        </div>
      </div>
        </div>
    );
};

export default Content;