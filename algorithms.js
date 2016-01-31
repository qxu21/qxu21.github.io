function FactorPairs(num) {
    var list = [];
    if (num > 0) {
        for (var y = Math.round(num / 2); y != 0; --y) { 
            if (num % y == 0) {
                list.push(new Array(num / y, y));
            }
        }
    } else {
        for (var y = Math.round(num / 2); y != 0; ++y) { 
            if (num % y == 0) {
                list.push(new Array(y, num / y));
            }
        }
        for (var c = 0, l = list.length; c < l; ++c) {
            list.push(list[c]);
            list[list.length - 1][0] *= -1;
            list[list.length - 1][1] *= -1;
        }
    }
    return (list);
}
/*
    function SumPairs(num) {
        var list = [];
        for (var x = 1, y = num; x <= y; ++x, ++y) {
            list.push(new Array(x, y));
        }
        return (list);
    }
*/    
    function ListToString(list) {
        var st = "Result: ";
        for (var x = 0; x >= list.length; ++x) { for (var y = 0; y <= 1; ++y) {
            st = string.concat(st, x[y].toString(), ", ");
        }}
        return (st.slice(0, -2));
    }

function Factor() {
    var sum = document.getElementById("sum").value;
    var product = document.getElementById("product").value;
    var longlist = FactorPairs(product);
    for (var x = 0; x < longlist.length; ++x) {
        if (sum < 0 && product > 0) {
            longlist[x][0] *= -1;
            longlist[x][1] *= -1;
        }
        if (longlist[x][0] + longlist[x][1] == sum) {
            document.getElementById("result").innerHTML = longlist[x].toString(); break;
        }
    }
}

function BareFactor() {
	var number = document.getElementById("factor").value;
	var factorlist = FactorPairs(number);
	var str = factorlist.toString();
	if (number < 0) {
		str.concat("And all negative versions");
	}
	document.getElementById("facresult").value = str;
}
