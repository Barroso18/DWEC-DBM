var images = {
    "8755627802": {
        "title": "Lakes close to Ljubljana",
        "description": "Incredible water in Ljubljana, Slovenia.",
        "img": "http://farm3.staticflickr.com/2807/8755627802_727863f09e_b.jpg"
    },
    "8899898917": {
        "title": "Balloons in Cappadocia",
        "description": "Balloon flight in Cappadocia, Turkey.",
        "img": "http://farm6.staticflickr.com/5458/8899898917_fee4ba1613_b.jpg"
    },
    "9045535798": {
        "title": "Lucía in the Steppe",
        "description": "My motorcycle in the side of the road at some point between the Russian border and Atyrau, Kazakhstan.",
        "img": "http://farm6.staticflickr.com/5459/9045535798_f3d21b27a1_b.jpg"
    },
    "9281765203": {
        "title": "Charyn Canyon",
        "description": "Charyn Canyon, Kazakhstan.",
        "img": "http://farm3.staticflickr.com/2847/9281765203_d6af908f9f_b.jpg"
    },
    "9476752141": {
        "title": "Uran Togoo",
        "description": "Road to Uran Togoo, Mongolia.",
        "img": "http://farm8.staticflickr.com/7301/9476752141_969cc26a71_b.jpg"
    },
    "10139131563": {
        "title": "Vancouver Graffiti",
        "description": "Graffiti in Vancouver. Canada.",
        "img": "http://farm8.staticflickr.com/7379/10139131563_3ddd73c6d4_b.jpg"
    },
    "10138806215": {
        "title": "Kinkakuji",
        "description": "Kinkakuji, Kyoto. Japan.",
        "img": "http://farm8.staticflickr.com/7365/10138806215_e25e389de3_b.jpg"
    }
};

function loadImage(id) {
    document.getElementById("image").src = images[id].img;
    document.getElementById("image-title").innerHTML = images[id].title;
    document.getElementById("description").innerHTML = images[id].description;
    document.getElementById("source").href = "http://www.flickr.com/photos/teosaurio/" + id;
}


let imagen1=document.getElementById("imagen1");