console.log('blaaaaaahhhh');

$(document).on('ready', function() {

	// request("/animals", "get").done(appendAnimals(response));

	$("#create-animal").on("submit", createAnimal);

})

function createAnimal(e){
	e.preventDefault;
	var data = $(e.target).serialize();
	request("/animals", "post", data).done(appendAnimals)
}

function request(url, method, data) {
	return $.ajax({
		url: url,
		method: method,
		dataType: "json",
		data: data
	})
}

function appendAnimals(animals) {
	$.each(animals, function(index, animal) {
		animalTemplate = '<h1 class="animal-name">' + animal.name + '</h1>';
		animalTemplate += '<ul class="animal-details">';
		animalTemplate += '<li class="breed">' + animal.breed + '</li>';
		animalTemplate += '<li class="dob">' + animal.dob + '</li>';
		animalTemplate += '<li class="gender">' + animal.gender + '</li>';
		animalTemplate += '<li class="family">' + animal.family + '</li>';
		animalTemplate += '<li class="status">' + animal.status + '</li>';
		animalTemplate += '</ul>';

   $('#show-animal').append(animalTemplate);
    })
    .done(function() {
      $('#create-animal').trigger('reset');
    })
	})
}

function request(url, method, data) {
	return $.ajax({
		url: url,
		method: method,
		dataType: "json",
		data: data
	})
}