<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('avaleht');
});
route::get('/login', function(){
    return view('login');
});
route::get('/registration', function(){
    return view('registration');
});
route::get('/kinokava', function(){
    return view('kinokava');
});