<?php

namespace Entity;
use Doctrine\Common\Collections\ArrayCollection;

    class Users
    {
        /**
        * @Id @GeneratedValue @Column(type="integer")
        * @var string
        */
        protected $firstname;
        protected $address;
        protected $contact;
        protected $email;
        protected $username;
        protected $password;
        protected $confirmpassword;

        /**
         * @OneToMany(targetEntity="Labels",mappedBy="luid" )
         */
        protected $label_list;

        public function __construct()
        {
            //$this->user_id = new ArrayCollection;
            $this->label_list = new ArrayCollection();
        }

        public function setFirstname($firstname)
        {
            $this->firstname = $firstname;
            return $this;
        }

        public function setaddress($address)
        {
            $this->address=$address;
            return $this;
        }
    }
?>