const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

rl.question("enter target value :",(tar)=>{
    tar = parseInt(tar);
    //console.log(tar);
    //console.log(typeof tar);
    
    let arr = [1,2,3,4,5,6];
   // console.log(arr.length);
    
    let l=0,h= arr.length-1,m=0;
    while(l<=h)
  { 
    m = Math.floor((l+h) / 2);
    if(arr[m] === tar)
    {
        console.log("index is "+m);
        rl.close();
        return;
    }
    else if(arr[m] > tar)
    {
        h = m-1;
    }
    else
    {
        l = m+1;
    }
    
  }
  console.log("target not found");
    
  rl.close();
});
