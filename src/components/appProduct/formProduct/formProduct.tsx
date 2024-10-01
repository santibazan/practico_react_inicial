import { Button, Form, FormLabel } from "react-bootstrap";
import { useForm } from "../../../hooks/useForm";
import { FC } from "react";

interface IPropsFormProduct {
    handleAddProduct: Function;
  }
  
  export const FormProduct: FC<IPropsFormProduct> = ({ handleAddProduct }) => {
    const { handleChange, values, resetForm } = useForm({
      nombre: "",
      imagen: "",
      precio: 0,
    });
  
    const handleSubmitForm = () => {
      handleAddProduct(values);
      resetForm();
    };
  
    return (
      <Form className="p-4 border rounded m-3">
        <Form.Group controlId="formNombre">
          <FormLabel>Nombre</FormLabel>
          <Form.Control
            type="text"
            name="nombre"
            placeholder="Ingrese el nombre del producto"
            value={values.nombre}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formNombre">
          <FormLabel>Imagen</FormLabel>
          <Form.Control
            type="text"
            name="imagen"
            placeholder="Ingrese la imagen del producto"
            value={values.imagen}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formNombre">
          <FormLabel>Precio</FormLabel>
          <Form.Control
            type="number"
            name="precio"
            placeholder="Ingrese el precio del producto"
            value={values.precio}
            onChange={handleChange}
          />
        </Form.Group>
        <div className="d-flex justify-content-center mt-4">
          <Button onClick={handleSubmitForm} variant="primary">
            Enviar Producto
          </Button>
        </div>
      </Form>
    );
  };