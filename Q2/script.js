var arr = [1,2,3,4,5];
var i=0;
(function loop() {
    console.log(arr[i]);
    if(++i < arr.length){
        setTimeout(loop, 3000);
    }
})();
