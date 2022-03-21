import axios from 'axios'
import {readCookie} from '../../helpers/cookiesHelper'

const state = {
    test: 'asdasd',
    activeUser: 'asdasd',
    activeUserToken: 'asdsad'
}
const getters = {
    activeUser: (state) => state.activeUser,
    activeUserToken: (state) => state.activeUserToken
}

const actions = {
    setActiveUserToken({commit}, token){
        commit('SET_ACTIVE_USER_TOKEN', token);
    },
    setActiveUser({commit}){
        const f_name = readCookie('FIRST_NAME')
        const l_name = readCookie('LAST_NAME')
        commit('SET_ACTIVE_USER', {first_name: f_name, last_name: l_name});
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
    }
}

const mutations = {
    SET_ACTIVE_USER(state, payload){
        state.activeUser = payload;
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