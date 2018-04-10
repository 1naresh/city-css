import homeTpl from './templates/home.html';
import productsTpl from './templates/products.html';
import shapesTpl from './templates/shapes.html';
import LShapeTpl from './templates/lshape.html';
import UShapeTpl from './templates/UShape.html';
import parallelShapeTpl from './templates/parallelShape.html';
import straightShapeTpl from './templates/straightShape.html';
import wordrobesTpl from './templates/wordrobes.html'; 
import fulllInteriorsTpl from './templates/fulllInteriors.html'; 
import registerTpl from './templates/register.html'; 
import phoneVerifyTpl from './templates/phoneVerify.html'; 
import finalTpl from './templates/final.html'; 
import sheetsTpl from './templates/sheets.html'; 

import homeCtrl from './controllers/home';
import productsCtrl from './controllers/products';
import shapesCtrl from './controllers/shape';
import kitchenCtrl from './controllers/kitchen';
import wordrobesCtrl from './controllers/wordrobes';
import bedCtrl from './controllers/bed';
import registerCtrl from './controllers/register';
import phoneVerifyCtrl from './controllers/phoneVerify';
import finalCtrl from './controllers/final';
import fulllInteriorsCtrl from './controllers/fulllInteriors';
import kitchenSheetsCtrl from './controllers/kitchenSheets';
import bedroomSheetsCtrl from './controllers/bedroomSheets';
function config($stateProvider,$urlRouterProvider){
    $stateProvider.state({
        name:"home",
        url:"/home",
        template: homeTpl,
        controller: homeCtrl
    })
    .state({
        name:'products',
        url:"/products",
        template:productsTpl,
        controller:productsCtrl
    })
    .state({
        name:'shapes',
        url:"/shapes",
        template:shapesTpl,
        controller: shapesCtrl
    })
    .state({
        name:'LShape',
        url:"/LShape",
        template:LShapeTpl,
        controller: kitchenCtrl
    })
    .state({
        name:'UShape',
        url:"/UShape",
        template:UShapeTpl,
        controller: kitchenCtrl
    })
    .state({
        name:'parallelShape',
        url:"/parallelShape",
        template:parallelShapeTpl,
        controller: kitchenCtrl
    })
    .state({
        name:'straightShape',
        url:"/straightShape",
        template:straightShapeTpl,
        controller: kitchenCtrl
    })
    .state({
        name:'wordrobes',
        url:"/wordrobes",
        template: wordrobesTpl,
        controller: wordrobesCtrl
    })
    .state({
        name:'singleBed',
        url:"/singleBed",
        template: straightShapeTpl,
        controller: bedCtrl
    })
    .state({
        name:'doubleBed',
        url:"/doubleBed",
        template: LShapeTpl,
        controller: bedCtrl
    })
    .state({
        name:'tripleBed',
        url:"/tripleBed",
        template: UShapeTpl,
        controller: bedCtrl
    })
    .state({
        name:'register',
        url:"/register",
        template: registerTpl,
        controller: registerCtrl
    })
    .state({
        name:'phoneVerify',
        url:"/phoneVerify",
        template: phoneVerifyTpl,
        controller: phoneVerifyCtrl
    })
    .state({
        name:'final',
        url:"/final",
        template: finalTpl,
        controller: finalCtrl
    })
    .state({
        name:'fulllInteriors',
        url:"/fulllInteriors",
        template: fulllInteriorsTpl,
        controller: fulllInteriorsCtrl
    })
    .state({
        name:'kitchenSheets',
        url:"/kitchenSheets",
        template: sheetsTpl,
        controller: kitchenSheetsCtrl
    })
    .state({
        name:'bedroomSheets',
        url:"/bedroomSheets",
        template: sheetsTpl,
        controller: bedroomSheetsCtrl
    })
    $urlRouterProvider.otherwise("/home")
}
config.$inject=["$stateProvider","$urlRouterProvider"]
export default config; 