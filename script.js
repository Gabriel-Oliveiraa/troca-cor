const colors = ['#FF5733', '#33FFA8', '#3360FF', '#FF33D1', '#FFD733'];
const colorButton = document.getElementById('BotãoCor');

colorButton.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    document.body.style.backgroundColor = randomColor;
}