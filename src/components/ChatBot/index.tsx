import { useAgent } from 'agents/react'
import { useAgentChat } from '@cloudflare/ai-chat/react'

function ChatBot() {
  const agent = useAgent({ agent: 'DiagramAgent' })
  const { messages, sendMessage, status } = useAgentChat({ agent })

  const onSubmitHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    const input = e.currentTarget.elements.namedItem('chat-input') as HTMLInputElement

    sendMessage({ text: input.value })
    input.value = ''
  }

  return (
    <>
      <div className="px-4 py-3 border-b border-gray-200">
        <h1 className="text-lg font-semibold text-gray-800">Diagram Chat</h1>
      </div>

      <ul className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {messages.map((msg) => (
          <li key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                msg.role === 'user' ? 'bg-blue-500 text-white rounded-br-sm' : 'bg-gray-100 text-gray-800 rounded-bl-sm'
              }`}
            >
              {msg.parts.map((part, i) => (part.type === 'text' ? <span key={i}>{part.text}</span> : null))}
            </div>
          </li>
        ))}
      </ul>

      <form onSubmit={onSubmitHandler} className="px-4 py-3 border-t border-gray-200 flex gap-2">
        <input
          name="chat-input"
          placeholder="Describe your diagram..."
          className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm outline-none focus:border-blue-400"
        />
        <button
          type="submit"
          disabled={status !== 'ready'}
          className="rounded-full bg-blue-500 px-4 py-2 text-sm font-medium text-white disabled:opacity-40 hover:bg-blue-600 transition-colors"
        >
          Send
        </button>
      </form>
    </>
  )
}

export default ChatBot
