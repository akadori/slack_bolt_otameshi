import { App, AppOptions, Block } from '@slack/bolt'
// import { exampleBlock } from './block'

// Initializes your app with your bot token and signing secret
const config: AppOptions = {
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
}

const app = new App(config)
app.message(':wave:', async (payload) => {
  if (
    payload.message.subtype !== "message_changed" &&
    payload.message.subtype !== "message_deleted" &&
    payload.message.subtype !== "message_replied") {
    await payload.say(`Hellssssso, <@${payload.message.user}>`);
  }
});

app.event('app_mention', async ({payload, client, body, say}) => {
  console.log("test event invoked")
  console.log('body :>> ', body);
  console.log('say :>> ', say);
  const {channel} = payload
  try {
    // Call chat.postMessage with the built-in client
    const result = await client.chat.postMessage({
      channel: channel,
      text: `Welcome to the team! 🎉 You can introduce yourself in this channel.`
    });
    console.log(result);
  }
  catch (error) {
    console.error(error);
  }
})

app.message('care me', async({client, payload}) => {
  console.log("care me");
  try {
    if(app.client.token){
      await client.stars.add(
        {
          token: process.env.SLACK_USER_TOKEN, 
          channel: payload.channel, 
          timestamp: payload.ts
        }
      )
    }
  }catch(e){
    console.log('e :>> ', e);
  }
})

app.start(3000)
