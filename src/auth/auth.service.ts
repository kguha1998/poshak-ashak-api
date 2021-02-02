import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService { 
    googleLogin(req) {
        console.log(req);
    }
}
