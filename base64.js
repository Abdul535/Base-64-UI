import readlineSync from 'readline-sync';
import base64Encoding from './encoder.js'
import base64Decoding from './decoder.js'

function main(){
    base64menu();
    let key = readlineSync.questionInt("Select the options: ");
    while ( !((key>=0) && (key<=2)) ) {
        base64menu();
        key = readlineSync.questionInt("Invalid Option, Please Try Again: ");
    }
    switch (key) {
        case 0:
            console.log("Thank You for using BASE 64 CLI");
            process.exit();
            break;
    
        case 1:
            base64Encoding();
            break;
    
        case 2:
            base64Decoding();
            break;
    
        default:
            console.log("Not a valid Option");
            break;
    }
    let isContinue = readlineSync.question("Do you want to continue(y/n)");
    if(isContinue == 'y') {
        main();
    }
    else {
        console.log("ThankYou for using BASE64 CLI APPLICATION");
        process.exit();
    }
}
main();

function base64menu(){
    console.clear();
    console.log("------------------------");
    console.log("BASE 64 CLI APPLICATION");
    console.log("------------------------");
    console.log("Press 0 to Exit");
    console.log("Press 1 to Encode");
    console.log("Press 2 to Decode");
}