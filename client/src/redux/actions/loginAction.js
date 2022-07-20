import ACTIONS from './index'
import axios from 'axios'

export const dispatchLogin = () => {
    return {
        type: ACTIONS.LOGIN
    }
}

export const fetchUser = async (token) => {
    const res = await axios.get('https://eschool-backend-server.herokuapp.com/user/infor', {
        headers: {Authorization: token}
    })
    return res
}

export const dispatchGetUser = (res) => {
    return {
        type: ACTIONS.GET_USER,
        payload: {
            user: res.data,
            isAdmin: res.data.role === 1 ? true : false,
            isProfessor: res.data.role === 2 ? true : false,
            isSecretar: res.data.role === 3 ? true : false,
        }
    }
}
