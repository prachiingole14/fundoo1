<?php

    class Add_Note_Service extends CI_Controller
    {
        public function __construct()
        {
            parent::__construct();
        }

        public function Add_Notes()
        {
            $data = array("title" => $title,
                        "description" => $description,
                        "color" => $color, 
                        "image" => $image);

            $query= $this->db->query("INSERT INTO notes(`title`,`description`,`color`,`image`) VALUE('$title','$decription','$color','$image')");
            print_r($query);
        }
    }
        
?>