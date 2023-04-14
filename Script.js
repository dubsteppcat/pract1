let header_button = document.querySelector(".mob_icon");
header_button.addEventListener("click", function (){
    let header = document.querySelector("header");
    if (header.classList.contains("open")) {
        close_menu();
    }
    else {
        header.classList.add("open");
        header_button.querySelector("img").src = "close.png";
    }
});

function close_menu() {
    document.querySelector("header").classList.remove("open");
    header_button.querySelector("img").src = "align-left.png";
};

document.querySelector("#grid").addEventListener("click", close_menu, false);

document.querySelector("header .menu").addEventListener("click", close_menu, false);

document.querySelector("#show_add_photo").addEventListener("click", function () {
    document.querySelector("#add_new_photo").classList.add("open");
});

document.querySelector("#cancel").addEventListener("click", function () {
    document.querySelector("#add_new_photo").classList.remove("open");
});

document.querySelector("#add_photo").addEventListener("click", function () {
    let src = document.querySelector("#new_photo_src").value;
    let text = document.querySelector("#new_photo_text").value;
    if (src) {
        let new_photo_div = document.createElement("div");
        new_photo_div.classList.add("photo");
        let new_img = document.createElement("img");
        new_img.src = src;
        new_photo_div.append(new_img);
        let new_p = document.createElement("p");
        new_p.innerText = text? text: "Фото";
        new_photo_div.append(new_p);
        document.querySelector("#grid").prepend(new_photo_div);
        document.querySelector("#add_new_photo").classList.remove("open");
        document.querySelector("#new_photo_src").value = "";
        document.querySelector("#new_photo_text").value = "";
        new_photo_div.addEventListener("click", open_photo, false)
    }
    else {
        if(!src) {
            document.querySelector("#new_photo_src").classList.add("error");
        }
    }
   
});
function open_photo() {
    let src = this.querySelector("img").src,
    menu_photo = document.querySelector("#menu_photo");
    menu_photo.querySelector("img").src = src;
    menu_photo.classList.add("open");
}

let photos = document.querySelectorAll(".photo");
for (let photo of photos) {
    photo.addEventListener("click", open_photo, false);
}

document.querySelector("#menu_photo").addEventListener("click", function () {
    this.classList.remove("open");
});