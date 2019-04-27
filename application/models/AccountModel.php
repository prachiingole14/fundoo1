<?php

 // defined('BASEPATH') OR exit('No direct script access allowed');
 // include '/var/www/html/CodeIgniter-3.1.10/application/controllers/AccountController.php';
    if (! defined('BASEPATH')) exit('No direct script access allowed');

    class AccountModel extends CI_Model
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
            parent::__construct();
            //$this->user_id = new ArrayCollection;
           // $this->label_list = new ArrayCollection();
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



    public function execute($email,$data,$password)
    {
        $validation_error = '';
        //query for selecting the row of that particular email
        $query = "SELECT * FROM Registration WHERE email_id = '$email'";
        //to get the pdo object to call pdo methods
        $statement = $this->db->conn_id->prepare($query);
        //calling pdo execute method
        if($statement->execute($data))
        {
            //calling pdo fetchAll method
            $result = $statement->fetchAll();
            //calling pdo rowCount method
            if($statement->rowCount() > 0)
            {
                //looping over the row and verifying password
                foreach($result as $row)
                {
                    if(password_verify($password, $row["password"]))
                    {
                        $_SESSION["name"] = $row["name"];
                    }
                    else
                    {
                        $validation_error = 'Wrong Password';
                    }
                }
            }
            else
            {
                //if rowCount not greater than zero means wrong email
                $validation_error = 'Wrong Email';
            }
        }
        return $validation_error;
    }

    }
?>