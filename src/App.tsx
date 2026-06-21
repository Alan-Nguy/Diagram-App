import ChatBot from './components/ChatBot'
import DiagramSpace from './components/DiagramSpace'

function App() {
  return (
    <main className="grid h-screen [grid-template-areas:'ChatBot_DiagramSpace'] grid-cols-[380px_1fr]">
      <section className="[grid-area:ChatBot] flex flex-col h-screen overflow-hidden border-r border-gray-200 bg-white">
        <ChatBot />
      </section>

      <section className="[grid-area:DiagramSpace] h-screen">
        <DiagramSpace />
      </section>
    </main>
  )
}

export default App
