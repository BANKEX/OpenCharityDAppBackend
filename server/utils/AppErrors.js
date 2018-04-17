const errorMessages = {
  10: 'Wrong request',
  100: 'Incorrect username or password',
  101: 'Authorization required',
  102: 'Re-authorization is not possible',
  103: 'E-mail already in use',
  104: 'Incorrect e-mail',
  105: 'Wrong token',
  400: 'DB validation error',
  600: 'Wrong request',
  601: 'Required param missed in request',
  602: 'Tag и Source no should be number',
  605: 'Internal error',
};

function AppError(httpError, appError, errors) {
  this.name = 'ApplicationError';
  this.status = httpError;
  this.message = errorMessages[appError];
  this.errs = errors;
  this.stack = (new Error()).stack;
}

AppError.prototype = Object.create(Error.prototype);
AppError.prototype.constructor = AppError;

export default AppError;
