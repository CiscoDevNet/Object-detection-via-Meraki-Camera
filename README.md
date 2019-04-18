# Object detection via Meraki Camera
[![published](https://static.production.devnetcloud.com/codeexchange/assets/images/devnet-published.svg)](https://developer.cisco.com/codeexchange/github/repo/CiscoDevNet/Object-detection-via-Meraki-Camera)

Image object detection via Meraki Camera snapshot API in browser.

Using YOLO(You only look once) real-time object detection built-in [ML5.js](https://ml5js.org/) (based on [Tensorflow.js](https://js.tensorflow.org/)) to detect images returned from Meraki Snapshot API.
![](https://media.giphy.com/media/fqgeyyhSfl763ZIxNN/giphy.gif)


# Related technologies
1. Meraki [MV camera](https://meraki.cisco.com/products/security-cameras) and snapshot API (`/networks/[networkId]/cameras/[serial]/snapshot`)
2. [ML5.js](https://ml5js.org/) and [Tensorflow.js](https://js.tensorflow.org/)
3. [Flask](http://flask.pocoo.org/) and [p5.js](https://p5js.org/)

# How to run this demo

## config
1. Replace `MERAKI_API_KEY` in the [app.py](appy.py) to your Meraki API Key
2. Replace `network_id` in [static/sketch.js](static/sketch.js) and [app.py](app.py) to camera network id
3. Replace `camera_serial` in the [static/sketch.js](static/sketch.js) to the camera serial number


## Run

1. Execute `pythhon3 app.py` at the root folder
2. Open `http://0.0.0.0:8088/` with the Chrome browser 




