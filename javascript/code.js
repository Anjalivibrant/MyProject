const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.navbar ul');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const btnEl = document.querySelector(".scrollable-image.btn");

btnEl.addEventListener("mouseover", (event) => {
  const x = event.pageX - btnEl.offsetLeft;
  const y = event.pageY - btnEl.offsetTop;

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});

function showAlert(){
  // alert('Eplore using a video Reference');
  let result = confirm("Explore using a video refernce");
  if(result== true){
    window.open("/testbatch/INDEX/explore.html");
  }
}