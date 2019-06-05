
<?php

// header("Access-Control-Allow-Headers : Content-Type");
// header("Access-Control-Allow-Methods : POST, OPTIONS");
// header('Access-Control-Allow-Origin: *');
     
    class NoteService extends CI_Controller
    {
        private $noteService = "";
        public function __construct()
        {
            parent::__construct();
        }

        public function AddNotes($title, $description, $color ,$image)
        {
            $data = array('title' => $title,
                        'description' => $description,
                        'color' => $color, 
                        'image' => $image);

           // $query_result= $this->db->insert('notes', $data);  
            $query =  $this->db->query("INSERT INTO notes(title,description,color,image) VALUES('$title','$description','$color','$image')");
           
            print_r($query);
            return $query;
        }


        public function shownotes()
        {
            // $data = array('note_id' =>$note_id,
            //     'title' => $title,
            //     'description' => $description,
            //     'color' => $color, 
            //     'image' => $image);
            // $this->db->where('note_id', $note_id);
           // here we select every column of the table

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