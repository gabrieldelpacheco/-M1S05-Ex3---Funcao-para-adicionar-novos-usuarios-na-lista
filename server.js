function adicionarNomes(...nomes) {
    const lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria'];
  
    let mostraErro = false;
  
    nomes.forEach((nome) => {
      if (typeof nome !== 'string') {
          mostraErro = true;
          console.log('Todos os valores enviados precisam ser strings, favor verifique e envie novamente.');
      } else if (lista.includes(nome)) {
          mostraErro = true;
          console.log(`O nome ${nome} já está na lista favor verificar e adicionar um novo nome.`);
      } else {
          lista.push(nome);
      }
    });
  
    if (mostraErro === false) {
      console.log(lista);
    }
  
  }
  
  adicionarNomes("Maria", "André", 1);
  adicionarNomes("Maria", "André");
  adicionarNomes("José", "Pedro");