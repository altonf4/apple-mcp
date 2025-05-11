# Apple MCP tools

[![smithery badge](https://smithery.ai/badge/@Dhravya/apple-mcp)](https://smithery.ai/server/@Dhravya/apple-mcp)

This is a collection of apple-native tools for the [MCP protocol](https://modelcontextprotocol.com/docs/mcp-protocol).

Here's a step-by-step video about how to set this up, with a demo. - https://x.com/DhravyaShah/status/1892694077679763671

<a href="https://glama.ai/mcp/servers/gq2qg6kxtu">
  <img width="380" height="200" src="https://glama.ai/mcp/servers/gq2qg6kxtu/badge" alt="Apple Server MCP server" />
</a>

![image](https://github.com/user-attachments/assets/56a5ccfa-cb1a-4226-80c5-6cc794cefc34)


<details>
<summary>Here's the JSON to copy</summary>

```
{
  "mcpServers": {
    "apple-mcp": {
      "command": "bunx",
      "args": ["--no-cache", "apple-mcp@latest"]
    }
}

```

</details>

#### Quick install

To install Apple MCP for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@Dhravya/apple-mcp):

```bash
npx -y @smithery/cli@latest install @Dhravya/apple-mcp --client claude
```

... and for cursor, you can do:

```bash
npx -y @smithery/cli@latest install @Dhravya/apple-mcp --client cursor
```


## Features

- Messages:
  - Send messages using the Apple Messages app
  - Read out messages
- Notes:
  - List notes
  - Search & read notes in Apple Notes app
- Contacts:
  - Search contacts for sending messages
- Emails:
  - Send emails with multiple recipients (to, cc, bcc) and file attachments
  - Search emails with custom queries, mailbox selection, and result limits
  - Schedule emails for future delivery
  - List and manage scheduled emails
  - Check unread email counts globally or per mailbox
- Reminders:
  - List all reminders and reminder lists
  - Search for reminders by text
  - Create new reminders with optional due dates and notes
  - Open the Reminders app to view specific reminders
- Calendar:
  - Search calendar events with customizable date ranges
  - List upcoming events
  - Create new calendar events with details like title, location, and notes
  - Open calendar events in the Calendar app
- Web Search:
  - Search the web using DuckDuckGo
  - Retrieve and process content from search results
- Maps:
  - Search for locations and addresses
  - Save locations to favorites
  - Get directions between locations
  - Drop pins on the map
  - Create and list guides
  - Add places to guides

- TODO: Search and open photos in Apple Photos app
- TODO: Search and open music in Apple Music app


You can also daisy-chain commands to create a workflow. Like:
"can you please read the note about people i met in the conference, find their contacts and emails, and send them a message saying thank you for the time."

(it works!)


#### Manual installation

You just need bun, install with `brew install oven-sh/bun/bun`

Now, edit your `claude_desktop_config.json` with this:

```claude_desktop_config.json
{
  "mcpServers": {
    "apple-mcp": {
      "command": "bunx",
      "args": ["@dhravya/apple-mcp@latest"]
    }
  }
}
```

### Usage

Now, ask Claude to use the `apple-mcp` tool.

```
Can you send a message to John Doe?
```

```
find all the notes related to AI and send it to my girlfriend
```

```
create a reminder to "Buy groceries" for tomorrow at 5pm
```

## Local Development

```bash
git clone https://github.com/dhravya/apple-mcp.git
cd apple-mcp
bun install
bun run index.ts
```

enjoy!

# Apple MCP Server

A secure and n8n-compatible Model Context Protocol (MCP) server for Apple services integration.

## Features

- Secure HTTP server with CORS support
- Bearer token authentication
- Rate limiting and request validation
- n8n integration support
- Apple services integration (Contacts, Notes, Messages, Mail, etc.)
- Proper error handling and logging

## Installation

```bash
# Install dependencies
bun install
```

## Configuration

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Security
ALLOWED_ORIGINS=http://localhost:5678,http://localhost:3000
RATE_LIMIT_WINDOW_MS=900000  # 15 minutes
RATE_LIMIT_MAX_REQUESTS=100
API_TOKEN=your-secure-token-here  # Required for authentication

# Logging
LOG_LEVEL=info
```

## Usage

```bash
# Development mode
bun run dev

# Production mode
bun run start
```

## n8n Integration

To use this server with n8n:

1. Start the MCP server using `bun run start`
2. In n8n, create a new HTTP Request node
3. Configure the node with:
   - Method: POST
   - URL: http://localhost:3000/api/tools
   - Headers: 
     - Content-Type: application/json
     - Authorization: Bearer your-secure-token-here
   - Body: Your MCP tool request

## Security Features

- Bearer token authentication
- CORS protection with configurable allowed origins
- Rate limiting to prevent abuse
- Secure headers
- Request validation
- Error handling and logging

## License

MIT
