class AuthService {
    /**
     * @return {Promise.<{token: string, username: string, role: string}>}
     */

    login() {
        let credentials = {
            token   : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
            username: 'DinhCeo',
            role    : 'admin'
        };
        return Promise.resolve(credentials);
    }
}

export default AuthService;