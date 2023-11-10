const kilometriPasseggiero = parseInt ( prompt( 'dichiara i km che vuoi percorrere' ));
const etàPasseggiero = parseInt ( prompt( 'quanti anni hai'));
const minorenne = etàPasseggiero < 18
const pensionato = etàPasseggiero > 65


const scontoMinorenni = 20
const scontoPensionati = 40

const prezzoBigglietto1Km = 0.21


const prezzoTotale = prezzoBigglietto1Km + kilometriPasseggiero

const scontoMino = prezzoTotale / scontoMinorenni

const scontoPensione = prezzoTotale / scontoPensionati

if ( etàPasseggiero == minorenne){
    console.log( 'sconto del 20%', minorenne);


}else if( etàPasseggiero == pensionato){
    console.log( 'sconto del 40%', pensionato);

}

