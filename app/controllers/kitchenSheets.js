
function kitchenSheetsCtrl($scope,$state,dataService,$window){
    $scope.heading="kitchen sheets"
    var user=dataService.user
    user.kitchenCost2=0
    user.kitchenCost2=0
     $scope.costs1=[75,100,125,150,175,200,225,250]   
     $scope.costs2=[75,100,125,150,175,200,225,250]   
     $scope.onSelect1=function(cost){
        user.kitchenCost1=cost*user.kitchenSize
         $scope.estCost1=user.kitchenCost1
         $scope.warning=false
     }
     $scope.onSelect2=function(cost){
        user.kitchenCost2=cost*user.kitchenSize
        $scope.estCost2=user.kitchenCost2;
        $scope.warning=false        
    }
    $scope.toRegister=function(){
        if(user.kitchenCost1 && user.kitchenCost2){
            if(user.products.indexOf('wardrobe') == 1){
                $state.go('wordrobes')
            }else if(user.products.indexOf('fulllInteriors') == 1){
                $state.go('fulllInteriors')
            }else{
                $state.go('register')
            }
        }
        else{
            $scope.warning=true;
        }        
    }
    $scope.back=function(){
        $state.go('shapes')
    }
} 
 
kitchenSheetsCtrl.$inject=['$scope','$state','dataService','$window'];
export default kitchenSheetsCtrl;