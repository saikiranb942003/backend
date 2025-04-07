let studentDetails = {
    sai : 30,
    kiran : 65,
    madhan : 70,
    kumar : 75,
    avinash : 80,
    sam : 'hello'
}

let totalMarks =0;
let numberOfStudents=0;

for(let student in studentDetails) {
   // console.log(student);
    
    totalMarks = totalMarks + studentDetails[student];
    numberOfStudents++;
}

const averageOfStudents = (totalMarks/numberOfStudents);
console.log("average of students is "+averageOfStudents);

function grades(marks) {
    if(typeof marks !== 'number' || isNaN(marks)) {
        return 'invalid input';
    }
    if(marks>= 90 ) {
        return 'A';
    } else if(marks >= 80) {
        return 'B';
    } else if(marks >= 70) {
        return 'C';
    } else if(marks >= 60) {
        return 'D';
    } else {
        return 'E';
    }
}

for(let student in studentDetails) {
    let grade = grades(studentDetails[student]);
    if( grade === 'invalid input') {
        console.log('invalid input');
        
    }
    else {
        console.log(student + " grade is "+ grade);
    }
    
}

