import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "./types";

const initialState={
    users:null,
    errors:null,
    loading:false,
    token:null
}
const reducer =(state=initialState,{type,payload})=>{
    switch (type) {
        case REGISTER:
            case LOGIN:
            return{...state,loading:true}
        case REGISTER_SUCCESS:
            return{...state,loading:false,users:payload}
        case REGISTER_FAIL:
            return{...state,loading:false,errors:payload}
        case LOGIN_SUCCESS:
            return{...state,loading:false,token:payload}
        case LOGIN_FAIL:        
         return{...state,loading:false,errors:payload}
    
        default:
            return state;
    }
}
export default reducer 