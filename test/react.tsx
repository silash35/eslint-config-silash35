import { useState } from "react";

const Profile = () => {
  return <img alt="Katherine Johnson" src="https://i.imgur.com/MK3eW3As.jpg" />;
};

const Gallery = () => {
  const [show, setShow] = useState(false);

  return (
    <article>
      <h1>Amazing scientists</h1>
      {show && (
        <>
          <Profile />
          <Profile />
          <Profile />
        </>
      )}

      <button onClick={() => setShow(!show)}>Show</button>
    </article>
  );
};

export default Gallery;
