var rect = {
    perimiter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
};

function solveRect(l,b) {
    console.log("Solving for rectangle with l=" +l+" and b="+b);

    if (l<=0 || b<=0) {
        console.log("Dimensions should be greater than zero")
    }
    else {
        console.log("The area of the rectangle is: "+rect.area(l,b));
        console.log("the perimeter of rectangle is: "+rect.perimiter(l,b))
    }
} 

solveRect(2,4);
solveRect(3,5);
solveRect(-3,5);