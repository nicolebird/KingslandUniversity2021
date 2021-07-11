class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx*dx + dy*dy);
        
        //Another option
        //let { x: x1, y: y1 } = a;
        //let { x: x2, y: y2 } = b;

        //let xdiff = x2 - x1;
        //let ydiff = y2 - y1;
        //return Math.sqrt(xdiff ** 2 + ydiff ** 2);
    }
}

let p1 = new Point(5,5);
let p2 = new Point(9,8);

console.log(Point.distance(p1,p2));