import { Injectable } from '@nestjs/common';
import mysql from 'mysql2/promise';
import { Jatek } from './jatek.js';
import { Macska } from './macska.js';

const macskaConnection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: process.env.MACSKA_DB_NAME ?? 'kutyakesmacskak',
});

@Injectable()
export class AppService {
  async getMacskak(): Promise<Macska[]> {
    const [results] = await macskaConnection.execute(
      'SELECT id, suly, szem_szin, gazdi_id, jatek_id FROM macskak'
    );
    return results as Macska[];
  }

  async getJatekok(): Promise<Jatek[]> {
    const [results] = await macskaConnection.execute(
      'SELECT id, nev FROM jatekok'
    );
    return results as Jatek[];
  }
}
