<?php
    defined('BASEPATH') or exit('No direct script access allowed');
    include "/var/www/html/CodeIgniter-3.1.10/application/Service/NoteService.php";
    header("Access-Control-Allow-Headers : Content-Type");
    header("Access-Control-Allow-Methods : POST, OPTIONS");
    header('Access-Control-Allow-Origin: *');
    
    class NotesController extends CI_Controller
    {

        private $NoteService = " ";
        public function __construct()
        {
            parent::__construct();
            $this->load->database();
            $this->noteservice = new NoteService();
        }

        public function addnote()
        {
            $title = $_POST['title'];
            $description = $_POST['description'];
            $color = $_POST['color'];
            $image = $_POST['image'];

            $result = $this->noteservice->AddNotes($title, $description, $color ,$image);
            return $result;
        }

        public function DisplayNotes()
        {
             $note_id=$_POST['note_id'];
            // $title = $_POST['title'];
            // $description = $_POST['description'];
            // $color = $_POST['color'];
            // $image = $_POST['image'];
           $result = $this->noteservice->showdata($note_id);
            print_r($result);
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

