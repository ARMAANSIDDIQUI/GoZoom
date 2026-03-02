<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: admin-login.php");
    exit();
}

// Include database connection file
include_once 'db_connection.php';

// Check if blog ID is provided in the URL
if (isset($_GET['id']) && !empty($_GET['id'])) {
    // Retrieve the blog ID from the URL parameters
    $blog_id = $_GET['id'];

    // Prepare a DELETE statement
    $sql = "DELETE FROM blogs WHERE id = :id";

    if ($stmt = $pdo->prepare($sql)) {
        // Bind the parameters
        $stmt->bindParam(":id", $blog_id, PDO::PARAM_INT);

        // Attempt to execute the prepared statement
        if ($stmt->execute()) {
            // Redirect to blog management page after successful deletion
            header("Location: blogs-management.php");
            exit();
        } else {
            // Error executing the statement
            echo "Error deleting blog.";
        }
    } else {
        // Error preparing the statement
        echo "Error preparing SQL statement.";
    }

    // Close connection
    unset($pdo);
} else {
    // Blog ID not provided in the URL
    echo "Blog ID not provided.";
}
?>
