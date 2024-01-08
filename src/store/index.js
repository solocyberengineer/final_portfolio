import { createStore } from 'vuex';

const store = createStore({
    state:{
        path: null,
        light: false
    },
    getters:{},
    mutations:{
        setpath(state, path){
            state.path = path;
        },
        settextcolor(state, light){
            state.light = light;
        }
    },
    actions:{
        setPath(context, path){
            context.commit('setpath', path);
        },
        setTextColor(context, light){
            context.commit('settextcolor', light);
        }
    },
    modules:{}
});

export default store