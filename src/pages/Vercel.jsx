{
    "buildCommand": "cd client && yarn install && ./node_modules/vite/bin/vite.js build",
    "outputDirectory": "client/dist",
    "framework": "vite",
    "rewrites": [
      {
        "source": "/api/(.*)",
        "destination": "/api/index.js"
      },
      {"source": "/(.*)", "destination": "/"}
    ]
  }