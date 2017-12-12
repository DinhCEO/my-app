import React from 'react';
import {UserInfoService} from './../service';

class UserComponent extends React.Component {
    constructor(props) {
        super(props);
        this.userInfoService = UserInfoService;
        this.state           = {}
    }

    render() {
        return (
            <h3>hello: {this.userInfoService.getUserInfo()}</h3>
        )
    }
}

export default UserComponent;