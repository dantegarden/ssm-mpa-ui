import Vue from 'vue'
import Vuex from 'vuex'

import dict from './modules/dict'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
      dict
    },
})

export default store
