
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
            $query = $this->db->query("UPDATE notes SET color = '$color' where note_id='".$note_id."'");
         
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

    }     
?>