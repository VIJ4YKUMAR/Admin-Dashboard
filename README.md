# Deployment Link
https://vj-admin-dashboard.netlify.app

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Table of Contents

- [Getting Started](#getting-started)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Configuration](#configuration)
- [License](#license)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (for managing packages)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/VIJ4YKUMAR/Admin-Dashboard.git
   cd your-repo-name

2. To install the dependencies:

  npm install
  # or 
  yarn install

3. To start the development server, run:

  npm run dev
  # or
  yarn dev

  This will start the Vite development server, and you can access your app at http://localhost:3000 (or the port specified in your Vite config).

4. To create a production build of your app, run:

  npm run build
  # or
  yarn build

Configuration:
You can customize the Vite configuration in the vite.config.js file. This includes settings for plugins, server options, and build options.

Design Decisions:
  The given figma design is a copy of the snowUI's dashboard template, so majority of the icons were not available in mui, I tried as much as possible to match the       
  icons.

Challenges faced:
  The main challenge was initially I decided to start with react with typescript using create-react-app and started setting up the project and making the necessary configurations, But I couldn't be able to proceed with typescript, because of my mac os version(catalina). I was facing package incompatibilities with the homebrew package manager in my system, so I decided to proceed with Vite+React with jsx. Also the designs like the bars in the bar chart, the space between the section in pie chart were difficult to replicate perfectly, I have tried to implement them as close as possible with the design.
