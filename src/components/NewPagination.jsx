import axios from "axios";
import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import Posts from "./Posts";

const NewPagination = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(9);

  useEffect(() => {
    // const url = ?page2_limit20

    const fetchPost = async () => {
      setLoading(true);
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      setPosts(res.data);
      setLoading(false);
      //   console.log("res.data:", res.data);
    };
    fetchPost();
  }, []);
  //   console.log("posts:", posts);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    console.log("pageNumber:", pageNumber);
    return setCurrentPage(pageNumber);
  };
  return (
    <div>
      {/* ok123 */}
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default NewPagination;
