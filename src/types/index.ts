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

export enum Divisi {
  BPH = 'D01',
  Acara = 'D02',
  Bazaar = 'D03',
  Dekorasi = 'D04',
  DokumFoto = 'D05',
  DokumVideo = 'D06',
  FreshMoney = 'D07',
  Website = 'D08',
  Seccom = 'D09',
  Medrel = 'D10',
  Merchandise = 'D11',
  Perlengkapan = 'D12',
  Publikasi = 'D13',
  Visual = 'D14',
  Sponsor = 'D15',
}
