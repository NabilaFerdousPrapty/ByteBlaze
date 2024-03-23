import { useEffect, useState } from "react";

import { deleteBlog, getBlogs } from './../utils/index';
import BlogCard from "../components/BlogCard";
import EmptyState from "../components/EmptyState";

const Bookmarks = () => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        const storedBlogs=getBlogs();
        setBlogs(storedBlogs)
    },[]);
    const handleDelete=id=>{
        deleteBlog(id);
        const storedBlogs=getBlogs();
        setBlogs(storedBlogs)
      }
      if (blogs.length<1) {
        return <EmptyState message={'No Bookmarks available'} address={'/blogs'} label={'Go to Blogs'}/>
      }
    return (
        <div className="grid py-8 px-4 sm:px-8 lg:px-16 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {
            blogs.map(blog=><BlogCard handleDelete={handleDelete} deletable={true} key={blog.id} blog={blog}></BlogCard>)
        }
        
    </div>
    );
};

export default Bookmarks;