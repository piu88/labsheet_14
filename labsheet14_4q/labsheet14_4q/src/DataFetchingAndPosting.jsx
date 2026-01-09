import { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingAndPosting() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));

  }, []);


  const addPost = () => {
    axios.post("https://jsonplaceholder.typicode.com/posts", { title, body, userId: 1 })
      .then(res => setPosts([res.data, ...posts]))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Posts</h2>
      <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>

      <h3>Add Post</h3>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <input value={body} onChange={e => setBody(e.target.value)} placeholder="Body" />
      <button onClick={addPost}>Add Post</button>
    </div>
  );
}

export default DataFetchingAndPosting;
