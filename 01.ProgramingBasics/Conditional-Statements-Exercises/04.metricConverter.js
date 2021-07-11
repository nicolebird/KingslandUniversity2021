//passes all tests except test 9 of 17.  Find the bug and submit.  Also add it to the notes in google drive.

function main(number, input, output) {
    let measurement = 0;
    let meters = 1;
    let milliMeters = 1000;
    let centiMeters = 100;
    let miles = 0.000621371192;
    let inches = 39.3700787;
    let kiloMeters = 0.001;
    let feet = 3.2808399;
    let yards = 1.0936133;
    
    // if (input === "mm") {
    //   measurement = number/milliMeters;
    // } else if (input === "cm") {
    //   measurement = number/centiMeters;
    // } 
    // if (output === "mm") {
    //     measurement = measurement * milliMeters;
    // } else if (output === "cm") {
    //     measurement = measurement * centiMeters;
    // }
    
    if(input === "mm") {
        if(output === "cm") {
            measurement = number * centiMeters / milliMeters;
        }else if(output === "mi") {
            measurement = number * miles / milliMeters;
        }else if(output === "m") {
            measurement = number * meters / milliMeters;
        }else if(output === "in") {
            measurement = number * inches / milliMeters; 
        }else if(output === "km") {
            measurement = number * kiloMeters / milliMeters;
        }else if(output === "ft") {
            measurement = number * feet / milliMeters;
        }else if(output === "yd") {
            measurement = number * yards / milliMeters;
        }else if(output === "mm"){
            measurement = number * milliMeters / milliMeters;
        }
    }else if(input === "cm") {
        if(output === "mi") {
            measurement = number * miles / centiMeters; 
        } else if(output === "m") {
            measurement = number * meters / centiMeters;
        } else if(output === "in") {
            measurement = number * inches / centiMeters;
        } else if(output === "km") {
            measurement = number * kiloMeters / centiMeters;
        } else if(output === "ft") {
            measurement = number * feet / centiMeters;
        } else if(output === "yd") {
            measurement = number * yards / centiMeters;
        } else if(output === "mm") {
            measurement = number * milliMeters / centiMeters;
        }else if(output === "cm"){
            measurement = number * centiMeters / centiMeters;
        }
    }else if(input === "mi") {
        if(output === "in") {
            measurement = number * inches / miles;
        } else if(output === "km") {
            measurement = number * kiloMeters / miles;
        } else if(output === "ft") {
            measurement = number * feet / miles;
        } else if(output === "yd") {
            measurement = number * yards / miles;
        } else if(output === "cm") {
            measurement  = number * centiMeters / miles;
        } else if(output === "mm") {
            measurement = number * milliMeters / miles;
        } else if(output === "m") {
            measurement = number * meters / miles;
        }else if(output === "mi"){
            measurement = number * miles / miles;
        }
    }else if(input === "in") {
        if(output === "m") {
            measurement = number * meters / inches;
        } else if(output === "mm") {
            measurement = number * milliMeters / inches;
        } else if(output === "cm") {
            measurement = number * centiMeters / inches;
        } else if(output === "km") {
            measurement = number * kiloMeters / inches;
        } else if(output === "ft") {
           measurement = number * feet / inches;
        } else if(output === "yd") {
            measurement = number * yards / inches;
        } else if(output === "mi") {
            measurement = number * miles / inches; 
        }else if(output === "in"){
            measurement = number * inches / inches;
        }

    }else if(input === "km") {
        if(output === "mi") {
            measurement = number * miles / kiloMeters; 
        } else if(output === "yd") {
            measurement = number * yards / kiloMeters;
        } else if(output === "ft") {
            measurement = number * feet / kiloMeters;
        } else if(output === "cm") {
            measurement = number * centiMeters / kiloMeters;
        } else if(output === "mm") {
            measurement = number * milliMeters / kiloMeters;
        } else if(output === "m") {
            measurement = number * meters / kiloMeters;
        } else if(output === "in") {
            measurement = number * inches / kiloMeters;
        }else if(output === "km"){
            measurement = number * kiloMeters / kiloMeters;
        }
    }else if(input === "ft") {
        if(output === "mi") {
            measurement = number * miles / feet;
        } else if(output === "yd") {
            measurement = number * yards / feet;
        } else if(output === "km") {
            measurement = number * kiloMeters / feet;
        } else if(output === "cm") {
            measurement = number * centiMeters / feet;
        } else if(output === "mm") {
            measurement = number * milliMeters / feet;
        } else if(output === "m") {
            measurement = number * meters / feet;
        } else if(output === "in") {
            measurement = number * inches / feet;
        }else if(output === "ft"){
            measurement = number * feet / feet;
        }
        
    }else if (input === "yd") {
        if(output === "mi") {
            measurement = number * miles / yards; 
        } else if(output === "km") {
            measurement = number * kiloMeters / yards;
        } else if(output === "ft") { 
            measurement = number * feet / yards;
        } else if(output === "cm") {
            measurement = number * centiMeters / yards;
        } else if(output === "mm") {
            measurement = number * milliMeters / yards;
        } else if(output === "m") {
            measurement = number * meters / yards;
        } else if(output === "in") {
            measurement = number * inches / yards;
        }else if(output === "yd"){
            measurement = number * yards / yards;
        }
    }
    console.log(measurement.toFixed(10));
}



main(12, "km", "ft");
main(150, "mi", "in");
main(450, "yd", "km");
main(12423, "yd", "yd");