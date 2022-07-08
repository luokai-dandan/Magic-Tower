//怪物
function monster() {
    this.id = 0;   //id
    this.dp = 0;    //血量
    this.attack = 0;    //攻击力
    this.defense = 0;   //防御力
    this.gold = 0;  //击败后获得的金钱（不计算幸运金币）
    this.attack_first = 0;  //先手攻击
}

//根据id初始化怪物的属性
function init_monster(id) {
    monster.id = id;
    switch (id) {
		case 12:    //初级巫师
		    monster.dp = 220;
		    monster.attack = 370;
		    monster.defense = 110;
		    monster.gold = 80;
		    monster.attack_first = false;
		    break;
		case 1300:    //骑士队长(可攻击)
		    monster.dp = 120;
		    monster.attack = 150;
		    monster.defense = 50;
		    monster.gold = 100;
		    monster.attack_first = false;
		    break;
		case 14:    //鬼战士
		    monster.dp = 220;
		    monster.attack = 180;
		    monster.defense = 30;
		    monster.gold = 35;
		    monster.attack_first = false;
		    break;
		case 15:    //战士
		    monster.dp = 210;
		    monster.attack = 200;
		    monster.defense = 65;
		    monster.gold = 45;
		    monster.attack_first = false;
		    break;
		case 16:    //骑士
		    monster.dp = 160;
		    monster.attack = 230;
		    monster.defense = 105;
		    monster.gold = 65;
		    monster.attack_first = false;
		    break;
		case 17:    //双手剑士
		    monster.dp = 100;
		    monster.attack = 680;
		    monster.defense = 50;
		    monster.gold = 55;
		    monster.attack_first = false;
		    break;
		case 18:    //高级巫师
		    monster.dp = 200;
		    monster.attack = 380;
		    monster.defense = 130;
		    monster.gold = 90;
		    monster.attack_first = false;
		    break;
		case 19:    //大法师
		    monster.dp = 4500;
		    monster.attack = 560;
		    monster.defense = 310;
		    monster.gold = 1000;
		    monster.attack_first = false;
		    break;
        case 20:    //绿色史莱姆
            monster.dp = 35;
            monster.attack = 18;
            monster.defense = 1;
            monster.gold = 1;
            monster.attack_first = false;
            break;
        case 21:    //红色史莱姆
            monster.dp = 45;
            monster.attack = 20;
            monster.defense = 2;
            monster.gold = 2;
            monster.attack_first = false;
            break;
		case 22:    //大史莱姆
		    monster.dp = 130;
		    monster.attack = 60;
		    monster.defense = 3;
		    monster.gold = 8;
		    monster.attack_first = false;
			break;
		case 23:    //史莱姆王
		    monster.dp = 360;
		    monster.attack = 310;
		    monster.defense = 20;
		    monster.gold = 40;
		    monster.attack_first = false;
			break;
        case 24:    //小蝙蝠
            monster.dp = 35;
            monster.attack = 38;
            monster.defense = 3;
            monster.gold = 3;
            monster.attack_first = false;
            break;
		case 25:    //大蝙蝠
		    monster.dp = 60;
		    monster.attack = 100;
		    monster.defense = 8;
		    monster.gold = 12;
		    monster.attack_first = false;
		    break;
		case 26:    //吸血蝙蝠
		    monster.dp = 200;
		    monster.attack = 390;
		    monster.defense = 90;
		    monster.gold = 50;
		    monster.attack_first = false;
		    break;
        case 27:    //骷髅人
            monster.dp = 50;
            monster.attack = 42;
            monster.defense = 6;
            monster.gold = 6;
            monster.attack_first = false;
            break;
        case 28:    //骷髅武士
            monster.dp = 55;
            monster.attack = 52;
            monster.defense = 12;
            monster.gold = 8;
            monster.attack_first = false;
            break;
        case 29:    //骷髅队长
            monster.dp = 100;
            monster.attack = 65;
            monster.defense = 15;
            monster.gold = 30;
            monster.attack_first = false;
            break;
        case 30:    //初级法师
            monster.dp = 60;
            monster.attack = 32;
            monster.defense = 8;
            monster.gold = 5;
            monster.attack_first = false;
            break;
		case 31:    //高级法师 
		    monster.dp = 100;
		    monster.attack = 95;
		    monster.defense = 30;
		    monster.gold = 22;
		    monster.attack_first = false;
		    break;
		case 33:    //兽人 
		    monster.dp = 260;
		    monster.attack = 85;
		    monster.defense = 5;
		    monster.gold = 18;
		    monster.attack_first = false;
		    break;
		case 34:    //兽人武士 
		    monster.dp = 320;
		    monster.attack = 120;
		    monster.defense = 15;
		    monster.gold = 30;
		    monster.attack_first = false;
		    break;
		case 35:    //石头人 
		    monster.dp = 20;
		    monster.attack = 100;
		    monster.defense = 68;
		    monster.gold = 28;
		    monster.attack_first = false;
		    break;
		case 36:    //吸血鬼 
		    monster.dp = 444;
		    monster.attack = 199;
		    monster.defense = 66;
		    monster.gold = 144;
		    monster.attack_first = false;
		    break;
        case 37:    //初级卫兵
            monster.dp = 50;
            monster.attack = 48;
            monster.defense = 22;
            monster.gold = 12;
            monster.attack_first = false;
            break;
        case 38:    //中级卫兵
            monster.dp = 100;
            monster.attack = 180;
            monster.defense = 110;
            monster.gold = 100;
            monster.attack_first = false;
            break;
        case 39:    //高级卫兵
            monster.dp = 180;
            monster.attack = 460;
            monster.defense = 360;
            monster.gold = 200;
            monster.attack_first = false;
            break;
		case 47:    //血影
		    monster.dp = 1200;
		    monster.attack = 180;
		    monster.defense = 20;
		    monster.gold = 100;
		    monster.attack_first = false;
		    break;
		case 56:    //魔龙
		    monster.dp = 1500;
		    monster.attack = 600;
		    monster.defense = 250;
		    monster.gold = 800;
		    monster.attack_first = false;
		    break;
		case 58:    //幽灵
		    monster.dp = 320;
		    monster.attack = 140;
		    monster.defense = 20;
		    monster.gold = 30;
		    monster.attack_first = false;
		    break;
		case 59:    //黑暗骑士
		    monster.dp = 180;
		    monster.attack = 430;
		    monster.defense = 210;
		    monster.gold = 120;
		    monster.attack_first = false;
		    break;
		case 64:	//魔法警卫
			monster.dp = 230;
			monster.attack = 450;
			monster.defense = 100;
			monster.gold = 100;
			monster.attack_first = false;
			break;
		case 70:    //不可攻击的大魔王(49层高级) 
		    monster.dp = 8000;
		    monster.attack = 5000;
		    monster.defense = 1000;
		    monster.gold = 500;
		    monster.attack_first = false;
		    break;
		case 71:    //可攻击的大魔王(49层低级) 
		    monster.dp = 800;
		    monster.attack = 500;
		    monster.defense = 100;
		    monster.gold = 500;
		    monster.attack_first = false;
		    break;
		case 72:    //可攻击的大魔王(50层) 
		    monster.dp = 5000;
		    monster.attack = 1580;
		    monster.defense = 190;
		    monster.gold = 500;
		    monster.attack_first = false;
		    break;
        default:
            monster.dp = 35;
            monster.attack = 18;
            monster.defense = 1;
            monster.gold = 100;
            monster.attack_first = false;
            break;
    }
}