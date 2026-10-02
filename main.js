import { LinkedList } from "./linkedLists.js";

const list = new LinkedList();

list.append("luke");
list.append("I");
list.append("am");
list.append("your");
list.append("father");
list.printLinkedList();

console.log(`Head is ${list.head()}`);
console.log(`Tail is ${list.tail()}`);
console.log(`Size is ${list.size()}`);
console.log(`Element at 3rd spot is ${list.at(3)}`);
console.log(`Contains father is true : ${list.contains("father")}`);
console.log(`Contains house is false : ${list.contains("house")}`);
console.log(`Find index of luke : ${list.findIndex("luke")}`);
console.log(`Find index of father : ${list.findIndex("father")}`);
console.log(`Find index of house : ${list.findIndex("house")}`);
console.log(`Printing linked list: ${list.toString()}`);

console.log(`Inserting hue hah into 2nd element slot`);
list.insertAt(2, `hue`, `hah`);
console.log(`Printing linked list: ${list.toString()}`);

console.log(`Removing 2nd and 3rd element slot`);
list.remove(2);
list.remove(2);
console.log(`Printing linked list: ${list.toString()}`);

const list2 = new LinkedList();

list2.append("dog");
list2.append("cat");
list2.append("parrot");
list2.append("hamster");
list2.append("snake");
list2.append("turtle");

console.log(list2.toString());
