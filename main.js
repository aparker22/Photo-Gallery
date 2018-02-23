var container = document.querySelector('.container'); //This is a search for my class
var images = ['beach1.jpeg', 'beach2.jpeg', 'beach3.jpeg', 'beach4.jpg']; //a list of all my images
var images1 = []; // an emtpy array that the new image objects will be placed into


//the loop that puts my images on the page
var pictures = function(x) {
    for (var i = 0; i < x.length; i++) {
        var img = x[i];
        img = document.createElement('img');
        img.setAttribute("src", x[i]);
        container.appendChild(img);
        images1.push(img); //puts images in new array
    }
};
pictures(images); //runs previous function



var main = document.getElementById('currentImg');
var divM = document.querySelector('#addmain');

//to hide lightbox
var hide = function (e) {
    divM.classList.toggle('hidden');
}




//define function for what will happen on mouse click
var alert = function (e) {
    var img = this.getAttribute("src");
    main.setAttribute("src", img);
    divM.classList.remove('hidden');
    divM.addEventListener('click', hide);
    right.addEventListener('click', something);
    left.addEventListener('click', something);
}

//use loop to add mouseclick function to each image in array
var clickPictures = function (x) {
    for (var i = 0; i < x.length; i++) {
        var img = x[i];
        img.addEventListener('click', alert);
    }
}

//run function
clickPictures(images1)

//to set event Listener for arrow keys
var right = document.querySelector('.ar');
var left = document.querySelector('.al');

var something = function (e) {
    e.preventDefault();
    var target = e.target;
    right.parentElement.classList.add('hidden');
    console.log(target);

}








