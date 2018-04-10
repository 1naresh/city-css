
function productsCtrl($scope,$state,dataService,$document,$stateParams,$window,$localStorage){
    var products=['kitchen']
    $scope.kitchenImg=true;    
    $scope.toShape=function(){
        if($scope.wardrobe){
            products.push('wardrobe')
        }
        if($scope.fulllInteriors){
            products.push('fulllInteriors')
        }
        $window.localStorage.setItem("user",{name:"naresh"})
        console.log($window.localStorage.getItem("user").name)
        dataService.user.products=products
        $state.go('shapes')
    }
    $scope.back=function(){
        $state.go('home')
    }
    $scope.over=function(product){
        $document[0].getElementById(product).style.background='#e2d182'
        if(product=='wardrobe'){
            $scope.kitchenImg=false;
            $scope.wardrobeImg=true
        }
        if(product=='fulllInteriors'){
            $scope.kitchenImg=false;
            $scope.fulllInteriorsImg=true 
        }
    }
    $scope.leave=function(product){        
        $document[0].getElementById(product).style.background='#9c9999'
        if(product=='wardrobe'){
            $scope.wardrobeImg=false
            $scope.kitchenImg=true;
        }
        if(product=='fulllInteriors'){
            $scope.fulllInteriorsImg=false;
            $scope.kitchenImg=true;
        }
    } 
}
productsCtrl.$inject=['$scope','$state','dataService','$document','$stateParams','$window','$localStorage']
export default productsCtrl;