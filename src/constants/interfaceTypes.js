/**
 * 在线状态
 */
export const INTERFACE_ISONLINE = '/noauth/isOnline';

/**
 * 登录
 */
export const INTERFACE_LOGIN = '/noauth/login';

/**
 * 随机试玩登录接口
 */
export const INTERFACE_RANDOM = '/noauth/randomMemberLogin';

/**
 * 验证码
 */
export const INTERFACE_VCODE = '/noauth/vCode';

/**
 * 登出
 */
export const INTERFACE_LOGOUT = '/noauth/logout';

/**
 * AG投注列表
 */
export const INTERFACE_BETLIST = '/user/ag/betList';

/**
 * AG转账列表
 */
export const INTERFACE_TRANSEFERLIST = '/user/ag/transferList';

/**
 * 配额发放
 */
export const INTERFACE_GRANTAGENTQUOTA = '/user/member/grantAgentQuota';

/**
 *  配额回收
 */
export const INTERFACE_RECYCLEAGENTQUOTA = '/user/member/recycleAgentQuota';

/**
 *  根据用户名,获取返点级别配额列表
 */
export const INTERFACE_SUBREBATEPOINTLEVELIST = '/user/member/subRebatePointLevelList';

/**
 *  修改返点
 */
export const INTERFACE_UPDATEREBATEPOINT = '/user/member/updateRebatepoint';

/**
 *  得到最大下级返点
 */
export const INTERFACE_MAXSUMREBATEPOINT = '/user/member/maxSumRebatepoint';

/**
 *  代理配额列表
 */
export const INTERFACE_AGENTQUOTALIST = '/user/member/agentQuotaList';

/**
 *  配额发放(或回收）记录,分页传递参数:iDisplayStart(起始行),iDisplayLength(页大小);排序传递参数:sSortDir_0(DESC-降序;ASC-升序),sSortColName(排序字段)
 */
export const INTERFACE_AGENTQUOTARECORD = '/user/member/agentQuotaRecord';

/**
 *  会员列表,分页传递参数:iDisplayStart(起始行),iDisplayLength(页大小);排序传递参数:sSortDir_0(DESC-降序;ASC-升序),sSortColName(排序字段)
 */
export const INTERFACE_MEMBERLIST = '/user/member/list';

/**
 *  获取会员管理基本信息
 */
export const INTERFACE_MEMBERBASE = '/user/member/base';

/**
 *  我的配额列表
 */
export const INTERFACE_MYQUOTALIST = '/user/member/myQuotaList';

/**
 *  代理增加下级用户
 */
export const INTERFACE_MEMBERCREATE = '/user/member/memberCreate';

/**
 *  BB投注列表
 */
export const INTERFACE_BBBETLIST = '/user/bb/betList';

/**
 *  BB转账列表
 */
export const INTERFACE_BBTRANSFERLIST = '/user/bb/bbTransferList';

/**
 *  开启/关闭契约分红
 */
export const INTERFACE_UPDATECBSTATUS = '/user/cb/updateCBStatus';

/**
 *  日工资设定
 */
export const INTERFACE_CONTRACTSET = '/user/cb/contractSet';

/**
 *  我的契约分红记录
 */
export const INTERFACE_MYCONTRACTBONUSRECORDS = '/user/cb/myContractBonusRecords';

/**
 *  下级契约同意/拒绝
 */
export const INTERFACE_CONTRACTCONFIRM = '/user/cb/contractConfirm';

/**
 *  用户契约分红
 */
export const INTERFACE_USERCONTRACTBONUS = '/user/cb/userContractBonus';

/**
 *  我的日契约分红
 */
export const INTERFACE_MYCONTRACTBONUS = '/user/cb/myContractBonus';

/**
 *  开启/关闭日工资
 */
export const INTERFACE_UPDATEDWSTATUS = '/user/dw/updateDWStatus';

/**
 *  我的日工资
 */
export const INTERFACE_MYDAILYWAGES = '/user/dw/myDailyWages';

/**
 *  日工资设定
 */
export const INTERFACE_DALYWAGESSET = '/user/dw/dalyWagesSet';

/**
 *  我的契约分红记录
 */
export const INTERFACE_MYDALYWAGESRECORDS = '/user/dw/myDalyWagesRecords';

/**
 *  用户的日工资
 */
export const INTERFACE_USERDAILYWAGES = '/user/dw/userDailyWages';

/**
 *  MG投注列表
 */
export const INTERFACE_MGBETLIST = '/user/mg/betList';

/**
 *  修改登录密码
 */
export const INTERFACE_UPDATELOGINPASSWORD = '/user/password/updateLoginPassword';

/**
 *  修改资金密码,需要校验原资金密码和登录密码
 */
export const INTERFACE_UPDATEFUNDSPASSWORD = '/user/password/updateFundsPassword';

/**
 *  验证资金密码是否为空
 */
export const INTERFACE_FUNDSPSWISNULL = '/user/password/fundsPSWisNull';

/**
 *  验证登录密码是否为初始密码
 */
export const INTERFACE_LOGINPSWISDEFAULT = '/user/password/loginPswIsDefault';

/**
 *  资金密码设置
 */
export const INTERFACE_FUNSPSWSET = '/user/password/funsPswSet';

/**
 * 个人日结报表需要分页传递参数:iDisplayStart(起始行),iDisplayLength(页大小);
 */
export const INTERFACE_DAILYREPORT = '/user/personalReport/dailyReport';

/**
 *  帐变明细需要分页传递参数:iDisplayStart(起始行),iDisplayLength(页大小)
 */
export const INTERFACE_TRANSACTIONDETAIL = '/user/personalReport/transactionDetail';

/**
 *  根据帐变明细中帐变方向和帐变类型更改帐变细类查询条件
 */
export const INTERFACE_TRANSACTIONSUBCLASSLIST = '/user/personalReport/transactionSubclassList';

/**
 *  会员实时报表
 */
export const INTERFACE_DAILYREPORDETAIL = '/user/personalReport/dailyReporDetail';

/**
 *  PT投注列表
 */
export const INTERFACE_PTBETLIST = '/user/pt/betList';

/**
 *  停用/启用注册链接
 */
export const INTERFACE_UPDATESTATUS = '/user/register/updateStatus';

/**
 *  获取注册链接列表数据,分页传递参数:iDisplayStart(起始行),iDisplayLength(页大小);排序传递参数:sSortDir_0(DESC-降序;ASC-升序),sSortColName(排序字段)
 */
export const INTERFACE_REGLIST = '/user/register/list';

/**
 *  新增注册链接
 */
export const INTERFACE_REGADD = '/user/register/add';

/**
 *  更新注册链接
 */
export const INTERFACE_REGUPDATE = '/user/register/update';

/**
 *  删除注册链接
 */
export const INTERFACE_REGDELETE = '/user/register/delete';

/**
 *  团队用户图表
 */
export const INTERFACE_USERCHART = '/user/teamReport/userChart';

/**
 *  团队总览-团队每日人数统计列表
 */
export const INTERFACE_DAILYUSERS = '/user/teamReport/dailyUsers';

/**
 *   团队总览-团队每日金额统计列表
 */
export const INTERFACE_AGENTDAILYAMOUNT = '/user/teamReport/agentDailyAmount';

/**
 *   团队盈亏报表
 */
export const INTERFACE_GAINREPORTTHREE = '/user/teamReport/gainReport3';

/**
 *   团队盈亏报表
 */
export const INTERFACE_GAINREPORT = '/user/teamReport/gainReport';

/**
 *    团队日结报表
 */
export const INTERFACE_TEAMDAILYREPORTTHREE = '/user/teamReport/teamDailyReport3';

/**
 *    团队日结报表
 */
export const INTERFACE_TEAMDAILYREPORT = '/user/teamReport/teamDailyReport';

/**
 *   团队总览-报表总览 的 实时统计 今天
 */
export const INTERFACE_AGENTTOTAL = '/user/teamReport/agentTotal';

/**
 *   获取团队余额
 */
export const INTERFACE_BALANCETOTAL = '/user/teamReport/balanceTotal';

/**
 *   获取代理转账token
 */
export const INTERFACE_TRANSFERTOKEN = '/play/transfer/transferToken';

/**
 *   设置/获取代理转账权限
 */
export const INTERFACE_PERMISSION = '/play/transfer/permission';

/**
 *   转账详情页
 */
export const INTERFACE_DETAILS = '/play/transfer/details';

/**
 *   是否允许转账
 */
export const INTERFACE_ISALLOW = '/play/transfer/isAllow';

/**
 *   用户列表
 */
export const INTERFACE_PLAYLIST = '/play/transfer/list';

/**
 *   代理转账
 */
export const INTERFACE_PLAYSAVE = '/play/transfer/save';

/**
 *   个人转账记录,分页传递参数:iDisplayStart(起始行),iDisplayLength(页大小);排序传递参数:sSortDir_0(DESC-降序;ASC-升序),sSortColName(排序字段);默认操作时间降序排列
 */
export const INTERFACE_PLAYTRANLIST = '/play/transferRecord/list';

/**
 *   转账流水记录(原来的）
 */
export const INTERFACE_AGENTTRANSFERRECORDLIST = '/play/transferRecord/agentTransferRecordList';

/**
 *  上级代理转账记录,
 */
export const INTERFACE_AGENTLIST = '/play/transferRecord/agentList';

/**
 *  锁定用户银行(禁止提现)
 */
export const INTERFACE_USERBANKLOCK = '/user/bank/userBankLock';

/**
 *  银行卡列表(分层的提现银行卡)
 */
export const INTERFACE_BANKCARDLIST = '/user/bank/bankCardList';

/**
 *  用户银行卡列表
 */
export const INTERFACE_USERBANKCARDLIST = '/user/bank/userBankCardList';

/**
 *  验证是否允许新增银行卡
 */
export const INTERFACE_CHECKALLOWADDBANKCARD = '/user/bank/checkAllowAddBankCard';

/**
 *  用户银行卡修改
 */
export const INTERFACE_UPDATEUSERBANKCARD = '/user/bank/updateUserBankCard';

/**
 *  新增用户银行卡(冻结)
 */
export const INTERFACE_USERBANKCARDADD = '/user/bank/userBankCardAdd';

/**
 *  验证开户人姓名全局唯一
 */
export const INTERFACE_CHECKACCOUNTNAME = '/user/bank/checkAccountName';

/**
 *  银行卡删除
 */
export const INTERFACE_USERBANKCARDDELETE = '/user/bank/userBankCardDelete';

/**
 *  冻结用户银行卡
 */
export const INTERFACE_USERBANKCARDFREEZE = '/user/bank/userBankCardfreeze';

/**
 *  验证开户账号全局唯一
 */
export const INTERFACE_CHECKACCOUNTNO = '/user/bank/checkAccountNo';

/**
 *  用户银行详情
 */
export const INTERFACE_USERBANKCARDINFO = '/user/bank/userBankCardInfo';

/**
 *  试玩转为正式会员
 */
export const INTERFACE_OFFICICALMEMBER = '/user/basic/officical-member';

/**
 *  申请为试玩会员
 */
export const INTERFACE_APPLYTRYPLAY = '/user/basic/apply-try-play';

/**
 *  根据用户ID查询用户是否为试玩用户
 */
export const INTERFACE_TRYPLAY = '/user/basic/try-play';

/**
 *  第三方自动返点
 */
export const INTERFACE_REBATE = '/user/basic/rebate';

/**
 *  旧平台资金转入接口
 */
export const INTERFACE_TRANSFER = '/user/basic/bdb/transfer';

/**
 *  获取访问聊天系统的参数
 */
export const INTERFACE_GETSIGN = '/user/basic/getSign';

/**
 *  获取当前登录用户所有权限
 */
export const INTERFACE_GETCURRENTPERMISSION = '/user/basic/getCurrentPermission';

/**
 *  用户第三方开通状态
 */
export const INTERFACE_GETTHIRDPARTYUSERSTATUS = '/user/basic/getThirdPartyUserStatus';

/**
 *  获取当前登录用户邮箱是否激活
 */
export const INTERFACE_ISEMAILACTIVE = '/user/basic/isEmailActive';

/**
 *  获取安全系数,安全系数由原始登录密码修改 10% 设置资金密码 10% 密保问题 30%,邮箱(未认证)10%,邮箱(已认证)20% 手机 10% 组成
 */
export const INTERFACE_VALDATESAFE = '/user/basic/valdateSafe';

/**
 *  获取用户账户各个平台余额
 */
export const INTERFACE_USERBALANCEALL = '/user/basic/user-balance-all';

/**
 *  获取用户账户各个平台余额,不包括第三方
 */
export const INTERFACE_USERBALANCE = '/user/basic/user-balance';

/**
 *  获取用户基础信息
 */
export const INTERFACE_BASICDATA = '/user/basic/basicData';

/**
 *  检查当前登录用户是否为代理
 */
export const INTERFACE_ISAGENT = '/user/basic/isAgent';

/**
 *  发送激活邮件
 */
export const INTERFACE_EMAILACTIVE = '/user/basic/emailActive';

/**
 *  更新密保
 */
export const INTERFACE_RETRIEVEUPDATE = '/user/basic/retrievePassword/update';

/**
 *  获取当前登录用户是否设置了密保
 */
export const INTERFACE_ISSETRETRIEVEPASSWORD = '/user/basic/isSetRetrievePassword';

/**
 *   更新用户基本信息
 */
export const INTERFACE_BUPDATE = '/user/basic/update';

/**
 *  用户绑定密保
 */
export const INTERFACE_RETRUEVESAVE = '/user/basic/retrievePassword/save';

/**
 *  提现前校验
 */
export const INTERFACE_WITHVALIDATE = '/user/withdraw/validate';

/**
 *  获取提现token
 */
export const INTERFACE_GETWITHDRAWTOKEN = '/user/withdraw/getWithdrawToken';

/**
 *  提现申请
 */
export const INTERFACE_WIDHDRAW = '/user/withdraw/withdraw';

/**
 *  初始化前端提现申请页面
 */
export const INTERFACE_INITWITHDRAW = '/user/withdraw/initWithdraw';

/**
 *  提现记录,分页传递参数:iDisplayStart(起始行),iDisplayLength(页大小);排序传递参数:sSortDir_0(DESC-降序;ASC-升序),sSortColName(排序字段)
 */
export const INTERFACE_WITHDRAWLIST = '/user/withdraw-record/list';

/**
 * 撤单
 */
export const INTERFACE_BETREVOKE = '/play/bet/betRevoke';

/**
 * 投注
 */
export const INTERFACE_BETTING = '/play/bet/betting';

/**
 * 获取秒秒彩投注token
 */
export const INTERFACE_GETMMCBETTOKEN = '/play/bet/getMMCBetToken';

/**
 * 秒秒彩投注
 */
export const INTERFACE_MMCBETTING = '/play/bet/mmcBetting';

/**
 * kg彩投注
 */
export const INTERFACE_NEWBETTING = '/play/bet/newBetting';

/**
 * 获取kg投注token
 */
export const INTERFACE_GETBETTOKENKG = '/play/bet/getBetTokenKG';

/**
 * 获取投注token
 */
export const INTERFACE_GETBETTOKEN = '/play/bet/getBetToken';

/**
 * 投注页面游戏记录
 */
export const INTERFACE_GETLATEST = '/play/betRecord/getLatest';

/**
 * 注单明细
 */
export const INTERFACE_BETRECORDDETAL = '/play/betRecord/detai';

/**
 * 投注记录,
 */
export const INTERFACE_BETRECORDLIST = '/play/betRecord/list';

/**
 * 秒秒彩投注页面游戏记录(显示最近5条)
 */
export const INTERFACE_GETMMCLATEST = '/play/betRecord/getMmcLatest';

/**
 * 前台追号记录撤单
 */
export const INTERFACE_CANCEL = '/play/chase/cancel';

/**
 * 前台追号期号停止
 */
export const INTERFACE_ISSUESTOP = '/play/chase/issueStop';

/**
 * 前台追号记录整单停止
 */
export const INTERFACE_RECORDSTOP = '/play/chase/recordStop';

/**
 * 获取KG追号token
 */
export const INTERFACE_GETKGCHASETOKEN = '/play/chase/getKGChaseToken';

/**
 * 追号投注
 */
export const INTERFACE_CHASEBET = '/play/chase/bet';

/**
 * KG追号投注
 */
export const INTERFACE_CHASEBETKG = '/play/chase/betKG';

/**
 * 获取追号token
 */
export const INTERFACE_GETCHASETOKEN = '/play/chase/getChaseToken';

/**
 * 追号记录
 */
export const INTERFACE_CHASERECORDLIST = '/play/chaseRecord/list';

/**
 * 追号明细
 */
export const INTERFACE_CHASERECORDDETAIL = '/play/chaseRecord/detail';

/**
 * 根据追号期号Id得到投注记录
 */
export const INTERFACE_BUISSUEID = '/play/chaseRecord/byIssueId';

/**
 * 投注区数据
 */
export const INTERFACE_BETMANAGE = '/play/gm/betManage';

/**
 * 奖金详情
 */
export const INTERFACE_GAMEBOUNSLIST = '/play/gm/gameBounsList';

/**
 * 根据彩种ID获取返点差
 */
export const INTERFACE_GETBONUSDIFF = '/play/gm/getBonusDiff';

/**
 * 当前用户拥有的彩种数据
 */
export const INTERFACE_GAMETYPES = '/play/gm/gameTypes';

/**
 * 露珠图及两面长龙排行
 */
export const INTERFACE_DEWDROP = '/play/gm/dewdrop';

/**
 * 当前用户拥有的kg投注类型数据
 */
export const INTERFACE_BETTYPESKG = '/play/gm/betTypes_kg';

/**
 * 当前用户拥有的kg玩法类型数据
 */
export const INTERFACE_PLAYTYPESKG = '/play/gm/playTypes_kg';

/**
 * 当前用户拥有的kg彩种数据
 */
export const INTERFACE_GAMETYPESKG = '/play/gm/gameTypes_kg';

/**
 * 当前用户拥有的玩法类型数据
 */
export const INTERFACE_PLAYTYPES = '/play/gm/playTypes';

/**
 * 当前用户拥有的投注类型数据
 */
export const INTERFACE_GMBETTYPES = '/play/gm/betTypes';

/**
 * 返回彩种数据
 */
export const INTERFACE_ALLLOTTERY = '/play/gm/all-lottery';

/**
 * 彩种限红
 */
export const INTERFACE_GAMEBOUNSLIMIT = '/play/gm/gameBounsLimit';

/**
 * 彩种详细情况(基础数据展示：每天总期数，频率、销售时长)
 */
export const INTERFACE_GMDETAIL = '/play/gm/detail';

/**
 * 获取指定的投注类型数据
 */
export const INTERFACE_GETBETTYPELIST = '/play/gm/getBetTypeList';

/**
 * 历史开奖号码
 */
export const INTERFACE_LOTTERYNUMBERLIST = '/play/ln/lotteryNumberList';

/**
 * 彩种分组下所有彩种的当前期(正在受注,包括--彩种id、彩种名称、期号、开盘时间、封盘时间、预定开奖时间、状态等)
 */
export const INTERFACE_CURISSUES = '/play/ln/curIssues';

/**
 * 冷热遗漏值
 */
export const INTERFACE_HOTCOLD = '/play/ln/hotCold';

/**
 * 当前期(正在受注,包括--期号、开盘时间、封盘时间)
 */
export const INTERFACE_CURISSUS = '/play/ln/curIssue';

/**
 * 未来期号（追号）
 */
export const INTERFACE_FUTUREISSUES = '/play/ln/futureIssues';

/**
 * 中奖排行
 */
export const INTERFACE_WINRANKING = '/play/ln/win-ranking';

/**
 *  走势图
 */
export const INTERFACE_TRENDCHART = '/play/ln/trendChart';

/**
 * 秒秒彩历史开奖号码
 */
export const INTERFACE_MMC = '/play/ln/mmc';

/**
 * 领取活动奖金
 */
export const INTERFACE_TAKEMONEY = '/sider/activity/take-money';

/**
 * 全部活动
 */
export const INTERFACE_SIDERLIST = '/sider/activity/list';

/**
 * 前端用户注册
 */
export const INTERFACE_REGISTER = '/sider/common/register';

/**
 * 加载图片文件
 */
export const INTERFACE_LOADIMAGEBYID = '/sider/common/loadImageById';

/**
 * 忘记密码修改
 */
export const INTERFACE_COMUPDATELOGINPASSWORD = '/sider/common/updateLoginPassword';

/**
 * PC3.0配置文件
 */
export const INTERFACE_GETCONFIG = '/sider/common/getConfig';

/**
 * 获取当前域名
 */
export const INTERFACE_GETADDR = '/sider/common/getAddr';

/**
 * 获取PC3.0首页地址
 */
export const INTERFACE_GETADDRPC = '/sider/common/getAddr4pc';

/**
 * 跳转到注册链接的注册页面
 */
export const INTERFACE_GOTOREGPAGE = '/sider/common/gotoRegPage';

/**
 *  获取主题风格
 */
export const INTERFACE_GETCSSSTYLE = '/sider/common/getCssStyle';

/**
 * 验证注册链接是否存在
 */
export const INTERFACE_CODEEXISTS = '/sider/common/codeExists';

/**
 * 获取注册链接的账号类型
 */
export const INTERFACE_CODETYPE = '/sider/common/codeType';

/**
 * 验证注册链接是否存在
 */
export const INTERFACE_GENERATECODEEXISTS = '/sider/common/generateCodeExists';

/**
 * 前端用户注册简码注册
 */
export const INTERFACE_REGISTERBYCODE = '/sider/common/registerByCode';

/**
 * 验证用户是否存在
 */
export const INTERFACE_CHECKUSERNAMEEXISTS = '/sider/common/checkUserNameExists';

/**
 * 邮箱激活提示
 */
export const INTERFACE_COMACTIVE = '/sider/common/active';

/**
 * 根据用户名获取该用户的密保问题
 */
export const INTERFACE_COMLIST = '/sider/common/protectQuestion/list';

/**
 * 密保答案是否正确
 */
export const INTERFACE_VALIDATEPROTECT = '/sider/common/validateProtect';

/**
 * 单条消息详情
 */
export const INTERFACE_MSGDETAIL = '/sider/message/detail';

/**
 * 下级用户列表
 */
export const INTERFACE_JUNIORLIST = '/sider/message/junior/list';

/**
 * 删除记录
 */
export const INTERFACE_MSGDELETE = '/sider/message/delete';

/**
 *  消息发送
 */
export const INTERFACE_MSGSEND = '/sider/message/send';

/**
 * 是否上下级
 */
export const INTERFACE_ISJUNIOR = '/sider/message/isJunior';

/**
 * 删除记录--多条
 */
export const INTERFACE_DELETEBETCH = '/sider/message/deleteBetch';

/**
 * 获取消息总数
 */
export const INTERFACE_MSGCOUNT = '/sider/message/count';

/**
 * 消息列表,分页传递参数
 */
export const INTERFACE_MSGLIST = '/sider/message/list';

/**
 * 未读条数
 */
export const INTERFACE_UNREADMSGCOUNT = '/sider/message/unReadMsgCount';

/**
 * 登录弹窗公告
 */
export const INTERFACE_ALERT = '/sider/notice/notice/alert';

/**
 * 普通公告
 */
export const INTERFACE_NORLIST = '/sider/notice/normal/list';

/**
 * 中奖信息
 */
export const INTERFACE_WINNING = '/sider/notice/notice/winning';

/**
 * 普通公告 详情
 */
export const INTERFACE_NORDETAIL = '/sider/notice/normal/detail';

/**
 * 获取普通公告总数
 */
export const INTERFACE_NORCOUNT = '/sider/notice/normal/count';

/**
 * 充值前检查用户的合法信息
 */
export const INTERFACE_VALIDATE = '/sider/recharge/validate';

/**
 * 获取在线充值订单列表,
 */
export const INTERFACE_ORDERLIST = '/sider/recharge/online/order/list';

/**
 * 获取商户平台充值限额信息
 */
export const INTERFACE_PLATFORMLIMIT = '/sider/recharge/platform-limit';

/**
 * 根据类型获取线下支付的限额
 */
export const INTERFACE_PLATFORMXXLIMIT = '/sider/recharge/platform-xx-limit';

/**
 * 获取易付宝微信信息
 */
export const INTERFACE_YFBWEIXIN = '/sider/recharge/yfb-weixin';

/**
 * 获取层级限额信息
 */
export const INTERFACE_PLATFORMLAYERLIMIT = '/sider/recharge/platform-layer-limit';

/**
 * 获取线上充值token
 */
export const INTERFACE_GETONLINETOKEN = '/sider/recharge/getOnlineToken';

/**
 * 获取线下充值token
 */
export const INTERFACE_GETOFFLINETOKEN = '/sider/recharge/getOfflineToken';

/**
 * 获取线上充值银行列表
 */
export const INTERFACE_ONLINE = '/sider/recharge/bank/online';

/**
 * 获取线下充值银行列表
 */
export const INTERFACE_OFFLINE = '/sider/recharge/bank/offline';

/**
 *  获取线下充值订单列表
 */
export const INTERFACE_OFFLIST = '/sider/recharge/offline/order/list';

/**
 * 获取跳转到在线充值页面所需信息
 */
export const INTERFACE_ONPAY = '/sider/recharge/online/pay';

/**
 * 保存在线支付订单
 */
export const INTERFACE_RECONLINE = '/sider/recharge/online';

/**
 * 保存线下支付订单
 */
export const INTERFACE_RECOFFLINE = '/sider/recharge/offline';

/**
 * 获取充值订单列表,
 */
export const INTERFACE_RECRECORDLIST = '/sider/recharge/recordList';

/**
 * 某平台余额,
 */
export const INTERFACE_BALANCE = '/sider/third-part/balance';

/**
 * 开通转换权限,
 */
export const INTERFACE_THIRDPARTYREG = '/sider/third-part/third-party-reg';

/**
 * 额度转换,转出/出平台定义,
 */
export const INTERFACE_EXCHAGE = '/sider/third-part/exchage';

/**
 * 判断是否有各平台的转换权限,开通权限,一键收纳权限,
 */
export const INTERFACE_ISPLATFORMAUTH = '/sider/third-part/isPlatformAuth';

/**
 * 转换记录,分页传递参数,
 */
export const INTERFACE_THIRDRECORD = '/sider/third-part/record';

/**
 * 初始化额度转换数据
 */
export const INTERFACE_THIRDINIT = '/sider/third-part/init';

/**
 * 一键收纳,转换所有第三方平台的所有余额到本平台
 */
export const INTERFACE_ALLTHIRDPARTY = '/sider/third-part/all-third-party';

/**
 * 获取所有平台余额
 */
export const INTERFACE_ALLBALANCE = '/sider/third-part/all-balance';

/**
 *  单式投注上传
 */
export const INTERFACE_BETFILE = '/sider/upload/betFile';
