//地图初始化
function init(map) {
    init_road();
    init_warrior();
    init_others(map);
	if(warrior.handlebook){
	refresh_click_handbook();
	}
}

//(上楼、下楼、读档时)地图重新载入
function re_init(map) {
    var container = document.getElementById("game");
    var child = document.getElementById("main");
    container.removeChild(child);

    var main = document.createElement("div");
    main.id = "main";
    main.setAttribute("class", "main");
    container.appendChild(main);
    init(map);
}

//往地图铺一层路
function init_road() {
    var main = document.getElementById("main");
    var element;
    for (var i = 0; i < SIZE; i++) {
        for (var j = 0; j < SIZE; j++) {
            element = document.createElement("div");
            element.id = i + "#" + j;
            element.setAttribute("class", "resource_1");
            main.appendChild(element);
        }
    }
}

//初始化勇士位置、属性、装备及拥有物品
function init_warrior() {
    var element = document.createElement("div");
    element.setAttribute("class", "warrior");
    var container = document.getElementById(warrior.x + "#" + warrior.y);
    container.appendChild(element);

    refresh_attribute();
    refresh_weapon();
	
}

//刷新勇士的属性
function refresh_attribute() {
    document.getElementById("floor").innerText = "魔塔 第" + warrior.floor + "层";
    document.getElementById("blood").innerText = warrior.dp;
    document.getElementById("attack").innerText = warrior.attack;
    document.getElementById("defense").innerText = warrior.defense;
    document.getElementById("gold").innerText = warrior.gold;	
    document.getElementById("red_key").innerText = warrior.red_key;
    document.getElementById("blue_key").innerText = warrior.blue_key;
    document.getElementById("yellow_key").innerText = warrior.yellow_key;
}

//刷新勇士的武器、防具
function refresh_weapon() {
    var weapon_name = document.getElementById("weapon_name");
    var weapon_img = document.getElementById("weapon_img");
    switch (warrior.weapon) {
        //神圣剑
        case 'Sacred Sword':
            weapon_name.innerText = '武器\n神圣剑';
            weapon_img.style.backgroundImage = 'url(images/possess/weapon_1.png)';
            break;
        //圣剑
        case 'Holy Sword':
            weapon_name.innerText = '武器\n圣剑';
            weapon_img.style.backgroundImage = 'url(images/possess/weapon_2.png)';
            break;
        //骑士剑
        case 'Knight Sword':
            weapon_name.innerText = '武器\n骑士剑';
            weapon_img.style.backgroundImage = 'url(images/possess/weapon_3.png)';
            break;
        //银剑
        case 'Silver Sword':
            weapon_name.innerText = '武器\n银剑';
            weapon_img.style.backgroundImage = 'url(images/possess/weapon_4.png)';
            break;
        //铁剑
        case 'Iron Sword':
            weapon_name.innerText = '武器\n铁剑';
            weapon_img.style.backgroundImage = 'url(images/possess/weapon_5.png)';
            break;
        //无
        case 'None':
            weapon_name.innerText = '武器\n无';
            weapon_img.style.backgroundImage = 'url(images/attribute/gray.png)';
            break;
        default :
            weapon_name.innerText = '武器\n无';
            weapon_img.style.backgroundImage = 'url(images/attribute/gray.png)';
            break;
    }

    var armor_name = document.getElementById("armor_name");
    var armor_img = document.getElementById("armor_img");
    switch (warrior.armor) {
        //神圣盾
        case 'Sacred Shield':
            armor_name.innerText = '防具\n神圣盾';
            armor_img.style.backgroundImage = 'url(images/possess/armor_1.png)';
            break;
        //圣盾
        case 'Holy Shield':
            armor_name.innerText = '防具\n圣盾';
            armor_img.style.backgroundImage = 'url(images/possess/armor_2.png)';
            break;
        //骑士盾
        case 'Knight Shield':
            armor_name.innerText = '防具\n骑士盾';
            armor_img.style.backgroundImage = 'url(images/possess/armor_3.png)';
            break;
        //银盾
        case 'Silver Shield':
            armor_name.innerText = '防具\n银盾';
            armor_img.style.backgroundImage = 'url(images/possess/armor_4.png)';
            break;
        //铁盾
        case 'Iron Shield':
            armor_name.innerText = '防具\n铁盾';
            armor_img.style.backgroundImage = 'url(images/possess/armor_5.png)';
            break;
        //无
        case 'None':
            armor_name.innerText = '防具\n无';
            armor_img.style.backgroundImage = 'url(images/attribute/gray.png)';
            break;
        default :
            armor_name.innerText = '防具\n无';
            armor_img.style.backgroundImage = 'url(images/attribute/gray.png)';
            break;
    }
}


//初始化地图的墙、门、道具、怪物、NPC等其它资源
function init_others(map) {
    var element;
    for (var i = 0; i < SIZE; i++) {
        for (var j = 0; j < SIZE; j++) {
            element = document.createElement("div");
            switch (map[warrior.floor][i][j]) {
                /**
                 * 墙，门，楼梯
                 */
				case 0:     //藏有道具的墙
				    element.setAttribute("class", "resource_0");
				    break;
				case 999:	//透明方块
					element.setAttribute("class", "resource_1_t");
					break;
                case 2:     //墙
                    element.setAttribute("class", "resource_2");
                    break;
                case 3:		//岩浆
                    element.setAttribute("class", "resource_3");
                    break;
                case 4:		//虚空
                    element.setAttribute("class", "resource_4");
                    break;
                case 5:     //黄门
                    element.setAttribute("class", "resource_5");
                    break;
                case 6:     //蓝门
                    element.setAttribute("class", "resource_6");
                    break;
                case 7:     //红门
                    element.setAttribute("class", "resource_7");
                    break;
                case 8:     //下一层楼梯
                    element.setAttribute("class", "resource_8");
                    break;
                case 9:     //上一层楼梯
                    element.setAttribute("class", "resource_9");
                    break;
                case 10:    //铁栅栏门
                    element.setAttribute("class", "resource_10");
                    break;
                case 11:    //魔法门(击败守卫的卫兵门自动打开)
                    element.setAttribute("class", "resource_11");
                    break;

                /**
                 *  怪物
                 */
				case 12:    //初级巫师
				    element.setAttribute("class", "resource_12");
				    break;
				case 13:    //骑士队长（不可攻击）
				    element.setAttribute("class", "resource_13");
				    break;
				case 130:    //死亡后的骑士队长
				    element.setAttribute("class", "resource_130");
				    break;
				case 1300:    //骑士队长（可攻击）
				    element.setAttribute("class", "resource_1300");
				    break;
				case 14:    //鬼战士
				    element.setAttribute("class", "resource_14");
				    break;
				case 15:    //战士
				    element.setAttribute("class", "resource_15");
				    break;
				case 16:    //骑士
				    element.setAttribute("class", "resource_16");
				    break;
				case 17:    //双手剑士
				    element.setAttribute("class", "resource_17");
				    break;
				case 18:    //高级巫师
				    element.setAttribute("class", "resource_18");
				    break;
				case 19:    //大法师
				    element.setAttribute("class", "resource_19");
				    break;
                case 20:    //绿色史莱姆
                    element.setAttribute("class", "resource_20");
                    break;
                case 21:    //红色史莱姆
                    element.setAttribute("class", "resource_21");
                    break;
                case 22:    //大史莱姆
                    element.setAttribute("class", "resource_22");
                    break;
                case 23:    //史莱姆王
                    element.setAttribute("class", "resource_23");
                    break;
                case 24:    //小蝙蝠
                    element.setAttribute("class", "resource_24");
                    break;
                case 25:    //大蝙蝠
                    element.setAttribute("class", "resource_25");
                    break;
                case 26:    //吸血蝙蝠
                    element.setAttribute("class", "resource_26");
                    break;
                case 27:    //骷髅人
                    element.setAttribute("class", "resource_27");
                    break;
                case 28:    //骷髅武士
                    element.setAttribute("class", "resource_28");
                    break;
                case 29:    //骷髅队长
                    element.setAttribute("class", "resource_29");
                    break;
                case 30:    //初级法师
                    element.setAttribute("class", "resource_30");
                    break;
                case 31:    //高级法师
                    element.setAttribute("class", "resource_31");
                    break;
                case 32:    //可攻击的大魔王
                    element.setAttribute("class", "resource_32");
                    break;
                case 33:	//兽人
                    element.setAttribute("class", "resource_33");
                    break;
                case 34:	//兽人武士
                    element.setAttribute("class", "resource_34");
                    break;
                case 35:	//石头人
                    element.setAttribute("class", "resource_35");
                    break;
                case 36:	//吸血鬼
                    element.setAttribute("class", "resource_36");
                    break;
                case 37:    //初级卫兵
                    element.setAttribute("class", "resource_37");
                    break;
                case 38:    //中级卫兵
                    element.setAttribute("class", "resource_38");
                    break;
                case 39:    //高级卫兵
                    element.setAttribute("class", "resource_39");
                    break;
				case 40:    //血影1
				    element.setAttribute("class", "resource_40");
				    break;
				case 41:    //血影2
				    element.setAttribute("class", "resource_41");
				    break;
				case 42:    //血影3
				    element.setAttribute("class", "resource_42");
				    break;
				case 43:    //血影4
				    element.setAttribute("class", "resource_43");
				    break;
				case 44:    //血影5
				    element.setAttribute("class", "resource_44");
				    break;
				case 45:    //血影6
				    element.setAttribute("class", "resource_45");
				    break;
				case 46:    //血影7
				    element.setAttribute("class", "resource_46");
				    break;
				case 47:    //血影8
				    element.setAttribute("class", "resource_47");
				    break;
				case 48:    //血影9
				    element.setAttribute("class", "resource_48");
				    break;
				
				case 49:    //魔龙1
				    element.setAttribute("class", "resource_49");
				    break;
				case 50:    //魔龙2
				    element.setAttribute("class", "resource_50");
				    break;
				case 51:    //魔龙3
				    element.setAttribute("class", "resource_51");
				    break;
				case 52:    //魔龙4
				    element.setAttribute("class", "resource_52");
				    break;
				case 53:    //魔龙5
				    element.setAttribute("class", "resource_53");
				    break;
				case 54:    //魔龙6
				    element.setAttribute("class", "resource_54");
				    break;
				case 55:    //魔龙7
				    element.setAttribute("class", "resource_55");
				    break;
				case 56:    //魔龙8
				    element.setAttribute("class", "resource_56");
				    break;
				case 57:    //魔龙9
				    element.setAttribute("class", "resource_57");
				    break;
				case 58:    //幽灵
				    element.setAttribute("class", "resource_58");
				    break;
				case 59:    //黑暗骑士
				    element.setAttribute("class", "resource_59");
				    break;
				case 70:    //可攻击的大魔王(49层高级) 
				    element.setAttribute("class", "resource_70");
				    break;
				case 71:    //可攻击的大魔王(49层低级) 
				    element.setAttribute("class", "resource_71");
				    break;
				case 72:    //可攻击的大魔王(50层) 
				    element.setAttribute("class", "resource_72");
				    break;
                /**
                 * NPC
                 */
                case 60:    //智者(老人)
                    element.setAttribute("class", "resource_60");
                    break;
                case 61:    //商人
                    element.setAttribute("class", "resource_61");
                    break;
                case 62:    //小偷
                    element.setAttribute("class", "resource_62");
                    break;
                case 63:    //魔王(第三层出现，只会触发对话)
                    element.setAttribute("class", "resource_63");
                    //默认隐藏，仍然占用空间
                    document.getElementById("7#5").style.visibility = "hidden";
                    break;
                case 64:    //魔法警卫(第三层出现，只会触发对话)
                    element.setAttribute("class", "resource_64");
                    break;
                case 65:    //商店(加血量、攻击力、防御力)(第一部分)
                    element.setAttribute("class", "resource_65");
                    break;
                case 66:    //商店(加血量、攻击力、防御力)(第二部分)
                    element.setAttribute("class", "resource_66");
                    break;
                case 67:    //商店(加血量、攻击力、防御力)(第三部分)
                    element.setAttribute("class", "resource_67");
                    break;
                case 68:    //公主
					element.setAttribute("class", "resource_68");
                    break;

                /**
                 * 道具
                 */
                case 80:    //黄钥匙
                    element.setAttribute("class", "resource_80");
                    break;
                case 81:    //蓝钥匙
                    element.setAttribute("class", "resource_81");
                    break;
                case 82:    //红钥匙
                    element.setAttribute("class", "resource_82");
                    break;
                case 83:    //红药水
                    element.setAttribute("class", "resource_83");
                    break;
                case 84:    //蓝药水
                    element.setAttribute("class", "resource_84");
                    break;
                case 85:    //红宝石
                    element.setAttribute("class", "resource_85");
                    break;
                case 86:    //蓝宝石
                    element.setAttribute("class", "resource_86");
                    break;
                case 87:    //铁剑
                    element.setAttribute("class", "resource_87");
                    break;
                case 88:    //铁盾
                    element.setAttribute("class", "resource_88");
                    break;
                case 89:    //银盾
					element.setAttribute("class", "resource_89");
                    break;
                case 90:    //神圣剑
					element.setAttribute("class", "resource_90");
                    break;
                case 91:    //银剑 
					element.setAttribute("class", "resource_91");
                    break;
                case 92:    //骑士剑 
					element.setAttribute("class", "resource_92");
                    break;
                case 93:    //骑士盾 
					element.setAttribute("class", "resource_93");
                    break;
                case 94:    //圣盾 
					element.setAttribute("class", "resource_94");
                    break;
                case 95:    //神圣盾 
					element.setAttribute("class", "resource_95");
                    break;
                case 96:    //圣剑 
					element.setAttribute("class", "resource_96");
                    break;
				//功能性道具类
                case 97:    //怪物手册
					element.setAttribute("class", "resource_97");
                    break;
                case 98:    //记事本
                    element.setAttribute("class", "resource_98");
                    break;
				case 99:    //炸药包
				    element.setAttribute("class", "resource_99");
				    break;
				case 100:    //对角传送
				    element.setAttribute("class", "resource_100");
				    break;
				case 101:    //蓝色向下传送
				    element.setAttribute("class", "resource_101");
				    break;
				case 102:    //红色向上传送
				    element.setAttribute("class", "resource_102");
				    break;
				case 103:    //十字架
				    element.setAttribute("class", "resource_103");
				    break;
				case 104:    //圣水
				    element.setAttribute("class", "resource_104");
				    break;
				case 105:    //镐
				    element.setAttribute("class", "resource_105");
				    break;
				case 106:    //冰冻魔法
				    element.setAttribute("class", "resource_106");
				    break;
				case 107:    //魔龙
				    element.setAttribute("class", "resource_107");
				    break;
				case 108:    //大黄钥匙
				    element.setAttribute("class", "resource_108");
				    break;
				case 109:    //幸运金币
				    element.setAttribute("class", "resource_109");
				    break;
				case 110:    //飞行权杖
				    element.setAttribute("class", "resource_110");
				    break;
				case 111:    //地震卷轴
				    element.setAttribute("class", "resource_111");
				    break;
                default:
                    break;
            }
            if (map[warrior.floor][i][j] != 1) {
                var container = document.getElementById(i + "#" + j);
				container.appendChild(element);
                
				
            }
			
        }
    }
}

//显示怪物数据
function show_monster_data(row, col) {

	if (monster_array.includes(map[warrior.floor][row][col])) {
		
		var click_handbook = document.getElementById("click_handbook");
		//显示怪物手册
		click_handbook.style.display = 'block';
		
		init_monster(map[warrior.floor][row][col]);
		//真实掉血量
		var reduce_blood = attack(warrior, monster);
		if (reduce_blood == Infinity) {
			reduce_blood = "∞";
		}
		monster_name = monster_dic[map[warrior.floor][row][col]];
		row_content = monster_name +
			"\n\n血量\xa0\xa0" + monster.dp + 
			"\n攻击力\xa0\xa0" + monster.attack +
			"\n防御力\xa0\xa0" + monster.defense +
			"\n金币\xa0\xa0" + monster.gold  +
			"\n掉血\xa0\xa0" + reduce_blood;
		click_handbook.innerText = "按E/ESC退出\n\n";
		click_handbook.innerText += row_content;
		
		//按ENTER隐藏怪物手册
		window.addEventListener("keydown", function(event) { // E/ESC
			if (click_handbook.style.display == 'block' && (event.which == 69 || event.which == 27)) {
				click_handbook.style.display = 'none';
			}
		})
	}
}
 
//点击怪物显示数据
function refresh_click_handbook() {
	for (row = 1; row < 12; row++) {
		for (col = 1; col < 12; col++) {
			var id = row + "#" + col;
			var id_name = "id" + String(row) + "_" + String(col);

			window[id_name] = document.getElementById(id);
			if (window[id_name] != null) {


				// 				(function(row,col) {
				// 					window[id_name].addEventListener("click", function() {
				// 						console.log(row, col);
				// 					})
				// 				})(row, col)
		
				window[id_name].addEventListener("click", function() {
					// upstairs();
					// show_monster_data(row,col);	
					
					// console.log(this.id.split('#'));
					monster_x = parseInt(this.id.split('#')[0]);
					monster_y = parseInt(this.id.split('#')[1]);
					show_monster_data(monster_x, monster_y);
				});
			}
		}
	}
}

  
var warrior = new warrior();
var monster = new monster();
init(map);