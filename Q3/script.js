//call
var person = {
    name: 'jane smith',
    hello: function(thing) {
        console.log(this.name + " says hello " + thing);
    }
}
person.hello("world");
person.hello.call({ name: "james smith"}, "world");

//bind
var person = {
    name: 'jane smith',
    hello: function(thing) {
        console.log(this.name + " says hello " + thing);
    }
}
person.hello("world");
var helloFun = person.hello.bind({ name: "james smith"});
helloFun("world");