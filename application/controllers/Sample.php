<?php
    defined('BASEPATH') or exit('No direct script access allowed');

    class Sample extends CI_Controller
    {

        public function __construct()
        {
            parent::__construct();
            $this->load->database();
        }

        public function Sample()
        {
            echo "its running";
        }
    }
?> 