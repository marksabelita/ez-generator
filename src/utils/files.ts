import { existsSync, mkdirSync } from 'fs';

export const createFileIfNotExists = (dir:string) => {
    if (!existsSync(dir)){
        mkdirSync(dir);
    }
}