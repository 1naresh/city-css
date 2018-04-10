
function homeCtrl($scope,$state,$stateParams){
    $scope.toProducts=function(){
        $state.go('products')
    }
}
homeCtrl.$inject=['$scope','$state','$stateParams'];
export default homeCtrl;