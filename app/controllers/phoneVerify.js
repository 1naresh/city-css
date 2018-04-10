
function phoneVerifyCtrl($scope,dataService,$state){
    var user=dataService.user;
    $scope.otpErr=false;
    var phoneDetails={phone:user.phone,otp:user.otp}
    dataService.sendOtp(user.phone,user.otp)
    $scope.submit=function(){
        if($scope.enteredOtp == user.otp){
            $state.go("final")
        }else{
            $scope.otpErr=true
        }
    }
}
phoneVerifyCtrl.$inject=['$scope','dataService','$state']
export default phoneVerifyCtrl; 