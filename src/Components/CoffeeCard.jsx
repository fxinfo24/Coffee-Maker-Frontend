import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';

const CoffeeCard = ({ coffee }) => {
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
  } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    //
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire("Deleted!", "Your file has been deleted.", "success");

        fetch(`http://localhost:5009/coffee/${_id}`, {
            method: "DELETE"
        })
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
                Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
            }
        })
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="w-48" src={photo} alt="Coffee" />
      </figure>
      <div className="flex justify-between w-full">
        <div className="pl-5 my-auto">
          <h2 className="card-title">Name: {name}</h2>
          <p>Chef: {chef}</p>
          <p>Taste: {taste}</p>
          <p>Quantity: {quantity}</p>
        </div>
        <div className="card-actions justify-end my-auto">
          <div className="btn-group btn-group-vertical space-y-4">
            <button className="btn"><FaEye></FaEye></button>
            <Link to = {`updateCoffee/${_id}`}><button className="btn"><FaEdit></FaEdit></button></Link>
            <button onClick={() => handleDelete(_id)} className="btn">
            <FaTrash></FaTrash>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
