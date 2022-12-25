function sumPoints(NT, R, O, P, C){
    return NT + R + O + P + C;
}

function assertSumPoints(desc, assertScore, nt, r, o, p, c){
    const calcScore = sumPoints(nt, r, o, p, c);
    console.log(desc);
    console.log("With (NT = %d, R = %d, O = %d, P = %d, C = %d), assert S = %d : %s", nt, r, o, p, c, calcScore, calcScore === assertScore);
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

main();