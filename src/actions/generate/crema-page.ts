import { GenerateDetailsParams } from "../../interface/laravel";
// writeFileSync
import { readFileSync } from 'fs';
import { CremaPageDefaultsInterface } from "../../interface/crema-page.default";
import { defaultCremaFiles } from "../../configs/next/crema-page.default";

import { capitalizeFirstLetter, capitalizeAllLetter } from "../../utils/text-transform";


class CremaPage {
    protected defaultFiles: CremaPageDefaultsInterface[] = defaultCremaFiles;

    generate = (details: GenerateDetailsParams) => {
        return defaultCremaFiles.map((file) => {
            const fileContents = readFileSync(file.sourceFile, 'utf-8');
            const updatedContentWithName = fileContents
                .replace(/Sample/g, details.name)
                .replace(/sample/g, capitalizeFirstLetter(details.name))
                .replace(/SAMPLE/g, capitalizeAllLetter(details.name));

            // const splitPath = () ?
            
            if(details.path) {
                const splitPath = details.path.split('/');
                const addedAddtionalPath = splitPath.reduce((prev, current) => {
                    console.log(prev);
                    return `${prev}/${current}`
                }, file.destinationPath);

                console.log(addedAddtionalPath);
            }

            // const writeFilePath = `${file.destinationPath}/${details.name}${file.name}.php`;

            // console.log(updatedContentWithName);
            // return writeFileSync(writeFilePath, updatedContentWithName);
        })
    }


}

export default CremaPage;