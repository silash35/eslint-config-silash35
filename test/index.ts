interface Person {
  name: string;
  age: number;
}

const printPerson = ({ name, age }: Person) => {
  console.log(`Name: ${name}, Age: ${age}`);
};

const testPerson: Person = {
  name: "John Doe",
  age: 22,
};

printPerson(testPerson);
