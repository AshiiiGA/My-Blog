import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Kimchi', body: 'Kimichi..', place: "Kang's Kitchen", id: 1},
        { title: 'Tteokbokki', body: 'Tteokbokki..', place: 'Korean Foods LK', id: 2},
        { title: 'Bibimbap', body: 'Bibimbap..', place: "Kang's Kitchen", id: 3}
    ]);

    const deleteBlog = (id) => {
        const newBlogList = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogList);
    }

    useEffect(() => {
        console.log("use effect run");
    });

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" deleteBlog={deleteBlog}/>
            {/* <BlogList blogs={blogs.filter((blogs) => blogs.place === "Kang's Kitchen")} title="Kang's Kitchen" /> */}
            
        </div>
     );
}
 
export default Home;