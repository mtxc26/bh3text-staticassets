import { rm, mkdir, cp, readdir } from 'node:fs/promises';

export async function prepare() {
    try {
        const entries = await readdir('dist');
        for (const entry of entries) {
            await rm(`dist/${entry}`, { recursive: true, force: true });
        }
    } catch {
        // dist doesn't exist yet, create it
        await mkdir('dist', { recursive: true });
    }
    await cp('public', 'dist', { recursive: true });
}


await prepare();


