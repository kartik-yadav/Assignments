function person() {
    this.isAdult = true;
}

function employee() {
    this.isPaid = true;
}

employee.prototype = new person();

function developer(){
    this.isTechie = true;
}

developer.prototype = new employee;

var sam = new developer();
console.log(sam.isAdult);