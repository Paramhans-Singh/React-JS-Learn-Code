import React, { useState, useEffect, u } from "react";
// import { useLoaderData } from "@remix-run/react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Paramhans-Singh")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  //   let data = useLoaderData();

  return (
    <div>
      <h1 className="text-center text-4xl font-extrabold m-3 uppercase">
        GitHub Page
      </h1>
      <div>
        <p className="text-center text-2xl font-semibold m-3">
          Our GitHub Followers : {data.followers}
        </p>
        <div className="flex justify-center items-center">
          <img
            src={data.avatar_url}
            alt="avatar"
            className="rounded-3xl  m-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Github;

// export const githubInfo = async () => {
//   const response = await fetch("https://api.github.com/users/Paramhans-Singh");
//   return response.json();
// };
