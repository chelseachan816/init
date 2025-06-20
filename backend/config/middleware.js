module.exports = { 
  settings: { 
    cors: { 
      enabled: true, 
      origin: ['*'] 
    }, 
    upload: { 
      enabled: true, 
      resolve: './src/middlewares/upload' 
    } 
  } 
}; 
