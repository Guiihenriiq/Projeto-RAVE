document.addEventListener('DOMContentLoaded', function() {
  const colors = [
    '#FF6347', // Tomato
    '#FFD700', // Gold
    '#32CD32', // LimeGreen
    '#1E90FF', // DodgerBlue
    '#FF69B4', // HotPink
    '#FFA500', // Orange
    '#6A5ACD', // SlateBlue
    '#00CED1', // DarkTurquoise
    '#FF1493', // DeepPink
    '#00FF00', // Lime
    '#8A2BE2', // BlueViolet
    '#FF4500', // OrangeRed
    '#4682B4', // SteelBlue
    '#87CEEB', // SkyBlue
    '#7B68EE', // MediumSlateBlue
    '#20B2AA', // LightSeaGreen
    '#FF8C00', // DarkOrange
    '#00FA9A', // MediumSpringGreen
    '#B22222', // FireBrick
    '#ADFF2F', // GreenYellow
    '#BA55D3'  // MediumOrchid
  ];

  function changeBackgroundColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }

  // Mudar a cor de fundo a cada 2 segundos (2000ms)
  setInterval(changeBackgroundColor, 100);

  // Reproduzir áudio ao clicar no botão
  const playAudioButton = document.getElementById('playAudio');
  const audio = document.getElementById('myAudio');

  playAudioButton.addEventListener('click', function() {
    audio.play();
  });
});
