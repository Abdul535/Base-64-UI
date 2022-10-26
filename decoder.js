//Validate the inputString whether it is value base 64 or not, by using regex and keep count of =
//get b64 decimals
//convert to 6bits binary
//join
//remove last zeroes acc to equal count
// split into 8bit
//convert to dec
//ASCII array 
//join and display ASCII string

let base64Decoding = (value) => {
    console.log(value);
    let inputString = value

    const base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    let isValid = base64regex.test(inputString);

    if((!inputString) || (!isValid)){
    inputString = alert("Invalid String input, Please Enter again: ");
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
    }


    if (!(isValid)) {
        console.log("invalid base64 input");
        return;
    }
    let trimmed = ''
    for ( let i=inputString.length-1; i>0; i--){
        if( inputString.charAt(i) !== '='){
            // console.log('checking ',i);
            trimmed = inputString.slice(0,i+1);
            break;
        }
    }
    // console.log(trimmed);
    inputString = trimmed;

    let split = inputString.split("");
    let base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    let b64dec = split.map((e) => {
        return base64.indexOf(e);
    }) 

    // console.log(b64dec);

    let bin = b64dec.map((e)=>{
        return e.toString(2);
    })

    // console.log(bin);

    let bin6bit = bin.map((e)=>{ 
        while ( e.length < 6){
           e = '0' + e;
        }
        return e;
    });
    // console.log(bin6bit);

    let arrSplit = bin6bit.join("").split("");
    // console.log(arrSplit);

    let bin8bit = [];
    while (arrSplit.length > 0){
        bin8bit.push(arrSplit.splice(0,8).join(""));
    }
    // console.log(bin8bit);

    // bin8bit.pop();

    let dec = bin8bit.map((e) => {
       return parseInt(e,2);
    })
    // console.log(dec);
    
    let str = dec.map((e)=>{
        return String.fromCharCode(e) 
    })
    // console.log(str);

    let finalString = str.join("");
    console.log("Final decode is",finalString);

    return finalString;
}
