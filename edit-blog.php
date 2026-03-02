<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: admin-login.php");
    exit();
}

// Include database connection file
include_once 'db_connection.php';

// Initialize variables with empty values
$title = $introduction = $heading1 = $paragraph1 = $heading2 = "";
$paragraph2 = $heading3 = $paragraph3 = $heading4 = $paragraph4 = "";
$heading5 = $paragraph5 = $conclusion = $image = $blog_id = $old_image = "";
$title_err = $introduction_err = $heading1_err = $paragraph1_err = "";
$heading2_err = $paragraph2_err = $heading3_err = $paragraph3_err = "";
$heading4_err = $paragraph4_err = $heading5_err = $paragraph5_err = "";
$conclusion_err = $image_err = "";
$error_msg = "";

// Check if blog ID is provided in the URL
if (isset($_GET['id']) && !empty($_GET['id'])) {
    // Retrieve the blog ID from the URL parameters
    $blog_id = $_GET['id'];

    // Prepare a SELECT statement to fetch the blog data
    $sql = "SELECT * FROM blogs WHERE id = :id";
    if ($stmt = $pdo->prepare($sql)) {
        // Bind the parameters
        $stmt->bindParam(":id", $blog_id, PDO::PARAM_INT);

        // Attempt to execute the prepared statement
        if ($stmt->execute()) {
            // Check if the blog exists
            if ($stmt->rowCount() == 1) {
                // Fetch the result as an associative array
                $row = $stmt->fetch(PDO::FETCH_ASSOC);

                // Retrieve individual field values
                $title = $row['title'];
                $introduction = $row['introduction'];
                $heading1 = $row['heading1'];
                $paragraph1 = $row['paragraph1'];
                $heading2 = $row['heading2'];
                $paragraph2 = $row['paragraph2'];
                $heading3 = $row['heading3'];
                $paragraph3 = $row['paragraph3'];
                $heading4 = $row['heading4'];
                $paragraph4 = $row['paragraph4'];
                $heading5 = $row['heading5'];
                $paragraph5 = $row['paragraph5'];
                $conclusion = $row['conclusion'];
                $old_image = $row['image_filename']; // Assign existing image filename to old_image
            } else {
                // Blog not found
                $error_msg = "Blog not found.";
            }
        } else {
            // Error executing the statement
            $error_msg = "Error fetching blog data.";
        }
    } else {
        // Error preparing the statement
        $error_msg = "Error preparing SQL statement.";
    }

    // Close the prepared statement
    unset($stmt);
} else {
    // Blog ID not provided in the URL
    $error_msg = "Blog ID not provided.";
}

// Process form data when form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate blog ID
    $input_blog_id = trim($_POST["blog_id"]);
    if (empty($input_blog_id)) {
        $error_msg = "Blog ID is missing.";
    } else {
        $blog_id = $input_blog_id;
    }

    // Validate title
    $input_title = trim($_POST["title"]);
    if (empty($input_title)) {
        $title_err = "Please enter a title.";
    } else {
        $title = $input_title;
    }

    // Validate introduction
    $input_introduction = trim($_POST["introduction"]);
    if (empty($input_introduction)) {
        $introduction_err = "Please enter an introduction.";
    } else {
        $introduction = $input_introduction;
    }

    // Validate heading1
    $input_heading1 = trim($_POST["heading1"]);
    if (empty($input_heading1)) {
        $heading1_err = "Please enter a heading.";
    } else {
        $heading1 = $input_heading1;
    }

    // Validate paragraph1
    $input_paragraph1 = trim($_POST["paragraph1"]);
    if (empty($input_paragraph1)) {
        $paragraph1_err = "Please enter a paragraph.";
    } else {
        $paragraph1 = $input_paragraph1;
    }

    // Validate heading2
    $input_heading2 = trim($_POST["heading2"]);
    if (empty($input_heading2)) {
        $heading2_err = "Please enter a heading.";
    } else {
        $heading2 = $input_heading2;
    }

    // Validate paragraph2
    $input_paragraph2 = trim($_POST["paragraph2"]);
    if (empty($input_paragraph2)) {
        $paragraph2_err = "Please enter a paragraph.";
    } else {
        $paragraph2 = $input_paragraph2;
    }

    // Validate heading3
    $input_heading3 = trim($_POST["heading3"]);
    if (empty($input_heading3)) {
        $heading3_err = "Please enter a heading.";
    } else {
        $heading3 = $input_heading3;
    }

    // Validate paragraph3
    $input_paragraph3 = trim($_POST["paragraph3"]);
    if (empty($input_paragraph3)) {
        $paragraph3_err = "Please enter a paragraph.";
    } else {
        $paragraph3 = $input_paragraph3;
    }

    // Validate heading4
    $input_heading4 = trim($_POST["heading4"]);
    if (empty($input_heading4)) {
        $heading4_err = "Please enter a heading.";
    } else {
        $heading4 = $input_heading4;
    }

    // Validate paragraph4
    $input_paragraph4 = trim($_POST["paragraph4"]);
    if (empty($input_paragraph4)) {
        $paragraph4_err = "Please enter a paragraph.";
    } else {
        $paragraph4 = $input_paragraph4;
    }

    // Validate heading5
    $input_heading5 = trim($_POST["heading5"]);
    if (empty($input_heading5)) {
        $heading5_err = "Please enter a heading.";
    } else {
        $heading5 = $input_heading5;
    }

    // Validate paragraph5
    $input_paragraph5 = trim($_POST["paragraph5"]);
    if (empty($input_paragraph5)) {
        $paragraph5_err = "Please enter a paragraph.";
    } else {
        $paragraph5 = $input_paragraph5;
    }

    // Validate conclusion
    $input_conclusion = trim($_POST["conclusion"]);
    if (empty($input_conclusion)) {
        $conclusion_err = "Please enter a conclusion.";
    } else {
        $conclusion = $input_conclusion;
    }

    // Check if file is uploaded
    if (!empty($_FILES["image"]["name"])) {
        $target_dir = "uploads/";
        $target_file = $target_dir . basename($_FILES["image"]["name"]);
        $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
        $check = getimagesize($_FILES["image"]["tmp_name"]);
        if ($check !== false) {
            // Check file size
            if ($_FILES["image"]["size"] > 500000) {
                $image_err = "Sorry, your file is too large.";
            } else {
                // Upload file
                if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
                    $image_filename = basename($_FILES["image"]["name"]);
                    // Remove old image if it exists
                    if (!empty($old_image) && file_exists("uploads/" . $old_image)) {
                        unlink("uploads/" . $old_image);
                    }
                } else {
                    $image_err = "Sorry, there was an error uploading your file.";
                }
            }
        } else {
            $image_err = "File is not an image.";
        }
    } else {
        // If no new image provided, keep the old image
        $image_filename = $old_image;
    }

    // Check input errors before updating the database
    if (empty($title_err) && empty($introduction_err) && empty($heading1_err) &&
        empty($paragraph1_err) && empty($heading2_err) && empty($paragraph2_err) && empty($heading3_err) &&
        empty($paragraph3_err) && empty($heading4_err) && empty($paragraph4_err) && empty($heading5_err) &&
        empty($paragraph5_err) && empty($conclusion_err) && empty($image_err)) {
        // Prepare an UPDATE statement
        $sql = "UPDATE blogs SET title=:title, introduction=:introduction, heading1=:heading1, 
                paragraph1=:paragraph1, heading2=:heading2, paragraph2=:paragraph2, heading3=:heading3, 
                paragraph3=:paragraph3, heading4=:heading4, paragraph4=:paragraph4, heading5=:heading5, 
                paragraph5=:paragraph5, conclusion=:conclusion";

        // Update image filename only if a new image is uploaded
        if (!empty($image_filename)) {
            $sql .= ", image_filename=:image_filename";
        }

        $sql .= " WHERE id=:id";

        if ($stmt = $pdo->prepare($sql)) {
            // Bind variables to the prepared statement as parameters
            $stmt->bindParam(":title", $title);
            $stmt->bindParam(":introduction", $introduction);
            $stmt->bindParam(":heading1", $heading1);
            $stmt->bindParam(":paragraph1", $paragraph1);
            $stmt->bindParam(":heading2", $heading2);
            $stmt->bindParam(":paragraph2", $paragraph2);
            $stmt->bindParam(":heading3", $heading3);
            $stmt->bindParam(":paragraph3", $paragraph3);
            $stmt->bindParam(":heading4", $heading4);
            $stmt->bindParam(":paragraph4", $paragraph4);
            $stmt->bindParam(":heading5", $heading5);
            $stmt->bindParam(":paragraph5", $paragraph5);
            $stmt->bindParam(":conclusion", $conclusion);
            if (!empty($image_filename)) {
                $stmt->bindParam(":image_filename", $image_filename);
            }
            $stmt->bindParam(":id", $blog_id);

            // Attempt to execute the prepared statement
            if ($stmt->execute()) {
                // Redirect to blog management page
                header("Location: blogs-management.php");
                exit();
            } else {
                $error_msg = "Something went wrong. Please try again later.";
            }
        }

        // Close statement
        unset($stmt);
    }

    // Close connection
    unset($pdo);
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Blog</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h2 class="text-center">Edit Blog</h2>
                    </div>
                    <div class="card-body">
                        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post" enctype="multipart/form-data">
                            <input type="hidden" name="blog_id" value="<?php echo $blog_id; ?>">
                            <div class="form-group">
                                <label>Title</label>
                                <input type="text" name="title" class="form-control" value="<?php echo $title; ?>">
                                <span class="text-danger"><?php echo $title_err; ?></span>
                            </div>
                            <div class="form-group">
                                <label>Introduction</label>
                                <textarea name="introduction" class="form-control"><?php echo $introduction; ?></textarea>
                                <span class="text-danger"><?php echo $introduction_err; ?></span>
                            </div>
                            <div class="form-group">
                                <label>Heading 1</label>
                                <input type="text" name="heading1" class="form-control" value="<?php echo $heading1; ?>">
                                <span class="text-danger"><?php echo $heading1_err; ?></span>
                            </div>
                            <div class="form-group">
                                <label>Paragraph 1</label>
                                <textarea name="paragraph1" class="form-control"><?php echo $paragraph1; ?></textarea>
                                <span class="text-danger"><?php echo $paragraph1_err; ?></span>
                            </div>
                            <div class="form-group">
                                <label>Heading 2</label>
                                <input type="text" name="heading2" class="form-control" value="<?php echo $heading2; ?>">
                                <span class="text-danger"><?php echo $heading2_err; ?></span>
                            </div>
                            <div class="form-group">
                                <label>Paragraph 2</label>
                                <textarea name="paragraph2" class="form-control"><?php echo $paragraph2; ?></textarea>
                                <span class="text-danger"><?php echo $paragraph2_err; ?></span>
                            </div>
                            <div class="form-group">
                                <label>Heading 3</label>
                                <input type="text" name="heading3" class="form-control" value="<?php echo $heading3; ?>">
                                <span class="text-danger"><?php echo $heading3_err; ?></span>
                            </div>
                            <div class="form-group">
                                <label>Paragraph 3</label>
                                <textarea name="paragraph3" class="form-control"><?php echo $paragraph3; ?></textarea>
                                <span class="text-danger"><?php echo $paragraph3_err; ?></span>
                            </div>
                            <div class="form-group">
                                <label>Heading 4</label>
                                <input type="text" name="heading4" class="form-control" value="<?php echo $heading4; ?>">
                                <span class="text-danger"><?php echo $heading4_err; ?></span>
                            </div>
                            <div class="form-group">
                                <label>Paragraph 4</label>
                                <textarea name="paragraph4" class="form-control"><?php echo $paragraph4; ?></textarea>
                                <span class="text-danger"><?php echo $paragraph4_err; ?></span>
                            </div>
                            <div class="form-group">
                                <label>Heading 5</label>
                                <input type="text" name="heading5" class="form-control" value="<?php echo $heading5; ?>">
                                <span class="text-danger"><?php echo $heading5_err; ?></span>
                            </div>
                            <div class="form-group">
                                <label>Paragraph 5</label>
                                <textarea name="paragraph5" class="form-control"><?php echo $paragraph5; ?></textarea>
                                <span class="text-danger"><?php echo $paragraph5_err; ?></span>
                            </div>
                            <div class="form-group">
                                <label>Conclusion</label>
                                <textarea name="conclusion" class="form-control"><?php echo $conclusion; ?></textarea>
                                <span class="text-danger"><?php echo $conclusion_err; ?></span>
                            </div>
                            <div class="form-group">
                                <label>Image</label>
                                <input type="file" name="image" class="form-control-file">
                                <span class="text-danger"><?php echo $image_err; ?></span>
                            </div>
                            <div class="text-center">
                                <input type="submit" class="btn btn-primary" value="Submit">
                                <a href="blog-management.php" class="btn btn-secondary ml-2">Cancel</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
