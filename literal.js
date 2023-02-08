var Nikki = {firstname:'Nikki', lastname:'murugesan',address: {
    street:'Vandalur st',city: 'Chennai', state: 'Tamilnadu', pincode: 626117}};

    function greet(person){
        console.log('Hi'+ person.firstname);
    }
    greet(Nikki);