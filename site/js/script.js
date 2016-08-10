function showImage(name) {
    var pic;

        pic = "images/" + name + ".jpg"
        document.getElementById('sp').innerHTML = name;
    document.getElementById('myImage').src = pic;
            }



     function show(nr) {
    document.getElementById("table1").style.display="none";
    document.getElementById("table2").style.display="none";
    document.getElementById("table3").style.display="none";
    document.getElementById("table4").style.display="none";
    document.getElementById("table"+nr).style.display="block";
}       