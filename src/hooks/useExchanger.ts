import { useEffect, useState } from 'react';
import axios from 'axios';

interface ExchangeResponse {
  Rate: string;
  Date: string;
  Nominal: string;
}

export const useExchanger = (usdPrice: number): string => {

if(localStorage.getItem('user_selected_usd') === null) {
  localStorage.setItem('user_selected_usd', 'false');
 }

  const defaultRate = 12600;
  const [converted, setConverted] = useState<string>(() => {
    const userSelectedUSD = localStorage.getItem('user_selected_usd');

    // Если пользователь отключил доллары — просто вернём цену как есть
    if (userSelectedUSD === 'false') {
      return `${usdPrice.toLocaleString()} `;
    }

    // В остальных случаях — пересчитываем по дефолтному курсу
    return `${Math.round(usdPrice * defaultRate).toLocaleString()} `;
  });

  useEffect(() => {
    const userSelectedUSD = localStorage.getItem('user_selected_usd');

    // Если пользователь отключил доллары — не обновляем курс
    if (userSelectedUSD === 'false') return;

    const fetchRate = async () => {
      try {
        const response = await axios.get<ExchangeResponse[]>('https://cbu.uz/uz/arkhiv-kursov-valyut/json/USD/');
        const rate = parseFloat(response.data[0].Rate);
        const uzs =(usdPrice / rate).toLocaleString();
        setConverted(`${uzs} `);
      } catch (err) {
        console.error('Ошибка при загрузке курса валют:', err);
      }
    };

    fetchRate();
  }, [usdPrice]);

  return converted;
};
