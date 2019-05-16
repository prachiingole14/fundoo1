<?php
    //session is started
    session_start();
    //autoload file is coming from vendor folder
    require '../vendor/autoload.php';

    $fb = new Facebook/Facebook([
        'app_id' => '431267430996799',
        'app_secret' => '7a59a6f27a803ae6829ab47e9aab0bf6',
        'default-graph-version' => 'v2.7 '
    ]);

    $helper = $fb -> getRedirectLoginHelper();
    $Login_url = $helper -> getLoginUrl("localhost:4200");
    
?>