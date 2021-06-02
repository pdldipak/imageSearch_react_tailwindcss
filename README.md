### How to set up tailwind css and styled-component in react app

# Setting up

npx create-react-app [Name]

## Folder structure

├── src
| ├── App.js
| ├── app.styles.js
| ├── App.test.js
| ├── index.css
| ├── index.js
| ├── serviceWorker.js
| ├── setupTests.js
├── .env
├── .gitignore
├── package.json
├── tailwind.config.js
├── README.md
└── yarn.lock

### `Install the dependencies`

npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

### `Install twin.macro`

npm i twin.macro

### `Install styled-components`

npm install styled-components

### `Install and configure CRACO`

npm install @craco/craco

### `Update the **package.json** file`

"scripts": {
     "start": "craco start",
     "build": "craco build",
     "test": "craco test",
      "eject": "react-scripts eject"
}


### `Configuring Tailwind CSS`

npx tailwindcss init

or 

[npx tailwind init tailwind.config.js --full]

[tailwind.config.js]
   purge: [],
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }

### `Include Tailwind in your css .`

[./src/index.css]

**./src/index.css**
@tailwind base;
@tailwind components;
@tailwind utilities;


### Start ###

npm run start 

### `Details how to setup`


\*Tailwind cheat-sheet\*[https://nerdcave.com/tailwind-cheat-sheet]

\*\*[https://github.com/facebook/create-react-app]

\*\*[https://www.npmjs.com/package/tailwindcss]

\*\*[https://www.npmjs.com/package/styled-components]

\*\*[https://www.npmjs.com/package/twin.macro]
