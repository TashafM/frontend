import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import './allusers.scss'
import { users } from '../../components/data/data'
import axios from 'axios'

const AllUsers = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/all-users`)
            .then((res) => {
                setData(res?.data)
            })
            .catch(err => console.log(err))
    }, [])


    const deleteUser = (id) => {

        axios.delete(`http://localhost:5000/delete-user/${id}`)
            .then(res => {
                let user = data?.filter(itm => itm?._id !== id)
                setData(user);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='allusers'>
            <div className="title_user">
                All Registered Users
            </div>
            <div className="table_div">
                <Table striped bordered hover size="sm" >
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>User Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((user, id) => (
                                <tr>
                                    <td>{id + 1}</td>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{user?.age}</td>
                                    <td><button onClick={() => deleteUser(user?._id)}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default AllUsers
