//syntax of the switch statement

// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default: 
//       // code block
//   }

const month = 3
switch(month){
    case 1:
        console.log("january");
        break;        
    case 2:
        console.log("feb");
        break;        
    case 3:
        console.log("mar");
        break;        
    case 4:
        console.log("april");
        break;       
    case 5:
        console.log("may");
        break;       
    case 6:
        console.log("june");
        break;       
    case 7:
        console.log("july");
        break;        
    case 8:
        console.log("aug");
        break;        
    case 9:
        console.log("sep");
        break;        
    case 10:
        console.log("oct");
        break;
    case 11:
        console.log("nov");
        break;
    case 12:
        console.log("dec");
        break;

        default:
            console.log("default case matched");
            break;
}