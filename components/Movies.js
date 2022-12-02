import React from "react";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
const Movies = ({ data }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3  ">
      {data.map((item) => (
        <Thumbnail key={item.id} item={item} />
      ))}
    </FlipMove>
  );
};

export default Movies;
