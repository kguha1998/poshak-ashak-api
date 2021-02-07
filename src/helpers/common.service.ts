import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService { 
    getCode() {
        return Math.floor(1000 + Math.random() * 9000).toString();
    }
}
