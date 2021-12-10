//使用怪物手册
function handbook() {
	var handbook = document.getElementById("handbook");
	//显示怪物手册
	handbook.style.display = 'block';
	handbook_array = [];
	handbook.innerText = "按E/ESC退出\n\n";
	for (i = 1; i < 12; i++) {
		for (j = 1; j < 12; j++) {
			if (monster_array.includes(map[warrior.floor][i][j]) && (!handbook_array.includes(map[warrior.floor][i][j]))) {
				handbook_array.push(map[warrior.floor][i][j]);
			}
		}
	}
	if (handbook_array.length == 0) {
		handbook.innerText = "按E/ESC退出\n\n" + "当前层无怪物！";
		window.addEventListener("keydown", function(event) { // E/ESC
			if (handbook.style.display == 'block' && (event.which == 69 || event.which == 27)) {
				handbook.style.display = 'none';
			}
		})
	} else {
		handbook_array.sort();
		for (i = 0; i < handbook_array.length; i++) {
			monster_id = handbook_array[i]
			init_monster(monster_id);
			//真实掉血量
			var reduce_blood = attack(warrior, monster);
			if (reduce_blood == Infinity) {
				reduce_blood = "∞";
			}
			monster_name = monster_dic[monster_id];
			row_content = monster_name + '\xa0\xa0\xa0' +
				"血量\xa0" + monster.dp + "\xa0\xa0\xa0" +
				"攻击力\xa0" + monster.attack + "\xa0\xa0\xa0" +
				"防御力\xa0" + monster.defense + "\xa0\xa0\xa0" +
				"金币\xa0" + monster.gold + "\xa0\xa0\xa0" +
				"掉血\xa0" + reduce_blood + "\n\n";
			handbook.innerText += row_content;
		}
		//按ENTER隐藏怪物手册
		window.addEventListener("keydown", function(event) { // E/ESC
			if (handbook.style.display == 'block' && (event.which == 69 || event.which == 27)) {
				handbook.style.display = 'none';
			}
		})
	}
}

// 使用记事本
function notepad() {
	var notepad = document.getElementById("notepad");
	//显示怪物手册
	notepad.style.display = 'block';
	message_content_obj = JSON.parse(message_content);
	var empty_flag = true;
	notepad.innerText = "按E/ESC退出\n\n";
	for (i = 0; i < 19; i++) {
		if (warrior.message_array[i] == 1) {
			empty_flag = false;
			notepad.innerText += message_content_obj.notepad[i].content + "\n";
			//按ESC/E隐藏怪物手册
			window.addEventListener("keydown", function(event) { // E/ESC
				if (notepad.style.display == 'block' && (event.which == 69 || event.which == 27)) {
					notepad.style.display = 'none';
				}
			})
		}
	}
	if (empty_flag) {
		notepad.innerText = "按E/ESC退出\n\n" + "记事本为空！";
		window.addEventListener("keydown", function(event) { // E/ESC
			if (notepad.style.display == 'block' && (event.which == 69 || event.which == 27)) {
				notepad.style.display = 'none';
			}
		})
	}
}

//炸弹使用
function bomb() {
	//可以炸的怪物数组
	var can_damage_array = [12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37,
		38, 39, 58, , 59, 64
	];
	var around_loc = around_xy();
	if (confirm("是否使用炸弹炸掉当前位置周围小怪物（对Boss使用无效）？")) {
		for (i = 0; i < 4; i++) {
			if (can_damage_array.includes(map[warrior.floor][around_loc[i][0]][around_loc[i][1]]) && (!is_edge(around_loc[i][0],
					around_loc[i][1]))) {
				to_target(around_loc[i][0], around_loc[i][1], 1);
				warrior.bomb = false;
				warrior.tools_array[99 - 97] = 0;
			}
		}
		if (!warrior.bomb) {
			refresh_tools();
			refresh_attribute();
			alert("炸弹使用成功，已炸掉当前位置周围小怪物");
		} else {
			alert("炸弹使用失败，当前位置周围可能无怪物或存在Boss");
		}
	}

}

//对称飞行器使用
function symmetry_aircraft() {
	if (confirm("是否使用对称飞行器进行中心对称传送（剩余" + warrior.symmetry_aircraft + "次）？")) {
		if (map[warrior.floor][12 - warrior.x][12 - warrior.y] == 1) {
			new_x = 12 - warrior.x;
			new_y = 12 - warrior.y;
			skip_div(new_x, new_y);
			warrior.symmetry_aircraft -= 1;
			alert("对称飞行器使用成功，对称飞行器-1，当前剩余次数：" + warrior.symmetry_aircraft + "次");
			if (warrior.symmetry_aircraft == 0) {
				alert("对称飞行器次数已使用完！");
				warrior.tools_array[100 - 97] = 0;
				refresh_tools();
			}
		} else {
			alert("使用失败，传送目的点存在障碍物");
		}
	}

}

//向下飞行器
function down_aircraft() {
	if(confirm("是否使用向下飞行器飞到下一层楼？")){
		if(warrior.floor!=0){
			downstairs(true);
			warrior.down_aircraft = false;
			warrior.tools_array[101-97] = 0;
		}
		if(!warrior.down_aircraft){
			refresh_tools();
			refresh_attribute();
			alert("向下飞行器使用成功，向下飞行器-1");
		}else{
			alert("使用失败，已经到达最底层！");
		}
	}
}

//向上飞行器
function up_aircraft() {
	if(confirm("是否使用向上飞行器飞到上一层楼？")){
		if(warrior.floor!=49){
			upstairs(true);
			warrior.up_aircraft = false;
			warrior.tools_array[102-97] = 0;
			
		}
		if(!warrior.up_aircraft){
			refresh_tools();
			refresh_attribute();
			alert("向上飞行器使用成功，向上飞行器-1");
		}else{
			alert("使用失败，49层无法直接到达50层！");
		}
	}
}

//冰冻魔法106
function freezing_spells() {
	for (i = 0; i < SIZE; i++) {
		for (j = 0; j < SIZE; j++) {
			if (map[warrior.floor][i][j] == 3) {
				to_target(i, j, 1);
			}
		}
	}

}

//大黄钥匙
function big_key() {
	if (confirm("是否使用大黄钥匙打开本层楼所有黄门？")) {
		for (i = 0; i < SIZE; i++) {
			for (j = 0; j < SIZE; j++) {
				if (map[warrior.floor][i][j] == 5) {
					warrior.big_key = false;
					warrior.tools_array[108 - 97] = 0;
					to_target(i, j, 1);
				}
			}
		}
		if (!warrior.big_key) {
			refresh_tools();
			refresh_attribute();
			alert("大黄钥匙使用成功，本层楼所有黄门已打开，大黄钥匙-1");
		} else {
			alert("使用失败，本层楼无黄门！");
		}
	}
}

// 使用圣水
function holy_water() {
	if (confirm("是否使用圣水提升生命值？")) {
		warrior.dp += warrior.attack + warrior.defense;
		warrior.holy_water = false;
		warrior.tools_array[104 - 97] = 0;
		refresh_tools();
		refresh_attribute();
		alert("圣水使用成功，勇士生命值+" + (warrior.attack + warrior.defense) + "，圣水-1");
	}
}

//使用镐
function pickaxe() {
	var wall_array = [2]; //镐可破坏的物体数组
	var around_loc = around_xy(); //获得人物上下左右坐标
	if (confirm("是否使用镐破坏当前位置周围墙壁？")) {
		for (i = 0; i < 4; i++) {
			if (wall_array.includes(map[warrior.floor][around_loc[i][0]][around_loc[i][1]]) && (!is_edge(around_loc[i][0],
					around_loc[i][1]))) {
				to_target(around_loc[i][0], around_loc[i][1], 1);
				warrior.pickaxe = false;
				warrior.tools_array[105 - 97] = 0;
			}
		}
		//使用过-1
		if (!warrior.pickaxe) {
			refresh_tools();
			refresh_attribute();
			alert("使用成功，当前位置周围墙壁已破坏，镐-1");
		} else {
			alert("使用失败，当前位置周围无可破坏墙壁");
		}
	}
}

//使用地震卷轴
function earthquake_scroll() {
	if (confirm("是否使用地震卷轴破坏本层楼所有墙壁？")) {
		for (i = 1; i < SIZE - 1; i++) {
			for (j = 1; j < SIZE - 1; j++) {
				if (map[warrior.floor][i][j] == 2) {
					to_target(i, j, 1);
					warrior.earthquake_scroll = false;
					warrior.tools_array[111 - 97] = 0;
				}
			}
		}
		if (!warrior.earthquake_scroll) {
			alert("使用成功，本层楼所有墙壁已被破坏，地震卷轴-1");
			refresh_tools();
			refresh_attribute();
		} else {
			alert("使用失败，当前楼层无可破坏墙壁");
		}
	}
}

//被动道具提示
function passive_props() {
	alert("该道具为被动技能道具，装备即可使用！");
}


// 老头对话集锦
var message_content = '{"notepad":[' +
	'{"content": "2F：谢谢你救了我，为感谢你的帮助，请收下这些礼物（1000金币）"},' +
	'{"content": "3F：我可以给你怪物手册，它可以预测出当前楼层各类怪物对你的伤害。"}, ' +
	'{"content": "4F：有些门不能用钥匙打开，只有当你打败它的守卫后才会自动打开"}, ' +
	'{"content": "6F：你购买了礼物后再与商人对话，他会告诉你一些重要的消息"}, ' +
	'{"content": "16F：我听说在塔内有2把隐藏的红钥匙。"}, ' +
	'{"content": "16F：很好，你居然找到了我，作为奖励，我将给你一瓶圣水。喝了它将按照你的攻击和防御力的总和增加你的生命点数，你越晚用它效果越好。"},' +
	'{"content": "18F：在这个区域不多次提升攻击力，就不能打败石头人。切记前人教训！"}, ' +
	'{"content": "21F：大法师住在25楼，他是魔塔的主人。以你现在的状态去攻击它简直就是自杀。你应当在取得更高级别的道具后再去打败他。"},' +
	'{"content": "23F：我没有什么可说的，但有一个确切的消息藏在这个楼层里。"},' +
	'{"content": "27F：如果你到27楼时状态为：生命1500，攻击80，防御：98，拥有1蓝钥匙，5黄钥匙。那么祝贺你，你前期是比较成功的。"},' +
	'{"content": "31F：双手剑士的攻击力太高，你最好到能一击必杀时在与他战斗。"},' +
	'{"content": "33F：别匆忙，降低速度！"},' +
	'{"content": "36F：如果你能用好4条密道，你就不用与强敌作战就能上楼。"},' +
	'{"content": "37F：你需要用地震卷轴取出37楼仓库的所有宝物。"},' +
	'{"content": "39F：谜题：“在3点，拥有传送功能的密宝就会出现。”"},' +
	'{"content": "42F：巫师会用魔法攻击路过的人，在2个魔法警卫间通过会使你的生命减少一半。"},' +
	'{"content": "45F：44楼被藏在异空间，你只能用密宝才能达到。"},' +
	'{"content": "46F：41楼事实上是左右对称的。"},' +
	'{"content": "48F：像骰子上5的形状是一种封印魔法，你最好记住它，在你与49楼假魔王战斗时有用。"}]}';

// 所有具有属性的怪物数组
var monster_array = [12, 1300, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 
					24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 
					37, 38, 39, 47, 56, 58, 59, 64, 70, 71, 72];

// 所有具有属性的怪物字典
var monster_dic = {
	"12": "初级巫师",
	"1300": "骑士队长",
	"14": "鬼战士",
	"15": "战士",
	"16": "骑士",
	"17": "双手剑士",
	"18": "高级巫师",
	"19": "大法师",
	"20": "绿史莱姆",
	"21": "红史莱姆",
	"22": "大史莱姆",
	"23": "史莱姆王",
	"24": "小蝙蝠",
	"25": "大蝙蝠",
	"26": "吸血蝙蝠",
	"27": "骷髅人",
	"28": "骷髅武士",
	"29": "骷髅队长",
	"30": "初级法师",
	"31": "高级法师",
	"33": "兽人",
	"34": "兽人武士",
	"35": "石头人",
	"36": "",
	"37": "初级卫兵",
	"38": "中级卫兵",
	"39": "高级卫兵",
	"47": "魔龙",
	"56": "血影",
	"58": "幽灵",
	"59": "黑暗骑士",
	"64": "魔法警卫",
	"70": "大魔王",
	"71": "大魔王",
	"72": "Boss"
}
