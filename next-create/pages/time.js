import React, { useState } from 'react'
// import moment from 'moment'
// lazy loading

function Time() {
    const [nowTime, setnowTime] = useState(Date.now())
    const changeTime = async() => {
        const moment = await import('moment') // lazy loading 
        setnowTime(moment.default(Date.now()).format())
    }
    return (
        <>
            <div>显示时间为{nowTime}</div>
            <div>
                <button onClick={changeTime}>
                    改变时间格式
                </button>
            </div>
        </>
    )
}

export default Time