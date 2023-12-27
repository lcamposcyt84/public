function startAnimation(loader, check, cardId, textId) {
  // Muestra el círculo de carga
  loader.style.display = 'inline-block';
  // Oculta el check
  check.style.display = 'none';

  // Si es la carta 1 y es texto 1, 2 o 4, mostrar el check de inmediato
  if (cardId === 'card1' && (textId === 'text1' || textId === 'text2' || textId === 'text4')) {
    loader.style.display = 'none';
    check.style.display = 'inline-block';
  } else {
    // De lo contrario, devuelve una promesa que se resolverá después de 3 segundos
    return new Promise(resolve => {
      setTimeout(() => {
        // Oculta el círculo de carga
        loader.style.display = 'none';
        // Muestra el check
        check.style.display = 'inline-block';
        // Resuelve la promesa
        resolve();
      }, 3000);
    });
  }
}

async function animateTexts(texts, cardId) {
  for (let i = 0; i < texts.length; i++) {
    const text = texts[i];
    const loader = text.querySelector('.loader');
    const check = text.querySelector('.check');

    // Espera que la animación del texto actual termine antes de pasar al siguiente
    await startAnimation(loader, check, cardId, text.id);
  }
}

async function animateAllCards() {
  // Obtén todos los elementos de texto
  const texts1 = Array.from(document.querySelectorAll('#card1 .text'));
  // Puedes agregar más elementos de texto para otras cartas aquí

  // Inicia las animaciones de los textos de forma asincrónica
  await animateTexts(texts1, 'card1');
  // Puedes agregar más llamadas a la función animateTexts para otras cartas aquí

  // Una vez que todas las animaciones se completan, reinicia el ciclo
  animateAllCards();
}

// Inicia el ciclo de animaciones
animateAllCards();