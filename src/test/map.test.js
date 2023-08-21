import ErrorRepository from "../js/map";

test("проверка, вывода ошибки", () => {
  const errorcode = new ErrorRepository();
  errorcode.addError(404, "Page not found");
  errorcode.addError(500, "Internal server error");
  errorcode.addError(403, "Access denied");
  expect(errorcode.translate(404)).toBe("Page not found");
});

test("проверка, отсутвия подходящей ошибки", () => {
  const errorcode = new ErrorRepository();
  errorcode.addError(404, "Page not found");
  errorcode.addError(500, "Internal server error");
  errorcode.addError(403, "Access denied");
  expect(errorcode.translate(205)).toBe("Неизвестная ошибка");
});
