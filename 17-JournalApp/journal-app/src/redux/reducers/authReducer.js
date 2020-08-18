import { types } from "../types/types";

/*
    {
        uid: jkhgvkjcfhgdkjf,
        name: 'Emmanuel'
    }
*/

export const authReducer = (state = {}, action) => {

    // console.log(state, action);
    // console.log({state});

    switch (action.type) {

        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case types.logout:
            return {}

        default:
            return state;

    }

};