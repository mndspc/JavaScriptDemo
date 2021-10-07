function PrintSum(cnt1, cnt2) {
    var num1 = document.getElementById(cnt1).value;
    var num2 = document.getElementById(cnt2).value;
    var sum = parseInt(num1) + parseInt(num2);
    document.getElementById("result").innerHTML = sum;
}