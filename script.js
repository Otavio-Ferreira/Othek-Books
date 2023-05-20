class Database{
  constructor(){
      this.books = {
        "livros": [
          {
            "id": 1,
            "nome": "Box George Orwell com 3 Livros",
            "preco": "R$65,00",
            "situação": "Disponível | Novo",
            "imagem": "imagens/livros/box-george.jpg",
            "sinopse": "Box com três livros de George Orwell: A Revolução dos Bichos, 1984 e Ensaios."
          },

          {
            "id": 2,
            "nome": "Box Sherlock Holmes - Série com 6 livros",
            "preco": "R$65,00",
            "situação": "Disponível | Novo",
            "imagem": "imagens/livros/box-serlock.jpg",
            "sinopse": "Box com seis livros de Sherlock Holmes: O cão dos Baskerdilles, O roubo da coroa de Berilos e outras aventuras, Um estudo em vermelho, A liga dos cabeças vermelhas e outras aventuras, Um escândalo na Boêmia e outras aventuras, O signo dos quatro."
          },

          {
            "id": 3,
            "nome": "Box Arsène Lupin com 3 livros",
            "preco": "R$65,00",
            "situação": "Disponível | Novo",
            "imagem": "imagens/livros/box-lupin.jpg",
            "sinopse": "Box com três livros de Arsène Lupin: Confissões, O ladrao de casaca, Contra Herlock Sholmes."
          },

          {
            "id": 4,
            "nome": "Contos de Fadas - Irmãos Grimm",
            "preco": "R$ 30,00",
            "situação": "Disponível | Novo",
            "imagem": "imagens/livros/irmaos-grimm.jpg",
            "sinopse": "Reconhecidos mundialmente pela qualidade dos contos que produziram desde o começo do século XIX, os irmãos Grimm diziam estar só escrevendo as histórias que escutavam de camponeses e amigos. Concomitantemente aos registros do cotidiano, começaram a pesquisar documentos e recolher histórias da Alemanha para a preservação da memória e das tradições populares. Neste livro encontram-se contos fantásticos que mantêm viva a memória da criação folclórica da população alemã."
          },

          {
            "id": 5,
            "nome": "O Diário de Anne Frank",
            "preco": "R$ 25,00",
            "situação": "Disponível | Novo",
            "imagem": "imagens/livros/diario-anne.jpg",
            "sinopse": "O diário de Anne Frank, o depoimento da pequena Anne, morta pelos nazistas após passar anos escondida no sótão de uma casa em Amsterdã, ainda hoje emociona leitores no mundo inteiro. Suas anotações narram os sentimentos, os medos e as pequenas alegrias de uma menina judia que, como sua família, lutou em vão para sobreviver ao Holocausto."
          },

          {
            "id": 6,
            "nome": "O Alienista",
            "preco": "R$ 25,00",
            "situação": "Disponível | Novo",
            "imagem": "imagens/livros/alienista.jpg",
            "sinopse": "Clássico da literatura brasileira, este texto de Machado de Assis continua sendo, cento e trinta anos depois de sua publicação original, uma das mais devastadoras observações sobre a insanidade a que pode chegar a ciência. Tão palpitante quanto de leitura prazerosa, O alienista é uma dessas joias da ficção da literatura mundial. Médico, Simão Bacamarte passa a se interessar pela psiquiatria, iniciando um estudo sobre a loucura em Itaguaí, onde funda a Casa Verde - um típico hospício oitocentista -, arregimentando cobaias humanas para seus experimentos. O que se segue é uma história surpreendente e atual em seu debate sobre desvios e normalidade, loucura e razão. Ensaio sobre a loucura e a lucidez, sátira política e comédia de costumes, esta edição de Machado de Assis conta com uma esclarecedora nota introdutória do crítico britânico John Gledson, um dos grandes intérpretes do autor brasileiro."
          },

          {
            "id": 7,
            "nome": "A Arte da Guerra",
            "preco": "R$ 25,00",
            "situação": "Disponível | Novo",
            "imagem": "imagens/livros/arte-guerra.jpg",
            "sinopse": "O que faz de um tratado militar, escrito por volta de 500 a.C., manter-se atual a ponto de ser publicado praticamente no mundo todo até os dias de hoje? Você verá que, em A arte da guerra, as estratégias transmitidas pelo general chinês Sun Tzu carregam um profundo conhecimento da natureza humana. Elas transcendem os limites dos campos de batalha e alcançam o contexto das pequenas ou grandes lutas cotidianas, sejam em ambientes competitivos – como os do mundo corporativo – sejam nos desafios internos, em que temos de encarar nossas próprias dificuldades. Se você não conhece a si mesmo nem o inimigo, sucumbirá a todas as batalhas. Sun Tzu"
          },

          {
            "id": 8,
            "nome": "A Revolução dos Bichos",
            "preco": "R$ 25,00",
            "situação": "Disponível | Novo",
            "imagem": "imagens/livros/revolucao.jpg",
            "sinopse": "A clássica obra do autor inglês George Orwell narra a jornada de um grupo de animais que decide se rebelar contra o dono da fazendo, o Sr. Jones, e com a exploração dos humanos. É uma alegoria e uma sátira sobre o totalitarismo, mais especificamente com os rumos que tomados pela Revolução Russa, de 1917."
          },

          {
            "id": 9,
            "nome": "1984",
            "preco": "R$ 25,00",
            "situação": "Disponível | Novo",
            "imagem": "imagens/livros/1984.jpg",
            "sinopse": "Após uma guerra global, semelhante à segunda grande guerra, porém com mais bombas atômicas, o mundo foi dividido em três continentes: Lestásia, Eurásia e Oceania, onde fica a cidade de Londres. Esse último é comandado pelo líder Big Brother, a figura máxima de poder e controle, “o olho que tudo vê”."
          },

          {
            "id": 10,
            "nome": "Ensaios",
            "preco": "R$ 25,00",
            "situação": "Disponível | Novo",
            "imagem": "imagens/livros/ensaios.jpg",
            "sinopse": "George Orwell (1903-1950) é considerado um dos maiores escritores da era contemporânea. Nascido Eric Arthur Blair, logo em sua primeira obra, Na Pior em Paris e Londres, ele adotou o pseudônimo pelo qual é conhecido, tal como aparece na capa de seus livros. Por ser filho de um oficial britânico, mudou-se com a família para Sussex, Inglaterra. Frequentou uma das melhores escolas do país e a partir daí começou a mostrar seu brilhantismo e talento para a escrita. Ao concluir os estudos, no entanto, o autor não ingressou na universidade e serviu por cinco anos na Polícia Imperial Britânica da Índia, fato que contribuiu para a produção de alguns de seus ensaios, em decorrência de sua vivência em meio aos conflitos armados e da formação de uma visão peculiar em relação ao Império Britânico. Nos Ensaios, é possível ter contato com as ideias e com o pensamento do autor. Seus diversos textos publicados apresentam um olhar crítico sobre temas diversos, da literatura à política. Orwell é muito conhecido também por dois romances célebres, 1984 e Revolução dos Bichos."
          },

          {
            "id": 11,
            "nome": "Frankenstein",
            "preco": "R$ 25,00",
            "situação": "Disponível | Novo",
            "imagem": "imagens/livros/frankstein.jpg",
            "sinopse": "É a história de um ser humano criado em laboratório pelas mãos do homem: o Dr. Victor Frankenstein. A criatura não tem nome; mas adquire vontade própria e surpreendente o mundo com suas atitudes e sentimentos. Inacreditável que este enredo fantástico que inspirou tantos desdobramentos para outras histórias e dezenas de filmes saiu da cabeça de uma garota de dezenove anos; em 1816."
          },

          {
            "id": 12,
            "nome": "Contos da seleção - O príncipe e o guarda",
            "preco": "R$ 25,00",
            "situação": "Disponível | Semi-Novo",
            "imagem": "imagens/livros/selecao.jpg",
            "sinopse": "Os dois contos que se passam no universo criado por Kiera Cass, autora da trilogia A Seleção, agora estão disponíveis em edição impressa. Em O príncipe e O guarda, o leitor poderá acompanhar de perto os pensamentos e emoções dos dois homens que lutam pelo amor de America Singer: o príncipe Maxon e Aspen Leger, ex-namorado de America, que acaba trabalhando no palácio durante a Seleção. Esta antologia inclui, ainda, um final estendido do conto O príncipe; bônus exclusivos, como uma entrevista com a autora e dados inéditos sobre os personagens; além dos três primeiros capítulos de A escolha, o aguardado desfecho da trilogia."
          },

          {
            "id": 13,
            "nome": "A volta ao mundo em 80 dias",
            "preco": "R$ 25,00",
            "situação": "Disponível | Novo",
            "imagem": "imagens/livros/volta-ao-mundo.jpg",
            "sinopse": "Londres, 1872. Ao sentir-se desafiado por seus companheiros de clube, o gentleman inglês PhileasFogg aposta que é capaz de dar a volta ao mundo em apenas 80 dias, arriscando todo o seu dinheiro. Homem misterioso, de poucas palavras e rotina inabalável, Fogg inicia a viagem no mesmo dia, levando consigo apenas seu empregado recém-contratado, o francês Jean Passepartout, e uma bolsa. A volta ao mundo em 80 dias é uma incrível aventura pelos mais diversos locais, culturas e situações. De Londres a Yokohama e de lá para Nova York, passando por Bombaim, Hong Kong, São Francisco e outras cidades, em barcos, trens, elefante e trenó a vela, Verne leva nossos heróis – aos quais se juntarão o inspetor Fix e a deslumbrante Ms. Alda – a enfrentar tempestades marítimas, fanáticos religiosos, sabotagens e ataques de índios e de lobos famintos."
          },

          {
            "id": 14,
            "nome": "O Mundo Perdido",
            "preco": "R$20,00",
            "situação": "Disponível | Novo",
            "imagem": "imagens/livros/mundo_perdido.jpg",
            "sinopse": "O jovem jornalista Ed Malone não tem ideia do que encontrará nesta viagem exploratória a qual acaba de se candidatar: ir até os confins da América do Sul, junto com um estudioso e um caçador para comprovar a veracidade da teoria do excêntrico professor Challenger – que afirma ter encontrado criaturas pré-históricas criaturas nessas terras longínquas. Será?"
          },
      
          {
            "id": 15,
            "nome": "Adultério",
            "preco": "R$20,00",
            "situação": "Disponível | Semi-Novo",
            "imagem": "imagens/livros/adulterio.jpg",
            "sinopse": "Uma mulher de cerca de 30 anos começa a questionar a rotina e a previsibilidade de seus dias. Aos olhos de todos, ela tem uma vida perfeita: um casamento sólido e estável, um marido amoroso, filhos doces e bem-comportados, um emprego como jornalista do qual não pode se queixar."
          },

          {
            "id": 16,
            "nome": "Amor, História e Luta",
            "preco": "R$15,00",
            "situação": "Disponível | Novo",
            "imagem": "imagens/livros/cordel.jpg",
            "sinopse": "A Antologia de Folhetos de Cordel -- Amor história e luta coloca nas mãos dos leitores alguns dos mais importantes e conhecidos folhetos nordestinos oferecendo um panorama das formas e da trajetória histórica desta literatura popular. A introdução ao volume preparada por Márcia Abreu reconstitui com bom humor e delicadeza o desenvolvimento da produção de folhetos desde o final do século XIX. De forma clara e acessível aborda temas centrais para a compreensão desta literatura: sua relação com a oralidade os modos de composição de edição e de venda as maneiras de ler as práticas relativas aos direitos de autor as regras poéticas pelas quais se avalia a beleza de um folheto. Trata-se de uma edição primorosa em que os folhetos reproduzidos foram cuidadosamente transcritos e para a qual foram preparadas centenas de notas que trazem informações tanto sobre vocabulário quanto sobre referências históricas e culturais auxiliando a leitura e a compreensão dos poemas."
          },

          {
            "id": 17,
            "nome": "Comporte-se como uma Dama, Pense como um Homen",
            "preco": "R$15,00",
            "situação": "Disponível | Semi-Novo",
            "imagem": "imagens/livros/como_se_tornar_uma_dama.jpg",
            "sinopse": "Esqueça tudo o que já foi dito sobre os homens. Apague os mitos, as teorias, tudo o que sua mãe ensinou, as amigas disseram, aquilo que leu em revistas ou viu na televi¬são. Faça o que milhares de mulheres ao redor do mundo já fizeram: pegue os princípios, as regras e as dicas deste manual e use-os para se antecipar às manobras masculinas, para armar sua defesa e seu ataque. Por vezes engraçado, por vezes categórico, mas sempre verdadeiro, Comporte-se como uma dama, pense como um homem é o livro que toda mulher precisa ler se quiser finalmente montar o quebra-cabeças mais difícil de todos: a mente masculina."
          },

          {
            "id": 18,
            "nome": "A Garupa e Outros Contos",
            "preco": "R$7,00",
            "situação": "Disponível | Usado",
            "imagem": "imagens/livros/a_garupa.jpg",
            "sinopse": "A garupa e outros contos é uma antologia, uma reunião de contos. Uma antologia nunca é organizada ao acaso, sempre existe um critério para selecionar determinados textos. Neste livro, foram incluídos cinco contos de autores brasileiros importantes. Bruzundunga da Silva, de Sylvia Orthof, é um conto humorístico, de uma autora de grande importância para a literatura infanto-juvenil atual. Palavras aladas, de Marina Colasanti, não se passa no Brasil nem em outro lugar determinado. Não é um conto que faz rir. É uma crítica social, que faz refletir muito. Fábula eleitoral para crianças, de Paulo Mendes Campos, tem mesmo algumas características de fábula: personagens do reino animal, vegetal e mineral confabulam como se fossem humanos. Conto de escola é de Machado de Assis, o autor mais importante da literatura brasileira. É uma história de corrupção e denúncia, dentro do ambiente rígido de uma sala de aula do século XIX, no Rio de Janeiro. A garupa, escrito por Afonso Arinos no início do século XX, retrata o mundo rural mineiro. Este foi um dos primeiros autores brasileiros a trazer para a literatura a linguagem do sertão. Na leitura destes contos, portanto, você vai viver uma grande variedade de emoções."
          },
          
          {
            "id": 19,
            "nome": "Um Saci no Meu Quintal",
            "preco": "R$7,00",
            "situação": "Disponível | Usado",
            "imagem": "imagens/livros/um_saci_no_meu_quintal.jpg",
            "sinopse": "A mitologia brasileira, como todas as outras, compõe-se de elementos de várias culturas. Figuras como saci, lobisomem, mula-sem-cabeça e outras são mitos em que se misturam elementos sobretudo das culturas indígena, africana e portuguesa. Sua aparência e as lendas sobre eles variam de uma região para outra e de uma época para outra, pois vão se modificando à medida que são contadas de boca em boca. Essa diversidade está presente neste livro. Ele apresenta oito mitos dos mais importantes da tradição brasileira. Cada capítulo se abre com uma história bem-humorada, em que a autora detecta, em sua cidadezinha pacata e monótona, indícios da presença de um desses seres."
          },
          
          {
            "id": 20,
            "nome": "Combo: Um Saci no Meu Quintal / A Garupa e Outros Contos",
            "preco": "R$10,00",
            "situação": "Disponível | Usado",
            "imagem": "imagens/livros/dupla_literarios.jpg",
            "sinopse": "O jovem jornalista Ed Malone não tem ideia do que encontrará nesta viagem exploratória a qual acaba de se candidatar: ir até os confins da América do Sul, junto com um estudioso e um caçador para comprovar a veracidade da teoria do excêntrico professor Challenger – que afirma ter encontrado criaturas pré-históricas criaturas nessas terras longínquas. Será?"
          },

          {
            "id": 21,
            "nome": "A grande esperança",
            "preco": "R$10,00",
            "situação": "Disponível | Usado",
            "imagem": "imagens/livros/grande_esperanca.jpg",
            "sinopse": "Crise. Uma palavra que é repetida constantemente nos noticiários e nas conversas familiares. Há crise financeira, ambiental, moral, política, além de crises em áreas como segurança pública, saúde e educação. Mas a base de todas essas crises é a profunda crise espiritual que atinge a humanidade. Grandes crises só são vencidas com ajuda sobre-humana. A boa notícia é que há esperança diante das crises. Nesta edição de luxo do livro A Grande Esperança, ideal para presentear amigos, Jesus Cristo é apresentado como a única esperança de solução do conflito espiritual que inclui todas as demais crises humanas. Cristo voltará, colocando um ponto final no sofrimento e reescrevendo uma nova história de felicidade perfeita e sem fim."
          },

          {
            "id": 22,
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
