import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setData(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(data);
  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <h1>{data.title}</h1>
          <img src={data.background_image} />
        </div>
      )}
    </>
  );
};

export default Detail;
