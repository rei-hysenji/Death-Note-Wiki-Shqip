function hapvid(cli) {
    var btn = document.getElementById(cli);
    var modal;
    if (cli === "b1"|cli=="b1.1") {
        modal = document.getElementById("v1");
    }
    else if (cli === "b2"|cli === "b2.1") {
        modal = document.getElementById("v2");
    }
    else if (cli === "b3"|cli === "b3.1") {
        modal = document.getElementById("v3");
    }
    else if (cli === "b4"|cli === "b4.1") {
        modal = document.getElementById("v4");
    }
    else if (cli === "b5"|cli === "b5.1") {
        modal = document.getElementById("v5");
    }
    else {
        modal = document.getElementById("v6");
    }

    btn.onclick = function () {
        modal.style.display = "block";
    }
    
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
};

function hide(x,y) {
    x.style.opacity="0";
    y.style.opacity="1";
  }
  
  function show(x,y) {
    x.style.opacity="1";
    y.style.opacity="0";
}
