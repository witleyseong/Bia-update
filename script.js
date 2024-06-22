function addUpdate() {
    var activity = document.getElementById('activity').value;
    var details = document.getElementById('details').value;
    var photo = document.getElementById('photo').files[0];
    var updatesList = document.getElementById('updatesList');

    // Obter data e hora do UK
    var now = new Date().toLocaleString("en-GB", {timeZone: "Europe/London"});

    var entry = document.createElement('li');
    entry.classList.add('update-entry');  // Adicionando uma classe para estilização

    // Preparar o conteúdo do texto da entrada com espaço para a foto
    entry.innerHTML = `<strong>${activity.toUpperCase()}</strong>: ${details} <br><small>${now}</small><div class="photo-container"></div>`;

    // Adicionando a entrada ao DOM antes de carregar a foto
    updatesList.appendChild(entry);

    // Processamento e exibição da foto
    if (photo) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var img = document.createElement('img');
            img.src = e.target.result;
            var photoContainer = entry.querySelector('.photo-container'); // Selecionando o container da foto dentro da entrada específica
            photoContainer.appendChild(img);
        };
        reader.readAsDataURL(photo);
    }

    // Limpar os campos após a adição
    document.getElementById('details').value = '';
    document.getElementById('photo').value = '';
}
