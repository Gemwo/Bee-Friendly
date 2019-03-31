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


$('.gallery-item').on('mouseover', function(){
	$('.gallery-full').css('background-image', `url(${arr[this.id]})`);
	//$('.gallery-full').css('background-image', `url(img/${this.id}.jpg)`);
	$('.gallery-full').fadeIn(500);
});

$('.gallery-close').on('mouseout', function(){
	$('.gallery-full').css('background-image', 'none');
	$('.gallery-full').fadeOut(500);
});
