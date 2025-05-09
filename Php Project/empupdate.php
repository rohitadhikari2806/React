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
               <h2 class="text-center">Update Form</h2>
               <div
                class="row justify-content-center align-items-center g-2"
               >
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                          <form action="" method = "post">
                            
                            <div class="form-floating mb-3">
                                <input
                                    type="number"
                                    class="form-control"
                                    name="id"
                                    id="id"
                                    placeholder=""
                                />
                                <label for="id">ID</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="name"
                                    id="name"
                                    placeholder=""
                                />
                                <label for="name">Name</label>
                            </div>

                            
                            
                            <input type="submit">
                          </form>  
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

<center>
<?php

include 'databaseCon.php';
session_start();
if (!isset($_SESSION["username"])) {
    header("Location: login.php"); 
    exit();
}
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];
    $name = $_POST['name'];

    $sql = $conn->prepare("UPDATE empinfo SET name=? WHERE id=?");

    $sql->bind_param("si",$name,$id);
    
    if ($sql->execute()) {
        echo "Data updated"."<br>";
        header("Location:home.php");
    } else {
        echo "Error". $sql->error;
    }

    $sql->close();
    $conn->close();
    
} 

?>
</center>