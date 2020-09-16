import {combineReducers} from 'redux';
import menu from "./menu";
import categories from "./categories";
import contact from  "./contact";

export default combineReducers({
    menu,
    categories,
    contact
})