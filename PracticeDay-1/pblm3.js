let Number = [20,12,11,19,10,13,15,12,16,18,17,9,14,2,8,5,3,7,4,1,6];
for(let i = 0 ; i<Number.length ; i++){
    
    for(let j = i+1; j<Number.length ; j++){
        if(Number[j] < Number[i]){
            let temp = Number[i]; 
            Number[i] = Number[j];
            Number[j] = temp;
            
        }
    }
}


for(let ii = 0 ; ii<Number.length; ii++){
    console.log(Number[ii]);
}