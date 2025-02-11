import React, { useState, useEffect } from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";
import api from "../api/api"; // Importar API configurada con Axios

const Products = () => {
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [formData, setFormData] = useState({ nombre: "", descripcion: "", precio: "", categoria: "", stock: "" });

    // Obtener productos y categorías al cargar el componente
    useEffect(() => {
        fetchProductos();
        fetchCategorias();
    }, []);

    const fetchProductos = async () => {
        try {
            const response = await api.get("/productos");
            setProductos(response.data);
        } catch (error) {
            console.error("Error al obtener productos:", error);
        }
    };

    const fetchCategorias = async () => {
        try {
            const response = await api.get("/categorias");
            setCategorias(response.data);
        } catch (error) {
            console.error("Error al obtener categorías:", error);
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingProduct !== null) {
                await api.put(`/productos/${editingProduct}`, formData);
            } else {
                await api.post("/productos", formData);
            }
            setShowModal(false);
            setEditingProduct(null);
            setFormData({ nombre: "", descripcion: "", precio: "", categoria: "", stock: "" });
            fetchProductos();
        } catch (error) {
            console.error("Error al guardar producto:", error);
        }
    };

    const handleEdit = (producto) => {
        setEditingProduct(producto._id);
        setFormData(producto);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        try {
            await api.delete(`/productos/${id}`);
            fetchProductos();
        } catch (error) {
            console.error("Error al eliminar producto:", error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Gestión de Productos</h2>
            <Button variant="primary" onClick={() => setShowModal(true)}>Agregar Producto</Button>
            <Table striped bordered hover className="mt-3">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Categoría</th>
                        <th>Stock</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto._id}>
                            <td>{producto.nombre}</td>
                            <td>{producto.descripcion}</td>
                            <td>${producto.precio}</td>
                            <td>{producto.categoria?.nombre}</td>
                            <td>{producto.stock}</td>
                            <td>
                                <Button variant="warning" onClick={() => handleEdit(producto)} className="me-2">Editar</Button>
                                <Button variant="danger" onClick={() => handleDelete(producto._id)}>Eliminar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{editingProduct ? "Editar Producto" : "Agregar Producto"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control type="text" name="descripcion" value={formData.descripcion} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="number" name="precio" value={formData.precio} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Categoría</Form.Label>
                            <Form.Select name="categoria" value={formData.categoria} onChange={handleInputChange} required>
                                <option value="">Selecciona una categoría</option>
                                {categorias.map((categoria) => (
                                    <option key={categoria._id} value={categoria._id}>{categoria.nombre}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type="number" name="stock" value={formData.stock} onChange={handleInputChange} required />
                        </Form.Group>
                        <Button variant="primary" type="submit">{editingProduct ? "Actualizar" : "Agregar"}</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Products;
