import { FETCH_ERROR, FETCH_LOADING, FETCH_SUCCESS } from "./MainAction"


 const initialState={
     data:[],
     loading:false,
     error:false
 }
 export const MainReducer=(store=initialState,{type,payload})=>{
          switch(type){
              case FETCH_LOADING : return {...store,loading:true}
              case FETCH_ERROR : return {...store,loading:false,error:true}
              case FETCH_SUCCESS: return {...store,data:payload}
               default:return store;

          }
}