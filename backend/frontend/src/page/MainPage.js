import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MainPage = () => {
  const [data, setData] = useState({
    text: '',
  });
  const [site, setSite] = useState([
    { name: '네이버', url: 'naver.com' },
    { name: '다음', url: 'daum.net' },
    { name: '구글', url: 'google.co.kr' },
    { name: '넥슨', url: 'nexon.com' },
    { name: '카카오', url: 'kakaocorp.com' },
  ]);

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:4000/site')
  //     .then((res) => {
  //       setSite(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // const onChange = (e) => {
  //   setData({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const onClick = () => {
  //   const textBox = {
  //     inText: data.text,
  //   };
  // };

  const clickBtn = () => {
    // 전체 동기화 btn 클릭시 데이터 전송
    axios
      .post('http://localhost:8080/api/data', {
        data: site,
      })
      .then((response) => console.log(response));
    // .then((res) => console.log(res))
    // .catch((e) => console.log(e));
  };

  return (
    <>
      {/* <input name="text" onChange={onChange} placeholder="사이트 이름"></input>
      <input name="text" onChange={onChange} placeholder="사이트 url"></input> */}
      {/* <button onClick={onClick}>추가</button> */}
      <h3>{data.text}</h3>
      {site.map((e, idx) => {
        return (
          <div key={idx}>
            <h2>{e.name}</h2>
            <h4>{e.url}</h4>
          </div>
        );
      })}
      <button onClick={clickBtn}>전체 동기화</button>
    </>
  );
};

export default MainPage;
