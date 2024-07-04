<?php
session_start();
require_once 'config.php';

// Periksa peran pengguna
if (!isset($_SESSION['role']) || ($_SESSION['role'] != 'admin' && $_SESSION['role'] != 'manager')) {
   header("Location: index.php");
   exit();
}

if (isset($_GET['id'])) {
    $id_pengguna = $_GET['id'];
    $sql = "SELECT * FROM pengguna WHERE id_pengguna=$id_pengguna";
    $result = $conn->query($sql);
    $user = $result->fetch_assoc();
}

if (isset($_POST['update'])) {
    $id_pengguna = $_POST['id_pengguna'];
    $nama_pengguna = $_POST['nama_pengguna'];
    $kata_sandi = password_hash($_POST['kata_sandi'], PASSWORD_DEFAULT);
    $jabatan = $_POST['jabatan'];
    $departemen = $_POST['departemen'];
    $email = $_POST['email'];

    $sql = "UPDATE pengguna SET nama_pengguna='$nama_pengguna', kata_sandi='$kata_sandi', jabatan='$jabatan', departemen='$departemen', email='$email' WHERE id_pengguna=$id_pengguna";
    $conn->query($sql);

    header("Location: pengguna.php");
    exit();
}

$conn->close();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Edit Pengguna</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            padding: 20px;
        }
        h1 {
            text-align: center;
        }
        form {
            max-width: 400px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        input[type="text"],
        input[type="password"],
        input[type="email"],
        input[type="submit"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box; /* Untuk memasukkan padding dan border ke dalam lebar */
        }
        input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
        }
        input[type="submit"]:hover {
            background-color: #45a049;
        }
        a {
            display: block;
            text-align: center;
            margin-top: 10px;
            text-decoration: none;
            color: #333;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <h1>Edit Pengguna</h1>
    <form method="post" action="">
        <input type="hidden" name="id_pengguna" value="<?php echo $user['id_pengguna']; ?>">
        Nama Pengguna: <input type="text" name="nama_pengguna" value="<?php echo $user['nama_pengguna']; ?>"><br>
        Kata Sandi: <input type="password" name="kata_sandi"><br>
        Jabatan: <input type="text" name="jabatan" value="<?php echo $user['jabatan']; ?>"><br>
        Departemen: <input type="text" name="departemen" value="<?php echo $user['departemen']; ?>"><br>
        Email: <input type="email" name="email" value="<?php echo $user['email']; ?>"><br>
        <input type="submit" name="update" value="Update">
    </form>
    <a href="pengguna.php">Kembali ke Daftar Pengguna</a>
</body>
</html>
