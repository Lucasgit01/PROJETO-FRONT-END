import type { Auth } from "../../@types/Auth";
import { LogonsData } from "../mocks/logons";

export class ControllerLogin {
    constructor (
        private readonly email: string,
        private readonly password: string,
    ) {}

    public async read(): Promise<Auth> {
        try {
            const user = LogonsData.find(f => f.email === this.email);
            
            if (!user) {
                throw {
                    status: 404,
                    message: "Nenhum usuário encontrado!"
                }
            };

            if (user.password !== this.password) {
                throw {
                    status: 401,
                    message: "Senha não confere!"
                }
            }

            return {
                name: user.name,
                role: user.role,
                permissions: user.permissions,
                avatar: user.avatar
            };
        } catch (error) {
            throw error
        }
    }
}