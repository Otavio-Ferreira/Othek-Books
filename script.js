class Database{
  constructor(){
      this.books = {
        "livros": [
          {
            "id": 1,
            "nome": "O Mundo Perdido",
            "preco": "R$20,00",
            "situação": "Disponível | Novo",
            "imagem": "imagens/livros/mundo_perdido.jpg",
            "sinopse": "O jovem jornalista Ed Malone não tem ideia do que encontrará nesta viagem exploratória a qual acaba de se candidatar: ir até os confins da América do Sul, junto com um estudioso e um caçador para comprovar a veracidade da teoria do excêntrico professor Challenger – que afirma ter encontrado criaturas pré-históricas criaturas nessas terras longínquas. Será?"
          },
      
          {
            "id": 2,
            "nome": "Adultério",
            "preco": "R$20,00",
            "situação": "Disponível | Semi-Novo",
            "imagem": "imagens/livros/adulterio.jpg",
            "sinopse": "Uma mulher de cerca de 30 anos começa a questionar a rotina e a previsibilidade de seus dias. Aos olhos de todos, ela tem uma vida perfeita: um casamento sólido e estável, um marido amoroso, filhos doces e bem-comportados, um emprego como jornalista do qual não pode se queixar."
          },

          {
            "id": 3,
            "nome": "Amor, História e Luta",
            "preco": "R$20,00",
            "situação": "Disponível | Novo",
            "imagem": "imagens/livros/cordel.jpg",
            "sinopse": "A Antologia de Folhetos de Cordel -- Amor história e luta coloca nas mãos dos leitores alguns dos mais importantes e conhecidos folhetos nordestinos oferecendo um panorama das formas e da trajetória histórica desta literatura popular. A introdução ao volume preparada por Márcia Abreu reconstitui com bom humor e delicadeza o desenvolvimento da produção de folhetos desde o final do século XIX. De forma clara e acessível aborda temas centrais para a compreensão desta literatura: sua relação com a oralidade os modos de composição de edição e de venda as maneiras de ler as práticas relativas aos direitos de autor as regras poéticas pelas quais se avalia a beleza de um folheto. Trata-se de uma edição primorosa em que os folhetos reproduzidos foram cuidadosamente transcritos e para a qual foram preparadas centenas de notas que trazem informações tanto sobre vocabulário quanto sobre referências históricas e culturais auxiliando a leitura e a compreensão dos poemas."
          },

          {
            "id": 4,
            "nome": "Comporte-se como uma Dama, Pense como um Homen",
            "preco": "R$15,00",
            "situação": "Disponível | Semi-Novo",
            "imagem": "imagens/livros/como_se_tornar_uma_dama.jpg",
            "sinopse": "Esqueça tudo o que já foi dito sobre os homens. Apague os mitos, as teorias, tudo o que sua mãe ensinou, as amigas disseram, aquilo que leu em revistas ou viu na televi¬são. Faça o que milhares de mulheres ao redor do mundo já fizeram: pegue os princípios, as regras e as dicas deste manual e use-os para se antecipar às manobras masculinas, para armar sua defesa e seu ataque. Por vezes engraçado, por vezes categórico, mas sempre verdadeiro, Comporte-se como uma dama, pense como um homem é o livro que toda mulher precisa ler se quiser finalmente montar o quebra-cabeças mais difícil de todos: a mente masculina."
          },

          {
            "id": 5,
            "nome": "A Garupa e Outros Contos",
            "preco": "R$7,00",
            "situação": "Disponível | Usado",
            "imagem": "imagens/livros/a_garupa.jpg",
            "sinopse": "A garupa e outros contos é uma antologia, uma reunião de contos. Uma antologia nunca é organizada ao acaso, sempre existe um critério para selecionar determinados textos. Neste livro, foram incluídos cinco contos de autores brasileiros importantes. Bruzundunga da Silva, de Sylvia Orthof, é um conto humorístico, de uma autora de grande importância para a literatura infanto-juvenil atual. Palavras aladas, de Marina Colasanti, não se passa no Brasil nem em outro lugar determinado. Não é um conto que faz rir. É uma crítica social, que faz refletir muito. Fábula eleitoral para crianças, de Paulo Mendes Campos, tem mesmo algumas características de fábula: personagens do reino animal, vegetal e mineral confabulam como se fossem humanos. Conto de escola é de Machado de Assis, o autor mais importante da literatura brasileira. É uma história de corrupção e denúncia, dentro do ambiente rígido de uma sala de aula do século XIX, no Rio de Janeiro. A garupa, escrito por Afonso Arinos no início do século XX, retrata o mundo rural mineiro. Este foi um dos primeiros autores brasileiros a trazer para a literatura a linguagem do sertão. Na leitura destes contos, portanto, você vai viver uma grande variedade de emoções."
          },
          
          {
            "id": 6,
            "nome": "Um Saci no Meu Quintal",
            "preco": "R$7,00",
            "situação": "Disponível | Usado",
            "imagem": "imagens/livros/um_saci_no_meu_quintal.jpg",
            "sinopse": "A mitologia brasileira, como todas as outras, compõe-se de elementos de várias culturas. Figuras como saci, lobisomem, mula-sem-cabeça e outras são mitos em que se misturam elementos sobretudo das culturas indígena, africana e portuguesa. Sua aparência e as lendas sobre eles variam de uma região para outra e de uma época para outra, pois vão se modificando à medida que são contadas de boca em boca. Essa diversidade está presente neste livro. Ele apresenta oito mitos dos mais importantes da tradição brasileira. Cada capítulo se abre com uma história bem-humorada, em que a autora detecta, em sua cidadezinha pacata e monótona, indícios da presença de um desses seres."
          },
          
          {
            "id": 7,
            "nome": "Combo: Um Saci no Meu Quintal / A Garupa e Outros Contos",
            "preco": "R$10,00",
            "situação": "Disponível | Usado",
            "imagem": "imagens/livros/dupla_literarios.jpg",
            "sinopse": "O jovem jornalista Ed Malone não tem ideia do que encontrará nesta viagem exploratória a qual acaba de se candidatar: ir até os confins da América do Sul, junto com um estudioso e um caçador para comprovar a veracidade da teoria do excêntrico professor Challenger – que afirma ter encontrado criaturas pré-históricas criaturas nessas terras longínquas. Será?"
          },

          {
            "id": 8,
            "nome": "A grande esperança",
            "preco": "R$10,00",
            "situação": "Disponível | Usado",
            "imagem": "imagens/livros/grande_esperanca.jpg",
            "sinopse": "Crise. Uma palavra que é repetida constantemente nos noticiários e nas conversas familiares. Há crise financeira, ambiental, moral, política, além de crises em áreas como segurança pública, saúde e educação. Mas a base de todas essas crises é a profunda crise espiritual que atinge a humanidade. Grandes crises só são vencidas com ajuda sobre-humana. A boa notícia é que há esperança diante das crises. Nesta edição de luxo do livro A Grande Esperança, ideal para presentear amigos, Jesus Cristo é apresentado como a única esperança de solução do conflito espiritual que inclui todas as demais crises humanas. Cristo voltará, colocando um ponto final no sofrimento e reescrevendo uma nova história de felicidade perfeita e sem fim."
          },

          {
            "id": 9,
            "nome": "Combo 7 livros Infantis",
            "preco": "R$5,00",
            "situação": "Disponível | Usado",
            "imagem": "imagens/livros/infatis.jpg",
            "sinopse": "Pinóquio, Bambi, Cinderela, Chapeuzinho Vermelho, A Bela Adormecida, Peter Pan e Branca de Neve."
          }
        ]
      }
  }
}

class Chamar extends Database{
  constructor(){
      super()
  }

  chamarLivrosDestaques(){
    var caixa = document.getElementById("destaquesHome")

    for (let index = 0; index < 3; index++) {
      const element = this.books.livros[index];
      
      var construtor = `
      <div class="col mt-3">
        <div class="card h-100 m-auto" style="width: 300px;">
          <img src="${element.imagem}" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">${element.nome}</h5>
            <p class="card-text">Valor: <strong>${element.preco}</strong></p>
            <p class="card-text">Estado: <strong>${element.situação}</strong></p>
          </div>
          <div class="card-footer">
            <p>
              <a class="btn" style="background-color: #260A07; color: white;" href="https://wa.me/5588981865558?text=Oi%2C+vim+pelo+site%2C+quero+comprar+o+livro+${element.nome}." target="_blank">
                Comprar
              </a>
              <buttom class="btn m-1" style="background-color: #260A07; color: white;" onclick="swal('${element.sinopse}')">
                Sinopse
              </buttom>
            </p>
          </div>
        </div>
    </div>`
      caixa.innerHTML += construtor
    }
  }

  chamarTodosLivros(){
    var caixa = document.getElementById("boxLivros")

    for (let index = 0; index < this.books.livros.length; index++) {
      const element = this.books.livros[index];
      
      var construtor = `
            <div class="card mb-3 mt-3" style="max-width: 500px;">
            <div class="d-flex justify-content-between">
              <div class="w-25">
                <img src="${element.imagem}" class="img-fluid m-auto" alt="...">
              </div>
              <div class="w-75">
                <div class="card-body">
                  <h5 class="card-title">${element.nome}</h5>
                  <p class="card-text">Valor: <strong>${element.preco}</strong></p>
                  <p class="card-text">Estado: <strong>${element.situação}</strong></p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex justify-content-center">
              <a class="btn m-1" style="background-color: #260A07; color: white;" href="https://wa.me/5588981865558?text=Oi%2C+vim+pelo+site%2C+quero+comprar+o+livro+${element.nome}." target="_blank">
                Comprar
              </a>
              <buttom class="btn m-1" style="background-color: #260A07; color: white;" onclick="swal('${element.sinopse}')">
                Sinopse
              </buttom>
            </div>
          </div>
        </div>`
      caixa.innerHTML += construtor
    }
  }

  pesquisar(){

    var txt = document.getElementById('pesquisar').value
    var texto = txt.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toUpperCase().trim().replace(/\s/g, '');

    var caixa = document.getElementById('boxLivros')

    for (let index = 0; index < this.books.livros.length; index++) {
      const element2 = this.books.livros[index];
      var nome = element2.nome.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toUpperCase().trim().replace(/\s/g, '');

      if(nome == texto){

        var construtor = `
          <div class="card mb-3 mt-3" style="max-width: 500px;">
            <div class="d-flex justify-content-between">
              <div class="w-25">
                <img src="${element2.imagem}" class="img-fluid m-auto" alt="...">
              </div>
              <div class="w-75">
                <div class="card-body">
                  <h5 class="card-title">${element2.nome}</h5>
                  <p class="card-text">Valor: <strong>${element2.preco}</strong></p>
                  <p class="card-text">Estado: <strong>${element2.situação}</strong></p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex justify-content-center">
              <a class="btn m-1" style="background-color: #260A07; color: white;" href="https://wa.me/5588981865558?text=Oi%2C+vim+pelo+site%2C+quero+comprar+o+livro+${element2.nome}." target="_blank">
                Comprar
              </a>
              <buttom class="btn m-1" style="background-color: #260A07; color: white;" onclick="swal('${element2.sinopse}')">
                Sinopse
              </buttom>
            </div>
          </div>
        </div>`
            caixa.innerHTML = construtor
        
      }
      
    }
  }
}

let chamar = new Chamar()
