function pastro() {
    window.alert("Po fshihet gjithe informacioni i shkruar!");
}

function hyrje() {
    var logname = document.getElementById("loginname").value;
    var logpass = document.getElementById("loginpass").value;
    if (logpass != "" && logname != "" && logpass.length > 7) {
        window.alert("U loguat me sukses!");
    }
    else if (logpass == "" && logname == "") {
        window.alert("Ju lutem plotesoni te dhenat!");
    }
    else if (logname == "") {
        window.alert("Ju lutem plotesoni emrin e perdoruesit!");
    }
    else if (logpass == "") {
        window.alert("Ju lutem plotesoni fjalekalimin!");
    }
    else {
        window.alert("Fjalekalim i gabuar!");
    }

}

function regjistrohu() {
    var pas = document.getElementById("pass").value;
    var kpas = document.getElementById("kpass").value;
    if (pass != "" && kpas != "") {
        if (pas != kpas) {
            window.alert("Fjalekalimi i konfirmuar duhet te jete njilloj me fjalekalimin fillestar");
        }
        else {
            window.alert("U rregjistruat me sukses!");
            window.location.assign("index.html");
        }
    }
}

var imageAdd = function (event) {
    var image = document.getElementById('ikona');
    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.marginBottom = "10px";
};