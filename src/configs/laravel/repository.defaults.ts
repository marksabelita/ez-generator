import * as path from 'path';
import { RepositoryDefaultsInterface } from '../../interface/repository.defaults';

const projectPath = path.resolve(__dirname,  "../../",'') ;
const currentWorkingDirectory = process.cwd();

export const defaultRepositoryFiles: RepositoryDefaultsInterface[] = [
    {
        name: "Controller",
        sourceFile: `${projectPath}/templates/module/laravel/controller/SampleWithBase.php`,
        destinationPath: `${currentWorkingDirectory}/app/Http/Controllers`,
    },
    {
        name: "Interface",
        sourceFile: `${projectPath}/templates/module/laravel/interface/SampleInterface.php`,
        destinationPath: `${currentWorkingDirectory}/app/Interfaces`
    },
    {
        name: "Repository",
        sourceFile: `${projectPath}/templates/module/laravel/repository/SampleWithBase.php`,
        destinationPath: `${currentWorkingDirectory}/app/Repositories`
    },
    {
        name: "Provider",
        sourceFile: `${projectPath}/templates/module/laravel/provider/SampleProvider.php`,
        destinationPath: `${currentWorkingDirectory}/app/Providers`
    },
    {
        name: "",
        sourceFile: `${projectPath}/templates/module/laravel/model/SampleModel.php`,
        destinationPath: `${currentWorkingDirectory}/app/Models`
    },
]