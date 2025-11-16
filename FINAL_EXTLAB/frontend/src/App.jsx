import { useState } from "react";
import axios from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/posts", {
        title,
        body,
      });

      setSuccess(res.data);
      setTitle("");
      setBody("");
    } catch (error) {
      setSuccess("Error submitting post");
    }
  };

  return (
    <div style={{ width: "300px", margin: "20px auto" }}>
      <h2>Create Post</h2>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <br /><br />

        <label>Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}

export default App;
