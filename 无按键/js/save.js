//存档
function save() {
	if(window.confirm('确定要存档吗？')){
		
		 //对象存入localStorage先转化为JSON串
		 localStorage.setItem('map', JSON.stringify(map));
		 localStorage.setItem('warrior', JSON.stringify(warrior));
		 
		 alert("存档成功")
	  }
}

//读档
function load() {
	if(window.confirm('确定要读档吗？')){
		var save_map = JSON.parse(localStorage.getItem('map'));
		var save_warrior = JSON.parse(localStorage.getItem('warrior'));
		
		if (save_map == null || save_warrior == null) {
		    alert("没有存档");
		} else {
		    map = save_map;
		    warrior = save_warrior;
		    re_init(map);
			alert("读取存档成功");
		}
	}
    
}

//重新开始，清除存档
function restart() {
	if(window.confirm('确定要重新开始吗？重新开始将清除存档')){
		localStorage.clear();
		location.reload();
		alert("清理成功")
	} 
}

//刷新
function flush() {
	if(window.confirm('确定要刷新吗？刷新不清楚存档')){
		location.reload();
		alert("刷新成功")
	} 
}