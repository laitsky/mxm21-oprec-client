export interface Pendaftar {
  divisi: { name: string };
  lulusInterview: boolean | number;
  lulusSeleksiForm: boolean | number;
  name: string;
  nim_mhs: number;
  tanggal_wawancara: string;
}

export interface Divisions {
  id: string;
  name: string;
}

export interface DivisionDataList {
  img: string;
  title: string;
  desc: string;
}

export enum Divisi {
  SuperAdmin = 'D00',
  BPH = 'D01',
  Acara = 'D02',
  Bazaar = 'D03',
  Dekorasi = 'D04',
  DokumFoto = 'D05',
  DokumVideo = 'D06',
  FreshMoney = 'D07',
  Medrel = 'D08',
  Merchandise = 'D09',
  Perlengkapan = 'D10',
  Publikasi = 'D11',
  Visual = 'D12',
  Seccom = 'D13',
  Sponsor = 'D14',
  Website = 'D15',
}

export enum Palette {
  MxmNavy = '#1F2C4C',
  MxmCyan = '#41CEBA',
  MxmYellow = '#FFD008',
  MxmPink = '#F4224B',
}

export interface DivisionLists {
  divisiID: Divisi;
  name: string;
}

export interface RequestTokenData {
  nim_koor: string;
  name: string;
  divisiID: Divisi;
}

export interface SignUpData {
  nim_koor: string;
  password: string;
  otp: string;
}

export interface KoorLogin {
  nim_koor: string;
  password: string;
}

interface NIMProps {
  nim_koor: string;
  nim_mhs: string;
}
export interface InterviewDateProps extends NIMProps {
  tanggal_wawancara: string;
}

export interface SeleksiFormProps extends NIMProps {
  lulusSeleksiForm: number;
}

export interface LulusInterviewProps extends NIMProps {
  lulusInterview: number;
}

export interface AccessTokenProps {
  nim_koor: number;
  divisiID: Divisi;
  iat: Date;
  exp: Date;
}

export interface AbsenProps {
  nim_mhs: string | number;
  token: string;
}

export interface SeleksiTerbukaProps {
  divisi: { name: string };
  divisiID: Divisi;
  mahasiswa: { name: string };
  nim_mhs: number;
  no_urut: number;
}
