document.getElementById('get-jokes').addEventListener('click', getJokes);
let timer = new Date();

function getJokes(e) {
    e.target.innerText = 'Generating..';

    const time = performance.now(),
        jokes = document.getElementById('jokes'),
        number = document.getElementById('number').value,
        stat = document.getElementById('stat');

    stat.value = '';
    document.getElementById('number').value = '';

    if(isNaN(parseInt(number))) {
        stat.innerText = 'Chuck Norris: Enter a number!';
        e.target.innerText = 'Get Jokes!';
    } else {
        fetch(`https://api.icndb.com/jokes/random/${number}`).then(res => res.json()).then(data => {
            const fetchedTime = performance.now();
            let result = '';
            data.value.forEach(joke => {
                result += `<li>${joke.joke}</li>`;
            });
            stat.innerText = `Generated ${number} jokes in ${Math.round(fetchedTime - time)} ms.`;
            jokes.innerHTML = result;
            e.target.innerText = 'Get Jokes!';
        }).catch(err => {
            stat.innerText = 'Chuck Norris: Something went wrong!';
            e.target.innerText = 'Get Jokes!';
        });
    }

    e.preventDefault();
}
