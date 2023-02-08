function a()
{
    console.log(this);
    this.newVariable = 'Hello';

} 
a();
console.log(newVariable);