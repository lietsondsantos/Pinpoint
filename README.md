<div align="center" style="margin-bottom: 2rem">
  <img src="./public/logo.png" alt="Project Logo" width="150" style="margin-bottom: 0.5rem" />
  <h1>Pinpoint</h1>
</div>

<div align="center" style="margin-bottom: 5rem">
  <img src="https://img.shields.io/badge/Version-1.0.0-brightgreen" alt="version" />
  <img src="https://img.shields.io/github/last-commit/lietsondsantos/Pinpoint" alt="last-communit" />&nbsp;&nbsp;
  <img src="https://img.shields.io/github/issues/lietsondsantos/Pinpoint" alt="issues" />&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/license-MIT-brightgreen" alt="license" />
</div>

## Getting Started

Pinpoint is an IP address tracking website integrating with a geolocation map in which the user can see in real time where the searched IP address is located, the user has the possibility of searching for any public IP address. For security reasons, the data presented on the map is not 100% accurate in order to avoid constraints.

## :package: Technologies

- `Vite`
- `React.js`
- `TypeScript`
- `@tanstack/react-query`
- `Axios`
- `Zod`
- `Leaflet`
- `React-hook-form`
- `Styled-Components`
- `Eslint`
- `Prettier`
- `Husky`

## :file_folder: Folder structure

```
.
├── src               # 
|   ├── utils         # Contains all modules that provide generic utility functionality.
|   ├── styles        # Contains all global styles of the application including color tokens etc...
|   ├── services      # Contains all modules to retrieve data from external APIs, such as RESTful or GraphQL APIs.
|   ├── components    # Contains all page components
|   └── @types        # Contains all type definitions for third-party libraries or frameworks.
|
├── public            # Contains all static files that will be served directly by the web server.
|
└── .husky            # Contains configuration files that define which Git hooks will be used and what scripts they should execute.
```

## :flight_departure: Running the Project

To run the project in your local environment, follow these steps:

> :warning: **Warning:** Before running the project make sure to add your IPDATA API key to the .env file (.env.example).

1. Clone the repository to your local machine.
2. Run `pnpm i` in the project directory to install the required dependencies.
3. Run `pnpm run dev` to get the project started.
4. Open [http://localhost:5173](http://localhost:5173) (or the address shown in your console) in your web browser to view the app.
