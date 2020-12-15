const userValue = [];
function clickFunction(){
    let text = document.getElementById('text').value;
    userValue.push(text);
    document.getElementById('result').innerHTML = userValue;
    console.log(userValue);
}
