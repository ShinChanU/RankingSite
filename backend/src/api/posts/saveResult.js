import Post from '../../models/posts';

const saveResult = async (dataObj) => {
  console.log(dataObj);
  const post = new Post({
    visitorData: dataObj,
  });
  try {
    await post.save();
  } catch (e) {
    console.log(e);
  }
};

export default saveResult;
