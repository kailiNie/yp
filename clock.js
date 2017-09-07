var dom = document.getElementById('clock');
var ctx = dom.getContext('2d');
var width = ctx.canvas.width;
var height = ctx.canvas.height;

 var r = width / 2;

 var hourArr = [3,4,5,6,7,8,9,10,11,12,1,2,3];

 function drawBackground (){
 	ctx.translate(r,r); //改变坐标 左上角是0,0坐标
 	ctx.beginPath(); //起始一条路径
 	ctx.lineWidth = 2; //设置路径宽度
 	ctx.shadowBlur = 1; //设置阴影模糊级别
 	ctx.arc(0,0,r-5,0,2*Math.PI,false); //画曲线
 	ctx.stroke();
 	ctx.textAlign = 'center';
 	ctx.textBaseline = 'middle';
    hourArr.forEach(function(number,i){
    	var rad = 2*Math.PI / 12 * i; //弧度计算
    	var x = Math.cos(rad) * (r-30); 
    	var y = Math.sin(rad) * (r-30);
    	ctx.fillText(number,x,y);
    });



    //把弧度分为60份
    for(var i = 60;i>=0 ;i --){
    	var rad = 2*Math.PI/60 * i;
    	var x = Math.cos(rad) * (r-20); 
    	var y = Math.sin(rad) * (r-20);
    	ctx.beginPath();
    	ctx.fillStyle = i%5 ? '#ccc' : '#000'
    	ctx.arc(x,y,2,0,2 * Math.PI,false);
    	ctx.fill();
    };
 };

 function drawHour(hour,minute){
 	 ctx.save();
 	 ctx.beginPath();
 	 var rad = 2 * Math.PI / 12 * hour;
 	 var mrad = 2 * Math.PI / 12 /60 * minute;
 	 ctx.rotate(rad + mrad);
 	 ctx.lineWidth = 6;
 	 ctx.lineCap = 'round';
 	 ctx.moveTo(0,10);
 	 ctx.lineTo(0,-r / 2);
 	 ctx.stroke();
 	 ctx.restore();
 };

function drawMinute(minute){
	ctx.save();
	ctx.beginPath();
	var rad = 2 * Math.PI / 60 * minute;
	ctx.rotate(rad);
	ctx.lineWidth = 3;
	ctx.lineCap = 'round';
	ctx.moveTo(0,10);
	ctx.lineTo(0,-r + 30);
	ctx.stroke();
	ctx.restore();
};

function drawSecond(second){
	ctx.save();
	ctx.beginPath();
	ctx.fillStyle = '#c14543';
	var rad = 2* Math.PI / 60 * second;
	ctx.rotate(rad);
	ctx.moveTo(-2,20);
	ctx.lineTo(2,20);
	ctx.lineTo(1,-r +18);
	ctx.lineTo(-1,-r + 18);
	ctx.fill();
	ctx.restore();
};

 drawBackground();

drawHour(12,10)

drawMinute(30);

drawSecond(12);