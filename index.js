document.getElementById('form-calc').addEventListener('submit', function(event) {
  event.preventDefault();
  const weight = parseFloat(document.getElementById('weight').value);
  const condition = document.getElementById('condicao').value;

  if (isNaN(weight) || weight <= 0) {
    alert("Por favor, insira um peso válido.");
    return;
  }

  let liters;
  switch (condition) {
    case 'normal':
      liters = weight * 0.035;
      break;
    case 'quente':
      liters = weight * 0.045;
      break;
    case 'esporte':
      liters = weight * 0.065;
      break;
  }

  document.getElementById('resultado').textContent = `Você deve consumir aproximadamente ${liters.toFixed(2)} litros de água por dia.`;
});