export const successResponse = (message, data = null) => ({
  status: 'success',
  message,
  data,
});

export const errorResponse = (message, status = 'error') => ({
  status,
  message,
});
