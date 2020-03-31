//loop
//for(let i = 0; i < 5;i++){
    //console.log('in loop:', i)
    
//}
//console.log('loop finished');
//const names = ['shaun','mario','luigi'];
//for(let i = 0;i < names.length; i++){
    //console.log(names[i]);
    //let html =`<div>${names[i]}</div>`;
   //console.log(html);
//}

//const names = ['shaun','mario','luigi'];

//let i = 4;
//o{
    //console.log('val of i is:', i);
    //i++;
//}
//while(i < 5);
  /* const age = 19;
   if(age > 20){
       console.log('you are above 20 years');
   }
   const ninjas = ['shaun','ryu','chun-li','yoshi'];
   if(ninjas.length > 3){
       console.log("that's alot of ninjas");
   }*/
   // logical operators -OR|| and AND &&   
 /*  const password = 'p@s';
   if( password.length >=12 && password.includes('@')){
    console.log('that password is might strong');
  }else if(password.length >= 8|| password.includes('@')&& password.length >=5){
      console.log('that password is strong enough');
  }else{
    console.log('that password is not strong enough');
}*/
//logical not(!)
/*let user = false;
if(!user){
    console.log('you must be logged in to continue');
}*/
/*const scores = [50,25,0,30,100,20,10];
for(let i = 0; i < scores.length;i++){
    console.log('your score:',scores[i]);
    if(scores[i] === 100){
        console.log('congrats,you got the top score!');
        break;
    }
}*/
/*const grade = 'A';
 switch(grade){
     case 'A':
            console.log('you got an A!');
            break;
         case 'B':
             console.log('you got an B!');
             break;
         case 'C':
             console.log('you got an C!');
             break;
             case 'D':
                    console.log('you got an D!');
                    break;
                        console.log('you got an E!');
                        break
                        default:
                            console.log('not a valid grade'); */


 //}
 /*let age = 30;
 ;
  
 if(true){
    let age= 40;
    let name ='shaun';
    console.log('inside 1st code block:',age, name);
 }
 console.log('outside code block:',age, name);
  */
 //funtion declaration
 /*function greet(){
     console.log('hello there');
 } 
 greet();*/
 //const speak = function(name ='luigi',time = 'morning'){
   //  console.log(`good${time} ${name}`);
 //};
 //speak();
 /*const calcArea = function(radius){
return   3.14 * radius**2;
 return area;
 }
 const area = calcArea(5);
 console.log(area);*/
 //const calcArea = (radius) => 3.14 * radius**2;
    //const area = calcArea(5);
 //console.log('area is:',area);
 //const greet =()=>'hello world';
 //const result = greet();
 //console.log(result)
 /* bill = function(products, tax){
     let total = 0;
     for(let i = 0; i < products.length; i++){
         total += products[i] + products[i] * tax;
     }
     return total;
 }*/
 /*const bill =(products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;

 }
 console.log(bill([10,15,30],0.2));*/
 //const greet = () =>'hello';
 //let resultone = greet();
 //console.log(resultone);
 //const name ='shaun';

 //let resulttwo = name.toUpperCase();
 //console.log(resulttwo);
 /*const ul = document.querySelector('.people');
 const people = ['mario','luigi','ryu','shaun','chun-li'];
 let html =``;
 people.forEach(person =>{
    html +=`<li style="color: purple">${person}</li>`
 });
 console.log(html);
 ul.innerHTML = html;*/
// const blogs = [
    // {title:'why mac & cheese rules',likes: 30},
    // {title:'10 things to make with marmite',likes:50}
// ] console.log(blogs);
/*let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs:[
        
            {title:'why mac & cheese rules',likes: 30},
            {title:'10 things to make with marmite',likes:50}
        
    ],
login: function(){
    console.log('the user logged in');
},
logout: function(){
    console.log('the user logged out');
},
logBlogs: function(){
   // console.log(this.blogs);
   console.log('this user has written the following blogs') ;
   this.blogs.forEach(blog => {
       console.log(blog.title,blog.likes);
   });
}
};
user.logBlogs();
console.log(this);*/
/*console.log(Math);
console.log(Math.PI);
console.log(Math.E);
const area= 7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

//random numbers
const random = Math.random();
console.log(random);
console.log(Math.round(random *100));*/
/*let scoreOne = 50;
let scoreTwo =scoreOne;
console.log(`scoreOne: ${scoreOne}`,`scoreOne: ${scoreTwo}`);
scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`,`scoreOne: ${scoreTwo}`);*/
/*const userOne = {name:'ryu',age:30};
const userTwo = userOne;
console.log(userOne,userTwo);
userOne.age = 40;
console.log(userOne,userTwo);*/


