/**
 * Created by quangh on 9/18/2017.
 */
export const selectUser = (user)=>{
    console.log('clicked '+ user.name);
    return {
        type: "USER_SELECTED",
        payload: user
    }
};

