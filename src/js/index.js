document.getElementById('botao').addEventListener('click', () => {
    pegarInformacoesTroca()
})

const descricaoConselho = document.getElementById('conselho')
const idConselho = document.getElementById('idConselho')

async function pegarInformacoesTroca() {
    const url = ('https://api.adviceslip.com/advice')
    let resposta = await fetch(url)
    const json = await resposta.json();

    let id = json.slip.id;
    let conselho = json.slip.advice
    
    descricaoConselho.innerHTML = conselho
    idConselho.innerHTML = id
}

pegarInformacoesTroca()


