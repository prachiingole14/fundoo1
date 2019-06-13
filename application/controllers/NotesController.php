<?php
    defined('BASEPATH') or exit('No direct script access allowed');
    include "/var/www/html/fundoonote/application/Service/NoteService.php";
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    header("Access-Control-Allow-Headers: X-Requested-With");
    
    class NotesController extends CI_Controller
    {

        private $NoteService = " ";
        public function __construct()
        {
            parent::__construct();
            $this->load->database();
            $this->note = new NoteService();
        }

        public function addnote()
        {
            $title = $_POST['title'];
            $description = $_POST['description'];
            $color = $_POST['color'];
            $result = $this->note->AddNotes($title, $description, $color);
            return print_r(json_encode($result));
        }

        public function displaynotes()
        {
            // $note_id=$_GET['note_id'];
           $data = $this->note->shownotes();
           //$result= $this->db->query("SELECT note_id FROM notes where 'note_id=$note_id'");
           print_r($data);
           return $data;
        }

        public function deletenote()
        {
          $note_id=$_POST['note_id'];
          $result = $this->note->deleteNote($note_id);
            return $result;
        }

        public function editcolor()
        {
            $note_id = $_POST['note_id'];
            $color = $_POST['color'];    
            $result= $this->note->changeColor($note_id,$color);
            return $result;
        }
      
    }   