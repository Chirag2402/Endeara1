import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Your home page content here */}
    </div>
  );
};

export default Home;

