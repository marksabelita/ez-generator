import { GenerateDetailsParams } from "../../interface/laravel";
// writeFileSync
import { readFileSync, writeFileSync } from 'fs';
import { CremaPageDefaultsInterface } from "../../interface/crema-page.default";
import { defaultCremaFiles } from "../../configs/next/crema-page.default";
import { capitalizeFirstLetter, capitalizeAllLetter, smallAllLetter } from "../../utils/text-transform";
import { createFileIfNotExists } from "../../utils/files";

class CremaPage {
    protected defaultFiles: CremaPageDefaultsInterface[] = defaultCremaFiles;

    generate = (details: GenerateDetailsParams) => {
        return defaultCremaFiles.map((file) => {
            const fileContents = readFileSync(file.sourceFile, 'utf-8');
            const updatedContentWithName = fileContents
                .replace(/Sample/g, details.name)
                .replace(/sample/g, capitalizeFirstLetter(details.name))
                .replace(/SAMPLE/g, capitalizeAllLetter(details.name));

            if(!details.path) { throw new Error('path is required'); }
                
            if(details.path) {
                // generate rootPath
                createFileIfNotExists(file.destinationPath);

                const destinationRootPath = (file.type == 'page' && details.root) ?
                    `${file.destinationPath}/${details.root}/` : file.destinationPath;

                createFileIfNotExists(destinationRootPath);

                const splitPath = details.path.split('/');
                const parentPath = splitPath.reduce((prev, current) => {
                    const latestFilePath =`${prev}/${current}`
                    createFileIfNotExists(latestFilePath);
                    return latestFilePath
                }, destinationRootPath);

                const rootDestination =  (file.type == 'module') ? 
                    `${parentPath}/${smallAllLetter(details.name)}`: parentPath;

                if(file.type == 'module') { 
                    createFileIfNotExists(rootDestination);
                }
                // generate additionalPath
                const rootWithAdditionalPath = (file.additionalPath) ? 
                    `${rootDestination}/${file.additionalPath}` : rootDestination;
                    
                if(file.additionalPath) { createFileIfNotExists(rootWithAdditionalPath); }
          
                const fullFilePath = (file.type == 'page') ? 
                    `${rootWithAdditionalPath}/${smallAllLetter(details.name)}`
                    : rootWithAdditionalPath;
                
                createFileIfNotExists(fullFilePath); 

                const fileName = (file.type == 'redux' || file.type == 'redux') ? 
                    smallAllLetter(details.name): file.name;
                
                
                const writeFilePath = `${fullFilePath}/${fileName}.js`;
                return writeFileSync(writeFilePath, updatedContentWithName);
            }
        })
    }


}

export default CremaPage;