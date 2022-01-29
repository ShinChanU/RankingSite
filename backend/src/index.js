const Koa = require('koa');
const cors = require('cors');
// const cheerio = require('cheerio');
// const axios = require('axios');

const app = new Koa();
const port = 8080;

app.use((ctx) => {
  console.log("test success");
  ctx.body = "<h1>테스트</h1>";
});

app.use(cors());
app.listen(port, () => {
  console.log('listen to port 8080', '서버 가동 중');
});

// app.use("/api/data", (req, res) => {
//   res.json({
//     greeting: "Hello world"
//   });
// });

// app.use(context => {
//   context.body = "hello body";
// });


// const getHtml = async () => {
//   try {
//     return await axios.get("https://www.op.gg/")
//   } catch(err) {
//     console.log(err);
//   }
// };

// app.get("/", (req, res) => {
//   getHtml()
//   .then((html) => {
//     const $ = cheerio.load(html.data);
//     let parentTag = $("div.liveNum ul.liveNum li");
//     // 크롤링할 태그 찾기

//     let resultArr = [];
//     parentTag.each(function (i, elem) {
//       let itemObj = {
//         text: $(this).find("strong").text(),
//         num: $(this).find("span").text(),
//       };
//       resultArr.push(itemObj);
//     });

//     resultArr.forEach((elem) => {
//       console.log(`현재 ${elem._text}의 현황 : ${elem._num}`);
//     });
//     return resultArr;
//   })
//   .then((data) => res.send(data));
// })



