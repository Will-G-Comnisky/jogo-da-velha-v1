let tabuleiro
let board
let aviso = document.getElementById('idAviso');
let jogador
let linha
let coluna

const iniciar = () => {
    tabuleiro = []
    board = document.getElementById('idBoard');
    aviso = document.getElementById('idAviso');
    jogador = 1;

    for ( let i = 0; i < 3; i++ ) {
        tabuleiro[i] = []
        for ( let j = 0; j < 3; j++ ) {
            tabuleiro[i][j] = 0;
        }
    }

    console.table(tabuleiro)
    exibir();
}

const exibir = () => {
    let tabela = '<table cellpadding= "24" border="1">'

    for (let i = 0; i < 3; i++) {
        tabela += '<tr>'

        for(let j = 0; j <3; j++) {

            switch (tabuleiro[i][j]) {
                case -1: marcador = 'X'; break;
                case 1: marcador = 'O'; break;
                default: marcador = '_'
            }



            tabela += '<td style="padding: 32px;">' + marcador + '</td>'
        }

        tabela += '</tr>'
    }

    tabela += '</table>'
    
    board.innerHTML = tabela;

}

const jogar = () => {

    aviso.innerHTML = 'Vez do jogador: ' + numeroJogador();

    linha = document.getElementById('idLinha').value - 1;
    coluna = document.getElementById('idColuna').value - 1;

    if (tabuleiro[linha][coluna] == 0) {
        tabuleiro[linha][coluna] = numeroJogador() == 1 ? 1 : -1;
    } else {
        aviso.innerHTML = 'Esse campo já foi marcado'
    }



    console.table(tabuleiro)

    jogador++;
    exibir();
    checar();
}

const checar = () => {
    // Verificando se ganhou pelas linhas preenchidas
    for (let i = 0; i < 3; i++) {
        let soma = 0;
        soma = tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2];

        if (soma == 3 || soma == -3) {
            aviso.innerHTML = 'O jogador ' + numeroJogador() + ' ganhou!';
            return;
        }
    }

    // Verificando se ganhou por coluna preenchida
    for (let i = 0; i < 3; i++) {
        let soma = 0;
        soma = tabuleiro[0][i] + tabuleiro[1][i] + tabuleiro[2][i];

        if (soma == 3 || soma == -3) {
            aviso.innerHTML = 'O jogador ' + numeroJogador() + ' ganhou!';
            return;
        }
    }

    // Verificando se ganhou pelo preenchimento da diagonal
    let diagonal1 = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2];
    let diagonal2 = tabuleiro[0][2] + tabuleiro[1][1] + tabuleiro[2][0];

    if (diagonal1 == 3 || diagonal1 == -3 || diagonal2 == 3 || diagonal2 == -3) {
        aviso.innerHTML = 'O jogador ' + numeroJogador() + ' ganhou!';
    }
}


const numeroJogador = () => {
    return jogador%2 + 1;
}