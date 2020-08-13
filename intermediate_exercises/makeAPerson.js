var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let firstName = firstAndLast.split(" ")[0]
    let lastName = firstAndLast.split(" ")[1]
    let fullName = firstAndLast
    this.getFullName = function() {
        return fullName;
    };
    this.getFirstName = function() {
        return firstName
    }
    this.getLastName = function() {
        return lastName
    }
    this.setFirstName = function(first) {
        firstName = first
        fullName = first + " " + lastName
    }
    this.setLastName = function(last) {
        lastName = last
        fullName = firstName + " " + last
    }
    this.setFullName = function(full) {
        firstName = full.split(" ")[0]
        lastName = full.split(" ")[1]
        fullName = full
    }
};

var bob = new Person('Bob Ross');
bob.getFullName();
