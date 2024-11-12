let images = {
    "thumb1": {
        "title": "Lakes close to Ljubljana",
        "description": "Incredible water in Ljubljana, Slovenia.",
        "img": "http://farm3.staticflickr.com/2807/8755627802_727863f09e_b.jpg"
    },
    "thumb2": {
        "title": "Balloons in Cappadocia",
        "description": "Balloon flight in Cappadocia, Turkey.",
        "img": "http://farm6.staticflickr.com/5458/8899898917_fee4ba1613_b.jpg"
    },
    "thumb3": {
        "title": "Lucía in the Steppe",
        "description": "My motorcycle in the side of the road at some point between the Russian border and Atyrau, Kazakhstan.",
        "img": "http://farm6.staticflickr.com/5459/9045535798_f3d21b27a1_b.jpg"
    },
    "thumb4": {
        "title": "Charyn Canyon",
        "description": "Charyn Canyon, Kazakhstan.",
        "img": "http://farm3.staticflickr.com/2847/9281765203_d6af908f9f_b.jpg"
    },
    "thumb5": {
        "title": "Uran Togoo",
        "description": "Road to Uran Togoo, Mongolia.",
        "img": "http://farm8.staticflickr.com/7301/9476752141_969cc26a71_b.jpg"
    },
    "thumb6": {
        "title": "Vancouver Graffiti",
        "description": "Graffiti in Vancouver. Canada.",
        "img": "http://farm8.staticflickr.com/7379/10139131563_3ddd73c6d4_b.jpg"
    },
    "thumb7": {
        "title": "Kinkakuji",
        "description": "Kinkakuji, Kyoto. Japan.",
        "img": "http://farm8.staticflickr.com/7365/10138806215_e25e389de3_b.jpg"
    }
};

function loadImage(id) {
    //console.log(id)
    document.getElementById("image").src = images[id].img;
    document.getElementById("image-title").innerHTML = images[id].title;
    document.getElementById("description").innerHTML = images[id].description;
    document.getElementById("source").href = "http://www.flickr.com/photos/teosaurio/" + id;
}

/*
let imagen1=document.getElementById("thumb1");
let imagen2=document.getElementById("thumb2");
let imagen3=document.getElementById("thumb3");
let imagen4=document.getElementById("thumb4");
let imagen5=document.getElementById("thumb5");
imagen1.addEventListener("click",loadImage(8755627802));
imagen2.addEventListener("click",loadImage(8899898917));
imagen3.addEventListener("click",loadImage(9045535798));
imagen4.addEventListener("click",loadImage(9281765203));
imagen5.addEventListener("click",loadImage(9476752141));

*/
/*
let enclaces = new Set();
enclaces = document.getElementsByClassName("e");

images.(element,valor => {
    element.addEventListener("click",loadImage(element.value))
});*/

let imagenes = document.body.querySelectorAll("a")

console.log(imagenes)

imagenes.forEach(element => {
    //console.log("Me has hecho click")
     console.log(element.getAttribute("id"))
    element.addEventListener("click",function(){loadImage(element.getAttribute("id"))});

});
