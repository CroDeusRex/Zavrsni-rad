warehouseModule.controller('homeController', function($scope, $http) {
    
})
.controller('warehouseListController', function($scope, $http) {

    $data = {"warehouse":
             [{
                 "quantity":2,
                 "min_quantity":0,
                 "warehouse_entry":1,
                 "product":
                 {
                     "name":"cocacola",
                     "supplier":"velpro",
                     "id":1,
                     "img":"https://pbs.twimg.com/profile_images/493592781575557120/H7R37Fc8_400x400.jpeg"
                 }},
              {
                  "quantity":8,
                  "min_quantity":4,
                  "warehouse_entry":2,
                  "product":
                  {
                      "name":"sprite",
                      "supplier":"jamnica",
                      "id":2,
                      "img":"https://pbs.twimg.com/profile_images/493592781575557120/H7R37Fc8_400x400.jpeg"
                  }}]};
     
    //$ar = angular.fromJson($data);
    $scope.warehouse = $data.warehouse;
})
.controller('warehouseEntryEditController', function($scope,$http,$routeParams){
    $data = "{warehouse:[{quantity:2,min_quantity:0,warehouse_entry:1,product:{name:cocacola,supplier:velpro,id:1}},{quantity:8,min_quantity:4,warehouse_entry:2,product:{name:sprite,supplier:jamnica,id:2}}]}";     
    $ar = angular.fromJson($data);
    $scope.entry = $ar.warehouse[0];
    
    $scope.submit_updatedentry = function()
    {
        console.log("uslo");
        $http.put('http://127.0.0.1:8000/warehouses/' + $routeParams.id + '/item', {entry : angular.toJson($scope.entry) });
    };
});
/*
.controller('noteAddNewController', function ($scope, $http) {
    $scope.users;

    $http.get('api/UserApi/List').then(function (result) {
        $scope.users = result.data;
    });

    $scope.new_note = {
        Title: "",
        Text: "",
        UserId: ""
    };
    $scope.submit = function()
    {
       
        $http.post('api/NotesApi/Add', $scope.new_note)
        .success(function ()
        {
            window.location = "/#" + "/";
        })
        .error(function ()
        {
            window.location = "/#" + "/";
        });
    }
})

.controller('commentAddNewController', function ($scope, $http, $routeParams) {
    
    $scope.user_names = "";

    $scope.new_comment = {
        Text: "",
        UserId: "",
        Author:
            {
                CreatedOn: "",
                FullName: "",
                Id: "",
                IsPremiumUser: ""
            },
        NoteId: $routeParams.id
    };

    $http.get('api/UserApi/List').then(function (result) {
        $scope.users = result.data;
        $scope.user_names = angular.copy($scope.users);
    });

    $scope.submit = function ()
    {
        $scope.userId = angular.copy($scope.new_comment.user_Id);
        
        if($scope.new_comment.Text != "" && $scope.new_comment.UserId != "")
            $http.post('api/CommentsApi/Add', $scope.new_comment)
            .success(function () {

                user_id = angular.copy($scope.new_comment.UserId);
                $scope.new_comment.Author = angular.copy($scope.user_names[user_id-1]); 
                $scope.note.Comments.push(angular.copy($scope.new_comment));

            })
            .error(function () {
                //jos nista...
            });
        else
        {
            //error treba bacit
        }
    }
})

.controller('noteEditController', function ($scope, $http, $routeParams){
    $scope.noteId = $routeParams.id;

    $http.get('/api/NotesApi/Details/' + $routeParams.id)
        .then(function (result) {
            $scope.note = result.data;
        });
    
    $scope.submit_updatednote = function ()
    {
        if ($scope.note.Text != "" && $scope.note.Title != "")
            $http.post('api/NotesApi/Update', $scope.note).
                success(function ()
                {
                    window.location = "/#" + "/note/" + $scope.noteId; //ako ostavim samo /#/note popizdi???
                });
    }
})

.controller('noteDeleteController', function ($scope,$http, $routeParams){
    $scope.delete_req = function()
    {
        $http.get('api/NotesApi/Delete/' + $routeParams.id)
        .success(function () {
            window.location = "/#" + "/";
        });
    }
    
});*/