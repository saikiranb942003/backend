function checkPassword(s) {
   let cl = 0, sl = 0, sc = 0, n = 0, bs = 0;
   
   if (s.length < 8) {
       console.log("Length is less than 8 characters");
       return false;
   }
   
   for (let i = 0; i < s.length; i++) {
       let c = s.charAt(i);
       
       if (c >= 'A' && c <= 'Z') {
           cl++;
       }
       if (c >= 'a' && c <= 'z') {
           sl++;
       }
       if (c >= '0' && c <= '9') {
           n++;
       }
       if (c === '<' || c === '>') {
           bs++;
       }
       if (!(/[a-zA-Z0-9 ]/.test(c) || c === '<' || c === '>')) {
           sc++;
       }
   }
   
   if (bs > 0) {
       console.log("Don't use < or > symbols");
       return false;
   }
   if (cl === 0) {
       console.log("Use at least 1 capital letter");
       return false;
   }
   if (sl === 0) {
       console.log("Use at least 1 small letter");
       return false;
   }
   if (n === 0) {
       console.log("Use at least 1 number");
       return false;
   }
   if (sc === 0) {
       console.log("Use at least 1 special character");
       return false;
   }
   
   return true;
}

if(checkPassword("@Bsk343168")){
   console.log("valid password");
}
else{
   console.log("invalid password");
}