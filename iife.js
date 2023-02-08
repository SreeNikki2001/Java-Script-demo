var greeting = function(name){
    return 'Hello  ' + name;
}('Nikki');
console.log(greeting);

(function(name){
    var greeting = 'Hello';
    console.log(greeting + ' '  + name);
})('Rupa');