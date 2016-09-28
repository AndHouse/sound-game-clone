new sound1 = new Howl({
	src: ['sounds/bubbles.mp3'];
});

new sound2 = new Howl({
	src: ['sounds/clay.mp3'];
});

var circles = [];

function onKeyDown(event) {
	if(event.key === "a"){
		sound1.play();
		}
	if(event.key === "s"){
		sound2.play();
	}
	var maxPoint = new Point(view.size.width, view.size.height);

	var randomPoint = Point.random();

	var point = maxPoint * randomPoint;

	var newCircle = new Path.Circle(point, 500);

	newCircle.fillColor = "blue";

	circles.push(newCircle);
}

function onFrame(event) {
	for(var i = 0; i < circles.length; i++){
		circles[i].fillColor.hue += 1;
		circles[i].scale(.9);
	}
}

alert("connected");