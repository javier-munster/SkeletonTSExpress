import { container } from 'tsyringe';
import { AppLauncher } from '../src/AppLauncher';

describe('AppLauncher Module', () => {
    let appLauncher: AppLauncher;

    beforeEach(() => {
        appLauncher = container.resolve(AppLauncher);
    });

    test('start resolves', async () => {
        return expect(appLauncher.start()).resolves.toBeUndefined();
    });
});
