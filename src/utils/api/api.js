import * as axios from 'axios';

export const tokenNames = {
    access_token: 'id14293_access_token',
    refresh_token: 'id14293_refresh_token',
};

// api
const instance = axios.create({
    baseURL: 'http://142.93.134.108:1111/',
});

export const authAPI = {
    me(token) {
        return instance.get('me', { headers: { Authorization: `Bearer ${token}` } });
    },

    refresh(token) {
        return instance.post('refresh', {}, { headers: { Authorization: `Bearer ${token}` } });
    },

    login(email, psw) {
        return instance.post(`login?email=${email}&password=${psw}`);
    },

    sign_in(email, psw) {
        const data = { email, password: psw };
        const headers = { 'Content-Type': 'application/json' };

        return instance.post('sign_up', data, headers);
    },
};

// async functions
export const login = async (email, psw, setIsAuth, setError) => {
    const response = await authAPI.login(email, psw);
    try {
        if (response.status === 200) {
            if (!response.data.body.message && response.data.body.access_token) {
                localStorage.setItem(tokenNames.access_token, response.data.body.access_token);
                localStorage.setItem(tokenNames.refresh_token, response.data.body.refresh_token);
                setIsAuth(true);
            } else if (response.data.body.message === 'user not found') {
                setError('Wrong pass or email.');
            }
        }
    } catch (error) {
        setError('An unknown error has occurred.');
    }
};

export const sign_in = async (email, psw, setIsAuth, setError) => {
    const response = await authAPI.sign_in(email, psw);
    try {
        if (response.status === 200) {
            if (response.data.message) {
                if (response.data.message === 'User was created successfully') {
                    await login(email, psw, setIsAuth, setError);
                }
                if (response.data.message === 'Email already exists') {
                    setError('Account is already exist.');
                }
            }
        }
    } catch (error) {
        setError('An unknown error has occurred.');
    }
};

export const me = async (setIsAuth, setCompleted) => {
    let response;

    const checkByRefresh = async () => {
        const refresh_token = localStorage.getItem(tokenNames.refresh_token);
        if (refresh_token) {
            response = await authAPI.refresh(refresh_token);

            if (response.status === 200 && response.data.body.refresh_token) {
                localStorage.setItem(tokenNames.access_token, response.data.body.access_token);
                localStorage.setItem(tokenNames.refresh_token, response.data.body.refresh_token);

                const access_token = localStorage.getItem(tokenNames.access_token);
                response = await authAPI.me(access_token);
                if (response.status === 200 && response.data.body.message === 'token is valid') {
                    setIsAuth(true);
                    setCompleted(true);
                } else {
                    setIsAuth(false);
                    setCompleted(true);
                }
            } else {
                setIsAuth(false);
                setCompleted(true);
            }
        } else {
            setIsAuth(false);
            setCompleted(true);
        }
    };

    const access_token = localStorage.getItem(tokenNames.access_token);
    if (access_token) {
        response = await authAPI.me(access_token);
        if (response.status === 200 && response.data.body.message === 'token is valid') {
            setIsAuth(true);
            setCompleted(true);
        } else {
            await checkByRefresh();
        }
    } else {
        await checkByRefresh();
    }
};
