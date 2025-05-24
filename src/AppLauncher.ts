import express from 'express';
import morgan from 'morgan';
import { injectable } from 'tsyringe';
import chatRouter from './infrastructure/express/chatRouter';

@injectable()
export class AppLauncher {
    readonly app = express();

    public async start(): Promise<void> {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use('/api', chatRouter);

        return new Promise((resolve) => {
            const port = Number(process.env.PORT) ?? 3000;
            return this.app.listen(port, () => {
                console.log(`Server is running on port ${port}`);
                return resolve();
            });
        });
    }
}
