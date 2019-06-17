<?php

class RemiderService extends CI_Controller
{
    public function __construct()
    {
        parent :: __construct();
        //$this->load->database();
    }

    public function setTodayReminder( $note_id, $date_time)
    {
        $data = array("date_time" => $date_time,
                 "note_id" => $note_id);
        print_r($date_time);
        //$query = $this->db->query("INSERT INTO `reminder` (`note_id`,`date_time,` ) VALUES ('$note_id','$date_time')");
        $query = $this->db->insert(`reminder`,`$data`);

        print_r($query);       
    }
}

?>