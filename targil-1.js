//tagrgil 10

var num = parseInt (prompt ("enrer number: "));
var tens = Math.floor(num / 10)
var ones = num % 10

if ((num % 7 === 0) || (tens === 7) || (ones === 7)) {
    console.log ("boom")
}else{
    console.log (num)
}




// targil 11
var speed = parseInt (prompt ("enrer speed: "));
//if ((speed < 120)||(speed === 120)) {
if (speed <= 120) {
    console.log ("you drive carefully")
} else {
    if ((speed > 120)&&(speed < 161)){
    console.warn ("warning you drive too fast")
    }else{
        console.error ("you got a fine")
    }    
}
