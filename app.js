let amigos = [];

function adicionarAmigo() {
  let nome = document.getElementById('amigo').value.trim();

  if (nome === '') {
    alert('Por favor, insira um nome válido.');
    return;
  }

  amigos.push(nome);

  document.getElementById('amigo').value = '';

  atualizarLista();
}

function atualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; 
  amigos.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
  });
}


function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Não há amigos para sortear!');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  const amigoSorteado = amigos[indiceAleatorio];

  document.getElementById('resultado').innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
}