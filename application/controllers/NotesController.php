<?php
    defined('BASEPATH') or exit('No direct script access allowed');
    require APPPATH . 'libraries/REST_Controller.php';
    include '/var/www/html/fundoo1/application/Service/NoteService.php';
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    header("Access-Control-Allow-Headers: X-Requested-With");
    
    
    class NotesController extends CI_Controller
    {

        private $NoteService = " ";
        public function __construct()
        {
            parent::__construct();
            $this->load->database();
            $this->load->helper("url");
            $this->note = new NoteService();
        }

        public function addnote()
        {
            $title = $_POST['title'];
            $description = $_POST['description'];
            $color = $_POST['color'];
            $remind = $_POST['reminder'];
            $result = $this->note->AddNotes($title, $description, $color, $reminder);
            return print_r(json_encode($result));
        }

        public function displaynotes()
        {
            // $note_id=$_GET['note_id'];
           $data = $this->note->shownotes();
           //$result= $this->db->query("SELECT note_id FROM notes where 'note_id=$note_id'");
           print_r($data);
           return $data;
        }

        public function deletenote()
        {
          $note_id=$_POST['note_id'];
          $result = $this->note->deleteNote($note_id);
          return $result;
        }

        public function editcolor()
        {
            $note_id = $_POST['note_id'];
            $color = $_POST['color'];    
            $result= $this->note->changeColor($note_id,$color);
            return $result;
        }

        public function update_reminder()
        {
            $note_id = $_GET['note_id'];
            $reminder = $_GET['reminder'];

            $remind = $this->note->updateNote($note_id ,$reminder);
            return $remind;
        }

        public function remind_deleted()
        {
            $note_id = $_GET['note_id'];
            $reminder = $_GET['reminder'];
            $deletereminder = $this->note->getdeleted($note_id ,$reminder);
            return $deletereminder;
        }

        public function do_upload()
        {
            $config = array('upload_path' => '../../fundoo/assets/images/',
                            'allowed_types' => 'gif|jpg|png|svg|jpeg',
                            'max_size' => '100',
                            'max_width' => '100',
                            'max_height' => '100');
           $image = $this->load->library('upload', $config);
           print_r($image);

           
        // $images = $this->upload_path + $this->upload;
        // $upload = $this->note->insert_image($note_id,$images);
        // return $upload;
        }










        // public function do_upload() 
        // { 
        //    $config['upload_path']   = '/var/www/html/fundoo1/fundoo/src/assets/images'; 
        //    $config['allowed_types'] = 'gif|jpg|png'; 
        //    $config['max_size']      = 100; 
        //    $config['max_width']     = 1024; 
        //    $config['max_height']    = 768;  
        //    $images=$this->load->library('upload', $config);
        //    print_r($images);  
        //    // $temp_name=['image'],['temp_name'],              
        //    if ( ! $this->upload->do_upload('')) 
        //    {
        //       $error = array('error' => $this->upload->display_errors()); 
        //      GET); 
        //    }
        //    elGET
        //    { GET
        //       $data = array('upload_data' => $this->upload->data()); 
        //       $this->load->view('Upload_success', $data); 
        //    } 
        // } 
    }
    //  controller end class
?>



