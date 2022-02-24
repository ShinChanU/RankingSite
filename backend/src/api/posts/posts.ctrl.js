import Post from '../../models/posts';

/*
  /api/posts
  {
    name: "naver",
    url: "naver.com",
    visitorData: [{}],
    ranking: {},
  }
*/

export const write = async (ctx) => {
  const { name, url } = ctx.request.body;
  const post = new Post({
    // Post 인스턴스 생성
    name,
    url,
  });
  try {
    await post.save(); // db에 저장
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};
