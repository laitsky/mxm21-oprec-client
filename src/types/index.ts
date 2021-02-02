export interface Pendaftar {
  nim: string;
  name: string;
  divisi: string;
  lulus: boolean;
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
