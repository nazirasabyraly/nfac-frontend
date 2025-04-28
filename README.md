Это фронтенд часть проекта Time Capsule - веб-приложение, позволяющее пользователю отправлять письма себе в будущее на электронную почту. Пользователь указывает email, тему письма, содержание письма (текст сообщения) и дату отправки. Капсула времени хранится до момента отправки.

Backend repository: https://github.com/nazirasabyraly/nfac_backend

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
Работа сайта:

Пользователь создаёт капсулу времени через веб-интерфейс, заполняя поля.
Информация капсулы сохраняется в базе данных Supabase.
Бэкенд каждые 60 секунд проверяет капсулы:
Если наступило дата и время отправки, письмо автоматически отправляется через SMTP.
Статус капсулы обновляется как "отправлено" (Sent)
Локальный запуск:

Клонируйте репозитории фронтенда и бэкенда.
Убедитесь, что установлен Go, Node.js и npm.
Для бэкенда команды: cd nfac_backend go run main.go
Для фронтенда команды: cd nfac_frontend npm install npm run dev
Откройте http://localhost:5173/ для доступа к сайту.

Скриншот:
![image](https://github.com/user-attachments/assets/80cdfcf6-d1bd-4f54-8c46-492b3bc88490)
![image](https://github.com/user-attachments/assets/fc387d61-f492-4a67-b342-103e84fb5a1d)






