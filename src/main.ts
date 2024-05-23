
// Animation Github
const linkGithub = document.querySelector<HTMLImageElement>('#linkGithub')
const logoGithub = document.querySelector<HTMLImageElement>('#logoGithub')
const textGithub = document.querySelector<HTMLImageElement>('#textGithub')
function showText() {
  textGithub?.animate([
    { transform: "translateX(-100%)" },
  ],{
    duration: 1000,
    fill: "both"
  });
}
function hiddenText() {
  textGithub?.animate([
    { transform: "translateX(0%)" },
  ],{
    duration: 1000,
    fill: "both"
  });
}
linkGithub?.addEventListener('mouseenter', showText)
linkGithub?.addEventListener('mouseleave', hiddenText)

//define inputs
const inputBottom = document.querySelector<HTMLInputElement>('#inputBottom')!

// define number 
const cero = document.querySelector<HTMLButtonElement>('#C')


cero?.addEventListener('click', ()=> {
  // const value: string = '0'
  return inputBottom.value = "0"
})