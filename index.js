let resultado=soma(200, 5)
function soma(vitoria, derrota){
		let rmr = vitoria - derrota
        return rmr
}
let nivel=" ";

    if(resultado<10){
    nivel="ferro" }
    
    else if(resultado >=10 && resultado <20){
    nivel="bronze"} 
    
    else if (resultado >=20 && resultado <50){
    nivel="ferro"}
    
    else if(resultado >=50 && resultado <80)
    {nivel="ouro"}
    
    else if(resultado >=80 && resultado <90){
    nivel="diamante"}
    
    else if(resultado >=90 && resultado<100){
    nivel="lendario"}
    
    else if(resultado>=100){
    nivel="imortal"}

console.log("O Herói tem de saldo de: "+ resultado + " está no nível de: " +nivel)
