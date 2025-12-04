# Bonno Electron & TypeScript Setup Guide

This project is now configured with both TypeScript and Electron support, allowing it to run as both a web app and a desktop application.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Navigate to project directory:**
   ```bash
   cd C:\Users\unipo\Documents\Bonno
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 🖥️ Running the Application

### Web Development Mode
```bash
npm run dev
```
Opens in browser at `http://localhost:5173`

### Electron Development Mode
```bash
# Start Vite dev server first
npm run dev

# In another terminal, run Electron
npm run dev:electron
```

### Run Both Together
```bash
npm run electron:serve
```
This starts both the Vite dev server and Electron app simultaneously.

## 📦 Building for Production

### Build Web Version
```bash
npm run build
```
Creates optimized web build in `dist/` folder.

### Build Electron Apps

**Windows:**
```bash
npm run electron:build:win
```
Creates `.exe` installer in `release/` folder.

**macOS:**
```bash
npm run electron:build:mac
```
Creates `.dmg` file in `release/` folder.

**Linux:**
```bash
npm run electron:build:linux
```
Creates `.AppImage` in `release/` folder.

## 📁 Project Structure

```
Bonno/
├── src/                    # React TypeScript source files
│   ├── components/         # React components (.tsx files)
│   ├── hooks/             # Custom React hooks
│   │   └── useElectron.ts # Hook for Electron features
│   ├── pages/             # Page components
│   └── main.tsx           # Main entry point
├── electron/              # Electron-specific files
│   ├── main.ts            # Electron main process
│   └── preload.js         # Preload script for IPC
├── public/                # Static assets
│   └── output.css         # Compiled Tailwind CSS
├── dist/                  # Web build output
├── dist-electron/         # Electron build output
├── release/               # Electron app distributables
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Project dependencies and scripts
```

## 🔧 TypeScript Configuration

The project uses TypeScript with:
- Strict type checking enabled
- React JSX support
- Path aliases (`@/` maps to `src/`)
- ES2020 target

### Type Definitions
- Electron API types are defined in `electron.d.ts`
- Component props use TypeScript interfaces
- All `.jsx` files converted to `.tsx`

## ⚡ Electron Features

### Available Electron APIs

The `useElectron` hook provides:
- `isElectron`: Boolean indicating if running in Electron
- `appVersion`: Current app version
- `printPass`: Print guest passes directly
- `platform`: Current platform (darwin/win32/linux/web)

### Security

- Context isolation enabled
- Node integration disabled
- Preload script for safe IPC communication
- External links open in default browser

## 🎨 Styling

The project uses Tailwind CSS. To rebuild styles:
```bash
npx tailwindcss -i ./src/index.css -o ./public/output.css --watch
```

## 🐛 Troubleshooting

### Styles not showing
1. Rebuild CSS: `npx tailwindcss -i ./src/index.css -o ./public/output.css`
2. Clear browser cache
3. Check `index.html` references `/output.css`

### Electron not starting
1. Make sure Vite dev server is running first
2. Check no other app is using port 5173
3. Try: `npm run electron:serve`

### TypeScript errors
1. Run `npm run build` to check for type errors
2. VS Code: Restart TypeScript server (Cmd/Ctrl + Shift + P → "Restart TS Server")

### Build errors
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Make sure all TypeScript errors are fixed

## 🔄 Updating Dependencies

```bash
# Check outdated packages
npm outdated

# Update all dependencies
npm update

# Update specific package
npm install package-name@latest
```

## 📝 Notes

- The app works both as a web app and desktop app
- Desktop version has additional features like direct printing
- All components are TypeScript-ready
- Electron app auto-updates can be added with electron-updater

## 🤝 Contributing

1. Make changes in TypeScript files (`.ts`, `.tsx`)
2. Run `npm run build` to check for type errors
3. Test in both web and Electron modes
4. Commit changes with descriptive messages

## 📄 License

This project is configured for the Bonno Guest Portal system.
