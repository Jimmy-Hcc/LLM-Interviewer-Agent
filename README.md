# LeetCode LLM Interviewer Chrome Extension

A minimal Chrome extension that injects a right-side overlay panel into LeetCode problem pages with a React + TypeScript + Tailwind CSS interface.

## 🚀 Features

- **Right-side overlay panel** on LeetCode problem pages
- **Floating toggle button** in bottom-right corner
- **React + TypeScript + Tailwind CSS** stack
- **Manifest V3** Chrome extension
- **Vite** build system with `vite-plugin-crx-js`

## 🛠 Tech Stack

- ✅ TypeScript
- ✅ React 18
- ✅ Tailwind CSS
- ✅ Vite
- ✅ `vite-plugin-crx-js` for Manifest V3 support
- ✅ Chrome Extension Manifest V3 (MV3)

## 📦 Installation & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Development Mode
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

## 🔧 Loading the Extension in Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top-right)
3. Click **Load unpacked**
4. Select the `dist` folder (created after running `npm run build`)
5. The extension will now be loaded and active

## 🧪 Testing

1. Navigate to any LeetCode problem page: `https://leetcode.com/problems/[problem-name]`
2. You should see a floating blue button with a robot emoji (🤖) in the bottom-right corner
3. Click the button to toggle the LLM Interviewer panel
4. The panel will slide in from the right with the message: "Hello from LLM Interviewer 🚀"

## 📁 Project Structure

```
├── manifest.json          # Chrome extension manifest (MV3)
├── vite.config.ts         # Vite configuration with crx plugin
├── tailwind.config.ts     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies and scripts
├── src/
│   ├── content.tsx        # Main content script
│   ├── LLMPanel.tsx       # React component for the panel
│   ├── toggle.ts          # Panel visibility management
│   └── index.css          # Tailwind CSS imports
└── README.md              # This file
```

## 🎯 Key Components

- **`manifest.json`**: Manifest V3 configuration targeting LeetCode problem pages
- **`src/content.tsx`**: Content script that injects React component
- **`src/LLMPanel.tsx`**: React component displaying the panel content
- **`src/toggle.ts`**: Utility class for managing panel show/hide state
- **`vite.config.ts`**: Configured with `vite-plugin-crx-js` for Chrome extension support

## 🔄 Development Workflow

1. Make changes to your React components in `src/`
2. Run `npm run build` to compile
3. Go to `chrome://extensions/` and click the refresh button on your extension
4. Test on a LeetCode problem page

## 🚀 Next Steps

This minimal setup provides the foundation for:
- Adding LLM integration
- Implementing problem analysis features
- Adding code suggestions and hints
- Building a comprehensive LeetCode learning assistant

## 📝 Notes

- The extension only activates on LeetCode problem pages (`https://leetcode.com/problems/*`)
- The panel is positioned as a fixed overlay on the right side
- Tailwind CSS classes are used for all styling
- The toggle button has hover effects and smooth transitions
