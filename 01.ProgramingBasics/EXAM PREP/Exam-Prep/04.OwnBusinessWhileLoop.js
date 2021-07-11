function main(widthFreeSpace, lengthFreeSpace, heightFreeSpace, comTransList) {
	let cubicMetersFree = widthFreeSpace * lengthFreeSpace * heightFreeSpace;
	let spaceNeeded = 0;
	let spaceTakenByComputers = 0;
	let i = 0;
	while (comTransList[i] !== undefined) {
		let computers = comTransList[i];
		let freeSpace = cubicMetersFree - spaceTakenByComputers;
		if (comTransList[i] == "Done" && freeSpace >= spaceTakenByComputers) {
			console.log(`${freeSpace} Cubic meters left`);
			break;
		} else if (computers <= freeSpace && comTransList[i] != "Done") {
			spaceTakenByComputers += computers;
			i++;
		} else if (comTransList[i] != "Done" && freeSpace < computers) {
			spaceNeeded = computers - freeSpace;
			console.log(
				`No more free space! You need ${spaceNeeded} Cubic meters more.`
			);
			break;
		}
	}
}
main(10, 10, 2, [20, 20, 20, 20, 122]);
