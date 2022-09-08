function converter(){

    let valorReal = Number(window.document.getElementById("valor").value) 
    let opcao = window.document.getElementById('opcao')
    let res = window.document.getElementById('resultado')
    let  cotacaoDolar = 5.50
    let valorConvertido = (valorReal*cotacaoDolar).toFixed(2)

    res.innerHTML=(`O preço do produto é <b>U$${valorConvertido}</b>.`)

}



