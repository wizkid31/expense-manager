import axios from "axios";
baseUrl="https://expense-manager-backend-api.herokuapp.com/expense/"; 

class Expenses{
    createExpense=async(data)=>{
        const {title,created,amount} = data;
        let res=await axios({
            method: "post",
            url: baseUrl+"create/",
            headers: {
                "content-type":"application/json;charset=utf-8",
                Authorization: token,
            },
            data:{
                title,created,amount,
            }
        });
        return res.data;
    }

    getExpense=async(id,token)=>{
        //const {first_name,email,username,password} =data;
        let {data}=await axios({
            method: "get",
            url: baseUrl+id+'/',
            headers: {
                "content-type":"application/json;charset=utf-8",
                Authorization: token,
            },
        });
        return data;
    }

    editExpense=async(id,token,data) => {
        const {title,created,amount} =data;
        let res=await axios({
            method: "put",
            url:baseUrl+id+'/',
            headers: {
                "content-type":"application/json;charset=utf-8",
                Authorization: token,
            },
            data:{
                title,created,amount,
            }
        });
        return res.data;
    }; 
    delExpense=async(id,token)=>{
        //const {first_name,email,username,password} =data;
        await axios({
            method: "delete",
            url: baseUrl+id+'/',
            headers: {
                "content-type":"application/json;charset=utf-8",
                Authorization: token,
            },
        });
        return;
    }
    getAllExpense=async(token)=>{
        //const {first_name,email,username,password} =data;
        let data=await axios({
            method: "get",
            url: "https://expense-manager-backend-api.herokuapp.com/expenses/",
            headers: {
                "content-type":"application/json;charset=utf-8",
                Authorization: token,
            },
        });
        return data;
    }
}

export default new Expenses();