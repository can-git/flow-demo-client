export class LoginResponse {
    idToken:string;
    tokenType:string;
    roles:string[];
    constructor(idToken:string, tokenType:string, roles:string[]){
        this.idToken = idToken;
        this.tokenType = tokenType;
        this.roles = roles;
    }
}
