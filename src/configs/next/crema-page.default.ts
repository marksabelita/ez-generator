import * as path from 'path';
import { CremaPageDefaultsInterface } from '../../interface/crema-page.default';

const projectPath = path.resolve(__dirname,  "../../",'') ;
const currentWorkingDirectory = process.cwd();

export const defaultCremaFiles: CremaPageDefaultsInterface[] = [
    {
        type: "page",
        name: "index",
        sourceFile: `${projectPath}/templates/module/next/crema-page/page/index.js`,
        destinationPath: `${currentWorkingDirectory}/pages`,
    },
    {
        type: "module",
        name: "index",
        sourceFile: `${projectPath}/templates/module/next/crema-page/module/list/index.js`,
        destinationPath: `${currentWorkingDirectory}/modules`,
        additionalPath: "lists"
    },
    {
        type: "module",
        name: "index",
        sourceFile: `${projectPath}/templates/module/next/crema-page/module/update/index.js`,
        destinationPath: `${currentWorkingDirectory}/modules`,
        additionalPath: "update"
    },
    {
        type: "module",
        name: "formdata",
        sourceFile: `${projectPath}/templates/module/next/crema-page/module/update/formdata.js`,
        destinationPath: `${currentWorkingDirectory}/modules`,
        additionalPath: "update"
    },
    {
        type: "module",
        name: "styles",
        sourceFile: `${projectPath}/templates/module/next/crema-page/module/update/styles.js`,
        destinationPath: `${currentWorkingDirectory}/modules`,
        additionalPath: "update"
    },
    {
        type: "redux",
        name: "index",
        sourceFile: `${projectPath}/templates/module/next/crema-page/redux/actions/index.js`,
        destinationPath: `${currentWorkingDirectory}/redux/actions`,
        additionalPath: ""
    },
    {
        type: "redux",
        name: "index",
        sourceFile: `${projectPath}/templates/module/next/crema-page/redux/reducer/index.js`,
        destinationPath: `${currentWorkingDirectory}/redux/reducers`,
        additionalPath: ""
    },
]