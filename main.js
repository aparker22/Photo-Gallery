var container = document.querySelector('.container'); //This is a search for my class
var images = ['beach1.jpeg', 'beach2.jpeg', 'beach3.jpeg', 'beach4.jpg']; //a list of all my images
var main = document.getElementById('currentImg');
var lightbox = document.querySelector('#lightbox');
var right = document.querySelector('.ar');
var left = document.querySelector('.al');

//define function for what will happen on mouse click
var alert = function (e) {
    var img = this.getAttribute("src");
    main.setAttribute("src", img);
    lightbox.classList.remove('hidden');
    lightbox.addEventListener('click', hide);
    right.addEventListener('click', arrowClicks);
    left.addEventListener('click', arrowClicks);
}

//the loop that puts my images on the page and now adds a listener function
images.forEach(function(i) {
        img = document.createElement('img');
        img.setAttribute("src", i);
        container.appendChild(img);
        img.addEventListener('click', alert);
});

//to hide lightbox
var hide = function (e) {
    lightbox.classList.toggle('hidden');
}

//function for arrow clicks
var arrowClicks = function (e) {
    e.preventDefault();
    var target = e.target;
    right.parentElement.classList.add('hidden');
    console.log(target);
}








