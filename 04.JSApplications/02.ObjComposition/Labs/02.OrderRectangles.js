//You will be passed a few pairs of widths and heights of rectangles, create objs to represent the rectangles. The objs should additionally have two fx area - that returns the area of the retangle and compareTo - that compares the current rectangle w/ another and produces a number signifying if the current rectangle is smaller (neg number), equal(0) or larger (positive number) than the other rectangle.
//INPUT: will come as array of arrays - every nested array will contain exactly 2 numbers the width and the height of the rectangle.
//OUTPUT: must consist of an array of rectangles(objs) sorted by their area in descending order as a first criteria and by thier width in descending order as a second criteria.  
function main(input) {

    //This creates the original rectangle
    function createRect(width, height) {
        let rect = {
            width: width,
            height: height,
            area() {
                return this.width * this.height;
            },

            //The compareTo() method compares two strings lexicographically. The comparison is based on the Unicode value of each character in the strings. The method returns 0 if the string is equal to the other string.

            //this literally compares the other ones.  
            compareTo(other) {
                return this.area() - other.area() || this.width - other.width;
            }
        };
        return rect;
    }

    let rects = input.map(([width, height]) => createRect(width, height))
        .sort((a, b) => b.compareTo(a));
    console.log(rects);

}


main([
    [10, 5],
    [5, 12]
]);

main([
    [10, 5],
    [3, 20],
    [5, 12]
]);