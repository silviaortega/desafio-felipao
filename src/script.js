document.getElementById('formularioHeroi').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('resultado').innerHTML = '';

    let herois = document.querySelectorAll('.entrada-heroi');
    let mensagemResultado = '';

    herois.forEach(function(entradaHeroi) {
        let nome = entradaHeroi.querySelector('input[type="text"]').value;
        let xp = parseInt(entradaHeroi.querySelector('input[type="number"]').value);
        let nivel = '';

        if (xp < 1000) {
            nivel = 'Ferro';
        } else if (xp <= 2000) {
            nivel = 'Bronze';
        } else if (xp <= 5000) {
            nivel = 'Prata';
        } else if (xp <= 7000) {
            nivel = 'Ouro';
        } else if (xp <= 8000) {
            nivel = 'Platina Diamante';
        } else if (xp <= 9000) {
            nivel = 'Ascendente';
        } else if (xp <= 10000) {
            nivel = 'Imortal';
        } else {
            nivel = 'Radiante';
        }

        mensagemResultado += `O Herói de nome <strong>${nome}</strong> está no nível <strong>${nivel}</strong><br>`;
    });

    document.getElementById('resultado').innerHTML = mensagemResultado;
});