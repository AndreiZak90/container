import { Character, Team } from "../js/set";

test("тест добавления произвольного количества персонажей", () => {
  const char1 = new Character("oleg");
  const char2 = new Character("igor");
  const char3 = new Character("ivan");
  const char4 = new Character("petr");

  const teamTwo = new Team();
  teamTwo.addAll(char1.name, char2.name, char3.name, char4.name);

  const result = ["oleg", "igor", "ivan", "petr"];

  expect(teamTwo.toArray()).toEqual(result);
});

test("тест вывода ошибки, если имя уже существует", () => {
  const char1 = new Character("oleg");

  const teamTwo = new Team();
  teamTwo.add(char1);

  expect(() => teamTwo.add(char1)).toThrowError("Персонаж уже есть в команде");
});
