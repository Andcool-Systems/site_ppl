// использование Math.round() даст неравномерное распределение!
function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navig") {
        x.className += " responsive";
    } else {
        x.className = "navig";
    }
}
// Устанавливаем начальные значения скорости движения объекта
var path = window.location.pathname;
var page = path.split("/").pop();
class Circle{
	constructor(id){
		this.id = id;
		this.cnavas_width = 200;
		this.posX = getRandomInt(0, this.cnavas_width);
		this.posY = getRandomInt(0, this.cnavas_width);

		this.speedX = getRandomInt(-5, 5) / 10;
		this.speedY = getRandomInt(-5, 5) / 10;

		while (this.speedX < 0.1 & this.speedX > -0.1){this.speedX = getRandomInt(-5, 5) / 10;}
		while (this.speedY < 0.1 & this.speedY > -0.1){this.speedY = getRandomInt(-5, 5) / 10;}
		this.size = 20;
		this.targetSize = getRandomInt(10, 30);
		this.last_width = 0;
		this.last_set = 1;
	}

	tick(){
		const circle = document.getElementById(this.id);
  		let cnavas_width = document.getElementById('canvas').clientHeight;
  		let headHeight = document.getElementById('myTopnav').clientHeight;
  		let windowWidth = window.innerWidth;
  		if (this.last_set == 1){
  			this.last_set = 0;
  			this.last_width = document.getElementById('canvas').clientHeight;
  		}
  		this.posX += this.speedX;
		this.posY += this.speedY;

		this.size += this.size < this.targetSize ? 0.001 : -0.001;

		if (this.size < this.targetSize + 3 & this.size > this.targetSize - 3){
			this.targetSize = getRandomInt(10, 30);
		}

		  // Если объект касается правого или левого края экрана - меняем направление по оси X
		if (this.posX > this.cnavas_width || this.posX < 0) {
		  this.speedX = -this.speedX;
		}

		  // Если объект касается верхнего или нижнего края экрана - меняем направление по оси Y
		if (this.posY > this.cnavas_width || this.posY < 0) {

		  this.speedY = -this.speedY;


		}

		let offset = (windowWidth / 2) - (this.cnavas_width / 2)// Устанавливаем новые координаты объекта
		circle.style.left = ((this.posX + offset) - (cnavas_width - this.last_width) - (((windowWidth / 100) * this.size)) / 2) + 'px';
		circle.style.top = ((this.posY + headHeight)) + 'px';
		circle.style.width = (windowWidth / 100) * this.size + 'px';
		circle.style.height = (windowWidth / 100) * this.size + 'px';
		this.last_width = cnavas_width;
	}
}
if(page == "index.html" || page == ""){
	let red_circle = new Circle('circle_red')
	let yell_circle = new Circle('circle_yellow')
	let orange_circle = new Circle('circle_orange')
	// Функция для перемещения объекта
	function moveObject() {
	  red_circle.tick();
	  yell_circle.tick();
	  orange_circle.tick();
	}

	// Запускаем функцию перемещения объекта с интервалом 10 миллисекунд
	setInterval(moveObject, 10);
}