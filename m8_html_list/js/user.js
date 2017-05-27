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

/*表单按钮提交激活 INPUT中onKeyup事件使用 checkform(表单NAME,提交按钮NAME) 这里没有作过多细节判断 只是将所有表单项目完成即可*/
function checkform(formName,submitName){
	var f = document.forms[formName].elements;
	var cansubmit = true;
	for (var i = 0; i < f.length; i++) {
	  if (f[i].value.length == 0) cansubmit = false;
	}
	if (cansubmit) {
	  document.forms[formName][submitName].disabled = false;
	}else {
	  document.forms[formName][submitName].disabled = true;
	}
}

/*表格排序*/
function sortTable(n,eleID) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById(eleID);
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
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
