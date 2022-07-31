//勇士
function warrior() {
    this.dp = 1000;   //血量
    this.attack = 100;   //攻击力
    this.defense = 100;  //防御力
    this.gold = 0;   //金钱
    this.yellow_key = 0; //黄钥匙
    this.blue_key = 0;   //蓝钥匙
    this.red_key = 0;    //红钥匙
	this.x = 11;  //横坐标
	this.y = 6;	 //纵坐标
	this.floor = 1;  //层数
    this.weapon = 'None Sword';     //武器:'Sacred Sword'|'Holy Sword'|'Knight Sword'|'Silver Sword'|'Iron Sword'|'None'
    this.armor = 'None Shield';     //防具:'Sacred Shield'|'Holy Shield'|'Knight Shield'|'Silver Shield'|'Iron Shield'|'None'
	this.lucky = 1;		//金币获取倍数
	this.can_move = true;   //能否移动(某些特殊情况禁止勇士移动)
	this.tools_array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	
	
	
	this.handlebook = false;    //是否拥有怪物手册 97
	this.notepad = false;		//是否拥有记事本 98
	this.bomb = false;		//是否拥有炸弹 99
	this.symmetry_aircraft = 0;		//是否拥有中心对称飞行器 100
	this.down_aircraft = false;		//是否拥有向下飞行器 101
	this.up_aircraft = false;		//是否拥有向上飞行器 102
	this.crucifix = false;		//是否拥有十字架 103
	this.holy_water = false;		//是否拥有圣水 104
	this.pickaxe = false;		//是否拥有镐 105
	this.freezing_spells = false;		//是否拥有冰冻魔法 106
	this.magic_dragon = false;		//是否拥有魔龙 107
	this.big_key = false;		//是否拥有大黄钥匙 108
	this.lucky_coin = false;    //是否拥有幸运金币 109
	this.mace = false;    //是否拥有飞行权杖 110
	this.earthquake_scroll = false;	//是否含有地震卷轴 111
	
	this.get_sacred_shield = false;	//获得神圣盾标志
	this.ten_thief = false;	//10层触发小偷对话(true表示未触发过)
	this.twenty_four_open = false;	//24层通道打开标志
	this.twenty_four_enter = false;	//24层通道进入标志
	this.twenty_six_princess = false; //26层与公主对话
	this.twenty_nine_thief = false;	//29层小偷必须在走出go0f后才能对话(false表示未完成go0f)
	this.arrive_forty_nine =false;	//首次到达49层标志(false表示未到达)
	this.seal_magic = false;	//封印49层大魔王标志
	this.fifty_thief = false;	//与50层小偷对话
	this.gameover_flag = false;	//通关标志
	
	
	this.arrive_floor = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
						 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
						 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
						 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
						 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];	//到达楼层标志数组
	
	this.message_array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];	//记事本解锁标志数组
	this.consume_gold_num = 1;	//商店消费金币数次数
	this.floor_store_array = [4, 12, 32, 46];
	this.floor_attack_array = [2, 4, 8, 10];
	this.floor_defense_array = [4, 8, 16, 20];
}