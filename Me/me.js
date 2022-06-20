let myFriendInfo = require('../Friend/frienddetails');

let aboutMe = {
    name: 'Obasi Chiazoka Steve',
    age: 20,
    maritalStatus: 'single',
    hobby: 'reading, cooking and coding',
    address: '8b adebayo street'
}


function sayName() {
    return `My name is ${aboutMe.name}, I am ${aboutMe.age} years old, I am ${aboutMe.maritalStatus} and not searching, I enjoy ${aboutMe.hobby}, and I live at ${aboutMe.address}. The name of my friend is ${myFriendInfo.name}, she is ${myFriendInfo.age} years old, she is ${myFriendInfo.maritalStatus} and searching, she enjoys ${myFriendInfo.hobby}, and lives at ${myFriendInfo.address}.`;
}

console.log(sayName());

module.export= sayName();


