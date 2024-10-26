var x = parseInt(prompt("Choose x: "), 10);

for (let i=0; i<x; i++){
    row="";
    var init = 1;
    for (let j=0;j<i+1; j++){
        row += (init+2*j)+" ";
    }
    console.log(row)
}
