
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

var table = document.createElement('table');
table.setAttribute("id", "myTable");


var tr = document.createElement('tr');
var th = document.createElement('th');
var th2 = document.createElement('th');
th.appendChild(document.createTextNode('Title'));
th2.appendChild(document.createTextNode('Year'));

tr.appendChild(th);
tr.appendChild(th2);
table.appendChild(tr);

for (var i=0; i < books.length; i++) {
	console.log(books[i].title);

	var tr = document.createElement('tr');
	tr.addEventListener("click", updateHeader);
	var td = document.createElement('td');
	var td2 = document.createElement('td');
	td.appendChild(document.createTextNode(books[i].title));
	td2.appendChild(document.createTextNode(books[i].year));
//	item.innerHTML = books[i].title + ' ' + books[i].year;
	tr.appendChild(td);
	tr.appendChild(td2);
	table.appendChild(tr);
}



var title = document.createElement("h1");
var otsikko = 'testi123';


function updateHeader(){
	otsikko = 'VAIHTO ONNISTUI 123';
	console.log('eventti toimii');
	document.querySelector('h1').innerHTML = td.innerText;
}

title.appendChild(document.createTextNode(otsikko));
document.body.appendChild(title);
document.body.appendChild(table);
