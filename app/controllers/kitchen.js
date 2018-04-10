
function kitchenCtrl($scope,$state,dataService,$window){
    var user=dataService.user
    $scope.heading='What is the size of your kitchen?'
    $scope.Math = $window.Math;
    var amount=0;
    var size=0;
    $scope.wallA=0
    $scope.wallB=0
    $scope.wallC=0
    $scope.goNext=true;
    $scope.warning=false;
    function calculate(){
        var wallA=Math.floor($scope.wallA/12)
        var wallB=Math.floor($scope.wallB/12)
        var wallC=Math.floor($scope.wallC/12)
        if(wallA+wallB+wallC <= 5 && wallA+wallB+wallC > 0){
            size=wallA+wallB+wallC
            amount+=(wallA+wallB+wallC)*100
            $scope.goNext=true
        }else if(wallA+wallB+wallC > 5){
            size=wallA+wallB+wallC
            amount+=500+((wallA+wallB+wallC-5)*200)
            $scope.goNext=true
        }
        if($state.current.name == 'LShape' || $state.current.name == 'parallelShape'){
            if(wallA == 0 || wallB ==0){
                $scope.goNext=false;
                $scope.warning=true;
            }
        }else if($state.current.name == 'UShape'){
            if(wallA == 0 || wallB ==0 ||wallC ==0){
                $scope.goNext=false;
                $scope.warning=true;
            }
        }else if($state.current.name == 'straightShape'){
            if(wallA == 0){
                $scope.goNext=false;
                $scope.warning=true;
            }
        }
        user.amount=amount
        user.kitchenSize=size
        user.kitchenwallA=wallA;
        user.kitchenwallB=wallB;
        user.kitchenwallC=wallC;
    }
    $scope.toRegister=function(){
        calculate()
        if($scope.goNext){
            // if(dataService.user.products.indexOf('wardrobe') == 1){
            //     $state.go('wordrobes')
            // }else if(dataService.user.products.indexOf('fulllInteriors') == 1){
            //     $state.go('fulllInteriors')
            // }else{
            //     $state.go('register')
            // }
            $state.go('kitchenSheets') 
        }        
    }
} 
 
kitchenCtrl.$inject=['$scope','$state','dataService','$window'];
export default kitchenCtrl;