const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

rl.question("enter target value :",(target)=>{
    target = parseInt(target);
    //console.log(tar);
    //console.log(typeof tar);
    
    let array = [1,2,3,4,5,6];
   // console.log(arr.length);
    
    let low=0,high= array.length-1,mid=0;
    while(low<=high)
  { 
    mid = Math.floor((low+high) / 2);
    if(array[mid] === target)
    {
        console.log("index is "+mid);
        rl.close();
        return;
    }
    else if(array[mid] > target)
    {
        high = mid-1;
    }
    else
    {
        low = mid +1;
    }
    
  }
  console.log("target not found");
    
  rl.close();
});
