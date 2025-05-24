import 'dotenv/config';
import 'reflect-metadata';
import { container } from 'tsyringe';
import { AppLauncher } from './src/AppLauncher';

async function main() {
    const appLauncher = container.resolve(AppLauncher);
    await appLauncher.start();
}

main();
