const person = {
    name: {
        first: ["ashu", "gupta"],
        last: "gupta",
    },
    age: 26,
};

function logProperty(propertName) {
    console.log(propertName);
}

//logProperty(person.age);
//logProperty(person.name.first[1]);

const myDataName = "height";
const myDataValue = "1.75m";

person[myDataName] = myDataValue;

//console.log(person);

function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.interduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.` );
    };
    return obj;
}

const Addname1 = createPerson("ashu");
Addname1.name;
Addname1.interduceSelf();

const Addname2 = createPerson("aaliya");
Addname2.name;
Addname2.interduceSelf();

const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");

//console.log(button1);
//console.log(button2);

const ele1 = document.getElementById("button-1");
ele1.style.color = "red";

const ele2 = document.getElementById("button-2");
ele2.style.color = "blue";

const mybutton1 = document.getElementById("button-1");
const mybutton2 = document.getElementById("button-2");

mybutton1.addEventListener("click", ()=> {
    console.log("you have enter in button 2");
    alert("you have clicked a button 1")
})

mybutton2.addEventListener("click", ()=> {
    console.log("you have enter in button 2");
    alert("you have clicked a button 2")
})







