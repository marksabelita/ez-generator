import { GenerateDetailsParams } from "../../interface/laravel";
import { readFileSync, write, writeFileSync } from 'fs';
import { RepositoryDefaultsInterface } from "../../interface/repository.defaults";
import { defaultRepositoryFiles } from "../../configs/laravel/repository.defaults";


class LaravelRepository {
    protected defaultRepositoryFiles: RepositoryDefaultsInterface[] = defaultRepositoryFiles;

    generate = (details: GenerateDetailsParams) => {
        console.log(details)
        return defaultRepositoryFiles.map((file) => {
            const fileContents = readFileSync(file.sourceFile, 'utf-8');
            const updatedContentWithName = fileContents.replace(/Sample/g, details.name);
            const writeFilePath = `${file.destinationPath}/${details.name}${file.name}.php`;

            console.log(writeFilePath);
            return writeFileSync(writeFilePath, updatedContentWithName);
        })
    }


}

export default LaravelRepository;