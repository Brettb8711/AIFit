# AIFit
A novel Machine Learning Implementation designed to act as a web service and application using React. The goal is to create an AI personal trainer that can help anyone, young or old, helping with activities ranging from Physical Therapy to specific sports training.

A starter cross-platform dashboard for AIFit. This scaffold uses Expo + React Native with TypeScript so the same codebase can target web, iOS and Android with minimal changes.

Why this stack?
- React Native + Expo lets you write one UI in TypeScript/React and run it on mobile (iOS/Android) and web using `react-native-web`. That makes porting between phone apps and a browser dashboard straightforward.
- Expo handles a lot of native build configuration, speeding up iteration during UI development.

What I created
- Minimal Expo project files: `package.json`, `app.json`, `tsconfig.json`, `babel.config.js`.
- Basic app in `src/` with `App.tsx`, a `Dashboard` screen and small `Header`/`Card` components.

How to run (Windows PowerShell)
1. Install dependencies (npm):

```powershell
npm install
```

2. Start Expo (web + device options):

```powershell
npm run start
# then press 'w' to open web, 'a' for Android (if set up), 'i' for iOS (mac only)
```

Notes & next steps
- I'll leave the ML model integration points open. The Dashboard components are designed to receive data via simple props or an HTTP API. When you're ready, we can add an API layer (REST or GraphQL) and a local persistence store.
- Suggested next tasks: navigation with React Navigation, state management (Redux / Zustand / Context), authentication, and data sync.

