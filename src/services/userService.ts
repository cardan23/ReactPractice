import apiClient from './ApiClient';
import UserData from '../interfaces/UserData';

class UserService{
    getAllUsers(){

        const controller = new AbortController();
        const request = apiClient
            .get("/users")

        return {request, cancel : () => controller.abort()};
    }

    deleteUser(id : number){
        return apiClient.delete("/users/" + id);
    }

    AddUser(user : UserData){
        return apiClient
        .post("/users", user);
    }

    UpdateUser(user: UserData){

        return apiClient.patch("/users/" + user.id, user)
    }
}

export default new UserService();