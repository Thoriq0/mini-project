-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 04 Jul 2024 pada 09.37
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tata_persuratan_dinas`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `disposisi`
--

CREATE TABLE `disposisi` (
  `id_disposisi` int(20) NOT NULL,
  `id_suratMasuk` int(20) NOT NULL,
  `tanggal_disposisi` int(11) NOT NULL,
  `tujuan_disposisi` varchar(40) NOT NULL,
  `isi_disposisi` varchar(255) NOT NULL,
  `catatan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `disposisi`
--

INSERT INTO `disposisi` (`id_disposisi`, `id_suratMasuk`, `tanggal_disposisi`, `tujuan_disposisi`, `isi_disposisi`, `catatan`) VALUES
(5, 3, 2024, 'ok', 'asd', 'asdasd'),
(6, 3, 2024, 'gatau', 'gatau', 'gatau');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pengguna`
--

CREATE TABLE `pengguna` (
  `id_pengguna` int(20) NOT NULL,
  `nama_pengguna` varchar(40) NOT NULL,
  `kata_sandi` text NOT NULL,
  `jabatan` varchar(10) NOT NULL,
  `departemen` varchar(30) NOT NULL,
  `email` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `pengguna`
--

INSERT INTO `pengguna` (`id_pengguna`, `nama_pengguna`, `kata_sandi`, `jabatan`, `departemen`, `email`) VALUES
(0, 'zahra', '$2y$10$UbeS7y1dBBqw5I85gF/3AOO9TTMN7Kdr3SDanpV70AbeBY9g9vDPO', 'admin', 'IT', 'zaza@gmail.com'),
(1, 'thoriq', '$2y$10$p0KsGpy1noQs3WeMjSkX7esBuKQ22k5me0EpqZ2ohTU7KNFO35xnO', 'manager', 'it', 'thoriq@email.com'),
(2, 'thor', '$2y$10$vq3XMF6kMvzfQ6MYOebMnOi6fHVcC1J601uU4XbT7Ahb/kPxnZ4bS', 'spv', 'it', 'thor@email.com');

-- --------------------------------------------------------

--
-- Struktur dari tabel `surat_keluar`
--

CREATE TABLE `surat_keluar` (
  `id_suratK` int(20) NOT NULL,
  `nomor_suratK` int(20) NOT NULL,
  `tanggal_suratK` date NOT NULL,
  `penerima_k` varchar(30) NOT NULL,
  `perihal_k` varchar(30) NOT NULL,
  `lampiran_k` varchar(255) NOT NULL,
  `tanggal_kirimk` date NOT NULL,
  `catatan_k` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `surat_keluar`
--

INSERT INTO `surat_keluar` (`id_suratK`, `nomor_suratK`, `tanggal_suratK`, `penerima_k`, `perihal_k`, `lampiran_k`, `tanggal_kirimk`, `catatan_k`) VALUES
(1, 234234, '2024-07-17', 'ahmad', 'fsdfsd', 'wwerwer', '2024-07-25', 'hahaha'),
(2, 245245, '2024-07-11', 'sdfsdfs', 'dssgf', 'faerer', '2024-07-16', 'sdfffffffffffffffddddd'),
(3, 2147483647, '2024-07-04', 'zaa', 'ok', 'asdasd', '2024-07-11', 'asdasdqwdqwd');

-- --------------------------------------------------------

--
-- Struktur dari tabel `surat_masuk`
--

CREATE TABLE `surat_masuk` (
  `id_suratMasuk` int(20) NOT NULL,
  `nomor_surat` int(20) NOT NULL,
  `tanggal_surat` date NOT NULL,
  `pengirim` varchar(40) NOT NULL,
  `perihal` varchar(30) NOT NULL,
  `lampiran` varchar(255) NOT NULL,
  `tanggal_diterima` date NOT NULL,
  `catatan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `surat_masuk`
--

INSERT INTO `surat_masuk` (`id_suratMasuk`, `nomor_surat`, `tanggal_surat`, `pengirim`, `perihal`, `lampiran`, `tanggal_diterima`, `catatan`) VALUES
(1, 123, '2024-07-04', 'ahmad', 'gatau', 'ini', '2024-07-11', 'hahah'),
(3, 4524, '2024-07-19', 'rwerwe', 'rwerwer', 'erwer', '2024-07-26', 'rwerwerwe'),
(4, 23942734, '2024-07-04', 'thor', 'ok', 'ok', '2024-07-12', 'sadasdasdasd'),
(5, 93993, '2024-07-13', 'ddd', 'dasda', 'dasd', '2024-07-16', 'dasdasdasd');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `disposisi`
--
ALTER TABLE `disposisi`
  ADD PRIMARY KEY (`id_disposisi`),
  ADD KEY `idmasuk` (`id_suratMasuk`);

--
-- Indeks untuk tabel `pengguna`
--
ALTER TABLE `pengguna`
  ADD PRIMARY KEY (`id_pengguna`);

--
-- Indeks untuk tabel `surat_keluar`
--
ALTER TABLE `surat_keluar`
  ADD PRIMARY KEY (`id_suratK`);

--
-- Indeks untuk tabel `surat_masuk`
--
ALTER TABLE `surat_masuk`
  ADD PRIMARY KEY (`id_suratMasuk`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `disposisi`
--
ALTER TABLE `disposisi`
  MODIFY `id_disposisi` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `surat_keluar`
--
ALTER TABLE `surat_keluar`
  MODIFY `id_suratK` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `surat_masuk`
--
ALTER TABLE `surat_masuk`
  MODIFY `id_suratMasuk` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `disposisi`
--
ALTER TABLE `disposisi`
  ADD CONSTRAINT `idmasuk` FOREIGN KEY (`id_suratMasuk`) REFERENCES `surat_masuk` (`id_suratMasuk`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
