<?php
session_start();
require_once 'config.php';

// Ambil daftar ID surat masuk dari tabel surat_masuk
$sqlSuratMasuk = "SELECT id_suratMasuk FROM surat_masuk";
$resultSuratMasuk = $conn->query($sqlSuratMasuk);

// Jika tombol Edit ditekan, mode form menjadi Update
if (isset($_GET['edit'])) {
    $id_disposisi_edit = $_GET['edit'];
    $sql_edit = "SELECT * FROM disposisi WHERE id_disposisi='$id_disposisi_edit'";
    $result_edit = $conn->query($sql_edit);
    if ($result_edit->num_rows > 0) {
        $row_edit = $result_edit->fetch_assoc();
        $id_suratMasuk_edit = $row_edit['id_suratMasuk'];
        $tanggal_disposisi_edit = $row_edit['tanggal_disposisi'];
        $tujuan_disposisi_edit = $row_edit['tujuan_disposisi'];
        $isi_disposisi_edit = $row_edit['isi_disposisi'];
        $catatan_edit = $row_edit['catatan'];
    }
}

// CREATE
if (isset($_POST['create'])) {
    $id_suratMasuk = $_POST['id_suratMasuk'];
    $tanggal_disposisi = $_POST['tanggal_disposisi'];
    $tujuan_disposisi = $_POST['tujuan_disposisi'];
    $isi_disposisi = $_POST['isi_disposisi'];
    $catatan = $_POST['catatan'];

    $sql = "INSERT INTO disposisi (id_suratMasuk, tanggal_disposisi, tujuan_disposisi, isi_disposisi, catatan) 
            VALUES ('$id_suratMasuk', '$tanggal_disposisi', '$tujuan_disposisi', '$isi_disposisi', '$catatan')";
    $conn->query($sql);
}

// UPDATE
if (isset($_POST['update'])) {
    $id_disposisi = $_POST['id_disposisi'];
    $id_suratMasuk = $_POST['id_suratMasuk'];
    $tanggal_disposisi = $_POST['tanggal_disposisi'];
    $tujuan_disposisi = $_POST['tujuan_disposisi'];
    $isi_disposisi = $_POST['isi_disposisi'];
    $catatan = $_POST['catatan'];

    $sql = "UPDATE disposisi SET id_suratMasuk='$id_suratMasuk', tanggal_disposisi='$tanggal_disposisi', 
            tujuan_disposisi='$tujuan_disposisi', isi_disposisi='$isi_disposisi', catatan='$catatan' 
            WHERE id_disposisi='$id_disposisi'";
    $conn->query($sql);
}

// DELETE
if (isset($_POST['delete'])) {
    $id_disposisi = $_POST['id_disposisi'];

    $sql = "DELETE FROM disposisi WHERE id_disposisi='$id_disposisi'";
    $conn->query($sql);
}

// READ
$sql = "SELECT * FROM disposisi";
$result = $conn->query($sql);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manajemen Disposisi</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            padding: 20px;
        }
        h1, h2 {
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
        form a.button:hover {
            background-color: #45a049;
        }
        form input[type="text"],
        form input[type="date"],
        form textarea,
        form select {
            width: calc(100% - 20px);
            padding: 8px;
            margin: 8px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
        form input[type="submit"],
        form button {
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
        form button:hover {
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
        .actions a, .actions button {
            padding: 5px 10px;
            border-radius: 4px;
            margin-right: 5px;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            text-align: center;
            font-size: 14px;
        }
        .actions a {
            background-color: #4CAF50;
            color: white;
            border: none;
        }
        .actions button {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
        }
        .actions a:hover, .actions button:hover {
            background-color: #45a049;
        }
        .actions button.delete-btn {
            background-color: red;
        }
        .logout {
            float: right;
            margin-top: -40px;
        }
    </style>
</head>
<body>
    <h1>Manajemen Disposisi</h1>
    <a href="logout.php" class="logout">Logout</a>

    <?php if (!isset($_GET['edit'])): ?>
    <form action="disposisi.php" method="POST">
        <label for="id_suratMasuk">ID Surat Masuk:</label>
        <select name="id_suratMasuk" id="id_suratMasuk" required>
            <?php while ($row = $resultSuratMasuk->fetch_assoc()): ?>
                <option value="<?php echo $row['id_suratMasuk']; ?>"><?php echo $row['id_suratMasuk']; ?></option>
            <?php endwhile; ?>
        </select><br>
        <label for="tanggal_disposisi">Tanggal Disposisi:</label>
        <input type="date" name="tanggal_disposisi" id="tanggal_disposisi" required><br>
        <label for="tujuan_disposisi">Tujuan Disposisi:</label>
        <input type="text" name="tujuan_disposisi" id="tujuan_disposisi" required><br>
        <label for="isi_disposisi">Isi Disposisi:</label>
        <textarea name="isi_disposisi" id="isi_disposisi" required></textarea><br>
        <label for="catatan">Catatan:</label>
        <textarea name="catatan" id="catatan" required></textarea><br>
        <button type="submit" name="create">Create</button>
    </form>
    <?php endif; ?>

    <?php if (isset($_GET['edit'])): ?>
    <h2>Edit Disposisi</h2>
    <form action="disposisi.php" method="POST">
        <input type="hidden" name="id_disposisi" value="<?php echo $id_disposisi_edit; ?>">
        <label for="id_suratMasuk">ID Surat Masuk:</label>
        <select name="id_suratMasuk" id="id_suratMasuk" required>
            <?php while ($row = $resultSuratMasuk->fetch_assoc()): ?>
                <option value="<?php echo $row['id_suratMasuk']; ?>" <?php if ($row['id_suratMasuk'] == $id_suratMasuk_edit) echo 'selected'; ?>><?php echo $row['id_suratMasuk']; ?></option>
            <?php endwhile; ?>
        </select><br>
        <label for="tanggal_disposisi">Tanggal Disposisi:</label>
        <input type="date" name="tanggal_disposisi" id="tanggal_disposisi" value="<?php echo $tanggal_disposisi_edit; ?>" required><br>
        <label for="tujuan_disposisi">Tujuan Disposisi:</label>
        <input type="text" name="tujuan_disposisi" id="tujuan_disposisi" value="<?php echo $tujuan_disposisi_edit; ?>" required><br>
        <label for="isi_disposisi">Isi Disposisi:</label>
        <textarea name="isi_disposisi" id="isi_disposisi" required><?php echo $isi_disposisi_edit; ?></textarea><br>
        <label for="catatan">Catatan:</label>
        <textarea name="catatan" id="catatan" required><?php echo $catatan_edit; ?></textarea><br>
        <button type="submit" name="update">Update</button>
        <a href="disposisi.php" class="actions button">Back to Create</a>
    </form>
    <?php endif; ?>
    
    <h2>Daftar Disposisi</h2>
    <table>
        <tr>
            <th>ID Disposisi</th>
            <th>ID Surat Masuk</th>
            <th>Tanggal Disposisi</th>
            <th>Tujuan Disposisi</th>
            <th>Isi Disposisi</th>
            <th>Catatan</th>
            <th>Aksi</th>
        </tr>
        <?php while ($row = $result->fetch_assoc()): ?>
        <tr>
            <td><?php echo $row['id_disposisi']; ?></td>
            <td><?php echo $row['id_suratMasuk']; ?></td>
            <td><?php echo $row['tanggal_disposisi']; ?></td>
            <td><?php echo $row['tujuan_disposisi']; ?></td>
            <td><?php echo $row['isi_disposisi']; ?></td>
            <td><?php echo $row['catatan']; ?></td>
            <td class="actions">
                <a href="disposisi.php?edit=<?php echo $row['id_disposisi']; ?>" class="edit-btn">Edit</a>
                <form action="disposisi.php" method="POST" style="display:inline-block;">
                    <input type="hidden" name="id_disposisi" value="<?php echo $row['id_disposisi']; ?>">
                    <button type="submit" name="delete" class="delete-btn" onclick="return confirm('Anda yakin ingin menghapus disposisi ini?')">Delete</button>
                </form>
            </td>
        </tr>
        <?php endwhile; ?>
    </table>

    <div style="display: flex;">
        <div style="margin-top: 20px; margin-right: 20px;">
            <a href="surat_masuk.php" style="text-decoration: none; background-color: #4CAF50; color: white; padding: 10px 20px; border-radius: 4px;">Ke Surat Masuk</a>
        </div>
        <div style="margin-top: 20px;">
            <a href="surat_keluar.php" style="text-decoration: none; background-color: #4CAF50; color: white; padding: 10px 20px; border-radius: 4px;">Ke Surat Keluar</a>
        </div>
    </div>

</body>
</html>
