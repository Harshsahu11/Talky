# 🌐 Talky - Language Exchange Platform + Chat & Video Calling App

<div align="center">

**Modern fullstack chat & video calling app for language learners**

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-47A248?style=flat-square&logo=mongodb)](https://mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)

[🚀 Live Demo](https://vartalapa.onrender.com/) • [📚 Docs](https://github.com/HarshSahu/Vartalapa) • [🐛 Issues](https://github.com/HarshSahu/vartalapa/issues)

</div>

<img width="1889" height="928" alt="Screenshot 2025-08-04 213530" src="https://github.com/user-attachments/assets/5abdc5a4-8c57-4f5f-a891-42db1b5769ae" />

<img width="1904" height="1017" alt="Screenshot 2025-08-04 212944" src="https://github.com/user-attachments/assets/c699149d-ded7-4b4a-8482-39ff61629c1e" />


## ✨ Features

- 🌐 **Real-time Messaging** - Instant chat with typing indicators & reactions
- 📹 **Video Calling** - 1-on-1 and group calls with screen sharing & recording
- 🔐 **JWT Authentication** - Secure login with protected routes
- 🌍 **Language Exchange** - Smart user matching based on languages
- 🎨 **32 Unique Themes** - Dark/light modes with modern UI
- ⚡ **Global State Management** - Zustand + TanStack Query
- 🚨 **Error Handling** - Robust error boundaries and validation
- 📱 **Responsive Design** - Optimized for all devices

## 🛠️ Tech Stack

**Frontend:** React, TailwindCSS, TanStack Query, Zustand, Lucide Icons
**Backend:** Node.js, Express, MongoDB, Socket.io, JWT
**Video:** Stream SDK, WebRTC
**Deployment:** Render , MongoDB Atlas

## 🚀 Quick Start

### Installation

```bash
# Clone repository
git clone https://github.com/HarshSahu/vartalapa.git
cd vartalapa

# Install dependencies
npm install
```

## Environment Setup :
### Root .env:
```bash
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
PORT=5000
CLIENT_URL=http://localhost:3000
```

### Client .env:
```bash
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_STREAM_API_KEY=your_stream_api_key
```

## Run Application
```bash
# Backend
npm run dev

# Frontend (new terminal)
cd client && npm start
```

### Access: Frontend at http://localhost:3000, Backend at http://localhost:5000

## 📁 Structure
vartalapa/
├── client/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── store/
├── server/          # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── middleware/
└── package.json


## 🎨 Themes
32 built-in themes including: Light, Dark, Cupcake, Cyberpunk, Dracula, Nord, and more!
```jsx
import { useTheme } from './hooks/useTheme';

const { theme, setTheme, themes } = useTheme();

```

## 🚀 Deployment : RENDER

## 🤝 Contributing
1.Fork the repository
2. Create feature branch (git checkout -b feature/name)
3. Commit changes (git commit -m 'Add feature')
4. Push branch (git push origin feature/name)
5. Open Pull Request

## 📝 License
MIT License - see LICENSE file for details.

## 🙏 Acknowledgments
Stream - Video calling infrastructure
TailwindCSS - Styling framework
MongoDB - Database solution

<div align="center">
⭐ Star this repo if you found it helpful!
Made with ❤️ by Harsh Sahu
</div>
```
