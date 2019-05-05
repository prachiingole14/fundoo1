<?php

    if (! defined('BASEPATH')) exit('No direct script access allowed');

    class NoteModel extends CI_Model
    {
        protected $title;
        protected $description;
        protected $color;
        protected $image;
        protected $label_list;
        public function __construct()
        {
            parent::__construct();
        }

        public function setTitle($title)
        {
            $this->title = $title;
            return $this;
        }

        public function setDescription($description)
        {
            $this->description = $description;
            return $this;
        }

        public function setColor($color)
        {
            $this->color = $color;
            return $this;
        }

        public function setImage($image)
        {
            $this->image = $image;
            return $this;
        }
    }
 ?>       