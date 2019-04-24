<?php

    class Account extends CI_Model
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

        public function setcontact($contact_no)
        {
            $this->contact_no=$contact_no;
            return $this;
        }


        public function setemail($email_id)
        {
            $this->email_id=$email_id;
            return $this;
        }


        public function setpassword($password)
        {
            $this->password=$password;
            return $this;
        }

        public function setconfirmpassword($confirmpassword)
        {
            $this->confirmpassword=$confirmpassword;
            return $this;
        }
    }
?>