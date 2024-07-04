<?php
session_start();
require_once 'config.php';

// CREATE
if (isset($_POST['create'])) {
    $nomor_surat = $_POST['nomor_surat'];
    $tanggal_surat = $_POST['tanggal_surat'];
    $pengirim = $_POST['pengirim'];
    $perihal = $_POST['perihal'];
    $lampiran = $_POST['lampiran'];
    $tanggal_diterima = $_POST['tanggal_diterima'];
    $catatan = $_POST['catatan'];

    $sql = "INSERT INTO surat_masuk (nomor_surat, tanggal_surat, pengirim, perihal, lampiran, tanggal_diterima, catatan) VALUES ('$nomor_surat', '$tanggal_surat', '$pengirim', '$perihal', '$lampiran', '$tanggal_diterima', '$catatan')";
    $conn->query($sql);
}

// READ
$sql = "SELECT * FROM surat_masuk";
$result = $conn->query($sql);

// UPDATE
if (isset($_POST['update'])) {
    $id_suratMasuk = $_POST['id_suratMasuk'];
    $nomor_surat = $_POST['nomor_surat'];
    $tanggal_surat = $_POST['tanggal_surat'];
    $pengirim = $_POST['pengirim'];
    $perihal = $_POST['perihal'];
    $lampiran = $_POST['lampiran'];
    $tanggal_diterima = $_POST['tanggal_diterima'];
    $catatan = $_POST['catatan'];

    $sql = "UPDATE surat_masuk SET nomor_surat='$nomor_surat', tanggal_surat='$tanggal_surat', pengirim='$pengirim', perihal='$perihal', lampiran='$lampiran', tanggal_diterima='$tanggal_diterima', catatan='$catatan' WHERE id_suratMasuk=$id_suratMasuk";
    $conn->query($sql);
    header("Location: surat_masuk.php");
    exit();
}

// DELETE
if (isset($_GET['delete'])) {
    $id_suratMasuk = $_GET['delete'];
    $sql = "DELETE FROM surat_masuk WHERE id_suratMasuk=$id_suratMasuk";
    $conn->query($sql);
    header("Location: surat_masuk.php");
    exit();
}

// EDIT
$row = [];
if (isset($_GET['edit'])) {
    $id_suratMasuk = $_GET['edit'];
    $sql = "SELECT * FROM surat_masuk WHERE id_suratMasuk=$id_suratMasuk";
    $result_edit = $conn->query($sql);
    if ($result_edit->num_rows == 1) {
        $row = $result_edit->fetch_assoc();
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html>
<head>
    <title>CRUD Surat Masuk</title>
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
    <h1>CRUD Surat Masuk</h1>
    <a href="logout.php" class="logout">Logout</a>

    <form method="post" action="">
        <input type="hidden" name="id_suratMasuk" value="<?php echo isset($row['id_suratMasuk']) ? $row['id_suratMasuk'] : ''; ?>">
        Nomor Surat: <input type="text" name="nomor_surat" value="<?php echo isset($row['nomor_surat']) ? $row['nomor_surat'] : ''; ?>"><br>
        Tanggal Surat: <input type="date" name="tanggal_surat" value="<?php echo isset($row['tanggal_surat']) ? $row['tanggal_surat'] : ''; ?>"><br>
        Pengirim: <input type="text" name="pengirim" value="<?php echo isset($row['pengirim']) ? $row['pengirim'] : ''; ?>"><br>
        Perihal: <input type="text" name="perihal" value="<?php echo isset($row['perihal']) ? $row['perihal'] : ''; ?>"><br>
        Lampiran: <input type="text" name="lampiran" value="<?php echo isset($row['lampiran']) ? $row['lampiran'] : ''; ?>"><br>
        Tanggal Diterima: <input type="date" name="tanggal_diterima" value="<?php echo isset($row['tanggal_diterima']) ? $row['tanggal_diterima'] : ''; ?>"><br>
        Catatan: <textarea name="catatan"><?php echo isset($row['catatan']) ? $row['catatan'] : ''; ?></textarea><br>
        <?php if (isset($_GET['edit'])): ?>
            <input type="submit" name="update" value="Update">
            <a href="surat_masuk.php" class="button">Back to Create New</a>
        <?php else: ?>
            <input type="submit" name="create" value="Create">
        <?php endif; ?>
    </form>

    <h2>Daftar Surat Masuk</h2>
    <table>
        <tr>
            <th>ID</th>
            <th>Nomor Surat</th>
            <th>Tanggal Surat</th>
            <th>Pengirim</th>
            <th>Perihal</th>
            <th>Lampiran</th>
            <th>Tanggal Diterima</th>
            <th>Catatan</th>
            <th>Aksi</th>
        </tr>
        <?php while ($row = $result->fetch_assoc()): ?>
        <tr>
            <td><?php echo $row['id_suratMasuk']; ?></td>
            <td><?php echo $row['nomor_surat']; ?></td>
            <td><?php echo $row['tanggal_surat']; ?></td>
            <td><?php echo $row['pengirim']; ?></td>
            <td><?php echo $row['perihal']; ?></td>
            <td><?php echo $row['lampiran']; ?></td>
            <td><?php echo $row['tanggal_diterima']; ?></td>
            <td><?php echo $row['catatan']; ?></td>
            <td class="actions">
                <a href="?edit=<?php echo $row['id_suratMasuk']; ?>" style="background-color: blue;">Edit</a>
                <a href="?delete=<?php echo $row['id_suratMasuk']; ?>" onclick="return confirm('Anda yakin ingin menghapus surat ini?')" style="background-color: red;">Delete</a>
            </td>
        </tr>
        <?php endwhile; ?>
    </table>
    <div style="display: flex;">
        <div style="margin-top: 20px; margin-right: 20px;">
            <a href="surat_keluar.php" style="text-decoration: none; background-color: #4CAF50; color: white; padding: 10px 20px; border-radius: 4px;">Ke Surat Keluar</a>
        </div>
        <div style="margin-top: 20px;">
            <a href="disposisi.php" style="text-decoration: none; background-color: #4CAF50; color: white; padding: 10px 20px; border-radius: 4px;">Disposisi</a>
        </div>
    </div>
</body>
</html>
