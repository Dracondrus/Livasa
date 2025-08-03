"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Modal, Input } from "antd";

export default function UserProfileForm() {
  const { data: session } = useSession();

  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [about, setAbout] = useState("");

  const [canSave, setCanSave] = useState(true);
  const [timeLeft, setTimeLeft] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Получаем данные при первом рендере
  useEffect(() => {
    if (!session?.user?.email) return;

    fetch("/api/users/getInfo")
      .then((res) => res.json())
      .then((data) => {
        if (!data || data.error) return;

        setFirstName(data.firstname || "");
        setSecondName(data.secondname || "");
        setPhoneNumber((data.phonenumber || "").replace("+998", ""));
        setAbout(data.about || "");
      });
  }, [session]);

  // Проверка на блок сохранения (раз в неделю)
  useEffect(() => {
    const lastSaved = localStorage.getItem("lastProfileSave");
    if (lastSaved) {
      const last = new Date(parseInt(lastSaved));
      const now = new Date();
      const diff = now.getTime() - last.getTime();
      const week = 7 * 24 * 60 * 60 * 1000;

      if (diff < week) {
        setCanSave(false);
        const timeLeftMs = week - diff;
        const days = Math.floor(timeLeftMs / (24 * 60 * 60 * 1000));
        const hours = Math.floor((timeLeftMs % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        setTimeLeft(`${days}д ${hours}ч`);
      }
    }
  }, []);

  const formatPhoneNumber = (input: string) => {
    const digits = input.replace(/\D/g, "").slice(0, 9);
    const part1 = digits.slice(0, 2);
    const part2 = digits.slice(2, 5);
    const part3 = digits.slice(5, 7);
    const part4 = digits.slice(7, 9);
    return [part1, part2, part3, part4].filter(Boolean).join(" ");
  };

  const handleSave = async () => {
    if (!session?.user?.email) return alert("User not logged in");

    if (!canSave) return alert(`Нельзя сохранить. Осталось: ${timeLeft}`);

    const confirm = window.confirm(
      "Вы уверены, что хотите сохранить данные? После этого вы сможете изменить их только через неделю."
    );
    if (!confirm) return;

    const cleanedPhone = phoneNumber.replace(/\D/g, "");
    if (cleanedPhone.length !== 9) return alert("Введите корректный номер телефона");

    const fullPhoneNumber = `+998${cleanedPhone}`;

    setLoading(true);

    const res = await fetch("/api/users/add-info", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: session.user.email,
        firstName,
        secondName,
        phoneNumber: fullPhoneNumber,
        about,
      }),
    });

    const result = await res.json();
    setLoading(false);

    if (res.ok) {
      alert("Сохранено успешно!");
      localStorage.setItem("lastProfileSave", Date.now().toString());
      setCanSave(false);
      setIsModalOpen(false);
    } else {
      alert("Ошибка: " + result.error);
    }
  };

  return (
    <div className="tp-dashboard-profile-information pb-50">

      <div className="tp-dashboard-profile-info row ">
        <div className="tp-dashboard-new-input col-lg-3">
          <p >First name</p>
          <h6>{firstName || "-"}</h6>
        </div>
   
           <div className="tp-dashboard-new-input col-lg-3">
          <p >Second name</p>
          <h6>{secondName || "-"}</h6>
        </div>
              <div className="tp-dashboard-new-input col-lg-3">
         <p >Phone number</p>
          <h6>{phoneNumber ? `+998 ${formatPhoneNumber(phoneNumber)}` : "-"}</h6>
        </div>
    <div className="tp-dashboard-new-input col-lg-3">
          <p >About you</p>
          <h6>{about || "-"}</h6>
        </div>
     
        <div className="col-lg-3">

        </div>
        <div className="col-lg-0" onClick={() => setIsModalOpen(true)} style={{cursor:"pointer"}}>
          <h6>Edit</h6>
        </div>
      </div>

      <Modal
        title="Редактировать профиль"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleSave}
        okText={canSave ? "Сохранить" : `Ожидайте: ${timeLeft}`}
        okButtonProps={{ disabled: !canSave, loading }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Input
            placeholder="First name"
            maxLength={10}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            placeholder="Second name"
            maxLength={10}
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
          />
          <Input
            placeholder="Number like ( 90 000 00 00 )"
            value={formatPhoneNumber(phoneNumber)}
            onChange={(e) => {
              const raw = e.target.value;
              const digits = raw.replace(/\D/g, "").slice(0, 9);
              setPhoneNumber(digits);
            }}
          />
          <Input
            placeholder="Max 20"
            maxLength={20}
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>
      </Modal>
    </div>
  );
}
