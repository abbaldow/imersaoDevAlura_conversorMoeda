function calcular(){
    let nota1 = Number(window.document.getElementById('nota1').value)
    let nota2 = Number(window.document.getElementById('nota2').value)
    let nota3 = Number(window.document.getElementById('nota3').value)
    let res = window.document.getElementById('resultado')
      
  
    let notaFinalArredondada = (nota1*0.2+nota2*0.3+nota3*0.5)
    let notaFinal = notaFinalArredondada.toFixed(2)
       

    if (notaFinal<60.00){
        res.innerHTML = `Sua nota final é ${notaFinal}. Você está <b>REPROVADO</b>.`
    } else{
        res.innerHTML = `Sua nota final é ${notaFinal}. Você está <b>APROVADO</b>.`
    }
    
}



