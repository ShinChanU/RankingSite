import Post from '../../models/posts';

// 처음 들어온 url에 대해서는 create를 사용하고 있던 데이터에는 덮어쓰기를 해야함
// ranking 데이터 로직을 만들어서 수정 필요함
// 0312
const saveResult = async (dataObj, name, url) => {
  console.log('saveResult함수진입');
  // Post.create(
  //   {
  //     name: name,
  //     url: url,
  //     visitorData: dataObj,
  //   },
  //   (err, data) => {
  //     console.log(err, data);
  //   },
  // );
  await Post.findOne({}.exec());
  console.log(
    Post.findOne({ name: 'naver.com' }, (err, dt) => {
      console.log(err, dt);
    }),
  );
};

export default saveResult;
