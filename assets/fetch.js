var data = {"text":"go"};
console.log(JSON.stringify(data));

function bgChanger(x) {
    elements = document.getElementsByClassName(x);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor=Math.floor(Math.random()*16777215).toString(16);
    }
}

bgChanger("strawberry");
bgChanger("leaf-right");
bgChanger("leaf-left");
bgChanger("frame");

