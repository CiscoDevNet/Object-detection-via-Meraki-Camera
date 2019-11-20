let yolo;
let status;
let width = 960;
let height = 540;
let current_image;
let objects = [];

let image_el;

// meraki camera config
let network_id = "L_668784544664521658";

let camera_serial = "Q2EV-4LMQ-R4LW";

async function setup() {
    createCanvas(width, height);

    status = select('#status');

    image_el = select('#image');

    yolo = await ml5.YOLO();

    status.html("Model loaded - loading snapshot from Meraki MV camera");

    await load_image()  


}

async function load_image() {
    current_image = await fetch_meraki_live_snapshort();

    status.html("Image loaded");

    objects = await yolo.detect(current_image);

    console.table(objects);

    status.html("Image detected");

    // Continuously detecting
    await load_image()
}


function draw() {

    if (!current_image) {
        return
    }

    try{
        image(current_image, 0, 0, width, height);
    

    objects.forEach((item) => {
        noStroke();
        fill(0, 255, 0);
        textSize(14);
        text(`${item.className}(${item.classProb.toFixed(2)})`, item.x * width, item.y * height - 5);
        noFill();
        strokeWeight(3);
        stroke(0, 255, 0);
        rect(item.x * width, item.y * height, item.w * width, item.h * height);

    })
        
        }catch (e) {

    }

}




function fetch_meraki_live_snapshort() {
    return new Promise((resolve, reject) => {
        let url = `/networks/${network_id}/cameras/${camera_serial}/snapshot`;
        fetch(url, {
            mode: "cors"
        }).then(res => res.json())
            .then(response => {
                image_el.elt.onload = function () {
                    resolve(select("#image"))
                };
                image_el.attribute("src", response.url);
            })
    })
}

function fetch_static_image(index) {
    return new Promise(function (resolve, reject) {
        let urls = [
            "/static/images/difference-between-fruits-and-vegetables.jpg",
            "/static/images/snapshot.jpeg",
            "/static/images/snapshot2.jpg",
            "/static/images/snapshot3.png"

        ];

        image_el.elt.onload = function () {
            resolve(select("#image"))
        };
        image_el.attribute("src", urls[index || 0]);

    })
}
