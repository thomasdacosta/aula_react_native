export const EMAIL = "michael.lawson@reqres.in";
export const SENHA = "cityslicka";
export const MENSAGEM_EMAIL = "Digite o seu e-mail.";
export const MENSAGEM_SENHA = "Digite a sua senha.";

const ShowModal = (description, setModalVisible, setDescription) => {
  setModalVisible(true);
  setDescription(description);
};

const ValidarCampos = (parametros) => {
  if (parametros.user.trim().length === 0) {
    ShowModal(MENSAGEM_EMAIL, parametros.modalVisible, parametros.description);
    return false;
  }

  if (parametros.password.trim().length === 0) {
    ShowModal(MENSAGEM_SENHA, parametros.modalVisible, parametros.description);
    return false;
  }

  return true;
}

export default async (parametros) => {
  if (!ValidarCampos(parametros)) {
    return;
  }

  parametros.activity(true);

  let usuario = {
    email: parametros.user,
    password: parametros.password
  };

  await fetch("https://reqres.in/api/login", {
    method: "POST", headers: {
      Accept: "application/json", "Content-Type": "application/json",
    }, body: JSON.stringify(usuario),
  }).then(response => {
    if (response.status === 200) {
      response.text().then(function() {
        parametros.navigation.navigate("Personagem");
      });
    } else {
      ShowModal(`Usuário ou senha inválidos => código: ${response.status}`, parametros.modalVisible, parametros.description);
    }
    parametros.activity(false);
  }).catch((e) => {
    ShowModal("Não foi possivel executar o login =>" + e, parametros.modalVisible, parametros.description);
    parametros.activity(false);
  });

}
