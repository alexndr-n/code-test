<h1 align="center"></h1>

# Prerequisites

- [NodeJS](https://nodejs.org/en/) (use nvm to manage versions)
- [NPM](https://www.npmjs.com/get-npm)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

## Editor Setup

- [ESLint/Prettier](https://eslint.org/docs/user-guide/integrations#editors)

# Instructions

## Overview

This is an project to assess engineers for the Create, Inc. freelance marketplace platform. We appreciate you taking the time to participate.

This is a live exercise. We expect this to take 30-45min.

## Task

You are responsible for creating a simple shopping website.

### Frontend

In `src/pages/index.tsx`, you should implement the UI for displaying the `items` that are for sale, which should be queried from the api.

The client has specified the following UI requirements:

- Each product should be shown on the home page, with their name and price
- If an item is out of stock (`quantity = 0`) it should still be listed and show it is out of stock and should be at the bottom of the list.
- You should be able to buy any of the products via a `Buy` button that is listed alongside each product. Clicking this button should call the `buy` function provided from the api.
- Bonus: While the buy request is running, inform the user.
- No styling is required for this exercise

### Backend

- Allow users to get items
- Manage an inventory in memory (will reset on server restart)
- The backend should throw errors when the user has insufficient balance to buy an item or when an inventory is out of stock

### Running the API

This app runs on [Express](https://expressjs.com/), but the necessary scripts from this assignment are all available via yarn:

| Command    | Description                                                |
| ---------- | ---------------------------------------------------------- |
| `yarn dev` | starts a development server for the api with hot reloading |

Once you run `yarn dev`, the api will be running at `localhost:8000`.

### Running the App

This app runs on [Next.js](https://nextjs.org/), but the necessary scripts from this assignment are all available via yarn:

| Command    | Description                                                |
| ---------- | ---------------------------------------------------------- |
| `yarn dev` | starts a development server for the app with hot reloading |

Once you run `yarn dev`, the app will be running at `localhost:3000`.
