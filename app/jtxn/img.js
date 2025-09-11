//获取指定区间范围随机数，包括lowerValue和upperValue
function randomFrom(lowerValue, upperValue) {
	return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
}

function getRndimg(){
	var irndn=randomFrom(1,58)+".jpg";
	//var isrc="http://yitixin.cn/app/jtxn/"+irndn;
	return irndn;
}

// document.write(

// '<p><img data-preview-src="" data-preview-group="1" src="'+isrc+'"/></p>'

// )