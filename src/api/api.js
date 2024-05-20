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

    follow(id) {
        return instance.delete(`follow/${id}`)
    },

    unfollow(id) {
        return instance.post(`follow/${id}`, {})
    },

    getProfile(userId) {
        return profileAPI.getProfile(userId);
    },

}

export const authAPI = {

    getAuht() {
        return instance.get(`auth/me`)
    },

    login(email, password, rememberMe = false) {
        // return instance.post(`/auth/login`, { email, password, rememberMe })
        return instance.post(`/auth/login`, { email, password })
    },

    logout() {
        return instance.delete(`/auth/login`)
    }
}

export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },

    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },

    updateStatus(status) {
        return instance.put(`/profile/status/`, { status: status })
    },

    savePhoto(photos) {
        // debugger;
        const formData = new FormData();
        // debugger;
        formData.append("image", photos)
        return instance.put(`/profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    saveProfile(profile) {
        return instance.put(`/profile`, profile)
    }
}
