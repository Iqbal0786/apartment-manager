import axios from "axios";

export const FETCH_SUCCESS="FETCH_SUCCESS";
export const FETCH_ERROR="FETCH_ERROR";
export const FETCH_LOADING="FETCH_LOADING";
export const fetch_success=(payload)=>({type:FETCH_SUCCESS,payload});
export const fetch_error=()=>({type:FETCH_ERROR});
export const fetch_loading=()=>({type:FETCH_LOADING});

export const fetchMainData=()=>(dispatch)=>{
      dispatch(fetch_loading())
      axios.get("https://apartment-manager-new.herokuapp.com/flats").then((res)=>{
        alert('logged in successfully')
        dispatch(fetch_success(res.data))
    }).catch((err)=>{
        console.log(err.message)
        dispatch(fetch_error())
    })

}
