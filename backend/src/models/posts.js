import mongoose from 'mongoose';

const { Schema } = mongoose;

const visitorDataSchema = new Schema({
  daily: {
    visitors: Number,
    pageViews: Number,
  },
  monthly: {
    visitors: Number,
    pageViews: Number,
  },
  yearly: {
    visitors: Number,
    pageViews: Number,
  },
});

const rankingSchema = new Schema({
  dailyRank: Number,
  monthlyRank: Number,
  yearlyRank: Number,
});

const webSiteSchema = new Schema({
  name: String,
  url: String,
  visitorData: Object, // 하루에 한번 data 저장, 지금은 object하나로 저장
  ranking: rankingSchema,
});

const Post = mongoose.model('Post', webSiteSchema, 'websiteData');

export default Post;

// 서버에서 DB로 데이터 동기화
// 매일 하루 한번 DB에 적재해서 트래픽 모아보기(aws, linux, heroku, chart.js)
