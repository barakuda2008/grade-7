//tagrgil 10

var num = parseInt (prompt ("enrer number: "));
var tens = Math.floor(num / 10)
var ones = num % 10

if ((num % 7 === 0) || (tens === 7) || (ones === 7)) {
    console.log ("boom")
}else{
    console.log (num)
}
