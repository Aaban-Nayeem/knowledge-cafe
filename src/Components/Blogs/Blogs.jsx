import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  console.log(blogs);
  return (
    <div>
      <h3>This is Block: {blogs.length} </h3>
      {
        blogs.map((blog) => <Blog blog={blog} />)
      }
    </div>
  );
};

export default Blogs;
