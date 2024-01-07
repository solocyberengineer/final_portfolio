import { createStore } from 'vuex';

const store = createStore({
    state:{
        path: null
    },
    getters:{},
    mutations:{
        setpath(state, path){
            state.path = path;
        }
    },
    actions:{
        setPath(context, path){
            context.commit('setpath', path);
        }
    },
    modules:{}
});

export default store