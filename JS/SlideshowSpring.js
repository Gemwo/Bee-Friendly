var arr = [];
arr[0] = 'Images/SpringSpecies/Apple.jpg';
arr[1] = 'Images/SpringSpecies/Crocus.jpg';
arr[2] = 'Images/SpringSpecies/Hyacinth.jpg';
arr[3] = 'Images/SpringSpecies/Willow.jpg'


for (var i=0; i<arr.length; i++) {
	var result = `<div class="gallery-item" id="${i}" style="background-image: url(${arr[i]});"></div>`;
	//var result = `<div class="gallery-item" id="${i}" style="background-image: url(img/${i}.jpg)"></div>`;
	$('.gallery-container').append(result);
}
