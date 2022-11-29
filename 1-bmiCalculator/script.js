function myFunction() {
    const kategori = document.getElementById("renkkategori");
    const kategorirenk = document.getElementById("renkkategori");
    const boy = document.getElementById("boyal").value;
    const kilo = document.getElementById("kiloal").value;
    const sonuc = document.getElementById("demo");
    const arkaplan = document.getElementById("bg");
    const baslik = document.getElementById("baslik");


    hesap = parseInt(kilo) / ((parseFloat(boy) * parseFloat(boy)));
    hesap = hesap.toFixed(2);
    if ((boy.length === 0) ||
        (kilo.length === 0)) {
        alert("iki alanında doldurulması zorunludur");
    } else if ((kilo == 0) || (kilo > 550) || (kilo < 0)) {
        alert("Geçersiz kilo değeri girdiniz")
    } else if ((boy < 0) || (boy > 2.50) || (boy == 0)) {
        alert("Geçersiz boy değeri girdiniz")
    } else {
        if (hesap > 40) {
            sonuc.innerHTML = hesap;
            kategori.innerHTML = "Kırmızı Kategoridesin , Obezite Hastasısın";
            arkaplan.style.backgroundColor = "red";
            baslik.innerHTML = "Vücut Kitle İndexin";
        } else if ((hesap > 30) && (hesap <= 39.9)) {
            sonuc.innerHTML = hesap;
            kategori.innerHTML = "Sarı Kategoridesin , Aşırı Kilon Var";
            arkaplan.style.backgroundColor = "yellow";
            baslik.innerHTML = "Vücut Kitle İndexin";
        } else if ((hesap > 25) && (hesap <= 30)) {
            sonuc.innerHTML = hesap;
            kategori.innerHTML = "Yeşil Kategoridesin , Biraz Fazla Kilon Var";
            arkaplan.style.backgroundColor = "green";
            baslik.innerHTML = "Vücut Kitle İndexin";
        } else if ((hesap > 18.5) && (hesap <= 25)) {
            sonuc.innerHTML = hesap;
            kategori.innerHTML = "Mavi Kategoridesin , Kilon Normal";
            arkaplan.style.backgroundColor = "blue";
            baslik.innerHTML = "Vücut Kitle İndexin";
        } else if (hesap <= 18.5) {
            sonuc.innerHTML = hesap;
            kategori.innerHTML = "En zayıf Kategoridesin";
            baslik.innerHTML = "Vücut Kitle İndexin";
        } else {
            sonuc.innerHTML = hesap;
        }
    }
}

function reset_button() {
    document.getElementById("resetle").reset();
    document.getElementById("demo").innerText = "";
    document.getElementById("renkkategori").innerText = "";
    document.getElementById("baslik").innerText = "";
    document.getElementById("bg").style.backgroundColor = "white";
}