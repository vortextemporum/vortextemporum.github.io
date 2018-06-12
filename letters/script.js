// Inspired by http://www.c3.hu/collection/form/
// Made by Berk Özdemir for personal use


// Turn these variables to an object

const letterz = {
    a: ['0110', '1001', '1111', '1001', '1001'],
    b: ['1110', '1001', '1110', '1001', '1110'],
    c: ['0110', '1001', '1000', '1001', '0110'],
    d: ['1110', '1001', '1001', '1001', '1110'],
    e: ['1111', '1000', '1110', '1000', '1111'],
    f: ['1111', '1000', '1110', '1000', '1000'],
    g: ['0110', '1001', '1000', '1011', '0111'],
    h: ['1001', '1001', '1111', '1001', '1001'],
    ı: ['111', '010', '010', '010', '111'],
    i: ['010', '000', '111', '010', '010', '010', '111'],
    j: ['0011', '0001', '0001', '1001', '0110'],
    k: ['1001', '1010', '1100', '1010', '1001'],
    l: ['1000', '1000', '1000', '1000', '1111'],
    m: ['10001', '11011', '10101', '10001', '10001'],
    n: ['1001', '1101', '1011', '1001', '1001'],
    o: ['0110', '1001', '1001', '1001', '0110'],
    ö: ['1001', '0110', '1001', '1001', '1001', '0110'],
    p: ['1110', '1001', '1110', '1000', '1000'],
    q: ['0110', '1001', '1001', '1001', '01111'],
    r: ['1110', '1001', '1110', '1010', '1001'],
    s: ['1111', '1000', '1111', '0001', '1111'],
    t: ['11111', '00100', '00100', '00100', '00100'],
    u: ['1001', '1001', '1001', '1001', '1111'],
    v: ['10001', '10001', '10001', '01010', '00100'],
    w: ['10101', '10101', '10101', '10101', '01110'],
    x: ['10001', '01010', '00100', '01010', '10001'],
    y: ['10001', '01010', '00100', '00100', '00100'],
    z: ['11111', '00010', '00100', '01000', '11111']

};



let str = "berk kalp fuat kalp batu";
let words = str.split(" ");

function setup() {
    noCanvas();
    header = createDiv();
    header.addClass("header");
    from_text_to_letter();
}
// let boxes = document.getElementsByTagName("input")



function from_text_to_letter() {

    for (index = 0; index < words.length; index++) {
        let worddiv = createDiv();
        worddiv.id("word_" + index);
        worddiv.addClass("word");
        worddiv.parent(header);
        let word = words[index];
        // console.log(word)

        for (var jindex = 0; jindex < word.length; jindex++) {
            let newletter = letterz[word[jindex]];
            let table = createElement("table");
            table.addClass("letter");
            table.parent(worddiv);
            for (var col = 0; col < newletter.length; col++) {
                tr = createElement("tr").class("row_" + col.toString());
                tr.parent(table);
                for (var row = 0; row < newletter[col].length; row++) {
                    let cell = newletter[col][row];
                    if (cell == 1)  {
                        var td = createElement('td');
                        td.addClass("cell");
                        td.parent(tr);
                        var check = createCheckbox();
                        check.addClass("check");
                        check.parent(td);
                    } else {
                        var td = createElement('td');
                        td.addClass("cell");
                        td.parent(tr);

                    }
                }

            }

        }
    }
}


function draw() {}