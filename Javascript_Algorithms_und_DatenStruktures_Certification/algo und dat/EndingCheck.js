/**Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead. */
function confirmEnding(str, target) {
    var a=str.length;
      for(let i=target.length;i>=1&&a>=2;i--&&a--){
        if(str[a-1]!=target[i-1]){
          return false;
        }else if(a==0&&b==0){
         return true;
        }
      }
      
      return true;
    }
    
    confirmEnding("Bastian", "n");