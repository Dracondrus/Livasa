'use client';

import { useEffect, useState } from "react";
import { Table, Alert, Input, Modal, Carousel, Button, Dropdown, Space, Form, Select } from "antd";
import { IUser, IGetAllValueProperty } from "../../components/GetValues";
import { MoreOutlined } from "@ant-design/icons";


const { Option } = Select;

export default function Properties() {
  const [data, setData] = useState<Pick<IUser, "id" | "email" | "image" | "name" | "properties">[]>([]);
  const [filteredData, setFilteredData] = useState<typeof data>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "success" | "no" | "reject">("all");

  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [actionModalOpen, setActionModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<IGetAllValueProperty | null>(null);
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);
  const [actionType, setActionType] = useState<"edit" | "delete" | "add" | null>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/properties");
        if (!res.ok) throw new Error("Failed to fetch properties");
        const json = await res.json();
        setData(json);
        setFilteredData(json);
      } catch  {
        setError("error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Поиск + фильтр
  useEffect(() => {
    let result = [...data];

    if (searchText.trim()) {
      const lower = searchText.toLowerCase();
      result = result.filter(
        (user) =>
          user.name?.toLowerCase().includes(lower) ||
          user.email?.toLowerCase().includes(lower)
      );
    }

    if (statusFilter !== "all") {
      result = result.filter(user =>
        user.properties?.some(prop => {
          if (statusFilter === "success") return prop.permission === "approved";
          if (statusFilter === "no") return prop.permission === "pending";
          if (statusFilter === "reject") return prop.permission === "rejected";
          return true;
        })
      );
    }

    setFilteredData(result);
  }, [searchText, statusFilter, data]);

  const handleOpenEditModal = (property: IGetAllValueProperty, email: string) => {
    setSelectedProperty(property);
    setSelectedEmail(email);
    setActionType("edit");
    form.setFieldsValue({
      country: property.information?.country,
      neighborhood: property.information?.neighborhood,
      typeProperty: property.information?.typeProperty,
      address: property.information?.address,
      location: property.information?.location,
      price: property.iAInformation?.price,
      size: property.iAInformation?.size,
      rooms: property.iAInformation?.rooms,
      bathrooms: property.iAInformation?.bathrooms,
      yearBuilt: property.iAInformation?.yearBuilt,
      permission: property.permission,
      review: property.review,
      description: property.iDescription?.description,
      amenities: property.amenities?.join(", ")
    });
    setActionModalOpen(true);
  };

const handleSubmit = async (property: IGetAllValueProperty) => {
  try {
    const res = await fetch(`/api/properties/update/${property.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        permission: property.permission,
        review: property.review,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();   
      throw new Error(errorData.error || "Ошибка обновления property");
    }

    alert("Property успешно обновлено");
  } catch {
    console.log("error");
  }
};


const handleDelete = async (property: IGetAllValueProperty) => {
  try {
    const res = await fetch(`/api/properties/delete/${property.id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Ошибка удаления");
    }



  } catch {
    console.log("error")
  }
};

  const columns = [
    { 
      title: "User", 
      key: "user",
      render: (_: any, record: any) => (
        <Space>
          {record.image && <img src={record.image} alt="avatar" width={40} style={{ borderRadius: "50%" }} />}
          <div>
            <div style={{ fontWeight: 600 }}>{record.name}</div>
            <div style={{ fontSize: 12, color: "#888" }}>{record.email}</div>
          </div>
        </Space>
      )
    },
    {
      title: "Properties Count",
      key: "propertiesCount",
      render: (_: any, record: any) => record.properties?.length ?? 0
    }
  ];

  // Вложенная таблица для properties
  const expandedRowRender = (props: IGetAllValueProperty[], email: string) => {
    const propertyColumns = [
      { title: "Country", dataIndex: ["information", "country"], key: "country" },
      { title: "Type", dataIndex: ["information", "typeProperty"], key: "typeProperty" },
      { 
        title: "Price", 
        key: "price",
        render: (_: any, record: IGetAllValueProperty) => 
          record.iAInformation?.price
            ? `${record.iAInformation.price.toLocaleString("ru-RU")} UZS`
            : "—"
      },
      {
        title: "Status",
        key: "status",
        render: (_: any, record: IGetAllValueProperty) => {
          if (record.permission === "approved") return <div style={{ width: 12, height: 12, borderRadius: "50%", background: "green" }} />;
          if (record.permission === "pending") return <div style={{ width: 12, height: 12, borderRadius: "50%", background: "orange" }} />;
          if (record.permission === "rejected") return <div style={{ width: 12, height: 12, borderRadius: "50%", background: "red" }} />;
          return null;
        }
      },
      {
        title: "Actions",
        key: "actions",
        render: (_: any, record: IGetAllValueProperty) => (
          <Dropdown
            menu={{
              items: [
                { 
                  key: "details", 
                  label: "View Details", 
                  onClick: () => { 
                    setSelectedProperty(record);
                    setDetailsModalOpen(true);
                  }
                },
                { 
                  key: "edit", 
                  label: "Edit", 
                  onClick: () => {
                    handleOpenEditModal(record, email);
                  }
                },
                { 
                  key: "delete", 
                  label: "Delete", 
                  danger: true,
                  onClick: () => {
                    setActionType("delete");
                    setSelectedProperty(record);
                    setSelectedEmail(email);
                    setActionModalOpen(true);
                    handleDelete(record);
                  }
                },
              ]
            }}
            trigger={['click']}
          >
            <MoreOutlined style={{ fontSize: 18, cursor: "pointer" }} />
          </Dropdown>
        )
      }
    ];

    return (
      <Table
        columns={propertyColumns}
        dataSource={props}
        rowKey={(record) => record.id}
        pagination={false}
        size="small"
      />
    );
  };

  if (loading) return <p style={{ textAlign: "center", padding: "20px" }}>Loading...</p>;
  if (error) return <Alert type="error" message={error} />;

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Input.Search
          placeholder="Search by name or email"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ maxWidth: "300px" }}
          allowClear
        />
        {/* Фильтры */}
        <div style={{ display: "flex", gap: 8 }}>
          <div 
            onClick={() => setStatusFilter("all")} 
            style={{ 
              width: 20, 
              height: 20, 
              background: statusFilter === "all" ? "#0fe3dcff" : "#ccc", 
              cursor: "pointer",
              border: "1px solid #ddd"
            }} 
          />
          <div 
            onClick={() => setStatusFilter("success")} 
            style={{ 
              width: 20, 
              height: 20, 
              background: statusFilter === "success" ? "darkgreen" : "green", 
              cursor: "pointer",
              border: "1px solid #ddd"
            }} 
          />
          <div 
            onClick={() => setStatusFilter("no")} 
            style={{ 
              width: 20, 
              height: 20, 
              background: statusFilter === "no" ? "darkorange" : "orange", 
              cursor: "pointer",
              border: "1px solid #ddd"
            }} 
          />
          <div 
            onClick={() => setStatusFilter("reject")} 
            style={{ 
              width: 20, 
              height: 20, 
              background: statusFilter === "reject" ? "darkred" : "red", 
              cursor: "pointer",
              border: "1px solid #ddd"
            }} 
          />
        </div>
      </Space>

      <Table
        dataSource={filteredData}
        columns={columns}
        rowKey={(record) => record.id}
        pagination={{ pageSize: 5 }}
        expandable={{
          expandedRowRender: (record) => expandedRowRender(record.properties, record.email)
        }}
      />

      {/* Модалка Details */}
      <Modal
        open={detailsModalOpen}
        onCancel={() => setDetailsModalOpen(false)}
        title="Property Details"
        footer={null}
        width={700}
      >
        {selectedProperty && (
          <div>
            <Carousel arrows draggable>
              {selectedProperty.images?.map((img, i) => (
                <div key={i}>
                  <img src={img.url} alt="" style={{ width: "100%", height: 300, objectFit: "cover" }} />
                </div>
              ))}
            </Carousel>
            <div style={{ marginTop: 16 }}>
              <p><strong>Country:</strong> {selectedProperty.information.country}</p>
              <p><strong>Neighborhood:</strong> {selectedProperty.information.neighborhood}</p>
              <p><strong>Type:</strong> {selectedProperty.information.typeProperty}</p>
              <p><strong>Address:</strong> {selectedProperty.information.address}</p>
              <p><strong>Location:</strong> {selectedProperty.information.location}</p>
              <p><strong>Price:</strong> {selectedProperty.iAInformation.price.toLocaleString("ru-RU")} UZS</p>
              <p><strong>Size:</strong> {selectedProperty.iAInformation.size} m²</p>
              <p><strong>Rooms:</strong> {selectedProperty.iAInformation.rooms}</p>
              <p><strong>Bathrooms:</strong> {selectedProperty.iAInformation.bathrooms}</p>
              <p><strong>Year Built:</strong> {selectedProperty.iAInformation.yearBuilt}</p>
              <p><strong>Permission:</strong> {selectedProperty.permission}</p>
              <p><strong>Review:</strong> {selectedProperty.review}</p>
              <p><strong>Description:</strong> {selectedProperty.iDescription.description}</p>
              <p><strong>Amenities:</strong> {selectedProperty.amenities?.join(", ")}</p>
            </div>
          </div>
        )}
      </Modal>

      {/* Модалка Edit */}
      <Modal
        open={actionModalOpen && actionType === "edit"}
        onCancel={() => setActionModalOpen(false)}
        title="Edit Property"
        footer={[
          <Button key="cancel" onClick={() => setActionModalOpen(false)}>
            Cancel
          </Button>,
          <Button
            key="save"
            type="primary"
            onClick={() => {
              form.validateFields().then(values => {
                if (selectedProperty && selectedEmail) {
                  // Собираем обновленные данные
                  const updatedProperty = {
                    ...selectedProperty,
         
                    permission: values.permission,
                    review: values.review,
                  
               
                  };
                  handleSubmit(updatedProperty);
                  setActionModalOpen(false);
                }
              });
            }}
          >
            Save
          </Button>
        ]}
        width={700}
      >
        <Form layout="vertical" form={form}>
          
     
      
        
     
      
      
      
          <Form.Item name="permission" label="Permission">
            <Select>
              <Option value="approved">Approved</Option>
              <Option value="pending">Pending</Option>
              <Option value="rejected">Rejected</Option>
            </Select>
          </Form.Item>
          <Form.Item name="review" label="Review">
            <Input />
          </Form.Item>
      
        </Form>
      </Modal>
    </div>
  );
}
