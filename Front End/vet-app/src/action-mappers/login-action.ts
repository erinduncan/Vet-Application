import { userLogin } from "../utilites/api";

export const loginTypes = {
    SUCCESSFULL_LOGIN: 'SUCCESSFULLY_LOGGED_IN',
    FAILED_LOGIN: 'FAILED_TO_LOGIN'
}

export const login = (email:string, password:string) => (dispatch:any) => {
    let allUsers;
    userLogin().then((users:any) => {
        
        allUsers = users.data;
        let currentUser;
        allUsers.forEach((user:any) => {
            if(user.email === email && user.password === password){
                currentUser = user;
                console.log(currentUser);
                
                dispatch({
                    type: loginTypes.SUCCESSFULL_LOGIN,
                    payload: {
                        user: currentUser
                    }
                })
            } else {
                dispatch ({
                    type: loginTypes.FAILED_LOGIN,
                    payload: {
                        loginMessage: 'Email or password mismatch. Try again!'
                    }
                })
            }
        });
    }).catch((e:any) => {
        console.log(e);
        dispatch({
            type: loginTypes.FAILED_LOGIN,
            payload: {
                loginMessage: 'Sorry, failed to retrieve data. Try again later'
            }
        })
        
    })
}