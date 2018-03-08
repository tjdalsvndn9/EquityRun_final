const {TWILIO_SID,TWILIO_TOKEN} = require('../config/secret');
const client = require('twilio')(TWILIO_SID, TWILIO_TOKEN);


const sendMessage = async (to,from,body) => {
  const message = await client.messages
  .create({
    to,
    from,
    body,
  })
  return message.sid;
}

const sendCall = async(to,from) => {
  const call = await client.api.calls
  .create({
    url: 'http://demo.twilio.com/docs/voice.xml',
    to,
    from,
  });
  return call.sid;
}


module.exports = {
  sendMessage,
  sendCall
}
