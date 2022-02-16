require('dotenv').config();

module.exports = Object.freeze({
  SLACK_API_TOKEN: process.env.SLACK_API_TOKEN || false,
  SLACK_URL_API: process.env.SLACK_URL_API || false,
  SLACK_CHANNEL_ID: process.env.SLACK_CHANNEL_ID || false,

  GOOGLE_APPLICATION_CREDENTIALS: process.env.GOOGLE_APPLICATION_CREDENTIALS || false,
  TOPIC_NAME: process.env.TOPIC_NAME || false
});