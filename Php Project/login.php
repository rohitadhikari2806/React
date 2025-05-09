<!doctype html>
<html lang="en">
    <head>
        <title>Title</title>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <!-- Bootstrap CSS v5.2.1 -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossorigin="anonymous"
        />
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <!-- place navbar here -->
        </header>
        <main>
            <div
                class="container"
            >
               <h2 class="text-center">Login form</h2>
               <div
               
                class="row justify-content-center align-items-center g-2"
               >
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                          <form action="" method = "post">
                            <div class="form-floating mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="username"
                                    id="username"
                                    placeholder=""
                                />
                                <label for="name">Username</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input
                                    type="password"
                                    class="form-control"
                                    name="password"
                                    id="password"
                                    placeholder=""
                                />
                                <label for="password">Password</label>
                            </div>
                                <center>
                            <button
                                type="submit"
                                class="btn btn-primary"

                            >
                                Button
                            </button>
                            
                            </center>
                            
                          </form> 
                       <center><p>Visited here first time then plz <a href="register.php">Register</a></p> </center> 
                        </div>
                    </div>
                    
                </div>
                
               </div>
               
            </div>
            
        </main>
        <footer>
            <!-- place footer here -->
        </footer>
        <!-- Bootstrap JavaScript Libraries -->
        <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
            integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
            crossorigin="anonymous"
        ></script>

        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
            integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
            crossorigin="anonymous"
        ></script>
    </body>
</html>







<?php
include "databaseCon.php";
session_start();



if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['username'];
    $pass = $_POST['password'];

    $sql = $conn->prepare("SELECT password FROM login_details WHERE name = ?");
    $sql->bind_param("s", $name);

    if ($sql->execute()) {
        $sql->bind_result($pass);
        if ($sql->fetch()) {
            if ($pass == $pass) {
                $_SESSION['username'] = $name;
                header('location:home.php');
                exit();
            } else {
                echo "enter correct password";
            }
        }
    } else {
        echo $sql->error;
    }
}
?>