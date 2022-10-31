import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [value, setValue] = useState("");
  const [albums, setAlbums] = useState([]);
  console.log("albums:", albums);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((albums) => {
        console.log("albums:", albums);
        setAlbums(albums);
      });
  }, []);

  return (
    <div>
      <button onClick={() => setAlbums(albums)}>push1</button>

      <ul>
        {albums.map((album) => (
          <li key={album.id}> {album.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;
