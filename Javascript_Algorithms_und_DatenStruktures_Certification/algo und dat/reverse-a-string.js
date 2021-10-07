/**
 * Reverse a String
 */
function reverseString(str) {
  var str1="";
 
  for(var x=str.length-1; x>-1;x--){
  str1+=str[x];
}
return str1;
}
reverseString("hello");