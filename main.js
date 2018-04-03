var $container = $('.container'); //This is a search for my class

var images = ['beach1.jpeg', 'beach2.jpeg', 'beach3.jpeg', 'beach4.jpg']; //a list of all my imagesgi

var $main = $('currentImg');
var $lightbox = $('#lightbox');
var $right = $('.ar');
var $left = $('.al');



//the loop that puts my images on the page and now adds a listener function
images.forEach(function(i) {
        $img = $('<img>', {
        "src": i })
        $container.append($img); 
});

//define function for what will happen on mouse click
$container.on('click', 'img', function(event) {
    target = event.target;
    var img = target.src;
    $main.attr('src', img);
    $lightbox.removeClass('hidden');

});

//to hide lightbox
$lightbox.on('click', function(event) {
    $lightbox.toggleClass('hidden');
});


//function for arrow clicks
$lightbox.on('click', 'a', function(event) {
    event.preventDefault();
    var target = event.target;
    right.parentElement.classList.add('hidden');
    console.log(target);
})











