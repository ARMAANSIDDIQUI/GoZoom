<?php
session_start();
if(!isset($_SESSION['username'])) {
    header("Location: admin-login.php");
    exit();
}

// Include database connection file
include_once 'db_connection.php';

// Fetch all blogs from the database
$sql = "SELECT * FROM blogs";
$stmt = $pdo->query($sql);
$blogs = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Management</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h2 class="text-center">Blog Management</h2>
                    </div>
                    <div class="card-body">
                        <div class="text-center mb-3">
                            <a href="add-blog.php" class="btn btn-primary">Add New Blog</a>
                        </div>
                        <ul class="list-group">
                            <?php foreach ($blogs as $blog): ?>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <?php echo $blog['title']; ?>
                                    <div class="btn-group" role="group">
                                        <a href="edit-blog.php?id=<?php echo $blog['id']; ?>" class="btn btn-info btn-sm">Edit</a>
                                        <a href="delete-blog.php?id=<?php echo $blog['id']; ?>" class="btn btn-danger btn-sm">Delete</a>
                                    </div>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                        <div class="text-center mb-3">
                            <a href="dashboard.php" class="btn btn-primary">Go to Dashboard</a>
                        </div>
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
