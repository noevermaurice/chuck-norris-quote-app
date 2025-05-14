# chuck-norris-quote-app for W&S application

## Getting Started

First, run install dependencies:

```bash
npm install
# or
yarn install
```

## Environment Setup

Copy the example environment file and configure it with your settings:

```bash
cp .env.example .env
```

Open the `.env` file and update any necessary configuration values.

## Database Setup with Prisma

This application uses Prisma as an ORM. To set up the database:

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# (Optional) Seed the database with initial data
npx prisma db seed
```

You can also view your database with Prisma Studio:

```bash
npx prisma studio
```

## Start Development Server

To start the development server run:

```bash
npm run dev 
# or 
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Production Build

To build a Production bundle run:

```bash
npm run build 
# or 
yarn build
```

To show the result of the build performance run:
```bash 
npm run start 
# or 
yarn start 
```