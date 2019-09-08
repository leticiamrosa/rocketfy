export function loadLists() {
  return [
    {
      title: "Tarefas",
      creatable: true,
      cards: [
        {
          id: 1,
          content: "Estudar módulo 01 de NodeJS",
          labels: ["#7159c1"],
          user:
            "https://pbs.twimg.com/profile_images/1117701700360581126/4p020QBx_reasonably_small.jpg"
        },
        {
          id: 2,
          content:
            "Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy",
          labels: ["#7159c1"],
          user:
            "https://pbs.twimg.com/profile_images/1117701700360581126/4p020QBx_reasonably_small.jpg"
        },
        {
          id: 3,
          content: "Estudar módulo 03 de React Native",
          labels: ["#7159c1"],
          user:
            "https://pbs.twimg.com/profile_images/1117701700360581126/4p020QBx_reasonably_small.jpg"
        },
        {
          id: 4,
          content:
            'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
          labels: ["#54e1f7"],
          user:
            "https://pbs.twimg.com/profile_images/1117701700360581126/4p020QBx_reasonably_small.jpg"
        },
        {
          id: 5,
          content: "Gravar testes e deploy ReactJS",
          labels: ["#54e1f7"],
          user:
            "https://pbs.twimg.com/profile_images/1117701700360581126/4p020QBx_reasonably_small.jpg"
        }
      ]
    },
    {
      title: "Fazendo",
      creatable: false,
      cards: [
        {
          id: 6,
          content: "Recriando clone do Pipefy",
          labels: [],
          user:
            "https://pbs.twimg.com/profile_images/1117701700360581126/4p020QBx_reasonably_small.jpg"
        }
      ]
    },
    {
      title: "Pausado",
      creatable: false,
      cards: [
        {
          id: 7,
          content: "Gravar sobre Geolocalização e mapas com React Native",
          labels: ["#7159c1"],
          user:
            "https://pbs.twimg.com/profile_images/1117701700360581126/4p020QBx_reasonably_small.jpg"
        },
        {
          id: 8,
          content: "Gravar testes e deploy ReactJS",
          labels: ["#54e1f7"],
          user:
            "https://pbs.twimg.com/profile_images/1117701700360581126/4p020QBx_reasonably_small.jpg"
        },
        {
          id: 9,
          content: "Ajustes na biblioteca unform",
          labels: []
        }
      ]
    },
    {
      title: "Concluído",
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: "Gravar aula sobre deploy e CI com React Native",
          labels: []
        },
        {
          id: 12,
          content: "Gravar testes e deploy ReactJS",
          labels: ["#54e1f7"]
        },
        {
          id: 13,
          content:
            'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: ["#7159c1"]
        }
      ]
    }
  ];
}
