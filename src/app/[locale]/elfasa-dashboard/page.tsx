'use client';

import { Tabs } from 'antd';
import HousesTable from './components/HousesTable';

import styles from './main.module.scss';

const { TabPane } = Tabs;

export default function DashboardElfasa() {
  if (!localStorage.getItem(process.env.NEXT_PUBLIC_GET_PASSWORD!)) {
    window.location.replace('/');
    return null;
  }

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <Tabs defaultActiveKey="1" type="card">
          <TabPane tab="🏠 Houses" key="1">
            <HousesTable />
          </TabPane>
          <TabPane tab="👤 Users" key="2">
         qwe
          </TabPane>
          {/* Добавляй другие вкладки при необходимости */}
        </Tabs>
      </div>
    </div>
  );
}
