import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({coffee, loadedCoffees, setLoadedCoffees}) => {

    const {_id, name, quantity, supplier, taste, Photo} = coffee;

    const handleDelete = id =>{
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

              fetch(`http://localhost:5000/coffee/${id}`, {
                method: 'DELETE'
              })
              .then(res =>res.json())
              .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your coffee has been deleted.",
                        icon: "success"
                      });
                      const remaining = loadedCoffees.filter(coffee => coffee._id !== id);
                      setLoadedCoffees(remaining);
                }
              })

            }
          });
        
    }

    return (
        <div className="card card-side bg-[#d2b48c1e]">
            <figure>
                <img
                className="max-h-52 max-w-48"
                src={Photo}
                alt="Movie" />
            </figure>
            <div className="flex justify-between w-full pr-4 py-10">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Chef: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Taste: {taste}</p>
                </div>
                <div className="card-actions justify-end">
                <div className="join join-vertical space-y-4">
                    <button className="btn-sm rounded-lg bg-[#D2B48C] text-white"><FaEye /></button>
                    <Link to={`updateCoffee/${_id}`}><button className="btn-sm rounded-lg bg-black text-white"><FaPencilAlt /></button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn-sm rounded-lg bg-red-600 text-white"><MdDelete /></button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;