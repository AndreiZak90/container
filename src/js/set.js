export class Character {
  constructor(name) {
    this.name = name;
  }
}

export class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error("Персонаж уже есть в команде");
    }

    this.members.add(character);
  }

  addAll(...characters) {
    for (let character of characters) {
      this.members.add(character);
    }
  }

  toArray() {
    return [...this.members];
  }
}
