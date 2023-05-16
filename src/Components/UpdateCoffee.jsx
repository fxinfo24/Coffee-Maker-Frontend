import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
    const updateCoffee = useLoaderData()
    const {
        _id,
        name,
        chef,
        supplier,
        taste,
        category,
        details,
        photo,
        quantity,
      } = updateCoffee;
    return (
        <div>
            
        </div>
    );
};

export default UpdateCoffee;