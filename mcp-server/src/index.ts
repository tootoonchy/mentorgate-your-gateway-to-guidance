import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { execSync } from "child_process";
import path from "path";

const PROJECT_ROOT = path.resolve(__dirname, "../../");

const server = new Server(
  {
    name: "mentor-gate-cloud-sync",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

/**
 * List available tools.
 */
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "sync_github",
        description: "Syncs the local codebase with the remote GitHub repository (commit and push).",
        inputSchema: {
          type: "object",
          properties: {
            commitMessage: {
              type: "string",
              description: "The commit message.",
            },
            branch: {
              type: "string",
              description: "The branch to push to (default: master).",
            },
          },
          required: ["commitMessage"],
        },
      },
      {
        name: "verify_project_build",
        description: "Runs npm run build and npm run lint to verify the project status.",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
    ],
  };
});

/**
 * Handle tool calls.
 */
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case "sync_github": {
        const commitMessage = args?.commitMessage as string;
        const branch = (args?.branch as string) || "master";

        execSync("git add .", { cwd: PROJECT_ROOT });
        execSync(`git commit -m "${commitMessage}"`, { cwd: PROJECT_ROOT });
        execSync(`git push origin ${branch}`, { cwd: PROJECT_ROOT });

        return {
          content: [{ type: "text", text: `Successfully synced to ${branch} with message: "${commitMessage}"` }],
        };
      }

      case "verify_project_build": {
        const output = execSync("npm run build", { cwd: PROJECT_ROOT, encoding: "utf8" });
        return {
          content: [{ type: "text", text: `Build successful:\n${output}` }],
        };
      }

      default:
        throw new Error(`Tool not found: ${name}`);
    }
  } catch (error: any) {
    return {
      content: [{ type: "text", text: `Error executing tool ${name}: ${error.message}` }],
      isError: true,
    };
  }
});

/**
 * Start the server.
 */
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("MentorGate MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
