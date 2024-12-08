function leapYear(year){
    if(year % 400 == 0){
        console.log("Leap Year");
        return ; 
    }
    else if(year % 4== 0 && year % 100 != 0){
        console.log("Leap Year");
        return;
    }else{
        console.log("Not Leap Year");
        return ; 
    }
}
leapYear(2024);