import {App, AppOptions, Block} from '@slack/bolt'
import { exampleBlock } from './block'

// Initializes your app with your bot token and signing secret
const config: AppOptions = {
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
}

const app = new App(config)
app.message('hello', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say({blocks: exampleBlock({name: "HOGE"}) as any as Block[]});
});
app.start(process.env.PORT ? Number(process.env.PORT): 3000).then(server => {
  console.log(`⚡️ Bolt app is running! PORT: ${server?.address()}`)
})