import React, {useState} from 'react'

import {isEmail} from '../../utils/validation/Validation'
import {showErrMsg, showSuccessMsg} from '../../utils/notifications/Notifications'

import {instance} from '../../../axios/instance'

const initialState = {
    email: '',
    err: '',
    success: ''
}

function ForgotPassword() {
    const [data, setData] = useState(initialState)
    const {email, err, success} = data

    const handleChangeInput = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err: '', success: ''})
    }
    const forgotPassword = async () => {
        if(!isEmail(email))
            return setData({...data, err: 'Invalid emails.', success: ''})
            
        try {
            const res = await instance.post('/user/forgot', {email})

            return setData({...data, err: '', success: res.data.msg})
        } catch (err) {
            err.response.data.msg && setData({...data, err:  err.response.data.msg, success: ''})
        }
    }
    return (
        <div className="forgot">
            <h2>Va-ți uitat parola?</h2>

            <div className="row">
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
                <label htmlFor="email">Introduceți adresa email</label>
                <input type="email" name="email" id="email" value={email}
                onChange={handleChangeInput} />
                <button onClick={forgotPassword}>Verifică</button>
            </div>
        </div>
    )
}

export default ForgotPassword