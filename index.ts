function formatString(input: string, toUpper?: boolean): string {
  if (typeof toUpper === "boolean" && toUpper) {
    return input.toUpperCase();
  }
  if (typeof toUpper === "boolean" && !toUpper) {
    return input.toLowerCase();
  }

  return input.toUpperCase();
}
formatString("Hello");
formatString("Hello", true);
formatString("Hello", false);

//
type Item = { title: string; rating: number };

function filterByRating(items: Item[]): Item[] {
  let filteredItems = items.filter((item: Item): Boolean => item.rating >= 4);
  //   console.log(filteredItems);
  return filteredItems;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

filterByRating(books);

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let joinedArray: T[] = [];

  joinedArray = joinedArray.concat(...arrays);

  //   console.log(joinedArray);

  return joinedArray;
}
concatenateArrays(["a", "b"], ["c"]);
concatenateArrays([1, 2], [3, 4], [5]);
//
class Vehicle {
  make: string;
  year: string;

  constructor(make: string, year: string) {
    (this.make = make), (this.year = year);
  }

  getInfo() {
    return `Make : ${this.make}, Year:${this.year}`;
  }
}
class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: string, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {
    return `Model : ${this.model}`;
  }
}
const myCar = new Car("Toyota", 2020, "Corolla");
// const result1 = myCar.getInfo();
// const result2 = myCar.getModel();

// console.log(result1);
// console.log(result2);
function processValue(value: string | number): number | undefined {
  if (typeof value === "string") {
    return value.length;
  }
  if (typeof value === "number") {
    return value * 2;
  }
}
// const result1 = processValue("hello");
// const result2 = processValue(10);

// console.log(result1);
// console.log(result2);
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  const highPrice: number = Math.max(...products.map((p: Product) => p.price));

  let filteredProduct: Product | undefined = products?.find(
    (x: Product) => x.price === highPrice
  );

  return filteredProduct ? filteredProduct : null;
}
const products: Product[] = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

// const result1 = getMostExpensiveProduct(products);
// console.log(result1);
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  const x = "Weekday";
  const y = "Weekend";
  if (day === 6 || 7) {
    return y;
  }
  return x;
}
// const result1 = getDayType(Day.Sunday);
// console.log(result1);
async function squareAsync(n: number): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    if (n < 0) {
      reject("Negative number not allow");
    }

    setTimeout(() => {
      const data: number = n * n;
      if (data) {
        resolve(data);
      } else {
        reject(data);
      }
    }, 2000);
  });
}
squareAsync(54)
  .then((x: number) => console.log(x))
  .catch((err: string) => console.error(err));

type person1 = {
  name: string;
  age: number;
};

type person2 = {
  email: string;
  phoneNumber: number;
};
type Person = person1 & person2;

const student: Person = {
  name: "Mahmud",
  age: 32,
  email: "mahmud@gmail.com",
  phoneNumber: 167170688,
};
type Info = person1 | person2;
const user: Info = {
  name: "Mahmud",
  age: 32,
  email: "mahmud@gmail.com",
};
