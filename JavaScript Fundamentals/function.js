//Function, call function-------------------------


 //Function create
function morning(){
console.log('Please wake me up early in the morning.');
}

function evening(){
    console.log('Please bring me some snack at evening');
    }

function night(){
        console.log('Please go to bed at night');
 }

//Function create
 morning();
 night();
 evening();



 //Function parameter, multiple parameter, function return

 function doubleIt(num){
     num=num*2;
     console.log(num);
 }

 doubleIt(2);
 doubleIt(10);

 //-------------------------------------------------------------

 function tripleIt(num){
    num=num*3;
    return num;
}

var first= tripleIt(3);
var second=  tripleIt(4);
var total= first+second;
console.log(first,'+', second,'=', total);

