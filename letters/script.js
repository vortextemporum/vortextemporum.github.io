// Inspired by http://www.c3.hu/collection/form/
// Made by Berk Özdemir for personal use


// Turn these variables to an object
const a = ['0110', '1001', '1111', '1001', '1001'];
const b = ['1110', '1001', '1110', '1001', '1110'];
const c = ['0110', '1001', '1000', '1001', '0110'];
const d = ['1110', '1001', '1001', '1001', '1110'];
const e = ['1111', '1000', '1110', '1000', '1111'];
const f = ['1111', '1000', '1110', '1000', '1000'];
const g = ['0110', '1001', '1000', '1011', '0111'];
const h = ['1001', '1001', '1111', '1001', '1001'];
const ı = ['111', '010', '010', '010', '111'];
const i = ['010', '000', '111', '010', '010', '010', '111'];
const j = ['0011', '0001', '0001', '1001', '0110'];
const k = ['1001', '1010', '1100', '1010', '1001'];
const l = ['1000', '1000', '1000', '1000', '1111'];
const m = ['10001', '11011', '10101', '10001', '10001'];
const n = ['1001', '1101', '1011', '1001', '1001'];
const o = ['0110', '1001', '1001', '1001', '0110'];
const ö = ['1001', '0110', '1001', '1001', '1001', '0110'];
const p = ['1110', '1001', '1110', '1000', '1000'];
const q = ['0110', '1001', '1001', '1001', '01111'];
const r = ['1110', '1001', '1110', '1010', '1001'];
const s = ['1111', '1000', '1111', '0001', '1111'];
const t = ['11111', '00100', '00100', '00100', '00100'];
const u = ['1001', '1001', '1001', '1001', '1111'];
const v = ['10001', '10001', '10001', '01010', '00100'];
const w = ['10101', '10101', '10101', '10101', '01110'];
const x = ['10001', '01010', '00100', '01010', '10001'];
const y = ['10001', '01010', '00100', '00100', '00100'];
const z = ['11111', '00010', '00100', '01000', '11111'];

const str = "berk özdemir"
const words = str.split(" ");




function setup() {
    noCanvas()
    header = createDiv()
    header.addClass("header")
    from_text_to_letter()

}


function draw() {}


function from_text_to_letter() {

    for (index = 0; index < words.length; index++) {
        let worddiv = createDiv();
        worddiv.id("word_" + index)
        worddiv.addClass("word");
        worddiv.parent(header);
        let word = words[index];
        console.log(word)

        for (var jindex = 0; jindex < word.length; jindex++) {
            let letter = word[jindex];
            let newletter = eval(letter);
            let table = createElement("table");
            table.addClass(letter);
            table.parent(worddiv);
            for (var col = 0; col < newletter.length; col++) {
                tr = createElement("tr").class("row_" + col.toString());
                tr.parent(table);
                for (var row = 0; row < newletter[col].length; row++) {
                    let cell = newletter[col][row];
                    if (cell == 1)  {
                        var td = createElement('td');
                        td.addClass("mirror")
                        td.parent(tr)
                        check = createCheckbox()
                        check.parent(td)
                    } else {
                        var td = createElement('td');
                        td.addClass("mirror")
                        td.parent(tr)

                    }
                }

            }

        }
    }
}




// function drawSpace() {
//     let table = createElement("table");
//     table.addClass("space");
//     table.parent(header);
//     for (var s = 0; s < 5; s++) {
//         let space = createElement("tr");
//         space.size(20, 20);
//         space.parent(table);
//     }
// }