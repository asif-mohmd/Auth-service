import { IAuthController } from "../interface/IAuthController";
import jwt from 'jsonwebtoken';


export class AuthController implements IAuthController{

    isAuthenticated : any = async(call:any,callback:any)=>{

        try{
            console.log(call.request,"----------=--=-=-=-=-=-=-")
            const userData = call.request.token || ""
            console.log(userData,"authhhhhhh")
            const decoded: any = jwt.verify(userData, process.env.JWT_SECRET || "");
            console.log(decoded,"===============")
            if(!decoded){
                console.log(";;;lllllllllllll")
                callback(null,{status:false})
            }else{
                console.log("yeeeeee")
                callback(null,{status:true})
            }
           
        }catch(e: any){
            callback(e, null)
        }
    }

}