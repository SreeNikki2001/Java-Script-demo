var person = {
    firstname: 'Nikki',
    lastname: 'Murugesan',
    getFullname: function(){
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;

    }
}

var logname = function(lang1, lang2){
    console.log('Logged: ' + this.getFullname());
    console.log('Arguments:' + lang1 + ' ' + lang2);
    console.log('-----------------');
}

var logperson = logname.bind(person);
logperson('en', 'es');
logname.call(person, 'tamil','english');
logname.apply(person, ['hindi','tamil']);


(function(lang1, lang2){
    console.log('Logged: ' + this.getFullname());
    console.log('Arguments:' + lang1 + ' ' + lang2);
    console.log('-----------------');
}).apply(person, ['italian','French']);
//function borrowing

var person1 = {
    firstname: 'Prabha',
    lastname: 'Murugesan',
   
}

console.log (person.getFullname.apply(person1));
//It borrows the function from the person to person1.

//function currying
function multiply(a,b){
    return a*b;
}
var multipleByTwo = multiply.bind(this, 2);
console.log (multipleByTwo(6));

