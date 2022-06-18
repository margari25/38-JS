console.clear();

class Dog {
    constructor(name) {
        this.name = name;
        this.boneCount = 0;
        this.sound = 'au';
    }

    sayHi() {
        return `${this.name}: Labas!`;
    }

    sayGoodbye(otherName = 'mielas drauge') {
        return `${this.name}: Iki ${otherName}!`;
    }

    voice() {
        const sound = `${this.sound} ${this.sound}`;
        return `${this.name}: ${this.capitalize(sound)}!`;
    }

    capitalize(str) {
        // labas rytas -> Labas Rytas
        return str
            .split(' ')
            .map(w => this.firstLetterUp(w))
            .join(' ');
    }

    firstLetterUp(str) {
        // labas rytas -> Labas rytas
        // return str.replace(str[0], str[0].toUpperCase());
        return str[0].toUpperCase() + str.slice(1);
    }

    changeVoice(sound) {
        this.sound = sound;
    }

    newBone() {
        return `${this.name}: ${'🦴'.repeat(++this.boneCount)}!`;
    }
}

class Cat {
    constructor(name) {
        this.name = name;
        this.mouseCount = 0;
    }

    sayHi() {
        return `${this.name}: Labas!`;
    }

    sayGoodbye(otherName = 'mielas drauge') {
        return `${this.name}: Iki ${otherName}!`;
    }

    newMouse() {
        return `${this.name}: ${'🐭'.repeat(++this.mouseCount)}!`;
    }
}

const rex = new Dog('Rex');
console.log(rex.sayHi());                   // Rex: Labas!
console.log(rex.sayGoodbye('Maryte'));      // Rex: Iki Maryte!
console.log(rex.newBone());                 // Rex: 🦴!
console.log(rex.newBone());                 // Rex: 🦴🦴!
console.log(rex.newBone());                 // Rex: 🦴🦴🦴!
console.log(rex.newBone());                 // Rex: 🦴🦴🦴🦴!

console.log(rex.voice());                   // Rex: Au au!
rex.changeVoice('bark');
console.log(rex.voice());                   // Rex: Bark bark!

const rainis = new Cat('Rainis');
console.log(rainis.sayHi());                // Rainis: Labas!
console.log(rainis.sayGoodbye('Petrai'));   // Rainis: Iki Petrai!
console.log(rainis.newMouse());             // Rainis: 🐭!
console.log(rainis.newMouse());             // Rainis: 🐭🐭!
console.log(rainis.newMouse());             // Rainis: 🐭🐭🐭!
console.log(rainis.newMouse());             // Rainis: 🐭🐭🐭🐭!