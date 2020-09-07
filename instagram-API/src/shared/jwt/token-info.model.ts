import { format, add } from "date-fns";

export class TokenInfo {
    private readonly date: Date = new Date();
    readonly init: string;
    readonly exp: Date;
    constructor(duration?: Duration) {
        this.init = format(this.date, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
        this.exp = add(this.date, duration || { seconds: 10 });
    }
}