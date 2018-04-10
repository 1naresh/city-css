
function bedroomSheetsCtrl($scope,$window,dataService,$state){
    $scope.heading="bedroom sheets"
    var user=dataService.user
    user.bedroomCost1=0
    user.bedroomCost2=0
     $scope.costs1=[75,100,125,150,175,200,225,250]   
     $scope.costs2=[75,100,125,150,175,200,225,250]   
     $scope.onSelect1=function(cost){
        user.bedroomCost1=cost*user.bedRoomSize
         $scope.estCost1=user.bedroomCost1
         $scope.warning=false
     }
     $scope.onSelect2=function(cost){
        user.bedroomCost2=cost*user.bedRoomSize
        $scope.estCost2=user.bedroomCost2;
        $scope.warning=false        
    }
    $scope.toRegister=function(){
        if(user.bedroomCost1 && user.bedroomCost2){
            if(user.products.indexOf('fulllInteriors') == 2){
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
        $state.go('wordrobes')
    }
}
bedroomSheetsCtrl.$inject=['$scope','$window','dataService','$state'];
export default bedroomSheetsCtrl;