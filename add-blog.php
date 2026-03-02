<?php
session_start();
$blog_title = $blog_introduction = $blog_heading1 = $blog_paragraph1 = $blog_heading2 = $blog_paragraph2 = $blog_heading3 = $blog_paragraph3 = $blog_heading4 = $blog_paragraph4 = $blog_heading5 = $blog_paragraph5 = $blog_conclusion = "";
$blog_title_err = $blog_introduction_err = $blog_heading1_err = $blog_paragraph1_err = $blog_heading2_err = $blog_paragraph2_err = $blog_heading3_err = $blog_paragraph3_err = $blog_heading4_err = $blog_paragraph4_err = $blog_heading5_err = $blog_paragraph5_err = $blog_conclusion_err = $blog_image_err = "";

if(!isset($_SESSION['username'])) {
    header("Location: admin-login.php");
    exit();
}

// Include database connection file
include_once 'db_connection.php';

// Processing form data when form is submitted
if($_SERVER["REQUEST_METHOD"] == "POST"){
    // Validate blog title
    if(empty(trim($_POST["blog_title"]))){
        $blog_title_err = "Please enter blog title.";
    } else{
        $blog_title = trim($_POST["blog_title"]);
    }

    // Validate blog introduction
    if(empty(trim($_POST["blog_introduction"]))){
        $blog_introduction_err = "Please enter blog introduction.";
    } else{
        $blog_introduction = trim($_POST["blog_introduction"]);
    }

    // Validate blog heading 1
    if(empty(trim($_POST["blog_heading1"]))){
        $blog_heading1_err = "Please enter heading 1.";
    } else{
        $blog_heading1 = trim($_POST["blog_heading1"]);
    }

    // Validate blog paragraph 1
    if(empty(trim($_POST["blog_paragraph1"]))){
        $blog_paragraph1_err = "Please enter paragraph 1.";
    } else{
        $blog_paragraph1 = trim($_POST["blog_paragraph1"]);
    }

    // Validate blog heading 2
    if(empty(trim($_POST["blog_heading2"]))){
        $blog_heading2_err = "Please enter heading 2.";
    } else{
        $blog_heading2 = trim($_POST["blog_heading2"]);
    }

    // Validate blog paragraph 2
    if(empty(trim($_POST["blog_paragraph2"]))){
        $blog_paragraph2_err = "Please enter paragraph 2.";
    } else{
        $blog_paragraph2 = trim($_POST["blog_paragraph2"]);
    }

    // Validate blog heading 3
    if(empty(trim($_POST["blog_heading3"]))){
        $blog_heading3_err = "Please enter heading 3.";
    } else{
        $blog_heading3 = trim($_POST["blog_heading3"]);
    }

    // Validate blog paragraph 3
    if(empty(trim($_POST["blog_paragraph3"]))){
        $blog_paragraph3_err = "Please enter paragraph 3.";
    } else{
        $blog_paragraph3 = trim($_POST["blog_paragraph3"]);
    }

    // Validate blog heading 4
    if(empty(trim($_POST["blog_heading4"]))){
        $blog_heading4_err = "Please enter heading 4.";
    } else{
        $blog_heading4 = trim($_POST["blog_heading4"]);
    }

    // Validate blog paragraph 4
    if(empty(trim($_POST["blog_paragraph4"]))){
        $blog_paragraph4_err = "Please enter paragraph 4.";
    } else{
        $blog_paragraph4 = trim($_POST["blog_paragraph4"]);
    }

    // Validate blog heading 5
    if(empty(trim($_POST["blog_heading5"]))){
        $blog_heading5_err = "Please enter heading 5.";
    } else{
        $blog_heading5 = trim($_POST["blog_heading5"]);
    }

    // Validate blog paragraph 5
    if(empty(trim($_POST["blog_paragraph5"]))){
        $blog_paragraph5_err = "Please enter paragraph 5.";
    } else{
        $blog_paragraph5 = trim($_POST["blog_paragraph5"]);
    }

    // Validate blog conclusion
    if(empty(trim($_POST["blog_conclusion"]))){
        $blog_conclusion_err = "Please enter blog conclusion.";
    } else{
        $blog_conclusion = trim($_POST["blog_conclusion"]);
    }

    // Check if image file is selected
    if(empty($_FILES["blog_image"]["name"])){
        $blog_image_err = "Please select an image.";
    } else{
        // Generate a random 4-digit number
        $random_number = rand(1000, 9999);
        // Get the original file name
        $original_name = $_FILES["blog_image"]["name"];
        // Extract file extension
        $file_extension = pathinfo($original_name, PATHINFO_EXTENSION);
        // Generate unique file name with prefix
        $blog_image = $random_number . '_' . $original_name;

        // Target directory to store the uploaded files
        $target_dir = "uploads/";
        $target_file = $target_dir . $blog_image;

        // Check if file already exists
        if (file_exists($target_file)) {
            $blog_image_err = "Sorry, file already exists.";
        }

        // Check file size
        if ($_FILES["blog_image"]["size"] > 500000) {
            $blog_image_err = "Sorry, your file is too large.";
        }

        // Allow certain file formats
        $allowed_extensions = array("jpg", "jpeg", "png", "gif");
        if (!in_array($file_extension, $allowed_extensions)) {
            $blog_image_err = "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
        }

        // Check if there are no errors
        if (empty($blog_image_err)) {
            // Attempt to move the uploaded file to the target directory
            if (move_uploaded_file($_FILES["blog_image"]["tmp_name"], $target_file)) {
                // Image uploaded successfully, continue with inserting into database
            } else {
                $blog_image_err = "Sorry, there was an error uploading your file.";
            }
        }
    }

    // Check input errors before inserting into database
    if(empty($blog_title_err) && empty($blog_introduction_err) && empty($blog_heading1_err) && empty($blog_paragraph1_err) && empty($blog_heading2_err) && empty($blog_paragraph2_err) && empty($blog_heading3_err) && empty($blog_paragraph3_err) && empty($blog_heading4_err) && empty($blog_paragraph4_err) && empty($blog_heading5_err) && empty($blog_paragraph5_err) && empty($blog_conclusion_err) && empty($blog_image_err)){
        try {
            // Prepare an insert statement
            $sql = "INSERT INTO blogs (title, introduction, heading1, paragraph1, heading2, paragraph2, heading3, paragraph3, heading4, paragraph4, heading5, paragraph5, conclusion, image_filename, date) VALUES (:title, :introduction, :heading1, :paragraph1, :heading2, :paragraph2, :heading3, :paragraph3, :heading4, :paragraph4, :heading5, :paragraph5, :conclusion, :image_filename, :date)";
             
            // Prepare the SQL statement
            $stmt = $pdo->prepare($sql);

            // Bind parameters
            $stmt->bindParam(':title', $blog_title);
            $stmt->bindParam(':introduction', $blog_introduction);
            $stmt->bindParam(':heading1', $blog_heading1);
            $stmt->bindParam(':paragraph1', $blog_paragraph1);
            $stmt->bindParam(':heading2', $blog_heading2);
            $stmt->bindParam(':paragraph2', $blog_paragraph2);
            $stmt->bindParam(':heading3', $blog_heading3);
            $stmt->bindParam(':paragraph3', $blog_paragraph3);
            $stmt->bindParam(':heading4', $blog_heading4);
            $stmt->bindParam(':paragraph4', $blog_paragraph4);
            $stmt->bindParam(':heading5', $blog_heading5);
            $stmt->bindParam(':paragraph5', $blog_paragraph5);
            $stmt->bindParam(':conclusion', $blog_conclusion);
            $stmt->bindParam(':image_filename', $blog_image);

            // Bind current date
            $current_date = date("Y-m-d");
            $stmt->bindParam(':date', $current_date);

            // Attempt to execute the prepared statement
            if($stmt->execute()){
                // Redirect to dashboard
                header("location: dashboard.php");
                exit();
            } else{
                echo "Something went wrong. Please try again later.";
            }
        } catch(PDOException $e) {
            // If execution fails, display error message
            die("Error: " . $e->getMessage());
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Blog</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    <h2 class="text-center">Add Blog</h2>
                </div>
                <div class="card-body">
                    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post" enctype="multipart/form-data">
                        <div class="form-group <?php echo (!empty($blog_title_err)) ? 'has-error' : ''; ?>">
                            <label>Title</label>
                            <input type="text" name="blog_title" class="form-control" value="<?php echo $blog_title; ?>">
                            <span class="text-danger"><?php echo $blog_title_err; ?></span>
                        </div>
                        <div class="form-group <?php echo (!empty($blog_introduction_err)) ? 'has-error' : ''; ?>">
                            <label>Introduction</label>
                            <textarea name="blog_introduction" class="form-control"><?php echo $blog_introduction; ?></textarea>
                            <span class="text-danger"><?php echo $blog_introduction_err; ?></span>
                        </div>

                        <!-- Heading and paragraph fields for each section -->
                        <?php for ($i = 1; $i <= 5; $i++): ?>
                            <div class="form-group">
                                <label>Heading <?php echo $i; ?></label>
                                <input type="text" name="blog_heading<?php echo $i; ?>" class="form-control">
                                <span class="text-danger"><?php echo ${'blog_heading'.$i.'_err'}; ?></span>
                            </div>
                            <div class="form-group">
                                <label>Paragraph <?php echo $i; ?></label>
                                <textarea name="blog_paragraph<?php echo $i; ?>" class="form-control"></textarea>
                                <span class="text-danger"><?php echo ${'blog_paragraph'.$i.'_err'}; ?></span>
                            </div>
                        <?php endfor; ?>

                        <div class="form-group <?php echo (!empty($blog_conclusion_err)) ? 'has-error' : ''; ?>">
                            <label>Conclusion</label>
                            <textarea name="blog_conclusion" class="form-control"><?php echo $blog_conclusion; ?></textarea>
                            <span class="text-danger"><?php echo $blog_conclusion_err; ?></span>
                        </div>
                        <div class="form-group <?php echo (!empty($blog_image_err)) ? 'has-error' : ''; ?>">
                            <label>Image</label>
                            <input type="file" name="blog_image" class="form-control">
                            <span class="text-danger"><?php echo $blog_image_err; ?></span>
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btn btn-primary" value="Submit">
                            <a href="dashboard.php" class="btn btn-secondary">Cancel</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

    <!-- Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
