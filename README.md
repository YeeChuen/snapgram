# SnapGram

[Website](www.google.com)

Snapgram is an Instagram-like social media application designed for users to share their lifestyle and experiences through photos, enabling them to spread the joy and excitement of their personal lives with a global audience.

Project credit to: [Youtube](https://www.youtube.com/watch?v=_W3R2VwRyF4)

## Project Goal

The goal of this project is to experience, learn, and develop a web application with essential user features, focusing on building a social media application. This experience is crucial as user login features are a common component in many web applications. Learning to create a basic social media app provides foundational knowledge that can be applied to various other use cases beyond social media. Additionally, this project involves leveraging a relational database management system to define relationships between entities, such as users and posts. Understanding the code and directory structure for a large-scale social media project is another key objective, equipping me with the skills to handle complex web development tasks efficiently.

## Packages

Developed an Instagram-like social media application utilizing TypeScript and the React framework for a dynamic and responsive user interface. Styled the application using ShadCN and TailwindCSS to ensure a visually appealing and consistent design. Integrated AppWrite DB for robust database management and utilized TanStack (React Query) for efficient server-state synchronization and data fetching.

## Built with React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
