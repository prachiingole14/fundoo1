<?php
    defined('BASEPATH') or exit('No direct script access allowed');
    include "/var/www/html/fundoonote/application/Service/NoteService.php";
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Authorization");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    
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
            $image = $_POST['image'];

            $result = $this->note->AddNotes($title, $description, $color ,$image);
            return $result;
        }

        public function displaynotes()
        {
            $note_id=$_POST['note_id'];
           $result = $this->note->shownotes($note_id);
           //$result= $this->db->query("SELECT note_id FROM notes where 'note_id=$note_id'");
           print_r($result);

           return $result;
        }

        public function deletenote()
        {
          $note_id=$_POST['note_id'];
          $result = $this->noteservice->deleteNote($note_id);
            return $result;
        }

        public function editcolor()
        {
            $note_id = $_POST['note_id'];
            $color = $_POST['color'];
            
            $result= $this->noteservice->changeColor($note_id,$color);
            return $result;
        }

      
    }   