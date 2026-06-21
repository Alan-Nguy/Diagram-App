declare namespace Cloudflare {
  interface GlobalProps {
		mainModule: typeof import("./src/server");
		durableNamespaces: "DiagramAgent";
	}

  interface Env {
    AI: Ai;
    DiagramAgent: DurableObjectNamespace<import("./src/server").DiagramAgent>
  }
}

interface Env extends Cloudflare.Env {}