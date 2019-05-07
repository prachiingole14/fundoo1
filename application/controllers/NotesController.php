<?php
    defined('BASEPATH') or exit('No direct script access allowed');
    include "/var/www/html/CodeIgniter-3.1.10/application/Service/AddNoteService.php";
    

    class NotesController extends CI_Controller
    {

        private $AddNoteService = " ";
        public function __construct()
        {
            parent::__construct();
            $this->load->database();
            $this->addnote = new AddNoteService();
        }

        public function addNotes()
        {
            $title = $_POST['title'];
            $description = $_POST['description'];
            $color = $_POST['color'];
            $image = $_POST['image'];

            $res = $this->addnote->AddNotes($title, $description, $color ,$image);
        }

        public function demo()
        {
            echo "hiiiiii";
        }
    }    

