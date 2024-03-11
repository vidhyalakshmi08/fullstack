import axios from "axios";
const instance =axios.create();

//used to pass the req to interceptor
instance.interceptors.request.use((config)=>{
    const token=sessionStorage.getItem("token");
    if(token)
    {
        config.headers.Authorization=`Bearer ${token}`;
        return config;
    }
},(error)=>{
        return Promise.reject(error);
})
export default instance;