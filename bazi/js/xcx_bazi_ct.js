

(function(){
  var INDEX = {
    daYun: 0,
    liuNian: 0
  };
  var today = Solar.fromDate(new Date());
  //$('#year').val(today.getYear());
  //$('#month').val(today.getMonth());
  //$('#day').val(today.getDay());
  //$('#hour').val(today.getHour());
  //$('#minute').val(today.getMinute());
  $('#year').val();
  $('#month').val();
  $('#day').val();
  $('#hour').val();
  $('#minute').val();

  var throttle = function(fn,delay,atleast){
    var timer = null;
    var previous = null;
    return function(){
      var now = +new Date();
      if(!previous) previous = now;
      if(atleast && now - previous > atleast){
        fn();
        previous = now;
        clearTimeout(timer);
      } else {
        clearTimeout(timer);
        timer = setTimeout(function(){
          fn();
          previous = null;
        }, delay);
      }
    }
  };
  
  var onChange = throttle(function(){
    compute();
  },20,50);
  
  
  
  var compute = function(){
    try{
      
/*保障另外一组选择器独立运行 start*/
  var year = $('#now_year').val();
  var month = $('#now_month').val();
  var day = $('#now_day').val();
  var hour = $('#now_hour').val();
  //var minute = $('#now_minute').val();
  //var seconds = $('#now_second').val();

	  var solar = Solar.fromYmdHms(year,month,day,hour,0,0);
      var lunar = solar.getLunar();
      var bazi = lunar.getEightChar();
      bazi.setSect(sect);
      var yun = bazi.getYun(gender);
	  var p = lunar.getPrevJieQi(),n = lunar.getNextJieQi();


	var nowgl = Solar.fromYmdHms(year,month,day,hour,0,0);//公历
	var nownl = Lunar.fromYmdHms(lunar.getYear(),lunar.getMonth(),lunar.getDay());//固定农历初一 的干支'+nownl.getDayInGanZhiExact()+'
	var nowbz = lunar.getEightChar();//'+nowbz.getDay()+'八字 run范围内都可以
/*保障另外一组选择器独立运行 finish*/
	

	  
	  
	  
	  var year = $('#year').val();
      var month = $('#month').val();
      var day = $('#day').val();
      var hour = $('#hour').val();
      var minute = $('#minute').val();
      
      var year = $('#year').val();
      var month = $('#month').val();
      var day = $('#day').val();
      var gender = parseInt($('#gender').val());
      var sect = parseInt($('#sect').val());
	  
      if(year<1||year>9999){
        return;
      }
      if(month<1||month>12){
        return;
      }
      if(day<1||day>31){
        return;
      }
      if(hour<0||hour>23){
        return;
      }
      if(minute<0||minute>59){
        return;
      }
      
      var solar = Solar.fromYmdHms(year,month,day,hour,minute,0);
      var lunar = solar.getLunar();
      var bazi = lunar.getEightChar();
      bazi.setSect(sect);
	  
	  var yunSect = parseInt($('#yunSect').val());
	  
      var yun = bazi.getYun(gender,yunSect);
	  if(1==gender){
	    baziTitle = '乾造';
	    riGan = '元男';
	    riGans = '男';
	  }else if(0==gender){
	    baziTitle = '坤造';
	    riGan = '元女';
	    riGans = '女';
	  }
var p = lunar.getPrevJieQi(),n = lunar.getNextJieQi();	
var jq = {'大寒':'中气', '立春':'节气', '冬至':'中气', '小寒':'节气', '小雪':'中气', '大雪':'节气', '霜降':'中气', '立冬':'节气', '秋分':'中气', '寒露':'节气', '处暑':'中气', '白露':'节气', '大暑':'中气', '立秋':'节气', '夏至':'中气', '小暑':'节气', '小满':'中气', '芒种':'节气', '谷雨':'中气', '立夏':'节气', '春分':'中气', '清明':'节气', '雨水':'中气', '惊蛰':'节气'	 };     	   	
var bmf = {'鼠':'千手观音', '牛':'虚空藏菩萨', '虎':'虚空藏菩萨', '兔':'文殊菩萨', '龙':'普贤菩萨', '蛇':'普贤菩萨', '马':'大势至菩萨', '羊':'大日如来', '猴':'大日如来', '鸡':'不动尊菩萨', '狗':'阿弥陀佛', '猪':'阿弥陀佛', 	 };
	  

	var bztg = {'甲':'<span style="color:#228B22;" class=fonts>甲</span>', '乙':'<span style="color:#228B22;" class=fonts>乙</span>', 
				'丙':'<span style="color:#FF0000;" class=fonts>丙</span>', '丁':'<span style="color:#FF0000;" class=fonts>丁</span>', 
				'戊':'<span style="color:#715a15;" class=fonts>戊</span>', '己':'<span style="color:#715a15;" class=fonts>己</span>', 
				'庚':'<span style="color:#ef9113;" class=fonts>庚</span>', '辛':'<span style="color:#ef9113;" class=fonts>辛</span>', 
				'壬':'<span style="color:#185fac;" class=fonts>壬</span>', '癸':'<span style="color:#185fac;" class=fonts>癸</span>'		      };

	var bzdz = {'子':'<span style="color:#185fac;" class=fonts>子</span>', '丑':'<span style="color:#715a15;" class=fonts>丑</span>', 
				'寅':'<span style="color:#228B22;" class=fonts>寅</span>', '卯':'<span style="color:#228B22;" class=fonts>卯</span>', 
				'辰':'<span style="color:#715a15;" class=fonts>辰</span>', '巳':'<span style="color:#FF0000;" class=fonts>巳</span>', 
				'午':'<span style="color:#FF0000;" class=fonts>午</span>', '未':'<span style="color:#715a15;" class=fonts>未</span>', 
				'申':'<span style="color:#ef9113;" class=fonts>申</span>', '酉':'<span style="color:#ef9113;" class=fonts>酉</span>', 
				'戌':'<span style="color:#715a15;" class=fonts>戌</span>', '亥':'<span style="color:#185fac;" class=fonts>亥</span>'		      };
	/*
	var bztg = {'甲':'<span style="color:#228B22;" class=fonts>甲</span><span style="color:#228B22;">木</span>', '乙':'<span style="color:#228B22;" class=fonts>乙</span><span style="color:#228B22;">木</span>', 
				'丙':'<span style="color:#FF0000;" class=fonts>丙</span><span style="color:#FF0000;">火</span>', '丁':'<span style="color:#FF0000;" class=fonts>丁</span><span style="color:#FF0000;">火</span>', 
				'戊':'<span style="color:#715a15;" class=fonts>戊</span><span style="color:#715a15;">土</span>', '己':'<span style="color:#715a15;" class=fonts>己</span><span style="color:#715a15;">土</span>', 
				'庚':'<span style="color:#ef9113;" class=fonts>庚</span><span style="color:#ef9113;">金</span>', '辛':'<span style="color:#ef9113;" class=fonts>辛</span><span style="color:#ef9113;">金</span>', 
				'壬':'<span style="color:#185fac;" class=fonts>壬</span><span style="color:#185fac;">水</span>', '癸':'<span style="color:#185fac;" class=fonts>癸</span><span style="color:#185fac;">水</span>'		      };

	var bzdz = {'子':'<span style="color:#185fac;" class=fonts>子</span><span style="color:#185fac;">水</span>', '丑':'<span style="color:#715a15;" class=fonts>丑</span><span style="color:#715a15;">土</span>', 
				'寅':'<span style="color:#228B22;" class=fonts>寅</span><span style="color:#228B22;">木</span>', '卯':'<span style="color:#228B22;" class=fonts>卯</span><span style="color:#228B22;">木</span>', 
				'辰':'<span style="color:#715a15;" class=fonts>辰</span><span style="color:#715a15;">土</span>', '巳':'<span style="color:#FF0000;" class=fonts>巳</span><span style="color:#FF0000;">火</span>', 
				'午':'<span style="color:#FF0000;" class=fonts>午</span><span style="color:#FF0000;">火</span>', '未':'<span style="color:#715a15;" class=fonts>未</span><span style="color:#715a15;">土</span>', 
				'申':'<span style="color:#ef9113;" class=fonts>申</span><span style="color:#ef9113;">金</span>', '酉':'<span style="color:#ef9113;" class=fonts>酉</span><span style="color:#ef9113;">金</span>', 
				'戌':'<span style="color:#715a15;" class=fonts>戌</span><span style="color:#715a15;">土</span>', '亥':'<span style="color:#185fac;" class=fonts>亥</span><span style="color:#185fac;">水</span>'		      };
*/




	var tianganxy = {
	'甲':'<p>甲木在十天干里排行第一位，属阳木，主仁。<br>自然属性：参天大树<br>甲木性格：仁慈，上进，永不屈服</p><p>仁慈/助人<br>甲木是参天大树，能够遮风挡雨，因此甲木出生的人，注定是一个仁慈的人，总喜欢帮身边的朋友解决问题，乐于助人。</p><p>上进<br>甲木扎根土地，一生不断向上生长，枝繁叶茂，因此甲木的人有上进心，有着积极的人生态度，躺平是不可能的，只要甲木活着就一直向上生长。</p><p>不屈服<br>甲木一生最大的理想是成为栋梁之材，因此甲木不怕庚金的砍伐，为了能成材，能抗压，勇于挑战生活中的挫折和压力，永不屈服。</p><p>甲木日主人的正面性格<br>富有上进心、恒心，正直，不马虎，有责任感，不轻浮，能助人，能体谅人。</p><p>甲木日主人的负面性格<br>不知妥协变通，欠缺敏捷性和灵活性，会过于主观会过度干涉别人，给自己造成负面的影响。</p><p>诗诀<br>甲木生人最聪明，深谋远虑是英雄。<br>别人若有为难事，舍已为人也现成。<br>（性格气质需要综合命局的五行、十神、用神等特质综合评判，此处仅提供甲木日主维度的特质参考，需知甲木越旺，则甲木特性越明显）</p><p>甲木名人<br>李小龙、吴京、岳飞、古天乐、宋庆龄、武则天</p><p>甲木类象<br>大树、森林、元首、统帅、火星、雷电、大路、桥梁、胆囊、头面、脑神经、政治、农林、松柏、猫、虎、电线杆</p><p>《滴天髓》论甲木<br>甲木参天，脱胎要火。春不容金，秋不容土；<br>火炽乘龙，水宕骑虎。地润天和，植立千古。</p><p>《渊海子平》论甲木<br>甲木天干作首排，原无枝叶与根荄；<br>欲存天地千年久，直向沙泥万丈埋；<br>断就栋梁金得用，化成灰炭火为灾；<br>蠢然块物无机事，一任春秋自往来。</p>', 
	'乙':'<p>乙木在十天干里排行第二位，属阴木，主仁。<br>自然属性：苗圃花草<br>乙木性格：柔和、敏感、适应力强、有谋略</p><p>柔和<br>乙木是花草和藤本，具有柔软的身躯，正如“乙”字结构，九曲回肠，花草默默地伏在低处生长，不与它人争高。这注定了乙木人是柔和而谦卑的，从不会直接拒接别人，懂得去迁就别人，照顾他人的感受，如柔弱的女子。</p><p>敏感<br>乙木是小花小草，不同于甲木参天大树，乙木身形弱小而柔软，缺乏安全感，因此也带有敏感、心思细腻的性格。乙木人注重细节，天生有超强的观察力，能敏感体察别人的情绪变化，但人多面前会把自己的情绪隐藏得很好。</p><p>适应力强<br>狂风可以把大树连根拔起，但乙木的枝条可以迎风摆柳，具有极好的韧性。乙木可以生长在树荫下、田埂上、悬崖峭壁上，只要风把种子散播在适合的地方，乙木就可以生根发芽，这代表着它生存能力很强，对环境的适应很快，正所谓“藤萝系甲，可春可秋”。</p><p>有谋略<br>善于谋略和逻辑分析，懂得忍耐、随机应变、顺势而为，喜暗斗不喜明争，适合做幕后大佬。国内很多顶尖的幕后智囊团、顾问、策划者都是乙木出生。</p><p>乙木日主人的正面性格<br>柔顺、温和、有绝佳的情绪管理能力，不会坚持己见，做事灵活变通，善于沟通；有丰富的表现力，反应敏捷，富有协调性，韧性超强，适应环境能力强。</p><p>乙木日主人的负面性格<br>敏感，情绪多变，易见风转舵、三心二意，心软，没主见、怯懦；非常现实，内心占有欲强，有心机，容易经不起诱惑而受骗。</p><p>诗诀<br>乙木生人最耿直，心实见景有心机。<br>今日吃他一杯酒，不到明天就还席。<br>为人办事多公道，从来不会占便宜。<br>通情达理多尊让，能忍能让心最慈。<br>（性格气质需要综合命局的五行、十神、用神等特质综合评判，此处仅提供乙木日主维度的特质参考，需知乙木越旺，则乙木特性越明显。）</p><p>乙木名人<br>李鸿章、欧阳修、齐白石、金庸、麦当娜 、戴安娜、林青霞、王祖贤、霍建华</p><p>乙木类象<br>花草、苗圃、文人、僧道、肝脏、毛发、神经系统、丝绸、香料、冥王星</p><p>《滴天髓》论乙木<br>乙木虽柔，刲羊解牛，怀丁抱丙，跨凤乘猴；<br>虚湿之地，骑马亦忧，藤罗系甲，可春可秋。</p><p>《渊海子平》论乙木<br>乙木根荄种得深，只宜阳地不宜阴；<br>漂浮最怕多逢水，刻斫何须苦用金；<br>南去火炎灾不浅，西行土重祸犹侵；<br>栋梁不是连根木，辨别工夫好用心。</p>', 
	'丙':'<p>丙火在十天干里排行第三位，属阴火，主礼。<br>自然属性：炎炎烈日<br>丙火性格：热情、奉献、精力充沛</p><p>热情<br>丙火就如同太阳，热烈地燃烧自己，它能驱逐严寒融化坚冰，你会发现身边性格外向热情的朋友，很大概率是丙火日主出生，丙火人天生自信、热情开朗，每天起床都是新生的日子。</p><p>奉献（有求必应）<br>太阳给予世界强烈的热量和光芒，给世界亿万生灵提供运转的能量，但是从不索取，毫不计较是否获得回报，因此丙火代表着奉献。丙火的人对朋友总是有求必应，慷慨大方，所以丙火的人缘都不错。</p><p>精力充沛<br>丙火永无止歇地燃烧了几十亿年，哪怕恶劣天气暂时遮蔽了光芒，它也会寻得一切时机，给世界散发热量。丙火代表着精力充沛、永不止歇。丙火的这一特点，也让他们能时刻感染周围的人，就如一个小太阳，给家人朋友带来活力与生命力。</p><p>丙火日主人的正面性格<br>开朗，慷慨，不计较，待人亲切；理解力强，精力充沛，做事积极，易得人好感。</p><p>丙火日主人的负面性格<br>性格急躁，易冲动，三分钟热度；性情飘忽不定，喜怒无常，三心二意；虚荣好面子，爱表现。</p><p>诗诀<br>丙火生人心最刚，心中有话不隐藏。<br>有一句来说一句，心实不怕把人伤。<br>本公办事多公道，通情达理好商量。<br>别人有点为难事，千方百计把忙帮。<br>（性格气质需要综合命局的五行、十神、用神等特质综合评判，此处仅提供丙火日主维度的特质参考，需知丙火越旺，则丙火特性越明显）</p><p>丙火名人<br>彭于晏、梁咏琪、梁朝伟、关咏荷、杨紫琼、周笔畅、蔡少芬、刘嘉玲、李治廷</p><p>丙火类象<br>太阳、木星、宫殿、祠堂、化妆师、外交官、眼睛、血压、烫伤、娱乐业、文化考试、辣椒、电器、摄影机</p><p>《滴天髓》论丙火<br>丙火猛烈，欺霜侮雪。能煅庚金，逢辛反怯；<br>土众成慈。水猖显节，虎马犬乡，甲来成灭。</p><p>《渊海子平》论丙火<br>丙火明明一太阳，原从正大立纲常；<br>洪光不独窥千里，巨焰犹能遍八荒；<br>出世肯为浮木子，传生不作湿泥娘；<br>江湖死水安能克，惟怕成林木作殃。</p>', 
	'丁':'<p>丁火在十天干里排行第四位，属阴火，主礼。<br>自然属性：星星之火，可以燎原<br>丁火性格：礼貌、热情、心思细腻</p><p>礼貌<br>丁火象征着蜡烛、灯火。火的使用，代表着人类文明的到来。所以丁火也是文明和礼仪的代名词。丁火的人，总是彬彬有礼，相处起来让人如沐春风。</p><p>热情<br>丁火在燃烧自己的过程中，向外界散发温度，照暖了无数个黑夜以及寒冷的冬日。所以丁火的人，自带热情的气质，哪怕初认识，也可以让你感受不到距离感。</p><p>心思细腻<br>丁火是柔弱的，容易被风吹而摇曳，甚至熄灭。所以丁火是细腻、敏感、脆弱的。如果你有一个丁火的朋友，要注意对悉心呵护，照顾好他们的玻璃心了。</p><p>丁火日主人的正面性格<br>温和有礼而热情，情感丰富；目光长远，行事谨慎，能奉献牺牲自己。</p><p>丁火日主人的负面性格<br>不善拒绝别人，遇事易犹豫不决，易猜忌怀疑，易聪明反被聪明误。</p><p>诗诀<br>丁火生人心性急，心中有话当面提。<br>为人在先多快乐，打抱不平属第一。<br>（性格气质需要综合命局的五行、十神、用神等特质综合评判，此处仅提供丁火日主维度的特质参考，需知丁火越旺，则丁火特性越明显。）<br>丁火名人<br>马云、范冰冰</p><p>丁火类象<br>蜡烛、思想、传播、祥云、月光、厨房、妇女、教师、血液、心脏、美容、玫瑰、飞虫</p><p>《滴天髓》论丁火<br>丁火柔中，内性昭融，抱乙而孝，合壬而忠；<br>旺而不烈，衰而不穷，如有嫡母，可秋可冬。</p><p>《渊海子平》论丁火<br>丁火其形一烛灯，太阳相见夺光明；<br>得时能化千斤铁，失令难熔一寸金；<br>虽少乾柴尤可引，纵多湿木不能生；<br>其间衰旺当分晓，旺比一炉衰一檠。</p>', 
	'戊':'<p>戊土在十天干里排行第五位，属阳土，主信。<br>自然属性：高山之土<br>戊土性格：靠谱稳重、固执、诚信</p><p>靠谱稳重<br>戊土就像高山之土，默默地矗立在大地上，历经岁月也丝毫不改其本色，成为一道指引方位的坐标。所以戊土是靠谱、稳重、踏实的代名词。如果你有一个戊土的朋友，那么他办事你可以尽管放心！</p><p>固执<br>戊土哪怕历经岁月的风霜，也千万年来都没有变化，固执地坚守一地。所以戊土的人，思想和行为不容易被外界影响，相当地“倔”哦！</p><p>诚信<br>戊土承载万物，悦纳大地上的一切植被和生灵，默默奉献而不争。只要付出汗水辛勤耕作，大地就能反馈收成，土代表着诚信、可信赖、可倚靠。戊土的人，大多能成为良好的合作伙伴！</p><p>戊土日主人的正面性格<br>靠谱、豁达稳重、性格耿直、乐观、朴实、对事有计划条理，重感情，肯助人。</p><p>戊土日主人的负面性格<br>任性顽固，以自我为中心，不懂缺通融性，无趣，不浪漫，喜好奉承，好面子，不主动，疑心重。</p><p>诗诀<br>戊土生人无转回，一条路上跑到黑。<br>有人不投你的意，话不投机皱双眉。<br>有人若随你心意，吃亏让人百事宜。<br>千日交来万日好，一日无情如扫灰。<br>（性格气质需要综合命局的五行、十神、用神等特质综合评判，此处仅提供戊土日主维度的特质参考，需知戊土越旺，则戊土特性越明显）</p><p>戊土名人<br>杨澜、舒淇、冯小刚、周渝民、朗朗、孙红雷、张艺谋、姜文、言承旭、林心如</p><p>戊土类象<br>山岭、堤坝、仓库、狱警、胖子、胃部、皮肤、保险、国防、粮食、皮具、住宅</p><p>《滴天髓》论戊土<br>戊土固重，既中且正，静翕动辟，万物司命；<br>水润物生，火燥物病，若在艮坤，怕冲宜静。</p><p>《渊海子平》论戊土<br>戊土城墙堤岸同，镇江河海要根重；<br>柱中带合形还壮，日下乘虚势必崩；<br>力薄不胜金漏泄，功成安用木疏通；<br>平生最爱东南健，身旺东南健失中。</p>', 
	'己':'<p>己土在十天干里排行第六位，属阴土，主信。<br>自然属性：田园之土<br>己土性格：包容、诚信、可塑性强</p><p>包容<br>己土就像田园之土，它肥沃、湿润，孕育着万千种植被和作物，所以己土代表着无私的接纳与包容。己土之人，给人的感觉总是和和气气的，拥有着相当好的人缘。</p><p>诚信<br>己土承载万物，默默奉献而不争，只要付出汗水辛勤耕作，大地就能反馈收成，己土代表着诚信、可信赖、可倚靠。所以他们能在事业上获得良好的合作关系，容易获得贵人支持。</p><p>可塑性强<br>己土没有形状，同时也代表着它可以塑造成一切形状。人们可以按着自己的需求，可以把土与水混合，烧纸成砖石，砌成房屋；甚至可以把土制成精美的瓷器，成为艺术品供人欣赏。所以己土之人，在职场具有极佳的培养潜力，是个多面手！</p><p>己土日主人的正面性格<br>包容，忍耐，学习能力强，能深入了解问题，多才多艺，有弹性，不固执，善于模仿，任劳任怨的大后方，默默付出，辅助型人才。</p><p>己土日主人的负面性格<br>疑心重，过度谨慎，内心复杂矛盾，心思较不易集中，易迷茫，易消极妥协，易被人利用。</p><p>诗诀<br>已土生人多主才，放出账去要不来。<br>在家发下天大恨，见面生情抹不开。<br>说上几句顺情话，心慈面软你回来。<br>任何自己过不去，好心慈善闷在怀。<br>（性格气质需要综合命局的五行、十神、用神等特质综合评判，此处仅提供己土日主维度的特质参考，需知己土越旺，则己土特性越明显）</p><p>己土名人<br>周润发、李连杰、王力宏、杨丞琳、梁洛施、陈奕迅、 汪明荃、钟欣桐、李冰冰</p><p>己土类象<br>田园、墓地、卧室、秘书、鼻面、脾胃、胰脏、腹部、疮、幼教、妇产科、农作物、生活日用品。</p><p>《滴天髓》论己土<br>己土卑湿，中正蓄藏，不愁木盛，不畏水狂；<br>火少火晦，金多金光，若要物旺，宜助宜帮。</p><p>《渊海子平》论己土<br>己土田园属四维，坤深能为万物基；<br>水金旺处身还弱，火土功成局最奇；<br>失令岂能埋剑戟，得时方可用鎡基；<br>漫夸印旺兼多合，不遇刑冲总不宜。</p>', 
	'庚':'<p>庚金在十天干里排行第七位，属阳金，主义。<br>自然属性：宝剑<br>庚金性格：讲义气、是非分明、果断</p><p>讲义气<br>庚金就如同宝剑，代表着武力与正义的伸张。它在世间惩恶扬善，与一切不公平的事情做抗争，所以金主“义”，庚金更是正义的代名词。如果你有圈里公认讲义气的朋友，那么他是庚金日主的可能性比较大！</p><p>是非分明<br>庚金坚硬的质地，可以将许多坚硬的东西一劈两半。所以它是坚决的、分明的，容不得晦暗的中间地带。所以，庚金象征着法律和司法机关，庚金作为日主的人，必定是个是非分明、眼里揉不进沙子的人！</p><p>果断<br>拔剑出鞘只需要瞬间，在战场上容不下一丝多余的犹豫和耽搁。所以庚金日主的人，面对复杂的形势，通常可以摒弃多余的内耗，进行快速决策。如果你面对纠结的难题时，不妨找你的庚金朋友出出主意！</p><p>庚金日主人的正面性格<br>刚毅，不服输，积极，果断，富有正义感，不虚伪，能表现，善辩。</p><p>庚金日主人的负面性格<br>率直，容易得罪人，冲动，易与人冲突，自我表现欲强，粗率，不细心。</p><p>诗诀<br>庚金生人性情绵，一生不好讨人嫌。<br>见了人家有灾难，人家落泪你心酸。<br>你待人家一盆火，人家待你冬月寒。<br>时常你就上了当，人家做事你花钱。<br>（性格气质需要综合命局的五行、十神、用神等特质综合评判，此处仅提供庚金日主维度的特质参考，需知庚金越旺，则庚金特性越明显）</p><p>庚金名人<br>唐国强、容祖儿、黄光裕、陈凯歌、苏有朋、张家辉、陈可辛、吴尊、斯琴高娃</p><p>庚金类象<br>军人、刀剑、水星、潮汐、高速公里、外科医生、屠夫、大肠、被告、稽查机关、矿业、狮子、汽车</p><p>《滴天髓》论庚金<br>庚金带煞，刚健为最，得水而清，得火而锐；<br>土润则生，土干则脆，能赢甲兄，输于乙妹。</p><p>《渊海子平》论庚金<br>庚金顽钝性偏刚，火制功成怕水乡；<br>夏産东南过锻炼，秋生西北亦光芒；<br>水深反见他相克，木旺能令我自伤；<br>戊己干支重遇土，不逢冲破即埋藏。</p>', 
	'辛':'<p>辛金在十天干里排行第八位，属阴金，主义。<br>自然属性：金银珠宝，小型金属<br>辛金性格：温文儒雅、有韧性、心思细腻</p><p>温文儒雅<br>辛金就如金银珠宝，美轮美奂地展示在博物馆展厅，或者是商场柜台上。所以，辛金代表着一切体面的、具有装饰性的美好事物。在社会生活中，辛金日主的人，也是个得体而优雅的人，与之交流，常给人如沐春风之感。</p><p>有韧性<br>辛金可以被锻造和塑造成各种形态，甚至拉伸成比头发还要细的金丝，可见辛金有着极强的可塑性和韧性。所以，辛金的日主虽然给人柔和之感，但是深入了解，会发现他是内心相当坚韧、有弹性的人。</p><p>心思细腻<br>精美的珠宝表面，可以像镜子般，清晰地映射出周遭的事物。这就如辛金人的内心，不声不语，但是心如明镜，把一切都收在眼底。辛金必定是个心思细腻的人，你会发现身边大事小事，很难瞒得住他们的眼睛！</p><p>辛金日主人的正面性格<br>敏感细腻，外表柔弱，内在却暗含坚硬，自我要求高，追求完美。待人亲切，有同情心，人际关系好，善恶分明，擅长创新，有独特想法，有品位。</p><p>辛金日主人的负面性格<br>好虚荣面子，在乎外表，易贪求，意志薄弱，抗打击能力弱，现实主义。</p><p>诗诀<br>辛金生人好为人，交的朋友成了群。<br>君子小人常在内，常常不离你家门。<br>交下君子厚又厚，交来交去报你恩。<br>交下小人无情义，日后骗你要小心。<br>（性格气质需要综合命局的五行、十神、用神等特质综合评判，此处仅提供辛金日主维度的特质参考，需知辛金越旺，则辛金特性越明显）</p><p>辛金名人<br>李嘉欣、周星驰、甄子丹、葛优、林宥嘉、蔡依林、李彦宏、王祖蓝、徐克</p><p>辛金类象<br>秋霜、冰雹、律师、议员、肺脏、牙齿、中介业、针灸、手术、五金器具、象牙、玉石</p><p>《滴天髓》论辛金<br>辛金软弱，温润而清，畏土之叠，乐水之盈；<br>能扶社稷，能救生灵，热则喜母，寒则喜丁。</p><p>《渊海子平》论辛金<br>辛金珠玉性通灵，最爱阳和沙水清；<br>成就不劳炎火煆，滋扶偏爱湿泥生；<br>木多火旺宜西北，水冷金寒要丙丁；<br>坐禄通根身旺地，何愁厚土没其形。</p>', 
	'壬':'<p>壬水在十天干里排行第九位，属阳水，主智。<br>自然属性：大海之水<br>壬水性格：率性、勇敢、机敏</p><p>率性<br>壬水就像大河和瀑布，从高山上不断汇聚势能和水源，然后倾泻而下，奔流不息，好一个酣畅淋漓！壬水之人，是充满动力和冲劲的，更是率性的。如果身边有朋友是壬水，相信你一定能被他们充满率性的人格魅力所感染！</p><p>勇敢<br>大江大河在奔腾的过程中，哪怕遇到悬崖、礁石，以及再狭窄的河道，也绝不会阻止江河向东的步伐。所以壬水没有形态，但是确实最为勇敢和无畏的。壬水之人，也能带着这种勇气，取不断闯关和克服难题！</p><p>机敏<br>虽然壬水率性而勇敢，但千万不要把它当做一介莽夫。水主“智”，所以水具有迂回和圆融的本领，可以随外界环境变化而调整自己，随机应变能力强。你看水在哪怕山穷水尽的环境中，还能为自己迂回出一条道路的样子，就知道水的智慧了。壬水日主的人，是想当具有智商和机敏度的人！</p><p>壬水日主人的正面性格<br>聪明，随机应变能力强，冲劲十足，率性自由，悠闲而乐观，胆大心细，才智高，交际广，人缘佳，反应灵敏。</p><p>壬水日主人的负面性格<br>做事虎头蛇尾，粗枝大叶，纵欲任性，易有怠惰而好依赖，善算计，好变动，易激动，不服输，对异性感情心思过多。</p><p>诗诀<br>壬水生人心最实，为人不好占便宜。<br>吃了他人一杯酒，不到明天就还席。<br>你待人家千般好，人家待你总是虚。<br>今后有事酌量办，深谋远虑总为宜。<br>（性格气质需要综合命局的五行、十神、用神等特质综合评判，此处仅提供壬水日主维度的特质参考，需知壬水越旺，则壬水特性越明显）</p><p>壬水名人<br>郭沫若、张国荣、琼瑶、老舍、林海峰、孙俪、周迅、迪丽热巴、邓伦</p><p>壬水类象<br>银河、秋露、河流、瀑布、橡胶树、海豚、膀胱、乳腺、淋巴系统、性行为、蝙蝠、冰箱、水管、石灰</p><p>《滴天髓》论壬水<br>壬水通河，能泄金气，则中之德，周流不滞；<br>通根透癸，冲天奔地，化则有情，从则相济。</p><p>《渊海子平》论壬水<br>壬水汪洋并百川，漫流天下总无边；<br>干支多聚成漂荡，火土重逢涸本源；<br>养性结胎须未午，长生归禄属乾坤；<br>身强原自无财禄，西北行程厄少年。</p>', 
	'癸':'<p>癸水在十天干里排行第十位，属阴水，主智。<br>自然属性：雨露之水<br>癸水性格：内向、喜欢幻想、浪漫</p><p>内向<br>癸水就如朝露，只在夜幕中酝酿，当太阳升起来时，就羞涩地蒸发掉。所以癸水之人，也如这露水一样，是低调而内敛的。如果仔细留意周围，那些安静坐在角落的害羞少年，也许就是内向的癸水日主！</p><p>喜欢幻想<br>癸水就如镜子般，映射出外部的环境，把自己幻化成多彩的宝石。所以癸水注定是敏感而多变的。</p><p>癸水日主的人，容易被环境感染，将周遭的所见所闻幻化成无穷无尽的想象力。许多才子文人和玄学家，都是癸水哦！</p><p>浪漫<br>朝露的形象，经常会被文人写进诗词画作里，这也从侧面证明了癸水的诗意与浪漫特性。</p><p>所以你会看到癸水之人，也通常不会太讲求实际，而更在乎“感觉”、“状态”这样的词语，他们通常是人群里最讲求浪漫之人！</p><p>癸水日主人的正面性格<br>聪明机敏，温和善良，重视规则及道德，有洁癖，内向，具有勤奋努力和耐力，思想纯真，温和细腻，冷静，人缘好。</p><p>癸水日主人的负面性格<br>优柔寡断，多愁善感，易幻想，不切实际，易生悲观，感情脆弱，有点神经质，重生活情趣。</p><p>诗诀<br>癸水生人心最公，别人有苦你伤情。<br>你有好心总是虚，恩人无义未有功。<br>实心待人亏待已，竹蓝打水一场空。<br>今后处人要仔细，不由粗心切记清。<br>（性格气质需要综合命局的五行、十神、用神等特质综合评判，此处仅提供癸水日主维度的特质参考，需知癸水越旺，则癸水特性越明显）</p><p>癸水名人<br>刘德华、朱茵、霍英东、林青霞、苏东坡、王阳明、韩愈、洛克菲勒、比尔盖茨</p><p>癸水类象<br>海王星、春雨、井、地下室、隐士、潜水员、乞丐、肾脏、生殖系统、骨髓、唾液、梅花、企鹅、笔墨</p><p>《滴天髓》论癸水<br>癸水至弱，达于天津，得龙而运，功化斯神；<br>不愁火土，不论庚辛，合戊见火，化象斯真。</p><p>《渊海子平》论癸水<br>癸水应非雨露麽，根通亥子即江河；<br>柱无坤坎身还弱，局有财官不尚多；<br>申子辰全成上格，午寅戌备要中和；<br>假饶火土生深夏，西北行程岂太过。</p>'	
			  };



  var nian = {'甲子':'1','乙丑':'2','丙寅':'3','丁卯':'4','戊辰':'5','己巳':'6','庚午':'7','辛未':'8','壬申':'9','癸酉':'10','甲戌':'11','乙亥':'12','丙子':'13','丁丑':'14','戊寅':'15','己卯':'16','庚辰':'17','辛巳':'18','壬午':'19','癸未':'20','甲申':'21','乙酉':'22','丙戌':'23','丁亥':'24','戊子':'25','己丑':'26','庚寅':'27','辛卯':'28','壬辰':'29','癸巳':'30','甲午':'31','乙未':'32','丙申':'33','丁酉':'34','戊戌':'35','己亥':'36','庚子':'37','辛丑':'38','壬寅':'39','癸卯':'40','甲辰':'41','乙巳':'42','丙午':'43','丁未':'44','戊申':'45','己酉':'46','庚戌':'47','辛亥':'48','壬子':'49','癸丑':'50','甲寅':'51','乙卯':'52','丙辰':'53','丁巳':'54','戊午':'55','己未':'56','庚申':'57','辛酉':'58','壬戌':'59','癸亥':'60', };
  var yue = {'1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9','10':'10','11':'11','12':'12',  '-1':'1','-2':'2','-3':'3','-4':'4','-5':'5','-6':'6','-7':'7','-8':'8','-9':'9','-10':'10','-11':'11','-12':'12',};
  var shi = {'子':'1','丑':'2','寅':'3','卯':'4','辰':'5','巳':'6','午':'7','未':'8','申':'9','酉':'10','戌':'11','亥':'12',};	
  var nan = {'1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','0':'9',};
  var nv  = {'1':'9','2':'8','3':'7','4':'6','5':'5','6':'4','7':'3','8':'2','0':'1',};
  var nans = {'1':'一','2':'二','3':'三','4':'四','5':'五','6':'六','7':'七','8':'八','0':'九',};
  var nvs  = {'1':'九','2':'八','3':'七','4':'六','5':'五','6':'四','7':'三','8':'二','0':'一',};
  var nanxw  = {'1':'申脉','2':'照海','3':'外关','4':'临泣','5':'照海','6':'公孙','7':'后溪','8':'内关','9':'列缺'};
  var nvxw   = {'1':'申脉','2':'照海','3':'外关','4':'临泣','5':'内关','6':'公孙','7':'后溪','8':'内关','9':'列缺'};
  var nang  = {'1':'坎卦','2':'坤卦','3':'震卦','4':'巽卦','5':'寄坤','6':'乾卦','7':'兑卦','8':'艮卦','9':'离卦'};
  var nvg   = {'1':'坎卦','2':'坤卦','3':'震卦','4':'巽卦','5':'寄艮','6':'乾卦','7':'兑卦','8':'艮卦','9':'离卦'};
  var nangs = {'1':'☵','2':'☷','3':'☳','4':'☴','5':'☷','6':'☰','7':'☱','8':'☶','9':'☲'};
  var nvgs  = {'1':'☵','2':'☷','3':'☳','4':'☴','5':'☶','6':'☰','7':'☱','8':'☶','9':'☲'};
  var xwgw  = {'申脉':'坎','照海':'坤','外关':'震','临泣':'巽','公孙':'乾','后溪':'兑','内关':'艮','列缺':'离'};
  var xwxx  = {
  '申脉':'[人体] 肾脏、膀肢、泌尿系统、性器官、血液、血液循环系统、耳、背、腰、背脊骨。<br>[疾病] 肾、膀胱、泌尿系统疾病、肾冷、水泻、消渴症、血液病、出血症、兔疫系统疾病、性病、遗精、阳萎、生殖器疾病、中毒、病毒性疾病、耳痛、腰背疾病、心脏病、水肿病。',
  '照海':'[人体] 腹部、胃、消化器、肉、右肩。<br>[疾病] 腹部、肠胃、消化道之疾、饮食停滞、湿重浮肿、皮肤、肌肤病、湿疹、疣、晕病、中气虚弱、劳累疲乏、慢性病、癌症。',
  '外关':'[人体] 足、腿部、肝脏、神经、筋、左肋、右肩臂、头发。<br>[疾病] 足疾、肝经之疾、肝火旺、肝炎、精神病、狂躁病、多动症、神经衰弱、歇斯底理症、羊癫病、神经过敏、惊吓病、妇科病、疼痛性症状、剧烈性症状、咳嗽、声带咽喉病症。',
  '临泣':'[人体] 头发、神经、气管、胆经、肱股、呼吸器官、食道、肠道、左肩、淋巴系统、血管。<br>[疾病] 胆疾、股肱之疾、中风、肠疾胀气、伤风、感冒、受凤、风湿、传染、坐骨神经痛、神经痛、神经炎、寒痹症、抽筋、胯股病、支气管炎、哮喘、左肩痛、淋巴疾病、优郁症、血管症。病情不稳定。',
  '公孙':'[人体] 头、首、胸部，大肠、肺、右足、右下腹、精液、男性生殖器、身体健壮、体寒骨瘦之人。<br>[疾病] 头面之疾、筋骨疾、肺疾、骨病、寒症、硬性疾病、老病、急性病、变化异常之病、结肠病、便塞壅结。',
  '后溪':'[人体] 口、舌，肺、痰、涎、气管、口角、咽喉、颊骨、牙齿、右肋、肛门、右肩臂。<br>[疾病] 口、舌、喉、牙齿之疾、咳嗽、痰喘、胸部、肺部疾病、食欲不振、膀胱疾病、外伤、肛门疾病、性病、贫血、低血压、手术、金属刃具致伤，皮肤病、气管疾病、头部疾病、破相。',
  '内关':'[人体] 鼻、背、手背、指关节、骨、脾、趾、皮、手、脚背、膝关节、肘关节、左足、颧骨、乳房。<br>[疾病] 脾胃病、不食虚胀、鼻炎、手脚背之疾、麻木病、关节病、手指疾、肿瘤、结石、消化系统病、气血不通症、血液循环不定。',
  '列缺':'[人体] 眼目、心脏、视力、红血球、血液、乳房、上焦、头面、喉、小肠。<br>[疾病] 眼病、视力疾病、心脏病、火烧伤、烫伤、放射性疾病、乳腺疾病、发烧、炎症、血液病、妇科病。囊肿扩散性病疾、肥大症（前列腺肥大，增生、乳腺增生、心脏肥大）、血压疾病。'};
  var js=(Number(nian[lunar.getYearInGanZhi()]-1)+Number(yue[lunar.getMonth()]-1)+Number(lunar.getDay()-1)+Number(shi[bazi.getTimeZhi()]-1)+Number(nian[nownl.getYearInGanZhi()]-1)+Number(yue[nownl.getMonth()]-1)+Number(nownl.getDay()-1)+Number(shi[nowbz.getTimeZhi()]-1))%9;
  var change  = {'元男':''+nanxw[nan[js]]+'穴&emsp;'+nans[js]+'&emsp;'+nang[nan[js]]+'&emsp;'+nangs[nan[js]]+'','元女':''+nvxw[nv[js]]+'穴&emsp;'+nvs[js]+'&emsp;'+nvg[nv[js]]+'&emsp;'+nvgs[nv[js]]+'',};
  var changexw  = {'元男':''+nanxw[nan[js]]+'','元女':''+nvxw[nv[js]]+'',};//穴位
  var changegw  = {'元男':''+xwgw[nanxw[nan[js]]]+'','元女':''+xwgw[nvxw[nv[js]]]+'',};//穴位→宫位
  var changexx  = {'元男':''+xwxx[nanxw[nan[js]]]+'','元女':''+xwxx[nvxw[nv[js]]]+'',};//穴位详情



      var s = '';
	  
$('#zhenjiu').html('<table style="margin:0px 2% 7px 2%;border:0px;">'+
'<tr><th style="padding:5px 1%;width:49px;border-top:0px;">生辰</th><td style="border-top:0px;">'+lunar.getYearInGanZhi()+'年&ensp;' +lunar.getMonthInChinese() + '月' +lunar.getDayInChinese() + '&ensp;'+bazi.getTimeZhi()+'时</td></tr>'+
'<tr><th style="padding:5px 1%;">用时</th><td style="font-size:15px;">'+nownl.getYearInGanZhi()+'年&ensp;' +nownl.getMonthInChinese() + '月' +nownl.getDayInChinese() + '&ensp;'+nowbz.getTimeZhi()+'时</td></tr>'+
'<tr><th style="padding:5px 1%;">穴位</th><td>'+change[riGan]+'</td></tr>'+
'<tr><th style="padding:5px 1%;line-height:22.68px;">'+changegw[riGan]+'卦<br>详情</th><td style="padding:5px 1%;font-size:15px;text-align:left;">'+changexx[riGan]+'</td></tr>'+
''+
''+
''+
'</table>'); //针灸



      s += "<div id='saveneirong' style='display: none;'>"+
"<input type='text' id='sitename1' onkeyup=this.value=this.value.replace(/[^a-zA-Z0-9\u4E00-\u9FA5]/g,'') onbeforepaste=this.value=this.value.replace(/[^a-zA-Z0-9\u4E00-\u9FA5]/g,'') placeholder='标题' style='text-indent:3.1px;margin:0px 2% 7px 2%;width:96%;height:37px;font-size:16px;border:1px solid #c6c6c6;' />"+
"<input style='display:none' type='text' id='xingbie1' value='传统 "+riGans+"'><input style='display:none' type='text' id='fenlei1' value=''><input type='text' id='time1' style='display:none;' />"+
"<textarea id='shuoming1' style='text-indent:3.1px;resize:none;margin:0px 2% 3px 2%;width:96%;height:139px;font-size:16px;border:1px solid #c6c6c6;'  placeholder='详细说明'></textarea>"+
"<div class='plr pb' style=''><div class='wrap'> <div class='pinp br'>  <a target='iframesave' href='save_bazi.html' onclick=save('skyx_bazi','bazi',1)  class='lbut'>保存</a> </div>  <div class='pinp '>  <a onclick=sqsave(); class='lbut'>返回</a> </div> </div> </div></div>";







    s += '<textarea id="other1" style="display: none;">';
    s += '';
    s += '<table style="width:100%;">';
    s += '<tr><td colspan="4">'+solar.getYear()+'-'+solar.getMonth()+'-'+solar.getDay()+' '+solar.getHour()+':'+solar.getMinute()+'&ensp;'+lunar.getYearInChinese()+'年 ' +lunar.getMonthInChinese() + '月' +lunar.getDayInChinese() + '</td></tr>';
    s += '<tr><td width=25%>'+bazi.getYearShiShenGan()+'</td><td width=25%>'+bazi.getMonthShiShenGan()+'</td><td width=25%>'+riGan+'</td><td width=25%>'+bazi.getTimeShiShenGan()+'</td></tr>';
    s += '<tr><td>'+bazi.getYear()+'</td><td>'+bazi.getMonth()+'</td><td>'+bazi.getDay()+'</td><td>'+bazi.getTime()+'</td></tr>';
    s += '<tr><td>'+bazi.getYearShiShenZhi()+'</span></td><td>'+bazi.getMonthShiShenZhi()+'</span></td><td>'+bazi.getDayShiShenZhi()+'</span></td><td>'+bazi.getTimeShiShenZhi()+'</span></td></tr>';
    s += '<tr><td>'+bazi.getYearDiShi()+'</td><td>'+bazi.getMonthDiShi()+'</td><td>'+bazi.getDayDiShi()+'</td><td>'+bazi.getTimeDiShi()+'</td></tr>';
    s += '<tr><td>'+bazi.getYearNaYin()+'</td><td>'+bazi.getMonthNaYin()+'</td><td>'+bazi.getDayNaYin()+'</td><td>'+bazi.getTimeNaYin()+'</td></tr>';
    s += '<tr><td colspan="2">'+yun.getStartYear()+'年'+yun.getStartMonth()+'个月'+yun.getStartDay()+'天起运</td><td colspan="2">日空'+bazi.getDayXunKong()+'</td></tr>';
    s += '</table>';
    s += '<div style="overflow-x:auto;"> <table style="border:0px;width:100%;margin-top:6px;"><tr>';
	var daYunArr = yun.getDaYun();
	for (var i=0, j=daYunArr.length; i<j; i++) {
	  var daYun = daYunArr[i];
	s += '<td>' + daYun.getStartYear() + '</td>';
	}
	s += '</tr><tr>';
	var daYunArr = yun.getDaYun();
	for (var i=0, j=daYunArr.length; i<j; i++) {
	  var daYun = daYunArr[i];
	s += '<td style=white-space:nowrap;>' + daYun.getStartAge() + '岁</td>';
	}
	s += '</tr><tr>';
	var daYunArr = yun.getDaYun();
	for (var i=0, j=daYunArr.length; i<j; i++) {
	  var daYun = daYunArr[i];
	s += '<td>' + daYun.getGanZhi() + '<br></td>';
	}


	s += '</tr><tr>';
  s += '<td>';
var LiuNianArr = daYunArr[0].getLiuNian();
for (var i=0, j=LiuNianArr.length; i<j; i++) {
  var liuNian = LiuNianArr[i];
  s += ''+liuNian.getGanZhi()+'<br>';
}
  s += '</td><td>';
var LiuNianArr = daYunArr[1].getLiuNian();
for (var i=0, j=LiuNianArr.length; i<j; i++) {
  var liuNian = LiuNianArr[i];
  s += ''+liuNian.getGanZhi()+'<br>';
}
  s += '</td><td>';
var LiuNianArr = daYunArr[2].getLiuNian();
for (var i=0, j=LiuNianArr.length; i<j; i++) {
  var liuNian = LiuNianArr[i];
  s += ''+liuNian.getGanZhi()+'<br>';
}
  s += '</td><td>';
var LiuNianArr = daYunArr[3].getLiuNian();
for (var i=0, j=LiuNianArr.length; i<j; i++) {
  var liuNian = LiuNianArr[i];
  s += ''+liuNian.getGanZhi()+'<br>';
}
  s += '</td><td>';
var LiuNianArr = daYunArr[4].getLiuNian();
for (var i=0, j=LiuNianArr.length; i<j; i++) {
  var liuNian = LiuNianArr[i];
  s += ''+liuNian.getGanZhi()+'<br>';
}
  s += '</td><td>';
var LiuNianArr = daYunArr[5].getLiuNian();
for (var i=0, j=LiuNianArr.length; i<j; i++) {
  var liuNian = LiuNianArr[i];
  s += ''+liuNian.getGanZhi()+'<br>';
}
  s += '</td><td>';
var LiuNianArr = daYunArr[6].getLiuNian();
for (var i=0, j=LiuNianArr.length; i<j; i++) {
  var liuNian = LiuNianArr[i];
  s += ''+liuNian.getGanZhi()+'<br>';
}
  s += '</td><td>';
var LiuNianArr = daYunArr[7].getLiuNian();
for (var i=0, j=LiuNianArr.length; i<j; i++) {
  var liuNian = LiuNianArr[i];
  s += ''+liuNian.getGanZhi()+'<br>';
}
  s += '</td><td>';
var LiuNianArr = daYunArr[8].getLiuNian();
for (var i=0, j=LiuNianArr.length; i<j; i++) {
  var liuNian = LiuNianArr[i];
  s += ''+liuNian.getGanZhi()+'<br>';
}
  s += '</td><td>';
var LiuNianArr = daYunArr[9].getLiuNian();
for (var i=0, j=LiuNianArr.length; i<j; i++) {
  var liuNian = LiuNianArr[i];
  s += ''+liuNian.getGanZhi()+'<br>';
}
  s += '</td><td>';
var LiuNianArr = daYunArr[10].getLiuNian();
for (var i=0, j=LiuNianArr.length; i<j; i++) {
  var liuNian = LiuNianArr[i];
  s += ''+liuNian.getGanZhi()+'<br>';
}
	s += '</td>';

	
	
    s += '</tr></table></div> </textarea>';
	
	

//var dd = Lunar.fromDate(new Date());
var ddxs = LunarYear.fromYear(nownl.getYear());
var xusui=Number(ddxs.next(1))-Number(lunar.getYear());
 
	  
      s += '<style>.fonts{font-weight:900;font-size:19.9px;}</style>';
      s += '<table class="table1">';
      s += '<tr>';
      s += '<th class="th2" style="width:10%">公历</th>';
      s += '<td colspan="8" class="td2">'+solar.getYear()+'年'+solar.getMonth()+'月'+solar.getDay()+'日'+solar.getHour()+'时'+solar.getMinute()+'分 虚龄'+xusui+'岁<u class="saveimgs"><a id="open" onclick="sqsave();" style="display:none;"></a></u></td>';
      s += '</tr>';
      s += '<tr>';
      s += '<th class="th1">农历</th>';
      s += '<td colspan="8" class="td1"><span id="shengxiao">'+lunar.getYearShengXiaoExact()+'年</span> ' +lunar.getMonthInChinese() + '月 ' +lunar.getDayInChinese() + ' <span id="xingxiu">['+lunar.getXiu()+']</span> <span id="benmingfo">'+bmf[lunar.getYearShengXiaoExact()]+'</span></td>';
      s += '</tr>';
	  var padding = function(n){
  	  return (n<10?'0':'') + n;
  	};
    var prevJieQi = lunar.getPrevJieQi();
    var jieQiSolar = prevJieQi.getSolar();
      s += '<tr id="jieqi">';
      s += '<th class="th2">'+jq[prevJieQi.getName()]+'</th>';
      s += '<td colspan="8" class="td2">';
    s += '' + prevJieQi.getName() + ' ' + jieQiSolar.getMonth() + '-' + jieQiSolar.getDay() + ' ' + padding(jieQiSolar.getHour()) + ':' + padding(jieQiSolar.getMinute()) + ''; //这个节气
  		
  	var nextJieQi = lunar.getNextJieQi();
  	jieQiSolar = nextJieQi.getSolar();
  	s += ' ~ ' + jieQiSolar.getMonth() + '-' + jieQiSolar.getDay() + ' ' + padding(jieQiSolar.getHour()) + ':' + padding(jieQiSolar.getMinute()) + ''; //下个节气';
    s += '</tr>';
	  


	s += '<tr>';
	s += '<th class="th1">起运</th>';
	s += '<td colspan="8" class="td1" id="qylp">';
	if(yun.getStartYear()>0){
	  s += yun.getStartYear()+'年'
	}
	if(yun.getStartMonth()>0){
	  s += yun.getStartMonth()+'个月'
	}
	if(yun.getStartDay()>0){
	  s += yun.getStartDay()+'天'
	}
	s += '后起运 '+yun.getStartSolar().toYmd()+'</td>';
	s += '</tr>';

	  
      s += '<tr>';
      s += '<th style="width:16%" class="th2">主星</th>';
      s += '<td colspan="2" style="width:21%" id="niangan" class="td2">'+bazi.getYearShiShenGan()+'</td>';
      s += '<td colspan="2" style="width:21%" id="yuegan" class="td2">'+bazi.getMonthShiShenGan()+'</td>';
      s += '<td colspan="2" style="width:21%" class="td2">'+riGan+'</td>';
      s += '<td colspan="2" style="width:21%" id="shigan" class="td2">'+bazi.getTimeShiShenGan()+'</td>';
      s += '</tr>';
	  
	  
      //s += '<tr>';
      //s += '<th>八字</th>';
      //s += '<td colspan="2">'+lunar.getYearInGanZhiExact()+'</td>';
      //s += '<td colspan="2">'+lunar.getMonthInGanZhiExact()+'</td>';
      //s += '<td colspan="2">'+bazi.getDay()+'</td>';
      //s += '<td colspan="2">'+bazi.getTime()+'</td>';
      //s += '</tr>';
      s += '<tr>';
      s += '<th class="th1" valign="top">四柱<br><div style="font-size:8px;color:#FF9999;line-height:9px;">点击<br>查看</div></th>';
      s += '<td colspan="2" style="line-height:22.68px;" class="td1" id="tgxynian">'+bztg[lunar.getYearGanExact()]+'<br>'+bzdz[lunar.getYearZhiExact()]+'</td>';
      s += '<td colspan="2" style="line-height:22.68px;" class="td1" id="tgxyyue">'+bztg[lunar.getMonthGanExact()]+'<br>'+bzdz[lunar.getMonthZhiExact()]+'</td>';
      s += '<td colspan="2" style="line-height:22.68px;" class="td1" id="tgxyri">'+bztg[bazi.getDayGan()]+'<br>'+bzdz[bazi.getDayZhi()]+'</td>';
      s += '<td colspan="2" style="line-height:22.68px;" class="td1" id="tgxyshi">'+bztg[bazi.getTimeGan()]+'<br>'+bzdz[bazi.getTimeZhi()]+'</td>';
      s += '</tr>';
      s += '<tr>';
      s += '<th class="th2" valign="top">藏干</th>';
      s += '<td style="text-align:right;border-right:0;padding-right:0px;" valign="top" id="nianzhi1" class="td2">'+bazi.getYearHideGans()+'</td><td style="text-align:left;border-left:0;white-space:nowrap;padding-left:0px;" valign="top" id="nianzhi2" class="td2">'+lunar.getBaZiShiShenYearZhi()+'</td>';
      s += '<td style="text-align:right;border-right:0;padding-right:0px;" valign="top" id="yuezhi1" class="td2">'+bazi.getMonthHideGans()+'</td><td style="text-align:left;border-left:0;white-space:nowrap;padding-left:0px;" valign="top" id="yuezhi2" class="td2">'+lunar.getBaZiShiShenMonthZhi()+'</td>';
      s += '<td style="text-align:right;border-right:0;padding-right:0px;" valign="top" id="rizhi1" class="td2">'+bazi.getDayHideGans()+'</td><td style="text-align:left;border-left:0;white-space:nowrap;padding-left:0px;" valign="top" id="rizhi2" class="td2">'+lunar.getBaZiShiShenDayZhi()+'</td>';
      s += '<td style="text-align:right;border-right:0;padding-right:0px;" valign="top" id="shizhi1" class="td2">'+bazi.getTimeHideGans()+'</td><td style="text-align:left;border-left:0;white-space:nowrap;padding-left:0px;" valign="top" id="shizhi2" class="td2">'+lunar.getBaZiShiShenTimeZhi()+'</td>';
      s += '</tr>';
      s += '<!--tr>';
      s += '<th>地支</th>';
      s += '<td>'+bazi.getYearShiShenZhi()[0]+'</td>';
      s += '<td>'+bazi.getMonthShiShenZhi()[0]+'</td>';
      s += '<td>'+bazi.getDayShiShenZhi()[0]+'</td>';
      s += '<td>'+bazi.getTimeShiShenZhi()[0]+'</td>';
      s += '</tr>';

      s += '<tr>';
      s += '<th>五行</th>';
      s += '<td colspan="2">('+bazi.getYearWuXing()+')<br>'+tiandiwuxing(bazi.getYear().substr(0,1))+'<br>'+tiandiwuxing(bazi.getYear().substr(-1))+'</td>';
      s += '<td colspan="2">('+bazi.getMonthWuXing()+')<br>'+tiandiwuxing(bazi.getMonth().substr(0,1))+'<br>'+tiandiwuxing(bazi.getMonth().substr(-1))+'</td>';
      s += '<td colspan="2">('+bazi.getDayWuXing()+')<br>'+tiandiwuxing(bazi.getDay().substr(0,1))+'<br>'+tiandiwuxing(bazi.getDay().substr(-1))+'</td>';
      s += '<td colspan="2">('+bazi.getTimeWuXing()+')<br>'+tiandiwuxing(bazi.getTime().substr(0,1))+'<br>'+tiandiwuxing(bazi.getTime().substr(-1))+'</td>';
      s += '</tr-->';
	    
      s += '<tr>';
      s += '<th class="th1">星运</th>';
      s += '<td colspan="2" class="td1" id="changshengxynian">'+bazi.getYearDiShi()+'</td>';
      s += '<td colspan="2" class="td1" id="changshengxyyue">'+bazi.getMonthDiShi()+'</td>';
      s += '<td colspan="2" class="td1" id="changshengxyri">'+bazi.getDayDiShi()+'</td>';
      s += '<td colspan="2" class="td1" id="changshengxyshi">'+bazi.getTimeDiShi()+'</td>';
      s += '</tr>';
  var CHANG_SHENG_OFFSET = {'甲':1,'丙':10,'戊':10,'庚':7,'壬':4,'乙':6,'丁':9,'己':9,'辛':0,'癸':3};
  function getChangSheng(gan, ganIndex, zhiIndex){
    var offset = CHANG_SHENG_OFFSET[gan];
    var index = offset + (ganIndex%2==0?zhiIndex:-zhiIndex);
    if(index>=12){
      index -= 12;
    }
    if(index<0){
      index += 12;
    }
    return EightChar.CHANG_SHENG[index];
  }
    s += '<tr>';
    s += '<th class="th2">自坐</th>';
    s += '<td colspan="2" class="td2" id="changshengzznian">' + getChangSheng(bazi.getYearGan(), lunar.getYearGanIndexExact(), lunar.getYearZhiIndexExact()) + '</td>';
    s += '<td colspan="2" class="td2" id="changshengzzyue">' + getChangSheng(bazi.getMonthGan(), lunar.getMonthGanIndexExact(), lunar.getMonthZhiIndexExact()) + '</td>';
    s += '<td colspan="2" class="td2" id="changshengzzri">' + getChangSheng(bazi.getDayGan(), 2 == bazi.getSect() ? lunar.getDayGanIndexExact2() : lunar.getDayGanIndexExact(), 2 == bazi.getSect() ? lunar.getDayZhiIndexExact2() : lunar.getDayZhiIndexExact()) + '</td>';
    s += '<td colspan="2" class="td2" id="changshengzzshi">' + getChangSheng(bazi.getTimeGan(), lunar.getTimeGanIndex(), lunar.getTimeZhiIndex()) + '</td>';
    s += '</tr>';
	
      s += '<tr>';
      s += '<th class="th1">空亡</th>';
      s += '<td colspan="2" class="td1">'+bazi.getYearXunKong()+'</td>';
      s += '<td colspan="2" class="td1">'+bazi.getMonthXunKong()+'</td>';
      s += '<td colspan="2" class="td1"><font color=red>'+bazi.getDayXunKong()+'</font></td>';
      s += '<td colspan="2" class="td1">'+bazi.getTimeXunKong()+'</td>';
      s += '</tr>';
      s += '<tr>';
      s += '<th class="th2">纳音</th>';
      s += '<td colspan="2" class="td2" id="nayinnian">'+bazi.getYearNaYin()+'</td>';
      s += '<td colspan="2" class="td2" id="nayinyue">'+bazi.getMonthNaYin()+'</td>';
      s += '<td colspan="2" class="td2" id="nayinri">'+bazi.getDayNaYin()+'</td>';
      s += '<td colspan="2" class="td2" id="nayinshi">'+bazi.getTimeNaYin()+'</td>';
      s += '</tr>';
      //s += '<tr>';
      //s += '<th>五行</th>';
      //s += '<td colspan="2">'+bazi.getYearWuXing()+'</td>';
      //s += '<td colspan="2">'+bazi.getMonthWuXing()+'</td>';
      //s += '<td colspan="2">'+bazi.getDayWuXing()+'</td>';
      //s += '<td colspan="2">'+bazi.getTimeWuXing()+'</td>';
      //s += '</tr>';
	  
	  







	  
	  
	  
	  // 年柱神煞
	  var shenShaYear = [];
	  // 月柱神煞
	  var shenShaMonth = [];
	  // 日柱神煞
	  var shenShaDay = [];
	  // 时柱神煞
	  var shenShaTime = [];

	  
	  //四柱天干顺序同时出现
	  var shenShaGanGan = {     
	    '<span id="天三奇" class="yi">天三奇</span>' :['甲戊庚', '庚戊甲'],
	    '<span id="地三奇" class="yi">地三奇</span>' :['乙丙丁', '丁丙乙'],	  
	    '<span id="人三奇" class="yi">人三奇</span>' :['壬癸辛', '辛癸壬']	 
	  };
	  
	  //四柱地支顺序同时出现
	  var shenShaZhiZhi = {
	    '<span id="三台" class="yi">三台</span>' :['寅辰申', '卯巳午', '亥子酉'] 
	  };
	     
	  // 年日天干查地支
	  var shenShaYearDayGanZhi = {
	    '<span id="天乙" class="yi">天乙</span>' : ['甲丑', '甲未', '乙子', '乙申', '丙亥', '丙酉', '丁亥', '丁酉', '戊丑', '戊未', '己子', '己申', '庚午', '庚寅', '庚丑', '庚未', '辛午', '辛寅', '壬卯', '壬巳', '癸卯', '癸巳'],
	    '<span id="太极" class="yi">太极</span>' : ['甲子', '甲午', '乙子', '乙午', '丙卯', '丙酉', '丁卯', '丁酉', '戊辰', '戊戌', '戊丑', '戊未', '己辰', '己戌', '己丑', '己未', '庚亥', '庚寅', '辛亥', '辛寅', '壬申', '壬巳', '癸申', '癸巳'],
	    '<span id="天印" class="yi">天印</span>' : ['甲寅', '乙亥', '丙戌', '丁酉', '戊申', '己未', '庚午', '辛巳', '壬辰', '癸卯'],
	    '<span id="天厨" class="yi">天厨</span>' : ['甲巳', '乙午', '丙巳', '丁午', '戊申', '己酉', '庚亥', '辛子', '壬寅', '癸卯'],
	    '<span id="天官" class="yi">天官</span>' : ['甲未', '乙辰', '丙巳', '丁酉', '丁寅', '戊戌', '戊丑', '己卯', '己戌', '庚丑', '庚亥', '辛申', '壬寅', '壬酉', '癸午'],	  
	    '<span id="文昌" class="yi">文昌</span>' : ['甲巳', '乙午', '丙申', '丁酉', '戊申', '己酉', '庚亥', '辛子', '壬寅', '癸卯'],
	    '<span id="国印" class="yi">国印</span>' : ['甲戌', '甲亥', '甲酉', '乙亥', '乙子', '乙戌', '丙丑', '丙子', '丙寅', '丁寅', '丁丑', '丁卯', '戊丑', '戊子', '戊寅', '己寅', '己丑', '己卯', '庚辰', '庚卯', '庚巳', '辛巳', '辛辰', '辛午', '壬未', '壬午', '壬申', '癸申', '癸未', '癸酉'],
	    '<span id="福星" class="yi">福星</span>' : ['甲寅', '甲子', '乙卯', '乙丑', '丙寅', '丙子', '丁亥', '丁酉', '戊申', '己未', '庚午', '辛巳', '壬辰', '癸卯', '癸丑'],
	    '<span id="金舆" class="yi">金舆</span>' : ['甲辰', '乙巳', '丙未', '丁申', '戊未', '己申', '庚戌', '辛亥', '壬丑', '癸寅'],
	    //'<span id="穷煞" class="ji">穷煞</span>' : ['甲巳', '乙寅', '丙子', '丁戌', '戊申', '己午', '庚卯', '辛丑', '壬亥', '癸酉'],
	    '<span id="破祖" class="ji">破祖</span>' : ['甲午', '乙午', '丙申', '丁申', '戊戌', '己戌', '庚子', '辛子', '壬寅', '癸寅']
	  };
	  
	  // 年日天干查干支
	  var shenShaYearGanDayGanGanZhi = {    
	     '<span id="学堂" class="yi">学堂</span>' : ['甲己亥', '乙壬午', '丙丙寅', '丁丁酉', '戊戊申', '己己酉', '庚辛巳', '辛甲子', '壬甲申', '癸乙卯'], 
	     '<span id="词馆" class="yi">词馆</span>' : ['甲庚寅', '乙辛卯', '丙乙巳', '丁戊午', '戊丁巳', '己庚午', '庚壬申', '辛癸酉', '壬癸亥', '癸壬戌']
	  };
	   
	  //年柱纳音查地支
	  var shenShaYearNaYinDiZhi = {     
	    '<span id="学堂纳音" class="yi">学堂[纳音]</span>' : ['海中金巳', '剑锋金巳', '白蜡金巳', '沙中金巳', '金箔金巳', '钗钏金巳', '大林木亥', '杨柳木亥', '松柏木亥', '平地木亥', '桑柘木亥', '石榴木亥', '涧下水申', '泉中水申', '长流水申', '天河水申', '大溪水申', '大海水申', '霹雳火寅', '山下火寅', '覆灯火寅', '炉中火寅', '山头火寅', '天上火寅', '壁上土申', '大驿土申', '沙中土申', '路旁土申', '城头土申', '屋上土申'],
	    '<span id="词馆纳音" class="yi">词馆[纳音]</span>' : ['海中金申', '剑锋金申', '白蜡金申', '沙中金申', '金箔金申', '钗钏金申', '大林木寅', '杨柳木寅', '松柏木寅', '平地木寅', '桑柘木寅', '石榴木寅', '涧下水亥', '泉中水亥', '长流水亥', '天河水亥', '大溪水亥', '大海水亥', '霹雳火巳', '山下火巳', '覆灯火巳', '炉中火巳', '山头火巳', '天上火巳', '壁上土亥', '大驿土亥', '沙中土亥', '路旁土亥', '城头土亥', '屋上土亥']
	  };
	   
	  //年柱纳音查干支
	  var shenShaYearNaYinGanZhi = {     
	    //'<span id="正学堂" class="yi">正学堂</span>' : ['海中金辛巳', '剑锋金辛巳', '白蜡金辛巳', '沙中金辛巳', '金箔金辛巳', '钗钏金辛巳', '大林木己亥', '杨柳木己亥', '松柏木己亥', '平地木己亥', '桑柘木己亥', '石榴木己亥', '涧下水甲申', '泉中水甲申', '长流水甲申', '天河水甲申', '大溪水甲申', '大海水甲申', '霹雳火丙寅', '山下火丙寅', '覆灯火丙寅', '炉中火丙寅', '山头火丙寅', '天上火丙寅', '壁上土戊申', '大驿土戊申', '沙中土戊申', '路旁土戊申', '城头土戊申', '屋上土戊申'],
	    //'<span id="正词馆" class="yi">正词馆</span>' : ['海中金壬申', '剑锋金壬申', '白蜡金壬申', '沙中金壬申', '金箔金壬申', '钗钏金壬申', '大林木庚寅', '杨柳木庚寅', '松柏木庚寅', '平地木庚寅', '桑柘木庚寅', '石榴木庚寅', '涧下水癸亥', '泉中水癸亥', '长流水癸亥', '天河水癸亥', '大溪水癸亥', '大海水癸亥', '霹雳火乙巳', '山下火乙巳', '覆灯火乙巳', '炉中火乙巳', '山头火乙巳', '天上火乙巳', '壁上土丁亥', '大驿土丁亥', '沙中土丁亥', '路旁土丁亥', '城头土丁亥', '屋上土丁亥']	  
	  };	
	  
	  // 年日地支查地支
	  var shenShaYearDayZhiZhi = {
	    '<span id="六厄" class="ji">六厄</span>' : ['子卯', '丑子', '寅酉', '卯午', '辰卯', '巳子', '午酉', '未午', '申卯', '酉子', '戌酉', '亥午'], 
	    '<span id="孤辰" class="ji">孤辰</span>' : ['子寅', '丑寅', '寅巳', '卯巳', '辰巳', '巳申', '午申', '未申', '申亥', '酉亥', '戌亥', '亥寅'], 
	    '<span id="寡宿" class="ji">寡宿</span>' : ['子戌', '丑戌', '寅丑', '卯丑', '辰丑', '巳辰', '午辰', '未辰', '申未', '酉未', '戌未', '亥戌'], 
	    '<span id="咸池" class="ji">咸池</span>' : ['子酉', '丑午', '寅卯', '卯子', '辰酉', '巳午', '午卯', '未子', '申酉', '酉午', '戌卯', '亥子'],       
	    '<span id="亡神" class="ji">亡神</span>' : ['子亥', '丑申', '寅巳', '卯寅', '辰亥', '巳申', '午巳', '未寅', '申亥', '酉申', '戌巳', '亥寅'],      
	    '<span id="劫煞" class="ji">劫煞</span>' : ['子巳', '丑寅', '寅亥', '卯申', '辰巳', '巳寅', '午亥', '未申', '申巳', '酉寅', '戌亥', '亥申'],       
	    '<span id="灾煞" class="ji">灾煞</span>' : ['子午', '丑卯', '寅子', '卯酉', '辰午', '巳卯', '午子', '未酉', '申午', '酉卯', '戌子', '亥酉'],       
	    '<span id="驿马" class="yi">驿马</span>' : ['子寅', '丑亥', '寅申', '卯巳', '辰寅', '巳亥', '午申', '未巳', '申寅', '酉亥', '戌申', '亥巳'],
	    '<span id="华盖" class="yi">华盖</span>' : ['子辰', '丑丑', '寅戌', '卯未', '辰辰', '巳丑', '午戌', '未未', '申辰', '酉丑', '戌戌', '亥未'],
	    '<span id="墓杀" class="ji">墓杀</span>' : ['子辰', '丑丑', '寅戌', '卯未', '辰辰', '巳丑', '午戌', '未未', '申辰', '酉丑', '戌戌', '亥未'],	  
	    '<span id="将星" class="yi">将星</span>' : ['子子', '丑酉', '寅午', '卯卯', '辰子', '巳酉', '午午', '未卯', '申子', '酉酉', '戌午', '亥卯'],
	    '<span id="天罗" class="ji">天罗</span>' : ['戌亥', '亥戌'],
	    '<span id="地网" class="ji">地网</span>' : ['辰巳', '巳辰'],
	    //'<span id="吟呻" class="ji">吟呻</span>' : ['子巳', '午巳', '卯巳', '酉巳'],
	    '<span id="破碎" class="ji">破碎</span>' : ['寅酉', '申酉', '巳酉', '亥酉'],
	    //'<span id="白衣" class="ji">白衣</span>' : ['辰丑', '戌丑', '丑丑', '未丑']	  
	  };
	  
	  //天罗地网(年柱纳音查地支)
	  var shenShaYearNaYinYearDiZhi = {     
	    '<span id="天罗纳音" class="ji">天罗[纳音]</span>' : ['霹雳火戌', '山下火戌', '覆灯火戌', '炉中火戌', '山头火戌', '天上火戌', '霹雳火亥', '山下火亥', '覆灯火亥', '炉中火亥', '山头火亥', '天上火亥'],
	    '<span id="地网纳音" class="ji">地网[纳音]</span>' : ['涧下水辰', '泉中水辰', '长流水辰', '天河水辰', '大溪水辰', '大海水辰', '涧下水巳', '泉中水巳', '长流水巳', '天河水巳', '大溪水巳', '大海水巳', '壁上土辰', '大驿土辰', '沙中土辰', '路旁土辰', '城头土辰', '屋上土辰', '壁上土巳', '大驿土巳', '沙中土巳', '路旁土巳', '城头土巳', '屋上土巳']
	  };
	  
	  //年日纳音查纳音
	  var shenShaYearNaYinDayNaYin = {     
	    '<span id="四大空" class="ji">四大空</span>' : ['海中金涧下水', '海中金泉中水', '海中金长流水', '海中金天河水', '海中金大溪水', '海中金大海水', '炉中火涧下水', '炉中火泉中水', '炉中火长流水', '炉中火天河水', '炉中火大溪水', '炉中火大海水', '大林木涧下水', '大林木泉中水', '大林木长流水', '大林木天河水', '大林木大溪水', '大林木大海水', '路旁土涧下水', '路旁土泉中水', '路旁土长流水', '路旁土天河水', '路旁土大溪水', '路旁土大海水', '剑锋金涧下水', '剑锋金泉中水', '剑锋金长流水', '剑锋金天河水', '剑锋金大溪水', '剑锋金大海水', '沙中金涧下水', '沙中金泉中水', '沙中金长流水', '沙中金天河水', '沙中金大溪水', '沙中金大海水', '山下火涧下水', '山下火泉中水', '山下火长流水', '山下火天河水', '山下火大溪水', '山下火大海水', '平地木涧下水', '平地木泉中水', '平地木长流水', '平地木天河水', '平地木大溪水', '平地木大海水', '壁上土涧下水', '壁上土泉中水', '壁上土长流水', '壁上土天河水', '壁上土大溪水', '壁上土大海水', '金箔金涧下水', '金箔金泉中水', '金箔金长流水', '金箔金天河水', '金箔金大溪水', '金箔金大海水', '泉中水海中金', '泉中水剑锋金', '泉中水白蜡金', '泉中水沙中金', '泉中水金箔金', '泉中水钗钏金', '屋上土海中金', '屋上土剑锋金', '屋上土白蜡金', '屋上土沙中金', '屋上土金箔金', '屋上土钗钏金', '霹雳火海中金', '霹雳火剑锋金', '霹雳火白蜡金', '霹雳火沙中金', '霹雳火金箔金', '霹雳火钗钏金', '松柏木海中金', '松柏木剑锋金', '松柏木白蜡金', '松柏木沙中金', '松柏木金箔金', '松柏木钗钏金', '长流水海中金', '长流水剑锋金', '长流水白蜡金', '长流水沙中金', '长流水金箔金', '长流水钗钏金', '大溪水海中金', '大溪水剑锋金', '大溪水白蜡金', '大溪水沙中金', '大溪水金箔金', '大溪水钗钏金', '沙中土海中金', '沙中土剑锋金', '沙中土白蜡金', '沙中土沙中金', '沙中土金箔金', '沙中土钗钏金', '天上火海中金', '天上火剑锋金', '天上火白蜡金', '天上火沙中金', '天上火金箔金', '天上火钗钏金', '石榴木海中金', '石榴木剑锋金', '石榴木白蜡金', '石榴木沙中金', '石榴木金箔金', '石榴木钗钏金', '大海水海中金', '大海水剑锋金', '大海水白蜡金', '大海水沙中金', '大海水金箔金', '大海水钗钏金']
	  };
	  
	  // 年支查大运流年地支
	  var shenShaYearZhidaYunliuNianZhi = {
	    '<span id="丧门" class="ji">丧门</span>' : ['子寅', '丑卯', '寅辰', '卯巳', '辰午', '巳未', '午申', '未酉', '申戌', '酉亥', '戌子', '亥丑'],
	    '<span id="吊客" class="ji">吊客</span>' : ['子戌', '丑亥', '寅子', '卯丑', '辰寅', '巳卯', '午辰', '未巳', '申午', '酉未', '戌申', '亥酉']
	  };
	  
	  // 年日地支查大运流年地支
	  var shenShaYearZhiDayZhidaYunliuNianZhi = {
	    '<span id="披麻" class="ji">披麻</span>' : ['子酉', '丑戌', '寅亥', '卯子', '辰丑', '巳寅', '午卯', '未辰', '申巳', '酉午', '戌未', '亥申']
	  };
	  
	  //年支查地支
	  var shenShaYearZhiDiZhi = {     
	    '<span id="红鸾" class="yi">红鸾</span>' : ['子卯', '丑寅', '寅丑', '卯子', '辰亥', '巳戌', '午酉', '未申', '申未', '酉午', '戌巳', '亥辰'],  
	    '<span id="天喜" class="yi">天喜</span>' : ['子酉', '丑申', '寅未', '卯午', '辰巳', '巳辰', '午卯', '未寅', '申丑', '酉子', '戌亥', '亥戌'],
	    '<span id="自缢煞" class="ji">自缢煞</span>' : ['子酉', '丑午', '寅未', '卯申', '辰亥', '巳戌', '午丑', '未寅', '申卯', '酉子', '戌巳', '亥辰'],	  
	    '<span id="埋儿杀" class="ji">埋儿杀</span>' : ['子丑', '丑卯', '寅申', '卯丑', '辰卯', '巳申', '午丑', '未卯', '申申', '酉丑', '戌卯', '亥申'],
	    //'<span id="兼刃" class="ji">兼刃</span>' : ['寅戌', '卯亥', '申辰', '酉巳'],
	    '<span id="病符" class="ji">病符</span>' : ['子亥', '丑子', '寅丑', '卯寅', '辰卯', '巳辰', '午巳', '未午', '申未', '酉申', '戌酉', '亥戌'],	  
	    '<span id="吞陷煞" class="ji">吞陷煞</span>' : ['子戌', '丑丑', '丑寅', '卯巳', '卯戌', '辰辰', '巳申', '午寅', '未寅', '申巳', '申戌', '酉戌', '戌寅', '戌酉', '亥寅'],
	    '<span id="攀鞍" class="yi">攀鞍</span>' : ['子丑', '丑戌', '寅未', '卯辰', '辰丑', '巳戌', '午未', '未辰', '申丑', '酉戌', '戌未', '亥辰'],
	    '<span id="大耗" class="ji">大耗</span>' : ['子巳', '丑午', '寅未', '卯申', '辰酉', '巳戌', '午亥', '未子', '申丑', '酉寅', '戌卯', '亥辰'],	  
	    '<span id="小耗" class="ji">小耗</span>' : ['子午', '丑未', '寅申', '卯酉', '辰戌', '巳亥', '午子', '未丑', '申寅', '酉卯', '戌辰', '亥巳']	  
	  };
	  
	  //年支查干支
	  var shenShaYearZhiGanZhi = {
	    //'<span id="年兼刃" class="ji">兼刃</span>' : ['子壬申', '丑癸酉', '辰壬子', '巳癸丑', '午丙寅', '未己卯', '未丁卯', '戌丙午', '亥己未', '亥丁未']
	  };	
	  
	  // 月支查天干或地支
	  var shenShaMonthZhiGanZhi = {    
	    '<span id="天德" class="yi">天德</span>' : ['寅丁', '卯申', '辰壬', '巳辛', '午亥', '未甲', '申癸', '酉寅', '戌丙', '亥乙', '子巳', '丑庚'],
	    '<span id="天德合" class="yi">天德合</span>' : ['寅壬', '卯巳', '辰丁', '巳丙', '午寅', '未己', '申戊', '酉亥', '戌辛', '亥庚', '子申', '丑乙'],
	    '<span id="月德" class="yi">月德</span>' : ['寅丙', '卯甲', '辰壬', '巳庚', '午丙', '未甲', '申壬', '酉庚', '戌丙', '亥甲', '子壬', '丑庚'],
	    '<span id="月德合" class="yi">月德合</span>' : ['寅辛', '卯巳', '辰丁', '巳乙', '午辛', '未己', '申丁', '酉乙', '戌辛', '亥己', '子丁', '丑乙'],	  
	    '<span id="德秀" class="yi"><u>德</u>秀</span>' : ['寅丙', '寅丁', '卯甲', '卯乙', '辰壬', '辰癸', '辰戊', '辰己', '巳庚', '巳辛', '午丙', '午丁', '未甲', '未乙', '申壬', '申癸', '申戊', '申己', '酉庚', '酉辛', '戌丙', '戌丁', '亥甲', '亥乙', '子壬', '子癸', '子戊', '子己', '丑庚', '丑辛'],
	    '<span id="秀德" class="yi">德<u>秀</u></span>' : ['寅戊', '寅癸', '卯丁', '卯壬', '辰丙', '辰辛', '辰甲', '辰己', '巳乙', '巳庚', '午戊', '午癸', '未丁', '未壬', '申丙', '申辛', '申甲', '申己', '戌戊', '戌癸', '亥丁', '亥壬', '子丙', '子辛', '子甲', '子己', '丑乙', '丑庚'],
	    //'<span id="注受" class="yi">注受</span>' : ['寅子', '卯亥', '辰戌', '巳酉', '午戌', '未亥', '申子', '酉丑', '戌寅', '亥卯', '子寅', '丑丑'],
	    '<span id="五鬼" class="ji">五鬼</span>' : ['寅午', '卯未', '辰申', '巳酉', '午戌', '未亥', '申子', '酉丑', '戌寅', '亥卯', '子辰', '丑巳'],
	    '<span id="月破" class="ji">月破</span>' : ['寅申', '卯酉', '辰戌', '巳亥', '午子', '未丑', '申寅', '酉卯', '戌辰', '亥巳', '子午', '丑未'],	  
	    '<span id="天医" class="yi">天医</span>' : ['寅丑', '卯寅', '辰卯', '巳辰', '午巳', '未午', '申未', '酉申', '戌酉', '亥戌', '子亥', '丑子'],
	    //'<span id="戟锋煞" class="ji">戟锋煞</span>' : ['寅甲', '卯乙', '辰戊', '巳丙', '午丁', '未己', '申庚', '酉辛', '戌戊', '亥壬', '子癸', '丑巳']		  
	  };
	   
	   //月支查日干支
	  var shenShaMonthZhiDayGanZhi = {    
	    '<span id="四废日" class="ji">四废日</span>' : ['寅庚申', '卯庚申', '辰庚申', '寅辛酉', '卯辛酉', '辰辛酉', '巳壬子', '午壬子', '未壬子', '巳癸亥', '午癸亥', '未癸亥', '申甲寅', '酉甲寅', '戌甲寅', '申乙卯', '酉乙卯', '戌乙卯', '亥丙午', '子丙午', '丑丙午', '亥丁巳', '子丁巳', '丑丁巳'],
	    '<span id="天赦日" class="yi">天赦日</span>' : ['寅戊寅', '卯戊寅', '辰戊寅', '巳甲午', '午甲午', '未甲午', '申戊申', '酉戊申', '戌戊申', '亥甲子', '子甲子', '丑甲子']
	  };
	     
	  //查日时干支    
	  var shenShaDayTimeGanZhi = {    
	     '<span id="孤鸾" class="ji">孤鸾</span>' : ['乙巳', '丁巳', '辛亥', '戊申', '甲寅', '戊午', '丙午', '壬子'],
	     '<span id="金神" class="yi">金神</span>' : ['乙丑', '己巳', '癸酉']       
	  };
	  
	   //只查日干支
	  var shenShaDayDayGanZhi = {    
	     '<span id="差错" class="ji">差错</span>' : ['丙子', '丁丑', '戊寅', '辛卯', '壬辰', '癸巳', '丙午', '丁未', '戊申', '辛酉', '壬戌', '癸亥'],
	     '<span id="大败" class="ji">大败</span>' : ['甲辰', '乙巳', '丙申', '丁亥', '戊戌', '己丑', '庚辰', '辛巳', '壬申', '癸亥'],
	     '<span id="六秀日" class="yi">六秀日</span>' : ['丙午', '丁未', '戊子', '戊午', '己丑', '己未'],
	     '<span id="日德" class="yi">日德</span>' : ['甲寅', '丙辰', '戊辰', '庚辰', '壬戌'],
	     '<span id="日贵" class="yi">日贵</span>' : ['丁酉', '丁亥', '癸卯', '癸巳'],
	     '<span id="进神" class="yi">进神</span>' : ['甲子', '甲午', '乙卯', '乙酉'],
	     '<span id="退神" class="ji">退神</span>' : ['丁丑', '丁未', '壬辰', '壬戌'],
	     '<span id="魁罡" class="yiji">魁罡</span>' : ['壬辰', '庚辰', '庚戌', '戊戌'],
	     '<span id="阴阳煞" class="yi">阴阳煞</span>' : ['丙子', '戊午'],
	     '<span id="八专" class="ji">八专</span>' : ['甲寅', '乙卯', '戊戌', '己未', '丁未', '庚申', '辛酉', '癸丑'],
	     '<span id="九丑" class="ji">九丑</span>' : ['戊子', '戊午', '壬子', '壬午', '乙卯', '己卯', '辛卯', '己酉', '辛卯']
	  };
	  
	  //日干查地支    
	  var shenShaDayGanDiZhi = {
	    '<span id="羊刃" class="ji">羊刃</span>' : ['甲卯', '乙寅', '丙午', '丁巳', '戊午', '己巳', '庚酉', '辛申', '壬子', '癸亥'],
	    '<span id="飞刃" class="ji">飞刃</span>' : ['甲酉', '乙申', '丙子', '丁亥', '戊子', '己亥', '庚卯', '辛寅', '壬午', '癸巳'],
	    '<span id="红艳" class="yiji">红艳</span>' : ['甲午', '乙申', '丙寅', '丁未', '戊辰', '己辰', '庚戌', '辛酉', '壬子', '癸申'],
	    '<span id="流霞" class="ji">流霞</span>' : ['甲酉', '乙戌', '丙未', '丁申', '戊巳', '己午', '庚辰', '辛卯', '壬亥', '癸寅'],
	    //'<span id="沐浴" class="yiji">沐浴</span>' : ['甲子', '乙巳', '丙卯', '丁申', '戊卯', '己申', '庚午', '辛亥', '壬酉', '癸寅'],
	    '<span id="墓库" class="ji">墓库</span>' : ['甲未', '乙戌', '丙戌', '丁丑', '戊戌', '己丑', '庚丑', '辛辰', '壬辰', '癸未'],
	    '<span id="禄神" class="yi">禄神</span>' : ['甲寅', '乙卯', '丙巳', '丁午', '戊巳', '己午', '庚申', '辛酉', '壬亥', '癸子'],
	    '<span id="水溺煞" class="ji">水溺煞</span>' : ['丙子', '癸未', '癸丑']
	  };     
	  
	  //日干查时支    
	  var shenShaDayGanTimeZhi = {
	    '<span id="截路" class="ji">截路</span>' : ['甲申', '甲酉', '乙申', '乙酉', '丙辰', '丙巳', '辛辰', '辛巳', '丁寅', '丁卯', '壬寅', '壬卯', '戊子', '戊丑', '癸子', '癸丑']
	   }; 
	   
	  //日支查地支    
	  var shenShaDayZhiDiZhi = { 
	    '<span id="日破" class="ji">日破</span>' : ['子午', '丑未', '寅申', '卯酉', '辰戌', '巳亥', '午子', '未丑', '申寅', '酉卯', '戌辰', '亥巳']  
	  }; 
	  
	  //日支查时支    
	  var shenShaDayZhiTimeZhi = { 
	    '<span id="隔角煞" class="ji">隔角煞</span>' : ['子寅', '丑卯', '寅辰', '卯巳', '辰午', '巳未', '午申', '未酉', '申戌', '酉亥', '戌子', '亥丑']	  
	  }; 
	  
	  //查日柱时柱
	  var shenShaDayGanZhiTimeGanZhi = { 
	    '<span id="拱子禄" class="yi">拱子禄</span>' : ['癸亥癸丑', '癸丑癸亥'],
	    '<span id="拱午禄" class="yi">拱午禄</span>' : ['丁巳丁未', '己未己巳'],	  
	    '<span id="拱巳禄" class="yi">拱巳禄</span>' : ['戊辰戊午']	  
	  }; 
	  
	  //童子(月支查日支时支)
	  var shenShaMonthZhiDayZhiTimeZhi = {     
	    '<span id="童子" class="ji">童子</span>' : ['寅寅', '卯寅', '辰寅', '申寅', '酉寅', '戌寅', '寅子', '卯子', '辰子', '申子', '酉子', '戌子', '巳卯', '午卯', '未卯', '亥卯', '子卯', '丑卯', '巳未', '午未', '未未', '亥未', '子未', '丑未', '巳辰', '午辰', '未辰', '亥辰', '子辰', '丑辰']
	  };     
	  //童子(年柱纳音查日支和时支)
	  var shenShaYearNaYinDayZhiTimeZhi = {     
	    '<span id="童子纳音" class="ji">童子[纳音]</span>' : ['海中金午', '剑锋金午', '白蜡金午', '沙中金午', '金箔金午', '钗钏金午', '大林木午', '杨柳木午', '松柏木午', '平地木午', '桑柘木午', '石榴木午', '海中金卯', '剑锋金卯', '白蜡金卯', '沙中金卯', '金箔金卯', '钗钏金卯', '大林木卯', '杨柳木卯', '松柏木卯', '平地木卯', '桑柘木卯', '石榴木卯', '涧下水戌', '泉中水戌', '长流水戌', '天河水戌', '大溪水戌', '大海水戌', '涧下水酉', '泉中水酉', '长流水酉', '天河水酉', '大溪水酉', '大海水酉', '霹雳火戌', '山下火戌', '覆灯火戌', '炉中火戌', '山头火戌', '天上火戌', '霹雳火酉', '山下火酉', '覆灯火酉', '炉中火酉', '山头火酉', '天上火酉', '壁上土辰', '大驿土辰', '沙中土辰', '路旁土辰', '城头土辰', '屋上土辰', '壁上土巳', '大驿土巳', '沙中土巳', '路旁土巳', '城头土巳', '屋上土巳']
	  };
	  
	  // 年支查地支，男女分别看（阳男阴女）
	  var shenShaYearZhiZhiYangNanYinNv = {     
	    '<span id="勾煞男" class="ji">勾煞</span>' : ['子卯', '丑辰', '寅巳', '卯午', '辰未', '巳申', '午酉', '未戌', '申亥', '酉子', '戌丑', '亥寅'],
	    '<span id="绞煞男" class="ji">绞煞</span>' : ['子酉', '丑戌', '寅亥', '卯子', '辰丑', '巳寅', '午卯', '未辰', '申巳', '酉午', '戌未', '亥申'],
	    '<span id="元辰男" class="ji">元辰</span>' : ['子未', '丑申', '寅酉', '卯戌', '辰亥', '巳子', '午丑', '未寅', '申卯', '酉辰', '戌巳', '亥午']
	  };
	  
	  // 年支查地支，男女分别看（阴男阳女）    
	  var shenShaYearZhiZhiYinNanYangNv = {      
	    '<span id="勾煞女" class="ji">勾煞</span>' : ['子酉', '丑戌', '寅亥', '卯子', '辰丑', '巳寅', '午卯', '未辰', '申巳', '酉午', '戌未', '亥申'],  
	    '<span id="绞煞女" class="ji">绞煞</span>' : ['子卯', '丑辰', '寅巳', '卯午', '辰未', '巳申', '午酉', '未戌', '申亥', '酉子', '戌丑', '亥寅'],  
	    '<span id="元辰女" class="ji">元辰</span>' : ['子巳', '丑午', '寅未', '卯申', '辰酉', '巳戌', '午亥', '未子', '申丑', '酉寅', '戌卯', '亥辰']    
	  };
	  
	  // 阳
	  var yang = (0 == lunar.getYearGanIndexExact() % 2);
	  // 男
	  var man = (1 == gender);
	  // 阳男阴女
	  var yangManOrYinWoman = (yang && man) || (!yang && !man);
	  // 根据阳男阴女或阴男阳女选择不同的关系
	  var shenShaYearZhiZhiNN = yangManOrYinWoman ? shenShaYearZhiZhiYangNanYinNv : shenShaYearZhiZhiYinNanYangNv;
	    
	  // 年柱神煞开始
	  // 每柱神煞开始才加这一行
	  var shenShaTemp = {};
	  
	  for(var i in shenShaGanGan){
	    var gzs = shenShaGanGan[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearGan()+bazi.getMonthGan()+bazi.getDayGan() || gz == bazi.getMonthGan()+bazi.getDayGan()+bazi.getTimeGan()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	   
	  for(var i in shenShaZhiZhi){
	    var gzs = shenShaZhiZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearZhi()+bazi.getMonthZhi()+bazi.getDayZhi() || gz == bazi.getYearZhi()+bazi.getMonthZhi()+bazi.getTimeZhi()|| gz == bazi.getYearZhi()+bazi.getDayZhi()+bazi.getTimeZhi()|| gz == bazi.getMonthZhi()+bazi.getDayZhi()+bazi.getTimeZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearDayGanZhi){
	    var gzs = shenShaYearDayGanZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearGan()+bazi.getYearZhi() || gz == bazi.getDayGan()+bazi.getYearZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearDayZhiZhi){
	    var gzs = shenShaYearDayZhiZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getDayZhi()+bazi.getYearZhi()|| gz == bazi.getYearZhi()+bazi.getYearZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearNaYinYearDiZhi){
	    var gzs = shenShaYearNaYinYearDiZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearNaYin()+bazi.getYearZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaMonthZhiGanZhi){
	    var gzs = shenShaMonthZhiGanZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getMonthZhi()+bazi.getYearGan() || gz == bazi.getMonthZhi()+bazi.getYearZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaDayGanDiZhi){
	    var gzs = shenShaDayGanDiZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getDayGan()+bazi.getYearZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearGanDayGanGanZhi){
	    var gzs = shenShaYearGanDayGanGanZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getDayGan()+bazi.getYear()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearNaYinDiZhi){
	    var gzs = shenShaYearNaYinDiZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearNaYin()+bazi.getYearZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearNaYinGanZhi){
	    var gzs = shenShaYearNaYinGanZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearNaYin()+bazi.getYear()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearNaYinDayNaYin){
	    var gzs = shenShaYearNaYinDayNaYin[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getDayNaYin()+bazi.getYearNaYin()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaDayZhiDiZhi){
	    var gzs = shenShaDayZhiDiZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getDayZhi()+bazi.getYearZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  // 神煞结束才调用这段
	  for(var i in shenShaTemp){
	    shenShaYear.push(i);
	  }
	  // 年柱神煞结束
	  
	  // 月柱神煞开始
	  shenShaTemp = {};
	  for(var i in shenShaYearDayGanZhi){
	    var gzs = shenShaYearDayGanZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearGan()+bazi.getMonthZhi() || gz == bazi.getDayGan()+bazi.getMonthZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearDayZhiZhi){
	    var gzs = shenShaYearDayZhiZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearZhi()+bazi.getMonthZhi() || gz == bazi.getDayZhi()+bazi.getMonthZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearNaYinYearDiZhi){
	    var gzs = shenShaYearNaYinYearDiZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearNaYin()+bazi.getMonthZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaMonthZhiGanZhi){
	    var gzs = shenShaMonthZhiGanZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getMonthZhi()+bazi.getMonthGan()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaDayGanDiZhi){
	    var gzs = shenShaDayGanDiZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getDayGan()+bazi.getMonthZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearZhiDiZhi){
	    var gzs = shenShaYearZhiDiZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearZhi()+bazi.getMonthZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearZhiGanZhi){
	    var gzs = shenShaYearZhiGanZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearZhi()+bazi.getMonth()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearGanDayGanGanZhi){
	    var gzs = shenShaYearGanDayGanGanZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearGan()+bazi.getMonth() || gz == bazi.getDayGan()+bazi.getMonth()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearNaYinDiZhi){
	    var gzs = shenShaYearNaYinDiZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearNaYin()+bazi.getMonthZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearNaYinGanZhi){
	    var gzs = shenShaYearNaYinGanZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearNaYin()+bazi.getMonth()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearZhiZhiNN){
	    var gzs = shenShaYearZhiZhiNN[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearZhi()+bazi.getMonthZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearNaYinDayNaYin){
	    var gzs = shenShaYearNaYinDayNaYin[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearNaYin()+bazi.getMonthNaYin() || gz == bazi.getDayNaYin()+bazi.getMonthNaYin()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }	
	   
	  for(var i in shenShaDayZhiDiZhi){
	    var gzs = shenShaDayZhiDiZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getDayZhi()+bazi.getMonthZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaTemp){
	    shenShaMonth.push(i);
	  }
	  // 月柱神煞结束
	  
	  // 日柱神煞开始      
	  shenShaTemp = {};
	  for(var i in shenShaYearDayGanZhi){
	    var gzs = shenShaYearDayGanZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearGan()+bazi.getDayZhi() || gz == bazi.getDayGan()+bazi.getDayZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearDayZhiZhi){
	    var gzs = shenShaYearDayZhiZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearZhi()+bazi.getDayZhi()|| gz == bazi.getDayZhi()+bazi.getDayZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearNaYinYearDiZhi){
	    var gzs = shenShaYearNaYinYearDiZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearNaYin()+bazi.getDayZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaMonthZhiGanZhi){
	    var gzs = shenShaMonthZhiGanZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getMonthZhi()+bazi.getDayGan() || gz == bazi.getMonthZhi()+bazi.getDayZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaDayTimeGanZhi){
	    var gzs = shenShaDayTimeGanZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getDay()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaDayDayGanZhi){
	    var gzs = shenShaDayDayGanZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getDay()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaDayGanDiZhi){
	    var gzs = shenShaDayGanDiZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getDay()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearZhiDiZhi){
	    var gzs = shenShaYearZhiDiZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearZhi()+bazi.getDayZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearZhiGanZhi){
	    var gzs = shenShaYearZhiGanZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearZhi()+bazi.getDay()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaMonthZhiDayZhiTimeZhi){
	    var gzs = shenShaMonthZhiDayZhiTimeZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getMonthZhi()+bazi.getDayZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearNaYinDayZhiTimeZhi){
	    var gzs = shenShaYearNaYinDayZhiTimeZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearNaYin()+bazi.getDayZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearGanDayGanGanZhi){
	    var gzs = shenShaYearGanDayGanGanZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearGan()+bazi.getDay()|| gz == bazi.getDayGan()+bazi.getDay()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaMonthZhiDayGanZhi){
	    var gzs = shenShaMonthZhiDayGanZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getMonthZhi()+bazi.getDay()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearZhiZhiNN){
	    var gzs = shenShaYearZhiZhiNN[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearZhi()+bazi.getDayZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	   
	  for(var i in shenShaYearNaYinDiZhi){
	    var gzs = shenShaYearNaYinDiZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearNaYin()+bazi.getDayZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	   
	  for(var i in shenShaYearNaYinGanZhi){
	    var gzs = shenShaYearNaYinGanZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearNaYin()+bazi.getDay()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	   
	  for(var i in shenShaYearNaYinDayNaYin){
	    var gzs = shenShaYearNaYinDayNaYin[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearNaYin()+bazi.getDayNaYin()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaTemp){
	    shenShaDay.push(i);
	  }
	  // 日柱神煞结束
	  
	  // 时柱神煞开始 
	  shenShaTemp = {};
	  for(var i in shenShaYearDayGanZhi){
	    var gzs = shenShaYearDayGanZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearGan()+bazi.getTimeZhi() || gz == bazi.getDayGan()+bazi.getTimeZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearDayZhiZhi){
	    var gzs = shenShaYearDayZhiZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearZhi()+bazi.getTimeZhi() || gz == bazi.getDayZhi()+bazi.getTimeZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearNaYinYearDiZhi){
	    var gzs = shenShaYearNaYinYearDiZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearNaYin()+bazi.getTimeZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaMonthZhiGanZhi){
	    var gzs = shenShaMonthZhiGanZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getMonthZhi()+bazi.getTimeGan() || gz == bazi.getMonthZhi()+bazi.getTimeZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaDayTimeGanZhi){
	    var gzs = shenShaDayTimeGanZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getTime()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaDayGanDiZhi){
	    var gzs = shenShaDayGanDiZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getDayGan()+bazi.getTimeZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearZhiDiZhi){
	    var gzs = shenShaYearZhiDiZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearZhi()+bazi.getTimeZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearZhiGanZhi){
	    var gzs = shenShaYearZhiGanZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearZhi()+bazi.getTime()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearGanDayGanGanZhi){
	    var gzs = shenShaYearGanDayGanGanZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearGan()+bazi.getTime() || gz == bazi.getDayGan()+bazi.getTime()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearZhiZhiNN){
	    var gzs = shenShaYearZhiZhiNN[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearZhi()+bazi.getTimeZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	   
	  for(var i in shenShaYearNaYinDiZhi){
	    var gzs = shenShaYearNaYinDiZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearNaYin()+bazi.getTimeZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	   
	  for(var i in shenShaYearNaYinGanZhi){
	    var gzs = shenShaYearNaYinGanZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearNaYin()+bazi.getTime()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaDayGanTimeZhi){
	    var gzs = shenShaDayGanTimeZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getDayGan()+bazi.getTimeZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	   
	  for(var i in shenShaDayZhiTimeZhi){
	    var gzs = shenShaDayZhiTimeZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getDayZhi()+bazi.getTimeZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	   
	  for(var i in shenShaDayGanZhiTimeGanZhi){
	    var gzs = shenShaDayGanZhiTimeGanZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getDay()+bazi.getTime()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaMonthZhiDayZhiTimeZhi){
	    var gzs = shenShaMonthZhiDayZhiTimeZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getMonthZhi()+bazi.getTimeZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearNaYinDayZhiTimeZhi){
	    var gzs = shenShaYearNaYinDayZhiTimeZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearNaYin()+bazi.getTimeZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaYearNaYinDayNaYin){
	    var gzs = shenShaYearNaYinDayNaYin[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getYearNaYin()+bazi.getTimeNaYin() || gz == bazi.getDayNaYin()+bazi.getTimeNaYin()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  
	  for(var i in shenShaDayZhiDiZhi){
	    var gzs = shenShaDayZhiDiZhi[i];
	    for(var j=0,k=gzs.length;j<k;j++){
	      var gz = gzs[j];
	      if(gz == bazi.getDayZhi()+bazi.getTimeZhi()){
	        shenShaTemp[i] = true;
	      }
	    }
	  }
	  
	  for(var i in shenShaTemp){
	    shenShaTime.push(i);
	  }
	  // 时柱神煞结束
	
	










    s += '</table>';
	  


$('#shensha').html(''+

	'<table style="border-top:0px;">'+
    '<tr><th class="th1" style="width:16%">年柱</th><td colspan="8" class="td1" style="text-align:left;">'+ (shenShaYear.length<1 ? '无' : shenShaYear.join(' ')) + '</td><!--th rowspan="4" style="border:0">四<br>柱<br>神<br>煞</th--></tr>'+
    '<tr><th class="th2" style="">月柱</th><td colspan="8" class="td2" style="text-align:left;">'+ (shenShaMonth.length<1 ? '无' : shenShaMonth.join(' ')) +'</td></tr>'+
    '<tr><th class="th1" style="">日柱</th><td colspan="8" class="td1" style="text-align:left;">'+ (shenShaDay.length<1 ? '无' : shenShaDay.join(' ')) +'</td></tr>'+	
    '<tr><th class="th2" style="">时柱</th><td colspan="8" class="td2" style="text-align:left;">'+ (shenShaTime.length<1 ? '无' : shenShaTime.join(' ')) +'</td></tr>'+		
    ''+
	'</table>'); //神煞	
	
    var sizhu = {'已寅寅':'', '已寅寅':'', '已寅寅':'', '已寅已':'', '已寅已':'', '已寅已':'', '已卯寅':'', '已卯寅':'', '已卯寅':'', '已卯已':'', '已卯已':'', '已卯已':'',    '亥寅寅':'', '亥寅寅':'', '亥寅寅':'', '亥寅已':'', '亥寅已':'', '亥寅已':'', '亥卯寅':'', '亥卯寅':'', '亥卯寅':'', '亥卯已':'', '亥卯已':'', '亥卯已':'', };//四柱关 年支+月支+时支 
	
    var wugui = {'壬子寅':'', '庚子寅':'', '丙子寅':'', '戊寅寅':'', };//五鬼关 年干支+时支  忌入庵堂寺院
	var tiandiao = {'寅辰':'', '午辰':'', '戌辰':'', };//天吊关 年支+时支 主烦恼不宁眼睛直望
	var heshang = {'子辰':'', '子戌':'', '子丑':'', '子未':'', '午辰':'', '午戌':'', '午丑':'', '午未':'', '卯辰':'', '卯戌':'', '卯丑':'', '卯未':'', '酉辰':'', '酉戌':'', '酉丑':'', '酉未':'', };//和尚关 年支+时支 忌见僧道尼
	var tanghuo = {'子午':'', '午午':'', '卯午':'', '酉午':'', };//汤火关 年支+时支
	var duanming = {'子已':'', '辰已':'', };//短命关 年支+时支 主惊怖夜啼之患
	
    var yanwang = {'申子':'', '申午':'', '申卯':'', '申酉':'', '酉子':'', '酉午':'', '酉卯':'', '酉酉':'', '戌子':'', '戌午':'', '戌卯':'', '戌酉':'', '丑子':'', '丑午':'', '丑卯':'', '丑酉':'',};//阎王关 月支+时支 带天德月德可解
    var siji = {'寅寅':'', '寅辰':'', '卯寅':'', '卯辰':'', '辰寅':'','辰辰':'',};//四季关 月支+时支 忌一岁出入凶喜事
    var shenshui = {'寅申':'', '卯申':'', '辰申':'',};//深水关 月支+时支 忌疹病灾害
    var bairi = {'寅寅':'', '寅已':'', };//百日关 月支+时支 百日内忌出入门前
    var luojing = {'甲巳':'', '己巳':'', '乙子':'', '庚子':'', '丙申':'', '辛申':'', '丁戌':'', '壬戌':'', '戊卯':'', '癸卯':'', };//落井关 年干+时支(日干+时支) 犯此勿近井边、河边、水边、渡舟、有坑洞穴的地方去玩必险、有水厄之灾、勿近为要。
    var luojing2 = {'午':'', '已':'', '卯':'', '申':'', '戌':'', };//落井关2 时支 忌见井泉池塘
    var jinsuo = {'寅卯':'', '寅卯':'', '卯卯':'', '卯卯':'', };//金锁关 月支+时支 忌带金银器物
    var duanqiao = {'寅寅':'', '寅卯':'', '卯寅':'', '卯卯':'', };//断桥关 月支+时支 忌过桥汲水照影
    var shuihuo = {'寅未':'', '寅戌':'', '卯未':'', '卯戌':'', '辰未':'', '辰戌':'', };//水火关 月支+时支 主脓血疮毒太多
    var jijiao = {'寅子':'', '寅亥':'', '卯子':'', '卯亥':'', '辰子':'', '辰亥':'', };//急脚关 月支+时支 忌跌撞惊吓之患
    var xiaqing = {'寅子':'', '寅寅':'', '卯子':'', '卯寅':'', '辰子':'', '辰寅':'', };//下情关 月支+时支 忌闻刀斧之声
    var yupen = {'寅申':'', '卯申':'', '辰申':'', };//浴盆关 月支+时支 忌沐浴太早
    var siji = {'':'', };// 年支+时支 
    var siji = {'':'', };// 月支+时支 
    var siji = {'':'', };// 时支 


	
 //旺相休囚
    var wxguanxi = {
	'寅卯':'<th>木旺</th><th>火相</th><th>水休</th><th>金囚</th><th>土死</th>',
	'巳午':'<th>火旺</th><th>土相</th><th>木休</th><th>水囚</th><th>金死</th>',
	'申酉':'<th>金旺</th><th>水相</th><th>土休</th><th>火囚</th><th>木死</th>',
	'亥子':'<th>水旺</th><th>木相</th><th>金休</th><th>土囚</th><th>火死</th>',
	'辰戌丑未':'<th>土旺</th><th>金相</th><th>火休</th><th>木囚</th><th>水死</th>'
    };
    var monthZhi = bazi.getMonthZhi();
    var wx = '';
    for(var i in wxguanxi){
        if(i.indexOf(monthZhi )>-1){
            wx = wxguanxi[i];
            break;
        }
    }
        $('#wangxiang').html('<table><tr><!--' + bazi.getDayGan() + LunarUtil.WU_XING_GAN[bazi.getDayGan()] + '生于' + bazi.getMonthZhi() + '月 -->' + wx +'</tr></table>'); //旺相休囚
	  
//天干冲合	  
    var tgguanxi = {
	'甲己':'甲己合土',
	'乙庚':'乙庚合金',
	'丙辛':'丙辛合水',
	'丁壬':'丁壬合木',
	'戊癸':'戊癸合火',
	'甲庚':'甲庚相冲',
	'乙辛':'乙辛相冲',
	'丙壬':'丙壬相冲',
	'丁癸':'丁癸相冲',
	'甲戊':'甲克戊','乙己':'乙克己','丙庚':'丙克庚','丁辛':'丁克辛','戊壬':'戊克壬',
	'己癸':'己克癸','庚甲':'庚克甲','辛乙':'辛克乙','壬丙':'壬克丙','癸丁':'癸克丁',
	
    };
    var gans = [];
    gans.push(bazi.getYearGan());
    gans.push(bazi.getMonthGan());
    gans.push(bazi.getDayGan());
    gans.push(bazi.getTimeGan());
                
    var matched=[];
    var gxs = {};    
        var size=gans.length;
        for(var i=0;i<size;i++){
          for(var j=0;j<size;j++){
            if(i===j){
              continue;
    }
    var v=tgguanxi[gans[i]+gans[j]];
    if(v){
      gxs[v] = true;
        }
      }
    }
    for(var i in gxs){
     matched.push(i);
    }
	
	$('#tianganch').html(''+(matched.length<1 ? '天干无冲合' : matched.join('&ensp;'))+''); //天干冲合
	
	
	
//地支冲克	  
    var dzguanxi = {
	'亥子丑':'亥子丑三会水',
	'寅卯辰':'寅卯辰三会木',
	'巳午未':'巳午未三会火',
	'申酉戌':'申酉戌三会金',
	'申子辰':'申子辰三合水',
	'寅午戌':'寅午戌三合火',
	'亥卯未':'亥卯未三合木',
	'巳酉丑':'巳酉丑三合金', 
	'申子':'申子半合水',
	'子辰':'子辰半合水',	
	'午戌':'午戌半合火',	
	'亥卯':'亥卯半合木',
	'卯未':'卯未半合木',	
	'酉丑':'酉丑半合金',
	'寅午':'寅午半合火(暗合土)',
	'巳酉':'巳酉半合金(暗合水)',	
	'子巳':'子巳暗合火',
	'卯申':'卯申暗合金',
	'亥午':'亥午暗合木', 	
	'巳申':'巳申六合水(无恩刑)(相破)',
	'辰酉':'辰酉六合金',
	'卯戌':'卯戌六合火',
	'寅亥':'寅亥六合木(相破)',
	'子丑':'子丑六合土',
	'午未':'午未六合火或土',
	
	'丑戌':'丑戌恃势刑',
	'戌未':'戌未恃势刑',
	'未丑':'未丑恃势刑',
	'寅巳':'寅巳无恩刑',
	'申寅':'申寅无恩刑',
	//'丑未戌':'丑未戌恃势刑',
	//'寅巳申':'寅巳申无恩刑',
	
	'子卯':'子卯无礼刑',
	'卯子':'卯子无礼刑',
	
	'辰辰':'辰辰自刑',
	'午午':'午午自刑',
	'酉酉':'酉酉自刑',
	'亥亥':'亥亥自刑',
	
	'辰辰辰':'辰辰自刑',
	'午午午':'午午自刑',
	'酉酉酉':'酉酉自刑',	
	'亥亥亥':'亥亥自刑',
	
	'辰辰辰辰':'辰辰自刑',
	'午午午午':'午午自刑',
	'酉酉酉酉':'酉酉自刑',	
	'亥亥亥亥':'亥亥自刑',
	
	'辰辰辰辰辰':'辰辰自刑',
	'午午午午午':'午午自刑',
	'酉酉酉酉酉':'酉酉自刑',	
	'亥亥亥亥亥':'亥亥自刑',
	
	'辰辰辰辰辰辰':'辰辰自刑',
	'午午午午午午':'午午自刑',
	'酉酉酉酉酉酉':'酉酉自刑',	
	'亥亥亥亥亥亥':'亥亥自刑',	
	
	'子午':'子午相冲',
	'卯酉':'卯酉相冲',
	'寅申':'寅申相冲',
	'巳亥':'巳亥相冲',
	'辰戌':'辰戌相冲',
	'丑未':'丑未相冲',
	'子未':'子未相害',
	'丑午':'丑午相害',
	'寅巳':'寅巳相害',
	'卯辰':'卯辰相害',
	'申亥':'申亥相害',
	'酉戌':'酉戌相害',
	'子酉':'子酉相破',
	'卯午':'卯午相破',
	'辰丑':'辰丑相破',
	'未戌':'未戌相破',

    };
    var zhis = {};
    zhis[bazi.getYearZhi()] = zhis[bazi.getYearZhi()] ? zhis[bazi.getYearZhi()]+1 : 1;
    zhis[bazi.getMonthZhi()] = zhis[bazi.getMonthZhi()] ? zhis[bazi.getMonthZhi()]+1 : 1;
    zhis[bazi.getDayZhi()] = zhis[bazi.getDayZhi()] ? zhis[bazi.getDayZhi()]+1 : 1;
    zhis[bazi.getTimeZhi()] = zhis[bazi.getTimeZhi()] ? zhis[bazi.getTimeZhi()]+1 : 1;
    


    var matched=[];
    var gxs = {};
    for(var i in zhis){
      for(var j in zhis){
        for(var k in zhis){
          if(i==j||j==k||i==k){
            continue;
          }
          var v=dzguanxi[i+j];
          if(v){
            gxs[v] = true;
          }
          v=dzguanxi[i+j+k];
          if(v){
            gxs[v] = true;
          }
        }
      }
    }
    for(var i in zhis){
      var n = zhis[i];
      var vs = [];
      for(var j=0;j<n;j++){
        vs.push(i);
      }
      var v=dzguanxi[vs.join('')];
      if(v){
        gxs[v] = true;
      }
    }

    var matchIndex = 0;
    for(var i in gxs){
         matched.push(i);
         matchIndex ++;
         if(matchIndex%4==0){
             matched.push('<!--br-->');
         }
    }

        $('#dizhich').html(''+(matched.join('&ensp;'))+''); //地支冲合





// 太岁


    var tsguanxi = {
	'子子':'值太岁',
	'丑丑':'值太岁',
	'寅寅':'值太岁',
	'卯卯':'值太岁',
	'巳巳':'值太岁',
	'未未':'值太岁',
	'申申':'值太岁',
	'戌戌':'值太岁',	
	'子卯':'刑太岁',
	'丑戌':'刑太岁(丑戌未三刑)',	
	'辰辰':'刑太岁(值)',
	'午午':'刑太岁(值)',
	'酉酉':'刑太岁(值)',
	'亥亥':'刑太岁(值)',
	'子午':'冲太岁',
	'卯酉':'冲太岁',
	'寅申':'冲太岁(寅巳申三刑)',
	'巳亥':'冲太岁',
	'辰戌':'冲太岁',
	'丑未':'冲太岁(丑戌未三刑)',
	'子未':'害太岁',
	'丑午':'害太岁',
	'寅巳':'害太岁(寅巳申三刑)',
	'卯辰':'害太岁',
	'申亥':'害太岁',
	'酉戌':'害太岁',
	'子酉':'破太岁',
	'卯午':'破太岁',
	'辰丑':'破太岁',
	'寅亥':'破太岁',	
	'巳申':'破太岁(寅巳申三刑)',
	'未戌':'破太岁(丑戌未三刑)',	

	//'卯子':'刑太岁','戌丑':'刑太岁(丑戌未三刑)','午子':'冲太岁','酉卯':'冲太岁','申寅':'冲太岁(寅巳申三刑)','亥巳':'冲太岁','戌辰':'冲太岁','未丑':'冲太岁(丑戌未三刑)','未子':'害太岁','午丑':'害太岁','巳寅':'害太岁(寅巳申三刑)','辰卯':'害太岁','亥申':'害太岁','戌酉':'害太岁','酉子':'破太岁','午卯':'破太岁','丑辰':'破太岁','亥寅':'破太岁','申巳':'破太岁(寅巳申三刑)','戌未':'破太岁(丑戌未三刑)'

    };
/*
    var zhis = [];
    zhis.push(bazi.getYearZhi());

    var matched=[];
    var gxs = {};
    var size=zhis.length;
        for(var i=0;i<size;i++){
          for(var j=0;j<size;j++){
            if(i===j){
              continue;
    }
    var v=tsguanxi[zhis[i]+zhis[j]];
    if(v){
      gxs[v] = true;
        }
      }
    }
    for(var i in gxs){
     matched.push(i);
    }
	
	
	
    $('#fantaisui').html(''+(matched.length<1 ? '未犯太岁' : matched.join(' '))+' '+tsguanxi[bazi.getYearZhi()+bazi.getYearZhi()]+' '+ddbazi.getYearZhi()+bazi.getYearZhi()+'  '); //犯太岁
	*/



  var dd = Lunar.fromDate(new Date());
    $('#fantaisui').html('<taisui'+tsguanxi[bazi.getYearZhi()+dd.getYearZhiExact()]+' class=taisui1><taisui2'+tsguanxi[bazi.getYearZhi()+dd.getYearZhiExact()]+' class=taisui1><taisui'+bazi.getYearZhi()+dd.getYearZhiExact()+' class=taisui1><taisui2'+bazi.getYearZhi()+dd.getYearZhiExact()+' class=taisui1>&emsp;<span class=taisui2>生肖'+lunar.getYearShengXiaoExact()+'在'+dd.getYearZhiExact()+'年</span>'+
	 '<style>.taisui2{font-weight:normal;color:#999;} taisuiundefined:before{content:"未犯太岁";class=taisui}'+
	 'taisui2子子:before{content:"值太岁";class=taisui}taisui2丑丑:before{content:"值太岁";class=taisui}taisui2寅寅:before{content:"值太岁";class=taisui}taisui2卯卯:before{content:"值太岁";class=taisui}taisui2巳巳:before{content:"值太岁";class=taisui}taisui2未未:before{content:"值太岁";class=taisui}taisui2申申:before{content:"值太岁";class=taisui}taisui2戌戌:before{content:"值太岁";class=taisui}taisui2辰辰:before{content:"刑太岁(值)";class=taisui}taisui2午午:before{content:"刑太岁(值)";class=taisui}taisui2酉酉:before{content:"刑太岁(值)";class=taisui}taisui2亥亥:before{content:"刑太岁(值)";class=taisui}'+
	 'taisui子卯:before{content:"刑太岁";class=taisui}taisui丑戌:before{content:"刑太岁(丑戌未三刑)";class=taisui}taisui子午:before{content:"冲太岁";class=taisui}taisui卯酉:before{content:"冲太岁";class=taisui}taisui寅申:before{content:"冲太岁(寅巳申三刑)";class=taisui}taisui巳亥:before{content:"冲太岁";class=taisui}taisui辰戌:before{content:"冲太岁";class=taisui}taisui丑未:before{content:"冲太岁(丑戌未三刑)";class=taisui}taisui子未:before{content:"害太岁";class=taisui}taisui丑午:before{content:"害太岁";class=taisui}taisui寅巳:before{content:"害太岁(寅巳申三刑)";class=taisui}taisui卯辰:before{content:"害太岁";class=taisui}taisui申亥:before{content:"害太岁";class=taisui}taisui酉戌:before{content:"害太岁";class=taisui}taisui子酉:before{content:"破太岁";class=taisui}taisui卯午:before{content:"破太岁";class=taisui}taisui辰丑:before{content:"破太岁";class=taisui}taisui寅亥:before{content:"破太岁";class=taisui}taisui巳申:before{content:"破太岁(寅巳申三刑)";class=taisui}taisui未戌:before{content:"破太岁(丑戌未三刑)";class=taisui}'+
	 //'taisui卯子:before{content:"刑太岁";class=taisui}taisui戌丑:before{content:"刑太岁(丑戌未三刑)";class=taisui}taisui午子:before{content:"冲太岁";class=taisui}taisui酉卯:before{content:"冲太岁";class=taisui}taisui申寅:before{content:"冲太岁(寅巳申三刑)";class=taisui}taisui亥巳:before{content:"冲太岁";class=taisui}taisui戌辰:before{content:"冲太岁";class=taisui}taisui未丑:before{content:"冲太岁(丑戌未三刑)";class=taisui}taisui未子:before{content:"害太岁";class=taisui}taisui午丑:before{content:"害太岁";class=taisui}taisui巳寅:before{content:"害太岁(寅巳申三刑)";class=taisui}taisui辰卯:before{content:"害太岁";class=taisui}taisui亥申:before{content:"害太岁";class=taisui}taisui戌酉:before{content:"害太岁";class=taisui}taisui酉子:before{content:"破太岁";class=taisui}taisui午卯:before{content:"破太岁";class=taisui}taisui丑辰:before{content:"破太岁";class=taisui}taisui亥寅:before{content:"破太岁";class=taisui}taisui申巳:before{content:"破太岁(寅巳申三刑)";class=taisui}taisui戌未:before{content:"破太岁(丑戌未三刑)";class=taisui}'+
	 ''+
	 '</style>'); //犯太岁


 //婚配
    var hunpei = {
	'子':'<span style="color:green">宜</span> 子丑合 申子辰合<br><span style="color:red">忌</span> 子午冲 子卯刑 子未害 子酉破',
	'丑':'<span style="color:green">宜</span> 子丑合 巳酉丑合<br><span style="color:red">忌</span> 丑未冲 丑戌未刑 丑午害 辰丑破',
	'寅':'<span style="color:green">宜</span> 寅亥合<破> 寅午戌合<br><span style="color:red">忌</span> 寅申冲 寅巳申刑 寅巳害',
	'卯':'<span style="color:green">宜</span> 卯戌合 亥卯未合<br><span style="color:red">忌</span> 卯酉冲 子卯刑 卯辰害 卯午破',
	'辰':'<span style="color:green">宜</span> 辰酉合 申子辰合<br><span style="color:red">忌</span> 辰戌冲 辰辰刑 卯辰害 辰丑破',
	'巳':'<span style="color:green">宜</span> 巳申合 巳酉丑合<br><span style="color:red">忌</span> 巳亥冲 寅巳申刑 寅巳害 巳申破',
	'午':'<span style="color:green">宜</span> 午未合 寅午戌合<br><span style="color:red">忌</span> 子午冲 午午刑 丑午害 卯午破',
	'未':'<span style="color:green">宜</span> 午未合 亥卯未合<br><span style="color:red">忌</span> 丑未冲 丑戌未刑 子未害 未戌破',
	'申':'<span style="color:green">宜</span> 巳申合<破> 申子辰合<br><span style="color:red">忌</span> 寅申冲 寅巳申刑 申亥害',
	'酉':'<span style="color:green">宜</span> 辰酉合 巳酉丑合<br><span style="color:red">忌</span> 卯酉冲 酉酉刑 酉戌害 子酉破',
	'戌':'<span style="color:green">宜</span> 卯戌合 寅午戌合<br><span style="color:red">忌</span> 辰戌冲 丑戌未刑 酉戌害 未戌破',
	'亥':'<span style="color:green">宜</span> 寅亥合<破> 亥卯未合<br><span style="color:red">忌</span> 巳亥冲 亥亥刑 申亥害'
    };
    var yearZhi = bazi.getYearZhi();
    var hp = '';
    for(var i in hunpei){
        if(i.indexOf(yearZhi )>-1){
            hp = hunpei[i];
            break;
        }
    }

    	
        $('#hunpei').html('' + hp +''); //婚配
	



        $('#wangxiang').html('<table><tr><!--' + bazi.getDayGan() + LunarUtil.WU_XING_GAN[bazi.getDayGan()] + '生于' + bazi.getMonthZhi() + '月 -->' + wx +'</tr></table>'); //旺相休囚
	  
	  
        $('#sizhu').html(''+bazi.getYear()+'年　'+bazi.getMonth()+'月　'+bazi.getDay()+'日　'+bazi.getTime()+'时'); //四柱
      //  '+bazi.getTaiYuan().substr(-1)+'
        $('#taiyuan').html(''+bazi.getTaiYuan()+'<br>'+bazi.getTaiYuanNaYin()+''); //胎元
        $('#minggong').html(''+bazi.getMingGong()+'<br>'+bazi.getMingGongNaYin()+''); //命宫
        $('#shengong').html(''+bazi.getShenGong()+'<br>'+bazi.getShenGongNaYin()+''); //身宫
        $('#taixi').html(''+bazi.getTaiXi()+'<br>'+bazi.getTaiXiNaYin()+''); //胎息
		
        $('#sanyuan').html('胎元：'+bazi.getTaiYuan()+'('+bazi.getTaiYuanNaYin()+')			命宫：'+bazi.getMingGong()+'('+bazi.getMingGongNaYin()+')			身宫：'+bazi.getShenGong()+'('+bazi.getShenGongNaYin()+')'); //三垣yuán
		
var ctms = {
'甲子':'250','乙丑':'190','丙寅':'140','丁卯':'150',
'戊辰':'220','己巳':'290','庚午':'190','辛未':'160',
'壬申':'250','癸酉':'150','甲戌':'200','乙亥':'140',
'丙子':'220','丁丑':'150','戊寅':'210','己卯':'150',
'庚辰':'290','辛巳':'240','壬午':'160','癸未':'250',
'甲申':'220','乙酉':'190','丙戌':'210','丁亥':'140',
'戊子':'200','己丑':'140','庚寅':'140','辛卯':'150',
'壬辰':'230','癸巳':'170','甲午':'210','乙未':'190',
'丙申':'100','丁酉':'140','戊戌':'250','己亥':'150',
'庚子':'140','辛丑':'250','壬寅':'140','癸卯':'180',
'甲辰':'230','乙巳':'170','丙午':'280','丁未':'160',
'戊申':'260','己酉':'180','庚戌':'110','辛亥':'140',
'壬子':'250','癸丑':'190','甲寅':'250','乙卯':'180',
'丙辰':'290','丁巳':'140','戊午':'230','己未':'280',
'庚申':'110','辛酉':'140','壬戌':'200','癸亥':'140',
};
//注：数理从560开始到990结束，大于990数满了，按990算吧。这样的数极少，你已经不是凡人了。

var ctmss = {
'400':'丙火炎热，七月退气，少年有为，老来无利。',
'450':'气象虽真，枉费精神，到老无成，难有宝珍。',
'460':'家业不少，难于守成，全靠奋斗，奔走终生。',
'470':'生平有志，命若难凭，日月忽去，老至奔腾。',
'480':'生平志向向谁谈，半世辛劳只自怜；业绩东流随水去，老来幸运乐天然。',
'490':'少乐多忧，一世若愁，心坚不退，晚岁优游。',
'500':'数目可考，缺食不饱，艰难奋斗，福禄岂少。',
'510':'终生苦恨，一事无成，江湖奔走，虚利虚名。',
'520':'才高气旺，年少成功，晚岁寂楚，运气不通。',
'530':'时运不通，作事无功，老来悠闲，资产丰盈。',
'540':'豪气英贤，富贵双全，六亲和顺，业置林园。',
'550':'究困难守业，命里本自招；财气寒贫象，位低不能高。',
'560':'此数终生无食衣，求到东来又少西；满腹苦恼向谁吐，依人门下且充饥。',
'570':'命中空主受孤单，纸薄衣衫任冷寒；幸有他人来照顾，离乡背井受艰难。',
'580':'他乡寄旅望相知，但被邪人说是非；求得十文抛一贯，长天不快强支持。',
'590':'祖业飘零财尽散，箱内长空柜不满；心中苦恼谁能解，只是臂长衫袖短。',
'600':'胸中苦恼事难全，一日萦牵似十年；欲把金银多积起，耗散一如焚纸钱。',
'610':'忧愁度日禄平平，亲人难凭独自成；伏带上人福可取，谋权近贵有虚名。',
'620':'居家努力积资财，外出经营必有灾；食足衣丰须奋斗，不为谁肯送将来。',
'630':'命中应主自清高，行走他乡身乐陶；偶得上人能指点，吉星照见福星朝。',
'640':'家业飘零资财消，纵有金银守不牢；不幸频频分散去，用尽无来命里招。',
'650':'命中财禄有阴晴，难积人间钞万铜；努力持家非见盛，他人议论事无成。',
'660':'成家立业苦蹉跎，数招劳苦奈如何；寻得财资难作用，有兴有败遇人托。',
'670':'前程分定岂枉然，交结虚花义不全；真是富贵财难守，找到舟来又失船。',
'680':'填房外进有余财，作事浮华内苦怀；数中自招衣食旺，空门活计得和谐。',
'690':'此数之中能立成，近官求谋有奇名；可作清闲儒士客，巧妙机关出群英。',
'700':'快乐无忧日渐升，平地青云上九重；家庭福禄财资旺，定取朱衣可兴腾。',
'710':'数定清高禄渐加，体象居官受碧纱；中年不稳争名祸，晚岁荣兴福自华。',
'720':'事业难成不靠亲，营求买卖走红尘；他乡创立人夸奖，得取声名遍地闻。',
'730':'禄重山高数不低，机关深妙有谁知；财业即去终无聚，运转荣华骏马骑。',
'740':'志气随高命不强，田园固有岂能长；逍遥快乐云边客，失意之时空自忙。',
'750':'人口平安牛马全，资财满户不须言；无忧无虑安康乐，祸伏福边无永年。',
'760':'营运求财事难安，六亲冷淡不相关；只因八字生成定，苦困穷悉未得欢。',
'770':'命数之中福气高，名声远望禄自招；小职威权应显达，运通月影上仙桥。',
'780':'丰衣多食自然有，宅舍兴隆进人口；快乐清闲命里招，囊中财物安分守。',
'790':'家有珍珠又有金，忧愁只怕外人侵；守己营求门户吉，无败多成不费心。',
'800':'世业须当努力成，勤劳和气可通行；牛马田园隆旺盛，财产能积少巧名。',
'810':'命数清高主贵妻，钱财多积有盈余；须防盗贼来侵取，不意交加当自知。',
'820':'前程有定积资财，命主他乡人口灾；小职虚名终有就，迎门玉宝自飞来。',
'830':'纱罗衣服足金银，牛自成行马作群；屋内珍珠并宝玉，大小安康福满门。',
'840':'平地虚名乡里传，身闲心乐有余钱；官门合显为官职，富贵还须倚靠贤。',
'850':'独创家园小有名，提携合作自能行；他乡并立庄田业，举步无宁四顾成。',
'860':'此命身高不靠亲，或居云外弃红尘；家贫断就才人望，快乐悠悠福禄临。',
'870':'生来不靠亲，白手创财珍；牛马多由命，不必费精神。',
'880':'为人志气高，官禄不须劳；贵人来扶助，晚岁可逍遥。',
'890':'性情清幽，福气悠悠；有官有印，终生不愁。',
'900':'谨防小人，盗取财珍；失路不迷，和气六亲。',
'910':'仙鹤居林，信敏逢尊；风流儒士，道德真纯。',
'920':'小年有权，自是良贤；运限通达，他乡积钱。',
'930':'小年官低，晚年紫衣；资财丰满，盘阿依稀。',
'940':'英雄气豪，官位清高；万人之上，小心灾招。',
'950':'朱衣贵人，去旧迎新；命数优美，福气自真。',
'960':'命定扬名，超出类行；无多贪求，吉利天成。',
'970':'马上英雄，命运顺通；逍遥快乐，荣华有功。',
'980':'富有金门，品德真纯；文库武库，美酒入唇。',
'990':'数满显上方，中华一朝纲；富贵安邦子，天仙到画堂。',
'1000':'偏枯之命，也能兴腾；但是不久，一世难胜。',
'1010':'日行八百，可称英雄；床头金尽，灰心欠通。',
'1110':'窗前明月，自似高洁；三杯酒下，才气敏捷。',
'1120':'身旺印重，官轻为病；少年不发，中年苦痛。',
'1160':'志气高扬，寿命不长；财资虽有，不能永昌。',
};

  var ctmscount=Number(ctms[bazi.getYear()])+Number(ctms[bazi.getMonth()])+Number(ctms[bazi.getDay()])+Number(ctms[bazi.getTime()]);

  $('#text666').html('<p style="color:#FF0000;text-align:center;">点击按钮↑查看八字解析(仅供娱乐参考)<p>【冲天妙數】'+ctmscount+' '+ctmss[ctmscount]+'<p>【'+bazi.getDay()+'论命】<jiazilm'+bazi.getDay()+'>');

      

      s += '<style>.ys甲{color:#228B22;}.ys乙{color:#228B22;}.ys丙{color:#FF0000;}.ys丁{color:#FF0000;}.ys戊{color:#715a15;} .ys己{color:#715a15;}.ys庚{color:#ef9113;}.ys辛{color:#ef9113;}.ys壬{color:#185fac;}.ys癸{color:#185fac;} .ys子{color:#185fac;} .ys丑{color:#715a15;} .ys寅{color:#228B22;} .ys卯{color:#228B22;} .ys辰{color:#715a15;} .ys巳{color:#FF0000;} .ys午{color:#FF0000;} .ys未{color:#715a15;} .ys申{color:#ef9113;} .ys酉{color:#ef9113;} .ys戌{color:#715a15;} .ys亥{color:#185fac;} </style>';
           
      s += '<style>lqdz男'+riGan+'比肩:before{content:"【比肩】兄弟/姑丈/朋友/同辈"}lqdz男'+riGan+'劫财:before{content:"【劫财】姐妹/儿媳/朋友/同辈"}lqdz男'+riGan+'食神:before{content:"【食神】女婿/外公/孙儿/晚辈/学生/下属/仆人"}lqdz男'+riGan+'伤官:before{content:"【伤官】祖母/岳母/孙女/晚辈/下属/仆人"}lqdz男'+riGan+'偏财:before{content:"【偏财】父亲/情人/叔伯"}lqdz男'+riGan+'正财:before{content:"【正财】妻子/弟媳/兄嫂/姑母"}lqdz男'+riGan+'七杀:before{content:"【七杀】儿子/姐夫/妹婿/侄儿/敌人/小人/恶势力/苛刻师长"}lqdz男'+riGan+'正官:before{content:"【正官】女儿/侄女/外婆/领导"}lqdz男'+riGan+'偏印:before{content:"【偏印】祖父/岳父/男外孙/亲属长辈/意外助力"}lqdz男'+riGan+'正印:before{content:"【正印】母亲/外孙女/贵人/助我之师长"}';
      s += 'lqdz女'+riGan+'比肩:before{content:"【比肩】姐妹/朋友/同辈"}lqdz女'+riGan+'劫财:before{content:"【劫财】兄弟/家公/朋友/同辈"}lqdz女'+riGan+'食神:before{content:"【食神】祖母/女儿/晚辈/学生/下属/仆人"}lqdz女'+riGan+'伤官:before{content:"【伤官】儿子/夫家姐夫妹夫/晚辈/下属/仆人"}lqdz女'+riGan+'偏财:before{content:"【偏财】家婆/兄嫂/弟媳/姑母"}lqdz女'+riGan+'正财:before{content:"【正财】父亲/伯叔"}lqdz女'+riGan+'七杀:before{content:"【七杀】情人/儿媳/夫家姐妹/外婆/敌人/小人/恶势力/苛刻师长"}lqdz女'+riGan+'正官:before{content:"【正官】丈夫/姐夫/妹婿/上司"}lqdz女'+riGan+'偏印:before{content:"【偏印】母亲/孙女/亲属长辈/意外助力"}lqdz女'+riGan+'正印:before{content:"【正印】祖父/女婿/孙儿/贵人/助我之师长"}</style>';
           
		   
		   
		   
      s += '';
	  
	  
	  
      $('#result').html(s);


$('#tgxynian').on('click', function() {
  $.sendMsg('<div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;">'+tianganxy[lunar.getYearGanExact()]+'</div>', false, function() {	console.log('sendMsg closed');  });}); // 天干象意

$('#tgxyyue').on('click', function() {
  $.sendMsg('<div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;">'+tianganxy[lunar.getMonthGanExact()]+'</div>', false, function() {	console.log('sendMsg closed');  });}); 

$('#tgxyri').on('click', function() {
  $.sendMsg('<div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;">'+tianganxy[lunar.getDayGan()]+'</div>', false, function() {	console.log('sendMsg closed');  });}); 

$('#tgxyshi').on('click', function() {
  $.sendMsg('<div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;">'+tianganxy[lunar.getTimeGan()]+'</div>', false, function() {	console.log('sendMsg closed');  });}); 


$('#niangan').on('click', function() {
  $.sendMsg('<lqdz男元男'+bazi.getYearShiShenGan()+'><lqdz女元女'+bazi.getYearShiShenGan()+'> ['+riGan+']</span><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;"><xx'+bazi.getYearShiShenGan()+'><br><qx'+bazi.getYearShiShenGan()+'><br><gj'+bazi.getYearShiShenGan()+'><br><gn1'+bazi.getYearShiShenGan()+'><br><gn2'+bazi.getYearShiShenGan()+'></div>', false, function() {
	console.log('sendMsg closed');  });}); // 插入到table td div span 等等 id="sendMsgNoHide" 如果要在js显示就把id放到同一个js里面即可

$('#yuegan').on('click', function() {
  $.sendMsg('<lqdz男元男'+bazi.getMonthShiShenGan()+'><lqdz女元女'+bazi.getMonthShiShenGan()+'> ['+riGan+']</span><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;"><xx'+bazi.getMonthShiShenGan()+'><br><qx'+bazi.getMonthShiShenGan()+'><br><gj'+bazi.getMonthShiShenGan()+'><br><gn1'+bazi.getMonthShiShenGan()+'><br><gn2'+bazi.getMonthShiShenGan()+'></div>', false, function() {
	console.log('sendMsg closed');  });});

$('#shigan').on('click', function() {
  $.sendMsg('<lqdz男元男'+bazi.getTimeShiShenGan()+'><lqdz女元女'+bazi.getTimeShiShenGan()+'> ['+riGan+']</span><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;"><xx'+bazi.getTimeShiShenGan()+'><br><qx'+bazi.getTimeShiShenGan()+'><br><gj'+bazi.getTimeShiShenGan()+'><br><gn1'+bazi.getTimeShiShenGan()+'><br><gn2'+bazi.getTimeShiShenGan()+'></div>', false, function() {
	console.log('sendMsg closed');  });});


$('#nianzhi1').on('click', function() {
  $.sendMsg(''+lunar.getBaZiShiShenYearZhiLiuqin()+'</span><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">'+lunar.getBaZiShiShenYearZhiShishen()+'</div>', false, function() {	console.log('sendMsg closed');  });});
$('#nianzhi2').on('click', function() {
  $.sendMsg(''+lunar.getBaZiShiShenYearZhiLiuqin()+'</span><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">'+lunar.getBaZiShiShenYearZhiShishen()+'</div>', false, function() {	console.log('sendMsg closed');  });});

$('#yuezhi1').on('click', function() {
  $.sendMsg(''+lunar.getBaZiShiShenMonthZhiLiuqin()+'</span><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">'+lunar.getBaZiShiShenMonthZhiShishen()+'</div>', false, function() {	console.log('sendMsg closed');  });});
$('#yuezhi2').on('click', function() {
  $.sendMsg(''+lunar.getBaZiShiShenMonthZhiLiuqin()+'</span><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">'+lunar.getBaZiShiShenMonthZhiShishen()+'</div>', false, function() {	console.log('sendMsg closed');  });});

$('#rizhi1').on('click', function() {
  $.sendMsg(''+lunar.getBaZiShiShenDayZhiLiuqin()+'</span><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">'+lunar.getBaZiShiShenDayZhiShishen()+'</div>', false, function() {	console.log('sendMsg closed');  });});
$('#rizhi2').on('click', function() {
  $.sendMsg(''+lunar.getBaZiShiShenDayZhiLiuqin()+'</span><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">'+lunar.getBaZiShiShenDayZhiShishen()+'</div>', false, function() {	console.log('sendMsg closed');  });});

$('#shizhi1').on('click', function() {
  $.sendMsg(''+lunar.getBaZiShiShenTimeZhiLiuqin()+'</span><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">'+lunar.getBaZiShiShenTimeZhiShishen()+'</div>', false, function() {	console.log('sendMsg closed');	  });	});
$('#shizhi2').on('click', function() {
  $.sendMsg(''+lunar.getBaZiShiShenTimeZhiLiuqin()+'</span><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">'+lunar.getBaZiShiShenTimeZhiShishen()+'</div>', false, function() {	console.log('sendMsg closed');	});	});





$('#nayinnian').on('click', function() {
  $.sendMsg('<nayin'+bazi.getYearNaYin()+'><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">夫妻纳音相同争吵不休，互不相让。女纳音克男纳音，女欺男，男怕女，阴盛阳衰。子女纳音克父母纳音，子女不听话。父母纳音克子女纳音，规矩大，子女怕父母，听从父母。<br>子女纳音生父母纳音，子女孝敬父母。父母纳音生子女纳音，父母溺爱子女，子女生活能力，社会能力差。丈夫纳音克妻子纳音大吉，也为阴阳得位，天经地义。<br>纳音不属于命理预测术的依据，纳音是一种对事物的名称而已，不可以当做吉凶的标准，更不可以当做断命的依据。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#nayinyue').on('click', function() {
  $.sendMsg('<nayin'+bazi.getMonthNaYin()+'><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">夫妻纳音相同争吵不休，互不相让。女纳音克男纳音，女欺男，男怕女，阴盛阳衰。子女纳音克父母纳音，子女不听话。父母纳音克子女纳音，规矩大，子女怕父母，听从父母。<br>子女纳音生父母纳音，子女孝敬父母。父母纳音生子女纳音，父母溺爱子女，子女生活能力，社会能力差。丈夫纳音克妻子纳音大吉，也为阴阳得位，天经地义。<br>纳音不属于命理预测术的依据，纳音是一种对事物的名称而已，不可以当做吉凶的标准，更不可以当做断命的依据。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#nayinri').on('click', function() {
  $.sendMsg('<nayin'+bazi.getDayNaYin()+'><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">夫妻纳音相同争吵不休，互不相让。女纳音克男纳音，女欺男，男怕女，阴盛阳衰。子女纳音克父母纳音，子女不听话。父母纳音克子女纳音，规矩大，子女怕父母，听从父母。<br>子女纳音生父母纳音，子女孝敬父母。父母纳音生子女纳音，父母溺爱子女，子女生活能力，社会能力差。丈夫纳音克妻子纳音大吉，也为阴阳得位，天经地义。<br>纳音不属于命理预测术的依据，纳音是一种对事物的名称而已，不可以当做吉凶的标准，更不可以当做断命的依据。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#nayinshi').on('click', function() {
  $.sendMsg('<nayin'+bazi.getTimeNaYin()+'><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">夫妻纳音相同争吵不休，互不相让。女纳音克男纳音，女欺男，男怕女，阴盛阳衰。子女纳音克父母纳音，子女不听话。父母纳音克子女纳音，规矩大，子女怕父母，听从父母。<br>子女纳音生父母纳音，子女孝敬父母。父母纳音生子女纳音，父母溺爱子女，子女生活能力，社会能力差。丈夫纳音克妻子纳音大吉，也为阴阳得位，天经地义。<br>纳音不属于命理预测术的依据，纳音是一种对事物的名称而已，不可以当做吉凶的标准，更不可以当做断命的依据。</div>', false, function() {	console.log('sendMsg closed');  });});

$('#changshengxynian').on('click', function() {
  $.sendMsg('<changsheng'+bazi.getYearDiShi()+'><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;"><changsheng2'+bazi.getYearDiShi()+'></div>', false, function() {	console.log('sendMsg closed');  });});
$('#changshengxyyue').on('click', function() {
  $.sendMsg('<changsheng'+bazi.getMonthDiShi()+'><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;"><changsheng2'+bazi.getMonthDiShi()+'></div>', false, function() {	console.log('sendMsg closed');  });});
$('#changshengxyri').on('click', function() {
  $.sendMsg('<changsheng'+bazi.getDayDiShi()+'><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;"><changsheng2'+bazi.getDayDiShi()+'></div>', false, function() {	console.log('sendMsg closed');  });});
$('#changshengxyshi').on('click', function() {
  $.sendMsg('<changsheng'+bazi.getTimeDiShi()+'><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;"><changsheng2'+bazi.getTimeDiShi()+'></div>', false, function() {	console.log('sendMsg closed');  });});




$('#changshengzznian').on('click', function() {
  $.sendMsg('<changsheng' + getChangSheng(bazi.getYearGan(), lunar.getYearGanIndexExact(), lunar.getYearZhiIndexExact()) + '><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;"><changsheng2' + getChangSheng(bazi.getYearGan(), lunar.getYearGanIndexExact(), lunar.getYearZhiIndexExact()) + '></div>', false, function() {	console.log('sendMsg closed');  });});
$('#changshengzzyue').on('click', function() {
  $.sendMsg('<changsheng' + getChangSheng(bazi.getMonthGan(), lunar.getMonthGanIndexExact(), lunar.getMonthZhiIndexExact()) + '><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;"><changsheng2' + getChangSheng(bazi.getMonthGan(), lunar.getMonthGanIndexExact(), lunar.getMonthZhiIndexExact()) + '></div>', false, function() {	console.log('sendMsg closed');  });});
$('#changshengzzri').on('click', function() {
  $.sendMsg('<changsheng' + getChangSheng(bazi.getDayGan(), 2 == bazi.getSect() ? lunar.getDayGanIndexExact2() : lunar.getDayGanIndexExact(), 2 == bazi.getSect() ? lunar.getDayZhiIndexExact2() : lunar.getDayZhiIndexExact()) + '><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;"><changsheng2' + getChangSheng(bazi.getDayGan(), 2 == bazi.getSect() ? lunar.getDayGanIndexExact2() : lunar.getDayGanIndexExact(), 2 == bazi.getSect() ? lunar.getDayZhiIndexExact2() : lunar.getDayZhiIndexExact()) + '></div>', false, function() {	console.log('sendMsg closed');  });});
$('#changshengzzshi').on('click', function() {
  $.sendMsg('<changsheng' + getChangSheng(bazi.getTimeGan(), lunar.getTimeGanIndex(), lunar.getTimeZhiIndex()) + '><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;"><changsheng2' + getChangSheng(bazi.getTimeGan(), lunar.getTimeGanIndex(), lunar.getTimeZhiIndex()) + '></div>', false, function() {	console.log('sendMsg closed');  });});


$('#taiyuan').on('click', function() {
  $.sendMsg('<nayin'+bazi.getTaiYuanNaYin()+'><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">胎元与万事万物相关联。胎元是个体受精怀孕期间，生命汲取外界能量的体现，吸收什么样的物质，影响着人的各个方面，是天生资源的体现，是遗传基因或家族因素的传承，可以直接弥补八字不足。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#minggong').on('click', function() {
  $.sendMsg('<nayin'+bazi.getMingGongNaYin()+'><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">命宫是立命之本。命宫，就像人居住的房子，反映了一个人的人后天天赋、才能、福禄、健康等，命宫的不同自然决定着命运的不同。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#shengong').on('click', function() {
  $.sendMsg('<nayin'+bazi.getShenGongNaYin()+'><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">身宫决定着人的人际周边环境。身宫在八字命理学中的地位也非常重要，它代表了一个人在社会、事业、沟通等方面的表现和成就，可以解释一个人在人际关系中的表现和处理事情的能力。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#taixi').on('click', function() {
  $.sendMsg('<nayin'+bazi.getTaiXiNaYin()+'><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">胎息是影响命运的重要因素之一，它与命盘其他因素共同决定了个人的命运。有关研究表明，胎息对于一个人一生的发展和命运是具有很大的影响力的。理论上来说，胎息是越强烈越好，胎息越旺盛则代表个人的生命力越强大。然而，正像所有事物一样，它也会受到其他因素的影响，诸如五行相生相克、地支相合相冲等等。</div>', false, function() {	console.log('sendMsg closed');  });});

$('#qylp').on('click', function() {
  $.sendMsg('<center>【起运流派说明】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">起运流派1：3天=1年，1天=4月，1时辰=10天<br>起运流派2：4320分=1年，360分=1月，12分=1天，1分=2小时</div>', false, function() {	console.log('sendMsg closed');  });});







$('#天三奇').on('click', function() {  $.sendMsg('<center>【天三奇】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">胸怀坦荡，博学多才。（与天乙并用，则建功立业，功勋卓著。居空亡，则为隐士高人。）</p><p>天上三奇甲戊庚，须得丑未主命吉。</p><p>凡命遇三奇，主人精神异常，襟怀卓越，好奇尚大，博学多能。</p><p>学艺专精、精力旺盛、脑力灵敏、机智灵巧、易成专业技能人才、如工程师、信息家、计算机软件设计、属技能专精之人。</p><p>三奇在什么条件下才能真正为奇? 无非是:</p><p>（一）顺布而排。即，年乙月丙日丁,或月乙日丙时丁。</p><p>（二）三奇必须得时得地, 不得死绝。</p><p>（三）三奇必有吉星贵人, 如天乙, 天月德贵人扶助。</p><p>（四）带元辰, 桃花, 天罗地网为无用。三奇具有特殊奇材的作用。</p><p>带天乙贵人者, 勋业超群。带天月二德者,不犯意外事故。带三合入局者,国家柱石。带官符劫煞者, 器识宏远。带空生旺者,脱尘离俗,不因有钱有势而惑乱，不因武力或权势而胁迫屈服。</p><p>三奇必须命局配合得体, 并有其它贵人吉星扶持才有荣华福寿,如果只有三奇无贵地, 命局组合不好, 势必钱财不丰，容易受欺负。即使命局较清粹,若三奇不落贵地而落空亡, 较为孤独, 即是蓬莱三岛客,万里走江山了。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#地三奇').on('click', function() {  $.sendMsg('<center>【地三奇】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">胸怀坦荡，博学多才。（与天乙并用，则建功立业，功勋卓著。居空亡，则为隐士高人。）</p><p>地上三奇乙丙丁，须得酉亥主命吉。</p><p>凡命遇三奇，主人精神异常，襟怀卓越，好奇尚大，博学多能。</p><p>学艺专精、精力旺盛、脑力灵敏、机智灵巧、易成专业技能人才、如工程师、信息家、计算机软件设计、属技能专精之人。</p><p>三奇在什么条件下才能真正为奇? 无非是:</p><p>（一）顺布而排。即，年乙月丙日丁,或月乙日丙时丁。</p><p>（二）三奇必须得时得地, 不得死绝。</p><p>（三）三奇必有吉星贵人, 如天乙, 天月德贵人扶助。</p><p>（四）带元辰, 桃花, 天罗地网为无用。三奇具有特殊奇材的作用。</p><p>带天乙贵人者, 勋业超群。带天月二德者,不犯意外事故。带三合入局者,国家柱石。带官符劫煞者, 器识宏远。带空生旺者,脱尘离俗,不因有钱有势而惑乱，不因武力或权势而胁迫屈服。</p><p>三奇必须命局配合得体, 并有其它贵人吉星扶持才有荣华福寿,如果只有三奇无贵地, 命局组合不好, 势必钱财不丰，容易受欺负。即使命局较清粹,若三奇不落贵地而落空亡, 较为孤独, 即是蓬莱三岛客,万里走江山了。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#人三奇').on('click', function() {  $.sendMsg('<center>【人三奇】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">胸怀坦荡，博学多才。（与天乙并用，则建功立业，功勋卓著。居空亡，则为隐士高人。）</p><p>人中三奇壬癸辛，须得巳卯主命吉。</p><p>凡命遇三奇，主人精神异常，襟怀卓越，好奇尚大，博学多能。</p><p>学艺专精、精力旺盛、脑力灵敏、机智灵巧、易成专业技能人才、如工程师、信息家、计算机软件设计、属技能专精之人。</p><p>三奇在什么条件下才能真正为奇? 无非是:</p><p>（一）顺布而排。即，年乙月丙日丁,或月乙日丙时丁。</p><p>（二）三奇必须得时得地, 不得死绝。</p><p>（三）三奇必有吉星贵人, 如天乙, 天月德贵人扶助。</p><p>（四）带元辰, 桃花, 天罗地网为无用。三奇具有特殊奇材的作用。</p><p>带天乙贵人者, 勋业超群。带天月二德者,不犯意外事故。带三合入局者,国家柱石。带官符劫煞者, 器识宏远。带空生旺者,脱尘离俗,不因有钱有势而惑乱，不因武力或权势而胁迫屈服。</p><p>三奇必须命局配合得体, 并有其它贵人吉星扶持才有荣华福寿,如果只有三奇无贵地, 命局组合不好, 势必钱财不丰，容易受欺负。即使命局较清粹,若三奇不落贵地而落空亡, 较为孤独, 即是蓬莱三岛客,万里走江山了。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#三台').on('click', function() {  $.sendMsg('<center>【三台】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">三台原来是星名，是位于太微垣的三颗星，下台、中台、上台。八字算命先生用来比愈人命级别。如官星坐三台，旺就连升三级，衰就下台，平和中台不上不下。常人印坐三台连盖三间大瓦房。三台还配合八座看人考试晋级的事等等吧。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#天乙').on('click', function() {  $.sendMsg('<center>【天乙】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">一生人缘佳，遇事有人解救危难，化险为夷。</p><p>“甲戊庚牛羊, 乙己鼠猴乡, 丙丁猪鸡位, 壬癸兔蛇藏, 六辛逢虎马, 此是贵人方.”——《渊海子平》</p><p>人命有天乙贵人，遇事有人帮，临难有人解，是化险为夷最有力的贵人之星。</p><p>天乙贵人：人缘、社交缘、异性缘、长辈缘。</p><p>一生少病，人缘佳，易有社会地位，很适合从事公关性质的工作。</p><p>经书有云：『天乙者，乃天上之神，与太乙并列，其神最尊贵，所到之处，危难隐然而避。』由此可知天乙贵人之神通广大，遇吉神则有喜上加喜之庆。逢而为喜，富加且贵，是吉祥之神。凡人命遇之，昌荣有望，达人逢之，功名早显。</p><p>天乙贵人入命：心性聪明，出入近贵。大运流年见天乙贵人：有生官发财之机，最少亦有吉祥庆事加临。天乙贵人坐旺地：身体健康吉祥富贵，福禄加倍。天乙贵人逢合为忌：多见劳苦，劳苦功高。天乙贵人逢刑冲：多劳累，遇事则贵人去。女命天乙贵人入命、日主自坐二德者：可嫁贵夫。</p><p>天乙贵人是八字里面最重要、最吉祥的一颗贵人星，八字带天乙贵人吉星的人，无形之中会散发一种贵气，给人亲切好相处的感觉。还可以转危为安，有很多人发生了意外的危难，受到的伤害却很小，经常都是因为八字里面带有天乙贵人这颗贵人吉星。</p><p>如为喜用，不冲克刑害，多受器重提携与拥护。如毛爷爷出生的丁酉日。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#太极').on('click', function() {  $.sendMsg('<center>【太极】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">聪明好学，喜神秘事物（与华盖并用，又临戌亥，在易学方面多有成就。）</p><p>太极者，太初至极之谓。造物之所始，既生不灭，是谓太极。</p><p>命中带有太极贵人的八字，可以事职平顺亨通、福禄兼得，事情能够化险为夷，一生多得贵人相助，晚年可以幸福安逸，太极贵人可以说是一颗非常珍贵的吉星。</p><p>五行有始有终，造化始终相保，谓之太极。甲乙木生于子，终于午。丙日、丁月出于卯，落于酉，戊己土藏于辰戌丑未四维之库，庚辛金生于寅（垦卦），成于亥（乾卦），壬癸水生于申（坤卦），纳于巳（巽卦），人命逢之，主聪明好学，有钻劲，喜文史哲宗教等科目，为人正直，做事有始有终。如得生旺及有贵格吉星相扶助，主气宇轩昂, 福寿双全, 富贵人间。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#天印').on('click', function() {  $.sendMsg('<center>【天印】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">天印是指人命中的一种神煞，它与天间的阴阳五行密切相关，代表着人命中的贵人、福气等，同时也具有能够消灭邪气、破解凶灾的作用。命带天印的人通常能够拥有好的地位和职业，并受到上司的提拔。他们往往能够有自己的思想和见解，并在关键时刻做出正确的决策。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#天厨').on('click', function() {  $.sendMsg('<center>【天厨】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">1、有口福</p><p>2、厨艺一流、女命旺夫，但忌刑冲克破空亡</p><p>天厨又名「食神禄」，先贤陆位亦说:「天厨，宜食禀」，食禀是藏食粮的仓库。</p><p>天厨乃食神建禄之宫，食神是人命福星，食神既能得禄，其福必厚，故谓之天厨。</p><p>天厨入命的人，如不逢刑冲克破空亡，一生不愁吃穿，食禄不虞匮乏，可以享降天之禄、得天赐之福，古人谓之“衣食无忧，福禄满堂”。八字带有天厨贵人的命，一生大都能够平安吉顺，遇事可以化险为夷、福禄优游。女命逢天厨贵人，有口福，爱美食，爱做饭，且烹饪技术一流，饭菜之香胜于他人，能迅速拉高一家人的幸福指数，因此有旺夫一说。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#天官').on('click', function() {  $.sendMsg('<center>【天官】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">天官贵人又称赐福紫微帝君，是月中赐福之神。</p><p>命带天官贵人，福禄丰厚，做事易成，如从仕途，则主官运亨通，恪尽职守，对工作认真负责，做事细腻有度。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#文昌').on('click', function() {  $.sendMsg('<center>【文昌】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">聪明有才华，文笔能力强，利读书考学著书。</p><p>文昌多取食神之临官为贵, 为食神建禄之称。文昌入命,主聪明过人,又主化险为夷。气质雅秀,举止温文,男命逢着内涵,女命逢着仪容得体；具有上进心，不与粗俗之辈乱交朋友。</p><p>文昌逢合为喜：富加且贵。文昌逢合为忌：多见忙碌，劳苦功高。文昌坐旺地：身体健康，幸福如意，利考试，贵气十足。文昌逢刑冲：劳累辛苦。</p><p>文昌入命：心性聪明，出入近贵，气质文雅，好学新知，一生可以近贵利官。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#国印').on('click', function() {  $.sendMsg('<center>【国印】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">正直忠信，若生旺得其他吉神辅助，可得掌印之权。</p><p>四柱带国印者， 主人诚实可靠，严守清规， 照章行事，办事公道。为人和悦，礼义仁慈，气质轩昂。如国印逢生旺，有其它吉星相助，不逢冲破克害，不仅可以有掌印之能，可亦为官掌实权。</p><p>亦主一生工作，生活环境多动，若流年岁运逢之即主工作变动或家庭搬迁。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#福星').on('click', function() {  $.sendMsg('<center>【福星】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">主平安福气，丰衣足食。</p><p>出自明代《甲丙相邀入虎乡歌》，甲丙相邀入虎乡，更游鼠穴高强，戊猴己未丁宜亥，乙癸逢牛卯禄昌，庚赶马头辛到巳，壬骑龙背喜非常，此为有福文昌贵，遇者应知受宠光。</p><p>人命若带福星。主一生禄禄不缺，格局配合得当，自然多福多寿，金玉满堂。平常人得之，亦主三餐温饱，无忧无虑。此星多主平安福气而不主富贵。</p><p>命中带有福星贵人，不但能够遇事不为凶，甚至可以遇难呈祥，化险为夷，一辈子享受悠闲的福气。如果再加上岁运和流年的配合，那自然是一个福禄兴昌、光宗耀祖的命。倘若得不到岁运流年扶持的话，也可以平安的享受快乐的生活，所以说福星贵人是一个很高贵的星。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#金舆').on('click', function() {  $.sendMsg('<center>【金舆】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">财帛之星和配偶相关联，会受到配偶之资助，技术之相助。</p><p>与车有缘，拥有私车，交通事故等。</p><p>日坐金舆：能得异性之助；命带金舆：得祖荫。又称金舆禄神，此星入命能得扶助，一生能得富贵。</p><p>女人逢之，幸福安吉、骨肉安泰。</p><p>男人逢之，得贤妻，享妻钱财，荣富显贵。</p><p>古代皇族，多带此星。金舆是贵人乘坐的车子。乃禄命之旌旗，三才之节钺。主人性柔、貌美，举止温顺。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#破祖').on('click', function() {  $.sendMsg('<center>【破祖】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">破祖离乡偏印格，字面意思为祖业破败，无法继承祖业，必须远离家乡自创基业，印主思想，学业，贵人，就是说要靠自己所学的知识来求富贵，偏印非正印，不是甘愿付出，所遇贵人并不是真心提携于你。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#学堂').on('click', function() {  $.sendMsg('<center>【学堂】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">模仿力、创作力、想象力、理解力。</p><p>学业出类拔萃，文章声名远播</p><p>金命见巳，辛巳为正；木命见亥，己亥为正；水命见申，甲申为正；土命见申，戊申为正；火命见寅，丙寅为正。</p><p>学堂为纳音之长生，命中带之，主人聪明，可得考职功名，文才出众，功名显达。</p><p>学堂又称官贵学堂，八字带学堂的命格，大都饱读诗书，记忆力很好，行为举止无形间给人一种高贵气质的感觉，很多高学历甚至达官显贵之人，八字都有学堂贵星的加临。八字如果见到文昌又有学堂，可以说是一个贵气十足的命格；只要见到其中一位，都很擅长读书，一生当中也都能够化险为夷。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#词馆').on('click', function() {  $.sendMsg('<center>【词馆】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">学业出类拔萃，文章声名远播。</p><p>金命见巳，辛巳为正；木命见亥，己亥为正；水命见申，甲申为正；土命见申，戊申为正；火命见寅，丙寅为正。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#学堂纳音').on('click', function() {  $.sendMsg('<center>【学堂】纳音法</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">模仿力、创作力、想象力、理解力。</p><p>学业出类拔萃，文章声名远播</p><p>金命见巳，辛巳为正；木命见亥，己亥为正；水命见申，甲申为正；土命见申，戊申为正；火命见寅，丙寅为正。</p><p>学堂为纳音之长生，命中带之，主人聪明，可得考职功名，文才出众，功名显达。</p><p>学堂又称官贵学堂，八字带学堂的命格，大都饱读诗书，记忆力很好，行为举止无形间给人一种高贵气质的感觉，很多高学历甚至达官显贵之人，八字都有学堂贵星的加临。八字如果见到文昌又有学堂，可以说是一个贵气十足的命格；只要见到其中一位，都很擅长读书，一生当中也都能够化险为夷。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#词馆纳音').on('click', function() {  $.sendMsg('<center>【词馆】纳音法</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">学业出类拔萃，文章声名远播。</p><p>金命见巳，辛巳为正；木命见亥，己亥为正；水命见申，甲申为正；土命见申，戊申为正；火命见寅，丙寅为正。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#六厄').on('click', function() {  $.sendMsg('<center>【六厄】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">六厄，顾名思义，“厄”代表着厄运，所以这并不是一个好的神煞。命中有此神煞的人，一生要遭遇很多艰难困苦，哪怕有别的吉神相助，还是很难改变坎坷的命运。八字带六厄是什么意思，六厄在哪柱最好。命局中如有六厄的存在，那么其人在事业上很难取得成就，因为即使再努力也得不到领导的重任，可以说命中缺少伯乐，一生都比较艰难窘迫。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#孤辰').on('click', function() {  $.sendMsg('<center>【孤辰】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">性格孤僻沉默不语、清心寡欲、依恋安逸。</p><p>男命逢孤辰,平生感情多波折。女命逢寡宿，姻缘不利。孤寡与驿马并，流浪他乡，与华盖并于日时,恋情较晚，或为僧尼。与空亡并，小的时候能依靠的人较少，一生不太平稳，四处奔走。</p><p>孤辰入命：生性多孤独，孤枕独眠。古人常说『男怕孤、女怕寡』，八字里面孤辰、寡宿同现：常见事与愿违。男命：为人孤独。女命：为人独立。</p><p>男命怕孤辰落在财星之地，或日主的死绝之方。女命怕寡宿落在夫星之地，或日主的死绝之方。这现像造成缘份难偕久之憾，难免刑克，内心容易伤感，尤其是孤寡入命又见空亡的八字，一生比较孤单。八字忌孤辰、寡宿同时入命。</p><p>如果命带孤辰或寡宿，八字又有华盖出现，则是一个非常聪明的孤独之人，往往具有特殊才华，很多艺术家、哲学家、五术家，或是修道者、牧师，多是这种命格。</p><p>孤辰、寡宿也叫做隔角煞，又叫绝情煞。在年月柱，与六亲缘份淡薄，独立自成之命。在日柱，夫妻男女缘份淡薄。在时柱，与子孙缘分淡薄。</p><p>命带孤辰、寡宿的人，不具交际能力与手腕，兄弟朋友情谊也显得有始无终，这就是孤寡入命终须寂的道理。所以八字有孤寡的人，其实无须汲汲追求社交或过份接近喧嚣人潮，养性独处反而显得安然自得。古来五术界得以流芳者，大都八字有孤寡、华盖空亡等神煞入命，惟能处静耐寂之人才得以花长时间研究探讨精深命理。</p><p>凡人命犯孤寡，主形孤肉露,面无和气。生旺稍可,死绝尤甚。孤寡如有贵神相扶, 不至为害, 甚至"孤辰寡宿带官印,定做丛林领袖"。</p><p>孤辰寡宿是印星与财星的墓、绝之位，与丧门、吊客并见，不利父母的健康和运势，做事阻碍较多，伶仃、单寒。入贵格，主入赘。</p><p>阳命大运流年忌孤辰，阴命忌寡宿。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#寡宿').on('click', function() {  $.sendMsg('<center>【寡宿】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">异性缘浅薄，婚缘浅薄延后，夫缘浅薄，独身主义。</p><p>男命逢孤辰，平姻缘迟来，恋情较晚。女命逢寡宿姻缘来的较晚。孤寡与驿马并，流浪他乡，与华盖并于日时，孤苦伶仃，或为僧尼。与空亡并，自幼无倚，一生可能不太平顺，容易四处奔走。</p><p>寡宿入命：孤枕独眠，生性多孤独。孤辰、寡宿同现：凡事多见无所谓，乃四大皆空。男命：为人孤僻。女命：为人多孤独，老年比较孤单。</p><p>孤辰入命：生性多孤独，孤枕独眠。古人常说『男怕孤、女怕寡』，八字里面孤辰、寡宿同现：常见事与愿违。男命：为人孤独。女命：为人独立。</p><p>男命怕孤辰落在财星之地，或日主的死绝之方。女命怕寡宿落在夫星之地，或日主的死绝之方。这现像造成缘份难偕久之憾，难免刑克，内心容易伤感，尤其是孤寡入命又见空亡的八字，一生比较孤单。八字忌孤辰、寡宿同时入命。</p><p>如果命带孤辰或寡宿，八字又有华盖出现，则是一个非常聪明的孤独之人，往往具有特殊才华，很多艺术家、哲学家、五术家，或是修道者、牧师，多是这种命格。</p><p>孤辰、寡宿也叫做隔角煞，又叫绝情煞。在年月柱，与六亲缘份淡薄，独立自成之命。在日柱，夫妻男女缘份淡薄。在时柱，与子孙缘份淡薄。</p><p>命带孤辰、寡宿的人，比较不具交际能力与手腕，兄弟朋友情谊也显得有始无终，这就是孤寡入命终须寂的道理。所以八字有孤寡的人，其实无须汲汲追求社交或过份接近喧嚣人潮，养性独处反而显得安然自得。古来五术界得以流芳者，大都八字有孤寡、华盖空亡等神煞入命，惟能处静耐寂之人才得以花长时间研究探讨精深命理。</p><p>凡人命犯孤寡, 主形孤肉露, 面无和气。生旺稍可, 死绝尤甚.孤寡如有贵神相扶, 不至为害, 甚至"孤辰寡宿带官印, 定做丛林领袖"。</p><p>孤辰寡宿是印星与财星的墓、绝之位，与丧门、吊客并见，不利父母的健康和运势，做事阻碍较多，伶仃、单寒。入贵格，主入赘。</p><p>阳命大运流年忌孤辰，阴命忌寡宿。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#咸池').on('click', function() {  $.sendMsg('<center>【咸池】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">处事平与且待人宽厚，感情丰富、依从乖顺，体贴人意、柔婉可人，心地善良而异性缘好。</p><p>缺乏主见又少原则，易轻信他人而遭欺瞒，幻想过多、不切实际，虚荣心重致使常有贪念。</p><p>八字在流年中遇上咸池桃花时，只能说明在这一年中你的异性缘会变好，若命中无桃花，则在此年中你遇见自己真爱的可能很大，而命中若已有桃花再遇桃花则桃花过盛，此时便是桃花朵朵开，很有可能是烂桃花。而在桃花运年能不能结婚并不能因桃花运而决定，而是要看这一年与自己是否有刑冲克害，若有则不宜结婚，不然影响以后两人的生活。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#亡神').on('click', function() {  $.sendMsg('<center>【亡神】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">临喜用，则善于谋略，胸有城府；</p><p>临死绝则遇事浮躁，气量较小，脾气阴晴不定，经常任性而为。</p><p>三合局中神的前一位</p><p>亡神若为命局中所喜用的地支，并与吉神同柱，则会沉稳干练，谋略深算，严谨有威，好胜心强。如果恰为命局所忌的地支，又与其它凶煞同柱，则性情中存在着虚伪掩饰的成分，家业容易不顺，影响置业和储蓄；夫妻感情一般，多波折；子女的健康或运势也容易出现问题；自己也经常得罪人，严重的话会有法律纠纷出现。</p><p>亡神入命：城府多深，做事疑虑。</p><p>亡神与天乙贵人同现：老谋深算。</p><p>亡神为喜：面有威仪、足智多谋、处事严谨、断事如神，是一个真人不露相的人。</p><p>最怕亡神是命中凶忌之神：其人心性难定、事难如愿、脾气粗俗。</p><p>亡神入命为八字凶神的人，做起起事来总感觉无精打采，不利家运，一生难免争纷，严重者可能会惹上法律纠纷，容易涉足酒色场所。不管男命还是女命，夫妻间都容易争吵，子女也会有不省心的情况发生。古人论命特别强调了亡神入命的危害，其实不是没有道理。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#劫煞').on('click', function() {  $.sendMsg('<center>【劫煞】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">入喜用支而处生旺则才智过人，可创业绩。反之家运可能不太顺利，难聚财，严重会惹上法律纠纷，事与愿违。</p><p>劫煞主意外危难、健康、刑法上面的问题。为喜具有竞争心，肯求上进，做事有魄力，敢担当。</p><p>劫煞与贵星同柱：谋事有成。劫煞与天乙贵人、或喜用神同柱：有才能和智谋。劫煞与羊刃同柱：小心意外危险。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#灾煞').on('click', function() {  $.sendMsg('<center>【灾煞】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">又名白虎煞，主人身意外。有天月吉神相助，多主武权之威。</p><p>灾煞也叫“白虎煞”，其性勇猛，冲破将星，谓之灾煞。</p><p>此煞主人身意外，根据所处五行支，在水火，防焚溺，金木，杖刃；土，坠落瘟疫。若与七杀同柱来克身，可能有危难。也主刑律官司。若灾煞是正官、正印的生旺之支，多是武权。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#驿马').on('click', function() {  $.sendMsg('<center>【驿马】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">升迁,调动,走动,迁移,奔波,换工作,出国等。</p><p>贵人驿马多升擢,常人驿马多奔波。</p><p>代表这个人一生走动多、远行、会出远门。一生驿马运重，即使是在一个地方，也经常会忙个不停，这些都是驿马的作用。</p><p>驿马坐旺地：利禄亨通。驿马为喜用：心高气爽，动则有喜。四柱财官有力，真好马也。</p><p>驿马为喜用，自坐财官地：岁运逢财官星，主升迁。驿马为忌且逢冲：是非波动。吉神坐马：有乔迁之喜或顺动之利。凶神坐马：奔走四方，忙于生计。驿马与财星同柱：为喜则财源广进；为忌则奔走四方。驿马与财官、贵人同柱：才是真马。驿马与正官同柱：为喜者风儒雅士，为忌者性格开放。</p><p>驿马坐七杀，带羊刃或劫煞：小心突发事故。驿马逢冲，带羊刃、元辰、空亡：注意人身意外。驿马见合：有牵制之虑。驿马坐死墓绝、羊刃、劫煞：做事有始无终，飘泊无定。驿马自坐绝地：凶，尤岁运再逢冲。驿马自坐死、绝方：做事少成。桃花坐马：为情爱受难。驿马坐劫煞或羊刃：劳碌奔波，心性多冲动；尤岁运再逢。</p><p>劫煞坐马：容易有意外危险。马星生财者：有名扬之机。男命，驿马自坐财星：娶他乡富女。女命，驿马与天乙贵人同柱：不利姻缘。女命，驿马坐独官：夫为有用人，儿孙亦同。女命，驿马自同：嫁远乡。</p><p>驿马逢冲：心猿意马，奔波，忙碌，乃天涯之客。流年驿马逢冲：此年多奔波，有迁异职动之机，并多见出国或远行。驿马冲动，若带羊刃、血支等神煞，应该小心行事。</p><p>命带驿马的人比较闲不下来，经常总是把自己弄得很忙，所以古人说『驿马入命，心不安闲』即是此谓。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#华盖').on('click', function() {  $.sendMsg('<center>【华盖】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">文章、艺术、聪明、孤独，宗教、佛道，浪迹江湖。</p><p>艺术之星，多有文学，音乐，设计方面的天赋，但性情较孤独，具有敏感性质。</p><p>华盖是一颗吉祥之星，有揽护君主威严的职权，所以华盖是权力的象征，也是工作职事变化的代表性，亦是艺术之星。</p><p>华盖临生旺地为喜用，此人才华横溢；</p><p>华盖临（日干）墓地，在日支和时柱为忌，不利子女的健康或运势；若有气，可能为僧道；</p><p>华盖+七杀、桃花，可能成为艺人、巫师；</p><p>华盖+桃花+贵人，会为艺人明星。</p><p>华盖是八字忌神，虽然聪明好学，但个性比较有孤僻现象，常见血气方刚，不靠六亲。如果是八字喜神，一生可以自立更生，见解超群，才华有过人之处；可谓气宇不凡，是一个有条件、有能力成就事业的人。</p><p>双华盖入命：命中多贵人。华盖为八字吉神：一生利官近贵，技艺出众。岁运华盖逢刑冲：事职有动；若岁运不利，小心意外危难。华盖坐空亡、或逢刑冲：工作起伏变动较多。华盖带将星，福气深厚。华盖在空亡、死、绝之地，可修身养性，修习佛理，净化自身。女命，华盖坐日支：形同寡宿。</p><p>一般都称华盖为孤独之星，如上所言确实如此。有很多方外出家人、在家修道人，甚至九流技术艺业的人，八字里面都带有华盖。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#墓杀').on('click', function() {  $.sendMsg('<center>【墓杀】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">墓杀这个神煞代表坎坷多，诸事不顺利，无论做什么事情总是难以成功。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#将星').on('click', function() {  $.sendMsg('<center>【将星】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">权力之星，易掌握权势，较有老板或主管之命，具有领导力、威慑力。</p><p>将星入命：能文能武，一生有权柄威信，具有组织领导能力，会见掌权之机。将星为真格：须正官、七杀有力，或印星有力。将星入命，岁运为财官：大权在握，利禄亨通。</p><p>将星与亡神同现：才智过人，深具谋略，会是栋梁之才。将星无破：财、官运亨通。将星三合为忌神：奔波多劳。将星逢冲克，权利事职有变动。</p><p>将星跟权力地位有关，命带将星的人，给人不可侵犯的感觉，很自然的散发出一种无形、难以言喻的权威感，让人望而生敬。很多做官的人或工商高层主管八字里面大都带有将星，所以也称为将权，八字带有将星，称做将权入命。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#天罗').on('click', function() {  $.sendMsg('<center>【天罗】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">注意健康问题、容易惹上法律纠纷。</p><p>火命人逢戌亥为天罗, 水土命逢辰巳为地网. 男忌天罗, 女忌地网.</p><p>天罗地网, 容易惹上法律纠纷, 大运流年遇之,于人不利，若天月二德解救则无忧。</p><p>大多命带罗网的人，在人生旅途上所接受的考验、打击较重大，须奋斗挣扎才能出人头地，若命格不高，意志不足就被命运之神俘虏，庸庸碌碌过其一生；有的则甘心落后，误入歧途。</p><p>天罗地网逢三刑六害之神，再见魁罡、身强杀重、官杀混杂，伤官见官、财星在偏印皆主会触犯刑律，验率颇高。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#地网').on('click', function() {  $.sendMsg('<center>【地网】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">注意健康问题、容易惹上法律纠纷。</p><p>火命人逢戌亥为天罗, 水土命逢辰巳为地网. 男忌天罗, 女忌地网。</p><p>天罗地网, 容易惹上法律纠纷, 大运流年遇之,于人不利，若天月二德解救则无忧。</p><p>大多命带罗网的人，在人生旅途上所接受的考验、打击较重大，须奋斗挣扎才能出人头地，若命格不高，意志不足就被命运之神俘虏，庸庸碌碌过其一生；有的则甘心落后，误入歧途。</p><p>天罗地网逢三刑六害之神，再见魁罡、身强杀重、官杀混杂，伤官见官、财星在偏印皆主会触犯刑律，验率颇高。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#破碎').on('click', function() {  $.sendMsg('<center>【破碎】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">何谓破碎，就是不完整，又有破坏之意。一般在八字中，占物，不完整。占财，钱耗费了，散了。占家宅，是家人离散，分家之象。</p><p>大运流年遇破碎：破碎有流年大运犯破碎和命带破碎之分，主要对财运不通，事业难成等方面带来作用。一般来说大运流年有破碎的话，可能财运有败，寻求没有结果。</p><p>破碎入命：命犯破碎星导致的凶煞之气，属于暗金类凶煞，所以破碎煞又被称作“大红砂”、“红沙大煞”、“红纱大煞”，可能财帛有损耗或残破不全。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#天罗纳音').on('click', function() {  $.sendMsg('<center>【天罗】纳音法</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">注意健康问题、容易惹上法律纠纷。</p><p>火命人逢戌亥为天罗, 水土命逢辰巳为地网. 男忌天罗, 女忌地网.</p><p>天罗地网, 容易惹上法律纠纷, 大运流年遇之,于人不利，若天月二德解救则无忧。</p><p>大多命带罗网的人，在人生旅途上所接受的考验、打击较重大，须奋斗挣扎才能出人头地，若命格不高，意志不足就被命运之神俘虏，庸庸碌碌过其一生；有的则甘心落后，误入歧途。</p><p>天罗地网逢三刑六害之神，再见魁罡、身强杀重、官杀混杂，伤官见官、财星在偏印皆主会触犯刑律，验率颇高。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#地网纳音').on('click', function() {  $.sendMsg('<center>【地网】纳音法</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">注意健康问题、容易惹上法律纠纷。</p><p>火命人逢戌亥为天罗, 水土命逢辰巳为地网. 男忌天罗, 女忌地网.</p><p>天罗地网, 容易惹上法律纠纷, 大运流年遇之,于人不利，若天月二德解救则无忧。</p><p>大多命带罗网的人，在人生旅途上所接受的考验、打击较重大，须奋斗挣扎才能出人头地，若命格不高，意志不足就被命运之神俘虏，庸庸碌碌过其一生；有的则甘心落后，误入歧途。</p><p>天罗地网逢三刑六害之神，再见魁罡、身强杀重、官杀混杂，伤官见官、财星在偏印皆主会触犯刑律，验率颇高。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#四大空').on('click', function() {  $.sendMsg('<center>【四大空亡】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">四大空亡在传统的命理学里被认为是“四大恶煞”，吉凶不祥，如果一个人的命盘中出现四大空亡的情况，需要格外谨慎和注意。但是，现在的社会已经进入到了信息和科技的时代，这些传统的命理学概念也需要被重新审视。因此，在运用四柱八字进行卜算命理时，仍需结合现代社会的实际情况，不能太过迷信，应该采取科学、理性和客观的态度来对待。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#丧门').on('click', function() {  $.sendMsg('<center>【丧门】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">年逢此星，多主丧事、伤病、难聚财。</p><p>避免观丧，探病。</p><p>年支：子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥</p><p>丧门：寅 卯 辰 巳 午 未 申 酉 戌 亥 子 丑</p><p>吊客：戌 亥 子 丑 寅 卯 辰 巳 午 未 申 酉</p><p>披麻：酉 戌 亥 子 丑 寅 卯 辰 巳 午 未 申</p><p>年支前两位为丧门，比如巳年生人，前两位未就是丧门，后两位卯就是吊客，后三位寅就是批麻。</p><p>披麻、吊客、丧门皆为凶星。如大运、流年遇之，多主人身意外，伤病等事出现，也不容易聚财。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#吊客').on('click', function() {  $.sendMsg('<center>【吊客】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">年逢此星，多主丧事、伤病、难聚财。</p><p>避免观丧，探病。</p><p>年支前两位为丧门，比如巳年生人，前两位未就是丧门，后两位卯就是吊客，后三位寅就是批麻。</p><p>披麻、吊客、丧门皆为凶星。如大运、流年遇之，多主人身意外，伤病等事出现，也不容易聚财。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#披麻').on('click', function() {  $.sendMsg('<center>【披麻】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">年逢此星，多主丧事、伤病、难聚财。</p><p>避免观丧，探病。</p><p>年支前两位为丧门，比如巳年生人，前两位未就是丧门，后两位卯就是吊客，后三位寅就是批麻。</p><p>披麻、吊客、丧门皆为凶星。如大运、流年遇之，多主人身意外，伤病等事出现，也不容易聚财。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#红鸾').on('click', function() {  $.sendMsg('<center>【红鸾】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">喜事，结婚爱情喜事</p><p>“桃花红鸾天喜合，岁运逢之定结亲”。</p><p>红鸾天喜星，主喜庆之事，岁运逢之，若与桃花同见，年日柱与岁运多合者，若是结婚合适年纪，多有爱情结婚喜事。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#天喜').on('click', function() {  $.sendMsg('<center>【天喜】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">喜事，结婚爱情喜事</p><p>“桃花红鸾天喜合，岁运逢之定结亲”。</p><p>红鸾天喜星，主喜庆之事，岁运逢之，若与桃花同见，年日柱与岁运多合者，若是结婚合适年纪，多有爱情结婚喜事。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#自缢煞').on('click', function() {  $.sendMsg('<center>【自缢煞】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">在古代，自缢煞是专指悬梁自尽的神煞，而随着社会的逐渐发展，自缢煞也演变为，有自杀倾向、走投无路、想不开的等特征。自缢煞入命的人，思想容易比较消极，很容易走极端，遇到事情总是钻牛角尖，又找不到自我救赎的方法，久而久之自然就剑走偏锋，寻求死路，以求解脱。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#埋儿杀').on('click', function() {  $.sendMsg('<center>【埋儿杀】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">主凶，晦气后世昆裔，人命逢之恐无子承欢，或子不肖，孤单终老。此外，在民间成婚、搬迁择日时，犯埋儿杀的时辰最忌入房或安床。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#病符').on('click', function() {  $.sendMsg('<center>【病符】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">命盘中有病符的人容易产生焦虑、烦躁等不良情绪，影响身体健康状况，进而影响正常的工作和生活。因此，对于命盘中有病符的人，应该采取有效措施进行化解，改善身体状况。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#吞陷煞').on('click', function() {  $.sendMsg('<center>【吞陷煞】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">吞陷煞就是被黑洞活生生的吞了下去以下，由不得人有半点反抗和防备，根据实际经验，吞陷煞主要是指发生在封闭、或者半封闭空间中导致的伤害，例如车祸被困、掉入土坑、跌落山洞、室内火灾等。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#攀鞍').on('click', function() {  $.sendMsg('<center>【攀鞍】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">攀鞍，又称扳鞍。攀者，蹬也。鞍者，马鞍也。故，攀鞍乃蹬马启程之意。古时，多言将领出征策马扬鞭，征战沙场。又指文人大魁天下，夸官游街，走马上任。今亦指升职中榜之喜。此星多论吉而少论凶。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#大耗').on('click', function() {  $.sendMsg('<center>【大耗】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">大耗是一个不怎么吉祥的神煞，如果一个男命命局中有这个神煞，那么其人不仅长相不怎么好看，而且为人处世容易善恶不分，一生命运都比较坎坷。而如果是一个女命的命局中有这个神煞，那么这一生中会经历许多的磨难坎坷，还容易生出顽劣不孝的后代。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#小耗').on('click', function() {  $.sendMsg('<center>【小耗】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">小耗即小破财，如遗失购贵物之类，且常令人生追悔之心，所以最不宜与文昌化忌文曲化忌蜚廉等同度生年小耗与文曲化忌同度于命宫财帛宫福德宫，皆主其人常遗失小物件，破耗不大，但却麻烦于蜚廉同度。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#天德').on('click', function() {  $.sendMsg('<center>【天德】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">性格好，主化险为夷，不犯刑律，不遇危难。</p><p>寅月丁。卯月申。辰月壬。巳辛月。午月亥。未月甲。</p><p>申月癸。酉月寅。戌月丙。亥月乙。子月巳。丑月庚。</p><p>天月德助，处世无殃。能把遇到凶险转化为吉祥、顺利，随处保护。</p><p>天地德秀之气，其特点是化解危难。命带天德贵人者有福德，其人心地善良，身体健康，人缘好，在生平之中较不会遇到意外等，纵使逢之也能适时得以化解。</p><p>天月二德,乃日月会合照临,有何阴昧敢容其间？子平赋说:" 印绶得同天德,官刑不至, 至老无灾。"凡八字中有天月二德,其人恺悌慈祥,待人至诚仁厚。煞带天月德,明敏果决而仁厚,食伤带天月德,聪明秀慧而仁厚。书云: 素食慈心,印绶逢于天德,良以秉性慈祥故也。二德以天德为重,月德次之,临财官印绶,加一倍福力,日干尤吉。</p><p>天德和月德，都是贵人吉星的名称。与其它贵人星有一个最大的不同处，就是天月德比较趋向于一个人个性方面的表现，也就是说天月德谈的是性格。一般来说，八字有天月德入命的人，不但具有贵气的特质，行为处事坦白而无私，也有慈悲心或者同情心。人言积善之家必有余庆，所以天月德也具有遇事化险为夷的功能。</p>', false, function() {	console.log('sendMsg closed');  });});
$('#天德合').on('click', function() {  $.sendMsg('<center>【天德合】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">性格好，主化险为夷，不犯刑律，不遇危难。（天德的一半效果）。</p><p>寅月壬。卯月巳。辰月丁。巳月丙。午月寅。未月己。</p><p>申月戊。酉月亥。戌月辛。亥月庚。子月申。丑月乙。</p><p>天德与天干五合或地支六合者即为天德合，如正月见丁为天德，壬与丁合，壬即为天德合，类推。如没有天德贵人，有天德合也起到天德贵人的作用。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#月德').on('click', function() {  $.sendMsg('<center>【月德】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">性格好，主化险为夷，不犯刑律，不遇危难。</p><p>寅午戌月生者见丙, 申子辰月生者见壬,亥卯未月生者见甲, 巳酉丑月生者见庚。</p><p>月德贵人同天乙贵人一样，是一颗很好的吉星，命主在命局中逢上带有月德贵人，一生处世无忧，化险为夷，平生很少生病，不犯官刑。但需要注意的是，月德是勤勉敏慧之徳星，虽然命主身带此吉星，也需本身勤勉自助，才能在紧要关头获得帮助。</p><p>天月二德,乃日月会合照临,有何阴昧敢容其间？子平赋说:" 印绶得同天德,官刑不至, 至老无灾。"凡八字中有天月二德,其人恺悌慈祥,待人至诚仁厚。煞带天月德,明敏果决而仁厚,食伤带天月德,聪明秀慧而仁厚。书云: 素食慈心,印绶逢于天德,良以秉性慈祥故也。二德以天德为重,月德次之,临财官印绶,加一倍福力,日干尤吉。</p><p>天德和月德，都是贵人吉星的名称。与其它贵人星有一个最大的不同处，就是天月德比较趋向于一个人个性方面的表现，也就是说天月德谈的是性格。一般来说，八字有天月德入命的人，不但具有贵气的特质，行为处事坦白而无私，也有慈悲心或者同情心。人言积善之家必有余庆，所以天月德也具有遇事化险为夷的功能。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#月德合').on('click', function() {  $.sendMsg('<center>【月德合】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">性格好，主化险为夷，不犯刑律，不遇危难。（月德的一半效果）</p><p>寅午戌见辛，申子辰见丁，巳酉丑见乙，亥卯未见己。</p><p>月德合就是与月德相合的天干，如丙火与辛金合，我们就说寅午戌月德合辛，即寅午戌月的辛干。月德合凡遇预测之事一般都会达到比较和谐的程度。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#德秀').on('click', function() {  $.sendMsg('<center>【<u>德</u>秀】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">主内涵充实，才华出众，遇难呈祥。</p><p>夫德者，本月生旺之德；秀者，合天地中和之气、五行变化而成者也。又曰；德者，阴阳解凶之神；秀者，天地清秀之气，四时当旺之神。故寅午戌月，丙丁为德，戊癸为秀。申子辰月，壬癸戊己为德，丙辛甲己为秀。巳酉丑月，庚辛为德，乙庚为秀。亥卯未月，甲乙为德，丁壬为秀。凡人命中得此德秀，无破冲克压者，赋性聪明，温厚和气。若遇学堂，更带财官，主贵。冲克减力。</p><p>德秀贵人是八字里的一种神煞，古人对德秀贵人的解释是：“德者，本月生旺之德，秀者，合天地中和之气、五行变化而成者也。又曰：德者，阴阳解凶之神；秀者，天地淸秀之气，四时当旺之神”。此种说法表示德秀贵人不仅仅是贵人，还包含了一股文学的淸秀之意。</p><p>德秀贵人的女命：</p><p>为人仁慈、敏慧、慈善、温顺、修养高，一生有贵人相助，无险无虑，较为神佛帮助。“德”，就是利物救人、改过迁善。性格温和有相夫教子之美，主人仪容娟秀，对工作和家庭都是和和美美。</p><p>德秀贵人的男命：</p><p>德者，性格秉性；秀者，天地清秀之气，四时当旺之神。德秀贵人乃阴阳解厄之神，天在正气所在，故有自救解灾之能。男命带德秀贵人，且无冲破克压者，其人聪明晓事，温厚和气，文业通达，遇事常人贵人相助，总能化险为夷。带财官，主贵。此外，男命德秀贵人多带正气，所以命主很可能多在公、检、法或事业单位工作。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#秀德').on('click', function() {  $.sendMsg('<center>【德<u>秀</u>】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">主内涵充实，才华出众，遇难呈祥。</p><p>夫德者，本月生旺之德；秀者，合天地中和之气、五行变化而成者也。又曰；德者，阴阳解凶之神；秀者，天地清秀之气，四时当旺之神。故寅午戌月，丙丁为德，戊癸为秀。申子辰月，壬癸戊己为德，丙辛甲己为秀。巳酉丑月，庚辛为德，乙庚为秀。亥卯未月，甲乙为德，丁壬为秀。凡人命中得此德秀，无破冲克压者，赋性聪明，温厚和气。若遇学堂，更带财官，主贵。冲克减力。</p><p>德秀贵人是八字里的一种神煞，古人对德秀贵人的解释是：“德者，本月生旺之德，秀者，合天地中和之气、五行变化而成者也。又曰：德者，阴阳解凶之神；秀者，天地淸秀之气，四时当旺之神”。此种说法表示德秀贵人不仅仅是贵人，还包含了一股文学的淸秀之意。</p><p>德秀贵人的女命：</p><p>为人仁慈、敏慧、慈善、温顺、修养高，一生有贵人相助，无险无虑，较为神佛帮助。“德”，就是利物救人、改过迁善。性格温和有相夫教子之美，主人仪容娟秀，对工作和家庭都是和和美美。</p><p>德秀贵人的男命：</p><p>德者，性格秉性；秀者，天地清秀之气，四时当旺之神。德秀贵人乃阴阳解厄之神，天在正气所在，故有自救解灾之能。男命带德秀贵人，且无冲破克压者，其人聪明晓事，温厚和气，文业通达，遇事常人贵人相助，总能化险为夷。带财官，主贵。此外，男命德秀贵人多带正气，所以命主很可能多在公、检、法或事业单位工作。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#五鬼').on('click', function() {  $.sendMsg('<center>【五鬼】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">五鬼是一个瘟神，属于凶煞，也可以简称为五瘟。五鬼这个神煞是杀伤力很强的，能让人破财，或者生病，遇见这个神煞要格外小心。</p><p>五鬼这个凶煞的阴气是很重的，会影响着一个人的福运，容易使命主招小人，大运流年逢之，命主不管做什么事情都会不顺，财运不佳，还会招惹官司和是非。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#月破').on('click', function() {  $.sendMsg('<center>【月破】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">命中有破月神煞的人一生运势都不会很好。命中有月破这个神煞的人，不仅自身运势悲惨，还可能会影响到身边的亲戚朋友家人，并且越接近月破的月份受到的影响会越大，因此一定要多加注意。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#天医').on('click', function() {  $.sendMsg('<center>【天医】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">与医学有缘,少病,处死绝之地,则主人体弱，身体健康容易出问题</p><p>天医是掌管疾病之事的星神。四柱逢天医,如不旺,又无贵人吉神相扶,不利于身体健康，容易身弱无力。若生旺又有贵人相生助,不仅身体健壮,而且特别适合从事医学、心理学、哲学等。学习力、理解力、观察力、模仿力、好奇心、研究心、直觉观等能力皆强。</p><p>宗教、医药、哲学、人文等学说之星。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#四废日').on('click', function() {  $.sendMsg('<center>【四废日】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">败多成少</p><p>四废日是在春夏秋冬四个季节中，干支与季节旺气，呈一百八十度的相反的结构。季节为王（朝廷），四废日就像被朝廷刻黜的官吏。以“刻”为“不用”之意引申，四刻日生者，是比较没有个性、事业上面作为不大的人，或者是怀才不遇的人，平凡过其一生。</p><p>命局中带“四废”神煞的人，一生之中做事可能会有始无终，需要多注意健康问题。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#天赦日').on('click', function() {  $.sendMsg('<center>【天赦日】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">化险为夷之神，可解危难，处世无忧，对犯有刑事信息的人尤为有利。</p><p>天赦是化险为夷之星，能解人危难。尤其对犯法之人，有宽大处理之可能。纵有过错也可得到宽恕或赦免。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#孤鸾').on('click', function() {  $.sendMsg('<center>【孤鸾】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">不利婚姻，或外遇</p><p>又名“呻吟煞”。夫妻多纷争。</p><p>男命：婚姻中不太懂的相处，和妻子不和睦，可能会出现外遇事件。</p><p>女命：夫妻感情多一般，正缘来的晚，多为晚婚，注意健康问题。</p><p>女命带孤鸾与子女缘分薄，若四柱中见官杀则不适用此条。孤鸾日生的女子不利姻缘，夫妻感情多波折，两人需要面对的问题较多。房事不太和谐，注意外遇风波。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#金神').on('click', function() {  $.sendMsg('<center>【金神】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">个性刚毅，聪明多才，然人缘较差。</p><p>（弱命喜运行火乡，便为贵命。逢水旺则做事无成，与子女缘薄，做事劳苦）</p><p>《相心赋》云: "金神贵格, 火地奇哉,有刚断明敏之才,无刻薄欺瞒之意。"柱中有火, 不行火乡难发, 原局火无力, 逢火运显贵。"金神入火乡, 富贵天下响", "金神遇火威震边疆"。</p><p>金见水则沉,故金神不喜水乡,不利西北：金神喜见财,行财运则发：财运虽美,火乡更妙。</p><p>金神之义是取"巳酉丑"金属而名，又为"杀"（破碎）之位。子午卯酉"的"在巳，辰戌丑未"的"在丑，寅申巳亥"的"在酉。"的杀"是破球之星、加上金的刚性，成为"具有较强破坏力"的星宿，人命带之性多威猛强烈，胆大、好胜、常使人敬而远之。</p><p>刚金要得火炼，因此有"金神入火乡，发如猛虎"之说。也就是金神命格的人，其命中或岁运逢着丙、丁、巳、午时，能有大发展。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#差错').on('click', function() {  $.sendMsg('<center>【阴差阳错】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">女不太利于婆婆和妯娌姐妹间的亲情。男不太利于和妻子家的关系，不容易得到外家之助。</p><p>如月日时两重或三重犯此煞，多主二婚之事，常为婚姻烦恼，应注意感情培养。</p><p>行事阴阳颠倒，多有事成反败之虞。好变不好，诸事多见在阴错阳差下，或完成、或结束。</p><p>阴差阳错，是太过与不及、男女不和的意思。古说谓“女子逢之，公姑寡合，妯娌不足，夫家冷退。男子逢之，主退外家，亦与妻家是非寡合。其杀，不论男女，月日时两重或三重，犯之重，只日犯之尤重，主不得外家力，纵有妻财，亦成虚花，久后可能会与妻家有矛盾”。</p><p>一般带阴差阳错者可能有同母异父或同父异母的兄弟姐妹，在丧期中成婚、谈亲事时发生不愉快之事，妻子与父母相处的不太融洽，和妻舅感情疏远。做事阻碍较大，容易错失良机。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#大败').on('click', function() {  $.sendMsg('<center>【十恶大败】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">不善理财，家运不太顺利。</p><p>十败日所生之人由于生不带禄，多数不太会持家，花钱容易大手大脚，仓库金银化为尘。犹如无源之水、无本之木，没有资本很难成事。</p><p>在世袭的古代，表示不能承袭宜、父的官职、产业，在古代这情形多发生于犯罪被搜查并没收家产，所以名为“十恶大败”。十恶，是不赦重罪。大败，表示精光、消减 。在现代可能会表示把父辈辛苦创建留下来的产业，自己给吃喝玩乐掉。</p><p>生于十恶大败日的人，在庭生时，家运不顺，可能影响到置产、钱财储蓄。或已走过，当然不能得其福荫。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#六秀日').on('click', function() {  $.sendMsg('<center>【六秀日】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">聪明秀气</p><p>命带六秀聪明多才多艺，相貌俊秀，人缘佳。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#日德').on('click', function() {  $.sendMsg('<center>【日德】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">日德格属八字算命变格的一种，源于三命通会。日德格就是指五阳干坐支得贵，如甲坐寅为得禄，丙坐辰为官库，庚坐辰为财印两全，壬坐戌为财官印三奇具备。入此日德格者性格公益慈善，扶弱尊老，相貌巍然，柱中合行好运如不遇克破凶难，一定是大福的命。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#日贵').on('click', function() {  $.sendMsg('<center>【日贵】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">日贵是指八字命盘的日元得到了强助，从而隆起变得特别重要。具体来说，日贵分为两种类型：一是“日干太旺”，指日元所在天干或地支得到了过于旺盛的助力，比如地支为寅卯，天干为甲乙等，从而导致阳性太过旺盛，也就是俗称的“日旺”。二是“日元得根”，指日元所在地支或天干得到了有力的支持，比如地支为辰戌丑未，天干为戊己，这些干支的组合会让日元得到更大的作用空间和发挥能力，也就是俗称的“日根”。总体来说，日贵在八字命理学中非常重要，因为它可以强化、激励、调动日元的力量，也就是对个人命运的发展起到重要影响。</p><p>日旺和日根虽然都属于日贵，但不同类型的日贵表现出的影响效果有所不同。首先，日旺的人天性活泼、积极、自信、果断，很容易获得成功和成就。但是，日旺也容易让人变得霸道、刚愎自用。其次，日根的人天性温和、坦诚、能力强，一般具有深厚的家庭情感和人脉资源，不需要过多运作就能得到好机会。但是，日根也容易让人变得固步自封、缺乏创新意识。总的来说，日旺和日根都有其独特的加持效果，将日贵发挥到极致，可以让人更好更快地获得成功和幸福。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#进神').on('click', function() {  $.sendMsg('<center>【进神】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">进神就好像是春天来临一般，此时春回大地，万物复苏，呈现出一派生机的好状态。不过进神的旺衰不同，具体情况也不同。</p><p>命盘中有进神的人，性格非常刚毅果决，另一半往往很漂亮。只不过要注意，平日里多做善事，凡事以慈悲为怀，这样日子才会一直顺顺利利，对自身的益处才会更大。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#退神').on('click', function() {  $.sendMsg('<center>【退神】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">时柱代表归藏之所，也可为事业宫。无论你一生转换多少职业、行业，最终都有一个落处，这个落处，就是时柱，同时也意味着人生归结、落点。时柱有退神则不利，表示命主事业难以成功，就算成功了也只是短暂而已，持续时间不长，人生漫漫长路多有坎坷，未能安享晚年。</p><p>退神，古谓“值退神则官资降黜。阴差阳错日出生之人（退神者），男命，主退妻家，会减弱妻家的运气，或与妻家关系冷淡，联系不密，少言语；女命，则缺少主见，易受丈夫控制，或婚姻满意度差，或公婆不和，夫家退气。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#魁罡').on('click', function() {  $.sendMsg('<center>【魁罡】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">聪明机巧，临事果断，有威杀之。</p><p>忌刑冲，刑冲多有灭身之祸；忌身弱，身弱逢之则钱财不丰可能会遇刑律。</p><p>魁罡坐命：心性刚强霸气，聪明果断，攻击性，不服输，临事果断。带双魁罡：秉权，好杀，具领导才能。必须身旺，才能任其霸气；身弱，则容易遭意外事故，凡事不要强出头。</p><p>辰为天罡, 戌为河魁, 乃阴阳绝灭之地,故名。辰是水库属天罡,戌是火库属地魁,辰戌相见为天冲地击。魁罡格在日柱方能入格,其他三格不算,且不能冲破。魁罡格需日主健旺,也即以财官为喜用,因为魁罡格,具有攻击性且格局雄壮,日主衰弱需印生,与魁罡性格相反, 即不成为魁罡格了。</p><p>古歌云:"魁罡四日为先,叠叠相逢掌大权,庚戌庚辰怕显官,戊戌壬辰畏财运。主人性格多聪慧,好杀之心断不偏,倘有刑冲兼破害,一贫彻骨受笞鞭。"</p><p>身值天罡地魁,财运不佳,强则较显贵,魁罡聚会,发福非常。主为人性格聪明,文章振发,临事果断,秉权好杀。魁罡性严有操持。运行身旺发福百端,一见财官,祸患立至,或带刑杀尤甚。</p><p>倘日位独处,刑冲克制重临,人际关系可能不太好,刑责不已,求财困难。运临财旺官旺处,主防意外事故,若月令见财官印绶,日主一位,即以财官印食取用,虽难聚财,财官印食得位即无大害。</p><p>庚戌, 庚辰二日无官星, 若魁罡重叠有情,主富贵于名,但见财官则不成局,岁运再见财旺之乡,小心意外危险。</p><p>柱带魁罡者,虽有领导才能,声宏气壮,且好权术,好胜心强，但婚姻较为不顺。</p><p>古人说魁罡入命的八字不要吃牛肉，并且适合修道养性以断其霸气伤人之性。</p><p>“为人性格聪明，文章振发，临事果断，秉权好杀。”在现代，“魁罡”有新的诠释：带魁罡的人，人生可能充满惊涛骇浪，命运起伏大，分化较明显，容易碰到不好的事情。若是女性，大多是美人胚子，但是在恋爱和婚姻方面感情较差。法官、教授、艺术家、裁缝、理发业人士，有很多是魁罡日出的。</p><p>好坏参半，婚缘不佳财运不济，因在丑和戌把天乙贵人吃掉。具有独立自主精神、精明干练、模仿、组织力皆强，性情属于累积性暴发。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#阴阳煞').on('click', function() {  $.sendMsg('<center>【阴阳煞】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">女命属阴而喜阳，命主得戊午旺火是正阳。男命属阳而喜阴，命主得丙子旺水为正阴。这就是阴阳和畅。男命生于此日是男人中的男人，常常能够得到女人的爱。女命生于此日，是为阴阳和畅，可以嫁一个英俊的丈夫。再反过来，男得戊午，多女性相爱，可娶到美貌的娇妻；女得丙子，常遭到男人的追求。阴阳煞大忌元辰、咸池同宫，如果和咸池、元辰同宫，不管是男是女，都淫荡。如果男命得戊午， 多妇人相爱，而女命得丙子，多男子挑诱。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#八专').on('click', function() {  $.sendMsg('<center>【八专】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">身体好，生理欲望较强，多情。</p><p>此日柱，大抵天干坐禄或冠带，通常是身体比较好的人，生理欲望强，容易因酒、色而招来困扰、失败。</p><p>八专坐命：感情多有争端，六亲冷淡，夫妻感情多波折。男命：为忌神，多生理欲望较强，感情多波折。女命：为忌神，不择亲疏多交。</p><p>八专入命的人，大都比较多情，很容易在平常的相处之中即让自己不知不觉而陷入感情漩涡，很多畸情的发生不见得命带桃花，八专入命的男女也经常会有情事生忧的困扰。古人论命把八专视为桃花的一种，因为命带八专的人容易发生地下恋情。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#九丑').on('click', function() {  $.sendMsg('<center>【九丑】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">感情多纷争。</p><p>此煞名“丑”，不是指容貌不好看，相反的，此日生者大多容貌美丽，或很有吸引人的魅力。其所以名“丑”，是指名声方面的风评，因感情的事容易出问题，严重的可能会惹上法律纠纷，名声受损。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#羊刃').on('click', function() {  $.sendMsg('<center>【羊刃】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">武职之星，主观性、好胜心、倔强、刚烈、勇猛、担当、急躁。</p><p>羊刃+血刃+驿马同柱：人身意外、多惊多险、交通意外事故。</p><p>时刃者, 岁运并临, 可能会有意外危难。</p><p>年刃者，祖上家运可能不太顺利，影响到置产、钱财储蓄、家人之间的关系。</p><p>比如：癸卯 甲子 甲辰 癸酉此一八字出身农家。又如：乙酉 戊寅 庚申 戊寅此男命，年刃栽根，不仅少年丧父，且平生与妻不和。</p><p>一般格局中，透出杀神皆要制合，惟刃格大忌制化之。</p><p>羊刃常见于警察、军人。</p><p>羊刃是一种很强硬的气力，但它不一定是凶恶的，必须看八字中的整体组合。</p><p>假如一个人的八字很弱，羊刃可以起到很大的匡助作用，比如你贫穷困难时，羊刃就是一个强有力的兄弟，能帮助和支持你；假如八字比较旺，再来羊刃的话就危险了，缺乏适当制约的话，他会与你争夺，劫财。</p><p>羊刃是五行过旺之气，通常被认为是凶星。刃，即刀，故亦常与手术、杀伤有关。情绪容易激动，易树敌，生涯充满惊涛骇浪。从事机械、技术之研究，成功的人很多。虽然常碰到困难，但若成功时，所缔造的都是丰功伟业。</p><p>羊刃一忌重犯，二忌羊刃逢三合六合于岁运。三忌羊刃跟太岁冲战。羊刃一忌重犯叠遇，犯之必凶所谓“劫财羊刃，切忌时逢，岁运许临，祸患立至”是也。比如原局有子午卯酉四刃，岁运又逢则谓犯重刃，会主求财较为困难，与父亲缘薄，不常往来。夫妻感情多波折。其中尤以午午、酉酉相见大凶，以午酉重叠有相刑之象。</p><p>二忌羊刃逢三合六合于岁运。太岁乃凶神羊刃乃凶煞，羊刃三合六合太岁，则小心意外事故。比如甲刃在卯忌亥未戌流岁合之，若命中原犯三合六合，岁运再逢大忌；若原局无此病端则刃合岁灾稍轻。</p><p>三忌羊刃跟太岁冲战。经云：“羊刃冲合岁君，勃然祸至”是也。羊刃不可冲犯，犯之大怒凶性发；命中原刃最忌跟太岁冲战，比如甲刃在卯忌见酉年相战，可能会有意外的危难。</p><p>羊刃制凶要官杀制化去其暴气方可温顺驯服。甲刃在卯。要庚辛申制合，忌酉冲之；丙刃在午，要见壬癸亥制合，忌子冲之；戊刃在午，要见甲乙寅卯制合，忌子冲亡；庚刃在酉，要丙丁巳午制亡，忌卯冲之；壬刃在子，要戊已戌丑未制之，忌午冲之。</p><p>刃杀两凶互相制伏，日主从中渔利方善驾驭也。刃杀相见也要力量相等匹配，方为大贵之造。刃重杀柔要补杀，杀重刃轻要补刃，或用食制杀印化杀来助刃平定杀气。</p><p>羊刃颇忌伤食之星护卫，则杀官制化之功难于作用；若羊刃与伤食互倚成党，对命主可能会有不利的事情。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#飞刃').on('click', function() {  $.sendMsg('<center>【飞刃】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">人身意外、争端、是非之星，出现在月时两柱最严重。（除非有贵人星化解，最忌刑冲）</p><p>羊刃的六冲</p><p>如果原局羊刃，再遇其他支或流年有飞刃，身体健康上容易出问题。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#红艳').on('click', function() {  $.sendMsg('<center>【红艳】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">有魅力，多情，婚姻不顺</p><p>红艳煞是桃花的一种。命见红艳煞不见得有多漂亮，但风流多情，好美色，人命犯之，多数有外遇桃花，男女感情方面他把控的不太好，容易有纠纷。女命见之，难免私情，一谈恋爱可能就会陷入同居生活，如果地支有日干的禄，又带驿马，为生理欲望较强之人。</p><p>女命，红艳与正官或正印同柱：乃良妇也。女命，红艳与七杀同柱：易见外遇，不利姻缘。女命，红艳逢冲：须防身体健康的问题。女命，红艳逢合：桃花不断。女命，红艳坐凶煞：多见桃花灾。</p><p>红艳入命大都多情善交际、好花钱、一生可能会有酒色之灾。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#流霞').on('click', function() {  $.sendMsg('<center>【流霞】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">男忌酒色，女子在临盆分娩的时候需要注意。</p><p>流霞逢冲：易犯人身意外。男命：酒色。女命：分娩方面的意外。</p><p>古人称血煞。轻者可能会有皮肉之伤，健康方面的问题，重者可能会有人身意外。</p><p>命犯血煞，最怕八字凶神带重，大运流年又走在凶煞冲克之地，可能会因为一些事情而受伤或出现人身意外，如果八字有吉神转化，是可以化险为夷的。</p><p>岁运走在流霞、血支、血刃的流年，不论轻重，或多或少可能会受伤。如果是在不利的流年岁月期间，外出、开车多加小心谨慎，防止意外发生的严重性增加。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#墓库').on('click', function() {  $.sendMsg('<center>【墓库】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">墓库的力量通常是不太令人愉快的，因为这表明生命和财富都可能会受到隐藏。以某人八字中“辛未辛巳丁卯己酉”为例，他属于辛金性质的人，辛金有时被称为“刀星”，有隐秘之意。辛金致力于独立和自由，但是受到“墓”的影响，相当于半隐居，未能充分发挥自己的才华。这种力量如同一座固定的墓地，如果自己对待这种力量的态度是恐惧或消极的，生命和财富将会停滞不前。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#禄神').on('click', function() {  $.sendMsg('<center>【禄神】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">日主得根有利，身体健康，充满信心。</p><p>身旺见禄，喜见财官。身弱喜禄而逢死绝遭刑冲，又逢吉祥救应，家运可能不太顺利，容易影响到置产、家人之间的关系；同时在求财方面也较为困难。</p><p>见年神篇“元禄神”。主身体健康，充满信心，记忆力强，勤劳致富，一生少闲，性刚，容易得罪人。武富、武贵，技术研究方面独具慧眼。</p><p>在年月为“建禄”，四柱天干要见财官，“建禄生是月，财官喜透天”也。透财，富。透官，贵。</p><p>在时为“归禄”，不喜官星，“日禄归时没官星，号曰青云得路。”主少年发达。“建禄”主长辈之荫，主少年时代幸福。若逢卫破，家运可能不太顺利。身（日主）若太旺，不屑于祖辈留有的家产，不愿坐享现成之福，会自己在外乡创事业。若逢偏印，即破禄而无禄。</p><p>在日为“专禄”（甲寅、乙卯、庚申、辛酉四日），主会享受，爱过阔绰的生活。要有羊刃来保护（因禄柔、刃刚），若被合去则无禄。被冲不利丈夫或者妻子的健康和运势。</p><p>“归禄”喜羊刃、身旺、财星。不但不会追求物质享受，反而勤奋努力。逢合变无禄，逢冲，不利子女的健康和运势。“归禄”见食神、财星，多主名利双收。</p><p>八字如果有禄有财：丰盈一生。八字如果有禄无财：祖先庇荫。八字若无禄有财：白手起家。大运流年与禄神冲克：可能有意外危险，难聚财，健康上也要注意。</p><p>女命禄神与桃花同柱：为异性多付出。禄刃同柱：不利钱财与姻缘。</p><p>禄神在空亡之地：称为『财库落空』，一生做事只怕是有劳无功，虚名虚利。禄神逢冲：叫做破禄，就是一般常听所谓『破财』。大运流年逢之，不可轻言忽视，小心意外事故。</p><p>八字有禄神入命，予人有财有富之感，一生重视钱财，有金钱观念。精神力超强，脚踏实地，多见努力。企划技术能力强，个性稍见内向，较不善交际，能得人望。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#水溺煞').on('click', function() {  $.sendMsg('<center>【水溺煞】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">水溺煞顾名思义就是主水溺之事，命逢水溺煞的人，容易因为溺水而死。此煞取丙子、癸未、癸丑上带咸池、金神、羊刃。</p><p>水溺煞是一种主溺水之事的神煞，如果命带水溺煞的话，在游泳或者其他与水有关的事情中容易出溺水的事故。不过命带水溺煞的朋友也无须过度担心，只要尽量避开和水有关的高危活动，游泳之类的，一定要格外注意安全。命带水溺煞的朋友，不建议从事游泳池救生员、船员等时常需要接触水的行业。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#截路').on('click', function() {  $.sendMsg('<center>【截路】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">八字截路是用八字起卦技巧得出的一种预测命运的方法。它的意思是，一个人的命运有很多可能，但是在某一时刻，命运会被“截”下来，进入一条具体的道路。而这条道路，通常会遇到一些好的或者不好的事情，这些事情会影响个人的未来发展。而八字截路就是用来解析这些不好的事情。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#日破').on('click', function() {  $.sendMsg('<center>【日破】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">日破又叫做月破日，为八字神煞当中的煞星，也叫作“败月”、“犯月”。八字命犯日破之人，命途危机四伏，一生坎坷。此外，命带这个星煞也可以升级为“励志型”命式，也就是表示人危险与机遇并存之命运，大多数机遇都暗藏在危机之中，具有“凤凰男”或“凤凰女”的潜质。命犯日破之人，做事情特别积极上进，一般对自我要求很高，不过他们与生俱来危机感，是在人群中的危机感较高的一类人，居安思危的思想很浓厚，所以会持续努力，以此来规避可能出现的困难灾害。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#隔角煞').on('click', function() {  $.sendMsg('<center>【隔角煞】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">犯隔角煞易有牢狱之灾，六亲缘份较淡薄，属于一个凶神。</div>', false, function() {	console.log('sendMsg closed');  });});
$('#拱子禄').on('click', function() {  $.sendMsg('<center>【拱子禄】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">主勤奋积极，充满正能量的福气。</p><p>《三命通会》云:"凡拱格, 需日时同干,贵与月令通气。运行身旺及贵禄旺地方大好,印绶伤官食神财运大吉。忌行冲破害或羊刃七杀伤了日时,拱不住贵气,大忌填实空亡。譬如器皿, 虚则能容物,实则无用。所以只宜虚拱。完则能盛,破则无用,所以怕见空亡,岁运同。"</p><p>《古诗》云:"日时双拱禄中庭,金匮藏珠格清,至贵至高君子命,必须月令看支提,提纲有用提纲重,月令无神用此奇,所拱之位怕填实,又怕伤官在月支。羊刃重重来破格,如无此破贵无疑。"</p><p>拱是夹、向的意思；禄是干禄、拱禄，指八字柱中无禄位，日柱和时柱相配合虚拱出禄位。命带拱禄的人，做事特别勤奋好学努力，勤奋向上，且不怕困难挫折，越挫越勇，终形成花好月圆的结果，充满了正能量，很有福分的人。</p><p>凡拱格,需日时同干,贵与月令通气. 运行身旺及贵禄旺地方大好,印绶伤官食神财运大吉。忌行冲破害或羊刃七杀伤了日时,拱不住贵气,大忌填实空亡。譬如器皿,虚则能容物,实则无用，所以只宜虚拱。完则能盛,破则无用,所以怕见空亡,岁运同。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#拱午禄').on('click', function() {  $.sendMsg('<center>【拱午禄】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">主勤奋积极，充满正能量的福气。</p><p>《三命通会》云:"凡拱格, 需日时同干,贵与月令通气。运行身旺及贵禄旺地方大好,印绶伤官食神财运大吉。忌行冲破害或羊刃七杀伤了日时,拱不住贵气,大忌填实空亡。譬如器皿, 虚则能容物,实则无用。所以只宜虚拱。完则能盛,破则无用,所以怕见空亡,岁运同。"</p><p>《古诗》云:"日时双拱禄中庭,金匮藏珠格清,至贵至高君子命,必须月令看支提,提纲有用提纲重,月令无神用此奇,所拱之位怕填实,又怕伤官在月支。羊刃重重来破格,如无此破贵无疑。"</p><p>拱是夹、向的意思；禄是干禄、拱禄，指八字柱中无禄位，日柱和时柱相配合虚拱出禄位。命带拱禄的人，做事特别勤奋好学努力，勤奋向上，且不怕困难挫折，越挫越勇，终形成花好月圆的结果，充满了正能量，很有福分的人。</p><p>凡拱格,需日时同干,贵与月令通气. 运行身旺及贵禄旺地方大好,印绶伤官食神财运大吉。忌行冲破害或羊刃七杀伤了日时,拱不住贵气,大忌填实空亡。譬如器皿,虚则能容物,实则无用，所以只宜虚拱。完则能盛,破则无用,所以怕见空亡,岁运同。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#拱巳禄').on('click', function() {  $.sendMsg('<center>【拱巳禄】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">主勤奋积极，充满正能量的福气。</p><p>《三命通会》云:"凡拱格, 需日时同干,贵与月令通气。运行身旺及贵禄旺地方大好,印绶伤官食神财运大吉。忌行冲破害或羊刃七杀伤了日时,拱不住贵气,大忌填实空亡。譬如器皿, 虚则能容物,实则无用。所以只宜虚拱。完则能盛,破则无用,所以怕见空亡,岁运同。"</p><p>《古诗》云:"日时双拱禄中庭,金匮藏珠格清,至贵至高君子命,必须月令看支提,提纲有用提纲重,月令无神用此奇,所拱之位怕填实,又怕伤官在月支。羊刃重重来破格,如无此破贵无疑。"</p><p>拱是夹、向的意思；禄是干禄、拱禄，指八字柱中无禄位，日柱和时柱相配合虚拱出禄位。命带拱禄的人，做事特别勤奋好学努力，勤奋向上，且不怕困难挫折，越挫越勇，终形成花好月圆的结果，充满了正能量，很有福分的人。</p><p>凡拱格,需日时同干,贵与月令通气. 运行身旺及贵禄旺地方大好,印绶伤官食神财运大吉。忌行冲破害或羊刃七杀伤了日时,拱不住贵气,大忌填实空亡。譬如器皿,虚则能容物,实则无用，所以只宜虚拱。完则能盛,破则无用,所以怕见空亡,岁运同。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#童子').on('click', function() {  $.sendMsg('<center>【童子】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">时运不济</p><p>犯童子煞的人一般时运不好事业受阻，容易遇到人格有问题的人，遭到嫉妒和排斥，自己有时已经很努力了，但是结果没有意义。前途一片光明有时自己找不到出路，就像被困在陷阱的动物渴望寻找到出路一样。尤其是婚姻感情方面不顺利，晚婚居多。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#童子纳音').on('click', function() {  $.sendMsg('<center>【童子煞】纳音法</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">时运不济</p><p>犯童子煞的人一般时运不好事业受阻，容易遇到人格有问题的人，遭到嫉妒和排斥，自己有时已经很努力了，但是结果没有意义。前途一片光明有时自己找不到出路，就像被困在陷阱的动物渴望寻找到出路一样。尤其是婚姻感情方面不顺利，晚婚居多。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#勾煞男').on('click', function() {  $.sendMsg('<center>【勾煞】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">婚姻不顺</p><p>易遭人身意外，也主容易惹上法律纠纷，难聚财。</p><p><b>古诀</b>：</p><p>阳男阴女，命前三辰为勾，命后三辰为绞。</p><p>阴男阳女，命前三辰为绞，命后三辰为勾。</p><p>如甲子年生男，以命前三辰卯为勾，命后三辰酉为绞。</p><p>子见卯。丑见辰。寅见巳。卯见午。辰见未。巳见申。</p><p>午见酉。未见戌。申见亥。酉见子。戌见丑。亥见寅。</p><p>古人也称破煞，常听人说某人犯破格命，就是犯了勾绞煞的意思。命带勾绞的命，一生之中可能人际关系不太好，不善于与人相处，经常会有无礼相向的事情发生。勾绞犯命，感情方面也多有波折，争吵等现象是常有的事。不只是八字本身带勾绞煞会如此，流年岁运碰到也一样会犯。</p><p>勾绞之义为“牵连、羁绊”，不能发挥、受阻碍。一名“爪牙杀”，亦即地支相距90度之刑。</p><p>古歌云：“爪牙杀去命三辰，大忌金神羊刃临；夹杀克身无福救，常遭蛇虎伤其身。”    命带勾绞，并带金神、白虎者，可能会有意外危难，被坏人、蛇、虎、牛、马、狗等兽所伤。勾绞入命者，大多心思敏捷，主掌刑法之任，或为将帅，掌生杀大权，若克身，主人身意外。</p><p>行岁运逢之，主与人不懂得圆融，所以经常的得罪人，严重会惹上法律纠纷。勾绞只带一个灾轻，带两个灾重。命中无七杀者灾轻，有七杀者灾重。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#绞煞男').on('click', function() {  $.sendMsg('<center>【绞煞】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">婚姻不顺</p><p>易遭人身意外，也主容易惹上法律纠纷，难聚财。</p><p><b>古诀</b>：</p><p>阳男阴女，命前三辰为勾，命后三辰为绞。</p><p>阴男阳女，命前三辰为绞，命后三辰为勾。</p><p>如甲子年生男，以命前三辰卯为勾，命后三辰酉为绞。</p><p>子见卯。丑见辰。寅见巳。卯见午。辰见未。巳见申。</p><p>午见酉。未见戌。申见亥。酉见子。戌见丑。亥见寅。</p><p>古人也称破煞，常听人说某人犯破格命，就是犯了勾绞煞的意思。命带勾绞的命，一生之中可能人际关系不太好，不善于与人相处，经常会有无礼相向的事情发生。勾绞犯命，感情方面也多有波折，争吵等现象是常有的事。不只是八字本身带勾绞煞会如此，流年岁运碰到也一样会犯。</p><p>勾绞之义为“牵连、羁绊”，不能发挥、受阻碍。一名“爪牙杀”，亦即地支相距90度之刑。</p><p>古歌云：“爪牙杀去命三辰，大忌金神羊刃临；夹杀克身无福救，常遭蛇虎伤其身。”    命带勾绞，并带金神、白虎者，可能会有意外危难，被坏人、蛇、虎、牛、马、狗等兽所伤。勾绞入命者，大多心思敏捷，主掌刑法之任，或为将帅，掌生杀大权，若克身，主人身意外。</p><p>行岁运逢之，主与人不懂得圆融，所以经常的得罪人，严重会惹上法律纠纷。勾绞只带一个灾轻，带两个灾重。命中无七杀者灾轻，有七杀者灾重。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#元辰男').on('click', function() {  $.sendMsg('<center>【元辰】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">婚姻不顺</p><p>易遭人身意外，也主容易惹上法律纠纷，难聚财。</p><p><b>古诀</b>：</p><p>阳男阴女，命前三辰为勾，命后三辰为绞。</p><p>阴男阳女，命前三辰为绞，命后三辰为勾。</p><p>如甲子年生男，以命前三辰卯为勾，命后三辰酉为绞。</p><p>子见卯。丑见辰。寅见巳。卯见午。辰见未。巳见申。</p><p>午见酉。未见戌。申见亥。酉见子。戌见丑。亥见寅。</p><p>古人也称破煞，常听人说某人犯破格命，就是犯了勾绞煞的意思。命带勾绞的命，一生之中可能人际关系不太好，不善于与人相处，经常会有无礼相向的事情发生。勾绞犯命，感情方面也多有波折，争吵等现象是常有的事。不只是八字本身带勾绞煞会如此，流年岁运碰到也一样会犯。</p><p>勾绞之义为“牵连、羁绊”，不能发挥、受阻碍。一名“爪牙杀”，亦即地支相距90度之刑。</p><p>古歌云：“爪牙杀去命三辰，大忌金神羊刃临；夹杀克身无福救，常遭蛇虎伤其身。”    命带勾绞，并带金神、白虎者，可能会有意外危难，被坏人、蛇、虎、牛、马、狗等兽所伤。勾绞入命者，大多心思敏捷，主掌刑法之任，或为将帅，掌生杀大权，若克身，主人身意外。</p><p>行岁运逢之，主与人不懂得圆融，所以经常的得罪人，严重会惹上法律纠纷。勾绞只带一个灾轻，带两个灾重。命中无七杀者灾轻，有七杀者灾重。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#勾煞女').on('click', function() {  $.sendMsg('<center>【勾煞】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">婚姻不顺</p><p>易遭人身意外，也主容易惹上法律纠纷，难聚财。</p><p><b>古诀</b>：</p><p>阳男阴女，命前三辰为勾，命后三辰为绞。</p><p>阴男阳女，命前三辰为绞，命后三辰为勾。</p><p>如甲子年生男，以命前三辰卯为勾，命后三辰酉为绞。</p><p>子见卯。丑见辰。寅见巳。卯见午。辰见未。巳见申。</p><p>午见酉。未见戌。申见亥。酉见子。戌见丑。亥见寅。</p><p>古人也称破煞，常听人说某人犯破格命，就是犯了勾绞煞的意思。命带勾绞的命，一生之中可能人际关系不太好，不善于与人相处，经常会有无礼相向的事情发生。勾绞犯命，感情方面也多有波折，争吵等现象是常有的事。不只是八字本身带勾绞煞会如此，流年岁运碰到也一样会犯。</p><p>勾绞之义为“牵连、羁绊”，不能发挥、受阻碍。一名“爪牙杀”，亦即地支相距90度之刑。</p><p>古歌云：“爪牙杀去命三辰，大忌金神羊刃临；夹杀克身无福救，常遭蛇虎伤其身。”    命带勾绞，并带金神、白虎者，可能会有意外危难，被坏人、蛇、虎、牛、马、狗等兽所伤。勾绞入命者，大多心思敏捷，主掌刑法之任，或为将帅，掌生杀大权，若克身，主人身意外。</p><p>行岁运逢之，主与人不懂得圆融，所以经常的得罪人，严重会惹上法律纠纷。勾绞只带一个灾轻，带两个灾重。命中无七杀者灾轻，有七杀者灾重。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#绞煞女').on('click', function() {  $.sendMsg('<center>【绞煞】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">婚姻不顺</p><p>易遭人身意外，也主容易惹上法律纠纷，难聚财。</p><p><b>古诀</b>：</p><p>阳男阴女，命前三辰为勾，命后三辰为绞。</p><p>阴男阳女，命前三辰为绞，命后三辰为勾。</p><p>如甲子年生男，以命前三辰卯为勾，命后三辰酉为绞。</p><p>子见卯。丑见辰。寅见巳。卯见午。辰见未。巳见申。</p><p>午见酉。未见戌。申见亥。酉见子。戌见丑。亥见寅。</p><p>古人也称破煞，常听人说某人犯破格命，就是犯了勾绞煞的意思。命带勾绞的命，一生之中可能人际关系不太好，不善于与人相处，经常会有无礼相向的事情发生。勾绞犯命，感情方面也多有波折，争吵等现象是常有的事。不只是八字本身带勾绞煞会如此，流年岁运碰到也一样会犯。</p><p>勾绞之义为“牵连、羁绊”，不能发挥、受阻碍。一名“爪牙杀”，亦即地支相距90度之刑。</p><p>古歌云：“爪牙杀去命三辰，大忌金神羊刃临；夹杀克身无福救，常遭蛇虎伤其身。”    命带勾绞，并带金神、白虎者，可能会有意外危难，被坏人、蛇、虎、牛、马、狗等兽所伤。勾绞入命者，大多心思敏捷，主掌刑法之任，或为将帅，掌生杀大权，若克身，主人身意外。</p><p>行岁运逢之，主与人不懂得圆融，所以经常的得罪人，严重会惹上法律纠纷。勾绞只带一个灾轻，带两个灾重。命中无七杀者灾轻，有七杀者灾重。</p></div>', false, function() {	console.log('sendMsg closed');  });});
$('#元辰女').on('click', function() {  $.sendMsg('<center>【元辰】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">婚姻不顺</p><p>易遭人身意外，也主容易惹上法律纠纷，难聚财。</p><p><b>古诀</b>：</p><p>阳男阴女，命前三辰为勾，命后三辰为绞。</p><p>阴男阳女，命前三辰为绞，命后三辰为勾。</p><p>如甲子年生男，以命前三辰卯为勾，命后三辰酉为绞。</p><p>子见卯。丑见辰。寅见巳。卯见午。辰见未。巳见申。</p><p>午见酉。未见戌。申见亥。酉见子。戌见丑。亥见寅。</p><p>古人也称破煞，常听人说某人犯破格命，就是犯了勾绞煞的意思。命带勾绞的命，一生之中可能人际关系不太好，不善于与人相处，经常会有无礼相向的事情发生。勾绞犯命，感情方面也多有波折，争吵等现象是常有的事。不只是八字本身带勾绞煞会如此，流年岁运碰到也一样会犯。</p><p>勾绞之义为“牵连、羁绊”，不能发挥、受阻碍。一名“爪牙杀”，亦即地支相距90度之刑。</p><p>古歌云：“爪牙杀去命三辰，大忌金神羊刃临；夹杀克身无福救，常遭蛇虎伤其身。”    命带勾绞，并带金神、白虎者，可能会有意外危难，被坏人、蛇、虎、牛、马、狗等兽所伤。勾绞入命者，大多心思敏捷，主掌刑法之任，或为将帅，掌生杀大权，若克身，主人身意外。</p><p>行岁运逢之，主与人不懂得圆融，所以经常的得罪人，严重会惹上法律纠纷。勾绞只带一个灾轻，带两个灾重。命中无七杀者灾轻，有七杀者灾重。</p></div>', false, function() {	console.log('sendMsg closed');  });});		






$('#xingxiu').on('click', function() {  $.sendMsg('<center>【'+lunar.getXiu()+'宿】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">'+lunar.getXiuSong()+'<p>'+lunar.getXiu()+''+lunar.getZheng()+''+lunar.getAnimal()+' '+lunar.getGong()+'方</div>', false, function() {	console.log('sendMsg closed');  });});		

var p = lunar.getPrevJieQi(),n = lunar.getNextJieQi();	
	  
  	var padding = function(n){
  	  return (n<10?'0':'') + n;
  	};
  		
	var prevJieQi = lunar.getPrevJieQi();
	var jieQiSolar = prevJieQi.getSolar();	  
$('#jieqi').on('click', function() {  $.sendMsg('<center>【'+jq[p.getName()]+' '+p.getName()+'】</center><div style=padding:3px;></div><div style="max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;white-space:nowrap;width:100%;">' + prevJieQi.getName() + ''+jq[p.getName()]+' ' + jieQiSolar.getYear() + '-' + jieQiSolar.getMonth() + '-' + jieQiSolar.getDay() + ' ' + padding(jieQiSolar.getHour()) + ':' + padding(jieQiSolar.getMinute()) + '　　</div>', false, function() {	console.log('sendMsg closed');  });});		
	  



 

$('#shengxiao').on('click', function() {  $.sendMsg('<center>【生肖属'+lunar.getYearShengXiaoExact()+'】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;"><shengxiao'+lunar.getYearShengXiaoExact()+'></div><style>shengxiao鼠:before{content:"[肖鼠]个性：富幽默感及敏锐的观察力，行事积极，对工作或异性设想周到且细腻，其创见常令人激赏，具敏锐的观察力。特征：年幼时,劳碌奔波中越能发挥其灵敏的智能与耐性;在宽裕的环境中生长,没有失业烦恼,然易见异思迁换工作,中年遇失败後,会一切顺利,尤其能享受晚年财运,须注意罹患肾脏系统疾病。"}shengxiao牛:before{content:"[肖牛]个性：富幽默感及敏锐的观察力，行事积极，对工作或异性设想周到且细腻，其创见常令人激赏，具敏锐的观察力。特征：年轻时，在变化多端的环境中，度过操劳的日子，但有坚忍的独立性，年轻时，会为自己的前途散布辛劳的根源．进入中年期，会分为成功大道与沈没于逆境两条路。到四十五、六岁有第二个开拓良好机运的机会，如能抑制唯我独尊的性情，到晚年便能平安。"}shengxiao虎:before{content:"[肖虎]个性：意志坚强且活跃，为领导人物，但因这些性格遇到困难会受打击而身败名裂。特征：胆大，做事果决，年轻时就会出人头地，中年时若能把握年轻时机运则会成功，若不能把握机运，则会在人际关系中衰败下来，不再成功．寅年出生的人，担任公教人员为宜，且要自爱，不要有贪念与争功的歪念．注意呼吸系统，消化系统的疾病。"}shengxiao兔:before{content:"[肖兔]个性：做事从容且具幽默感，为受欢迎的社交家．然而，却有急性及见异思迁的缺点.特征：不管任何场合，都能受上司赏识．中年时若投机会埋灭一生，切注意要踏实做事，才能安稳生活。"}shengxiao龙:before{content:"[肖龙]个性：明朗、活跃的社交家，对事情容易发生兴趣，其缺点是容易热衷也易失去兴趣。特征：大部分与亲人之感情为薄，然在社会上却受欢迎．早年就能发挥潜力，进入中年期需注意无谓的野心，恐怕会身败名裂．若能克服野心，按部就班地照计划完成各项事情，必有最佳回报。最适合的职业为从事教育工作，须注意循环系统的疾病。"}shengxiao蛇:before{content:"[肖蛇]个性：大部分有自我主张，不容易为外人左右．另外，会盲目信赖他人，也是疑心重的人。特征：年轻时，生活在温暖的环境，长大後较懒，所以常换工作，对异性不能专情．中年时，应收敛惰性，立定志向，奋发努力．适宜从事刺激性的工作。"}shengxiao马:before{content:"[肖马]个性：大部分头脑转得快，行动轻敏，有开朗的个性，尊重师长，双亲，性情活泼但又不乏沉稳。特征：是标准的行动派，订立了目标，便努力迈进，年轻时就会露头角，中年若能维持不变，养成耐性才能有所成就，适宜在艺术，教育职位方面求发展．注意心脏系统的疾病。"}shengxiao羊:before{content:"[肖羊]个性：大部分为深思熟虑，研究心强．因此，有神经质且胆怯，做事拖泥带水。特征：虽然年轻时生活安稳，但恐十年代时，会患大疾．中年时是大展鸿图的好机会，因研究心强，若努力研究，能获高的地位，也能致富．特别注意消化器系统的疾病。"}shengxiao猴:before{content:"[肖猴]个性：才华洋溢，富辩才，进取心强，待人亲切，富同情心。特征：有灵敏的心思，有待人的素养，年少即受人注目，口才灵巧，反应快，年轻时便得好职位．但因有机心，恐会失去良好地位，特别注意一点，较适宜从事推销工作．注意关节方面的疾病。"}shengxiao鸡:before{content:"[肖鸡]个性：大部为规规矩矩且热心工作，并注重穿着，广交朋友。特征：年轻时，不愿受束缚，喜欢过自由自在的生活方式，因此在工作上无法定心，常换工作，三十岁以後，才会稍微收心．四十至五十岁为黄金时代，应把握时机，好好发挥才能．从事业务方面工作较合适，注意由偏食引起的疾病。"}shengxiao狗:before{content:"[肖狗]个性：大都尽责且保守．因此，较固执，不易接受他人的意见.特征：虽然能够成为团体中的干部，然而，常为了工作上的问题，与上司争议，而丢弃辛苦得来的工作。"}shengxiao猪:before{content:"[肖猪]个性：大部分为坚定意志者，有爱心及人情味，然而做事有时缺乏考虑。特征：年轻时，对家庭不满，但心里却仍敬爱双亲，性格诚实，自视甚高，常吃亏．亥年出生的晚年都很幸福，中年以後能慢慢发挥才能．需注意呼吸及消化系统的疾病。"}</style>', false, function() {	console.log('sendMsg closed');  });});		


//日时解释
var niannian=lunar.getYearInGanZhiExact();
var yueyue=lunar.getMonthInGanZhiExact();
var riri=bazi.getDay();
var shishi=bazi.getTime();
var ssrr=riri+shishi;
var shiri_h=rishi(ssrr);
var txt ='';
txt +=''+shiri_h;


$('#text1').html(''+txt);
$('#text1').val(txt);

//日详细
var rixx=rixiangxi(riri);
var txt1='';
txt1+=rixx;
$('#text2').html(''+txt1);
$('#text2').val(txt1);

//本命佛
var nianzhi=niannian.substr(-1);
var txtfo='';
txtfo+=benmingfo(nianzhi);
$('#textfo').html('本命佛：'+txtfo);	


$('#benmingfo').on('click', function() {  $.sendMsg('<center>【'+bmf[lunar.getYearShengXiaoExact()]+'】</center><div style=padding:3px;></div><div style="overflow-y:scroll;max-height:62vh;border:1px dashed #DDD;padding:1%;"><p style="border:0px;padding:1%;">本命佛：'+txtfo+'</div>', false, function() {	console.log('sendMsg closed');  });});		

		
//喜用神
var rigan=riri.substr(0,1);
var yuezhi=yueyue.substr(-1);
var riganyuezhi=rigan+yuezhi;
var txt2='';
txt2+=xiyongshen(riganyuezhi);
$('#text3').html(''+txt2);
$('#text3').val(txt2);		

//两头钳
	var txt123='';
	var niangan123=bazi.getYear().substr(0,1);
	var shigan123=bazi.getTime().substr(0,1);
	var jiajia123=niangan123+shigan123;
	txt123+='【**星：为八字的时辰】<br>'+ltq(jiajia123);
$('#text222').html(''+txt123);
$('#text222').val(txt123);	
		
      var daYun = yun.getDaYun();
      if(INDEX.daYun>=daYun.length){
        INDEX.daYun = 0;
      }
      var tds = $('#yun td');
      tds.removeClass('active').html('');
      tds.eq(0).html('大<br>运');
      tds.eq(12).html('流<br>年');
      tds.eq(23).html('小<br>运');
      for(var i=0,j=daYun.length;i<j;i++){
        var d = daYun[i];
		  var dds =LunarUtil.SHI_SHEN_GAN[bazi.getDayGan() + d.getGanZhi().substr(0,1)];
			  if(d.getGanZhi()==''){dds='';}
        //tds.eq(1+i).html('');
        tds.eq(1+i).html('<div style="font-size:14.9px;line-height:14.9px;"><span style=font-size:11.3px>'+d.getStartYear()+'</span><br><span style=font-size:11.3px>'+d.getStartAge()+'岁</span><br>'+d.getGanZhi()+'<br><font color=red>'+dds+'</font><br>'+changsheng(bazi.getDay().substr(0,1)+d.getGanZhi().substr(-1))+'<!--br>'+tiandiwuxing(d.getGanZhi().substr(0,1))+'<br>'+tiandiwuxing(d.getGanZhi().substr(-1))+'<br--></div>');
        //tds.eq(21+i).html(d.getGanZhi()+'1<br>'+tiandiwuxing(d.getGanZhi().substr(0,1))+'<br>'+tiandiwuxing(d.getGanZhi().substr(-1)));
      }
      //tds.eq(21+INDEX.daYun).addClass('active');
      tds.eq(1+INDEX.daYun).addClass('active');
      
      var liuNian = daYun[INDEX.daYun].getLiuNian();
      if(INDEX.liuNian>=liuNian.length){
        INDEX.liuNian = 0;
      }
      for(var i=0,j=liuNian.length;i<j;i++){
        var d = liuNian[i];
		  
var dayunshishen=LunarUtil.SHI_SHEN_GAN[bazi.getDayGan() + daYun[INDEX.daYun].getGanZhi().substr(0,1)];	
var liunianshishen=LunarUtil.SHI_SHEN_GAN[bazi.getDayGan() + d.getGanZhi().substr(0,1)];
var shishentext='';
		  
shishentext+='【参考一】你的喜用神：';shishentext+=txt2+'➜➜本年五行：'; shishentext+=tiandiwuxing(d.getGanZhi().substr(0,1))+'+'+tiandiwuxing(d.getGanZhi().substr(-1))+'。➜➜本年运势：';
shishentext+=shishen(dayunshishen+liunianshishen);
		  
var shishentext2=''; 
shishentext2+='【参考二】你的喜用神：';shishentext2+=txt2+'➜➜本年五行：'; shishentext2+=tiandiwuxing(d.getGanZhi().substr(0,1))+'+'+tiandiwuxing(d.getGanZhi().substr(-1))+'。➜➜本年运势：';
shishentext2+=shishen2(liunianshishen+dayunshishen);


		  
        //tds.eq(14+i).html('');
        tds.eq(13+i).html('<div style="font-size:14.9px;line-height:14.9px;"><span style=font-size:11.3px>'+d.getYear()+'</span><br><span style=font-size:11.3px>'+d.getAge()+'岁</span><br>'+d.getGanZhi()+'<br><font color=red>'+liunianshishen+'</font><br>'+changsheng(bazi.getDay().substr(0,1)+d.getGanZhi().substr(-1))+'<br><!--br>'+tiandiwuxing(d.getGanZhi().substr(0,1))+'<br>'+tiandiwuxing(d.getGanZhi().substr(-1))+'<br><a title="'+shishentext+'" onclick=alert("'+shishentext+'")>参1</a>'+'<br><a title="'+shishentext2+'" onclick=alert("'+shishentext2+'")>考2</a--></div>');
		
		
        
		
        //tds.eq(52+i).html('');
        //tds.eq(52+i).html(d.getGanZhi()+'<br>'+tiandiwuxing(d.getGanZhi().substr(0,1))+'<br>'+tiandiwuxing(d.getGanZhi().substr(-1))+'<br><a title="'+shishentext+'" onclick=alert("'+shishentext+'")>(参考1)</a>'+'<br><a title="'+shishentext2+'" onclick=alert("'+shishentext2+'")>(参考2)</a>');
      }
      tds.eq(13+INDEX.liuNian).addClass('active');
      
      var xiaoYun = daYun[INDEX.daYun].getXiaoYun();
      for(var i=0,j=xiaoYun.length;i<j;i++){
        var d = xiaoYun[i];
        tds.eq(24+i).html('<div style="font-size:14.9px;line-height:14.9px;">'+d.getGanZhi()+'<br><font color=red>'+LunarUtil.SHI_SHEN_GAN[bazi.getDayGan() + d.getGanZhi().substr(0,1)]+'</font><br><!--br>'+tiandiwuxing(d.getGanZhi().substr(0,1))+'<br>'+tiandiwuxing(d.getGanZhi().substr(-1))+'<br-->'+changsheng(bazi.getDay().substr(0,1)+d.getGanZhi().substr(-1))+'</div>');
      }
      
	  
	  
      tds = $('#liu-yue td');
      tds.removeClass('active').html('');
      tds.eq(0).html('流<br>月');
      
      try{
        var liuYue = liuNian[INDEX.liuNian].getLiuYue();
        for(var i=0,j=liuYue.length;i<j;i++){
          var d = liuYue[i];
          tds.eq(1+i).html('<span style=font-size:12.27px>'+d.getMonthInChinese()+'月'+'<br></span>');
			/*d.getliuyun2()实现流月也能预测好坏了。哈哈，当然是在lunar-xiugai.js中添加函数getliuyun2，并添加了 liuyue2数组*/
          tds.eq(13+i).html('<div style="font-size:12.27px;line-height:12.27px;">'+d.getGanZhi()+'<br><font color=red>'+LunarUtil.SHI_SHEN_GAN[bazi.getDayGan() + d.getGanZhi().substr(0,1)]+'</font><!--br>'+tiandiwuxing(d.getGanZhi().substr(0,1))+'<br>'+tiandiwuxing(d.getGanZhi().substr(-1))+'<br--><br>'+changsheng(bazi.getDay().substr(0,1)+d.getGanZhi().substr(-1))+'</div>');
        }
		
      }catch(ex){
        console.log(ex);
        if(INDEX.daYun==0){
          INDEX.daYun=1;
          onChange();
        }
      }
    }
	
	
	
	
	catch(e){
      console.log(e);
      $('#result').html('');
    }
  };
  
  compute();
  
  $('#year').on('input propertychange',onChange);
  $('#month').on('input propertychange',onChange);
  $('#day').on('input propertychange',onChange);
  $('#hour').on('input propertychange',onChange);
  $('#minute').on('input propertychange',onChange);
  
  $('#now_year').on('input propertychange',onChange);
  $('#now_month').on('input propertychange',onChange);
  $('#now_day').on('input propertychange',onChange);
  $('#now_hour').on('input propertychange',onChange);
  //$('#now_minute').on('input propertychange',onChange);
  //$('#now_second').on('input propertychange',onChange);
  
  $('#gender').on('change',onChange);
  $('#sect').on('change',onChange);
  $('#yunSect').on('change',onChange);
  var tds = $('#yun td');
  tds.each(function(i){
    $(this).data('index',i);
  });
  tds.on('click',function(){
    var index = $(this).data('index');
    if(index>=1&&index<12){
      INDEX.daYun = index-1;
      onChange();
    }else if(index>=13&&index<24){
      INDEX.liuNian = index-13;
      onChange();
    }
  });
})();
