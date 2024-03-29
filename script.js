const button = document.querySelectorAll('img')[0];
let audio = new Audio();
let picked = [1,2,3,4,5,6,7,9,10,11,12,13,14]; //shut up
button.addEventListener('click', () => {
    audio.pause();
    let next;
    do {
        next = getRandomIntInclusive(1,14);
    } while (picked.includes(next));
    audio = new Audio(`${next}.m4a`);
    audio.play();
    picked.push(next);
    if (picked.length == 14) {
        picked = [];
    }
});

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}