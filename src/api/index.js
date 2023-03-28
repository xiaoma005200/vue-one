//导入刚才写好的axios二次封装的requests
import requests from "./axios";
//三级联动接口

//发请求：axios发请求返回结果promise对象

export const Login = async(data) => {
    console.log(data)
    return await requests({
        url:'http://localhost:8081/login',
        method:"post",
        data:data
    })
}

