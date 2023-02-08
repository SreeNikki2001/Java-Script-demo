function greet(whattosay){
    return function(name){
        console.log(whattosay + '' + name);
    }
}
var sayhi= greet('Hello  ');
sayhi('Nikki');
