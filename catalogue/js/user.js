document.body.addEventListener("click", function(){
    document.getElementById("login_info").style.display='none';
});

/*选择激活 点击时添加激活样式 具体应该在选择银行卡等*/
function chooseActive(className) {
    var i,  tab;
    tab = document.getElementsByClassName(className);
    for (i = 0; i < tab.length; i++) {
        tab[i].className = tab[i].className.replace(" active", "");
    }
	var target = (event.currentTarget) ? event.currentTarget : event.srcElement;
    target.className += " active";
}

/*表单按钮提交激活 INPUT中onKeyup事件使用 disabledBtn(input CLASSNAME,提交按钮NAME) 这里没有作过多细节判断 只是将所有表单项目完成即可*/
function disabledBtn(_className,_btnName) {
	var inputsWithValues = 0;
	var _f = document.getElementsByClassName(_className);
	for(var i=0; i < _f.length; i++) { 
		if (_f[i].value) {
		  inputsWithValues += 1;
		}
	}  
  if (inputsWithValues == _f.length) {
    document.getElementsByName(_btnName)[0].disabled = false;
  } else {
    document.getElementsByName(_btnName)[0].disabled = true;
  }
}

function submitFalse(){
	return false;
}  

/*表格排序*/
function sortTable(n,eleID) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById(eleID);
  switching = true;
  dir = "asc"; 
  while (switching) {
    switching = false;
    rows = table.getElementsByTagName("TR");
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;      
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

//弹窗 开始
function modalClick(modalID){
	var modal = document.getElementById(modalID);
		modal.style.display = "block";
	}

function modalClose(modalID){
	if(modalID){
	   var modalID = document.getElementById(modalID);
	   modalID.style.display = "none";
		}else{
		var modal = document.getElementsByClassName("modal");
		for (var i=0;i<modal.length; i++) {
			modal[i].style.display = "none";
		}	
	}
}

window.onclick = function(event) {
	var modal = document.getElementsByClassName("modal");	
	for (var i=0;i<modal.length; i++) {
		if (event.target == modal[i]) {
			modal[i].style.display = "none";
		}
	}	
}
//弹窗 结束

/*消息列表展开收缩消息*/
function msgDisplay(ele) {
	var parent = ele.parentNode.parentNode;
	var child = parent.querySelector("dd");
	var _dd_height=child.offsetHeight
	if(_dd_height>60){
		ele.removeAttribute("class");
		child.removeAttribute("class");
		}else{
			ele.setAttribute("class", "active");
			child.setAttribute("class", "active");
		}
}

/*消息列表展开收缩消息*/
function adsDisplay(ele) {
	var parent = ele.parentNode.parentNode;
	var child = parent.querySelector("dd");
	var _dd_height=child.offsetHeight
	if(_dd_height>0){
		child.style.display="none";
		}else{
			child.style.display="block";
		}
}

/*代理中心启用/停止*/
function opPlay(ele,className) {
	var parent = ele.parentNode.parentNode;
	var _class = ele.getAttribute("class");
	if(_class==className){
		ele.setAttribute("class", className+" active");
	}else{
		ele.setAttribute("class", className);
		}
}
