import React from 'react'
import './topbar.scss'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="branding">
                User Management
            </div>
            <div className="menus">
                <ul>
                    <Link to={'/'}>Create User</Link>
                    <Link to={'/all-users'}>All Users</Link>
                </ul>
            </div>
        </div>
    )
}

export default Topbar
