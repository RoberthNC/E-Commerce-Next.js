# Description

## Run the project in development

1. Clone the project

```
git clone ...
```

2. Copy ".env.template" file and rename it to ".env"
3. Install dependencies

```
npm install
```

4. Up database using

```
docker compose up -d
```

5. Run prisma migrations

```
npx prisma migrate dev --name ...
```

6. Run the project

```
npm run dev
```

## Run the project in production
