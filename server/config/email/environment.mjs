export const config = {
  port: process.env.PORT || 3000,
  cors: {
    origins: [
      'https://taniagutti.netlify.app',
      'https://taniagutti.com',
      'http:///localhost:5173',
    ],
    methods: ['POST', 'GET'],
    credentials: true,
  },
};
