const Number = [];

for(let i = 1 ; i<=50 ; i++)Number.push(i);

for(let i = 0 ; i<Number.length; i++){
    if(Number[i] % 3 == 0 && Number[i] % 5 == 0)console.log(Number[i]);
}
