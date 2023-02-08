var arr=[
    1,
    false,
    {
        name:'Nikki',
        address:'378,patchamadam'
    },
    function(name){
        var greeting='Hello  ';
        console.log(greeting + name);
    },
    "Hellloooo"
];
console.log(arr);
arr[3](arr[2].name);
