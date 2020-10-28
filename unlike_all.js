var unlike_all = ()=> {
	[].slice.call(document.querySelectorAll('[aria-label="Liked"')).filter(x=>x.innerText.indexOf('Liked') !=-1).map(x=>{x.click()});
	window.scrollTo(0,document.body.scrollHeight);
	window.setTimeout(unlike_all, 3 * 1000)
};
unlike_all();