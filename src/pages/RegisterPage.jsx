// src/pages/RegisterPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (name && email && password) {
      // Menyimpan user ke localStorage
      const user = { name, email, password };
      localStorage.setItem("user", JSON.stringify(user));

      alert("Pendaftaran berhasil!");
      navigate("/login");
    } else {
      setErrorMessage("Semua bidang harus diisi!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-200 via-blue-100 to-gray-100 pt-20 md:pt-32">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md text-center">
        {/* Icon dan Judul */}
        <FaUserPlus className="text-5xl text-green-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-green-600 mb-4">Daftar Akun</h2>
        <p className="text-gray-600 mb-6">
          Buat akun baru untuk memulai perjalanan belajar Anda!
        </p>

        {/* Pesan Error */}
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}

        {/* Formulir Pendaftaran */}
        <form onSubmit={handleRegister} className="space-y-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama Lengkap"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-Mail"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Kata Sandi"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition duration-200"
          >
            Daftar
          </button>
        </form>

        {/* Link ke Halaman Login */}
        <p className="mt-6 text-sm text-gray-500">
          Sudah punya akun?{" "}
          <a
            href="/login"
            className="text-green-600 font-semibold hover:underline"
          >
            Masuk sekarang
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
