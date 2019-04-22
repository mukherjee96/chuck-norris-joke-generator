document.getElementById('get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    e.target.innerText = 'Generating..';
    const jokes = document.getElementById('jokes');
    const number = document.getElementById('number').value;
    fetch(`http://api.icndb.com/jokes/random/${number}`).then(res => res.json()).then(data => {
        let result = '';
        data.value.forEach(joke => {
            result += `<li>${joke.joke}</li>`;
        });
        jokes.innerHTML = result;
        e.target.innerText = 'Get Jokes!';
    }).catch(err => jokes.innerHTML = '<li>Something went wrong. Try again!</li>');

    e.preventDefault();
}