var person = {
	fullNames: "Juan Perez",
	age: 55,
	sayHi: function () {
		alert ("Hi!");
	},
	introduceYourself: function () {
		alert("Hi, i'm" + this.fullNames + " and I'm" + this.age +" years old")
	}
}

person.introduceYourself();


var Person = function  (fullName, age) {
	this.fullName = fullName;
	this.age = age;
	this.sayHi = function () {
		alert("HI")
	}
}

var person1 = new Person("Juan Ramirez", 15);
var person2 = new Person("Jorge Falcon", 22);
console.log(person1, person2)

// Ejemplo 2

var Person = function  (fullName, age) {
	this.fullName = fullName;
	this.age = age;
    this.sayHi = function () {
	    alert("HI")
	}
    
}


var people = [
    new Person("Juan Ramirez", 15),
    new Person("Jorge Falcon", 22)
];

people.forEach(function(person){
    console.log(person);
});

for(var = i; i < people.length; i++){
    console.log(people[i]

//Ejemplo 3


var Person = function  (fullName, age) {
	this.fullName = fullName;
	this.age = age;
    this.sayHi = function () {
	    alert("HI")
	}
    
}

Person.prototype.sayHi = function() {
	alert("hi!");
};

var people = [
    new Person("Juan Ramirez", 15),
    new Person("Jorge Falcon", 22)
];

people[0].sayHi();


// COntexto 

var Monster;

Monster = (function() {
  function Monster(args) {
    this.name = args.name;
  }

  Monster.prototype.sayHi = function() {};

  return Monster;

})();


// Piedra, Papel y Tijeras


	Player 		(fullName, chooseYourHand)
	game		(play, winner, loser, players)
	rock		beats
	paper		beats
	scissors 	beats

											----- New ----P1	------ rock
					init() ------------------------------------------- paper
	----------								----- New ----P2 	------ scissors
	|| Game ||		
	----------															-------- P1
					askOptions() ------------------- forEach ----Player -------- P2
												---- rock
					play() ------------------------- paper
												---- scissors

					showResults()---	showWinner 	--- P1
						------------	showLoser	--- P2
						