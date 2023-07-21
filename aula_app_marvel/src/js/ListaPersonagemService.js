export const PERSONAGEM_DEFAULT = "iron man";

const JSON_RETORNO_VAZIO = [
  {
    "id": 1,
    "name": "Nenhum personagem encontrado. \nVamos ficar com Cap nos nossos corações.",
    "description": "Eu também gosto dele :)",
    "modified": "2020-04-04T19:01:59-0400",
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087",
      "extension": "jpg",
    },
  },
];

const MarvelApiClient = async (parametros) => {
  const url = "http://gateway.marvel.com/v1/public/" +
    "characters?ts=1" +
    "&apikey=f59dbe01285f1d360542b5c47a9516e3" +
    "&hash=0ea6be79e04ac1b0400d65ffc11088f9" +
    "&nameStartsWith=" + parametros.personagem +
    "&orderBy=name" +
    "&limit=100";

  parametros.activity(true);
  await fetch(url, {
    method: "GET",
  }).then((response) => {
    if (response.status === 200) {
      response.json().then((result) => {
        if (result.data.results.length === 0) {
          parametros.json = JSON_RETORNO_VAZIO;
          parametros.qtdPersonagens = 0;
          parametros.qtdGeralPersonagens = 0;
        } else {
          parametros.json = result.data.results;
          parametros.qtdPersonagens = result.data.count;
          parametros.qtdGeralPersonagens = result.data.total;
        }

        ExibirBusca(parametros);
      });
    } else
      ExibirBusca(JSON_RETORNO_VAZIO, 0, parametros.jsonData, parametros.totalPersonagens);
  }).catch(() => ExibirBusca(JSON_RETORNO_VAZIO, 0, parametros.jsonData, parametros.totalPersonagens));
  parametros.activity(false);
};

const ExibirBusca = (parametros) => {
  parametros.jsonData(parametros.json);
  parametros.totalPersonagens(parametros.qtdPersonagens);
  parametros.totalGeralPersonagens(parametros.qtdGeralPersonagens);
};

export default (parametros) => {
  parametros.jsonData(null);
  parametros.totalPersonagens(0);
  parametros.totalGeralPersonagens(0);
  MarvelApiClient(parametros).then(() => {});
};
