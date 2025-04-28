Это фронтенд часть проекта Time Capsule - сайт, позволяющий создавать капулу времени и отправлять письма в будущее.

Live Demo:
Frontend: https://nfac-frontend.vercel.app/

Стек технологий: 
- Fronted: React + Vite
- Backend: Go (Golang) + Chi Router
- Database: PostgreSQL (Supabase)
- SMTP: Mailtrap
- Deployment: Vercel (Frontend), Render (Backend)

Возможности:
- Отправка письма в будущее на выбранную дату
- Отображение всех созданных капсул в виде таблицы
- Автоматическая проверка даты и отправка письма: обновления статуса письма (Pending - пока не отправлено, Sent - отправлено)
- Хранение писем (данные письма) в облачной базе данных
- Реализация фона работы через планировщик (cron)

Архитектура:
src/
 ├── components/
 │    ├── CreateCapsuleForm.jsx
 │    └── CapsulesList.jsx
 ├── App.jsx
 └── App.css

Команды и запуск фронтенда:
    npm install
    npm run dev

Backend repository: https://github.com/nazirasabyraly/nfac_backend

Скриншот:
![image](https://github.com/user-attachments/assets/80cdfcf6-d1bd-4f54-8c46-492b3bc88490)






