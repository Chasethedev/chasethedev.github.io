
var horoscopes = [
	{
		name: 'aries',
		img: 'img/aries.jpg',
		description: 'Aries are the leaders of the pack, first in line to get things going. Whether or not everything gets done is another question altogether, for an Aries prefers to initiate rather than to complete'
	},

	{
		name: 'capricorn',
		img: 'img/capricorn.jpg',
		description: 'Very hard workers, stable, like to reach success, good with money and finance, can come off as unemotional, they are intelligent, and make great mothers too'
	},

	{
		name: 'leo',
		img: 'img/leo.jpg',
		description: 'Loves attention, friendly, loves crowds, extroverted, very good at arguing, they have a lot of pride, very romantic in love, (but men are prone to cheating unless they are with the one they love) very fun people in general, but tends to make a lot of enemies because of their pride'
	},

	{
		name: 'pisces',
		img: 'img/pisces.jpg',
		description: 'Those who are Pisces are extremely sensitive and reserved. They like to escape from reality. A Pisces is a very good listener and friend'
	},

	{
		name: 'aquarius',
		img: 'img/aquarius.jpg',
		description: 'Strong, intelligent, artistic, eccentric people. they have a love for music, can be stubborn, the woman can be controlling if with a submissive man, they are very good looking too, they like to be unique and free, they dont like to be restricted, they like to be alone, can come of as detached, independent'

	},

	{
		name: 'cancer',
		img: 'img/cancer.jpg',
		description: 'Emotional, have mood swings pretty often, loving, caring, friendly, funny, they make excellent friends, trustworthy, good with money, for me they come of as the most stable water sign, they are known to be very good mothers'
	},

	{
		name: 'sagittarius',
		img: 'img/sagittarius.jpg',
		description: 'Fun loving, optimistic, make lots of friends, rarely have enemies, not very emotional, very honest people'
	},

	{
		name: 'taurus',
		img: 'img/taurus.jpg',
		description: 'Most stable sign, works hard, loving, emotional but stable with their emotions, calm, peaceful, but when their buttons are pushed, their anger is irreversable, friendly and very good with money, the most stubborn of the zodiac, very jealous and possessive, controlling '
	},

	{
		name: 'scorpio',
		img: 'img/scorpio.jpg',
		description: 'Good with money, they like success, stubborn, vengeful, secretive, not very blunt or upfront, emotional, can be sensitive, jealous and possessive, but they are very intuitive and have near pshycic abilities. very romantic and passionate people'
	},

	{
		name: 'gemini',
		img: 'img/gemini.jpg',
		description: 'Extroverted sign, materialistic and superficial, they are very intelligent and know how to manipulate, they are great communicators'
	},

	{
		name: 'virgo',
		img: 'img/virgo.jpg',
		description: 'Perfectionists, stable, very honest people (sometimes too honest), pure (doesnt like secretiveness or vengeance) straight to the point, nit picky, fussy, demanding, critical, but make very good friends, and very good mothers and discipliners, emotionally strong, quiet, stubborn, independent'
	},

	{
		name: 'libra',
		img: 'img/libra.jpg',
		description: 'Extremrely fun personalities, great to be with, indecisive, flirty, very fashionable tho, loving, caring, very loyal, they make great friends, theyre romantic, intelligent'
	},


]

	var body = document.getElementById('body');

	var newDiv = document.createElement('div');
	newDiv .className = 'container text-center';
	newDiv.setAttribute('id', 'newDiv');
	body.appendChild(newDiv);

	var img = document.createElement('img');
	newDiv.appendChild(img);

	var newH1 = document.createElement('h1');
	newDiv.appendChild(newH1)

	var description = document.createElement('div');
	newDiv.appendChild(description)


function getHoroscope() {
	var input = document.getElementById('input');
	console.log(input.value);

	

	for(var i=0; i < horoscopes.length; i++) {
		if(input.value == horoscopes[i].name) {

			console.log('you typed in ' + horoscopes[i].name)
			img.src = horoscopes[i].img;
			newH1.textContent = horoscopes[i].name;
			description.innerHTML = horoscopes[i].description;
		}
	}

	img.style.height = '260px';
	description.style.margin = '46px 20px 100px 20px';
	
};

















