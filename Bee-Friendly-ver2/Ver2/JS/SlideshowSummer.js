var arr = [];
arr[0] = 'Images/WinterSpecies/Aconite.jpg';
arr[1] = 'Images/WinterSpecies/Heather.jpg';
arr[2] = 'Images/WinterSpecies/Honeysuckle.jpg';
arr[3] = 'Images/WinterSpecies/Primrose.jpg'


for (var i=0; i<arr.length; i++) {
	var result = `<div class="gallery-item" id="${i}" style="background-image: url(${arr[i]});"></div>`;
	//var result = `<div class="gallery-item" id="${i}" style="background-image: url(img/${i}.jpg)"></div>`;
	$('.gallery-container').append(result);
}
