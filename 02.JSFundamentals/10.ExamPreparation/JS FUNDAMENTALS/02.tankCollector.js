// First input: alreadyOwnedTanks on a single line separated by ","
// Second Input: numOfCommands - int
// Third Input: commands

function main(tanksAlreadyOwned, numberOfCommands, commands) {

    let ownedTankList = tanksAlreadyOwned.split(',').map(ownedTank=>ownedTank.trim());
    
    for (let index in commands) {
        let command = commands[index];
        let commandParts = command.split(', ').filter(item=>item.trim()!='');
        //TODO: ensure that command parts have at least one element else continue
        //console.log(cmdParts);
        
        let openCode = commandParts[0];
        let dataList   = commandParts.slice(1);
    
        //decide on what to do based on the opcode
        if (openCode === 'Add' && dataList.length === 1) {
            //
            let tankName = dataList[0];
            let tankNameIndex = ownedTankList.indexOf(tankName);

            //if not owned, add it and say bought
            if (tankNameIndex === - 1) {
                console.log("Tank successfully bought");
                ownedTankList.push(tankName);

            // if found, say already bought
            } else {
                console.log('Tank is already bought');
            }
        } else if (openCode === 'Remove' && dataList.length === 1) {
           
            let tankName = dataList[0];
            //Check if tank owned
            let tankNameIndex = ownedTankList.indexOf(tankName);
            
            //Execute if owns tank
            if (tankNameIndex !== -1) {
                console.log('Tank successfully sold');
                ownedTankList.splice(tankNameIndex,1);
            } else {
                //If he/she/they does not own the tank
                console.log('Tank not found');
            } 
        } else if (openCode === 'Remove At' && dataList.length === 1) {

            let index = Number(dataList[0]);

            //Check if index is in range of list
            if (index >= 0 && index < ownedTankList.length) {
                ownedTankList.splice(index,1);
                console.log('Tank successfully sold');
            } else {
                console.log('Index out of range');
            }

        }else if (openCode === 'Insert' && dataList.length === 2) {

            let index = Number(dataList[0]);
            let tankName = dataList[1];
            let tankNameIndex = ownedTankList.indexOf(tankName);

            if (index >= 0 && index < ownedTankList.length) {

                if (tankNameIndex === -1) {

                    //add the tank at given index 
                    ownedTankList.splice(index, 0, tankName);
                    console.log('Tank successfully bought');
                } else {
                    console.log('Tank is already bought');
                }
            } else {
                console.log('Index out of range');
            }
        }
    }
    console.log(ownedTankList.join(', ').trim());
}


main(`T-34-85 Rudy, SU-100Y, STG`, 3, [`Add, King Tiger(C)`, `Insert, 2, IS-2M`, `Remove, T-34-85 Rudy`]);
//Tank successfully bought Tank successfully bought Tank successfully sold SU-100Y, IS-2M, STG, King Tiger(C)
main("T 34, T 34 B, T92, AMX 13 57",4,["Add, T 34","Remove, AMX CDC","Insert, 10, M60","Remove At, 1"]);
//Tank is already bought Tank not found Index out of range Tank successfully sold T 34, T92, AMX 13 57
