<?php
session_start();
require_once 'config.php';

// Periksa peran pengguna
if (!isset($_SESSION['role']) || ($_SESSION['role'] != 'admin' && $_SESSION['role'] != 'manager')) {
   header("Location: index.php");
   exit();
}

if (isset($_POST['create'])) {
    $nama_pengguna = $_POST['nama_pengguna'];
    $kata_sandi = password_hash($_POST['kata_sandi'], PASSWORD_DEFAULT);
    $jabatan = $_POST['jabatan'];
    $departemen = $_POST['departemen'];
    $email = $_POST['email'];

    $sql = "INSERT INTO pengguna (nama_pengguna, kata_sandi, jabatan, departemen, email) VALUES ('$nama_pengguna', '$kata_sandi', '$jabatan', '$departemen', '$email')";
    $conn->query($sql);

    header("Location: pengguna.php");
    exit();
}

$conn->close();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Tambah Pengguna Baru</title>
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
        .note {
            background-color: #f2f2f2;
            border-left: 6px solid #2196F3;
            padding: 10px;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <h1>Tambah Pengguna Baru</h1>
    <div class="note">
        <p><strong>Note:</strong> Pengguna dengan <b>Jabatan</b> Admin atau Manager memiliki akses penuh.</p>
    </div>
    <form method="post" action="">
        Nama Pengguna: <input type="text" name="nama_pengguna"><br>
        Kata Sandi: <input type="password" name="kata_sandi"><br>
        Jabatan: <input type="text" name="jabatan"><br>
        Departemen: <input type="text" name="departemen"><br>
        Email: <input type="email" name="email"><br>
        <input type="submit" name="create" value="Create">
    </form>
    <a href="pengguna.php">Kembali ke Daftar Pengguna</a>
</body>
</html>
