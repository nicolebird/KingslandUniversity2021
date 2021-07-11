function main(day){
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    if(day >= 1 && day <= 7){
        console.log(days[day - 1]);
    }else{
        console.log("Invalid day!");
    }
}

main(1); //Monday
main(2);//Tuesday
main(3);//Wednesday
main(-3); //Invalid day!
