const kilometriPasseggiero = parseInt ( prompt( 'dichiara i km che vuoi percorrere' ));
const etàPasseggiero = parseInt ( prompt( 'quanti anni hai'));
const minorenne = etàPasseggiero < 18
const pensionato = etàPasseggiero > 65
const adulto = etàPasseggiero != minorenne != pensionato;
const prezzoBigglietto1Km = 0.21;
const prezzoTotale = prezzoBigglietto1Km + kilometriPasseggiero;



let scontoMinorenni = prezzoTotale * 20 / 100;
let scontoPensionati = prezzoTotale * 40 / 100;


const prezzoConScontMino = prezzoTotale - scontoMinorenni
const prezzoConScontoPensio = prezzoTotale - scontoPensionati

const numM = prezzoConScontMino;
alert( numM.toFixed(2) );

const numP = prezzoConScontoPensio;
alert( numP.toFixed() );


if ( minorenne){
    document.getElementById ('biglietto').innerHTML= 'il biglietto costa :' + prezzoConScontMino 


}else if( pensionato){
    document.getElementById('biglietto').innerHTML= 'il biglietto costa :' + prezzoConScontoPensio
    

}else{
    adulto
    document.getElementById('biglietto').innerHTML= 'il biglietto costa :' + prezzoTotale
}

