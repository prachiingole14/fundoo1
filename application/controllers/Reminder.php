<?php

defined('BASEPATH') or exit('No direct script access allowed');
require APPPATH . 'libraries/REST_Controller.php';
include '/var/www/html/fundoo1/application/Service/RemindService.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
header("Access-Control-Allow-Headers: X-Requested-With");

Class Reminder extends CI_Controller
{
    public function __construct()
    {
        parent ::__construct();
        $this->load->database();
        $this->remind = new RemiderService();
    }

    public function todayreminder()
    {
      // $reminder_id = $_POST['reminder_id'];
        $date_time = $_GET['date_time'];

        $date_time = $this->remind->setTodayReminder($date_time);
        return $date_time;
    }

    public function showreminders()
    {
        $data = $this->remind->display();
        print_r($data);
        return $data;
    }
}
?>