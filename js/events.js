//打开暗墙
function open_hidden_wall(x, y){
	//暗墙(某些特殊的墙可以被破开){5(11,9), 9(5,10), 12(1,10), 12(1,2), 14(9,6), 16(11, 10), 16(8, 2), 19(4, 6), 魔龙墙壁}
	if (warrior.can_move && map[warrior.floor][x][y] == 2 &&(
		(warrior.floor == 5 && x == 11 && y == 9)||
		(warrior.floor == 9 && x == 5 && y == 10)||
		(warrior.floor == 12 && x == 1 && y == 10)||
		(warrior.floor == 12 && x == 1 && y == 2)||
		(warrior.floor == 14 && x == 9 && y == 6)||
		(warrior.floor == 16 && x == 11 && y == 10)||
		(warrior.floor == 16 && x == 8 && y == 2)||
		(warrior.floor == 18 && x == 3 && y == 6)||
		(warrior.floor == 19 && x == 4 && y == 6)||
		
		(warrior.floor == 35 && x == 2 && y == 1)||//魔龙墙壁
		(warrior.floor == 35 && x == 2 && y == 2)||
		(warrior.floor == 35 && x == 2 && y == 3)||
		(warrior.floor == 35 && x == 2 && y == 4)||
		(warrior.floor == 35 && x == 3 && y == 1)||
		(warrior.floor == 35 && x == 4 && y == 1)||
		(warrior.floor == 35 && x == 5 && y == 1)||
		(warrior.floor == 35 && x == 6 && y == 1)||
		(warrior.floor == 35 && x == 7 && y == 1)||
		(warrior.floor == 35 && x == 8 && y == 1)||
		(warrior.floor == 35 && x == 9 && y == 1)||
		(warrior.floor == 35 && x == 10 && y == 1)||
		(warrior.floor == 35 && x == 11 && y == 1)||
		(warrior.floor == 35 && x == 11 && y == 2)||
		(warrior.floor == 35 && x == 11 && y == 3)||
		(warrior.floor == 35 && x == 10 && y == 3)||
		(warrior.floor == 35 && x == 9 && y == 3)||
		(warrior.floor == 35 && x == 8 && y == 3)||
		(warrior.floor == 35 && x == 7 && y == 3)||
		(warrior.floor == 35 && x == 6 && y == 3)||
		(warrior.floor == 35 && x == 5 && y == 3)||
		(warrior.floor == 35 && x == 4 && y == 3)
		)) {
	    to_road(warrior.x, warrior.y);
	    to_warrior(x, y);
	}
}

//第3层魔王事件
function devil() {
    //禁止勇士移动
    warrior.can_move = false;

    //魔王出现
    document.getElementById("7#5").style.visibility = "visible";

    //设置0.5秒延迟
    setTimeout(function () {
        //魔法警卫出现
        var id = ["8#5", "10#5", "9#4", "9#6"];
        var element;
        for (var i = 0; i < id.length; i++) {
            element = document.createElement("div");
            element.setAttribute("class", "resource_64");
            var container = document.getElementById(id[i]);
            container.appendChild(element);
        }
    }, 500);

    //设置1秒延迟
    setTimeout(function () {
        //魔王及魔法警卫消失
        to_road(7, 5);
        to_road(8, 5);
        to_road(10, 5);
        to_road(9, 4);
        to_road(9, 6);

        //勇士被关入二层监狱(神圣剑，神圣盾被夺走，血量变成400)
        warrior.floor = 2;
        warrior.x = 8;
        warrior.y = 4;
        warrior.dp = 400;
        warrior.attack = 10;
        warrior.defense = 10;
        warrior.weapon = 'None';
        warrior.armor = 'None';
        warrior.can_move = true;

        re_init(map);
    }, 1 * 1000);
}

//第42层魔王事件
function devil_ft() {

	//禁止勇士移动
	
	// alert("骑士队长：啊！又是你！！（转身逃跑）");
	to_target(10,6,1);
	//移动骑士队长的位置
	to_target(8,6,13);
	warrior.can_move = false;
	//魔王出现
	document.getElementById("6#6").style.visibility = "visible";
	
	//设置1秒延迟
	// alert("你敢临阵脱逃！");
	
	//设置1.5秒延迟
	setTimeout(function () {
		//魔法警卫出现
		var id = ["7#6", "8#5", "8#7", "9#6"];
		var element;
		for (var i = 0; i < id.length; i++) {
			element = document.createElement("div");
			element.setAttribute("class", "resource_64");
			var container = document.getElementById(id[i]);
			container.appendChild(element);
		}
	}, 100);

	//设置1.5秒延迟
	setTimeout(function () {
		//骑士被杀
		to_target(8,6,1);
		to_target(8,6,130);
	}, 400);

	//设置1.5秒延迟
	setTimeout(function () {
		//骑士消失
		to_target(8,6,1);
	}, 600);
	
	//设置1.5秒延迟
	setTimeout(function () {
		//魔法警卫消失
		to_target(7,6,1);
		to_target(8,5,1);
		to_target(8,7,1);
		to_target(9,6,1);
	}, 1000);
	
	//设置1.5秒延迟
	setTimeout(function () {
		//魔王消失
		to_target(6,6,1);
		warrior.can_move = true;
	}, 1500);
	//alert("大魔王：虽然我刚才态度异常，但别担心在决斗时，我会像刚才这个无用的家伙一样让手下一拥而上。我期待着与你决斗。");
}

//触发魔法减血事件
function magic_reduce_blood(){
	if(warrior.floor>=41&&(!warrior.get_sacred_shield)){
		for(i=40;i<=49;i++){
			for(j=1;j<10;j++){
				for(k=1;k<10;k++){
					if(map[i][j][k]==64&&warrior.dp>1&&warrior.floor==i){
						if(map[i][j+2][k]==64&&warrior.x==j+1&&warrior.y==k){
							warrior.dp = Math.ceil(warrior.dp/2);
						}
						else if(map[i][j][k+2]==64&&warrior.x==j&&warrior.y==k+1){
							warrior.dp = Math.ceil(warrior.dp/2);
						}
					}
				}
			}
			for(m=1;m<12;m++){
				for(n=1;n<12;n++){
					if(map[i][m][n]==12&&judge_around(m,n)&&warrior.dp>100&&warrior.floor==i){
						warrior.dp -= 100;
					}
					if(map[i][m][n]==18&&judge_around(m,n)&&warrior.dp>200&&warrior.floor==i){
						warrior.dp-=200;
					} 
				}
			}
		}					
	}
}

//公主
function princess(){
	alert("时间到了，你已被命运选中。如果你不怕死亡，你最终将通过时空来到我这里。");
	to_road(6,6);
	alert("什么，只是只布娃娃？");
	warrior.twenty_six_princess = true;
}

//第二层小偷事件
function thief() {
	var thief_id = 62;
    if(warrior.floor==2){
		if(judge_around(7,3)&&map[2][7][3]==thief_id){
			to_target(7,3,1);
			to_target(7,2,thief_id);
			alert("。。。。");
			alert("。。。。喂");
			alert("。。。喂，醒醒");
			alert("你清醒了吗？你在监狱时还处于昏迷中，魔法警卫把你扔到我这个房间，但你很幸运，我刚完成逃跑的暗道，我们一起越狱吧。");
			alert("你的剑和盾被警卫拿走了，你必须先找到武器，我知道铁剑在5楼，铁盾在9楼，你最好先取到它们。我现在有事要做没法帮你，再见。");
		}
		if(judge_around(7,2)&&map[2][7][2]==thief_id){
			to_target(7,2,1);
			to_target(7,1,thief_id);
		}
		if(judge_around(7,1)&&map[2][7][1]==thief_id){
			to_target(7,1,1);
		}
		if(judge_around(11,11)&&map[2][11][11]==thief_id){
			alert("谢谢你救了我，我现在就帮你打通第35层的暗道。")
			to_target(11,11,1);
			map[35][10][5]=62;
		}
		
	}
	if(warrior.floor==10){
		alert("嘿！我们又见面了！非常感谢你打败了此区域的头目。我正苦恼于如何到更高的楼层，现在终于可以上去了。我听说银盾在11楼，银剑在17楼，这个消息不知道对你是否有用。");
		to_target(10,6,1);
		skip_div(10,6);
	}
	if(warrior.floor==15){
		if(judge_around(1,9)&&map[15][1][9]==thief_id){
			to_target(1,9,1);
			to_target(1,8,thief_id);
			alert("啊哈！你还好吗？这大章鱼挡住了我前进的道路，现在暗道终于完工了，你现在最好也躲开它。我要走了，再见。");
		}
		if(judge_around(1,8)&&map[15][1][8]==thief_id){
			to_target(1,8,1);
		}
	}
	if(warrior.floor==29){
		if(judge_around(2,6)&&map[29][2][6]==thief_id&&warrior.twenty_nine_thief){
			alert("哦，我刚完成暗道。你每次都及时赶到，看在朋友的份上，你可以免费试用。好了下次见。");
			to_target(2,6,1);
			to_target(3,6,thief_id);
		}
		if(judge_around(3,6)&&map[29][3][6]==thief_id&&warrior.twenty_nine_thief){
			to_target(3,6,1);
		}
		//当未完成go0f触发对话
		if(judge_around(2,6)&&map[29][2][6]==thief_id&&(!warrior.twenty_nine_thief)){
			alert("你先到别的地方走走，我还在挖暗道。");
		}		
	}
	if(warrior.floor==35){
		if(judge_around(10,5)&&map[35][10][5]==thief_id){
			alert("我已经给你挖通暗道。");
			to_target(10,4,1);
			to_target(10,5,1);
		}
	}
	if(warrior.floor==50){
		if(judge_around(5,6)&&map[50][5][6]==thief_id){
			alert("你怎么会在这里！你到底是谁？");
			alert("我在这里只有一个理由，那就是...");
			alert("啊！你就是魔王！你怎么还活着？");
			alert("我是不会死的。以前我只是对你的能力做测试而已。");
			alert("什么？你这是什么意思？你为什么要做这样的事情？");
			alert("神圣剑就是你装备的武器，智慧权杖是我所装备的武器。先知说过无论谁使用它们都必须要有足够的智慧，且剑只能被真正的战士使用。");
			alert("如你所说我就是那个战士。");
			alert("是的，你是最合适的人选。但你刚到魔塔时，你的能力还不足以支配神圣剑。因此我在塔内安排了各类机关，让你通过战斗直到可以控制神圣剑。");
			alert("很好，那么外面传说有一个公主被困在魔塔，就是为了把我骗到这里。是这样吗？");
			alert("是的。现在如果我们能够合作那么这场闹剧就结束了。现在让我们一起用权杖破坏神圣剑，这样伟大的时代就要降临了。");
			alert("我不会让你毁了神圣剑，让黑暗降临。");
			warrior.fifty_thief=true;
		}
	}
}

//白老头
function sage() {
	var white_old_man_id = 60;
	if(warrior.floor==2){
		if(judge_around(4,11)&&map[warrior.floor][4][11]==white_old_man_id){
			//弹出消息
			alert("谢谢你救了我，为感谢你的帮助，请收下这些礼物（1000金币）");
			alert("获得1000金币");
			warrior.gold += 1000;
			to_road(4,11);
			warrior.message_array[0]=1;
		}	
	}
	if(warrior.floor==3){
		if(judge_around(4,11)&&map[warrior.floor][4][11]==white_old_man_id){
			//弹出消息
			alert("我可以给你怪物手册，它可以预测出当前楼层各类怪物对你的伤害。");
			alert("获得怪物手册（快捷键G打开）");
			warrior.handlebook = true;
			warrior.tools_array[97-97] = 1;
			to_road(4, 11);			
			refresh_tools();
			refresh_attribute();
			warrior.message_array[1]=1;
			refresh_click_handbook();
		}
	}
    if(warrior.floor==4){
		if(judge_around(1,10)&&map[warrior.floor][1][10]==white_old_man_id){
			//弹出消息
			alert("有些门不能用钥匙打开，只有当你打败它的守卫后才会自动打开。");
			to_road(1,10);
			warrior.message_array[2]=1;
		}	
	}
	if(warrior.floor==6){
		if(judge_around(8,4)&&map[warrior.floor][8][4]==white_old_man_id){
			//弹出消息
			alert("你购买了礼物后再与商人对话，他会告诉你一些重要的消息。");
			to_road(8,4);
			warrior.message_array[3]=1;
		}	
	}
	if(warrior.floor==16){
		if(judge_around(11,1)&&map[warrior.floor][11][1]==white_old_man_id){
			//弹出消息
			alert("我听说在塔内有2把隐藏的红钥匙。");
			to_road(11,1);
			warrior.message_array[4]=1;
		}
		if(judge_around(11,11)&&map[warrior.floor][11][11]==white_old_man_id){
			//弹出消息
			alert("很好，你居然找到了我，作为奖励，我将给你一瓶圣水。喝了它将按照你的攻击和防御力的总和增加你的生命点数，你越晚用它效果越好。");
			warrior.holy_water=true;
			warrior.tools_array[104-97] = 1;
			to_road(11,11);
			warrior.message_array[5]=1;
		}
	}
	if(warrior.floor==18){
		if(judge_around(2,3)&&map[warrior.floor][2][3]==white_old_man_id){
			//弹出消息
			alert("在这个区域不多次提升攻击力，就不能打败石头人。切记前人教训！");
			to_road(2,3);
			warrior.message_array[6]=1;
		}	
	}
	if(warrior.floor==21){
		if(judge_around(6,6)&&map[warrior.floor][6][6]==white_old_man_id){
			//弹出消息
			alert("大法师住在25楼，他是魔塔的主人。以你现在的状态去攻击它简直就是自杀。你应当在取得更高级别的道具后再去打败他。");
			to_road(6,6);
			warrior.message_array[7]=1;
		}	
	}
	if(warrior.floor==23){
		if(judge_around(11,11)&&map[warrior.floor][11][11]==white_old_man_id){
			//弹出消息
			alert("我没有什么可说的，但有一个确切的消息藏在这个楼层里。");
			to_road(11,11);
			warrior.message_array[8]=1;
		}	
	}
	if(warrior.floor==27){
		if(judge_around(1,6)&&map[warrior.floor][1][6]==white_old_man_id){
			//弹出消息
			alert("如果你到27楼时状态为：生命1500，攻击80，防御：98，拥有1蓝钥匙，5黄钥匙。那么祝贺你，你前期是比较成功的。");
			warrior.message_array[9]=1;
		}	
	}
	if(warrior.floor==31){
		if(judge_around(1,11)&&map[warrior.floor][1][11]==white_old_man_id){
			//弹出消息
			alert("双手剑士的攻击力太高，你最好到能一击必杀时在与他战斗。");
			to_road(1,11);
			warrior.message_array[10]=1;
		}	
	}
	if(warrior.floor==33){
		if(judge_around(3,4)&&map[warrior.floor][3][4]==white_old_man_id){
			//弹出消息
			alert("别匆忙，降低速度！");
			to_road(3,4);
			warrior.message_array[11]=1;
		}	
	}
	if(warrior.floor==36){
		if(judge_around(1,1)&&map[warrior.floor][1][1]==white_old_man_id){
			//弹出消息
			alert("如果你能用好4条密道，你就不用与强敌作战就能上楼。");
			to_road(1,1);
			warrior.message_array[12]=1;
		}	
	}
	if(warrior.floor==37){
		if(judge_around(11,1)&&map[warrior.floor][11][1]==white_old_man_id){
			//弹出消息
			alert("你需要用地震卷轴取出37楼仓库的所有宝物。");
			to_road(11,1);
			warrior.message_array[13]=1;
		}	
	}
	if(warrior.floor==39){
		if(judge_around(11,1)&&map[warrior.floor][11][1]==white_old_man_id){
			//弹出消息
			alert("谜题：“在3点，拥有传送功能的密宝就会出现。”");
			to_road(11,1);
			warrior.message_array[14]=1;
		}	
	}
	if(warrior.floor==42){
		if(judge_around(4,1)&&map[warrior.floor][4][1]==white_old_man_id){
			//弹出消息
			alert("巫师会用魔法攻击路过的人，在2个魔法警卫间通过会使你的生命减少一半。");
			to_road(4,1);
			warrior.message_array[15]=1;
		}	
	}
	if(warrior.floor==45){
		if(judge_around(6,9)&&map[warrior.floor][6][9]==white_old_man_id){
			//弹出消息
			alert("44楼被藏在异空间，你只能用密宝才能达到。");
			to_road(6,9);
			warrior.message_array[16]=1;
		}	
	}
	if(warrior.floor==46){
		if(judge_around(9,8)&&map[warrior.floor][9][8]==white_old_man_id){
			//弹出消息
			alert("41楼事实上是左右对称的。");
			to_road(9,8);
			warrior.message_array[17]=1;
		}	
	}
	if(warrior.floor==48){
		if(judge_around(2,3)&&map[warrior.floor][2][3]==white_old_man_id){
			//弹出消息
			alert("像骰子上5的形状是一种封印魔法，你最好记住它，在你与49楼假魔王战斗时有用。");
			to_road(2,3);
			warrior.message_array[18]=1;
		}	
	}
}

//红老头
function purchase(){
	var red_old_man_id = 61;
	if(warrior.floor==2){
		if(judge_around(7,11)&&map[warrior.floor][7][11]==red_old_man_id){
			//弹出消息
			if(confirm("谢谢你救了我，我可以用祝福魔法提升你3%的攻击力和防御力，现在就提升吗？")){
				warrior.attack = Math.ceil(warrior.attack*1.3);
				warrior.defense = Math.ceil(warrior.defense*1.3);
				to_road(7,11);
			}
		}	
	}
	if(warrior.floor==6){
		if(judge_around(4,8)&&map[warrior.floor][4][8]==red_old_man_id){
			//弹出消息
			if(confirm("游戏结束，恭喜通关，是否重新开始游戏？")){
				if(warrior.gold>=50){
					warrior.blue_key += 1;
					warrior.gold -= 50;
					alert("魔塔共有50层，每10层为一个区域。如果不打败此区别的头目就不能到更高的地方。");
					to_road(4,8);
				}else{
					alert("金币不足，请先获取金币再与我交易");
				}
			}
		}	
	}
	if(warrior.floor==7){
		if(judge_around(1,6)&&map[warrior.floor][1][6]==red_old_man_id){
			//弹出消息
			if(confirm("我有五把黄钥匙，你出50个金币就卖给你。")){
				if(warrior.gold>=50){
					warrior.yellow_key += 5;
					warrior.gold -= 50;
					alert("在商店里你最好选择提升防御，只有在攻击力低于敌人的防御力时才提升攻击力。");
					to_road(1,6);
				}else{
					alert("金币不足，请先获取金币再与我交易");
				}
			}
		}	
	}
	if(warrior.floor==12){
		if(judge_around(1,1)&&map[warrior.floor][1][1]==red_old_man_id){
			//弹出消息
			if(confirm("我有一把红钥匙，你出800个金币就卖给你。")){
				if(warrior.gold>=800){
					warrior.red_key += 1;
					warrior.gold -= 800;
					alert("你是否注意到5，9，14，16，18楼有的墙与众不同？");
					to_road(1,1);
				}else{
					alert("金币不足，请先获取金币再与我交易");
				}
				
			}
		}
		if(judge_around(1,11)&&map[warrior.floor][1][11]==red_old_man_id){
			//弹出消息
			if(confirm("我有许多黄钥匙，1000金币一把你要吗？")){
				if(warrior.gold>=1000){
					warrior.yellow_key += 1;
					warrior.gold -= 1000;
				}else{
					alert("金币不足，请先获取金币再与我交易");
				}
			}
		}
	}
	if(warrior.floor==15){
		if(judge_around(11,11)&&map[warrior.floor][11][11]==red_old_man_id){
			//弹出消息
			if(confirm("我有一把蓝钥匙，你出200个金币就卖给你。")){
				if(warrior.gold>=200){
					warrior.blue_key += 1;
					warrior.gold -= 200;
					to_road(11,11);
					alert("如果你持有十字架，面对兽人和吸血鬼时你的攻击力加倍。在没有十字架的情况下，你不可能打败吸血鬼。十字架被藏在高于15楼的墙内。");
				}else{
					alert("金币不足，请先获取金币再与我交易");
				}
			}
		}
	}
	if(warrior.floor==28){
		if(judge_around(4,8)&&map[warrior.floor][4][8]==red_old_man_id){
			//弹出消息
			if(confirm("我按100个金币一把的价格回收黄钥匙，你出售吗？")){
				if(warrior.yellow_key>0){
					warrior.yellow_key-=1;
					warrior.gold+=100;
				}else{
					alert("黄钥匙不足，请先获取黄钥匙再与我交易");
				}
			}
		}	
	}
	if(warrior.floor==31){
		if(judge_around(11,1)&&map[warrior.floor][11][1]==red_old_man_id){
			//弹出消息
			if(confirm("我有4把黄钥匙1把蓝钥匙，你出1000个金币就都给你。")){
				if(warrior.gold>=1000){
					warrior.yellow_key += 4;
					warrior.blue_key += 1;
					warrior.gold -= 1000;
					to_road(11,1);
					alert("魔塔有50层高，但是似乎你不能直接到50楼。");
				}else{
					alert("金币不足，请先获取金币再与我交易");
				}
			}
		}	
	}
	if(warrior.floor==38){
		if(judge_around(2,5)&&map[warrior.floor][2][5]==red_old_man_id){
			//弹出消息
			if(confirm("我有3把黄钥匙，你出200个金币就都给你。")){
				if(warrior.gold>=200){
					warrior.yellow_key += 3;
					warrior.gold -= 200;
					to_road(2,5);
					alert("存放圣剑的房间门坏了，你必须用镐破墙而入。");
				}else{
					alert("金币不足，请先获取金币再与我交易");
				}
			}
		}	
	}
	if(warrior.floor==39){
		if(judge_around(2,9)&&map[warrior.floor][2][9]==red_old_man_id){
			//弹出消息
			if(confirm("我有三把蓝钥匙，你出2000个金币就都给你。")){
				if(warrior.gold>=2000){
					warrior.blue_key += 3;
					warrior.gold -= 2000;
					to_road(2,9);
					alert("塔内有个幸运金币，拥有它在打败敌人后能获得2倍的金钱。");
				}else{
					alert("金币不足，请先获取金币再与我交易");
				}
			}
		}	
	}
	if(warrior.floor==45){
		if(judge_around(3,9)&&map[warrior.floor][3][9]==red_old_man_id){
			//弹出消息
			if(confirm("给我1000个金币，我就提升你生命值2000点")){
				if(warrior.gold>=1000){
					warrior.dp += 2000;
					warrior.gold -= 1000;
					to_road(3,9);
					alert("神圣盾能防御魔法攻击，但它被藏在异空间的楼层内");
				}else{
					alert("金币不足，请先获取金币再与我交易");
				}
			}
		}	
	}
	if(warrior.floor==47){
		if(judge_around(2,5)&&map[warrior.floor][2][5]==red_old_man_id){
			//弹出消息
			if(confirm("你给我4000个金币，我就给你地震卷轴，它可以摧毁一层楼的所有墙。")){
				if(warrior.gold>=4000){
					warrior.earthquake_scroll=true;
					warrior.tools_array[111-97] = 1;
					warrior.gold -= 4000;
					to_road(2,5);
					alert("神圣盾能防御魔法攻击，但它被藏在异空间的楼层内");
				}else{
					alert("金币不足，请先获取金币再与我交易");
				}
			}
		}	
	}
}

//商店金币变化函数
function consume_gold(n){
	return n*(n-1)*10+20;
}
//商店
function store() {
    var store = document.getElementById("store");
	var store_require = document.getElementById("store_require");
	var store_elevate_attack = document.getElementById("store_elevate_attack");
	var store_elevate_defense = document.getElementById("store_elevate_defense");
	store.style.display = 'block';
	
	store_require.innerText = "使用\xa0";
	store_require.innerText += consume_gold(warrior.consume_gold_num);
	store_require.innerText += "\xa0金币提升以下一种能力";
	
	var idx = warrior.floor_store_array.indexOf(warrior.floor);
	if(idx != -1){
		store_elevate_attack.innerText = "2>\xa0\xa0\xa0攻击力 + ";
		store_elevate_attack.innerText += warrior.floor_attack_array[idx];
		
		store_elevate_defense.innerText = "3>\xa0\xa0\xa0防御力 + ";
		store_elevate_defense.innerText += warrior.floor_defense_array[idx];
	}
	
	// 1/提升dp
	window.addEventListener("keydown", function (event) {	
	    if (store.style.display == 'block' && event.which == 49) {   
	        increase_dp();
	    }
	})
	// 2/提升attack
	window.addEventListener("keydown", function (event) {	
	    if (store.style.display == 'block' && event.which == 50) {   
	        increase_attack();
	    }
	})
	// 3/提升defense
	window.addEventListener("keydown", function (event) {	
	    if (store.style.display == 'block' && event.which == 51) {   
	        increase_defense();
	    }
	})
	// 4/ESC退出
	window.addEventListener("keydown", function (event) {	
	    if (store.style.display == 'block' && (event.which == 52 || event.which == 27)) {   
	        store.style.display = 'none';
	    }
	})
}

//商店选项一:提升血量
function increase_dp() {
	if(warrior.gold>=consume_gold(warrior.consume_gold_num)){
		
		if(warrior.gold>=consume_gold(warrior.consume_gold_num)){
			var idx = warrior.floor_store_array.indexOf(warrior.floor);
			if(idx != -1){
				warrior.dp += 100;
				warrior.gold -= consume_gold(warrior.consume_gold_num);
				warrior.consume_gold_num+=1;
			}
		}
	}else{
		alert("金币不足，无法升级！");
	}
    var store = document.getElementById("store");
    store.style.display = 'none';
    refresh_attribute();
}

//商店选项二:提升攻击力
function increase_attack() {
	if(warrior.gold>=consume_gold(warrior.consume_gold_num)){
		var idx = warrior.floor_store_array.indexOf(warrior.floor);
		if(idx != -1){
			warrior.attack += warrior.floor_attack_array[idx];
			warrior.gold -= consume_gold(warrior.consume_gold_num);
			warrior.consume_gold_num+=1;
		}
	}else{
		alert("金币不足，无法升级！");
	}
    var store = document.getElementById("store");
    store.style.display = 'none';
    refresh_attribute();
}

//商店选项三:提升防御力
function increase_defense() {
	if(warrior.gold>=consume_gold(warrior.consume_gold_num)){
		var idx = warrior.floor_store_array.indexOf(warrior.floor);
		if(idx != -1){
			warrior.defense += warrior.floor_defense_array[idx];
			warrior.gold -= consume_gold(warrior.consume_gold_num);
			warrior.consume_gold_num+=1;
		}
	}else{
		alert("金币不足，无法升级！");
	}
    var store = document.getElementById("store");
    store.style.display = 'none';
    refresh_attribute();
}

//商店选项四:下次再说
function thanks() {
    var store = document.getElementById("store");
    store.style.display = 'none';
    refresh_attribute();
}

//楼层触发特殊事件
function floor_event(){
	if(warrior.floor==2){
		if(map[2][2][6] == 1&&map[2][2][8] == 1&&map[2][5][5] != 1){
			//打开所有牢门
			to_target(5,5,1);
			to_target(5,9,1);
			to_target(8,5,1);
			to_target(8,9,1);
			to_target(11,5,1);
			to_target(11,9,1);
		}	
	}
	if(warrior.floor==10){
		//进入埋伏
		if((warrior.x==5&&warrior.y==6)&&map[10][4][6]==29){
			alert("哈哈哈，你是如此的幸运能安全到达这里，但现在好运离你而去了，你中埋伏了，兄弟们给我上。");
			to_target(6,5,1);
			to_target(6,7,1);
			
			to_target(3,1,1);
			to_target(3,2,1);
			to_target(3,3,1);
			to_target(4,2,1);
			
			to_target(3,9,1);
			to_target(3,10,1);
			to_target(3,11,1);
			to_target(4,10,1);
			
			to_target(3,6,11);
			to_target(7,6,11);
			
			to_target(1,6,29);
			
			to_target(4,5,27);
			to_target(5,5,27);
			to_target(6,5,27);
			
			to_target(4,7,27);
			to_target(5,7,27);
			to_target(6,7,27);
			
			to_target(4,6,28);
			to_target(6,6,28);
		}
		// 打完小怪开门
		if(map[10][4][5]==1&&map[10][4][6]==1&&map[10][4][7]==1&&map[10][5][5]==1&&
		   map[10][5][7]==1&&map[10][6][5]==1&&map[10][6][6]==1&&map[10][6][7]==1&&map[10][3][6]==11){
			to_target(3,6,1);
		}
		// 接近boss
		if(map[10][3][6]==1&&map[10][1][6]==29&&map[10][11][6]==1&&(warrior.x==2&&warrior.y==6)){
			//准备打
			alert("你怎能杀出重围？我是绝不会让你通过的，来吧，我要与你决斗！");
		}
		//打死boss
		if(map[10][3][6]==1&&map[10][1][6]==1&&map[10][11][6]==1&&(warrior.x==1&&warrior.y==6)){
			//开门
			to_target(7,6,1);
			to_target(4,4,1);
			to_target(4,8,1);
			to_target(11,6,8);//出现楼梯
			//出现道具
			to_target(3,1,85);
			to_target(3,2,85);
			to_target(3,3,85);
			to_target(3,9,86);
			to_target(3,10,86);
			to_target(3,11,86);
			to_target(4,1,84);
			to_target(4,2,84);
			to_target(4,3,84);
			to_target(4,9,80);
			to_target(4,10,80);
			to_target(4,11,80);
		}
		//小偷对话
		if(map[10][1][6]==1&&map[10][11][6]==8&&(warrior.x==9&&warrior.y==6)&&(!warrior.ten_thief)){
			to_target(10,6,62);
			warrior.ten_thief=true;
		}
	}
	if(warrior.floor===14){
		if(map[14][1][1]==1&&map[14][2][2]==1&&map[14][1][3]==1&&map[14][3][1]==0){
			map[14][3][1]=82;
			to_target(3,1,82);
		}
	}
	if(warrior.floor==15){
		if(map[15][3][6] == 11&&(warrior.x==8&&warrior.y==6)){
			to_target(9,6,11);
		}
		if(map[15][3][6] != 11&&map[15][9][6] == 11){
			to_target(9,6,1);
			to_target(5,6,105);
		}
	}
	if(warrior.floor==20){
		//第20层吸血鬼现身
		if(map[20][3][6] != 1 && map[20][9][6]==1 && (warrior.x==8 && warrior.y==6)){
			alert("很好，你打败了骷髅族，但别想像藐视骷髅人那样藐视我。我对于你就像神一样，是不可战胜的。呵呵，来吧！");
			to_target(9,6,11);
			to_road(5, 5);
			to_road(5, 6);
			to_road(5, 7);
			to_road(6, 5);
			to_road(6, 7);
			to_road(7, 5);
			to_road(7, 6);
			to_road(7, 7);
			to_target(6,6,36);
		}
		//20层杀掉吸血鬼开门并显示物品
		if(map[20][6][6]==1 && map[20][9][6]==11){
			alert("上帝啊！我做梦也没想到我会被别人打败。毫无疑问你是比我强。但以你现在的状态对于大法师来说又太弱了，你仅仅取得了一个暂时的胜利。");
			to_target(3,6,1);
			to_target(9,6,1);
			
			to_target(4,5,80);
			to_target(4,6,80);
			to_target(4,7,80);
			to_target(5,4,85);
			to_target(6,4,85);
			to_target(7,4,85);
			to_target(5,8,86);
			to_target(6,8,86);
			to_target(7,8,86);
			to_target(8,5,84);
			to_target(8,6,84);
			to_target(8,7,84);
		}
	}
	//当走出Go 0F触发和29层小偷对话
	if(warrior.floor==23){
		var flag_gof=true;
		for(i=0;i<SIZE;i++){
			for(j=0;j<SIZE;j++){
				if(map[23][i][j]==999){
					flag_gof=false;
				}
			}
		}
		if(flag_gof){
			// map[35][10][4]=1;
			warrior.twenty_nine_thief=true;
		}
	}
	//与公主对话后打开24层通道
	if(warrior.floor==24){
		if(warrior.twenty_six_princess&&(!warrior.twenty_four_open)){
			to_target(1,5,2);
			to_target(1,7,2);
			to_target(2,6,1);
			to_target(3,6,1);
			to_target(4,6,1);
			warrior.twenty_four_open = true;
		}
		if(warrior.twenty_four_open&&(!warrior.twenty_four_enter)&&(warrior.x==1&&warrior.y==6)){
			warrior.twenty_four_enter = true;
			for(i=0;i<26;i++){
				upstairs();
			}
		}
	}
	if(warrior.floor==25){
		if(map[25][6][6]!=1&&(warrior.x==8&&warrior.y==6)){
			alert("-杀-死-入-侵-者！");
		}
	}
	if(warrior.floor==30){
		if(map[30][5][3]==1 && map[30][5][4]==1 && map[30][5][5]==1 && map[30][5][7]==1 && map[30][5][8]==1 && map[30][5][9]==1 && map[30][4][6]==11){
			to_target(4,6,1);
		}
	}
	if(warrior.floor==33){
		if(((warrior.x==5&&warrior.y==10)||(warrior.x==7&&warrior.y==10))&&(map[33][5][9]!=1)){
			to_target(4,10,11);
			to_target(8,10,11);
		}
		if(map[33][4][10]==11&&(map[33][5][9]==1&&map[33][5][11]==1&&map[33][7][9]==1&&map[33][7][11]==1)){
			to_target(4,10,1);
			to_target(8,10,1);
		}
	}
	if(warrior.floor==34){
		if(map[34][6][2]==2&&(map[34][4][5]==1&&map[34][4][7]==1&&map[34][4][9]==1&&map[34][4][11]==1&&
							  map[34][8][5]==1&&map[34][8][7]==1&&map[34][8][9]==1&&map[34][8][11]==1)){
								  to_target(6,2,82);
							  }
	}
	if(warrior.floor==35){
		if(map[2][11][9]==10&&map[35][10][4] == 2&&map[2][11][11]==1&&warrior.arrive_floor[35]==1){	//当到达过35层，将小偷放置在二层的(11,11)
			map[2][11][11]=62;
		}
	}
	if(warrior.floor==38){
		if(map[38][5][2]==1&&(warrior.x==6&&warrior.y==2)){
			to_target(5,2,11);
		}
	}
	if(warrior.floor==39){
		if((map[39][2][4]==1 && map[39][4][6]==1) && 
		(map[39][2][2]!=1 && map[39][2][6]!=1 && map[39][4][2]!=1 && map[39][6][2]!=1 && map[39][6][4]!=1 && map[39][6][6]!=1 && map[39][4][4]==5)){
			to_target(4,4,100);
		}
	}
	if(warrior.floor==40){
		//进去后关门
		if(map[40][8][6] != 7 && (warrior.x==7 && warrior.y==6) && map[40][1][6]==13 ){
			alert("我还在担心你不能来了。我确信这次我一定能杀了你。");
			to_target(8,6,11);
		}
		//未杀完其他士兵不能和骑士队长交战
		if(map[40][8][6] == 11 && 
		(map[40][2][2] == 1 && map[40][2][3] == 1 && map[40][2][4] == 1 &&
		map[40][2][8] == 1 && map[40][2][9] == 1 && map[40][2][10] == 1 &&
		map[40][4][3] == 1 && map[40][4][4] == 1 && map[40][4][5] == 1 &&
		map[40][4][7] == 1 && map[40][4][8] == 1 && map[40][4][9] == 1)&&
		(map[40][1][6]==13)){
			//出现道具
			to_target(1,6,1300)
			alert("你怎会击败我所有手下？我和你势不两立我绝不认输。（骑士队长失去了理智）");
		}
	}
	if(warrior.floor==41){
		if(map[41][2][2]==1&&map[41][2][10]==2&&map[41][5][6]==1){
			to_target(2,10,82);
			// to_target(5,6,2);
			to_target(4,6,101);
		}
	}
	if(warrior.floor==43){
		if(map[43][1][9]==64&&(warrior.x==1&&warrior.y==8)){
			to_target(1,9,1);
			to_target(1,10,64);
			to_target(2,9,2);
		}
		if(map[43][1][10]==64&&(warrior.x==1&&warrior.y==9)){
			to_target(1,10,1);
			to_target(1,11,64);
			to_target(1,10,2);
		}
	}
	if(warrior.floor==44){
		if(map[44][9][5]==1&&map[44][9][7]==1&&map[44][8][6]==11){
			to_target(8,6,1);
		}
	}
	if(warrior.floor==45){
		if(map[45][9][8]==1&&map[45][11][8]==1&&map[45][10][7]==11){
			to_target(10,7,1);
		}
		else if(map[45][9][5]==1&&map[45][11][5]==1&&map[45][10][4]==11){
			to_target(10,4,1);
		}
	}
	if(warrior.floor==47){
		//高级巫师随勇士接近而移动
		if(map[47][2][8]==18&&(warrior.x==4&&warrior.y==8)){
			to_target(2,8,1);
			to_target(1,8,18);
		}
		for (i=9; i>2; i--) {
			if(map[47][i][1]==18&&(warrior.x==(i+1)&&warrior.y==1)){
				to_target(i,1,1);
				to_target(i-1,1,18);
			}
		}
	}
	if(warrior.floor==48){
		//高级巫师随勇士接近而移动
		if(map[48][3][2]==18&&(warrior.x==4&&warrior.y==2)){
			to_target(3,2,1);
			to_target(2,2,18);
		}
		//击败警卫开门
		if(map[48][2][1]==1&&map[48][8][8]==11){
			to_target(8,8,1);
		}
	}
	if(warrior.floor==49){
		if(map[49][11][3]!=7&&(!warrior.arrive_forty_nine)){
			warrior.arrive_forty_nine=true;
			alert("你终于来了，我很想与你立刻决斗，但我的部下不同意。");
		}
		if(map[49][3][5]==1&&map[49][3][7]==1&&map[49][2][6]==1&&map[49][4][6]==1&&map[49][3][6]!=1&&warrior.seal_magic==false){
			alert("啊！我怎么被封印了，我只剩下一成的功力了！！！");
			to_target(3,6,71);
			warrior.seal_magic=true;
		}
	}
	if(warrior.floor==50){
		if(map[50][5][6]==62&&judge_around(5,6)&&warrior.fifty_thief){
			to_target(5,6,72);
		}
		if(map[50][5][6]==1&&(!warrior.gameover_flag)){
			//游戏结束
			game_over();
		}
	}
}

//点击道具触发事件
function click_event(){
	// 怪物手册
	var res_97_id = document.getElementById("resource_97_id");
	if(res_97_id!=null){
		res_97_id.addEventListener("click", function(){
			handbook();
		});
	}
	// 记事本
	var res_98_id = document.getElementById("resource_98_id");
	if(res_98_id!=null){
		res_98_id.addEventListener("click", function(){
			notepad();
		});
	}
	// 炸弹
	var res_99_id = document.getElementById("resource_99_id");
	if(res_99_id!=null){
		res_99_id.addEventListener("click", function(){
			bomb();
		});
	}
	// 中心对称飞行器
	var res_100_id = document.getElementById("resource_100_id");
	if(res_100_id!=null){
		res_100_id.addEventListener("click", function(){
			symmetry_aircraft();
		});
	}
	// 向下飞行器
	var res_101_id = document.getElementById("resource_101_id");
	if(res_101_id!=null){
		res_101_id.addEventListener("click", function(){
			down_aircraft();
		});
	}
	// 向上飞行器
	var res_102_id = document.getElementById("resource_102_id");
	if(res_102_id!=null){
		res_102_id.addEventListener("click", function(){
			up_aircraft();
		});
	}
	// 十字架
	var res_103_id = document.getElementById("resource_103_id");
	if(res_103_id!=null){
		res_103_id.addEventListener("click", function(){
			passive_props();
		});
	}
	// 圣水
	var res_104_id = document.getElementById("resource_104_id");
	if(res_104_id!=null){
		res_104_id.addEventListener("click", function(){
			holy_water();
		});
	}
	// 镐
	var res_105_id = document.getElementById("resource_105_id");
	if(res_105_id!=null){
		res_105_id.addEventListener("click", function(){
			pickaxe();
		});
	}
	// 冰冻魔法
	var res_106_id = document.getElementById("resource_106_id");
	if(res_106_id!=null){
		res_106_id.addEventListener("click", function(){
			freezing_spells();
		});
	}
	// 魔龙
	var res_107_id = document.getElementById("resource_107_id");
	if(res_107_id!=null){
		res_107_id.addEventListener("click", function(){
			passive_props();
		});
	}
	// 大黄钥匙
	var res_108_id = document.getElementById("resource_108_id");
	if(res_108_id!=null){
		res_108_id.addEventListener("click", function(){
			big_key();
		});
	}
	// 幸运金币
	var res_109_id = document.getElementById("resource_109_id");
	if(res_109_id!=null){
		res_109_id.addEventListener("click", function(){
			passive_props();
		});
	}
	// 飞行权杖
	var res_110_id = document.getElementById("resource_110_id");
	if(res_110_id!=null){
		var timer_110 = null ;
		res_110_id.addEventListener("click", function(){
			timer_110 && clearTimeout(timer_110);
			timer_110 = setTimeout( function (){	
				if(warrior.arrive_floor[warrior.floor+1]==1&&(warrior.floor!=43)&&(warrior.floor!=49)){
					upstairs();
				}
				if(warrior.floor==43&&warrior.arrive_floor[warrior.floor+2]==1){
					upstairs();
				}
			},300);})
		res_110_id.addEventListener("dblclick", function(){
			timer_110 && clearTimeout(timer_110);
			downstairs();
		})
	}
	// 地震卷轴
	var res_111_id = document.getElementById("resource_111_id");
	if(res_111_id!=null){
		res_111_id.addEventListener("click", function(){
			earthquake_scroll();
		});
	}
}

//游戏结束事件
function game_over(){
	warrior.gameover_flag = true;
	alert("您消灭了魔王，恭喜通关！从此魔塔只是个传说.........")
	if(confirm("是否重新开始游戏？")){
		javascript:location.reload();
	}else{
		to_target(7,6,9);
	}
}



































