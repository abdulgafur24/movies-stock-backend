# Movies collection CRUD application API
Simple CRUD application for movie collections with Apollo server


## Clone project

```bash
git clone https://github.com/abdulgafur24/movies-stock-backend.git
```

## Start app locally 

```bash
cd movies-stock-backend

npm install
npm run dev
# or
yarn
yarn dev
```

Create `.env` file in `prisma` directory. Then add `DATABASE_URL` key with your database url value.

For example:
```
DATABASE_URL=postgres://postgres:12345678@localhost:5432/postgres
```

Then run following command to executes the migration against your database.

```bash
npx prisma migrate up --experimental
```

Now you can start app with

```bash
node index.js
```

Server will available at `localhost:8080`
