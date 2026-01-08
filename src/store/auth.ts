import { defineStore } from 'pinia'
import {ref, computed} from 'vue'
import {useRouter} from 'vue-router'


type Role = 'ADMIN' | 'MANAGER' | 'VIEWER'

interface User {
    id: string;
    name: string;
    email: string;
    role: Role;
}

const MockUser: User =[
 {
    id: '1',
    name: 'user admin',
    email: 'admin@demo.com',
    role: 'ADMIN'
},{
    id: '2',
    name: 'user manager',
    email: 'manager@demo.com',
    role: 'MANAGER'
},{
    id: '3',
    name: 'user viewer',
    email: 'viewer@demo.com',
    role: 'VIEWER'
}]

export const useAuthStore = defineStore('auth', ()=>{
    const user = ref<User|null>(null)
     const isAuthenticated = computed(()=> !!user.value)

     function login (email:string, password:string){
        const found = MockUser.find(
            u => u.email === email && u.email === password
        )
        if(!found){
            throw new Error
        }
     }
})