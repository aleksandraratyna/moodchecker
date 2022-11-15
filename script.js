const btnGoodMood = document.querySelector('.btn-good-mood');
const btnBadMood = document.querySelector('.btn-bad-mood');

let goodMoodInfo = Number(localStorage.getItem('goodMood'));
let badMoodInfo = Number(localStorage.getItem('badMood'));

document.querySelector('.counter-good-mood').innerText = goodMoodInfo.toString();
document.querySelector('.counter-bad-mood').innerText = badMoodInfo.toString();

if (goodMoodInfo === null) {
    localStorage.setItem('goodMood', 0);
}

if (badMoodInfo === null) {
    localStorage.setItem('badMood', 0);
}

btnGoodMood.addEventListener('click', () => {
    localStorage.setItem('goodMood', JSON.stringify(++goodMoodInfo));
    document.querySelector('.counter-good-mood').innerText = goodMoodInfo;
});

btnBadMood.addEventListener('click', () => {
    localStorage.setItem('badMood', JSON.stringify(++badMoodInfo))
    document.querySelector('.counter-bad-mood').innerText = badMoodInfo;
});