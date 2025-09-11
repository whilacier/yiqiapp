//系统牌
const number = ['3', '4', '5', '6', '7', '8', '9', '10', "j", "q", "k", "a", '2'];
//const flower = ["<font color=black>♠️</font>", "<font color=red>♥️</font>", "<font color=black>♣️</font>", "<font color=red>♦️</font>"]; // 黑桃 < 红心 < 梅花 < 方块
const flower = ["ht", "hx", "mh", "fk"]; // 黑桃 < 红心 < 梅花 < 方块
//牌组
let arr = [];
 
//生成牌的函数
poker();
 
 //console.log(arr)
 //   let a = new Set();
 //   while (a.size < 3) {
 //       a.add(random(0, 53));
 //   }
 //   let arrindex = [...a];
 //   arr = arrindex.map(item => arr[item]);
 //console.log(arr)   
 
 
 
//打乱后的拆开后的牌组
//let [zhangsan, wangwu, lisi, d] = create();
function pickcard(){
    var narr = create(); // 洗牌
	var rno = random(0, 53);
	var acard = narr[rno];
    var imsr="<img src='./"+acard.name+".png' style='width:80px;height:123px;"+(acard.fz?"":"transform: rotate(180deg);")+"'></img>";
	// console.log(imsr)
	return imsr;
}

function pickcardwx(){
    var narr = create(); // 洗牌
	var rno = random(0, 53);
	var acard = narr[rno];
    var imsr="<img src='/static/pocker/"+acard.name+".png' style='width:80px;height:123px;"+(acard.fz?"":"transform: rotate(180deg);")+"'></img>";
	// console.log(imsr)
	return imsr;
}

//document.writeln("<h1>"+pickcard()+pickcard()+pickcard()+"</h1>");
 
//打印输出
//console.log(zhangsan);
//console.log(wangwu);
//console.log(lisi);
//console.log(d);
 
//生成一副牌
function poker() {
    for (let n = 0; n < number.length; n++) {
        for (let j = 0; j < flower.length; j++) {
            arr.push({ name: flower[j] + number[n], fz:true})
        }
    }
    arr.push({ name: "xw" , fz:true}, { name: "dw" , fz:true})
}
 
//生成一个随机数
function random(min, max) {
    if (max == undefined) {
        max = min;
        min = 0;
    }
    if (min > max) {
        [min, max] = [max, min];
    }
    let number = parseInt(Math.random() * (max - min + 1) + min)
    return number;
}
 
//打乱
function create() {
    let a = new Set();
    while (a.size < 54) {
        // a.add(random(0, 53));
		var rno=random(1, 108);
		if(rno>54){
			rno=54-rno;
		}
		a.add(rno); // 正数为正牌 负数为倒排
    }
    // let arrindex = [...a];
	// console.log(arrindex)
	
	var narr = [];
	for(let it of a.values()){
		var minx = Math.abs(it)-1;
		var acard = arr[minx];
		if(it<0){
			narr.push({ name:acard.name, fz:false});
		}else{
			narr.push({ name:acard.name, fz:true});
		}
	}
	// console.log(narr)
	return narr;
 //    arr = arrindex.map(item => arr[item]);
	// console.log(arr)
    //let zhangsan = arr.slice(0, 17);
    //let wangwu = arr.slice(17, 34);
    //let lisi = arr.slice(34, 51);
    //let d = arr.slice(51);
    //return [zhangsan, wangwu, lisi, d];
}
