<?php

    class AddNoteService extends CI_Controller
    {
        
        public function __construct()
        {
            parent::__construct();
           $this->load->controllers(NotesController());
        }

        public function AddNotes()
        {
            $data = array("title" => $title,
                        "description" => $description,
                        "color" => $color, 
                        "image" => $image);

            $query= $this->db->query("INSERT INTO notes(`title`,`description`,`color`,`image`) VALUE('$title','$description','$color','$image')");
            print_r($query);
        }
    }
        
?>