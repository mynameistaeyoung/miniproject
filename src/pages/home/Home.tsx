import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <Link to="/login">로그인</Link>
        </div>
    )
}

export default Home