<?php
session_start();
require_once 'config.php';

// CREATE
if (isset($_POST['create'])) {
    $nomor_suratK = $_POST['nomor_suratK'];
    $tanggal_suratK = $_POST['tanggal_suratK'];
    $penerima_k = $_POST['penerima_k'];
    $perihal_k = $_POST['perihal_k'];
    $lampiran_k = $_POST['lampiran_k'];
    $tanggal_kirimk = $_POST['tanggal_kirimk'];
    $catatan_k = $_POST['catatan_k'];

    $sql = "INSERT INTO surat_keluar (nomor_suratK, tanggal_suratK, penerima_k, perihal_k, lampiran_k, tanggal_kirimk, catatan_k) VALUES ('$nomor_suratK', '$tanggal_suratK', '$penerima_k', '$perihal_k', '$lampiran_k', '$tanggal_kirimk', '$catatan_k')";
    $conn->query($sql);
}

// UPDATE
if (isset($_GET['edit'])) {
    $id_suratK = $_GET['edit'];
    $sql = "SELECT * FROM surat_keluar WHERE id_suratK=$id_suratK";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
}

if (isset($_POST['update'])) {
    $id_suratK = $_POST['id_suratK'];
    $nomor_suratK = $_POST['nomor_suratK'];
    $tanggal_suratK = $_POST['tanggal_suratK'];
    $penerima_k = $_POST['penerima_k'];
    $perihal_k = $_POST['perihal_k'];
    $lampiran_k = $_POST['lampiran_k'];
    $tanggal_kirimk = $_POST['tanggal_kirimk'];
    $catatan_k = $_POST['catatan_k'];

    $sql = "UPDATE surat_keluar SET nomor_suratK='$nomor_suratK', tanggal_suratK='$tanggal_suratK', penerima_k='$penerima_k', perihal_k='$perihal_k', lampiran_k='$lampiran_k', tanggal_kirimk='$tanggal_kirimk', catatan_k='$catatan_k' WHERE id_suratK=$id_suratK";
    $conn->query($sql);
    header("Location: $_SERVER[PHP_SELF]");
    exit();
}

// DELETE
if (isset($_GET['delete'])) {
    $id_suratK = $_GET['delete'];
    $sql = "DELETE FROM surat_keluar WHERE id_suratK=$id_suratK";
    $conn->query($sql);
    header("Location: $_SERVER[PHP_SELF]");
    exit();
}

// READ
$sql = "SELECT * FROM surat_keluar";
$result = $conn->query($sql);

$conn->close();
?>

<!DOCTYPE html>
<html>
<head>
    <title>CRUD Surat Keluar</title>
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
            max-width: 600px;
            margin: 0 auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        form input[type="text"],
        form input[type="date"],
        form textarea {
            width: calc(100% - 20px);
            padding: 8px;
            margin: 8px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
        form input[type="submit"],
        form a.button {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin-top: 10px;
            cursor: pointer;
            border-radius: 4px;
            margin-right: 10px;
        }
        form input[type="submit"]:hover,
        form a.button:hover {
            background-color: #45a049;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
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
        .actions a {
            padding: 5px 10px;
            background-color: #4CAF50;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            margin-right: 5px;
        }
        .actions a:hover {
            background-color: #45a049;
        }
        .logout {
            float: right;
            margin-top: -40px;
        }
    </style>
</head>
<body>
    <h1>CRUD Surat Keluar</h1>
    <a href="logout.php" class="logout">Logout</a>

    <form method="post" action="">
        <input type="hidden" name="id_suratK" value="<?php echo isset($row['id_suratK']) ? $row['id_suratK'] : ''; ?>">
        Nomor Surat: <input type="text" name="nomor_suratK" value="<?php echo isset($row['nomor_suratK']) ? $row['nomor_suratK'] : ''; ?>"><br>
        Tanggal Surat: <input type="date" name="tanggal_suratK" value="<?php echo isset($row['tanggal_suratK']) ? $row['tanggal_suratK'] : ''; ?>"><br>
        Penerima: <input type="text" name="penerima_k" value="<?php echo isset($row['penerima_k']) ? $row['penerima_k'] : ''; ?>"><br>
        Perihal: <input type="text" name="perihal_k" value="<?php echo isset($row['perihal_k']) ? $row['perihal_k'] : ''; ?>"><br>
        Lampiran: <input type="text" name="lampiran_k" value="<?php echo isset($row['lampiran_k']) ? $row['lampiran_k'] : ''; ?>"><br>
        Tanggal Kirim: <input type="date" name="tanggal_kirimk" value="<?php echo isset($row['tanggal_kirimk']) ? $row['tanggal_kirimk'] : ''; ?>"><br>
        Catatan: <textarea name="catatan_k"><?php echo isset($row['catatan_k']) ? $row['catatan_k'] : ''; ?></textarea><br>
        <?php if (isset($_GET['edit'])): ?>
            <input type="submit" name="update" value="Update">
            <a href="surat_keluar.php" class="button">Back to Create New</a>
        <?php else: ?>
            <input type="submit" name="create" value="Create">
        <?php endif; ?>
    </form>

    <h2>Daftar Surat Keluar</h2>
    <table>
        <tr>
            <th>ID</th>
            <th>Nomor Surat</th>
            <th>Tanggal Surat</th>
            <th>Penerima</th>
            <th>Perihal</th>
            <th>Lampiran</th>
            <th>Tanggal Kirim</th>
            <th>Catatan</th>
            <th>Aksi</th>
        </tr>
        <?php while ($row = $result->fetch_assoc()): ?>
        <tr>
            <td><?php echo $row['id_suratK']; ?></td>
            <td><?php echo $row['nomor_suratK']; ?></td>
            <td><?php echo $row['tanggal_suratK']; ?></td>
            <td><?php echo $row['penerima_k']; ?></td>
            <td><?php echo $row['perihal_k']; ?></td>
            <td><?php echo $row['lampiran_k']; ?></td>
            <td><?php echo $row['tanggal_kirimk']; ?></td>
            <td><?php echo $row['catatan_k']; ?></td>
            <td class="actions">
                <a href="?edit=<?php echo $row['id_suratK']; ?>" style="background-color: blue;">Edit</a>
                <a href="?delete=<?php echo $row['id_suratK']; ?>" onclick="return confirm('Anda yakin ingin menghapus surat ini?')" style="background-color: red;">Delete</a>
            </td>
        </tr>
        <?php endwhile; ?>
    </table>
    <div style="display: flex;">
        <div style="margin-top: 20px; margin-right: 20px;">
            <a href="surat_masuk.php" style="text-decoration: none; background-color: #4CAF50; color: white; padding: 10px 20px; border-radius: 4px;">Ke Surat Masuk</a>
        </div>
        <div style="margin-top: 20px;">
            <a href="disposisi.php" style="text-decoration: none; background-color: #4CAF50; color: white; padding: 10px 20px; border-radius: 4px;">Disposisi</a>
        </div>
    </div>
    
</body>
</html>
