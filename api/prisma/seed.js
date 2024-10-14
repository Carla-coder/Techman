const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.perfil.createMany({
    data: [
      { perfil: "Comum" },
      { perfil: "Administrador" },
      { perfil: "Tecnico" },
      { perfil: "Gerente" },
    ],
  });

  await prisma.equipamento.createMany({
    data: [
      {
        equipamento: "Torno Mecânico 500mm Modelo BV20L 220V - TTM520 - Tander",
        imagem: "Torno_Mecanico_500mm.png",
        descricao:
          "O Torno Mecânico Tander TTM520 é uma ferramenta utilizada por vários profissionais na confecção e acabamento de inúmeras peças metálicas, tais como: eixos, polias, pinos, roscas, peças cilíndricas internas e externas, cones, esferas, entre outros. Este torno vem com motor monofásico de 220V e 550W de potência, o que lhe confere maior torque e vida útil, menor consumo de energia e baixo índice de manutenção. Possui interruptor magnético com a função de travagem de emergência, rotação frente/reversa e a função de proteção ao torno e aos componentes elétricos.",
        ativo: true,
        data: new Date("2019-10-01T14:54:20.873Z"),
      },
      {
        equipamento:
          "Processador Intel Core i9-7920X Skylake, Cache 16.5MB, 2.9GHz (4.3GHz Max Turbo), LGA 2066 - BX80673I97920X",
        imagem: "Intel_Core_i9.png",
        descricao:
          "Com esse processador inovador e incrível você desfruta ao máximo o verdadeiro potencial do seu computador e desfruta da mais pura velocidade. Maximize o seu desempenho seja trabalhando, jogando, navegando ou assistindo o seu filme preferido, com esse processador você pode tudo!",
        ativo: true,
        data: new Date("2019-10-01T15:00:20.873Z"),
      },
      {
        equipamento:
          'Monitor, Dell, U2518D, UltraSharp, Preto e Suporte em Alumínio, 25""',
        imagem: "Monitor_Dell.png",
        descricao:
          "Dê vida ao seu trabalho com uma tela de 25 polegadas quase sem bordas que conta com detalhes em cores vívidas e consistentes graças à tecnologia HDR, resolução HD e ângulo de visão ultra-amplo. Aumente sua performance com os recursos Dell Display Manager, Dell Easy Arrange e trabalhe confortavelmente graças a um suporte totalmente ajustável e recurso ComfortView.",
        ativo: false,
        data: new Date("2018-10-01T10:00:20.000Z"),
      },
      {
        equipamento:
          "Mouse Gamer Razer Deathadder Essential óptico 5 Botões 4G 6.400 DPI",
        imagem: "Mouse_Razer.png",
        descricao:
          "Nada melhor do que um mouse gamer com tecnologia de ponta para qualificar seus comandos e aprimorar suas jogadas nos games. Com este Mouse Gamer Razer, sua atuação nas batalhas gamers será ainda mais bem-sucedida, com desempenho acima da média e desenvoltura arrasadora, que vai deixar seus oponentes impressionados. O mouse Razer Deathadder Essential tem sensor óptico de 6400 DPI de 4G, 5 botões, design moderno e ergonômico, especialmente projetado para jogadores destros, e uma empunhadura lateral emborrachada que garante mais firmeza ao manuseio do equipamento, melhorando as respostas obtidas pelos players. O mouse Razer ainda oferece ajuste de sensibilidade, pezinhos Ultraslick silenciosos, cabo ultra resistente de fibra trançada e Modo Always-On, que mantém o mouse ligado mesmo quando o equipamento estiver inativo. É um mouse gamer Razer para ninguém botar defeito, com todas as funções e especificações técnicas que você precisa para ter mais produtividade nos jogos. O Razer Deathadder Essential é realmente essencial e ainda tem o diferencial de estar habilitado para Razer Synapse 3 e de ser compatível com PC e Mac, com porta USB. Conheça o modelo e faça um investimento seguro!",
        ativo: true,
        data: new Date("2017-10-01T09:00:20.000Z"),
      },
      {
        equipamento: "All-in-One Media Keyboard",
        imagem: "Teclado_Microsoft.png",
        descricao:
          "O All-in-One Media Keyboard é o dispositivo ideal para sua sala ou home office. Com teclado em tamanho natural e trackpad multitoque integrado, é possível digitar, passar o dedo, arrastar, fazer zoom e clicar facilmente. O teclado com teclas de atalho de mídia personalizáveis permite que a Web e suas músicas, fotos e filmes favoritos estejam a seu alcance. O teclado também tem um design resistente, portanto, não é necessário se preocupar com a poeira e as migalhas que podem se acumular. O All-in-One Media Keyboard é sem fio, oferece conectividade USB de 2,4 GHz e possui uma bateria que dura até 24 meses.",
        ativo: true,
        data: new Date("2022-05-01T10:00:20.000Z"),
      },
    ],
  });

  await prisma.comentario.createMany({
    data: [
      {
        tipo: "Informação",
        comentario:
          "Deverá fazer o download do aplicativo da Razer para alterar a cor do mouse.",
        equipamentoId: 2,
        perfilId: 4,
        data: new Date("2020-09-07T18:00:00.000Z"),
      },
      {
        tipo: "Problema",
        comentario: "Problema de aquecimento no processador após 1 ano de uso.",
        equipamentoId: 2,
        perfilId: 2,
        data: new Date("2020-05-04T10:30:00.000Z"),
      },
      {
        tipo: "Problema",
        comentario:
          "Problema de aquecimento no processador após 3 anos de uso.",
        equipamentoId: 3,
        perfilId: 4,
        data: new Date("2021-03-04T15:30:00.000Z"),
      },
      {
        tipo: "Manutenção",
        comentario: "Realizada a manutenção preventiva",
        equipamentoId: 3,
        perfilId: 1,
        data: new Date("2021-06-05T09:30:00.000Z"),
      },
      {
        tipo: "Manutenção",
        comentario: "Realizada a manutenção corretiva",
        equipamentoId: 4,
        perfilId: 1,
        data: new Date("2021-07-10T08:00:00.000Z"),
      },
      {
        tipo: "Manutenção",
        comentario: "Realizada a manutenção corretiva",
        equipamentoId: 5,
        perfilId: 2,
        data: new Date("2021-07-13T09:00:00.000Z"),
      },
      {
        tipo: "Manutenção",
        comentario: "Realizada a manutenção corretiva",
        equipamentoId: 3,
        perfilId: 2,
        data: new Date("2021-08-10T10:00:00.000Z"),
      },
      {
        tipo: "Manutenção",
        comentario: "Realizada a manutenção corretiva",
        equipamentoId: 4,
        perfilId: 3,
        data: new Date("2021-09-18T17:00:00.000Z"),
      },
      {
        tipo: "Manutenção",
        comentario: "Realizada a manutenção corretiva",
        equipamentoId: 5,
        perfilId: 3,
        data: new Date("2021-10-11T11:00:00.000Z"),
      },
      {
        tipo: "Manutenção",
        comentario: "Realizada a manutenção corretiva",
        equipamentoId: 3,
        perfilId: 4,
        data: new Date("2021-11-21T12:00:00.000Z"),
      },
      {
        tipo: "Manutenção",
        comentario: "Realizada a manutenção corretiva",
        equipamentoId: 5,
        perfilId: 4,
        data: new Date("2021-12-22T13:00:00.000Z"),
      },
    ],
  });

  await prisma.usuario.createMany({
    data: [
      { senha: "111111", perfilId: 1 },
      { senha: "212121", perfilId: 2 },
      { senha: "414141", perfilId: 4 },
      { senha: "313131", perfilId: 3 },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
