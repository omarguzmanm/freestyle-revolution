import axios from 'axios';
import router from '@/router';
import { defineStore } from 'pinia'
import { User } from '@/interfaces/User';
import { ResponseLogin } from '@/interfaces/auth/ResponseLogin';
import { UserCredentials, UserRegister } from '@/types/auth/User';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authUser: null as User | null,
        authToken: '' as string,
        returlUrl: '' as string,
    }),
    getters: {
        user: (state) => state.authUser,
        token: (state) => state.authToken,
    },
    actions: {
        async getToken(): Promise<void> {
            await axios.get('/sanctum/csrf-cookie');
        },
        async login(form: UserCredentials): Promise<void> {
            await this.getToken();
            await axios.post('/api/auth/login', form)
                .then(response => {
                    this.authUser = (response.data as ResponseLogin).user;
                    this.authToken = (response.data as ResponseLogin).token;

                    router.push({ name: 'index' });
                }).catch(error => {
                    console.error(error);
                });
        },
        async register(form: UserRegister): Promise<void> {
            
            await this.getToken();
            await axios.post('api/auth/register', form)
                .then(response => {
                    console.log('User registered');          
                }).catch(error => {
                    console.error(error);
                });
        },
    }
});
