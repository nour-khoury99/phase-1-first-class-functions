function receivesAFunction(callback){
    const name = prompt("please enter the name");
    callback(name);
}


//named Function
function returnsANamedFunction(num1,num2){

    if(num1 === num2){
        return 'you wonn!!'
    }else {
        return `this is bad try again!`
    }
}



//anonymous 
const button = document.getElementById("button");
button.addEventListener("click", function () {
  console.log("Yet more razzling");
});
