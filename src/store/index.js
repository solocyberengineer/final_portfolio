import { createStore } from 'vuex';

const url = 'https://solocyberengineer.github.io/portfolioData/data/';

const store = createStore({
    state:{
        path: null,
        light: false,
        scroll_disabled: false,
        homeData: {},
        aboutData: {},
        projectsData: {},
        testimonialsData: {},
        contactData: {},
        resumeData: {},
    },
    getters:{},
    mutations:{
        setpath(state, path){
            state.path = path;
        },
        settextcolor(state, light){
            state.light = light;
        },
        setHomeData(state, data){
            state.homeData = data;
        },
        setAboutData(state, data){
            state.aboutData = data;
        },
        setProjectsData(state, data){
            state.projectsData = data;
        },
        setTestermonialsData(state, data){
            state.testimonialsData = data;
        },
        setContactData(state, data){
            state.contactData = data;
        },
        setResumeData(state, data){
            state.resumeData = data;
        }
    },
    actions:{
        setPath(context, path){
            context.commit('setpath', path);
        },
        setTextColor(context, light){
            context.commit('settextcolor', light);
        },
        async getData(context){
            try {
                let data = await fetch(url);
                console.log(data)
                let {
                    home,
                    about,
                    projects,
                    testimonials,
                    resume,
                    contact
                } = await data.json();
                console.log(home)
                console.log(context)
                context.commit('setHomeData', home);
                context.commit('setContactData', contact);
                context.commit('setAboutData', about);
                context.commit('setProjectsData', projects);
                context.commit('setTestermonialsData', testimonials);
                context.commit('setResumeData', resume);
            } catch(e){
                alert('failed to get data');
            }
        }
    },
    modules:{}
});

export default store