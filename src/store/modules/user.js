import axios from 'axios'
import {readCookie} from '../../helpers/cookiesHelper'

const state = {
    test: 'asdasd',
    activeUser: 'asdasd',
    activeUserToken: 'asdsad',
    userData: {},
}
const getters = {
    activeUser: (state) => state.activeUser,
    activeUserToken: (state) => state.activeUserToken,
    userData: (state) => state.userData
}

const actions = {
    setActiveUserToken({commit}, token){
        commit('SET_ACTIVE_USER_TOKEN', token);
    },
    setActiveUser({commit}, userData){
        const f_name = readCookie('FIRST_NAME')
        const l_name = readCookie('LAST_NAME')
        commit('SET_ACTIVE_USER', {first_name_cookies: f_name, last_name_cookies: l_name, ...userData});
    },
    logout({commit}){
        axios.post('/api/logout', {logout: 'logout'}).then(()=>{
            commit('LOGOUT');
        }).catch(err=>console.log(err));
    },
    getUser({commit}){
        axios.get('/api/users').then(res=>{
            console.log(res);
            commit('SET_ACTIVE_USER', res);
        })
    },
    setUserData({commit}){
        axios.get('/api/users/'+readCookie('X')).then(res=>{
            console.log(res)
            commit('SET_USER_DATA', res.data);
        }).catch(err=>{
            console.log(err);
        })
    }
}

const mutations = {
    SET_ACTIVE_USER(state, payload){
        state.activeUser = payload;
    },
    SET_USER_DATA(state, payload){
        state.userData = payload;
    },
    SET_ACTIVE_USER_TOKEN(state, payload){
        state.activeUserToken = payload;
    },
    LOGOUT(state){
        state.activeUserToken = null
        state.activeUser = {}
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}