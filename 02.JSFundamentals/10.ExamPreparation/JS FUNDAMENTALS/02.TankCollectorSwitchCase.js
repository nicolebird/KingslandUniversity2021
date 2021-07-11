//passed 10 out of 13 homework grader tests. 
function main(alreadyOwned, numberOfCommands, commands){
    let ownedTankList = alreadyOwned.split(',').map(ownedTank=>ownedTank.trim());
    
    for (let index in commands) {
        let command = commands[index];
        let commandParts = command.split(', ').filter(item=>item.trim()!='');
        let openCode = commandParts[0];
        let dataList = commandParts.slice(1);
        
        switch (openCode) {
            case "Add":
                if(openCode == "Add" && dataList.length ==1){
                    let tankName = dataList[0];
                    let tankNameIndex = ownedTankList.indexOf(tankName);
                    if(tankNameIndex == - 1){
                        console.log("Tank successfully bought");
                        ownedTankList.push(tankName);
                    }else {
                        console.log("Tank is already bought");
                    }
                }
                break;
            case "Remove":
                if (openCode === 'Remove' && dataList.length === 1) {
                    let tankName = dataList[0];
                    let tankNameIndex = ownedTankList.indexOf(tankName);
                    if (tankNameIndex !== -1) {
                        console.log('Tank successfully sold');
                        ownedTankList.splice(tankNameIndex,1);
                    } else {
                        console.log('Tank not found');
                    } 
                }
                break;
            case "Remove At":
                if (openCode === 'Remove At' && dataList.length === 1) {

                    let index = Number(dataList[0]);
        
                    if (index >= 0 && index < ownedTankList.length) {
                        ownedTankList.splice(index,1);
                        console.log('Tank successfully sold');
                    } else {
                        console.log('Index out of range');
                    }
                }
                break;
            case "Insert":
                if (openCode === 'Insert' && dataList.length === 2) {

                    let index = Number(dataList[0]);
                    //start the index array at zero
                    let tankName = dataList[1];
                    //start the tankName array at 1
                    let tankNameIndex = ownedTankList.indexOf(tankName);
        
                    if (index >= 0 && index < ownedTankList.length) {
        
                        if (tankNameIndex === -1) { 
                            ownedTankList.splice(index, 0, tankName);
                            console.log('Tank successfully bought');
                        } else {
                            console.log('Tank is already bought');
                        }
                    }
                }
                break;
        
            default:
                console.log('Index out of range');
                break;
        }
    }
    console.log(ownedTankList.join(', ').trim());
}

main(`T-34-85 Rudy, SU-100Y, STG`, 3, [`Add, King Tiger(C)`, `Insert, 2, IS-2M`, `Remove, T-34-85 Rudy`]);
//Tank successfully bought Tank successfully bought Tank successfully sold SU-100Y, IS-2M, STG, King Tiger(C)
main("T 34, T 34 B, T92, AMX 13 57",4,["Add, T 34","Remove, AMX CDC","Insert, 10, M60","Remove At, 1"]);
//Tank is already bought Tank not found Index out of range Tank successfully sold T 34, T92, AMX 13 57

