# Welcome to SpaceCation
## An airbnb clone with a focus on the future of extraterrestrial vacations.
---
### Full-Stack app with React, Express, Node.js, and PostgreSQL(using sequelize)
[Live Link](https://space-cation.herokuapp.com)
---
#### To run Locally:
- Clone this repository.
- Run `npm install` in both the "frontend" AND "backend" directories to install dependencies.
- Copy `backend/.env.example` file and create your own `backend/.env` file with desired credentials.
  - Note: The `frontend/package.json` is set up with a proxy to use port 5000 in the backend. If you would like to use a different port, change this in the `frontend/package.json` as well.
###### Database setup:
- In PostgreSQL, create a user with the specified credentials in your `backend/.env` file, with `CREATEDB` priveledges.
- Navigate to backend directory in your terminal.
- Run `npx dotenv sequelize db:create`.
  - this will create the database specified in your `.env` file.
- Run `npx dotenv sequelize db:migrate && npx dotenv sequelize db:seed:all`.
  - this will migrate all tables and seed data into your local database.
- Note:
  - to undo migrations and seeds, run `npx dotenv sequelize db:seed:undo:all && npx dotenv sequelize db:migrate:undo:all`.

#### To run application:
- Run `npm start` in the "backend" directory.
- Run `npm start` in the "frontend" directory.
 - If this doesn't automatically open a browser window, navigate to "http://localhost:3000".
- Have fun and enjoy! 

