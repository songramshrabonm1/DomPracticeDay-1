var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var UniqueNumber = [];
for(let i = 0 ; i<numbers.length; i++){
    if(i == numbers.length - 1 ){UniqueNumber.push(numbers[i]);
    break;
    }
    if(numbers[i] == numbers[i+1]){
        continue;
    }
    UniqueNumber.push(numbers[i]);
}

for(let i = 0 ; i<UniqueNumber.length; i++){
    console.log(UniqueNumber[i]);
}