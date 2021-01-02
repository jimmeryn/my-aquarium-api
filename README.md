# MY AQUARIUM API

## Setup

What do you need?

- docker - https://www.docker.com/products/docker-desktop
- node - https://nodejs.org/en/

```sh
# Clone the repo
git clone git@github.com:jimmeryn/my-aquarium-api.git

# Go to the repo
cd my-aquarium-api

# Install deps
npm install

# Create the database
```

Then create `.env` file with the following contents.

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"
```

### Development

```sh
# Run the application in development mode on localhost:3000
npm run dev

# Open prisma studio on localhost:5000
npx prisma studio
```

### Migrations

To create new migration run

```sh
npx prisma migrate dev --name migrationName --preview-feature
```
