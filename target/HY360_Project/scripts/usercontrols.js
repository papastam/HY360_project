let userdata= {};

function showlogin(){
    if($("#loginform").is(":visible")){
        $("#loginform").hide();
    }else{
        $("#loginform").show();
    }
}

function loadregister(){
    $("#appwindow").load("register.html");
}

function sendAjaxLoginPOST(event){
    event.preventDefault();
    let loginData = new FormData(document.getElementById('loginform'));
    const data = {};
    loginData.forEach((value, key) => (data[key] = value));

    var xhr = new XMLHttpRequest();
    xhr.onload = function (){
        if(xhr.readyState === 4 && xhr.status === 200){
            // console.log(xhr.responseText);
            var jsonreply = JSON.parse(xhr.responseText);
            console.log(jsonreply);
            if(jsonreply["logged_in"]){
                if(jsonreply["usertype"]==="individual" || jsonreply["usertype"]==="company" || jsonreply["usertype"]==="merchant"){
                    window.location.href = jsonreply["usertype"];
                }
            }
        }else if(xhr.readyState === 4 && xhr.status === 403){
            $("#ajaxContent").html("<p style='color:red'>Username or password is incorrect!</p>");
        }
    }

    // console.log("sent data");
    // console.log(data);
    xhr.open('POST', 'Login');
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(data));
}

function logout(){

    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            window.location.href = "/HY360_Project_war_exploded"

        } else if (xhr.status !== 200) {
            console.log('Request failed. Returned status of ' + xhr.status);
        }
    };

    xhr.open('POST', '/HY360_Project_war_exploded/Logout');
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.send();
}

function checkUserLoggedIn(usertype){
    var xhr = new XMLHttpRequest();
    xhr.onload = function (){
        if(xhr.readyState === 4 && xhr.status === 200){
            userdata = JSON.parse(xhr.responseText);
            if(userdata["usertype"]!=usertype){logout();}
        }else if(xhr.status!=200){
            window.location.href = "/HY360_Project_war_exploded";
            console.log("autologin failed with status code: "+xhr.status);
        }
    }

    xhr.open('POST', '/HY360_Project_war_exploded/GetInfo');
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send("");
}

function autoLogin(){
    var xhr = new XMLHttpRequest();
    xhr.onload = function (){
        if(xhr.readyState === 4 && xhr.status === 200){
            userdata = JSON.parse(xhr.responseText);
            window.location.href = "/HY360_Project_war_exploded/"+userdata[usertype];
        }
    }

    xhr.open('POST', '/HY360_Project_war_exploded/GetInfo');
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send("");
}