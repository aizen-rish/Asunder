var mainApp = angular.module('app',[]);
mainApp.controller('select', function($scope, $http){	
	$scope.flag=true;
	$scope.flag2=false;
	$scope.flag3=false;
	$scope.flag4=false;
	$scope.class1="btn-primary";
	$scope.class2="btn-default";
	$scope.class3="btn-default";
	$scope.class4="btn-default";
	$scope.sub=false;
	$scope.msg="";
	$scope.toggle=function(){
		$scope.flag=true; 
		$scope.flag2=false;
		$scope.flag3=false;
		$scope.flag4=false;
		somefn();
	};
	$scope.toggle2=function(){
		$scope.flag=false; 
		$scope.flag3=false; 
		$scope.flag4=false; 
		$scope.flag2=true;
		somefn();
	}
	$scope.toggle3=function(){
		$scope.flag=false; 
		$scope.flag2=false; 
		$scope.flag4=false; 
		$scope.flag3=true;
		somefn();
	}
	$scope.toggle4=function(){
		$scope.flag=false; 
		$scope.flag2=false; 
		$scope.flag3=false; 
		$scope.flag4=true;
		somefn();
	}
	function somefn(){
		if($scope.flag)
			$scope.class1="btn-primary";
		else
			$scope.class1="btn-default";
		if($scope.flag2)
			$scope.class2="btn-primary";
		else
			$scope.class2="btn-default";
		if($scope.flag3)
			$scope.class3="btn-primary";
		else
			$scope.class3="btn-default";
		if($scope.flag4)
			$scope.class4="btn-primary";
		else
			$scope.class4="btn-default";
		
	}
})

