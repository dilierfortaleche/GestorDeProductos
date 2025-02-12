import React, { useState, useEffect } from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";
import api from "../api/api";

const Products = () => {
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showCategoryModal, setShowCategoryModal] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [formData, setFormData] = useState({ nombre: "", descripcion: "", precio: "", categoria: "", stock: "" });
    const [categoryName, setCategoryName] = useState("");

    useEffect(() => {
        fetchProductos();
        fetchCategorias();
    }, []);

    const fetchProductos = async () => {
        try {
            const response = await api.get("/product");
            setProductos(response.data);
        } catch (error) {
            console.error("Error al obtener productos:", error);
        }
    };

    const fetchCategorias = async () => {
        try {
            const response = await api.get("/category");
            setCategorias(response.data);
        } catch (error) {
            console.error("Error al obtener categorías:", error);
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCategoryInputChange = (e) => {
        setCategoryName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingProduct !== null) {
                await api.put(`/product/${editingProduct}`, formData);
            } else {
                await api.post("/product", formData);
            }
            setShowModal(false);
            setEditingProduct(null);
            setFormData({ nombre: "", descripcion: "", precio: "", categoria: "", stock: "" });
            fetchProductos();
        } catch (error) {
            console.error("Error al guardar producto:", error);
        }
    };

    const handleCategorySubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post("/category", { nombre: categoryName });
            setShowCategoryModal(false);
            setCategoryName("");
            fetchCategorias();
        } catch (error) {
            console.error("Error al agregar categoría:", error);
        }
    };

    const handleEdit = (producto) => {
        setEditingProduct(producto._id);
        setFormData(producto);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        try {
            await api.delete(`/product/${id}`);
            fetchProductos();
        } catch (error) {
            console.error("Error al eliminar producto:", error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Gestión de Productos</h2>
            <Button variant="primary" onClick={() => setShowModal(true)}>Agregar Producto</Button>
            <Button variant="primary" onClick={() => setShowCategoryModal(true)} className="ms-3">Agregar Categoría</Button>

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

            {/* Modal para agregar o editar producto */}
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

            {/* Modal para agregar categoría */}
            <Modal show={showCategoryModal} onHide={() => setShowCategoryModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Categoría</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleCategorySubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre de la Categoría</Form.Label>
                            <Form.Control type="text" value={categoryName} onChange={handleCategoryInputChange} required />
                        </Form.Group>
                        <Button variant="primary" type="submit">Agregar Categoría</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Products;

