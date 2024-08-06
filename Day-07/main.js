"use strict";
// 30 Day DSA challenge from Hello coders team
const person1 = { name: "sara", age: 12, email: "abc@gmail.com", phone: 1223434246,
    addressess: [{ street: 2, city: "Quetta", state: "sindh", zipcode: 71000 }, { street: 2, city: "Hyderabad", state: "sindh", zipcode: 71000 },]
};
function returnPersonData(data) {
    for (let i = 0; i < data.addressess.length; i++) {
        if (data.addressess[i].city === "Hyderabad") {
            return [data.name, data.email];
        }
    }
}
console.log(returnPersonData(person1));
