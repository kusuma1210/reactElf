import React, { useEffect, useState } from "react";
import Axios from "axios";

function PersonListeg() {
  //to initialize the state
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //in this block it will run an mount
    Axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  }, []);
  return (
    <div>
      {posts.map((post) => {
    
        <>
          {/* <div>usernames of the clients =key=${post.username}</div>
          <div>emails of the response=key=${post.email}</div>
          <div>names of the response clients key=${post.name}</div> */}
          <div>key={post.id}</div>
        </>
})}
    </div>
  );
}

export default PersonListeg;
