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

### 1. Установка зависимостей

```bash
npm install
```

### 2. Запуск dev-сервера

```bash
npm run dev
```

### 3. Открыть сайт

```text
http://localhost:3000
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
# Проверка линтером
npm run lint

# Dev режим
npm run dev

# Production build
npm run build

# Production start
npm run start
```

## Что делать, если сайт "ломается" в dev

Иногда Next.js кеширует старые чанки (`404` на `/_next/static/...` или ошибка `Cannot find module './xxx.js'`).

### Windows (PowerShell / CMD)

1. Останови сервер (`Ctrl + C`)
2. Удали кеш `.next`
3. Запусти снова

```powershell
cmd /c rmdir /s /q .next
npm run dev
```

Если занят порт `3000`:

```powershell
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### macOS / Linux

```bash
rm -rf .next
npm run dev
```

Если занят порт `3000`:

```bash
lsof -i :3000
kill -9 <PID>
```

## Переустановка зависимостей (если совсем нестабильно)

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
