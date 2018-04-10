
function productService($http,$q){
    var addProducts=function(products){
        var defered=$q.defer();
        $http({
            method:"post",
            url:"/data/addProducts",
            data:{products:products}
        })
    }
    var addKitchenShape=function(kitchenShape){
        var deferd=$q.defer();
        $http({
            method:"post",
            url:"/data/addKitchenShape",
            data:{kitchenShape:kitchenShape}
        })
    }
    return{
        addProducts:addProducts,
        addKitchenShape:addKitchenShape
    }
}
productService.$inject=["$http","$q"];
export default productService