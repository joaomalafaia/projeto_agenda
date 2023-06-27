const form = document.getElementById('form-contatos');

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaLinha();
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelContato = document.getElementById('telefone-contato');
    const inputMailContato = document.getElementById('mail-contato');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelContato.value}</td>`;
    linha += `<td>${inputMailContato.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeContato.value = '';
    inputTelContato.value = '';
    inputMailContato.value = '';
}

function atualizaLinha() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
