import React, { Component } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faLifeRing, faSmile } from "@fortawesome/free-solid-svg-icons";

import '../style/userForm.css'

export default class UserForm extends Component {

    state = {
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        daysAdded: []
    }

    constructor(props) {
        super(props)
    }

    handleSaveUser = () => {
        if (this.validateFormData()) {
            axios.post('http://localhost:8080/api/user', this.getFormData())
                .then(res => {
                    this.props.handleRefresh()
                    this.handleClearFormData()
                });
        }
    }

    getFormData = () => {
        var rideInGroup = {
            always: document.getElementById('checkAlways').checked,
            sometimes: document.getElementById('checkSometimes').checked,
            never: document.getElementById('checkNever').checked
        }

        var data = {
            username: this.refs.username.value,
            city: this.refs.city.value,
            name: this.refs.name.value,
            email: this.refs.email.value,
            rideInGroup,
            dayOfWeek: this.state.daysAdded
        }

        return data
    }

    validateFormData = () => {
        var isValid = true

        if (!this.refs.username.value) {
            var element = document.getElementById("username")
            element.classList.add("is-invalid")
            isValid = false
        } else {
            var element = document.getElementById("username")
            element.classList.remove("is-invalid")
        }

        if (!this.refs.city.value) {
            var element = document.getElementById("city")
            element.classList.add("is-invalid")
            isValid = false
        } else {
            var element = document.getElementById("city")
            element.classList.remove("is-invalid")
        }


        if (!this.refs.name.value) {
            var element = document.getElementById("name")
            element.classList.add("is-invalid")
            isValid = false
        } else {
            var element = document.getElementById("name")
            element.classList.remove("is-invalid")
        }

        if (!this.refs.email.value) {
            var element = document.getElementById("email")
            element.classList.add("is-invalid")
            isValid = false
        } else {
            var element = document.getElementById("email")
            element.classList.remove("is-invalid")
        }

        if (!document.getElementById('checkAlways').checked
            && !document.getElementById('checkSometimes').checked
            && !document.getElementById('checkNever').checked) {

            var element = document.getElementById("checkAlways")
            element.classList.add("is-invalid")

            element = document.getElementById("checkSometimes")
            element.classList.add("is-invalid")

            element = document.getElementById("checkNever")
            element.classList.add("is-invalid")

            isValid = false
        } else {
            var element = document.getElementById("checkAlways")
            element.classList.remove("is-invalid")

            element = document.getElementById("checkSometimes")
            element.classList.remove("is-invalid")

            element = document.getElementById("checkNever")
            element.classList.remove("is-invalid")
        }

        if (this.state.daysAdded.length == 0) {
            this.state.days.forEach(day => {
                var element = document.getElementById(`day-${day}`)
                element.classList.add("is-invalid")
            })
            isValid = false
        } else {
            this.state.days.forEach(day => {
                var element = document.getElementById(`day-${day}`)
                element.classList.remove("is-invalid")
            })
        }

        return isValid
    }

    handleClearFormData = () => {
        document.getElementById("userForm").reset()
    }

    handleAddDay = (day) => {
        var daysAdded = this.state.daysAdded

        if (!document.getElementById(`day-${day}`).checked) {
            daysAdded = daysAdded.filter(d => d !== day)
        } else {
            daysAdded.push(day)
        }

        this.setState({ daysAdded })
    }

    render() {
        return (
            <div className="form-user">

                <div className="row">
                    <div className="col-md-2">
                        <h3>Registration</h3>
                    </div>
                    <div className="col-md-10">
                        <hr className="separator" />
                    </div>
                </div>

                <div className="container description-form-user">
                    <div className="row">
                        <div className="col-md-4">
                            <h3 className="text-description">Need Help?</h3><br />
                            <div className="row">
                                <div className="col-md-2">
                                    <FontAwesomeIcon icon={faLifeRing} color="#1abc9c"
                                        size="3x" />
                                </div>
                                <div className="col-md-10">
                                    <span>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum tincidunt nulla, quis eleifend orci malesuada et.'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <h3 className="text-description">Why register?</h3><br />
                            <div className="row">
                                <div className="col-md-2">
                                    <FontAwesomeIcon icon={faHeartbeat} color="#1abc9c"
                                        size="3x" />
                                </div>
                                <div className="col-md-10">
                                    <span>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum tincidunt nulla, quis eleifend orci malesuada et.'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <h3 className="text-description">What people are saying?</h3><br />
                            <div className="row">
                                <div className="col-md-2">
                                    <FontAwesomeIcon icon={faSmile} color="#1abc9c"
                                        size="3x" />
                                </div>
                                <div className="col-md-10">
                                    <span>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum tincidunt nulla, quis eleifend orci malesuada et.'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container"><hr /></div>

                <div className="container col-md-10">
                    <form id='userForm'>
                        <div className="row">
                            <div className="col">
                                <div className="form-group input-separator">
                                    <label for="username">Username</label>
                                    <input type="username" className=":valid form-control input-form-user" id="username" ref="username" aria-describedby="usernameHelp" />
                                    <small id="usernameHelp" className="form-text text-muted">Instructions to show on input focus</small>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group input-separator">
                                    <label for="city">City</label>
                                    <input type="city" className="form-control input-form-user" id="city" ref="city" aria-describedby="cityHelp" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="form-group input-separator">
                                    <label for="name">Name</label>
                                    <input type="name" className="form-control input-form-user" id="name" ref="name" aria-describedby="nameHelp" />
                                    <small id="nameHelp" className="form-text text-muted">Instructions to show on input focus</small>
                                </div>
                            </div>
                            <div className="col">
                                <h6 for="rideInGroup">Ride in group?</h6>
                                <div className="checkbox-form-user">
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="checkAlways" name="radioRadioInGroup" className="custom-control-input" />
                                        <label className="custom-control-label" for="checkAlways">Always</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="checkSometimes" name="radioRadioInGroup" className="custom-control-input" />
                                        <label className="custom-control-label" for="checkSometimes">Sometimes</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="checkNever" name="radioRadioInGroup" className="custom-control-input" />
                                        <label className="custom-control-label" for="checkNever">Never</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="form-group input-separator">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control input-form-user" id="email" ref="email" aria-describedby="emailHelp" />
                                    <small id="emailHelp" className="form-text text-muted">Instructions to show on input focus</small>
                                </div>
                            </div>
                            <div className="col">
                                <h6 for="rideInGroup">Days of the week</h6>
                                <div className="checkbox-form-user">

                                    {this.state.days.map(day => {
                                        return (<div key={`day-${day}`} className="custom-control custom-checkbox custom-control-inline">
                                            <input type="checkbox" value={day} onClick={() => this.handleAddDay(day)} id={`day-${day}`} className="custom-control-input" name={`day-${day}`} />
                                            <label className="custom-control-label" for={`day-${day}`}>{day}</label>
                                        </div>)
                                    })}

                                </div>
                            </div>
                        </div>

                        <button type="button" onClick={() => this.handleSaveUser()} className="btn btn-save-styled mx-2 my-5">Save</button>
                        <button type="reset" className="btn btn-cancel-styled mx-2 my-5">Discard</button>
                    </form>
                </div>
            </div>
        )
    }
}
