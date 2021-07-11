function main(radius, height) {
    let volume = Math.PI * Math.pow(radius, 2) * (height / 3);

    //A=πr(r+h2+r2)
    let totalSurfaceArea = Math.PI * radius * (radius + Math.sqrt(Math.pow(height, 2) + Math.pow(radius, 2)));
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);

}
main(3, 5);

//Another way but similar
function main(radius, height) {
    const pi = 3.1415926535898;
    let slant = Math.sqrt(radius * radius + height * height);
    let totalVolume = (pi * radius * radius * height) / 3;
    let totalArea = pi * radius * (radius + slant);
    console.log(`volume = ${totalVolume.toFixed(4)}`);
    console.log(`area = ${totalArea.toFixed(4)}`);
}

main(3, 5);