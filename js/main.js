window.addEventListener('scroll', function () {
    let content = document.querySelector('#test')
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.1;

    if(contentPosition < screenPosition){
        content.classList.add('active')
    }else{
        content.classList.remove('active')
    }
})

let test = 'fifa'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
		'X-RapidAPI-Key': '6150e4d77bmsh04abafa6114ef03p1ce7e0jsncc8a1386169e'
	}
};

fetch('https://rawg-video-games-database.p.rapidapi.com/games?key=f62da0af1d41486894d3adad81cbd732&platforms=15&page_size=25', options)
	.then(response => response.json())
	.then(response => test = response)
	.catch(err => console.error(err));