var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
const Greatest = (friends) =>{
    let greatestVal = friends[0];
     friends.find(frnd => {
        if(frnd.length >= greatestVal.length){
            greatestVal = frnd;
        }
    });
    return greatestVal

}
console.log(Greatest(friends));
