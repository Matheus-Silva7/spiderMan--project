//chamando as classes pai e btn
const DivCharactersList = document.querySelector('.characters-list')
const DivDescriptionSpider = document.querySelector('.description-spider')
const DivContentFight = document.querySelector('.content-fight')
const btnDraw = document.querySelector('.btn-draw')
const btnAgain = document.querySelector('.again')

//lista com as imagens dos personagens,nomes e descrição
const listCharacter = [
  {
    id: "miles-morales",
    name: "Miles Morales",
    imgProfile: "assets/img/miles-profile.png",
    imgPose: "assets/img/miles-pose.png",
    description: " Miles é o protagonista principal da história e o Homem-Aranha de seu universo. Ele é um adolescente afro-latino que adquire habilidades de aranha e se torna um super-herói após a morte do Homem-Aranha de sua dimensão."
  },
  {
    id: "spider-gwen",
    name: "Spider Gwen",
    imgProfile: "assets/img/gwen-profile.png",
    imgPose: "assets/img/gwen-pose.png",
    description: "Também conhecida como Gwen Stacy, ela é a Mulher-Aranha de uma dimensão alternativa onde Peter Parker se tornou o Lagarto. Gwen é uma talentosa musicista e lutadora, além de possuir habilidades de aranha."
  },
  {
    id: "spider-2099",
    name: "Spider 2099",
    imgProfile: "assets/img/miguel-profile.png",
    imgPose: "assets/img/miguel-pose.png",
    description: "Miguel é um cientista geneticista do ano 2099 que acidentalmente obtém poderes semelhantes aos do Homem-Aranha. Ele usa sua tecnologia avançada para combater o crime no futuro."
  },

  {
    id: "spot",
    name: "Spot",
    imgProfile: "assets/img/spot-profile.png",
    imgPose: "assets/img/spot-pose.png",
    description: " Spot é um vilão que possui a capacidade de criar portais dimensionais em sua própria pele. Ele é um inimigo formidável que aparece no universo do Spider-Verse."
  },
  {
    id: "india-spider",
    name: "Spider man India",
    imgProfile: "assets/img/india-profile.png",
    imgPose: "assets/img/india-pose.png",
    description: "Neste universo, Pavitr Prabhakar é o Homem-Aranha da Índia. Ele luta contra vilões em Mumbai usando poderes semelhantes aos do Homem-Aranha."
  },
  {
    id: "punk-spider",
    name: "Spider Punk",
    imgProfile: "assets/img/punk-profile.png",
    imgPose: "assets/img/punk-pose.png",
    description: " Este é um personagem que faz parte de um universo alternativo e se destaca por seu visual punk-rock. Ele é conhecido por ser rebelde e lutar contra a injustiça."
  },
  {
    id: "king-pin",
    name: "King Pin",
    imgProfile: "assets/img/kingpin-profile.png",
    imgPose: "assets/img/kingpin-pose.png",
    description: "Wilson Fisk, conhecido como o Rei do Crime, é um dos principais vilões do Spider-Verse. Ele é um poderoso chefe do crime em Nova York e é um adversário formidável para o Homem-Aranha."
  },
  {
    id: "prowler",
    name: "Prowler",
    imgProfile: "assets/img/prowler-profile.png",
    imgPose: "assets/img/prowler-pose.png",
    description: "Aaron Davis é uma figura complexa no mundo do crime de Nova York e também um personagem importante na vida de Miles Morales. Ele é o tio de Miles e  trabalha como um criminoso, envolvido em atividades ilegais."
  },
  {
    id: "peter-b-parker",
    name: "Peter B. Parker",
    imgProfile: "assets/img/peterB-profile.png",
    imgPose: "assets/img/peterB-pose.png",
    description: " Peter B. Parker é uma versão mais envelhecida e desgastada do Homem-Aranha. Ele se torna um mentor para Miles Morales no Spider-Verse, ajudando-o a aprimorar suas habilidades."
  },
  {
    id: "ham-spider",
    name: "Spider Ham",
    imgProfile: "assets/img/spiderham-profile.png",
    imgPose: "assets/img/spiderham-pose.png",
    description: "Spider-Ham é uma versão antropomórfica e cômica do Homem-Aranha, que é um porco chamado Peter Porker. Ele é um personagem divertido e muitas vezes alivia a tensão com seu humor."
  },
  {
    id: "noir-spider",
    name: "Spider Noir",
    imgProfile: "assets/img/noir-profile.png",
    imgPose: "assets/img/noir-pose.png",
    description: "Spider Noir, ou Peter Parker Noir, é uma versão do Homem-Aranha dos anos 1930. Ele luta contra o crime em uma atmosfera noir e usa trajes e métodos inspirados naquela época."
  },
  {
    id: "penny-parker",
    name: "Penny Parker",
    imgProfile: "assets/img/penny-profile.png",
    imgPose: "assets/img/penny-pose.png",
    description: "Penny é uma jovem piloto de robôs do Japão que se une a uma aranha robótica para se tornar a Mulher-Aranha em seu universo. Ela é uma personagem única com uma forte ligação com sua tecnologia."
  }
]

//for each percorrenddo a lista e chamando os elementos
listCharacter.forEach(Element => {
  //criando a div character adicionado class e id
  const character = document.createElement('div')
  character.classList.add("character")
  character.id = Element.id

  //adicionando o html da div e colocando na class pai dela
  character.innerHTML = `<img src="${Element.imgProfile}" alt="">`
  DivCharactersList.appendChild(character)

  //evento ao clicar aparecer nome, a imagem e descrição corrensponte aquele character
  character.addEventListener('click', () => {

    DivDescriptionSpider.innerHTML = `
    <img src="${Element.imgPose}" alt="">
    <div class="text-description">
    <h2>${Element.name}</h2>
    <hr>
    <p>${Element.description}</p>
    </div> `
  })
})

//evento do botao do sorteio
btnDraw.addEventListener('click', function gerar() {

  //gerando numeros randomicos do sorteio
  let drawNumber1 = Math.trunc(Math.random() * 12);
  let drawNumber2;

  //repetição para gerar o numero2 caso seja igual ao 1
  do {
    drawNumber2 = Math.trunc(Math.random() * 12);
  } while (drawNumber1 === drawNumber2);

  DivContentFight.classList.add("fights")
  DivContentFight.innerHTML = `
  <div class = "characters-fight">
    <div class ="character-1">
    <img src="${listCharacter[drawNumber1].imgPose}" alt="">
    <h4>${listCharacter[drawNumber1].name}</h4>
    <button id="btn-bet1"> Apostar </button>
    </div>
    <div class ="center-content">
    <img src="assets/img/versus.png" alt="">
    
    </div>
    <div class ="character-2">
    <img src="${listCharacter[drawNumber2].imgPose}" alt="">
    <h4>${listCharacter[drawNumber2].name}</h4>
    <button id="btn-bet2"> Apostar </button>
    </div>
  <div>
  `
  //gerando atributos randomicos
  const randomStrength1 = Math.trunc(Math.random() * 300) + 10
  const randomDefense1 = Math.trunc(Math.random() * 300) + 10
  const randomAgility1 = Math.trunc(Math.random() * 300) + 10

  const randomStrength2 = Math.trunc(Math.random() * 300) + 10
  const randomDefense2 = Math.trunc(Math.random() * 300) + 10
  const randomAgility2 = Math.trunc(Math.random() * 300) + 10

  const btnbet1 = document.getElementById('btn-bet1');
  const btnbet2 = document.getElementById('btn-bet2');
  let bet = ""
  let win = ""
  let result = ""

  btnbet1.addEventListener('click', () => {
    bet = "ch1"
    if (randomStrength1 > randomStrength2 && randomDefense1 > randomDefense2 && randomAgility1 < randomAgility2) {
      win = "ch1"
      console.log("Character 1 venceu")
    } else if (randomStrength1 < randomStrength2 && randomDefense1 > randomDefense2 && randomAgility1 > randomAgility2) {
      win = "ch1"
      console.log("Character 1 venceu")
    } else if (randomStrength1 > randomStrength2 && randomDefense1 < randomDefense2 && randomAgility1 > randomAgility2) {
      win = "ch1"
      console.log("Character 1 venceu")
    } else if (randomStrength1 === randomStrength2 && randomDefense1 === randomDefense2 && randomAgility1 === randomAgility2) {
      win = "em"
    }
    else {
      win = "ch2"
      console.log("Character 2 venceu")
    }
    console.log(bet, win)
    if (bet === win) {
      console.log("você ganhou")
      result = "Você ganhou!"
    } else {
      console.log("você perdeu")
      result = "Você perdeu!"
    }
    DivContentFight.innerHTML = `
    <div class = "characters-fight">
        <div class ="character-1">
        <img src="${listCharacter[drawNumber1].imgPose}" alt="">
        <h4>${listCharacter[drawNumber1].name}</h4>
        <p>Força: ${randomStrength1}</p>
        <p>Agilidade: ${randomAgility1}</p>
        <p>Defesa: ${randomDefense1}</p>
        </div>
    <div class ="center-content">
      <h2>${result}</h2>
      <img src="assets/img/versus.png" alt="">
    </div>
       <div class ="character-2">
        <img src="${listCharacter[drawNumber2].imgPose}" alt="">
        <h4>${listCharacter[drawNumber2].name}</h4>
        <p>Força: ${randomStrength2}</p>
        <p>Agilidade: ${randomAgility2}</p>
        <p>Defesa: ${randomDefense2}</p>
    </div>
  <div>
    `
  });

  btnbet2.addEventListener('click', () => {
    bet = "ch2"
    if (randomStrength1 > randomStrength2 && randomDefense1 > randomDefense2 && randomAgility1 < randomAgility2) {
      win = "ch1"
      console.log("Character 1 venceu")
    } else if (randomStrength1 < randomStrength2 && randomDefense1 > randomDefense2 && randomAgility1 > randomAgility2) {
      win = "ch1"
      console.log("Character 1 venceu")
    } else if (randomStrength1 > randomStrength2 && randomDefense1 < randomDefense2 && randomAgility1 > randomAgility2) {
      win = "ch1"
      console.log("Character 1 venceu")
    } else if (randomStrength1 === randomStrength2 && randomDefense1 === randomDefense2 && randomAgility1 === randomAgility2) {
      win = "em"
    }
    else {
      win = "ch2"
      console.log("Character 2 venceu")
    }
    console.log(bet, win)
    if (bet === win) {
      console.log("você ganhou")
      result = "Você ganhou!"
    } else {
      console.log("você perdeu")
      result = "Você perdeu!"
    }
    DivContentFight.innerHTML = `
    <div class = "characters-fight">
        <div class ="character-1">
        <img src="${listCharacter[drawNumber1].imgPose}" alt="">
        <h4>${listCharacter[drawNumber1].name}</h4>
        <p>Força: ${randomStrength1}</p>
        <p>Agilidade: ${randomAgility1}</p>
        <p>Defesa: ${randomDefense1}</p>
        </div>
    <div class ="center-content">
      <h2>${result}</h2>
      <img src="assets/img/versus.png" alt="">
    </div>
       <div class ="character-2">
        <img src="${listCharacter[drawNumber2].imgPose}" alt="">
        <h4>${listCharacter[drawNumber2].name}</h4>
        <p>Força: ${randomStrength2}</p>
        <p>Agilidade: ${randomAgility2}</p>
        <p>Defesa: ${randomDefense2}</p>
    </div>
  <div>
    ` 
  });
})
