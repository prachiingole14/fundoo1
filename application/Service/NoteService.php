
<?php
     
    class NoteService extends CI_Controller
    {
       // private $noteService = "";
        public function __construct()
        {
            parent::__construct();
            $this->load->database();
           //$this->controllers->NotesController();
        }

        public function AddNotes($title, $description, $color ,$image)
        {
            $data = array('title' => $title,
                        'description' => $description,
                        'color' => $color, 
                        'image' => $image);

            $query = "INSERT into notes(title,description,color,image) values ('$title','$description','$color','$image')";
            $stmt = $this->db->conn_id->prepare($query);
            $res = $stmt->execute($data);
            return $res;
        }

        public function changeColor($color,$id)
        {
            $data=array('id' => $id,
                        'color' => $color );

            $query = "UPDATE notes SET color = '$color' where $id";
            $stmt = $this->db->conn_id->prepare($query);
            $res = $stmt->execute($data);
            if($res)
            {
                print("success");
            }
            else{
                print("failed");
            }
            return $res;
        }
    }     
?>