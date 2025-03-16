document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;
    
    alert(`Mensagem enviada com sucesso!\n\nNome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`);
});
