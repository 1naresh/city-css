import angular from 'angular';
import uirouter from 'angular-ui-router';
import config from './config';
import dataService from './services/dataService';
import productService from './services/productService';
import './css/bootstrap.css';
import './css/style.css';
angular.module("app",[uirouter,require("ngstorage-webpack")])
    .config(config)
    .factory("dataService",dataService)