var calcular = window.document.getElementById('calcular')
calcular.addEventListener('click', imc);

function imc () {
    let nome = window.document.getElementById('nome').value
    let altura = window.document.getElementById('altura').value
    let peso = window.document.getElementById('peso').value
    let res = window.document.getElementById('resultado')

    if (nome !== '' && altura !== '' && peso !== '') {
        let valorIMC = (peso / (altura * altura)).toFixed(1)

        let classificacao = ''

        if (valorIMC <= 18.5) {
            classificacao = 'voce esta abaixo do seu peso!'
        } else if (valorIMC <= 25) {
            classificacao = 'Parabéns!! Esse e seu peso ideal!'

        } else if (valorIMC <= 30) {
            classificacao = 'Hum, que pena voce esta acima do seu peso, mais não desista voce vai conseguir!'
        } else if (valorIMC <= 35) {
            classificacao = 'Seu nivel atual e Obesidade I, Mais não desista de seus objetivos! Uma jornada de milhares de quilômetros começa com um passo.'
        } else if (valorIMC <= 40) {
            classificacao = 'Seu grau e Obesidade II (Severa), Não Desanime, Busque ajuda, insista em seus objetivos e lembre-se Seu sucesso depende apenas do seu esforço!'
        } else {
            classificacao = 'Seu nivel atual e Obesidade III (mórbida), Não se desespere, Procure ajuda profissional cuide se bem e lembre-se, Nossos corpos são nossos jardins, nossas vontades são nossos jardineiros tudo e possível aquele que crer!'
        }



        res.innerHTML = `Ola ${nome} , seu IMC é: ${valorIMC}, ${classificacao}`
       
    } else {
        res.innerHTML = 'Preencha todos os campos vazios!!!'
    }

    

    
}

