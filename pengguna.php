<?php
session_start();
require_once 'config.php';

// Periksa peran pengguna
if (!isset($_SESSION['role']) || ($_SESSION['role'] != 'admin' && $_SESSION['role'] != 'manager')) {
    header("Location: index.php");
    exit();
}
 
// CREATE
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

// READ
$sql = "SELECT * FROM pengguna";
$result = $conn->query($sql);

// UPDATE
if (isset($_POST['update'])) {
    $id_pengguna = $_POST['id_pengguna'];
    $nama_pengguna = $_POST['nama_pengguna'];
    $kata_sandi = password_hash($_POST['kata_sandi'], PASSWORD_DEFAULT);
    $jabatan = $_POST['jabatan'];
    $departemen = $_POST['departemen'];
    $email = $_POST['email'];

    $sql = "UPDATE pengguna SET nama_pengguna='$nama_pengguna', kata_sandi='$kata_sandi', jabatan='$jabatan', departemen='$departemen', email='$email' WHERE id_pengguna=$id_pengguna";
    $conn->query($sql);
}

// DELETE
if (isset($_GET['delete'])) {
    $id_pengguna = $_GET['delete'];
    
    // Tampilkan konfirmasi penghapusan menggunakan JavaScript
    echo "<script>
            if (confirm('Anda yakin ingin menghapus pengguna ini?')) {
                window.location.href = 'pengguna.php?confirm_delete=$id_pengguna';
            } else {
                window.location.href = 'pengguna.php';
            }
          </script>";
}

// Proses konfirmasi penghapusan
if (isset($_GET['confirm_delete'])) {
    $id_pengguna = $_GET['confirm_delete'];
    $sql = "DELETE FROM pengguna WHERE id_pengguna=$id_pengguna";
    $conn->query($sql);
    header("Location: pengguna.php");
    exit();
}

$conn->close();
?>

<!DOCTYPE html>
<html>
<head>
    <title>CRUD Pengguna</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            padding: 20px;
        }
        h1 {
            text-align: center;
        }
        a {
            text-decoration: none;
            padding: 8px 16px;
            margin: 5px;
            background-color: #4CAF50;
            color: white;
            border-radius: 4px;
        }
        a:hover {
            background-color: #45a049;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #4CAF50;
            color: white;
        }
        tr:hover {
            background-color: #f2f2f2;
        }
        .actions {
            white-space: nowrap;
        }
    </style>
</head>
<body>
    <h1>CRUD Pengguna</h1>

    <div style="text-align: center;">
        <a href="create_user.php">Tambah Pengguna Baru</a>
        <a href="surat_masuk.php">Surat Masuk</a>
        <a href="surat_keluar.php">Surat Keluar</a>
        <a href="disposisi.php">Disposisi</a>
        <a href="logout.php" style="background-color: red;">Logout</a>
    </div>

    <h2>Daftar Pengguna</h2>
    <table>
        <tr>
            <th>ID</th>
            <th>Nama Pengguna</th>
            <th>Jabatan</th>
            <th>Departemen</th>
            <th>Email</th>
            <th class="actions">Aksi</th>
        </tr>
        <?php while ($row = $result->fetch_assoc()): ?>
        <tr>
            <td><?php echo $row['id_pengguna']; ?></td>
            <td><?php echo $row['nama_pengguna']; ?></td>
            <td><?php echo $row['jabatan']; ?></td>
            <td><?php echo $row['departemen']; ?></td>
            <td><?php echo $row['email']; ?></td>
            <td class="actions">
                <a href="edit_user.php?id=<?php echo $row['id_pengguna']; ?>" style="background-color: blue;">Edit</a>
                <a href="?delete=<?php echo $row['id_pengguna']; ?>" style="background-color: red;">Delete</a>
            </td>
        </tr>
        <?php endwhile; ?>
    </table>
</body>
</html>
