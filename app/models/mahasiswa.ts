"use server"

import { PrismaClient } from "@prisma/client";
import { profileEnd } from "console";

// BUAT VARIABEL "PRISMA CLIENT"
const prisma = new PrismaClient();


// BUAT FUNGSI UNTUK TAMPIL DATA MAHASISWA
export async function getData()
{
  // BUAT VARIABEL UNTUK TAMPILKAN DATA MAHASISWA
  const mahasiswa = await prisma.tb_mahasiswa.findMany({
    where: {
      status: "Y",
      // prodi : {
      //   contains: "Sistem",
      // }
    },
  });

  return mahasiswa;
}

// BUAT FUNGSI (arrow function) untuk hapus data
// export async function setDelete()
export const setUpdateStatus = async(npm: string) =>
{
  // BUAT VARIABEL UNTUK UBAH DATA STATUS MAHASISWA (Y >> T)
await prisma.tb_mahasiswa.updateMany({
    where: {
      npm: npm,
    },
    data: {
      status: 'T',
    },
  });

}

export const setDeleteData = async(npm: string) => 
{
  // BUAT VARIABEL UNTUK HAPUS DATA STATUS MAHASISWA (Y >> T)
await prisma.tb_mahasiswa.deleteMany({
  where: {
   
  },
});
}
  
// BUAT FUNGSI UNTUK CEK DATA MAHASISWA (NPM)
 export const checkData = async (npm: string) => {
  // BUAT VARIABEL 
  // UNTUK TAMPILKAN DATA MAHASISWA
  // Berdasarkan npmnya
  const check = await prisma.tb_mahasiswa.findMany({
    select: {
      id: true,
    },
    where: {
      npm: npm,
    },
  });

  return check;

}

// BUAT FUNGSI UNTUK CEK DATA
export const setSaveData = async(npm: string, nama:string, prodi: string) => {
  await prisma.tb_mahasiswa.create({
    data: {
      npm: npm,
      nama: nama,
      prodi: prodi,
      status: 'Y'
    },
  })
}

// BUAT FUNGSI UNTUK TAMPIL DETAIL DATA MAHASISWA (NPM)
export const detailData = async (npm: string) => {
  // BUAT VARIABEL 
  // UNTUK TAMPILKAN DATA MAHASISWA
  // Berdasarkan npmnya
  const detail = await prisma.tb_mahasiswa.findMany({
    where: {
      npm: npm,
    },
  });

  return detail;

}

