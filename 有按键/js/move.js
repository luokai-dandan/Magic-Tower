function up_key() {
	var dx = 0, dy = 0;
	dx = -1;
	dy = 0;
	move_event(dx,dy);
}
function down_key() {
	var dx = 1;
	var dy = 0;
	move_event(dx,dy);
}
function left_key() {
	var dx = 0;
	var dy = -1;
	move_event(dx,dy);
}
function right_key() {
	var dx = 0;
	var dy = 1;
	move_event(dx,dy);
}
//键盘监听(控制勇士移动等)
window.addEventListener("keydown"||"mousemove", function (event) {
    var dx = 0, dy = 0;
    switch (event.which) {
		
		case 38:    //上
		    dx = -1;
		    dy = 0;
		    break;
        case 87:    //W-上
            dx = -1;
            dy = 0;
            break;
		
		case 40:    //下
		    dx = 1;
		    dy = 0;
		    break;
        case 83:    //S-下
            dx = 1;
            dy = 0;
            break;
		
		case 37:    //左
		    dx = 0;
		    dy = -1;
		    break;
        case 65:    //A-左
            dx = 0;
            dy = -1;
            break;
		
		case 39:    //右
		    dx = 0;
		    dy = 1;
		    break;
        case 68:    //D-右
            dx = 0;
            dy = 1;
            break;

        case 90:    //Z-存档
            save();
            break;
        case 88:    //X-读档
            load();
            break;
        case 67:    //C-重新开始
            restart();
            break;
        case 71:    //G-怪物手册
            if (warrior.handlebook) { handbook(); }
			else{ alert("尚未获得怪物手册！"); }
            break;
		case 78:	//N-记事本
			if (warrior.notepad) { notepad(); }
			else{ alert("尚未获得记事本！"); }
			break;

        default:
            break;
    }

    move_event(dx,dy);
	
})

//墙内显示道具
function display_props(){
	if(warrior.floor==12){
		if(warrior.x==1 && warrior.y==10 && map[12][1][11]==0){
			map[12][1][11]=61;
			to_target(1,11,61);
		}
	}
	if(warrior.floor==16){
		if(warrior.x==11 && warrior.y==10 && map[16][11][11]==0){
			map[16][11][11]=60;
			to_target(11,11,60);
		}
	}
	if(warrior.floor==19){
		if(warrior.x==4 && warrior.y==6 && map[19][3][6]==0){
			map[19][3][6]=103;
			to_target(3,6,103);
		}
	}
	if(warrior.floor==48){
		if(warrior.x==2 && warrior.y==2 && map[48][2][1]==0){
			map[48][2][1]=64;
			to_target(2,1,64);
		}
	}
}

//透明墙，碰撞显示元素
function transparent_ele(){
	if(warrior.floor==48){
		//((warrior.x==2 && warrior.y==2)||(warrior.x==1 && warrior.y==1)||(warrior.x==3 && warrior.y==1))
		if(judge_around(2,1)&& map[48][2][1]==999){
			map[48][2][1]=64;
			to_target(2,1,64);
		}
	}
	if(warrior.floor==23){
		for(i=0;i<SIZE;i++){
			for(j=0;j<SIZE;j++){
				if(map[23][i][j]==999){
					if(judge_around(i,j)&& map[23][i][j]==999){
						map[23][i][j]=2;
						to_target(i,j,2);
					}
				}
			}
		}
	}
}

//判断勇士处于隐藏方块的周围
function judge_around(x,y){
	flag = (warrior.x==(x-1) && warrior.y==y)||(warrior.x==(x+1) && warrior.y==y)||(warrior.x==x && warrior.y==(y-1))||(warrior.x==x && warrior.y==(y+1));
	return flag;
}

//成功移动后目的地变成勇士
function to_warrior(x, y) {
    var id = x + "#" + y;
    var element = document.createElement("div");
    element.setAttribute("class", "warrior");
    var container = document.getElementById(id);
    if (container.firstChild != null) {
        container.removeChild(container.firstChild);
    }
    container.appendChild(element);
    warrior.x = x;
    warrior.y = y;
}

//成功移动后目的地变成小偷
function to_thief(x, y) {
    var id = x + "#" + y;
    var element = document.createElement("div");
    element.setAttribute("class", "resource_62");
    var container = document.getElementById(id);
    if (container.firstChild != null) {
        container.removeChild(container.firstChild);
    }
    container.appendChild(element);
}

//成功移动后出发地变成路
function to_road(x, y) {
    var id = x + "#" + y;
    var container = document.getElementById(id);
    container.removeChild(container.firstChild);
    map[warrior.floor][x][y] = 1;
}

//打开守卫门(传入门的位置)
function open_defend_door(x, y) {
    if (map[warrior.floor][x+1][y-1]==1 && map[warrior.floor][x+1][y+1]==1 && map[warrior.floor][x][y]==11&&
	(warrior.floor==8||warrior.floor==11||warrior.floor==17||warrior.floor==32||warrior.floor==38||warrior.floor==44||warrior.floor==49)){	//此处添加含有卫兵守卫楼层
    	to_target(x,y,1);
    }
}

//将此位置变成目标元素
function to_target(x, y, target) {
    var id = x + "#" + y;
    var element = document.createElement("div");
	var resource = "resource_"+target
    element.setAttribute("class", resource);
    var container = document.getElementById(id);
    if (container.firstChild != null) {
        container.removeChild(container.firstChild);
    }
    container.appendChild(element);
	map[warrior.floor][x][y] = target;
}

//刷新道具显示
function refresh_tools(){
    var container = document.getElementById("possess");
    var child = document.getElementById("tools");
    container.removeChild(child);

    var tools = document.createElement("div");
    tools.id = "tools";
    tools.setAttribute("class", "tools");
    container.appendChild(tools);
	
	var element;
	len = warrior.tools_array.length;
	for (i=0; i<len; i++) {
		if(warrior.tools_array[i]==1){
			element = document.createElement("div");
			res = "resource_"+String(i+97)
			res_id = res+"_id"
			element.setAttribute("id", res_id);
			element.setAttribute("class", res);
			tools.appendChild(element);
			
		}
	}
	click_event();
}

//跳过当前div
function skip_div(x, y){
	to_target(x,y,1);
	to_road(warrior.x, warrior.y);
	to_warrior(x, y);
}

//判断位置是否在外边缘圈
function is_edge(x,y)
{
	if (x==0||x==12||y==0||y==12){
		return true;
	} else{
		return false;
	}
}

//返回当前人物上下左右的坐标
function around_xy(){
	dir = [[-1,0],[0,-1],[0,1],[1,0]];//上，左，右，下
	around_loc = []
	for(i = 0; i < 4; i++){
		x = dir[i][0] + warrior.x;
		y = dir[i][1] + warrior.y;	
		around_loc.push([x, y]);
	}
	return around_loc;
}
function around_xy(x,y){
	dir = [[-1,0],[0,-1],[0,1],[1,0]];//上，左，右，下
	around_loc = []
	for(i = 0; i < 4; i++){
		xx = dir[i][0] + x;
		yy = dir[i][1] + y;	
		around_loc.push([xx, yy]);
	}
	return around_loc;
}

//移动事件
function move_event(dx, dy) {
	if (dx == 0 && dy == 0) {
        return;
    }
    var x = warrior.x + dx, y = warrior.y + dy;
    if (warrior.can_move && x >= 0 && x < SIZE && y >= 0 && y < SIZE && map[warrior.floor][x][y] != 2) {
		var xxyy = around_xy(x,y);
		for (i=0;i<4;i++) {
			if((map[warrior.floor][xxyy[i][0]][xxyy[i][1]]==12&&warrior.dp<=100)||(map[warrior.floor][xxyy[i][0]][xxyy[i][1]]==18&&warrior.dp<=200)){
				return;
			}
			
		}
		
		if((map[warrior.floor][xxyy[0][0]][xxyy[0][1]]==64&&warrior.dp==1)&&(map[warrior.floor][xxyy[3][0]][xxyy[3][1]]==64&&warrior.dp==1)){
			return;
		}
		if((map[warrior.floor][xxyy[1][0]][xxyy[1][1]]==64&&warrior.dp==1)&&(map[warrior.floor][xxyy[2][0]][xxyy[2][1]]==64&&warrior.dp==1)){
			return;
		}
		
		
        switch (map[warrior.floor][x][y]) {
			case 0:
			    //墙体显示道具
				display_props();
			    break;
			case 999://透明墙，碰撞会显示其他元素
				transparent_ele();
				break;
            case 1:
                skip_div(x, y);
                break;
            case 5:
                if (warrior.yellow_key > 0) {
					skip_div(x, y);
                    warrior.yellow_key--;
                }
                break;
            case 6:
                if (warrior.blue_key > 0) {
					skip_div(x, y);
                    warrior.blue_key--;
                }
                break;
            case 7:
                if (warrior.red_key > 0) {
					skip_div(x, y);
                    warrior.red_key--;
                }
                break;
            case 8:
// 				if(warrior.floor==43){
// 					upstairs();
// 				}
                upstairs();
				
                break;
            case 9:
// 				if(warrior.floor==45){
// 					downstairs();
// 				}
                downstairs();
                break;
			case 13://骑士队长（不可攻击）
				alert("你必须打败我的手下才有资格和我单挑");
				break;
			case 1300://骑士队长（可攻击）
				to_target(2,2,80);
				to_target(2,3,80);
				to_target(2,4,80);
				to_target(2,8,85);
				to_target(2,9,85);
				to_target(2,10,85);
				to_target(4,3,84);
				to_target(4,4,84);
				to_target(4,5,84);
				to_target(4,7,86);
				to_target(4,8,86);
				to_target(4,9,86);
				to_target(1,6,8);
				to_target(8,6,1);
				alert("这次先饶了你，下次碰到我会和你正式的决斗，你最好投降。（骑士队长逃走了）")
				break;
			// 正常怪物
			case 12://初级巫师
			case 14:
			case 15:
			case 16:
			case 17:
			case 18://高级巫师
            case 20:
            case 21:
			case 22:
			case 23:
            case 24:
			case 25:
			case 26:
            case 27:
            case 28:
			case 30:
			case 31:
			case 32:
			case 35:
			case 37:
			case 38:
			case 39:
			case 58:
            case 59:
			case 64://魔法卫兵
			case 70:
			case 72:
				init_monster(map[warrior.floor][x][y]);
				var damage = attack(warrior, monster);
				if (damage != Infinity) {
				    warrior.dp -= damage;
				    warrior.gold += warrior.lucky*monster.gold;
					skip_div(x, y);
				}
				else{
					alert("打不过！");
				}
				break;
			case 33://兽人
			case 34://兽人武士
			case 36://吸血鬼
				init_monster(map[warrior.floor][x][y]);
				if(warrior.crucifix){
					monster.defense = Math.ceil(monster.defense/2);
				}
				var damage = attack(warrior, monster);
				if (damage != Infinity) {
				    warrior.dp -= damage;
				    warrior.gold += warrior.lucky*monster.gold;
					skip_div(x, y);
				}
				else{
					alert("打不过！");
				}
				break;
			case 29://骷髅队长
				init_monster(map[warrior.floor][x][y]);
				var damage = attack(warrior, monster);
				if (damage != Infinity) {
					alert("不，这是不可能的，你怎会打败我！你别太得意，后面还有许多强大的对手和机关存在，你稍有疏忽就必死无疑。");
				    warrior.dp -= damage;
				    warrior.gold += warrior.lucky*monster.gold;
					skip_div(x, y);
				}
				else{
					alert("打不过！");
				}
				break;
			case 19:
				init_monster(map[warrior.floor][x][y]);
				var damage = attack(warrior, monster);
				if (damage != Infinity) {
				    warrior.dp -= damage;
				    warrior.gold += warrior.lucky*monster.gold;
					skip_div(x, y);
					to_target(8,4,82);
					to_target(8,5,82);
					to_target(8,7,82);
					to_target(8,8,82);
				}
				else{
					alert("打不过！");
				}
				break;
			case 71://击败变身后的49层大魔王后触发事件
                init_monster(map[warrior.floor][x][y]);
                var damage = attack(warrior, monster);
                if (damage != Infinity) {
                    warrior.dp -= damage;
                    warrior.gold += warrior.lucky*monster.gold;
					skip_div(x, y);
					alert("哈哈哈，很好，你是个合格的战士。");
					to_target(2,5,1);
					to_target(2,7,1);
					to_target(4,5,1);
					to_target(4,7,1);
					
					to_target(2,5,82);
					to_target(2,7,107);
					
					to_target(4,2,85);
					to_target(4,3,85);
					to_target(4,4,85);
					
					to_target(4,8,86);
					to_target(4,9,86);
					to_target(4,10,86);
					
					to_target(5,5,84);
					to_target(5,6,84);
					to_target(5,7,84);
                }
				else{
					alert("打不过！");
				}
                break;
			case 47:	//血魔
				init_monster(map[warrior.floor][x][y]);
				var damage = attack(warrior, monster);
				if (damage != Infinity) {
				    warrior.dp -= damage;
				    warrior.gold += warrior.lucky*monster.gold;
					skip_div(x, y);
					to_road(4,5);
					to_road(4,6);
					to_road(4,7);
					to_road(5,5);
					to_road(5,6);
					to_road(5,7);
					to_road(6,5);
					to_road(6,7);
					to_road(3,6);
					to_target(5,6,106);
				}
				else{
					alert("打不过！");
				}
				break;
			case 56:	//魔龙
			    init_monster(map[warrior.floor][x][y]);
				if(warrior.magic_dragon){
					monster.defense = Math.ceil(monster.defense/2);
				}
			    var damage = attack(warrior, monster);
			    if (damage != Infinity) {
			        warrior.dp -= damage;
			        warrior.gold += warrior.lucky*monster.gold;
					skip_div(x, y);
					to_road(4,5);
					to_road(4,6);
					to_road(4,7);
					to_road(5,5);
					to_road(5,6);
					to_road(5,7);
					to_road(6,5);
					to_road(6,7);
					to_road(3,6);
					to_target(5,6,106);
			    }
				else{
					alert("打不过！");
				}
			    break;
            case 60:	//白老头
                sage();
                break;
			case 61:	//红老头
				purchase();
				break;
            case 62:	//小偷
                thief();
                break;
            case 66:    //商店
                store();
                break;
			case 68:	//公主
				princess();
				break;
            case 80:
                skip_div(x, y);
                warrior.yellow_key++;
                break;
            case 81:
                skip_div(x, y);
                warrior.blue_key++;
                break;
            case 82:
                skip_div(x, y);
                warrior.red_key++;
                break;
            case 83:
                skip_div(x, y);
                warrior.dp += 50;
                break;
            case 84:
                skip_div(x, y);
                warrior.dp += 200;
                break;
            case 85:
                skip_div(x, y);
                warrior.attack += 1;
                break;
            case 86:
                skip_div(x, y);
                warrior.defense += 1;
                break;
            case 87:
                skip_div(x, y);
                warrior.attack += 10;
                warrior.weapon = 'Iron Sword';
				alert("获得铁剑，攻击力+10");
                break;
            case 88:
                skip_div(x, y);
                warrior.defense += 10;
                warrior.armor = 'Iron Shield';
				alert("获得铁盾，防御力+10");
                break;
            case 89:
                skip_div(x, y);
                warrior.defense += 20;
                warrior.armor = 'Silver Shield';
				alert("获得银盾，防御力+20");
                break;
            case 90:
                skip_div(x, y);
                warrior.attack += 100;
                warrior.weapon = 'Sacred Sword';
				alert("获得神圣剑剑，攻击力+100");
                break;
            case 91:
                skip_div(x, y);
                warrior.attack += 20;
                warrior.weapon = 'Silver Sword';
				alert("获得银剑，攻击力+10");
                break;
            case 92:
                skip_div(x, y);
                warrior.attack += 40;
                warrior.weapon = 'Knight Sword';
				alert("获得骑士剑，攻击力+40");
                break;
            case 93:
                skip_div(x, y);
                warrior.defense += 40;
                warrior.armor = 'Knight Shield';
				alert("获得骑士盾，防御力+40");
                break;
            case 94:
                skip_div(x, y);
                warrior.defense += 50;
                warrior.armor = 'Holy Shield';
				alert("获得圣盾，防御力+50");
                break;
            case 95:
                skip_div(x, y);
                warrior.defense += 100;
                warrior.armor = 'Sacred Shield';
				warrior.get_sacred_shield = true;
				alert("获得神圣盾，防御力+100");
                break;
            case 96:
                skip_div(x, y);
                warrior.attack += 50;
                warrior.weapon = 'Holy Sword';
				alert("获得圣剑，攻击力+50");
                break;
			case 97://怪物手册
				skip_div(x, y);
				warrior.handlebook = true;
				warrior.tools_array[97-97] = 1;
				break;
			case 98://记事本
				skip_div(x, y);
				warrior.notepad = true;
				warrior.tools_array[98-97] = 1;
				alert("获得记事本（快捷键N打开）");
				break;
			case 99://炸弹
				skip_div(x, y);
				warrior.bomb = true;
				warrior.tools_array[99-97] = 1;
				alert("获得炸弹！");
				break;
			case 100://中心对称飞行器
				skip_div(x, y);
				warrior.symmetry_aircraft = 3;
				warrior.tools_array[100-97] = 1;
				alert("获得中心对称飞行器！");
				break;
			case 101://向下飞行器
				skip_div(x, y);
				warrior.down_aircraft = true;
				warrior.tools_array[101-97] = 1;
				alert("获得向下飞行器！");
				break;
			case 102://向上飞行器
				skip_div(x, y);
				warrior.up_aircraft = true;
				warrior.tools_array[102-97] = 1;
				alert("获得向上飞行器！");
				break;
			case 103://十字架
				skip_div(x, y);
				warrior.crucifix = true;
				warrior.tools_array[103-97] = 1;
				alert("获得十字架！");
				break;
			case 104://圣水
				skip_div(x, y);
				warrior.holy_water = true;
				warrior.tools_array[104-97] = 1;
				alert("获得圣水！");
				break;
			case 105://镐
				skip_div(x, y);
				warrior.pickaxe = true;
				warrior.tools_array[105-97] = 1;
				alert("获得镐！");
				break;
			case 106://冰冻魔法
				skip_div(x, y);
				warrior.freezing_spells = true;
				warrior.tools_array[106-97] = 1;
				alert("获得冰冻魔法！");
				break;
			case 107://魔龙
				skip_div(x, y);
				warrior.magic_dragon = true;
				warrior.tools_array[107-97] = 1;
				alert("获得魔龙！");
				break;
			case 108://大黄钥匙
				skip_div(x, y);
				warrior.big_key = true;
				warrior.tools_array[108-97] = 1;
				alert("获得大黄钥匙！");
				break;
			case 109://幸运金币
				skip_div(x, y);
				warrior.lucky = 2;
				warrior.lucky_coin = true;
				warrior.tools_array[109-97] = 1;
				alert("获得幸运金币！");
				break;
			case 110://飞行权杖
				skip_div(x, y);
				warrior.mace = true;
				warrior.tools_array[110-97] = 1;
				alert("获得飞行权杖！");
				break;
			case 111://地震卷轴
				skip_div(x, y);
				warrior.earthquake_scroll = true;
				warrior.tools_array[111-97] = 1;
				alert("获得地震卷轴！");
				break;
            default:
                break;
        }
        //第3层魔王事件触发(只触发第一次)
        if (map[3][7][5] == 63 && warrior.floor == 3 && warrior.x == 9 && warrior.y == 5) {
            devil();
        }
		//第42层魔王事件触发
		if(map[42][10][6]==13 && (warrior.x==10 && warrior.y==5) && warrior.floor==42){
			devil_ft();
		}
        refresh_attribute();
        refresh_weapon();
    }
	
	//打开暗墙
	open_hidden_wall(x,y);
    

	//打开守卫魔法门（门位置+怪物位置）
	open_defend_door(7,2);
	open_defend_door(4,2);
	open_defend_door(7,10);
	open_defend_door(4,10);
	open_defend_door(9,2);
	open_defend_door(9,6);
	open_defend_door(7,6);

	//楼层触发特殊事件
	floor_event();
	//点击道具触发事件
	click_event();
	//刷新道具显示
	refresh_tools();
	
	//触发魔法减血事件
	magic_reduce_blood();
}