// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

var list =[];
start();
var timer = setTimeout(fine, 30000);
document.getElementById('prova').addEventListener('click' , fine);








// functions
function start(){
    list = getRandomArr();
alert(list);
}


function getRandomArr(){
    var arr = [] ;
    for (var i = 0; i <= 4; i++){
        var num = Math.floor(Math.random()* 100 - 1) + 1;
        if (!arr.includes(num)){
            arr.push(num)
        }
    }
    return arr;
}

function fine(){
    var risposta =[];
    risposta.push(parseInt(document.getElementById("uno").value));
    risposta.push(parseInt(document.getElementById("due").value));
    risposta.push(parseInt(document.getElementById("tre").value));
    risposta.push(parseInt(document.getElementById("quattro").value));
    risposta.push(parseInt(document.getElementById("cinque").value));
    
    document.getElementById("uno").value= '';
    document.getElementById("due").value='';
    document.getElementById("tre").value='';
    document.getElementById("quattro").value='';
    document.getElementById("cinque").value='';
    console.log(risposta);
    if(risposta[0] != risposta[1] && risposta[1] != risposta[2] && risposta[2] != risposta[3] && risposta[3] != risposta[4] && risposta[4] != risposta[0]){
        for ( var i = 0 ; i <= 4; i ++){
            if (!list.includes(risposta[i])){
                alert('hai perso'); 
                clearTimeout(timer);
                return start();
            }
        }
        alert('hai vinto');
        clearTimeout(timer);
        return start();
    }
    else{
        alert('inserisci numeri diversi, riprova');
        clearTimeout(timer);
        return start();
    }
} 