//上楼
function upstairs(fly_tool=false) {
    var floor = warrior.floor++;
	warrior.arrive_floor[warrior.floor]=1;
    switch (floor) {
        case 0:
            warrior.x = 11;
            warrior.y = 6;
            break;
        case 1:
            warrior.x = 2;
            warrior.y = 1;
            break;
        case 2:
            warrior.x = 11;
            warrior.y = 2;
            break;
        case 3:
            warrior.x = 10;
            warrior.y = 11;
            break;
        case 4:
            warrior.x = 11;
            warrior.y = 2;
            break;
        case 5:
            warrior.x = 2;
            warrior.y = 1;
            break;
        case 6:
            warrior.x = 10;
            warrior.y = 11;
            break;
        case 7:
            warrior.x = 2;
            warrior.y = 1;
            break;
        case 8:
            warrior.x = 2;
            warrior.y = 6;
            break;
        case 9:
            warrior.x = 10;
            warrior.y = 1;
            break;
		case 10:
		    warrior.x = 10;
		    warrior.y = 6;
		    break;
		case 11:
		    warrior.x = 11;
		    warrior.y = 10;
		    break;
		case 12:
		    warrior.x = 11;
		    warrior.y = 2;
		    break;
		case 13:
		    warrior.x = 11;
		    warrior.y = 10;
		    break;
		case 14:
		    warrior.x = 10;
		    warrior.y = 6;
		    break;
		case 15:
		    warrior.x = 2;
		    warrior.y = 6;
		    break;
		case 16:
		    warrior.x = 10;
		    warrior.y = 6;
		    break;
		case 17:
		    warrior.x = 2;
		    warrior.y = 6;
		    break;
		case 18:
		    warrior.x = 2;
		    warrior.y = 1;
		    break;
		case 19:
		    warrior.x = 10;
		    warrior.y = 6;
		    break;
		case 20:
		    warrior.x = 2;
		    warrior.y = 6;
		    break;
		case 21:
		    warrior.x = 10;
		    warrior.y = 6;
		    break;
		case 22:
		    warrior.x = 2;
		    warrior.y = 1;
		    break;
		case 23:
		    warrior.x = 11;
		    warrior.y = 2;
		    break;
		case 24:
		    warrior.x = 11;
		    warrior.y = 2;
		    break;
		case 25:
		    warrior.x = 11;
		    warrior.y = 2;
		    break;
		case 26:
			warrior.x = 11;
			warrior.y = 2;
			break;
		case 27:
			warrior.x = 11;
			warrior.y = 10;
			break;
		case 28:
			warrior.x = 10;
			warrior.y = 1;
			break;
		case 29:
			warrior.x = 10;
			warrior.y = 6;
			break;
		case 30:
			warrior.x = 2;
			warrior.y = 6;
			break;
		case 31:
			warrior.x = 11;
			warrior.y = 6;
			break;
		case 32:
			warrior.x = 1;
			warrior.y = 10;
			break;
		case 33:
			warrior.x = 1;
			warrior.y = 2;
			break;
		case 34:
			warrior.x = 10;
			warrior.y = 6;
			break;
		case 35:
			warrior.x = 2;
			warrior.y = 11;
			break;
		case 36:
			warrior.x = 10;
			warrior.y = 11;
			break;
		case 37:
			warrior.x = 1;
			warrior.y = 2;
			break;
		case 38:
			warrior.x = 2;
			warrior.y = 11;
			break;
		case 39:
			warrior.x = 11;
			warrior.y = 10;
			break;
		case 40:
			warrior.x = 2;
			warrior.y = 6;
			break;
		case 41:
			warrior.x = 11;
			warrior.y = 5;
			break;
		case 42:
			warrior.x = 2;
			warrior.y = 1;
			break;
		case 43:
			if(fly_tool){
				warrior.x = 10;
				warrior.y = 6;
			}
			else{
				warrior.floor++;
				warrior.x = 1;
				warrior.y = 2;
			}
			break;
		case 44:
			warrior.x = 1;
			warrior.y = 2;
			break;
		case 45:
			warrior.x = 2;
			warrior.y = 11;
			break;
		case 46:
			warrior.x = 10;
			warrior.y = 11;
			break;
		case 47:
			warrior.x = 10;
			warrior.y = 11;
			break;
		case 48:
			warrior.x = 11;
			warrior.y = 2;
			break;
		case 49:
			warrior.x = 7;
			warrior.y = 6;
			break;
		case 50:
			warrior.floor--;
			break;
		default:
            break;
    }
    re_init(map);
}

//下楼
function downstairs(fly_tool=false) {
    var floor = warrior.floor--;
    switch (floor) {
		case 0:
			warrior.floor++;
		    break;
        case 1:
            warrior.x = 5;
            warrior.y = 6;
            break;
        case 2:
            warrior.x = 1;
            warrior.y = 2;
            break;
        case 3:
            warrior.x = 10;
            warrior.y = 1;
            break;
        case 4:
            warrior.x = 11;
            warrior.y = 10;
            break;
        case 5:
            warrior.x = 10;
            warrior.y = 1;
            break;
        case 6:
            warrior.x = 2;
            warrior.y = 1;
            break;
        case 7:
            warrior.x = 10;
            warrior.y = 11;
            break;
        case 8:
            warrior.x = 2;
            warrior.y = 1;
            break;
        case 9:
            warrior.x = 2;
            warrior.y = 6;
            break;
        case 10:
            warrior.x = 10;
            warrior.y = 1;
            break;
		case 11:
		    warrior.x = 10;
		    warrior.y = 6;
		    break;
		case 12:
		    warrior.x = 10;
		    warrior.y = 11;
		    break;
		case 13:
		    warrior.x = 11;
		    warrior.y = 2;
		    break;
		case 14:
		    warrior.x = 11;
		    warrior.y = 10;
		    break;
		case 15:
		    warrior.x = 10;
		    warrior.y = 6;
		    break;
		case 16:
		    warrior.x = 2;
		    warrior.y = 6;
		    break;
		case 17:
		    warrior.x = 10;
		    warrior.y = 6;
		    break;
		case 18:
		    warrior.x = 2;
		    warrior.y = 6;
		    break;
		case 19:
		    warrior.x = 1;
		    warrior.y = 2;
		    break;
		case 20:
		    warrior.x = 10;
		    warrior.y = 6;
		    break;
		case 21:
		    warrior.x = 2;
		    warrior.y = 6;
		    break;
		case 22:
		    warrior.x = 10;
		    warrior.y = 6;
		    break;
		case 23:
		    warrior.x = 7;
		    warrior.y = 6;
		    break;
		case 24:
		    warrior.x = 2;
		    warrior.y = 11;
		    break;
		case 25:
		    warrior.x = 11;
		    warrior.y = 2;
		    break;
		case 26:
		    warrior.x = 11;
		    warrior.y = 2;
		    break;
		case 27:
		    warrior.x = 11;
		    warrior.y = 2;
		    break;
		case 28:
		    warrior.x = 11;
		    warrior.y = 10;
		    break;
		case 29:
			warrior.x = 11;
			warrior.y = 2;
			break;
		case 29:
			warrior.x = 11;
			warrior.y = 2;
			break;
		case 30:
			warrior.x = 10;
			warrior.y = 6;
			break;
		case 31:
			warrior.x = 2;
			warrior.y = 6;
			break;
		case 32:
			warrior.x = 10;
			warrior.y = 6;
			break;
		case 33:
			warrior.x = 1;
			warrior.y = 10;
			break;
		case 34:
			warrior.x = 1;
			warrior.y = 2;
			break;
		case 35:
			warrior.x = 10;
			warrior.y = 6;
			break;
		case 36:
			warrior.x = 1;
			warrior.y = 10;
			break;
		case 37:
			warrior.x = 10;
			warrior.y = 11;
			break;
		case 38:
			warrior.x = 1;
			warrior.y = 2;
			break;
		case 39:
			warrior.x = 1;
			warrior.y = 10;
			break;
		case 40:
			warrior.x = 10;
			warrior.y = 11;
			break;
		case 41:
			warrior.x = 2;
			warrior.y = 6;
			break;
		case 42:
			warrior.x = 10;
			warrior.y = 6;
			break;
		case 43:
			warrior.x = 2;
			warrior.y = 1;
			break;
		case 44:
			warrior.x = 10;
			warrior.y = 1;
			break;
		case 45:
			if(fly_tool){
				warrior.x = 10;
				warrior.y = 6;
			}
			else{
				warrior.floor--;
				warrior.x = 10;
				warrior.y = 1;
			}
			break;
		case 46:
			warrior.x = 1;
			warrior.y = 10;
			break;
		case 47:
			warrior.x = 10;
			warrior.y = 11;
			break;
		case 48:
			warrior.x = 2;
			warrior.y = 1;
			break;
		case 49:
			warrior.x = 10;
			warrior.y = 1;
			break;
		case 50:
			warrior.x = 11;
			warrior.y = 2;
			break;
        default:
            break;
    }
    re_init(map);
}