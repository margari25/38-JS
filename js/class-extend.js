class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    sayHi() {
        return `Hi, my name is ${this.name} and my color is ${tghis.color}.`;

    }

    voice() {
        return `${this.name}: ${this.sound}!`
    }
}

class Dog extends Pet {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Au au';
    }

}

class Cat extends Pet {
    constructor(name, color, lives = 9) {
        super(name, color);
        this.lives = lives;
        this.sound = 'Miau';
    }
}

const rex = new Dog('Rex', 'black')
const sniegius = new Cat('Sniegius', 'white', 8)

console.log(rex);
console.log(sniegius);

console.log(rex.voice());
console.log(sniegius.voice());
