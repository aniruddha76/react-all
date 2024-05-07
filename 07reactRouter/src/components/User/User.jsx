import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
    return (
        <div className='text-white text-3xl p-4 bg-slate-600'>User: {userid}</div>
    )
}

export default User
