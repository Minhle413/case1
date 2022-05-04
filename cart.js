function tinhtien1() {
    let a1 = document.getElementById('num1').value;
    let c1 = document.getElementById('c1').value;
    document.getElementById('c1').value=(a1*1119000)

}

function tinhtien2() {
    let a2 = document.getElementById('num2').value;
    let c2 = document.getElementById('c2').value;
    document.getElementById('c2').value = (a2 * 2039000)
}

function tinhtien3() {
    let a3 = document.getElementById('num3').value;
    let c3 = document.getElementById('c3').value;
    document.getElementById('c3').value = (a3 * 2189000)
}
function tinhtien4() {
    let a4 = document.getElementById('num4').value;
    let c4 = document.getElementById('c4').value;
    document.getElementById('c4').value = (a4 * 819000)
}
function tinhtien5() {
    let a5 = document.getElementById('num5').value;
    let c5 = document.getElementById('c5').value;
    document.getElementById('c5').value = (a5 * 659000)
}
function tinhtien6() {
    let a6 = document.getElementById('num6').value;
    let c6 = document.getElementById('c6').value;
    document.getElementById('c6').value = (a6 * 1479000)
}
function tinhtien7() {
    let a7 = document.getElementById('num7').value;
    let c7 = document.getElementById('c7').value;
    document.getElementById('c7').value = (a7 * 1279000)
}
function tinhtien8() {
    let a8 = document.getElementById('num8').value;
    let c8 = document.getElementById('c8').value;
    document.getElementById('c8').value = (a8 * 1579000)
}
function tinhtien9() {
    let a9 = document.getElementById('num9').value;
    let c9 = document.getElementById('c9').value;
    document.getElementById('c9').value = (a9 * 750000)
}
function tinhtien10() {
    let a10 = document.getElementById('num10').value;
    let c10 = document.getElementById('c10').value;
    document.getElementById('c10').value = (a10 * 1050000)
}
function tinhtien11() {
    let a11 = document.getElementById('num11').value;
    let c11 = document.getElementById('c11').value;
    document.getElementById('c11').value = (a11 * 2100000)
}
function tinhtien12() {
    let a12 = document.getElementById('num12').value;
    let c12 = document.getElementById('c12').value;
    document.getElementById('c12').value = (a12 * 1500000)
}
function sum(){
    let s1 = document.getElementById('c1').value;
    let s2 = document.getElementById('c2').value;
    let s3 = document.getElementById('c3').value;
    let s4 = document.getElementById('c4').value;
    let s5 = document.getElementById('c5').value;
    let s6 = document.getElementById('c6').value;
    let s7 = document.getElementById('c7').value;
    let s8 = document.getElementById('c8').value;
    let s9 = document.getElementById('c9').value;
    let s10 = document.getElementById('c10').value;
    let s11 = document.getElementById('c11').value;
    let s12 = document.getElementById('c12').value;
    let Sum = parseInt(s1)+parseInt(s2)+parseInt(s3)+parseInt(s4)+parseInt(s5)+parseInt(s6)+parseInt(s7)+parseInt(s8)+parseInt(s9)+parseInt(s10)+parseInt(s11)+parseInt(s12)
    document.getElementById('result').value= Sum
}
