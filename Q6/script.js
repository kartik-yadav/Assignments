var uniqueInteger =  (function() {
    var counter = 1;
    return function() {return counter++;}
})();
for(var i=0;i<15;i++){
    console.log(uniqueInteger());
}