import React, { Component } from 'react';
import { fetchMyUser, updateStatus, updatePlace } from '../../api/users';
import { AuthContext } from '../../helpers/Auth';
import Home from '../home/Home';

function withUserBackend() {

    class WithBackend extends Component {
        static contextType = AuthContext;
        //Workaround for bug: Warning: Can't perform a React state update on an unmounted component.  
        //https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component#answer-56537704
        _isMounted = false;

        constructor(props) {
            super(props);
            this.state = { isFetching: true, data: [], error: null };
        }

        async componentDidMount() {
            //Workaround for bug: Warning: Can't perform a React state update on an unmounted component.  
            //https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component#answer-56537704
            this._isMounted = true;
            const headers = this.context.generateHeaders();
            const res = await fetchMyUser(headers);
            if (res.error) {
                this._isMounted && this.setState({ error: res.error });
            }
            else {
                this._isMounted && this.setState({ data: res.data, isFetching: false, error: null });
            }
        }

        //Workaround for bug: Warning: Can't perform a React state update on an unmounted component.  
        //https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component#answer-56537704
        componentWillUnmount() {
            this._isMounted = false;
        }

        updateUserPlace = async (onCampus) => {
            const place = onCampus ? 'on-campus' : 'home-office';
            const headers = this.context.generateHeaders();
            const res = await updatePlace(headers, place);
            if (res.error) {
                this.setState({ error: res.error });
            }
            else {
                this.setState((state) => {
                    return {
                        data: {
                            ...state.data,
                            place
                        },
                    }
                });
            }
        }

        updateUserStatus = async (available) => {
            const status = available ? 'available' : 'busy';
            const headers = this.context.generateHeaders();
            const res = await updateStatus(headers, status);
            if (res.error) {
                this.setState({ error: res.error });
            }
            else {
                this.setState((state) => {
                    return {
                        data: {
                            ...state.data,
                            status
                        },
                        error: null
                    }
                });
            }
        }

        render() {
            if (this.state.error) {
                return (
                    <p style={{ color: 'red', fontSize: '0.8em', fontStyle: 'italic' }}>
                        this.state.error;
                    </p>
                )
            }

            if (this.state.isFetching) {
                return (
                    <p style={{ color: 'green' }}>
                        Loading...
                    </p>
                )
            }

            return (
                <Home user={this.state.data} onChangePlace={this.updateUserPlace} onChangeStatus={this.updateUserStatus} />
            )
        }
    }

    return WithBackend;
}

export default withUserBackend;