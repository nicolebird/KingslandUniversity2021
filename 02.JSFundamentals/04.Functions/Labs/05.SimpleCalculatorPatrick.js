function main(n1,n2,op){
    console.log(simpleCalculator(n1,n2,op));
}

function simpleCalculator(n1,n2,op){
    if(op == `multiply`){
        let mult = (a,b) => a * b;
        return mult(n1,n2);
    }else if(op == `divide`){
        let div = (a,b) => a / b;
        return div(n1,n2);
    } else if(op == `add`){
        let add = (a,b) => a + b;
        return add(n1,n2);
    } else if(op == `subtract`){
        let sub = (a,b) => a - b;
        return sub(n1,n2);
    }
}

main(5, 5, `multiply`);
main(40, 8, `divide`);
main(12, 19, `add`);
main(50, 13, `subtract`);