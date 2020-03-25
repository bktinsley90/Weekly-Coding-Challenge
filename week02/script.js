
let y,i,chr;
for (i=0; i<=6; i++) {
    for (y=1; y<i; y++) {
        chr=chr+("*");
    }
    console.log(chr);
    chr='';   
}