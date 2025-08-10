'use client';

import { useEffect, useState } from "react";
import { Table, Alert, Input } from "antd";
import { IUser } from "../../components/GetValues";

export default function Users() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
        setFilteredUsers(data);
   
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (!searchText.trim()) {
      setFilteredUsers(users);
      return;
    }

    const lower = searchText.toLowerCase();
    const filtered = users.filter(user =>
      user.name?.toLowerCase().includes(lower) ||
      user.firstName?.toLowerCase().includes(lower) ||
      user.secondName?.toLowerCase().includes(lower) ||
      user.email?.toLowerCase().includes(lower) ||
      user.phoneNumber?.toLowerCase().includes(lower)
    );
    setFilteredUsers(filtered);
  }, [searchText, users]);

  const columns = [
 
        {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (src: string) => src ? <img src={src} alt="avatar" width={40} /> : null
    },
    { title: "Email", dataIndex: "email", key: "email" },

    { title: "Name", dataIndex: "name", key: "name" },
    { title: "First Name", dataIndex: "firstname", key: "firstname" },
    { title: "Second Name", dataIndex: "secondname", key: "secondname" },
    { title: "Phone Number", dataIndex: "phonenumber", key: "phonenumber" },
    { title: "About", dataIndex: "about", key: "about" },
    { title: "Quantity Setup Property", dataIndex: "quantitysetuppropert", key: "quantitysetuppropert" },
  ];

  if (loading) return <p style={{ textAlign: "center", padding: "20px" }}>Loading...</p>;
  if (error) return <Alert type="error" message={error} />;

  return (
    <div>
      <Input.Search
        placeholder="Search by name, email or phone"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ marginBottom: "16px", maxWidth: "300px" }}
        allowClear
      />

      <Table
        dataSource={filteredUsers}
        columns={columns}
        rowKey={(record) => record.id}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
}
