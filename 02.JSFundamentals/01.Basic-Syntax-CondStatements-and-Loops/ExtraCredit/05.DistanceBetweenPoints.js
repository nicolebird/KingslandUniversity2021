//Write a JS function that calculates the distance between two points by given x and y coordinates.  

//The input comes as four number elements in the format x1, y1, x2, y2.  Each pair of elements are the coordinates of a point in 2D space.

//The output should be returned as a result of you function.

function betweenPoints(x1, y1, x2, y2) {
    let distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
    //Math.sqrt means math square root.
    console.log(distance);
}
betweenPoints(2,4,5,0);

//Math.sqrt is Math square root