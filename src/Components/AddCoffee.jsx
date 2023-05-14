import Swal from 'sweetalert2'

const AddCoffee = () => {
  const AddCoffeeHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.coffeeName.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.tasteName.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.PhotoURL.value;
    const quantity = form.quantity.value;


    // Let's create a new object with the
    const newCoffee = { name, chef, supplier, taste, category, details, photo, quantity };
    console.log(newCoffee); // Required data from client side / UI

    // Now we've to send these data to the backend-server
    fetch('http://localhost:5009/coffee', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newCoffee),
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data); //
        if(data.insertedID){ // Using Sweet alert after install npm i sweetalert2
            Swal.fire({
                title: 'Success!',
                text: 'Coffee added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
  };


  return (
    <div className=" text-center bg-[#f4f3f0] p-24">
      <h2 className="text-3xl font-extrabold">Add a Coffee</h2>
      <p>
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form onSubmit={AddCoffeeHandler}>
        {/* Form row 1 */}
        <div className="md:flex gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text"> Name</span>
            </label>
            <label className="input-group">
              <input
                name="coffeeName"
                type="text"
                placeholder="Enter Coffee Name"
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <label className="input-group">
              <input
                name="chef"
                type="text"
                placeholder="Enter Chef Name"
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
        </div>
        {/* Form row 2 */}
        <div className="md:flex gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text"> Supplier</span>
            </label>
            <label className="input-group">
              <input
                name="supplier"
                type="text"
                placeholder="Enter Coffee Supplier"
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Test</span>
            </label>
            <label className="input-group">
              <input
                name="tasteName"
                type="text"
                placeholder="Enter Coffee Taste"
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
        </div>
        {/* Form row 3 */}
        <div className="md:flex gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text"> Category</span>
            </label>
            <label className="input-group">
              <input
                name="category"
                type="text"
                placeholder="Enter Coffee Category"
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                name="details"
                type="text"
                placeholder="Enter Coffee Details"
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
        </div>
        {/* Form row 4 */}
        <div className="md:flex gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text"> Photo</span>
            </label>
            <label className="input-group">
              <input
                name="PhotoURL"
                type="text"
                placeholder="Enter Coffee PhotoURL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text"> Quantity</span>
            </label>
            <label className="input-group">
              <input
                name="quantity"
                type="text"
                placeholder="Enter Coffee Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          
        </div>
        <div className="form-control mt-5">
            <label className="input-group">
              <input
                className="btn btn-block mt-8"
                type="submit"
                value="Add A Coffee"
              />
            </label>
          </div>
      </form>
    </div>
  );
};

export default AddCoffee;
