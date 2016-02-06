function FactorPairs(num) {
    var list = [];
    if (num > 0) {
        for (var y = Math.round(num / 2); y != 0; --y) { 
            if (num % y == 0) {
                list.push(new Array(num / y, y));
            }
            /*
            if (list.indexOf(new Array(y, num / y)) > 0) {
				console.log("Bursting"); break;
			}
			*/
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

function Factor() {
    var sum = document.getElementById("sum").value;
    var product = document.getElementById("product").value;
    if (sum == null || product == null) {
		document.getElementById("result").innerHTML = "Waiting for input...";
		return null;
	}
    var longlist = FactorPairs(product);
    var isPrime = true;
    for (var x = 0; x < longlist.length; ++x) {
        if (sum < 0 && product > 0) {
            longlist[x][0] *= -1;
            longlist[x][1] *= -1;
        }
        if (longlist[x][0] + longlist[x][1] == sum) {
			isPrime = false;
            document.getElementById("result").innerHTML = longlist[x][0].toString().concat(", ", longlist[x][1].toString()); break;
        }
    }
    if (isPrime) {
		document.getElementById("result").innerHTML = "Prime";
	}
}

function BareFactor() {
	var number = document.getElementById("factor").value;
	if (typeof number){} //add typeof stuff)
	var tr1 = document.getElementById("facresult1");
	var tr2 = document.getElementById("facresult2");
	while (tr1.firstChild) {
    tr1.removeChild(tr1.firstChild);
	}
	while (tr2.firstChild) {
    tr2.removeChild(tr2.firstChild);
	}
	var factorlist = FactorPairs(number);
	for (var x = 0; x < factorlist.length; ++x) {
		var data1 = document.createElement("td");
		var data2 = document.createElement("td");
		var value1 = document.createTextNode(factorlist[x][0].toString());
		var value2 = document.createTextNode(factorlist[x][1].toString());
		data1.appendChild(value1); data2.appendChild(value2);
		tr1.appendChild(data1); tr2.appendChild(data2);
	}
}

function GCF() {
	var gcf1 = document.getElementById("gcf1").value;
	var gcf2 = document.getElementById("gcf2").value;
	if (gcf1 == "" || gcf2 == "") document.getElementById("gcfr").innerHTML = "";
	var isPrime = true;
	var x = null;
	if (gcf1 < gcf2) x = gcf1;
	else x = gcf2;
	for(; x > 0; --x) {
		if (gcf1 % x == 0 && gcf2 % x == 0) {
			document.getElementById("gcfr").innerHTML = x;
			isPrime = false;
			break;
		}
	}
}
