<?php

$this->post('users','Api\UserController@store');

$this->post('auth', 'Auth\AuthApiController@authenticate');
$this->post('auth-refresh', 'Auth\AuthApiController@refreshToken');
$this->get('me', 'Auth\AuthApiController@getAuthenticatedUser');

$this->group(['prefix' => 'v1', 'namespace' => 'Api'], function(){

    $this->apiResource('classrooms', 'ClassroomController');
    $this->apiResource('modules', 'ModuleController');
    $this->apiResource('courses', 'CourseController');
    $this->apiResource('orders', 'OrderController');
    
});



