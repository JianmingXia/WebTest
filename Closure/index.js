console.log("index.js");

var arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++) {
    setTimeout(function(){
        console.log(i)
    }, 1000);
}

for(var i = 0; i < arr.length; i++) {
    setTimeout(function(i){
        console.log(i)
    }(i), 1000);
}

for(var i = 0; i < arr.length; i++) {
    setTimeout(function(){
        console.log(i)
    }, 1000);
}
