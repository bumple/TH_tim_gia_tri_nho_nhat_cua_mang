let arr1 = [3, 5, 1, 8, -3, 7, 8]

let arr2 = [7, 12, 6, 9, 20, 56, 89]

let arr3 = []

let arr4 = [0, 0, 0, 0, 0, 0]

function minArray(arr) {
    let min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

let min = minArray(arr1);
document.write("Giá trị của min là: " + min + "<br>" +
    "Vị trí của min là: " + arr1.indexOf(min)+ "<hr>")

let min2 = minArray(arr2);
document.write("Giá trị của min là: " + min2 + "<br>" +
    "Vị trí của min là: " + arr2.indexOf(min2)+ "<hr>")

let min3 = minArray(arr3);
document.write("Giá trị của min là: " + min3 + "<br>" +
    "Vị trí của min là: " + arr3.indexOf(min3)+ "<hr>")

let min4 = minArray(arr4);
document.write("Giá trị của min là: " + min4 + "<br>" +
    "Vị trí của min là: " + arr4.indexOf(min4)+ "<hr>")