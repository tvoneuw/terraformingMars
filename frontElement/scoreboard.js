function sumPoints(NT, R, O, P, C){
    return NT + R + O + P + C;
}

function assertSumPoints(desc, assertScore, nt, r, o, p, c){
    const calcScore = sumPoints(nt, r, o, p, c);
    console.log(desc);
    console.log("With (NT = %d, R = %d, O = %d, P = %d, C = %d), assert S = %d : %s", nt, r, o, p, c, calcScore, calcScore === assertScore);
}

function getTotal(){
    let refTab=document.getElementById("test");
    let total = refTab.rows[1].cells[1];
    console.log(total);
    $("#total_value").text(total);
    // Loop through all rows and columns of the table and popup alert with the value
    // /content of each cell.
    /*for ( var i = 0; row = refTab.rows[i]; i++ ) {
       row = refTab.rows[i];
       for ( var j = 0; col = row.cells[j]; j++ ) {
          alert(col.firstChild.nodeValue);
       }
    }*/
}

function main(){
    console.log("Unit Tests :");
    const desc1 = "UT1 - main case : ";
    const utS1 = 74;
    const nt1 = 43;
    const r1 = 10;
    const o1 = 2;
    const p1 = 11;
    const c1 = 8;
    assertSumPoints(desc1, utS1, nt1, r1, o1, p1, c1);
}

var element = document.getElementById('player1_NT');
element.addEventListener("input", function (e) {
    getTotal();
});

function testfunction(){
    console.log("test");
}

main();