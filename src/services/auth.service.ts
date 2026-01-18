import api from './api';

export const AuthService = {
  login: (data: { email: string; password: string }) => {
    return api.post('/login', data)
  },
  
  register: (data:{
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }) => {
    return api.post('/register', data)
  },
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
  get user(){
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
  isAuthenticated(){
    return !!localStorage.getItem('token');
  }
}
