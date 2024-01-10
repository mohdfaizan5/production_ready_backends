class ApiResponse {
  constructor(statusCode, data, message = "Everything went right") {
    (this.statusCode = statusCode),
      (this.data = data),
      (this.message = message),
      (this.success = statusCode < 400);
  }
}

export default ApiResponse;