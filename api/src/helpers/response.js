const successResponse = (
  res, message, statusCode, data,
) => res.status(statusCode).json({
  message, data,
});

export default successResponse;
