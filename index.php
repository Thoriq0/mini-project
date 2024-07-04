<?php
session_start();
require_once 'config.php';

$error_message = '';

// Fungsi untuk menambahkan user admin jika belum ada
function addAdminUser() {
    global $conn;

    // Cari ID terakhir yang ada di tabel pengguna
    $sql_last_id = "SELECT MAX(id_pengguna) AS max_id FROM pengguna";
    $result_last_id = $conn->query($sql_last_id);

    if ($result_last_id->num_rows > 0) {
        $row = $result_last_id->fetch_assoc();
        $next_id = $row['max_id'] + 1;
    } else {
        $next_id = 1; // Jika tabel kosong, mulai dari ID 1
    }

    $username = 'admin';
    $passwordHash = password_hash('admin', PASSWORD_DEFAULT); // Password default: admin

    $sql = "INSERT INTO pengguna (id_pengguna, nama_pengguna, kata_sandi, jabatan) 
            VALUES ('$next_id', '$username', '$passwordHash', 'admin')";
    
    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        return false;
    }
}

// Cek apakah user admin sudah terdaftar
$sql_check_admin = "SELECT * FROM pengguna WHERE nama_pengguna='admin'";
$result_check_admin = $conn->query($sql_check_admin);

if ($result_check_admin->num_rows == 0) {
    // Jika admin belum ada, tampilkan tombol "Daftar"
    $show_register_button = true;

    if (isset($_POST['daftar'])) {
        // Memproses pendaftaran user admin
        if (addAdminUser()) {
            echo "<script>alert('User admin telah berhasil didaftarkan dengan username: admin dan password: admin. Silakan login dengan data ini.');</script>";
        } else {
            $error_message = "Gagal menambahkan user admin!";
        }
    }
} else {
    // Jika admin sudah terdaftar, sembunyikan tombol "Daftar"
    $show_register_button = false;
}

if (isset($_POST['login'])) {
   $nama_pengguna = $_POST['nama_pengguna'];
   $kata_sandi = $_POST['kata_sandi'];

   $sql = "SELECT * FROM pengguna WHERE nama_pengguna='$nama_pengguna'";
   $result = $conn->query($sql);

   if ($result->num_rows > 0) {
       $row = $result->fetch_assoc();

       if (password_verify($kata_sandi, $row['kata_sandi'])) {
           $_SESSION['nama_pengguna'] = $row['nama_pengguna'];
           $_SESSION['role'] = $row['jabatan'];

           // Cek peran pengguna untuk menentukan halaman tujuan
           if ($_SESSION['role'] == 'admin' || $_SESSION['role'] == 'manager') {
               header("Location: pengguna.php");
               exit();
           } else {
               header("Location: surat_masuk.php");
               exit();
           }
       } else {
           $error_message = "Kata sandi salah!";
       }
   } else {
       $error_message = "Nama pengguna tidak ditemukan!";
   }
}

$conn->close();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .error-message {
            color: red;
            text-align: center;
            margin-bottom: 20px;
        }
        .login-container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            width: 300px;
        }
        .login-container h1 {
            text-align: center;
        }
        .login-container form {
            display: flex;
            flex-direction: column;
        }
        .login-container input[type="text"],
        .login-container input[type="password"],
        .login-container input[type="submit"] {
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        .login-container input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
        }
        .login-container input[type="submit"]:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    
    <div class="login-container">
        <h1>Login</h1>
        <div class="error-message"><?php echo $error_message; ?></div>
        <form method="post" action="">
            Nama Pengguna: <input type="text" name="nama_pengguna"><br>
            Kata Sandi: <input type="password" name="kata_sandi"><br>
            <input type="submit" name="login" value="Login">
        </form>
        <?php if ($show_register_button): ?>
        <form method="post" action="">
            <input type="submit" name="daftar" value="Daftar">
        </form>
        <?php endif; ?>
    </div>
</body>
</html>
