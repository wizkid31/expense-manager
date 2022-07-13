import axios from "axios";
baseUrl="https://expense-manager-backend-api.herokuapp.com/saving/"; 

class Savings{
    createSaving=async(data)=>{
        const {title,created,amount} = data;
        let res=await axios({
            method: "post",
            url: baseUrl+"create/",
            headers: {
                "content-type":"application/json;charset=utf-8",
                "Authorization": "Token "+token,
            },
            data:{
                title,created,amount,
            }
        });
        return res.data;
    }

    getSaving=async(id,token)=>{
        //const {first_name,email,username,password} =data;
        let {data}=await axios({
            method: "get",
            url: baseUrl+id+'/',
            headers: {
                "content-type":"application/json;charset=utf-8",
                "Authorization": "Token "+token,
            },
        });
        return data;
    }

    editSaving=async(id,token,data) => {
        const {title,created,amount} =data;
        let res=await axios({
            method: "put",
            url:baseUrl+id+'/',
            headers: {
                "content-type":"application/json;charset=utf-8",
                "Authorization": "Token "+token,
            },
            data:{
                title,created,amount,
            }
        });
        return res.data;
    }; 
    delSaving=async(id,token)=>{
        //const {first_name,email,username,password} =data;
        await axios({
            method: "delete",
            url: baseUrl+id+'/',
            headers: {
                "content-type":"application/json;charset=utf-8",
                "Authorization": "Token "+token,
            },
        });
        return;
    }
    getAllSavings=async(token)=>{
        //const {first_name,email,username,password} =data;
        let data=await axios({
            method: "get",
            url: "https://expense-manager-backend-api.herokuapp.com/savings/",
            headers: {
                "content-type":"application/json;charset=utf-8",
                "Authorization": "Token "+token,
            },
        });
        return data;
    }
}

export default new Savings();