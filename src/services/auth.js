import axios from "axios";
baseUrl="https://expense-manager-backend-api.herokuapp.com/auth"; 

class AdminAuthService{
    login=async(data)=>{
        const {username,password} =data;
        let res=await axios({
            method: "post",
            url: baseUrl+"login/",
            headers: {
                "content-type":"application/json;charset=utf-8",
            },
            data:{
                username,password,
            }
        });
        return res.data;
    }

    register=async(data)=>{
        const {first_name,email,username,password} =data;
        let res=await axios({
            method: "post",
            url: baseUrl+"register/",
            headers: {
                "content-type":"application/json;charset=utf-8",
            },
            data:{
                first_name,email,username,password,
            }
        });
        return res.data;
    }

    profile=async(token) => {
        let {data}=await axios({
            method: "get",
            url:baseUrl+"profile/",
            headers: {
                "content-type":"application/json;charset=utf-8",
                Authorization: token,
            },
        });
        return data;
    }; 
}

export default new AdminAuthService();