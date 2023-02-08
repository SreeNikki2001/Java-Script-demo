function Person(firstname,lastname){
    console.log(this);
    this.firstname=firstname;
    this.lastname=lastname;
    console.log('This function is invoked');

}

Person.prototype.getFullname = function(){
    return  this.firstname+' ' +this.lastname;

}
var john=new Person('john', 'Doe');
console.log(john);

Person.prototype.getformalFullname = function(){
    return this.firstname+' ' +this.lastname;

}
console.log(john.getformalFullname);