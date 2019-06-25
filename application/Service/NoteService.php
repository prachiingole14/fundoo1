
<?php


     
    class NoteService extends CI_Controller
    {
        private $noteService = "";
        public function __construct()
        {
            parent::__construct();
        }

        public function AddNotes($title, $description, $color,$reminder)
        {
            $reminder = date("y-m-d h-i-s");
            // $data = array('title' => $title,
            //             'description' => $description,
            //             'color' => $color,
            //             'reminder' => $reminder
        //);

            //$query= $this->db->post->insert('notes', $data);  
            $query =  $this->db->query("INSERT INTO notes(`title`,`description`,`color`,`reminder`) VALUES('$title','$description','$color','$reminder')");
            echo json_encode($query);
        }


        public function shownotes()
        {
           $q = $this->db->get('notes');
           $data = $q->result_array();
           echo json_encode($data);
        } 


        public function deleteNote($note_id)
        {
            $data = array('note_id' => $note_id);

            $note_id=$this->input->get('note_id');
            $query=$this->db->query("delete from notes where note_id='$note_id'");

            if($query)
            {
                echo "Data deleted successfully....!";
            }
            return $query; 
        }


        public function changeColor($note_id,$color)
        {
            $data=array('note_id' => $note_id,
                        'color' => $color);
                    
            $note_id=$this->input->get('note_id');
            $query = $this->db->query("UPDATE notes SET `color` = '$color' WHERE `note_id`='.$note_id.'");
         
            if($query)
            {
                print("success");
            }
            else
            {
                print("failed");
            }
            return $query;
        }

        public function updateNote($note_id, $reminder)
        {
            $reminder = date("y-m-d h-i-s");

            $data=array('note_id' => $note_id,
                        'reminder' => $reminder);

            $reminder_query = $this->db->query("UPDATE notes SET `reminder` = '$reminder' WHERE `note_id` = '$note_id'");
            json_encode($reminder_query);

            if($reminder_query)
            {
                print ("Remind set");
            }
            else
            {
                print("reminder not set");
            }
        }
        

        public function getdeleted($note_id, $reminder)
        {
            $reminder = date("y-m-d h-i-s");
            $delete_query = $this->db->query("UPDATE notes SET `reminder` = null WHERE `note_id` = '$note_id'");
            json_encode($delete_query);

            if($delete_query)
            {
                print("deleted");
            }
            else
            {
                print("error");
            }
        }

        public function insert_image($note_id,$images)
        {
            // $data = array('note_id' => $note_id,
            //                 '$image' => $image);

            $config = array('upload_path' => '../../fundoo/assets/images/',
                            'allowed_types' => 'gif|jpg|png|svg|jpeg',
                            'max_size' => '100',
                            'max_width' => '100',
                            'max_height' => '100');
            $image=$this->load->library('upload', $config);
            
            $upload = $this->db->query("UPDATE notes SET `images` = '$images' WHERE `note_id` = '$note_id'");
            if(!$upload)
            {
                print("image uploaded successfully..!");
            }
            else
            {
                print("error in upload.");
            }
        }
    }     
?>