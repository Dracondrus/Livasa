'use client';


import HousesTable from "./components/HousesTable";
import styles from "./main.module.scss"


export default function DashboardELfasa () {

    if(!localStorage.getItem(process.env.NEXT_PUBLIC_GET_PASSWORD!)) {
  
        window.location.replace("/")
    }



    return (
        <div className={styles.body}>
            <div className={styles.container}>
               <HousesTable />
            </div>
        </div>
    )
}