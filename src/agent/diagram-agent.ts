import { AIChatAgent } from '@cloudflare/ai-chat'
import { convertToModelMessages, streamText } from 'ai'
import { createWorkersAI } from 'workers-ai-provider'

export class DiagramAgent extends AIChatAgent {
  maxPersistedMessages = 200

  async onChatMessage() {
    const workersai = createWorkersAI({ binding: this.env.AI })

    const result = streamText({
      model: workersai('@cf/zai-org/glm-4.7-flash'),
      messages: await convertToModelMessages(this.messages),
    })

    return result.toUIMessageStreamResponse()
  }
}
