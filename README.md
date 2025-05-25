# React TypeScript Application

## Project Structure

### Root Directory Files
- `package.json` - Project configuration, dependencies, and scripts
- `package-lock.json` - Dependency lock file for npm
- `bun.lockb` - Dependency lock file for Bun
- `vite.config.ts` - Vite bundler configuration
- `tsconfig.json` - TypeScript configuration for the project
- `tsconfig.node.json` - TypeScript configuration for Node.js environment
- `tsconfig.app.json` - TypeScript configuration for the application
- `tailwind.config.ts` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration for processing CSS
- `eslint.config.js` - ESLint configuration for code linting
- `components.json` - Configuration for shadcn-ui components
- `.gitignore` - Specifies files to be ignored by Git
- `index.html` - Main HTML entry point

### Source Directory (`src/`)
- `main.tsx` - Application entry point
- `App.tsx` - Root React component
- `App.css` - Styles for the root component
- `index.css` - Global styles and Tailwind imports
- `vite-env.d.ts` - TypeScript declarations for Vite

#### Subdirectories
- `components/` - Reusable React components
- `pages/` - Page-level components and routes
- `lib/` - Utility functions and shared code
- `hooks/` - Custom React hooks

### Public Directory (`public/`)
Contains static assets and files that are served directly.

## Getting Started

### Prerequisites
- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation and Development

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install dependencies
npm i

# Step 4: Start the development server
npm run dev
```

## Technologies Used

This project is built with:

- Vite - Next Generation Frontend Tooling
- TypeScript - JavaScript with syntax for types
- React - A JavaScript library for building user interfaces
- shadcn-ui - Re-usable components built with Radix UI and Tailwind CSS
- Tailwind CSS - A utility-first CSS framework

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Code Style

This project uses ESLint for code linting and formatting. The configuration can be found in `eslint.config.js`.

## Deployment

To deploy this application:

1. Build the project:
```sh
npm run build
```

2. The built files will be in the `dist` directory, which can be deployed to any static hosting service like:
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3
   - or any other static hosting service
