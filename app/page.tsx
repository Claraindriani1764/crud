"use client"

import { faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link';
import React, {useEffect, useState } from 'react'
import { getData, setDeleteData, setUpdateStatus } from './models/mahasiswa';


export default function MainPage() {
  // Buat HOOKS ("use case")
  // nilai awal tipe objek
  const[getValue, setValue] = useState({})

  // BUAT FUNGSI UNTUK RESPON getData
  async function fetchData() {
    // isi nilai "setValue"
    setValue(await getData());
    // await getData()
  }
  // buat hook ("use effect")
  useEffect(() => {
    // panggil fungsi fetcData
    fetchData();
  }, []);
  

  // Buat Fungsi Hapus Data
 async function setDelete(npm: string, nama: string){
  // alert("Hapus");
  if(confirm(`Data Mahasiswa : ${npm} - ${nama} Ingin Dihapus?`) == true)
  {
    // alert("Tombol Ok");
    await setUpdateStatus(npm);
    // setDeleteData(npm);
    alert(`Data Mahasiswa : ${npm} - ${nama} Berhasil Dihapus?`);
    // reload otomatis
    location.reload();
  }
  // else
  // {
  //   alert("Tombol Cancel");
  // }
}

  return (
    <>
    <title>View Data Mahasiswa</title>
    <nav className="mb-2.5 text-right">
      <Link href={"/add"}>
    <button className="btn btn-outline btn-info">
      <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
    Tambah Data Mahasiswa
    </button>
    </Link>
    </nav>
    {/* Tampilkan Data Mahasiswa */}
      <table className="w-full ">
            <thead>
              <tr className="bg-red-700 h-40">
                <th className="w-10% border border-black">Aksi</th>
                <th className="w-10% border border-black">NPM</th>
                <th className="w-50% border border-black">Nama</th>
                <th className="w-30% border border-black">Prodi</th>
              </tr>
            </thead>
            
            <tbody>
      {Object.values(getValue)?.map((data: any,index: number)=>(
        // Tampilkan Data Mahasiswa (Komentar = JSX)
        <tr key={index}>
        <td className="w-10% text-center border border-black px-2.5 py-1">
          <Link href={`/edit/${btoa(data.npm)}`} 
          className='px-2 py-1 bg-green-500 text-white rounded-md mr-0.5 text-xs' title='Ubah Data'>
          <FontAwesomeIcon icon={faPen} size='1x'></FontAwesomeIcon>
          </Link>

          <Link href={"/"} className='px-2 py-1 bg-red-500 text-white rounded-md ml-0.5 text-xs' title='Hapus Data' onClick={() => {setDelete(data.npm, data.nama)}}>
          <FontAwesomeIcon icon={faTrash} size='1x'></FontAwesomeIcon>
          </Link>
        </td>
        <td className="w-10% text-center border border-black">{data.npm}</td>
        <td className="w-50% text-justify border border-black px-2.5">{data.nama}</td>
        <td className="w-30% text-center border border-black">{data.prodi}</td>
      </tr>
      ))}
      {/* <div>
        {mahasiswa?.npm} - {mahasiswa?.nama} - {mahasiswa?.prodi}
      </div> */}
        </tbody>

      </table>
    </>
    );
}