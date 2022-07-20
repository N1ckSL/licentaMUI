import ACTIONS from './index'

import {instance} from '../../axios/instance'

export const fetchAllUsers = async (token) => {
    const res = await instance.get('/user/all_infor', {
        headers: {Authorization: token}
    })
    return res
}

export const dispatchGetAllUsers = (res) => {
    return {
        type: ACTIONS.GET_ALL_USERS,
        payload: res.data
    }
}

