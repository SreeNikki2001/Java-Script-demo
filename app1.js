var person = new Object();

person["firstname"] = "Tony";
person["lastname"] = "Alicea";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);
console.log(person.lastname);
person.address = new Object();
person.address.street = "Kelambakkam main st";
person.address.city = "Chennai";
person.address.state = "Tamilnadu";
console.log(person);
console.log(person.address);
console.log(person.address.state);
console.log(person["address"]["city"]);
