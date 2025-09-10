//Dados fixos
//Aqui temos uma lista de filmes e séries com:
//Titulo
//Imagem
//gêneros (array de strings)
const dados = {
  filmes: [
    {
      titulo: "Bad Boys: Para Sempre.",
      imagem: "../assets/imgs/badboys.webp",
      genero: ["Acão", "Comédia"],
    },
    {
      titulo: "Um Lugar Silencioso.",
      imagem: "../assets/imgs/umlugarsilencioso.webp",
      genero: ["Ficção", "Terror", "Mistério"],
    },
    {
      titulo: "Venom",
      imagem: "../assets/imgs/venom.webp",
      genero: ["Ação", "Ficção"],
    },
    {
      titulo: "Deadpool & Wolverine",
      imagem: "../assets/imgs/deadpoolewolverine.webp",
      genero: ["Ação", "Comédia", "Ficção"],
    },
    {
      titulo: "Divertida-Mente 2",
      imagem: "../assets/imgs/divertidamente.webp",
      genero: ["Ficção", "Animação", "Aventura", "Comédia"],
    },
  ],
  series: [
    {
      titulo: "Guerra dos Tronos",
      imagem: "../assets/imgs/gameofthrones.webp",
      genero: ["Ficção", "Aventura", "Ação", "Fantasia"],
    },
    {
      titulo: "Sobrenatural",
      imagem: "../assets/imgs/sobrenatural.webp",
      genero: ["Ficção", "Comédia", "Ministério", "Drama", "Thriller"],
    },
    {
      titulo: "Grey's Anatomy",
      imagem: "../assets/imgs/greysanatomy.webp",
      genero: ["Drama", "Romance"],
    },
    {
      titulo: "Prison Break",
      imagem: "../assets/imgs/prisonbreak.webp",
      genero: ["Acão", "Drama", "Mistério", "Crime"],
    },
    {
      titulo: "O Senhor Dos Anéis: Os Anéis de Poder",
      imagem: "../assets/imgs/osenhordosaneis.webp",
      genero: ["Ficção", "Aventura", "Sci-Fi & Fantasy"],
    },
    {
      titulo: "Segredo do Rio",
      imagem: "../assets/imgs/osegredodorio.webp",
      genero: ["Drama", "Mistério"],
    },
  ],
};

//Seletores de DOM
//Seleciona os cards dos filmes e series no HTML
const filmesCards = document.querySelectorAll("#filmes-container a");
const seriesCards = document.querySelectorAll("#series-container a");

//Selecionar o filtro de gênero e o botão de "limpar filtro"
const selectGenero = document.getElementById("genero");
const btnLimpar = document.getElementById("limpar-filtro");

//Renderização dos cards
document.addEventListener("DOMContentLoaded", function () {
  //cards List dos <a> (links) do HTML cada card
  //lista array de dados filmes e series
  //filtro Gênero selecionado ex.Ação ou todos.
  function renderizar(cards, lista, filtro = "todos") {
    cards.forEach(cards, (index) => {
      const item = lista[index]; // pega o item na mesma posição do array
      const genero = item && item.genero;

      //Verifica se o item corresponde ao filtro escolhido
      const correspondeFiltro =
        filtro === "todos" || (genero && genero.includes(filtro));

      if (item && correspondeFiltro) {
        //Se passar no filtro -> mostra o card e aplica a imagem de fundo
        cards.style.display = "block";
        cards.style.backgroundImage = `ur(${item.imagem})`;
        cards.style.backgroundSize = "cover";
        cards.style.backgroundposition = "center";
      } else {
        // Caso contrario -> esconde o card
        cards.style.display = "none";
      }
    });
  }

  //Função aplicarFiltro()
  //Atualiza a exibição de filmes e séries com baseno gênero selecionado
  function aplicarFiltro(generoSelecionado) {
    renderizar(filmesCards, dados.filmes, generoSelecionado);
    renderizar(seriesCards, dados.series, generoSelecionado);
  }

  if (selectGenero) {
    selectGenero.addEventListener("change", function () {
      aplicarFiltro(this.value); // pega o valor selecionado
    });
  }

  //Quando clica no botão limpar
  if (btnLimpar) {
    btnLimpar.addEventListener("click", function () {
      selectGenero.selectedIndex = 0; //Volta para "Todos"
      aplicarFiltro("todos"); //Mostra todos novamente
    });
  }
  //Exibe todos os itens logo no início
  aplicarFiltro("todos");
});

//Pesquisa por texto
const inputPesquisar = document.getElementById("pesquisar");

if (inputPesquisar) {
  inputPesquisar.addEventListener("input", function () {
    const palavraDigitada = this.value.toLowerCase();

    //Filtra os filmes
    filmesCards.forEach((card, index) => {
      const titulo = dados.filmes[index].titulo.toLowerCase();
      card.style.display = titulo.includes(palavraDigitada) ? "block" : "none";
    });

    //Filtra os series
    seriesCards.forEach((card, index) => {
      const titulo = dados.series[index].titulo.toLowerCase();
      card.style.display = titulo.includes(palavraDigitada) ? "block" : "none";
    });

    //Se está pesquisando por texto, o filtro gênero volta para "Todos"
    if (selectGenero) selectGenero.selectedIndex = 0;
  });
}

//MENU MOBILE
const btnMenu = document.getElementById("menu-btn");
const menuMobile = document.getElementById("menu-mobile");

if (btnMenu && menuMobile) {
  btnMenu.addEventListener("click", () => {
    //Alterar a exibição do menu (abre e fecha)
    menuMobile.style.display =
      menuMobile.style.display === "flex" ? "nome" : "flex";
  });
}
