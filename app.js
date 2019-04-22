document.getElementById('get-jokes').addEventListener('click', getJokes);
let timer = new Date();

function getJokes(e) {
    e.target.innerText = 'Generating..';

    const time = performance.now(),
        jokes = document.getElementById('jokes'),
        number = document.getElementById('number').value,
        stat = document.getElementById('stat');

    stat.value = '';

    fetch(`https://api.icndb.com/jokes/random/${number}`).then(res => res.json()).then(data => {
        const fetchedTime = performance.now();
        let result = '';
        data.value.forEach(joke => {
            result += `<li>${joke.joke}</li>`;
        });
        console.log(time, fetchedTime);
        stat.innerText = `Generated ${number} jokes in ${Math.round(fetchedTime - time)} ms.`;
        jokes.innerHTML = result;
        e.target.innerText = 'Get Jokes!';
    }).catch(err => jokes.innerHTML = '<li>Something went wrong. Try again!</li>');

    e.preventDefault();
}
