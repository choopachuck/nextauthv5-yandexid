# NextJS 14 (App Router) + NextAuth V5 YandexID serverside authentication example

## Start development

- Create .env.local or .env.production file by copying .env.example file. Then put your values into .env.* file.

- Install dependencies:

```sh
npm ci
```
- configure callback url in YandexID app:

```
http://localhost:3000/api/auth/callback/yandex
```

- Start project:

```sh
npm run dev
```
