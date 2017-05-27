/**
 * 公共头部api
 */
const _publicHead = [
  {"id": 1, "name": "首页", "link":"index","active":false},
  {"id": 2, "name": "视讯", "link":"vidoinfo","active":false},
  {"id": 3, "name": "小游戏", "link":"smallgames","gameId":3,"groupId":1,"gameName":"重庆时时彩","active":false},
  {"id": 4, "name": "KG游戏", "link":"kggames","active":false},
  {"id": 5, "name": "体育游戏", "link":"sportgames","active":false},
  {"id": 6, "name": "游戏娱乐", "link":"gamesenter","active":false},
  {"id": 7, "name": "电子游戏", "link":"elctrogames","active":false}
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_publicHead), 100)
  }
}
