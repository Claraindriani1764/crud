"use client";
import { detailData } from '@/app/models/mahasiswa';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


export default function EditPage({ params }: { params: { npm: string } }) {
  // Buat HOOKS ("use case")
  // nilai awal tipe objek
  const [getValue, setValue] = useState({})
   // buat hook (use state)
    // untuk baca nilai input
    const [getNPM, setNPM] = useState("");
    const [getNama, setNama] = useState("");
    const [getProdi, setProdi] = useState("");
    const [getCheck, setCheck] = useState({});

  // BUAT FUNGSI UNTUK RESPON getData
  async function fetchData() {
    // isi nilai "setValue"
    setValue(await detailData(atob(decodeURIComponent(params.npm))));
    // await getData()
  }
  // buat hook ("use effect")
  useEffect(() => {
    // panggil fungsi fetcData
    fetchData();
  }, []);

  // buat fungsi untuk ubah data
  const editData = async () => {
    // ternary operator
    (getNPM == "" || getNama == "" || getProdi == "")
        ? [alert("Seluruh Data Harus Diisi !!")]
        : [
           alert("ok")
          ];
};


  return (
    <>
      <title>Ubah Data Mahasiswa</title>

      {Object.values(getValue)?.map((data: any, index: number) => (

        <div key={index} className="grid grid-cols-12 gap-4 items-center">
          <div className=' col-start-1 '>
            <label htmlFor="">NPM</label>
          </div>
          <div className=' col-span-3'>
            <input type="text"
              placeholder="Isi NPM"
              maxLength={8}
              className="input input-bordered input-success w-full"
              defaultValue={data.npm}
              onChange={(e) => {
                setNPM(e.target.value);
                // getcheckData(e.target.value);
            }}
            />
          </div>
          <div className=' col-start-1'>
            <label htmlFor="">Nama</label>
          </div>
          <div className=' col-span-3'>
            <input type="text"
              placeholder="Isi Nama Mahasiswa"
              maxLength={100}
              className="input input-bordered input-success w-full"
              defaultValue={data.nama}
              onChange={(e) => { setNama(e.target.value) }}
            />
          </div>
          <div className=' col-start-1'>
            <label htmlFor="">Prodi</label>
          </div>
          <div className=' col-span-3'>
            <select defaultValue={data.prodi} className="select select-secondary w-full"
            onChange={(e) => { setProdi(e.target.value)}}>

              <option value={""} disabled>Pilih jurusan Mahasiswa</option>
              <option value={"Informatika"}>Informatika</option>
              <option value={"Sistem Informasi"}>Sistem Informasi</option>
              <option value={"Teknologi Informasi"}>Teknologi Informasi</option>
              <option value={"Teknik Komputer"}>Teknik Komputer</option>

            </select>
          </div>
          <div className="col-start-2 col-span-3">
            <button className="btn btn-active btn-accent mr-5 w-36" onClick={editData}>Ubah</button>
            <Link href={"/"} className="btn btn-active ml-5 w-36">Batal</Link>
          </div>
        </div>
      ))}

    </>
  )
}