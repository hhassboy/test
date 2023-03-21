export function testCanvas() {
    let canvas_1 = document.querySelector('#draw');

    let ctx = canvas_1.getContext('2d');
    // console.log("调用",ctx);
    drawLine(50, 50, 50, 100, "red", 1);
    drawLine(50, 50, 100, 50, "green", 1);
    drawLine(100, 50, 100, 100, "yellow", 1);
    drawLine(50, 100, 100, 100, "blue", 1);
    let data = [
        {
            x: 200,
            y: 150
        },
        {
            x: 200,
            y: 200
        },
        {
            x: 150,
            y: 200
        },
        {
            x: 150,
            y: 150
        },
    ]
    drawLineContinuous(150, 150, data, "red", 1);


    //设置颜色
    ctx.fillStyle = "pink"
    // 填充矩形
    ctx.fillRect(50,200,20,100);
    
    // 设置边框颜色
    ctx.strokeStyle = "pink"
    // 绘制矩形边框
    ctx.strokeRect(100,200,20,100);

    for (let i = 0; i < 5; i++) {
        let height = Math.random() * 90 + 10;
        ctx.fillRect(50 + 40 * i, 400 - height, 20, height);
    }

    // 实心画文字
    ctx.font = '50px 微软雅黑';
    ctx.fillStyle = "gold"
    ctx.fillText('你好世界',150,250);

    // 空心文字
    ctx.strokeText('哈喽',150,300);

    // 画虚线
    // for(let i = 0; i < 400;i +=10) {
    //     drawLine(i+0,i+0,i+5,i+5,"gold",2);
    // }
    // for(let i = 0; i < 400;i +=10) {
    //     drawLine(400-i+0,i+0,400-(i+5),i+5,"gold",2);
    // }

    ctx.setLineDash([5,5]);
    drawLine(0,0,400,400,"gold",2);
    drawLine(400,0,0,400,"gold",2);

    // collisions();

    // let cc = (function aa() {
    //     var a = 888;
    //     function bb(){
    //         return a;
    //     }
    //     return bb();
    // })();
    // console.log("闭包",cc);
}   

function drawLine(x1, y1, x2, y2, cocor, width) {
    let canvas_1 = document.querySelector('#draw');
    let ctx = canvas_1.getContext('2d');
    // 开启一条路径
    ctx.beginPath();
    // 确定起始点
    ctx.moveTo(x1, y1);
    // 确定结束点
    ctx.lineTo(x2, y2);
    // // 设置颜色
    ctx.strokeStyle = cocor;
    // 设置线宽
    ctx.lineWidth = width;
    // 进行上色
    ctx.stroke();
    // 关闭路径
    ctx.closePath();
}

function drawLineContinuous(x1, y1, data, cocor, width) {
    let canvas_1 = document.querySelector('#draw');
    let ctx = canvas_1.getContext('2d');
    // 开启一条路径
    ctx.beginPath();
    // 确定起始点
    ctx.moveTo(x1, y1);
    // 确定结束点
    for (const key in data) {
        ctx.lineTo(data[key].x, data[key].y);
    }
    // // 设置颜色
    ctx.strokeStyle = cocor;
    // 设置线宽
    ctx.lineWidth = width;
    // 进行上色
    ctx.stroke();
    // 关闭路径
    ctx.closePath();
}

// 画圆
function drawCircle(x, y, r) {
    let canvas_1 = document.querySelector('#draw2');
    let ctx = canvas_1.getContext('2d');

    let count = 0;
    let deg = Math.PI * 2 / 360;

    let timer = setInterval(function () {
        count++;
        ctx.beginPath();
        ctx.arc(x, y, r, -Math.PI / 2, count * deg - Math.PI / 2, false);
        ctx.lineWidth = 3;
        ctx.strokeStyle = "gold";
        // ctx.stroke();
        // 实心
        ctx.fill();
        if (count === 360) {
            clearInterval(timer);
        }
    }, 5)
    ctx.closePath();

}

function drawCircle2(x, y, r, c) {
    let canvas_1 = document.querySelector('#draw2');
    let ctx = canvas_1.getContext('2d');

    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "gold";
    // ctx.stroke();
    // 实心
    ctx.fillStyle = c;
    ctx.fill();
    ctx.closePath();
}

// 一个小球的碰撞
function collision(x, y, w, h, radius, xSpeed, ySpeed) {
    let canvas_1 = document.querySelector('#draw2');
    let ctx = canvas_1.getContext('2d');
    // let w = 400;
    // let h = 400;
    // let x = 100;
    // let y = 100;
    // let radius = 20;
    // let xSpeed = 2;
    // let ySpeed = 1;

    let timer = setInterval(function () {
        ctx.clearRect(0, 0, w, h);

        if (x - radius <= 0 || x + radius >= w) {
            xSpeed = -xSpeed;
        }
        x += xSpeed;
        if (y - radius <= 0 || y + radius >= h) {
            ySpeed = -ySpeed;
        }
        y += ySpeed
        drawCircle2(x, y, radius, "red");
    }, 5)

    
}

// 随机数生成器
function random(num) {
    return Math.random() * num;
}

function collisions() {
    let canvas_1 = document.querySelector('#draw2');
    let ctx = canvas_1.getContext('2d');
    let w = 400;
    let h = 400;
    // 3.添加小球类的显示和运动方法
    Ball.prototype.show = function () {
        this.run();
        drawCircle2(this.x, this.y, this.r, this.cocor);
    }
    Ball.prototype.run = function () {
        if (this.x - this.r <= 0 || this.x + this.r >= w) {
            this.xSpeed = -this.xSpeed;
        }
        this.x += this.xSpeed;
        if (this.y - this.r <= 0 || this.y + this.r >= h) {
            this.ySpeed = -this.ySpeed;
        }
        this.y += this.ySpeed
    }
    // 4.创建一个小球的数组放入实例化小球对象
    let ballArr = [];
    for (let i = 0; i < 5; i++) {
        let a = new Ball();
        a.show();
        ballArr.push(a);
    }

    // 5.小球运动
    let timer = setInterval(() => {
        ctx.clearRect(0,0,w,h)
        for (let i = 0; i < ballArr.length; i++) {
            // ballArr[i].run();
            ballArr[i].show();
        }
    }, 5);

    setTimeout(()=>{
        clearInterval(timer);
    },3000)
}

// 1.定义小球类
function Ball() {
    this.x = random(3) + 50;
    this.y = random(3) + 50;
    this.r = random(40) + 10;
    this.cocor = '#' + parseInt(Math.random() * 0xffffff).toString(16);
    this.xSpeed = random(2) + 1;
    this.ySpeed = random(3) + 2;
}
