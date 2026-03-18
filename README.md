# Momentum Site

Премиальный сайт о тайм-менеджменте и продуктивности на `Next.js + TypeScript + Tailwind + Framer Motion`.

## Стек

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Требования

- Node.js `20.x` (рекомендуется LTS)
- npm `10+`

Проверка версий:

```bash
node -v
npm -v
```

## Быстрый запуск (локально, dev)

### 1. Установить зависимости

```bash
npm install
```

### 2. Запустить dev-сервер

```bash
npm run dev
```

### 3. Открыть сайт

```text
http://localhost:3000
```

## Важно про стабильность dev

`npm run dev` запускается через скрипт `scripts/dev.mjs`, который:

1. очищает `.next` перед запуском
2. очищает `node_modules/.cache/webpack`
3. запускает Next.js с `NEXT_DISABLE_WEBPACK_CACHE=1`

Это защищает от типичных ошибок:

- `Cannot find module './xxx.js'`
- `/_next/static/... 404`
- `Failed to read source code ... (os error 2)`

Если нужно обычное поведение Next без защитного wrapper:

```bash
npm run dev:raw
```

## Production запуск

### 1. Сборка

```bash
npm run build
```

### 2. Запуск production-сервера

```bash
npm run start
```

## Полезные команды

```bash
# Линтер
npm run lint

# Стабильный dev (рекомендуется)
npm run dev

# Raw dev (без авто-очистки)
npm run dev:raw

# Production build
npm run build

# Production start
npm run start
```

## Если порт 3000 занят

### Windows

```powershell
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### macOS / Linux

```bash
lsof -i :3000
kill -9 <PID>
```

## Полная переустановка зависимостей (если нужно)

### Windows

```powershell
cmd /c rmdir /s /q node_modules
del package-lock.json
npm install
npm run dev
```

### macOS / Linux

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## Маршруты

- `/` — главная
- `/about` — о продукте
- `/features` — возможности
- `/pricing` — тарифы
- `/contact` — контакты

## Репозиторий

```text
https://github.com/Xver1Xrd/time-managment
```
