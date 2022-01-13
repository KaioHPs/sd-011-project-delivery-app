const entregue = 'Entregue';
const preparando = 'Preparando';
const transito = 'Em Trânsito';
const pendente = 'Pendente';

const preparingButton = (actualStatus) => {
  if (actualStatus === preparando) return true;
  if (actualStatus === entregue) return true;
  if (actualStatus === transito) return true;

  return false;
};

const dispatchButton = (actualStatus) => {
  if (actualStatus === pendente) return true;
  if (actualStatus === transito) return true;
  if (actualStatus === entregue) return true;

  return false;
};

module.exports = {
  preparingButton,
  dispatchButton,
};
