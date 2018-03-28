const errorMessages = {
  10: 'Неверный запрос',
  100: 'Неверное имя пользователя или пароль',
  101: 'Требуется авторизация',
  102: 'Повторная авторизация невозможна',
  103: 'На данном e-mail уже зарегистрирован другой пользователь',
  104: 'Пользователь с данным e-mail не найден',
  105: 'Истекло время изменения пароля',
  400: 'Ошибка валидации БД',
  401: 'userID не найден',
  600: 'Неверный запрос',
  601: 'В запросе отсутствует необходимый параметр',
  602: 'Tag и Source не могут быть числами',
  603: 'Ошибка потока данных',
  605: 'Внутренняя ошибка',
  606: 'Файл не найден',
  620: 'Неверный тип поискового запроса',
  800: 'Запрашиваемый адрес смарт-контракта не обнаружен',
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
