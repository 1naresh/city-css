
function registerCtrl($scope,$state,dataService){
    $scope.nameErr=false;
    $scope.emailErr=false;
    $scope.phoneErr=false;
    $scope.cityErr=false;
    $scope.cities=['hyderabad','chennai','bangalore','delhi']
    $scope.submitForm=function(){
        var name=$scope.name
        var email=$scope.email
        var phone=$scope.phone
        var city=$scope.city 
        var otp=Math.round(Math.random() * 1000000);         
        // if(name == undefined || name.length < 6 || name.length >15){
        //     $scope.nameErr=true;
        // }else{
        //     $scope.nameErr=false; 
        // }
        // if(email != undefined){
        //     var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        //     $scope.emailErr=!expr.test(email)
        // }else{            
        //     $scope.emailErr=true
        // }
        
        // if( phone == undefined || phone.length < 8 || phone.length >15){
        //     $scope.phoneErr=true;
        // }else{
        //     $scope.phoneErr=false;
        // }
        // if(city == undefined){
        //     $scope.cityErr=true;
        // }else{
        //     $scope.cityErr=false;
        // }
       
        // if( !$scope.nameErr && !$scope.emailErr && !$scope.phoneErr && !$scope.cityErr){
            dataService.addDetails({name:name,email:email,phone:phone,city:city,otp:otp})
            $state.go('final')
        // }
        
        // dataService.getAll().then(function(res){
        //     var phones=[]
        //     var emails=[]
        //     res.data.map( function(User){
        //         phones.push(User.phone)
        //         emails.push(User.email) 
        //         $scope.e=phones
        //         $scope.p=emails
        //     })
        // })
        // dataService.addDetails({name:name,email:email,phone:phone,city:city})
        // $state.go('final')
    } 
    $scope.back=function(){
        if(dataService.user.products.indexOf('fulllInteriors') == 2){
            $state.go('fulllInteriors')
        }else if(dataService.user.products.indexOf('wardrobe') == 1 ){
            $state.go('wardrobe')
        }else{
            $state.go('shapes')
        }        
    }
}
registerCtrl.$inject=['$scope','$state','dataService'] ;
export default registerCtrl;