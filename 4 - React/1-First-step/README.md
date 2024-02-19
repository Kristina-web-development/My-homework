# React + TypeScript + Vite

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
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list



1) eslint - finde and fix problems 
2) gitignore - Specifies intentionally untracked files to ignore
3) node.js - is an open source server environment 
    Here is how Node.js handles a file request:

      a) Sends the task to the computer's file system.
      b) Ready to handle the next request.
      c) When the file system has opened and read the file, the server returns the content to the client.
      Node.js eliminates the waiting, and simply continues with the next request.
      Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.
    What Can Node.js Do?
      a) Node.js can generate dynamic page content
      b) Node.js can create, open, read, write, delete, and close files on the server
      c) Node.js can collect form data
      d) Node.js can add, delete, modify data in your database


4) The package.json file is core to the Node.js ecosystem and is a fundamental part of understanding and working with Node.js, npm, and even modern JavaScript. 
5) Файл package-lock. json используется для фиксации зависимостей к определенному номеру версии. Этот файл автоматически генерируется (или воспроизводится) при изменении дерева node_modules или файла package. json .package-lock. json is automatically generated for any operations where npm modifies either the node_modules tree, or package. json . It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.


