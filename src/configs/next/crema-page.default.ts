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
        type: "module-list",
        name: "index",
        sourceFile: `${projectPath}/templates/module/next/crema-page/module/list/index.js`,
        destinationPath: `${currentWorkingDirectory}/modules`,
        additionalPath: "lists"
    },
    {
        type: "module-update",
        name: "index",
        sourceFile: `${projectPath}/templates/module/next/crema-page/module/update/index.js`,
        destinationPath: `${currentWorkingDirectory}/modules`,
        additionalPath: "update"
    },
    {
        type: "module-update-form-date",
        name: "formdata",
        sourceFile: `${projectPath}/templates/module/next/crema-page/module/update/formdata.js`,
        destinationPath: `${currentWorkingDirectory}/modules`,
        additionalPath: "update"
    },
    {
        type: "module-update-styles-date",
        name: "styles",
        sourceFile: `${projectPath}/templates/module/next/crema-page/module/update/styles.js`,
        destinationPath: `${currentWorkingDirectory}/modules`,
        additionalPath: "update"
    },
    {
        type: "redux-actions",
        name: "index",
        sourceFile: `${projectPath}/templates/module/next/crema-page/redux/actions/index.js`,
        destinationPath: `${currentWorkingDirectory}/redux/actions`,
        additionalPath: ""
    },
    {
        type: "redux-reducer",
        name: "index",
        sourceFile: `${projectPath}/templates/module/next/crema-page/redux/reducer/index.js`,
        destinationPath: `${currentWorkingDirectory}/redux/reducers`,
        additionalPath: ""
    },
]