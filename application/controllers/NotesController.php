<?php
    defined('BASEPATH') or exit('No direct script access allowed');
    include "/var/www/html/CodeIgniter-3.1.10/application/Service/Add_Note_Service.php";
    //include "/var/www/html/CodeIgniter-3.1.10/application/models/NoteModel.php";

    class NotesController extends CI_Controller
    {
        public function __construct()
        {
            parent::__construct();
            $this->load->database();
            $this->addnote = new Add_Note_Service();
            $this->noteModel= new NoteModel();
        }

        public function addNotes()
        {
            $title = $_POST['title'];
            $description = $_POST['description'];
            $color = $_POST['color'];
            $image = $_POST['image'];

            $res = $this->addnote->Add_Notes($title, $description, $color ,$image);
        }

        public function demo()
        {
            echo "hiiiiii";
        }
    }    

