import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b18f6605-dd13-4632-8e4c-c90af1ba115e"
    }
})


export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },

    getAuht() {
        return instance.get(`auth/me`)
    },

    getFollow(id) {
        return instance.delete(`follow/${id}`)
    },

    getUnfollow(id) {
        return instance.post(`follow/${id}`, {})
    }

}
