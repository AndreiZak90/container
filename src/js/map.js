export default class ErrorRepository {
  constructor() {
    this.error = new Map();
  }

  addError(number, description) {
    this.error.set(number, description);
  }

  translate(code) {
    return this.error.has(code) ? this.error.get(code) : "Неизвестная ошибка";
  }
}
