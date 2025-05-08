# Type Alias vs Interface in TypeScript

The main reason for using TypeScript with JavaScript is to define the variable type. There are two ways to do this: one is a type alias and the other is an interface. There are two ways to do this. However, there are some differences between them.

1. Multiple interfaces can be declared with the same name, which are automatically merged. But Type can not.

2. The extend keyword is used to extend the interface, but “&” is used to extend the type.

3. A type alias can be used as a primitive type but not as an interface.

4. It is better to use an interface for objects. Type is fine in all other respects.

---

### Example of using union and intersection types in TypeScript:

```typescript
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
```
