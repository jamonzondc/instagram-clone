import { connect, ConnectionOptions } from 'mongoose';

class DataBaseConnection {

    readonly url: string = process.env.MONGODB_URI || 'mongodb://localhost/instagram';
    readonly options: ConnectionOptions = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    };

    public async connect(): Promise<void> {
        try {
            const connection = await connect(this.url, this.options)
            console.log('Database is connected');
        } catch (error) {
            console.error(error);
        }
    }
}
export const dataBaseConnection: DataBaseConnection = new DataBaseConnection();



