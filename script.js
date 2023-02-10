const body = document.getElementById('body')
const sttag = document.getElementById('sttag');
const csstextarea = document.getElementById('csstextarea');
const sbox = document.getElementById('sbox');
const settings = document.getElementById('settings');
const searchengine = document.getElementById('searchengine');
const searchbar = document.getElementById('searchbar');
const CSScode = sttag.innerText;
const newsbox = document.getElementById('newsbox');
const reset = document.getElementById('reset');
const shortcuts = document.getElementById('shortcuts');
const shortbox = document.getElementById('shortbox');
const shorts = document.getElementById('shorts');
const addURL = document.getElementById('addURL');
const urlinput = document.getElementById('urlinput');
const newSearch = document.getElementById('newSearch');
const darkButton = document.getElementById('darkButton');
glogo = './glogo.png';
blogo = './blogo.svg';
ulogo = './search.svg'
a = './noimage.png'
csstextarea.innerText = `${CSScode}`;

function myfunc() {
	if (localStorage.getItem('csscode')) {
		sttag.innerHTML = localStorage.getItem('csscode');
		csstextarea.innerText = localStorage.getItem('csscode')
	} else {
		localStorage.setItem('csscode', `${CSScode}`);
		csstextarea.innerText = `${CSScode}`;
	}
	csstextarea.innerText = localStorage.getItem('csscode');
}

myfunc()

csstextarea.addEventListener('change', () => {
	localStorage.setItem('csscode', csstextarea.value);
	sttag.innerHTML = localStorage.getItem('csscode');
})

settings.addEventListener('click', () => {
	if (sbox.className == 'hidden') {
		sbox.classList.remove('hidden')
	} else {
		sbox.classList.add('hidden')
	}

})


searchbar.addEventListener('click', () => {
	if (sbox.className == 'hidden') {
		// Breaks
	} else {
		sbox.classList.add('hidden')
	}

})










// News Request function.
async function getTechNews() {
	const response = await fetch('https://NewTabAPI.sharonsandeep.repl.co/');
	const resjson = await response.json()
	function openPage(url) {
		window.location = url
	}

			// showing news
	let str = ""
	for(let news of resjson.articles) {
		news.description = news.description.slice(0, 100) + "..."
		if (news.urlToImage == null) {
			str = str + `<div class="col">
				<div class="card text-bg-dark">
		      <img src=${a} style="width: 50%;" class="card-img-top" alt="image">
		      <div class="card-body">
		        <h5 class="card-title">${news.title}</h5>
		        <p class="card-text">${news.description}</p>
						<button type="button" class="btn btn-primary"><a href=${news.url} style="color: white; text-decoration: none" target="_blank">Read More</a></button>
		      </div>
		    </div>
		  </div>
		</div>`;
			newsbox.innerHTML = str;
		} else if(news.urlToImage!=null) {
			str = str + `<div class="col">
			    <div class="card text-bg-dark">
			      <img src=${news.urlToImage} class="card-img-top" alt="image">
			      <div class="card-body">
			        <h5 class="card-title">${news.title}</h5>
			        <p class="card-text">${news.description}</p>
							<button type="button" class="btn btn-primary"><a href=${news.url} style="color: white; text-decoration: none" target="_blank">Read More</a></button>
			      </div>
			    </div>
			  </div>`;
			newsbox.innerHTML = str;
		} else if(news.description == null && news.urlToImage == null) {
			str = str + `<div class="col">
			    <div class="card text-bg-dark">
			      <img src=${a} class="card-img-top" alt="image">
			      <div class="card-body">
			        <h5 class="card-title">${news.title}</h5>
			        <p class="card-text">No Iformation</p>
							<button type="button" class="btn btn-primary"><a href=${news.url} style="color: white; text-decoration: none" target="_blank">Read More</a></button>
			      </div>
			    </div>
			  </div>`;
			newsbox.innerHTML = str;
		} else if(news.description == null) {
			str = str + `<div class="col">
			    <div class="card text-bg-dark">
			      <img src=${news.urlToImage} class="card-img-top" alt="image">
			      <div class="card-body">
			        <h5 class="card-title">${news.title}</h5>
			        <p class="card-text">No Iformation</p>
							<button type="button" class="btn btn-primary"><a href=${news.url} style="color: white; text-decoration: none" target="_blank">Read More</a></button>
			      </div>
			    </div>
			  </div>`;
			newsbox.innerHTML = str;
	}
	// showing news.
}
}

getTechNews();



// Search Functionality.
google = 'https://www.google.com/search?q=';
brave = 'https://search.brave.com/search?q='
surl = '';
engine = brave;

searchengine.addEventListener('click', () => {
	if (engine == brave) {
		engine = google;
		searchengine.src = glogo;
		searchbar.placeholder = 'Google Search';
	} else if (engine == google) {
		engine = surl;
		searchengine.src = ulogo;
		searchbar.placeholder = 'Paste The URL';
	} else if (engine == surl) {
		engine = brave;
		searchengine.src = blogo;
		searchbar.placeholder = 'Brave Search';
	}
})

searchbar.addEventListener('keypress', (e) => {
	if (e.keyCode == 13) {
		query = searchbar.value
		window.location = engine + query
	}

})

// Reset Customized.
reset.addEventListener('click', () => {
	localStorage.removeItem('csscode');
	csstextarea.value = ""
	window.location.reload()
})


// Shortcut functionality.
shortcuts.addEventListener('click', () => {
	if (shortbox.style.display == 'none') {
		shortbox.style.display = ''
	} else {
		shortbox.style.display = 'none'
	}
})

// Delete A ShortCut.
function deleShortcut(id) {
	urls = []
	urls = localStorage.getItem('urls').split(',')
	if(urls.indexOf(id) == 0) {
		urls.splice(urls.indexOf(id), 1);
		localStorage.setItem('urls', urls);
		showShortCuts();
		window.location.reload()
	} else {
		urls.splice(urls.indexOf(id), 1);
		localStorage.setItem('urls', urls);
		showShortCuts();
	}
}

function showShortCuts() {
	if (localStorage.getItem('urls')) {
		urls = localStorage.getItem('urls').split(',');
		console.log(urls)
		shorts.innerHTML = urls.map((url) => {
			return `<div><a href=${url} >${url}</a><img id=${url} onClick="deleShortcut(this.id)" src="./delete.svg" /><div>`;			
		})
	} else { console.log('not id founded') }
}

addURL.addEventListener('click', () => {
	if (urlinput.value) {
		if (localStorage.getItem('urls')) {
			urls = localStorage.getItem('urls').split(',');
			urls.push(urlinput.value);
			localStorage.setItem('urls', `${urls}`);
			urlinput.value = "";
			showShortCuts();
		} else {
			let urls = []
			urls.push(urlinput.value);
			localStorage.setItem('urls', urls);
			urlinput.value = "";
			showShortCuts();
		}
	}

})

showShortCuts()





// Search News Functionality.
newSearch.addEventListener('keypress', async (e)=>{
	if(e.keyCode == 13) {
		const r = await fetch(`https://NewTabAPI.sharonsandeep.repl.co/${newSearch.value}`);
		const resjson = await r.json();

				// showing news
		let str = ""
		for(let news of resjson.articles) {
			news.description = news.description.slice(0, 100) + "..."
			if (news.urlToImage == null) {
					str = str + `<div class="col">
						<div class="card text-bg-dark">
				      <img src=${a} style="width: 50%;" class="card-img-top" alt="image">
				      <div class="card-body">
				        <h5 class="card-title">${news.title}</h5>
				        <p class="card-text">${news.description}</p>
								<button type="button" class="btn btn-primary"><a href=${news.url} style="color: white; text-decoration: none" target="_blank">Read More</a></button>
				      </div>
				    </div>
				  </div>
				</div>`;
				newsbox.innerHTML = str;
			} else if(news.urlToImage!=null) {
				str = str + `<div class="col">
				    <div class="card text-bg-dark">
				      <img src=${news.urlToImage} class="card-img-top" alt="image">
				      <div class="card-body">
				        <h5 class="card-title">${news.title}</h5>
				        <p class="card-text">${news.description}</p>
								<button type="button" class="btn btn-primary"><a href=${news.url} style="color: white; text-decoration: none" target="_blank">Read More</a></button>
				      </div>
				    </div>
				  </div>`;
				newsbox.innerHTML = str;
			} else if(news.description == null && news.urlToImage == null) {
				str = str + `<div class="col">
				    <div class="card text-bg-dark">
				      <img src=${a} class="card-img-top" alt="image">
				      <div class="card-body">
				        <h5 class="card-title">${news.title}</h5>
				        <p class="card-text">No Iformation</p>
								<button type="button" class="btn btn-primary"><a href=${news.url} style="color: white; text-decoration: none" target="_blank">Read More</a></button>
				      </div>
				    </div>
				  </div>`;
				newsbox.innerHTML = str;
			} else if(news.description == null) {
				str = str + `<div class="col">
				    <div class="card text-bg-dark">
				      <img src=${news.urlToImage} class="card-img-top" alt="image">
				      <div class="card-body">
				        <h5 class="card-title">${news.title}</h5>
				        <p class="card-text">No Iformation</p>
								<button type="button" class="btn btn-primary"><a href=${news.url} style="color: white; text-decoration: none" target="_blank">Read More</a></button>
				      </div>
				    </div>
				  </div>`;
			newsbox.innerHTML = str;
		}
		// showing news.
	}
	}
})






// Dark mode.
// darkButton.addEventListener('click', ()=>{
// 	if (body.className == 'bg-dark') {
// 		body.classList.add('bg-light', 'text-dark')
// 		body.classList.remove('bg-dark', 'text-light')
// 	} else if(body.className == 'bg-light') {
// 		body.classList.add('bg-dark', 'text-light')
// 		body.classList.remove('bg-light', 'text-dark')
// 	}
// })