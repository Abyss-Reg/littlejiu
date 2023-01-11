function iconMove_in(){
    var ico = document.getElementById("icon");
    ico.style.left = "-30%";
}

function iconMove_out(){
    var ico = document.getElementById("icon");
    ico.style.left = "0";
}

function card_in(){
    var name_and_ico = document.getElementsByClassName("iconlip")[0];
    if(name_and_ico.childElementCount >= 2){
        //已经进行过了，可能是重复触发，所以本次返回
        return;
    }
    name_and_ico.style.width = "400px";
    window.setTimeout(iconMove_in,300);
    var name = document.createElement("div");
    window.setTimeout(function(){        
        name.className = "name";
        name.style.bottom = "-100%";
        name.innerHTML = "<span>狐小九Little_Jiu</span>";
        name_and_ico.appendChild(name);
    },300)
    window.setTimeout(function(){
        name.style.bottom = "calc(50px - 14px)";
    },600)
    window.setTimeout(function(){
        document.getElementById("som").style.opacity = "1";
    },500) 
}

function card_out(){
    var iconlip = document.getElementsByClassName("iconlip")[0];
    var rm = iconlip.getElementsByClassName("name")[0];
    if(rm.style.bottom == "-100%" || iconlip.childElementCount == 1){
        return;
    }
    window.setTimeout(function(){
        document.getElementById("som").style.opacity = "0";
    },300)
    rm.style.bottom = "-100%";
    window.setTimeout(function(){
        iconlip.removeChild(rm);
        var ico = document.getElementById("icon");
        ico.style.left = "0";
        window.setTimeout(function(){
            iconlip.style.width = "100px";
        },300)
    },300);

    
    
}
