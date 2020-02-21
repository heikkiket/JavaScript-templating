'use strict';

function main(){

    window.bullets = [1, 2, 3];
    renderBullets();

}

function clicked() {
    let tmpl = "Hello, world! My name is <b><% this.name %></b>";
    let data = {name: document.getElementById('name').value};
    placeTemplate(tmpl, data, "testarea");
}

function renderBullets() {
    let tmpl = "<ul><% for (let i=0; i < this.bullets.length; i++) { %>"
        + "<li><% this.bullets[i] %></li>"
        + "<% } %> </ul>";
    let data = {bullets: window.bullets};
    placeTemplate(tmpl, data, 'bullets');
}

function addBullet() {
    bullets.push(bullets[bullets.length - 1] + 1 || 1);
    renderBullets();
}

function remBullet() {
    bullets.pop();
    renderBullets();
}

function process() {
    let data = {
        title: "Heikin kotisivut",
        description: "Täältä löydät kaikenlaisia tosi mielenkiintoisia kirjoituksia.",
        homepage: {
            name: "Heikin kotisivut",
            link: "http://www.esimerkki.fi"
        }
    };
    fillTemplate(data, "template");
}

function placeTemplate(tmpl, data, id) {
    let res = applyTemplate(tmpl, data);
    document.getElementById(id).innerHTML = res;
}

function fillTemplate(data, id) {
    let tmpl = document.getElementById(id).innerHTML;
    tmpl = tmpl.replace(/(\r\n|\n)/gm, "");
    // We have to escape double quotes. But idk why this doesnt work.
    // tmpl = tmpl.replace(/\"/gm, "\"");
    // tmpl = tmpl.replace(/\'/gm, "\'");
    console.log(tmpl, data, id);
    placeTemplate(tmpl, data, id+"-place");
}
