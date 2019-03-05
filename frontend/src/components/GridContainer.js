import React, { Component } from 'react'
import UserForm from './UserForm'
import axios from 'axios'
import { Modal, Button } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";


import '../style/gridContainer.css'

export default class GridContainer extends Component {

    state = {
        users: [],
        showModal: false,
        userId: null
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/user/1/user').then(res => {
            const users = res.data;
            this.setState({ users })
        })
    }

    handleHoverTrash = (isHover, idTrash) => {
        if (isHover) {
            document.getElementById(idTrash).style.display = "block"
            return
        }

        document.getElementById(idTrash).style.display = "none"
    }

    handleCloseModal = () => {
        this.setState({ showModal: false, userId: null })
    }

    handleOpenModal = (id) => {
        this.setState({ showModal: true, userId: id })
    }

    handleRemoveUser = () => {
        axios.delete(`http://localhost:8080/api/user/${this.state.userId}`).then(res => {
            if (res.data.success) {
               this.handleRefreshTable()
            }
        })
    }

    handleRefreshTable = () => {
        axios.get('http://localhost:8080/api/user/1/user').then(res => {
            const users = res.data;
            this.setState({ users, showModal: false, userId: null })
        })
    }

    handleSearch = (e) => {
        if (e.target.value.trim().length > 0) {
            axios.get(`http://localhost:8080/api/user/${e.target.value}`).then(res => {
                const users = res.data;
                this.setState({ users })
            })
        } else {
            this.handleRefreshTable()
        }
    }

    render() {
        return (
            <div className="col-md-12 container-grid">
                <div className="row">
                    <div className="col-md-1">
                        <h3>Users</h3>
                    </div>
                    <div className="col-md-7">
                        <hr className="separator" />
                    </div>

                    <div className="input-group mb-2 col-md-4">
                        <div className="input-group-prepend ">
                            <div className="input-group-text bg-white border-right-0">
                                <FontAwesomeIcon icon={faSearch} size="sm" />
                            </div>
                        </div>
                        <input type="text" onChange={(e) => this.handleSearch(e)} className="form-control" placeholder="Filter table content" />
                    </div>
                </div>

                <div className="container table-users">
                    <div className="table-users table-content col-md-12">
                        <table className="table table-borderless table-striped table-hover table-responsive">
                            <thead className="fixedHeader">
                                <tr>
                                    <th scope="col">Username</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">E-mail</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Ride in Group</th>
                                    <th scope="col">Day of the week</th>
                                    <th scope="col">Posts</th>
                                    <th scope="col">Albums</th>
                                    <th scope="col">Photos</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.users.map(user => {
                                    let keysRideInGroup = Object.keys(user.rideInGroup);
                                    let idTrash = `${user._id}-trash`

                                    var daysOfWeek = user.dayOfWeek.includes('Sat')
                                        && user.dayOfWeek.includes('Sun')
                                        && user.dayOfWeek.length === 2 ? 'Weekends' : user.dayOfWeek.join(',')

                                    daysOfWeek = user.dayOfWeek.length === 7 ? 'Everyday' : daysOfWeek

                                    return (<tr onMouseEnter={() => this.handleHoverTrash(true, idTrash)}
                                        onMouseLeave={() => this.handleHoverTrash(false, idTrash)} key={user._id}>
                                        <td>{user.username}</td>
                                        <td>{user.name}</td>
                                        <td className="sinalize-label">{user.email}</td>
                                        <td className="sinalize-label">{user.city}</td>
                                        <td>{keysRideInGroup.filter(item => user.rideInGroup[item])}</td>
                                        <td>{daysOfWeek}</td>
                                        <td className="sinalize-label">{user.post}</td>
                                        <td className="sinalize-label">{user.album}</td>
                                        <td>{user.photo}</td>
                                        <td>
                                            <FontAwesomeIcon icon={faTrash} size="1x" id={idTrash} onClick={() => this.handleOpenModal(user._id)}
                                                style={{ display: 'none', cursor: 'pointer' }} />
                                        </td>
                                    </tr>)
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Remove user</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Dou you really want remove this user?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleRemoveUser}>
                            Remove
                          </Button>
                    </Modal.Footer>
                </Modal>

                <UserForm handleRefresh={() => this.handleRefreshTable()} />
            </div>

        )
    }
}