import { FaTrash } from "react-icons/fa";
import useClass from "../../Hook/useClass";
import Swal from "sweetalert2";

const MyClass = () => {
    const [selected,refetch]=useClass()
    const total = selected.reduce((sum,item)=> item.price + sum, 0)
    const handleDelete= item=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Deleted Now'
          }).then((result) => {
            if (result.isConfirmed) {
           
            fetch(`http://localhost:5000/selected/${item._id}`,{
                method:'DELETE'

            })
            .then(res =>res.json())
            .then(data=>{
                if(data.deletedCount >0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
            })
            }
          })
    }
   
    return (
        <div>
           
            <h1 className="text-3xl text-white ">You can Selected {selected.length} classes </h1>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className=" text-red-500 ">
      <tr>
        <th>
          #
        </th>
        <th>Class</th>
        <th>Instructor</th>
        <th>Price</th>
        <th><FaTrash className="text-xl text-red-500"></FaTrash> </th>
      </tr>
    </thead>
    <tbody>
        {
            selected.map((my,index)=><tr
            key={my._id}
            className=" text-white "
            >
                <th>
                 {index +1}
                </th>
                <td >
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={my.image} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{my.name}</div>
                     
                    </div>
                  </div>
                </td>
                <td>
                 {my.instructorName}
                 
                </td>
                <td>${my.price}</td>
                <th>
                  <button onClick={()=>handleDelete(my)} className="btn btn-ghost btn-xs">remove</button>
                </th>
              </tr>)
        }
      {/* row 1 */}
      
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th></th>
        <th className="text-red-600 text-lg font-semibold">total price :</th>
        <th className="text-white text-lg ">$ {total}</th>
        <th>
        <button className="btn btn-outline btn-error btn-sm">pay</button>
        </th>
      
      </tr>
    </tfoot>
    
  </table>
</div>

        </div>
    );
};

export default MyClass;