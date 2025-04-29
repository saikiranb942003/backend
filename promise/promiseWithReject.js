

function walkdog() {
    return new Promise((resolve,reject) => {
           setTimeout(() => {
            resolve("1. you are taking the dog out");
           },1500);
        }  
    ) ;
}

function cleanKitchen() {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve('2. i clean the kitchen');
            
        },2500);
    
    })
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const man = false;
            if(man)
            resolve('3. i take out the trash');
            else
            reject('3.didnt take out the trash');
        },500);
    })
}


walkdog().then(value => {console.log(value);
    return cleanKitchen();
}).then(value => {console.log(value); return takeOutTrash();
}).then(value => {console.log(value); console.log("all tasks are completed");
}).catch(error => console.log(error));

/*
output :
1. you are taking the dog out
2. i clean the kitchen
3.didnt take out the trash
*/



