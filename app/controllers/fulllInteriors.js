
function fulllInteriorsCtrl($scope,$state,dataService){
    var user= dataService.user;
    var interiors=[]
    $scope.toRegister=function(){
        if($scope.isEntertainment){
            interiors.push('Entertainment Unit')
        }
        if($scope.isStudy){
            interiors.push('Study Unit')
        }
        if($scope.isCrockery){
            interiors.push('Crockery Unit')
        }
        user.interiors=interiors
        $state.go('register') 
    }
    $scope.back=function(){
        console.log(dataService.user.products)
        if(dataService.user.products.indexOf('wardrobe') == 1){
            $state.go('wordrobes')
        }else{
            $state.go('shapes')
        }
    }
}
fulllInteriorsCtrl.$inject=['$scope','$state','dataService'];
export default fulllInteriorsCtrl;