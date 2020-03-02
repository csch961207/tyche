import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from 'src/app/services/rest.service';
import { Rest } from 'src/app/models/rest';
import { UserDto } from '../models/user.model';


@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private rest: RestService) { }
    login(user: UserDto): Observable<UserDto> {
        const request: Rest.Request<UserDto> = {
            method: 'POST',
            url: `/user/logoin`,
            body: user
        };
        return this.rest.request<UserDto, UserDto>(request);
    }
}
