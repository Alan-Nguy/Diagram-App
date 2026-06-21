import { routeAgentRequest } from 'agents'
import { DiagramAgent } from './agent/diagram-agent'

// You need to export your argent and the export default fetch function for cloudflare to work.

export { DiagramAgent }

export default {
  async fetch(request: Request, env: Env) {
    return (await routeAgentRequest(request, env)) || new Response('Not Found Bitch.', { status: 404 })
  },
} satisfies ExportedHandler<Env>
