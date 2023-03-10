let timeUp = function () {
    alert('TYYYY')
}

let a = setTimeout(timeUp, 2000)
clearTimeout(a)



var leftOffset = 0;
 var moveHeading = function () {
 $("#heading").offset({ left: leftOffset });
 leftOffset++;
if (leftOffset > 200) {
        leftOffset = 0;
    }
};