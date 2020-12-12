import { ADD_SEASON, MARK_COMPLETE, REMOVE_SEASON } from "../action/action.types";

const initialState=[]

export default (state=initialState,action)=>{
    switch (action.type) {
        case ADD_SEASON:
            return [...state,action.payload]
        case REMOVE_SEASON:
            return state.filter((eachSeason)=>eachSeason.id!==action.payload)
        case MARK_COMPLETE:
            return state.map((eachSeason)=>{
                if(eachSeason.id==action.payload)
                {
                    eachSeason.isWatched=!eachSeason.isWatched
                }
                return eachSeason
            })
        default:
            return state
    }

}