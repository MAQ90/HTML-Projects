function store(){
    var userA = document.getElementById("UserA").value;
    var userB = document.getElementById("UserB").value;
    var userAProp = document.getElementById("UserAProp").value;
    var userBProp = document.getElementById("UserBProp").value;
    console.log(userA);
    document.getElementById('userAName').innerHTML = userA;
    document.getElementById('userBName').innerHTML = userB;
    document.getElementById('UserAprop').innerHTML = userAProp;
    document.getElementById('UserBprop').innerHTML = userBProp;
}

function interChange(){
    var userAProp = document.getElementById("UserAProp").value;
    var userBProp = document.getElementById("UserBProp").value;
    document.getElementById('UserAprop').innerHTML = userBProp;
    document.getElementById('UserBprop').innerHTML = userAProp;
}
