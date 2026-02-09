const form = document.querySelector('form');

form.addEventListener('submit', function(event) {

event.preventDefault();

const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const genero = document.getElementById('genero').value;

const usuario = {
            nome,
            email,
            senha,
            dataCadastro: new Date().toLocaleString()
        };
localStorage.setItem('usuarioCadastrado', JSON.stringify(usuario));

        alert('Informações armazenadas com sucesso no navegador!');
        form.reset();
        
        console.log('Dados salvos:', usuario);
    });