function ep(clic) {
    var btn = document.getElementById(clic);
    var modal;
    if (clic === "ep1") {
        modal = document.getElementById("myModal1");
    }
    else if (clic === "ep2") {
        modal = document.getElementById("myModal2");
    }
    else if (clic === "ep3") {
        modal = document.getElementById("myModal3");
    }
    else if (clic === "ep4") {
        modal = document.getElementById("myModal4");
    }
    else if (clic === "ep5") {
        modal = document.getElementById("myModal5");
    }
    else if (clic === "ep6") {
        modal = document.getElementById("myModal6");
    }
    else if (clic === "ep7") {
        modal = document.getElementById("myModal7");
    }
    else if (clic === "ep8") {
        modal = document.getElementById("myModal8");
    }
    else if (clic === "ep9") {
        modal = document.getElementById("myModal9");
    }
    else if (clic === "ep10") {
        modal = document.getElementById("myModal10");
    }
    else if (clic === "ep11") {
        modal = document.getElementById("myModal11");
    }
    else if (clic === "ep12") {
        modal = document.getElementById("myModal12");
    }
    else if (clic === "ep13") {
        modal = document.getElementById("myModal13");
    }
    else if (clic === "ep14") {
        modal = document.getElementById("myModal14");
    }
    else if (clic === "ep15") {
        modal = document.getElementById("myModal15");
    }
    else if (clic === "ep16") {
        modal = document.getElementById("myModal16");
    }
    else if (clic === "ep17") {
        modal = document.getElementById("myModal17");
    }
    else if (clic === "ep18") {
        modal = document.getElementById("myModal18");
    }
    else if (clic === "ep19") {
        modal = document.getElementById("myModal19");
    }
    else if (clic === "ep20") {
        modal = document.getElementById("myModal20");
    }
    else if (clic === "ep21") {
        modal = document.getElementById("myModal21");
    }
    else if (clic === "ep22") {
        modal = document.getElementById("myModal22");
    }
    else if (clic === "ep23") {
        modal = document.getElementById("myModal23");
    }
    else if (clic === "ep24") {
        modal = document.getElementById("myModal24");
    }
    else if (clic === "ep25") {
        modal = document.getElementById("myModal25");
    }
    else if (clic === "ep26") {
        modal = document.getElementById("myModal26");
    }
    else if (clic === "ep27") {
        modal = document.getElementById("myModal27");
    }
    else if (clic === "ep28") {
        modal = document.getElementById("myModal28");
    }
    else if (clic === "ep29") {
        modal = document.getElementById("myModal29");
    }
    else if (clic === "ep30") {
        modal = document.getElementById("myModal30");
    }
    else if (clic === "ep31") {
        modal = document.getElementById("myModal31");
    }
    else if (clic === "ep32") {
        modal = document.getElementById("myModal32");
    }
    else if (clic === "ep33") {
        modal = document.getElementById("myModal33");
    }
    else if (clic === "ep34") {
        modal = document.getElementById("myModal34");
    }
    else if (clic === "ep35") {
        modal = document.getElementById("myModal35");
    }
    else if (clic === "ep36") {
        modal = document.getElementById("myModal36");
    }
    else {
        modal = document.getElementById("myModal37");
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


