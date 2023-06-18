import React from "react";

const MYBOX = () => {

  // logic
  const name = '수경수';
  const textLeft ='text-align-left';

  
  // view
  return ( <>
    <
      div style = {
        {
          border: "2px solid yellow",
          padding: "10px",
          backgroundColor: "gray",
          color: "pink",
        }
      } >
      {name ? '수경수' : '상여자'} </div>
      <div className={textLeft}>나는 박스야</div>
      <div>나도 박스야</div>
  </>
  );
};

export default MYBOX;