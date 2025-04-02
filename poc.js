// methods 
const methodPerson = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    },
    greetUser : function() {
        return 'Hello there '+ ' ' + this.firstName + " " + this.lastName;
    }
};
const stringifiedObj =  JSON.stringify(methodPerson);
console.log(stringifiedObj); // methods is not getting added