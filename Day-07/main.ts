// 30 Day DSA challenge from Hello coders team

// Day:7

// Question 1: OOP Related

// Create a TypeScript class Book that has properties for title, author, publicationYear, and genre. The class should have methods to:
// 1. Display the book details.
// 2. Check if the book is a recent publication (within the last 5 years).
// 3. Change the genre of the book.
// 4. Check if the book's author matches a given author name.

// *Hints:*
// - Use console.log to print book details in the displayDetails method.
// - In the isRecent method, get the current year using new Date().getFullYear() and compare it with publicationYear.
// - Update the genre property in the changeGenre method.
// - In the isAuthor method, compare the author property with the given author name.
class Book {
  title: string;
  author: string;
  publicationYear: number;
  genre: string;
  constructor(
    title: string,
    author: string,
    publicationYear: number,
    genre: string
  ) {
    (this.title = title), (this.author = author);
    this.publicationYear = publicationYear;
    this.genre = genre;
  }
  displayDetails() {
    console.log(this.title);
    console.log(this.author);
    console.log(this.publicationYear);
    console.log(this.genre);
  }
  isRecent(): boolean {
    const year = new Date().getFullYear();
    return this.publicationYear >= year - 5;
  }
  changeGenre(updatedGenre: string) {
    this.genre = updatedGenre;
  }
  isAuthor(authorName: string): boolean {
    return this.author.toLowerCase() === authorName.toLowerCase();
  }
}

// const book = new Book("The Glorify God", "John Gillette", 2019, "Spritual");
// book.displayDetails(); // Displays book details
// console.log(book.isRecent()); // Checks if the book is a recent publication
// book.changeGenre("Devine"); // Changes the genre of the book
// console.log(book.isAuthor("john Ducket")); // Checks if the author matches "john ducket"
// //  Question 2: Nested Object with Interfaces

// Create an interface Person that includes properties for name, age, email, phone, and addresses. The addresses property should be an array of objects, each containing street, city, state, and zipcode. Write a function to find the first person living in a specific city and return their name and email.

// *Hints:*
// - Define the Address and Person interfaces with the required properties.
// - Use nested loops to iterate through the people array and each person's addresses array.
// - Check if the city property matches the given city in the function.
// - Return the name and email of the first matching person or undefined if no match is found.

interface Address {
  street: number;
  city: string;
  state: string;
  zipcode: number;
}
interface Person {
  name: string;
  age: number;
  email: string;
  phone: number;
  addresses: Address[];
}


function returnPersonData(
    data: Person[],
    targetCity: string
): { name: string; email: string } | undefined {
    for (const person of data) {
        for (const address of person.addresses) {
            if (address.city.toLowerCase() === targetCity.toLowerCase())
                return { name: person.name, email: person.email };
        }
    }
    return undefined;
}
const person1: Person[] = [
  {
    name: "sara",
    age: 12,
    email: "sara@gmail.com",
    phone: 1223434246,
    addresses: [
      { street: 2, city: "Quetta", state: "Balochistan", zipcode: 71000 },
      { street: 2, city: "Hyderabad", state: "sindh", zipcode: 72000 },
    ],
  },
  {
    name: "natalia",
    age: 12,
    email: "natalia@gmail.com",
    phone: 1223434246,
    addresses: [
      { street: 2, city: "Karachi", state: "Balochistan", zipcode: 73000 },
      { street: 2, city: "Larkana", state: "sindh", zipcode: 71000 },
    ],
  },
  {
    name: "fozia",
    age: 12,
    email: "fozia@gmail.com",
    phone: 1223434246,
    addresses: [
      { street: 2, city: "Hyderabad", state: "Punjab", zipcode: 71000 },
      { street: 2, city: "Faisalabad", state: "sindh", zipcode: 71000 },
    ],
  },
];
console.log(returnPersonData(person1, "Lahore"));
console.log(returnPersonData(person1, "Hyderabad"));
