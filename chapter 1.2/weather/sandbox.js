function User(username,email){
this.username = username;
this.email = email;

}

User.prototype.login =  function(){
    console.log(`${this.username} has logged in`);
    return this;
};
User.prototype.logout = function(){
    console.log(`${this.username} has logged out`);
    return this;
};
function Admin(username,email,title){
User.call(this,username,email);
this.title = title;
}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function(){
    //delete user
    
}









// class User {
// constructor(username,email){
//     //set properties
//     this.username = username;
//     this.email =email;
//     this.score = 0;
// }
/*login(){
    console.log(`${this.username} just logged in`);
    return this;
}
logout(){
    console.log(`${this.username} just logged out`);
    return this;
}
incScore(){
    this.score += 1;
    console.log(`${this.username}has a score of ${this.score}`);
    return this;
}
}
class Admin extends User{

    constructor(username , email, title){
        super(username, email);
        this.title = title;
    };
    deleteUser(user){
users = users.filter(u=>  u.username !== user.username);
    }
}*/
const userOne = new User('mario','mario@thenetninja.co.uk');
const userTwo = new User('luigi','luigi@thenetninja.co.uk');
const userThree = new Admin('shaun','shaun@thenetninja.co.uk','black-belt-ninja');
console.log(userOne, userTwo,userThree)
userOne.login().logout();
//const userThree = new Admin('shaun','shaun@thenetninja.co.uk','black-belt-ninja');

//console.log(userThree);


