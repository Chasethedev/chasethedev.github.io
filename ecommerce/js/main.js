function Boxinggear(name, color, price, image, btn){
	this.name  = name;
	this.color = color;
	this.price = price;
	this.image = image;
	this.btn   = btn;
}

var blackHeadGear = new Boxinggear('Head Gear','Color : Black', 'Price : $49.99','img/blackheadgear.jpg','Buy Now');
var redHeadGear   = new Boxinggear('Head Gear', 'Color : Red', 'Price : $49.99', 'img/redheadgear.jpg','Buy Now');
var blueGloves    = new Boxinggear('Boxing Gloves', 'Color : Blue', 'Price : $79.99', 'img/bluegloves.jpg','Buy Now');
var grayGloves    = new Boxinggear('Boxing Gloves', 'Color : Gray', 'Price : $79.99', 'img/graygloves.jpg','Buy Now');
var shinGaurds    = new Boxinggear('Shin Gaurds', 'Color : Black', 'Price : $49.99', 'img/shingaurds.jpg','Buy Now');

var boxArray = [blackHeadGear, redHeadGear, blueGloves, grayGloves, shinGaurds];
console.log(boxArray);

for(var i = 0; i < boxArray.length; i++) {
	
	var h1  = document.createElement('h1');
	var h3  = document.createElement('h3');
	var p   = document.createElement('p');
	var img = document.createElement('img');
	var btn = document.createElement("button");


	h1.textContent = boxArray[i].name;
	console.log(h1);
	h3.textContent = boxArray[i].color;
	console.log(h3);
	p.textContent = boxArray[i].price;
	console.log(p);
	img.src = boxArray[i].image;
	console.log(img);
	btn.textContent = boxArray[i].btn;
	console.log(btn)


	document.body.appendChild(h1);
	document.body.appendChild(img);
	document.body.appendChild(h3);
	document.body.appendChild(p);
	document.body.appendChild(btn)


	btn.className = 'buyNow animated fadeIn';
	img.className = 'animated fadeIn'
	h1.className  = 'animated fadeIn'
	h3.className  = 'animated fadeIn'
	p.className   = 'animated fadeIn'
}



