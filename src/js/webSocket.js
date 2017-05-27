webPush = {
	basePath : "",
	webSocket : null,
	ws_RetryTimes : 0,
	ws_MaxRetry : 30,
	ws_isRetry : false,
	appVm : null,
	headerVm : null,
	lotteryVm : null
}

webPush.joinPush = function() {
  var path = 'ws://' + this.basePath.replace("http://","") + 'push';
	var _this = this;
    this.webSocket = new WebSocket(path);
    this.webSocket.onerror = function (event) {
        console.log("--webSocket error");
    };
    this.webSocket.onclose = function (event) {
        console.log("--webSocket close: " + event.code + "," + event.reason);
        if (event.code != 1003 && event.code != 1000) {
            if (_this.ws_RetryTimes < _this.ws_MaxRetry) {
                _this.ws_RetryTimes = _this.ws_RetryTimes + 1;
                _this.ws_isRetry = true;
                setTimeout(_this.joinPush(), 2000);

                console.log("--webSocket retry: " + _this.ws_RetryTimes);
            } else {
                console.log("--webSocket retry fail!");
            }
        } else {
            _this.ws_isRetry = false;
        }
    }
    this.webSocket.onopen = function (event) {
        if(!_this.ws_isRetry)
            _this.ws_RetryTimes = 0;
    };
    this.webSocket.onmessage = function (event) {
        _this.onData(event, _this.webSocket)
    };
}
webPush.onData = function(event, webSocket) {
	/*
	* exclusive_login // 唯一在线
	* off_line // 强制下线
	* open_issue // 开盘期号
	* logout //长时间未操作
	* open_ln // 开奖号码
	* bet_record //投注记录
	* recharge_succeed //充值提示
	* withdraw_succeed //提现提示
	* agent_transfer //转账提示
	* immediately_msg //即时消息
	* inner_msg //站内信
	* lottery_settle //开奖结算（未中奖）
	* win_num //中奖消息
	* win_list //中奖排行
	*/
	var _this = this;
    var dataObj = JSON.parse(event.data);
	var gameObj = null;
	var contentStr = "";
	var judge = true;
	if (dataObj.messageType == "exclusive_login" || dataObj.messageType == "off_line" || dataObj.messageType == 'logout') {	//唯一在线和强制下线

		if(this.headerVm){
			this.headerVm.$notice({
				title:dataObj.title,
				content:dataObj.content
			});
			this.appVm.quit();
			webSocket.close();
		}
	}else if (dataObj.messageType == "open_issue") {	// 开盘期号

    }else if(dataObj.messageType == "open_ln"){	//开奖号码
		gameObj = JSON.parse(dataObj.content);
		if(this.lotteryVm && this.lotteryVm.gameId == gameObj.gameId){
			var arr = [];
			var json = {};
			//   kg页面推送
			if(this.lotteryVm.$route.name == 'lotteryKg'){
				if(gameObj.status == "已开奖"){
					switch(this.lotteryVm.groupId/1){
						case 4:
							switch(this.gameId/1){
								case 33:
									arr = this.lotteryVm.pcEggArr;break;
								case 32:
								case 38:
								case 39:
								case 40:
								case 41:
								case 42:
									arr = this.lotteryVm.ksArr;break;
								case 34:
									arr = this.lotteryVm.markSixArr;break;
							}
							break;
						case 5:
							arr = this.lotteryVm.pkArr;
							break;
						default:
							arr = this.lotteryVm.sscArr;
							break;
					}
					this.lotteryVm.winningIssue = gameObj.issue;
					this.lotteryVm.winningGet = false;
					this.lotteryVm.lotteryNum = this.lotteryVm.groupId==4?gameObj.lotteryNumber.split(/\s{1,}/):gameObj.lotteryNumber.split(/\s{1,}/).reverse();
					$.each(this.lotteryVm.lotteryNum,function(i,e){
						_this.lotteryVm.lotteryNum[i] = e.length==1?"0":"00";
						_this.lotteryVm.setAnTime[i] = setTimeout(function(){
							_this.lotteryVm.lotteryAn($(".kg-number-new li:eq("+i+") div:eq(0)"),e,arr,4000,"swing");
						},i*(_this.lotteryVm.betClass.groupId==4?50:_this.lotteryVm.betClass.groupId==5?150:400));
					});
					_this.lotteryVm.getHistory();
					_this.lotteryVm.getDewDrop();
					setTimeout(function(){
						if ($("#chatAudio").length > 0 && _this.lotteryVm.notSound) {
							$('#chatAudio').get(0).play();
						}
					},6000);
				}
			//其他页面推送
			}else{
				if(gameObj.status == "已开奖"){
					judge = true;
					switch(this.lotteryVm.groupId/1){
						case 2:
							arr = this.lotteryVm.evArr;
							break;
						case 4:
							if(this.lotteryVm.gameId==14){
								arr = this.lotteryVm.klArr;
							}else{
								arr = this.lotteryVm.k3Arr;
							}
							break;
						case 5:
							arr = this.lotteryVm.pkArr;
							break;
						default:
							arr = this.lotteryVm.sscArr;
							break;
					}
					this.lotteryVm.winIssue = gameObj.issue;
					this.lotteryVm.winStatus = false;
					this.lotteryVm.lotteryNum = this.lotteryVm.gameId==14?gameObj.lotteryNumber.split(/\s{1,}/):gameObj.lotteryNumber.split(/\s{1,}/).reverse();
					if(_this.lotteryVm.dice){
						$.each(this.lotteryVm.lotteryNum,function(i,e){
							_this.lotteryVm.lotteryNum[i] = e.length==1?"0":"00";
							_this.lotteryVm.setAnTime[i] = setTimeout(function(){
								_this.lotteryVm.diceAn($("#revealBall li:eq("+i+")"),e);
							},i*(_this.lotteryVm.gameId==14?50:_this.lotteryVm.groupId==5?150:400));
						});
					}else{
						$.each(this.lotteryVm.lotteryNum,function(i,e){
							_this.lotteryVm.lotteryNum[i] = e.length==1?"0":"00";
							_this.lotteryVm.setAnTime[i] = setTimeout(function(){
								_this.lotteryVm.lotteryAn($("#revealBall li:eq("+i+") div:eq(0)"),e,arr,4000,"swing");
							},i*(_this.lotteryVm.gameId==14?50:_this.lotteryVm.groupId==5?150:400));
						});
					}
					json.issue = gameObj.issue;
					json.time = "";
					json.lotteryNumber = gameObj.lotteryNumber.split(/\s{1,}/);
					if ($("#chatAudio").length > 0 && this.lotteryVm.notSound) {
						$('#chatAudio').get(0).play();
					}
					setTimeout(function(){
						$.each(_this.lotteryVm.hostIssue,function(i,e){
							if(e.issue==json.issue){
								e.lotteryNum = json.lotteryNumber;
								judge = false;
							}
						});
						if(judge)_this.lotteryVm.hostIssue.unshift(json);
						_this.lotteryVm.missedHotColdFn();
					},6000);
				}
			}
		}
	}else{
    	this.appVm.getBalance();
		$.each(dataObj.content.split('&'),function(i,e){
			contentStr += '<p>'+e+'</p>';
		});
		if(dataObj.messageType == "lottery_settle"||dataObj.messageType == "win_num"){
			setTimeout(function(){
				if(!_this.appVm.lotteryInfo.lotteryJudg ||_this.lotteryVm.scoket){
					_this.appVm.$message({
						title:dataObj.title,
						content:contentStr,
						time:60000
					});
				};
				//刷新游戏记录
				if(_this.lotteryVm){
					_this.lotteryVm.betRecordsFn();
				}
				if ($("#noteEndAudio").length > 0 && (!_this.appVm.lotteryInfo.lotteryJudg || !_this.lotteryVm.notSound)) {
					$('#noteEndAudio').get(0).play();
				}

			},8000);
		}else if(dataObj.messageType == "win_list"){			//中奖排行
			setTimeout(function(){
				if(_this.lotteryVm){
					_this.lotteryVm.winRankFn();
				}
			},8000);
		}else if(dataObj.messageType == "bet_record"){
			if(this.lotteryVm){
				this.lotteryVm.betRecordsFn();
			}
		}else{
			if(!_this.appVm.lotteryInfo.lotteryJudg ||this.lotteryVm.scoket){
				_this.appVm.$message({
					title:dataObj.title,
					content:contentStr,
					time:60000
				});
			};
			if(dataObj.title == "充值成功"){
				if ($("#rechargeAudio").length > 0 && (!this.appVm.lotteryInfo.lotteryJudg || !this.lotteryVm.notSound)) {
					$('#rechargeAudio').get(0).play();
				}
			}else if (dataObj.title == "提现成功" && (!this.appVm.lotteryInfo.lotteryJudg || !this.lotteryVm.notSound)) {
				if ($("#withdrawAudio").length > 0) {
					$('#withdrawAudio').get(0).play();
				}
			}else if (dataObj.title == "提现失败" && (!this.appVm.lotteryInfo.lotteryJudg || !this.lotteryVm.notSound)) {
				if ($("#rejectWithdrawAudio").length > 0) {
					$('#rejectWithdrawAudio').get(0).play();
				}
			}else if (dataObj.title == "成功转账" && (!this.appVm.lotteryInfo.lotteryJudg || !this.lotteryVm.notSound)) {
				if ($("#byTransfersAudio").length > 0) {
					$('#byTransfersAudio').get(0).play();
				}
			}else if (dataObj.title == "收到转账" && (!this.appVm.lotteryInfo.lotteryJudg || !this.lotteryVm.notSound)) {
				if ($("#transfersAudio").length > 0) {
					$('#transfersAudio').get(0).play();
				}
			}else if (dataObj.title == "转账失败" && (!this.appVm.lotteryInfo.lotteryJudg || !this.lotteryVm.notSound)) {
				if ($("#refuseTransfersAudio").length > 0) {
					$('#refuseTransfersAudio').get(0).play();
				}
			};
			if(dataObj.messageType == "inner_msg"){
				//获取未读消息
				//this.appVm.getMsg();
				//获取消息列表
				//this.appVm.getMessage();
				if ($("#notificationMessageAudio").length > 0 && (!this.appVm.lotteryInfo.lotteryJudg || !this.lotteryVm.notSound)) {
					$('#notificationMessageAudio').get(0).play();
				}
			}
		}
	}
}

module.exports = webPush;
