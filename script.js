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
glogo = './glogo.png';
blogo = './blogo.svg';
ulogo = './search.svg'
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

	newsbox.innerHTML = resjson.articles.map((news) => {
		let a = "data:image/png;base64,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"
		if (news.urlToImage == null) {
			return `<div class="col">
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
		} else if(news.urlToImage!=null) {
			return `<div class="col">
			    <div class="card text-bg-dark">
			      <img src=${news.urlToImage} class="card-img-top" alt="image">
			      <div class="card-body">
			        <h5 class="card-title">${news.title}</h5>
			        <p class="card-text">${news.description}</p>
							<button type="button" class="btn btn-primary"><a href=${news.url} style="color: white; text-decoration: none" target="_blank">Read More</a></button>
			      </div>
			    </div>
			  </div>`;
		} else if(news.description == null && news.urlToImage == null) {
			return `<div class="col">
			    <div class="card text-bg-dark">
			      <img src=${a} class="card-img-top" alt="image">
			      <div class="card-body">
			        <h5 class="card-title">${news.title}</h5>
			        <p class="card-text">No Iformation</p>
							<button type="button" class="btn btn-primary"><a href=${news.url} style="color: white; text-decoration: none" target="_blank">Read More</a></button>
			      </div>
			    </div>
			  </div>`;
		} else if(news.description == null) {
			return `<div class="col">
			    <div class="card text-bg-dark">
			      <img src=${news.urlToImage} class="card-img-top" alt="image">
			      <div class="card-body">
			        <h5 class="card-title">${news.title}</h5>
			        <p class="card-text">No Iformation</p>
							<button type="button" class="btn btn-primary"><a href=${news.url} style="color: white; text-decoration: none" target="_blank">Read More</a></button>
			      </div>
			    </div>
			  </div>`;
			}
		// }
	})
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
			newsbox.innerHTML = resjson.articles.map((news) => {
		let a = "data:image/png;base64,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"
		if (news.urlToImage == null) {
			return `<div class="col">
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
		} else if(news.urlToImage!=null) {
			return `<div class="col">
			    <div class="card text-bg-dark">
			      <img src=${news.urlToImage} class="card-img-top" alt="image">
			      <div class="card-body">
			        <h5 class="card-title">${news.title}</h5>
			        <p class="card-text">${news.description}</p>
							<button type="button" class="btn btn-primary"><a href=${news.url} style="color: white; text-decoration: none" target="_blank">Read More</a></button>
			      </div>
			    </div>
			  </div>`;
		} else if(news.description == null && news.urlToImage == null) {
			return `<div class="col">
			    <div class="card text-bg-dark">
			      <img src=${a} class="card-img-top" alt="image">
			      <div class="card-body">
			        <h5 class="card-title">${news.title}</h5>
			        <p class="card-text">No Iformation</p>
							<button type="button" class="btn btn-primary"><a href=${news.url} style="color: white; text-decoration: none" target="_blank">Read More</a></button>
			      </div>
			    </div>
			  </div>`;
		} else if(news.description == null) {
			return `<div class="col">
			    <div class="card text-bg-dark">
			      <img src=${news.urlToImage} class="card-img-top" alt="image">
			      <div class="card-body">
			        <h5 class="card-title">${news.title}</h5>
			        <p class="card-text">No Iformation</p>
							<button type="button" class="btn btn-primary"><a href=${news.url} style="color: white; text-decoration: none" target="_blank">Read More</a></button>
			      </div>
			    </div>
			  </div>`;
			}
	})
	}
})