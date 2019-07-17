//precompile, server of client side compiling. Volledig gerund in de browser (wat problmen voor zoekmachines opleverd). Serverside rendering van een Angular website is helemaal server side geschreven voor zoekmachine - dan wordt de  client side Ang website rendered variant voor de klanten client. 

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'

platformBrowserDynamic().bootstrapModule(AppModule)