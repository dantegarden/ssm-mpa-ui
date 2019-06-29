import { getCookies, setCookies, removeCookies } from '@/utils/cookies'
import { getStore, setStore, removeStore } from '@/utils/storage'
import _CONST from '@/utils/globalConfig'
import login_store from '@/modules/login/store'

export default {
  //除login和404页面外所有页面都应在加载完成前调用此方法
  //若没有得到用户信息或token，则打回到登陆页面
  checkUserLogin(){
    let userInfo = getStore(_CONST.USER_INFO)
    let token = getCookies(_CONST.TOKEN)
    if(!(userInfo && token)){
      login_store.dispatch("FedLogOut")
    }
  },
  checkUserPermission(){
    //TODO
    //从userInfo里获取权限信息，判断该页面的vue路由所指向的组件是否可以访问
    //若不可访问，打回到401页面
  }
}
