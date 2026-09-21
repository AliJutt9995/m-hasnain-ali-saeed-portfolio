# Hussnain AI - Real AI Portfolio Assistant

This pack upgrades the portfolio chatbot from keyword replies to a real OpenAI-powered assistant.

## What it does

- Requires visitor email before chat starts.
- Sends the visitor email to your existing Formspree endpoint.
- Sends chat questions to your own Node backend.
- The backend calls the OpenAI Responses API.
- The AI is instructed to answer only from Hussnain's portfolio/profile facts and to avoid inventing claims.
- Includes rate limiting to reduce casual API abuse.
- Keeps the OpenAI API key on the server, never in React.

## Copy these files

- `src/components/PortfolioChatbot.jsx` -> your project's `src/components/`
- `src/styles/chatbot.css` -> your project's `src/styles/`
- `server.js` -> project root
- `server/portfolioKnowledge.js` -> project root `server/` folder
- Replace your `vite.config.js` with the included version.
- Follow `App-addition.txt`.

## Install dependencies

From the project root:

```bash
npm install openai express express-rate-limit dotenv
```

## Create the secret environment file

Duplicate `.env.example` and rename the copy to `.env`.

Put your OpenAI API key in it:

```env
OPENAI_API_KEY=YOUR_REAL_KEY_HERE
PORT=3001
```

Never put the key in `PortfolioChatbot.jsx`, `VITE_...`, GitHub, or any client-side file.

## Run locally

Use two VS Code terminals.

Terminal 1:
```bash
npm run dev
```

Terminal 2:
```bash
node server.js
```

The Node backend runs on port 3001. Vite proxies `/api/*` to it automatically.

Optional one-command setup: install `concurrently` and change your `dev` script to run both processes together.

## Test

1. Open the portfolio.
2. Open Hussnain AI from the bottom-right button.
3. Enter a test email.
4. Confirm Formspree sends you the visitor notification.
5. Ask: `Tell me about your ThemeForest experience.`
6. Ask: `Can Hussnain build a WooCommerce website?`
7. Ask an unrelated question such as `Who won the World Cup?` - the assistant should redirect to portfolio topics rather than inventing an answer.

## Deployment note

The React build alone is not enough for this AI assistant. Your host must also run the Node backend (`server.js`) or you should move `/api/chat` to a serverless function (for example Vercel/Netlify/Cloudflare). Keep `OPENAI_API_KEY` as a server-side environment variable on the hosting platform.
