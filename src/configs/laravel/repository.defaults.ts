import * as path from 'path';
import { RepositoryDefaultsInterface } from '../../interface/repository.defaults';

const projectPath = path.resolve(__dirname,  "../../",'') ;
const currentWorkingDirectory = process.cwd();

export const defaultRepositoryFiles: RepositoryDefaultsInterface[] = [
    {
        name: "Controller",
        sourceFile: `${projectPath}/module/laravel/controller/SampleWithBase.php`,
        destinationPath: `${currentWorkingDirectory}/app/Http/Controllers`,
    },
    {
        name: "Interface",
        sourceFile: `${projectPath}/module/laravel/interface/SampleInterface.php`,
        destinationPath: `${currentWorkingDirectory}/app/Interfaces`
    },
    {
        name: "Repository",
        sourceFile: `${projectPath}/module/laravel/repository/SampleWithBase.php`,
        destinationPath: `${currentWorkingDirectory}/app/Repositories`
    },
    {
        name: "Provider",
        sourceFile: `${projectPath}/module/laravel/provider/SampleProvider.php`,
        destinationPath: `${currentWorkingDirectory}/app/Providers`
    },
    {
        name: "",
        sourceFile: `${projectPath}/module/laravel/model/SampleModel.php`,
        destinationPath: `${currentWorkingDirectory}/app/Models`
    },
]