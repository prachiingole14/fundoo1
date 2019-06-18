<?php

class RemiderService extends CI_Controller
{
    public function __construct()
    {
        parent :: __construct();
        //$this->load->database();
    }

    public function setTodayReminder($date_time)
    {
       // $date_time = date("y-m-d h-i-s");
        $data = array("date_time" => $date_time);
        print_r($date_time);

        $this->db->set($data);
        $this->db->insert($this->db->dbprefix . 'reminder');
       
       // $query = $this->db->query("INSERT INTO `reminder` (`date_time`) VALUES ('$date_time')");
      //$data = $this->db->insert(`reminder`);
      // print_r($data);       
    }
}

?>