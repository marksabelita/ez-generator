#!/usr/bin/env node
import * as yargs from 'yargs';
import CremaPage from './actions/generate/crema-page';
import LaravelRepository from './actions/generate/laravel-repository';
import { GenerateDetailsParams } from './interface/laravel';

yargs.scriptName('ez')
    .help('h').alias('h', 'help').wrap(null)
    .options({
      'name': {
        alias: 'n',
        demandOption: true,
        type: 'string'
      },
      'template': {
        alias: 't',
        demandOption: true,
        type: 'string'
      },
      'with-base': {
        alias: 'wb',
        demandOption: false,
        default: true
      },
      'path': {
        alias: 'p',
        demandOption: false,
        type: 'string'
      }
    })
    .demand(2)
    .command({
      command: 'new',
      aliases: ['n'],
      describe: 'Initialize new project',
      handler: parsed => {
        console.log('your handler goes here', parsed)
      },
     
    })
    .command({
      command: 'generate <action>',
      aliases: ['g'],
      describe: 'Generate project modules',
      handler: (parsed) => {
        const laraLists: string[] = ['lara', 'laravel'];
        const nextLists: string[] = ['next'];
        const {action, template} = parsed;

        if(laraLists.includes(template)) {
          const requestsData: GenerateDetailsParams = {
            name: parsed.name, 
            template: parsed.template,
            withBase: parsed.withBase
          }

          if(action == 'repository') {
            const laraRepo = new LaravelRepository();
            laraRepo.generate(requestsData);
          }
        }

        if(nextLists.includes(template)) {

          if(action == 'crema-page') {
            const requestsData: GenerateDetailsParams = {
              name: parsed.name, 
              template: parsed.template,
              withBase: parsed.withBase,
              path: parsed.path
            }
            const cremaPage = new CremaPage();
            cremaPage.generate(requestsData);
          }

        }
      },
      builder: {
        action: {
          demand: true,
          description: 'generate controller, view, model, migration, repository',
        }
      },
    })
    .parse(process.argv.slice(2))
