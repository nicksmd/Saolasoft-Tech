/**
 * Created by quangh on 9/25/2017.
 */
import { combineReducers } from 'redux';
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from './actions'

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state=SHOW_ALL, action){
    switch (action){
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state
    }
}

let initState = [
    {
        id: 0,
        text: "task 1",
        completed: false
    },
    {
        id: 1,
        text: "task 2",
        completed: false
    },
    {
        id: 2,
        text: "task 3",
        completed: false
    }
];

function todos(state = initState, action){
    switch (action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    id: state.length,
                    text: action.text,
                    completed: false
                }
            ];

        case TOGGLE_TODO:
            return state.map((todo, index)=>{
                if (index === action.index){
                    return Object.assign({}, todo,{
                        completed: !todo.completed
                    })
                }
                return todo
            });
        default:
            return state
    }
}

const allReducers  = combineReducers({
    visibilityFilter,
    todos
});

export default allReducers
