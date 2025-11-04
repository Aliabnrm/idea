## Routine

یک مونو‌ریپو ساده شامل Backend (Express + Prisma + PostgreSQL) و Frontend (Next.js) برای مدیریت کاربران/پروژه/تسک.

### ساختار پوشه‌ها

- `backend/`: سرور Express به زبان TypeScript با Prisma
- `frontend/`: اپ Next.js به زبان TypeScript

### پیش‌نیازها

- Node.js 18+ و Yarn 1.x
- PostgreSQL در حال اجرا

### نصب

در دو ترمینال جداگانه:

1. Backend

```bash
cd backend
yarn
```

2. Frontend

```bash
cd frontend
yarn
```

### متغیرهای محیطی

1. Backend (`backend/.env`)

```bash
PORT=4000
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/DB_NAME?schema=public
JWT_SECRET=your-very-strong-secret
```

2. Frontend (`frontend/.env.local`)

```bash
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

نکته: `NEXT_PUBLIC_API_URL` باید به ریشه API بک‌اند اشاره کند که در این پروژه `/api` است.

### پایگاه‌داده و Prisma (Backend)

- اسکیما در `backend/prisma/schema.prisma` تعریف شده است:
  - مدل‌ها: `User`, `Project`, `Task` و `TaskStatus` enum
- فرمان‌های متداول:

```bash
cd backend
# اجرای مایگریشن‌ها (محیط توسعه)
npx prisma migrate dev

# تولید کلاینت Prisma
npx prisma generate

# مشاهده دیتابیس با UI
npx prisma studio
```

### اجرای پروژه

1. Backend (پورت پیش‌فرض 4000)

```bash
cd backend
yarn dev
# یا برای تولید
yarn build && yarn start
```

2. Frontend (پورت پیش‌فرض 3000)

```bash
cd frontend
yarn dev
# یا برای تولید
yarn build && yarn start
```

پس از اجرا:

- Backend: `http://localhost:4000`
- Frontend: `http://localhost:3000`

### اسکریپت‌ها

1. Backend (`backend/package.json`)

- `yarn dev`: اجرای سرور با `tsx watch src/server.ts`
- `yarn build`: کامپایل TypeScript
- `yarn start`: اجرای `dist/server.js`

2. Frontend (`frontend/package.json`)

- `yarn dev`: اجرای Next dev
- `yarn build`: بیلد Next
- `yarn start`: اجرای Next روی بیلد
- `yarn lint`: اجرای ESLint

### میان‌افزار و پیکربندی Backend

- CORS و JSON body parser فعال است (`backend/src/app.ts`).
- متغیرها از `.env` بارگذاری می‌شوند (`backend/src/server.ts`, `backend/src/config/env.ts`).
- Prisma client در `backend/src/config/prisma.ts` مقداردهی شده.

### APIهای موجود (تا این لحظه)

ریشه مسیرها در بک‌اند: `/api`

- Users (`backend/src/modules/user`):

  - `POST /api/users` — ثبت‌نام کاربر جدید با فیلدهای `name`, `email`, `password`

- Projects (`backend/src/modules/project`):
  - مسیرها هنوز کامنت شده‌اند و در حال حاضر فعال نیستند.

توجه: مسیر `POST /api/auth/login` هنوز در بک‌اند پیاده‌سازی نشده است، اما فرانت‌اند انتظار آن را دارد. برای تکمیل ورود، لازم است مسیر لاگین اضافه شود (صدور JWT بر اساس ایمیل/رمز عبور).

### پاک کردن دیتا های table User

فایل اسکریپت: `backend/src/scripts/clearUsers.ts`

این اسکریپت با استفاده از Prisma همه رکوردهای جدول `User` را حذف می‌کند و تعداد رکوردهای حذف‌شده را چاپ می‌کند.

پیش‌نیازها:

- مقداردهی `DATABASE_URL` در `backend/.env`

اجرای مستقیم (محیط توسعه با TypeScript):

```bash
cd backend
npx tsx src/scripts/clearUsers.ts
```

اجرای بعد از بیلد (JavaScript خروجی):

```bash
cd backend
yarn build
node dist/scripts/clearUsers.js
```

افزودن اسکریپت npm (اختیاری):

```json
// backend/package.json
{
  "scripts": {
    "clear:users": "tsx src/scripts/clearUsers.ts"
  }
}
```

سپس:

```bash
cd backend
yarn clear:users
```

هشدار: این عملیات غیرقابل بازگشت است و تمام کاربران را حذف می‌کند. در محیط تولید با احتیاط کامل اجرا کنید.
