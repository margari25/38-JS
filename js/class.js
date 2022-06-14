console.clear();

class Dog {
    constructor(vardas) {
        this.name = vardas;
        this.boneCount = 0;
        this.sound = "au"
    }

    sayHi() {
        return `${this.name}: Labas!`;
    }

    sayGoodbye(otherName = 'mielas drauge') {
        return `${this.name}: Iki ${otherName}!`;
    }

    voice() {
        const sound = `${this.sound} ${this.sound}`
        return `${this.name}: ${this.capitalize(sound)}!`;
    }

    capitalize(str){
return str;
    }

    // changeVoice() {
    //     this.sound = sound;
    // }

    newBone() {
        return `${this.name}: ${'🦴'.repeat(++this.boneCount)}!`;
    }
}

class Cat {
    constructor(vardas) {
        this.name = vardas;
    }
    sayHi() {
        return `${this.name}: Labas!`;
    }

    sayGoodbye(otherName = 'mielas drauge') {
        return `${this.name}: Iki ${otherName}!`;
    }

}

const rex = new Dog('Rex');
console.log(rex.sayHi());
console.log(rex.sayGoodbye('Maryte'));
console.log(rex.voice());                   // Rex: Au au!
console.log(rex.newBone());                 // Rex: 🦴!
console.log(rex.newBone());                 // Rex: 🦴🦴!
console.log(rex.newBone());                 // Rex: 🦴🦴🦴!
console.log(rex.newBone());                 // Rex: 🦴🦴🦴🦴!

console.log(rex.voice())                    //Rex: Bark bark!
// rex.changeVoice('bark');
console.log(rex.voice())                    //Rex: Bark bark!


const rainis = new Cat ('Rainis');
console.log(rainis.sayHi());
console.log(rainis.sayGoodbye('Petrai'));
console.log(rex.newBone());                 // Rex: 🐭!
console.log(rex.newBone());                 // Rex: 🐭🐭!
console.log(rex.newBone());                 // Rex: 🐭🐭🐭!
console.log(rex.newBone());                 // Rex: 🐭🐭🐭🐭!

