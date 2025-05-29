console.log("Hello via Bun!");

interface Person {
    name: string;
    age: number;
}

const personA: Person = {
    name: "Sid",
    age: 28
}

console.log(`${personA?.name} is ${personA?.age}!`);