import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { apifetchasync } from "./services/apifetchservice";

const Test = () => {
  const dispatch = useDispatch();

  const { data, status, error } = useSelector((state) => state.fetchApiData);

  const handleClick = () => {
    dispatch(apifetchasync());
  };

  console.log("redux Data", {
    status: status,
    data: data,
    error: error,
  });

  return (
    <div>
      Test
      <button onClick={handleClick}>
        {" "}
        {status === "loading" ? "Loading..." : "Submit"}
      </button>
      {data?.length > 0 ? (
        data?.map((e, i) => {
          return (
            <div key={i}>
              <h1>{e?.title}</h1>
            </div>
          );
        })
      ) : (
        <div>
          <h1>No Data Availble</h1>
        </div>
      )}
    </div>
  );
};

export default Test;
