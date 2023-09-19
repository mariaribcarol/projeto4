console.log("Passei aqui")
function printInTheBoxAst(texto){
    let linha = " "
    for(let i = 0; i <texto.length; i++){
        linha = linha + " * "
    }
    console.log(" + "+linha+" + ");
    console.log("l" + texto+"l");
    console.log(" + "+linha+" + ");
    }

    function printInTheBox (texto) {
    console.log(" * "+linha+" * ");
    console.log("l" + texto+"l");
    console.log(" * "+linha+" * ");
}
    export { printInTheBoxAst, printInTheBox }