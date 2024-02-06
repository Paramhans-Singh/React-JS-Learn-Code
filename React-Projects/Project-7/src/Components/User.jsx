import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <div>
      <p className=" text-3xl text-center m-6 font-semibold capitalize">
        Hello!! 👋 {userId}
      </p>
      <p className="text-3xl text-center m-6"> This is Coming Soon !! </p>
    </div>
  );
}

export default User;
