'use client';

import { useEffect, useState } from 'react';
import {
  Table, Button, Modal, Form, Input, InputNumber, Switch, Upload, Popconfirm, message,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { supabase } from '@/lib/supabase';
import { House } from '@/types/house';



export default function HousesTable() {
  const [houses, setHouses] = useState<House[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<File[]>([]);

  const fetchHouses = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('houses').select('*');
    if (error) message.error('Ошибка загрузки данных');
    else setHouses(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchHouses();
  }, []);

  const handleUpload = async (files: File[]) => {
    const uploaded: string[] = [];
    for (const file of files) {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.secure_url) uploaded.push(data.secure_url);
    }
    return uploaded;
  };

  const handleAddHouse = async () => {
    try {
      const values = await form.validateFields();
      const photoUrls = await handleUpload(fileList);
      const { error } = await supabase.from('houses').insert([
        {
          ...values,
          photos: photoUrls,
        },
      ]);
      if (error) throw error;
      message.success('Дом добавлен!');
      form.resetFields();
      setFileList([]);
      setModalVisible(false);
      fetchHouses();
    } catch (error: any) {
      message.error(error.message || 'Ошибка при добавлении');
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from('houses').delete().eq('id', id);
    if (error) message.error('Ошибка при удалении');
    else {
      message.success('Удалено');
      fetchHouses();
    }
  };

  const columns = [
    {
      title: 'Фото',
      dataIndex: 'photos',
      render: (photos: string[]) =>
         '—',
    },
    { title: 'Название', dataIndex: 'title' },
    { title: 'Описание', dataIndex: 'description' },
    { title: 'Тип участка', dataIndex: 'site_type' },
    { title: 'Город', dataIndex: 'city' },
    { title: 'Регион', dataIndex: 'region' },
    { title: 'Адрес', dataIndex: 'address' },
    {
      title: 'Цена',
      dataIndex: 'price',
      render: (val: number) => `${val.toLocaleString()} сум`,
    },
    { title: 'Комнат', dataIndex: 'rooms' },
    { title: 'Спалная', dataIndex: 'bathrooms' },
    { title: 'Туалетов', dataIndex: 'toilets' },
    { title: 'Кроватей', dataIndex: 'beds' },
    { title: 'Площадь', dataIndex: 'area' },
    { title: 'Wi-Fi', dataIndex: 'wifi', render: (val: boolean) => (val ? '✅' : '❌') },
    { title: 'Кондиционер', dataIndex: 'conditioner', render: (val: boolean) => (val ? '✅' : '❌') },
    { title: 'Аренда', dataIndex: 'is_rent', render: (val: boolean) => (val ? '✅' : '❌') },
    { title: 'Поиск соседа', dataIndex: 'roommate_search', render: (val: boolean) => (val ? '✅' : '❌') },
    {
      title: 'Действия',
      render: (_: any, record: House) => (
        <Popconfirm title="Удалить дом?" onConfirm={() => handleDelete(record.id)}>
          <Button type="link" danger>Удалить</Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <>
      <Button type="primary" onClick={() => setModalVisible(true)} style={{ marginBottom: 16 }}>
        Добавить дом
      </Button>

      <Table
        columns={columns}
        dataSource={houses}
        rowKey="id"
        loading={loading}
        scroll={{ x: true }}
        pagination={{ pageSize: 10 }}
      />

      <Modal
        title="Добавить дом"
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        onOk={handleAddHouse}
        okText="Сохранить"
        width={700}
      >
        <Form layout="vertical" form={form}>
          <Form.Item name="title" label="Название" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Описание">
            <Input.TextArea rows={3} />
          </Form.Item>
          <Form.Item name="site_type" label="Тип участка">
            <Input />
          </Form.Item>
          <Form.Item name="price" label="Цена" rules={[{ required: true }]}>
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="rooms" label="Комнаты"><InputNumber min={0} /></Form.Item>
          <Form.Item name="bathrooms" label="Санузлы"><InputNumber min={0} /></Form.Item>
          <Form.Item name="toilets" label="Туалеты"><InputNumber min={0} /></Form.Item>
          <Form.Item name="beds" label="Кровати"><InputNumber min={0} /></Form.Item>
          <Form.Item name="area" label="Площадь (м²)"><InputNumber min={0} /></Form.Item>
          <Form.Item name="city" label="Город"><Input /></Form.Item>
          <Form.Item name="region" label="Регион"><Input /></Form.Item>
          <Form.Item name="address" label="Адрес"><Input /></Form.Item>
          <Form.Item name="is_rent" label="Это аренда?" valuePropName="checked"><Switch /></Form.Item>
          <Form.Item name="wifi" label="Wi-Fi" valuePropName="checked"><Switch /></Form.Item>
          <Form.Item name="conditioner" label="Кондиционер" valuePropName="checked"><Switch /></Form.Item>
          <Form.Item name="roommate_search" label="Поиск соседа" valuePropName="checked"><Switch /></Form.Item>
          <Form.Item label="Фото">
            <Upload
              beforeUpload={(file) => {
                setFileList(prev => [...prev, file]);
                return false;
              }}
              multiple
              fileList={fileList.map(file => ({
                uid: file.name,
                name: file.name,
                status: 'done',
              }))}
              onRemove={(file) => {
                setFileList(prev => prev.filter(f => f.name !== file.name));
              }}
            >
              <Button icon={<UploadOutlined />}>Загрузить</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
