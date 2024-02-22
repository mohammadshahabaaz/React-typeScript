import { map } from "lodash";
import { useEffect } from "react";
import { useUserContext } from "../context/UserContextProvider";
import { fetchUserDetails } from '../reducer/UserDetailsReducers';
import {Header} from '../Components/Header'


// export function UseContextProvider() {
//     const { userInfo: { user }, dispatch } = useUserContext();

//     console.log('user', user);

//     useEffect(() => {
//         fetchUserDetails(dispatch);
//     }, [dispatch])

//     return (
//         <div>
//             <Header/>
//             user Details:
//             {map(user, (u, index) => <div key={index}>{u?.first_name} {' '} {u?.last_name}</div>)}
//         </div>
//     )
// };

export function UseContextProvider() {
    const { userInfo: { user, isUserLogin }, dispatch } = useUserContext();

    useEffect(() => {
        if (isUserLogin) {
            fetchUserDetails(dispatch);
        }
    }, [dispatch, isUserLogin]);

    return (
        <div>
            <Header />
            {isUserLogin ? (
                <div>
                    User Details:
                    {user.map((u, index) => (
                        <div key={index}>{u?.first_name} {' '} {u?.last_name}</div>
                    ))}
                </div>
            ) : (
                <div>Guest login: Sign Up</div>
            )}
        </div>
    );
};