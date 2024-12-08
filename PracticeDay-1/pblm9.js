function monthlySaving(salaryArray, savingNumber){
    if(!Array.isArray(salaryArray)){
        return 'invalid input' ;
    }
    let sum = 0 ; 
    for(let i = 0 ; i<salaryArray.length ; i++){
        if(salaryArray[i] >= 3000){
            salaryArray[i]-= (salaryArray[i] * (20/100) );
            // console.log('salaryArray: ',salaryArray[i]);
        }
        sum+=salaryArray[i];
        // console.log('Sum: ',sum);
    }
    sum-=savingNumber;

    // console.log('Sum: ',sum);
    if(sum >= 0  )return sum;
    else return"earn more";
}

const Salary = [1000,2000,3000];
// const Salary = [900,2700,3400];
const SavingNumber = 5400;
console.log(monthlySaving(Salary,SavingNumber));

// console.log('Salary Type : ', typeof(Salary));
// console.log('SavingNumber Type: ',typeof(SavingNumber));



