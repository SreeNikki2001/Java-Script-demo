function sayhi(){
    var greeting = 'Vanakkam';
    setTimeout(function()
    {
        console.log(greeting);
    },5000);
}
sayhi();
function tellmewhendone(callback){
    var a=1000;
    var b = 2000;
    callback();
}
tellmewhendone(function () {
    console.log('I am done!');
    
});
tellmewhendone(function () {
    console.log('All done!');
    
});
