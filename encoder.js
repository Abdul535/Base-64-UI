
let base64Encoding=(value)=>{

    let inputString = value;
    // console.log(inputString);

    let splitString = inputString.split("");
    // console.log("SplitString is ",splitString);

    //H -> bin  nai nikal skte
    //H ->ASCII ->bin
    //"h".charCodeAt()

    let asciiArr = splitString.map(e => e.charCodeAt());
    // console.log(asciiArr);

    //ASCII -> bin
    //toString(2)

    let binCodes = asciiArr.map(e => e.toString(2));
    // console.log("B", binCodes)

    //each binCodes element should be of 8bits
    //1 -->  00000001
    //11 --> 00000011
    //1000001 -> 0100001

    let binCodes8 = binCodes.map(e => {
        while(e.length < 8){
            e = '0'+e;
        }
        return e;
    })
    // console.log("B8", binCodes8);

    //first join() and split()
    let oneBinCodes = binCodes8.join("");
    // console.log(oneBinCodes);

    let oneBinSplit = oneBinCodes.split("");
    // console.log(oneBinSplit);

    //6 k pairs
    let binCodes6 = [];
    while( oneBinSplit.length != 0){
        binCodes6.push(oneBinSplit.splice(0,6).join(""));
    }
    // console.log("after 6 pair", binCodes6);

    //selecting lastElement
    let lastElement = binCodes6[binCodes6.length - 1];
    // console.log(lastElement);

    //Last Element padding from rightside
    //whenever we are adding two zero's we have to add '='
    // 00 -> =
    // 0000 -> ==

    var equalToCount=0;
    while ( lastElement.length < 6){
        lastElement = lastElement + '0';
        equalToCount++;
    }
    binCodes6[binCodes6.length - 1] = lastElement;

    // console.log(lastElement);
    // console.log(equalToCount);
    // console.log(binCodes6);

    //bin --> dec
    let bintoDec = binCodes6.map(e => parseInt(e,2));
    // console.log(bintoDec);

    //dec --> corresponding base64 values
    let base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    // console.log("base64 value is ", base64[27]);

    let finalCode = bintoDec.map(e => base64[e]);
    // console.log(finalCode);

    let finalString = finalCode.join("");
    // console.log(finalString);

    if ( equalToCount == 2){
        finalString = finalString + '='
    }
   else if( equalToCount == 4){
        finalString = finalString + '=='
    }

    console.log("Final Encoded base64 is: ",finalString);
    return finalString;

}
