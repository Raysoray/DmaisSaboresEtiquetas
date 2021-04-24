var receita = ""
var pesquisa = ""

function salvar() {
    receita = document.getElementById('pegarReceita').value
  
        let pesquisa = receitas.filter((item)=>{

            if(item.nome === receita) {
                return true;
            }
            else {
                return false;
            }

        });
        if(pesquisa.length> 0 ) {
            pesquisa = pesquisa[0]
    document.querySelector('#titulo').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo2').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes2').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo3').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes3').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo4').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes4').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo5').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes5').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo6').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes6').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo7').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes7').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo8').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes8').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo9').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes9').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo10').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes10').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo11').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes11').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo12').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes12').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo13').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes13').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo14').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes14').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo15').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes15').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo16').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes16').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo17').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes17').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo18').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes18').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo19').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes19').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo20').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes20').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo21').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes21').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo22').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes22').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo23').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes23').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo24').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes24').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo25').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes25').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo26').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes26').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo27').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes27').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo28').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes28').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo29').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes29').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo30').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes30').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo31').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes31').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo32').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes32').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo33').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes33').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo34').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes34').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo35').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes35').innerHTML = (pesquisa.ingredientes)
    document.querySelector('#titulo36').innerHTML = (pesquisa.nome)
    document.querySelector('#ingredientes36').innerHTML = (pesquisa.ingredientes)

    }
}