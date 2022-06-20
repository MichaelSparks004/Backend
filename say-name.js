let name = 'Sparks';

function sayName() {
    console.log('my name is ' + name);
    return 'yes';
}

module.exports.name = {
    sayName: sayName(),
    age: 70,
}

module.exports.sayName = sayName