let amigos = [];

function adicionarAmigo() {
  let nome = document.getElementById('nomeAmigo').value.trim();

  if (nome === '') {
    alert('Por favor, insira um nome válido.');
    return;
  }

  amigos.push(nome);

  document.getElementById('nomeAmigo').value = '';

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