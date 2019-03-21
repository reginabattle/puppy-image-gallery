
let folder = 'assets/';
let gallery = document.querySelector('.image-gallery');

const getDogs = () => {
	const ajax = new XMLHttpRequest();

	ajax.onload = () => {
	  if(ajax.status === 200){
			let dogs = JSON.parse(ajax.responseText);
			dogs = dogs.dogs;
			//console.log('List of dogs:', dogs);

			for(let i = 0; i < dogs.length; i += 1) {
				gallery.innerHTML += `<a href="${dogs[i].source}" aria-label="View larger image">
					<figure class="gallery-image" style="background-image:url(${folder + dogs[i].image.replace('assets', '')})"></figure>
				</a>`;
			}

		} else {
			gallery += '<p>Sorry there was a problem.</p>';
		}
	};

	ajax.open('GET', folder + 'data/dogs.json');
	ajax.send();
}
getDogs();

