const ExibirBusca = (json, total, setJsonData) => {
  setJsonData(json);
};

export default async (parametros) => {
  const url = "http://gateway.marvel.com/v1/public/characters/" + parametros.item.id + "/comics" +
    "?ts=1" +
    "&apikey=f59dbe01285f1d360542b5c47a9516e3" +
    "&hash=0ea6be79e04ac1b0400d65ffc11088f9" +
    "&limit=100" +
    "&orderBy=-onsaleDate";

  await fetch(url, {
    method: "GET",
  }).then((response) => {
    if (response.status === 200) {
      response.json().then((result) => {
        if (result.data.results.length === 0) {
          parametros.totalHq(0);
          parametros.totalGeralHq(0);
          ExibirBusca("{}", 0, parametros.jsonData);
        } else {
          parametros.totalHq(result.data.results.length);
          parametros.totalGeralHq(result.data.total);
          ExibirBusca(result.data.results, result.data.results.length, parametros.jsonData);
        }
      });
    } else {
      ExibirBusca("{}", 0, parametros.jsonData);
    }
    parametros.activity(false);
  }).catch(() => {
    ExibirBusca("{}", 0, parametros.jsonData);
    parametros.activity(false);
  });
};
