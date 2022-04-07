import React, { useState } from 'react';

const Test = () => {
  const arrTest = ['신찬우', '정시헌', '홍길동'];

  return (
    <div>
      {arrTest.map((e) => {
        return <div>{e}</div>;
      })}
    </div>
  );
};

export default Test;
