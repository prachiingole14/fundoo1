
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


        public function deleteNote($title, $description, $color ,$image)
        {
            $data = array('note_id' => $note_id);

            $query = "DELETE FROM notes where note_id='$note_id'";
            $stmt = $this->db->conn_id->prepare($query);
            $res = $stmt->execute($data);
            print_r($res);

            if($res)
            {
                print("success");
            }

            else
            {
                print("failed");
            }
            return $res; 
        }


    

        public function changeColor($color,$id)
        {
            $data=array('id' => $id,
                        'color' => $color );

            $query = "UPDATE notes SET color = '$color' where $note_id = '$note_id'";
            $stmt = $this->db->conn_id->prepare($query);
            $res = $stmt->execute($data);
            if($res)
            {
                print("success");
            }
            else
            {
                print("failed");
            }
            return $res;
        }



        public function showdata($note_id)
        {
            $connection = new Redis();
            $client = $connection->connection();
            $token = $client->get('token');
            $arr = array('HS256', 'HS384', 'HS512','RS256');
            $secret_key = "abc";
            $payload = JWT::decode($token,$secret_key,$arr);
            $id = $payload->id;
    
            $query = "SELECT n.id,n.userid,n.title,n.noteContent,n.date,n.color,n.image,n.pin, l.label from addnote n Left JOIn label_note ln ON ln.note_id=n.id left JOIN label l on ln.label_id=l.id where n.userid = '$id' and archive = 0 and trash = 0 ORDER BY n.id DESC";
            $stmt = $this->db->conn_id->prepare($query);
            $res = $stmt->execute();
            $arr = $stmt->fetchAll(PDO::FETCH_ASSOC);
            foreach($arr as $notes)
            {
                $title = $notes['title'];
                $noteContent = $notes['noteContent'];
                $date = $notes['date'];
                $color = $notes['color'];
                $image = $notes['image'];
                $label = $notes['label'];
            }
    
            // if ($res) 
            // {
            //     $result = array(
            //         "message" => "200",
            //     );
            //     print json_encode($result);
            //     return "200";
            // } 
            // else 
            // {
            //     $result = array(
            //         "message" => "204",
            //     );
            //     print json_encode($result);
            //     return "204";
    
            // }
    
            print json_encode($arr);
        }
        
    }     
?>