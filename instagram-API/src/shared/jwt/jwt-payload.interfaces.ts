import { TokenInfo } from "./token-info.model";

export interface JWTPayLoad {
    _id: string;
    email: string;
    name: string;
    image?: string;
    tokenInfo: TokenInfo
}