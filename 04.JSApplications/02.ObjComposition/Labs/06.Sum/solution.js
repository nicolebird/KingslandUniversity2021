//Create a fx which returns an obj that can modify the DOM. The returned obj should support the following functionality: 

function result() {
    let num1, num2, result;
    //init(selector1,selector2,resultSelector) - initializes the obj to work w/ the elements corresponding to the supplied selectors. 
    function init(selector1, selector2, resultSelector) {
        num1 = $(selector1);
        num2 = $(selector2);
        result = $(resultSelector);
    }

    //add() - adds the numerical value of the element correspnding to selector1 to the numerical value of the element corresponding to select2 and then writes the result in the element corresponding to resultSelector
    function add() {
        action((a, b) => a + b);
    }

    //subtract() - subtracts the numerical value of the element corresponding to selector2 from the numerical value of the element corresponding to selector1 and then writes the result in the element corresponding to resultSelector
    function subtract() {
        action((a, b) => a - b);
    }

    //action(operation) is allowing for DOM modification
    function action(operation) {
        let val1 = Number(num1.val());
        let val2 = Number(num2.val());
        result.val(operation(val1, val2));
    }

    let model = {init, add, subtract};
       return model;
}

//CONSTRAINTS: All commands will be valid, there will be no nonexistent or incorrect input  All selectors will point to a single textbox element

//----------------Another working code for this
function solve() {

    const { init, add, subtract } = (() => {
        let obj = {
            init(selector1, selector2, resultSelector) {
                this.selector1 = selector1;
                this.selector2 = selector2;
                this.resultSelector = resultSelector;
            },
            add(){
                this.resultSelector.value = Number(this.selector1.value) + Number(this.selector2.value);
            },
            subtract(){
                this.resultSelector.value = Number(this.selector1.value) - Number(this.selector2.value); 
            }
        };
        return obj;
    })();
}