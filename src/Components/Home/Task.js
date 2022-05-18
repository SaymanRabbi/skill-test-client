import React from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'
const Task = ({ taskdata, refetch }) => {
    const { name, task,role } = taskdata
    const deleteTask = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
              if (result.isConfirmed) {
                fetch(`https://limitless-taiga-02244.herokuapp.com/task?id=${id}`, {
                    method:"DELETE"
                }).then(res=>res.json()).then(data=>refetch())
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }
    const update = (id) => {
             fetch(`https://limitless-taiga-02244.herokuapp.com/task?id=${id}`, {
                    method:"PUT"
             }).then(res => res.json()).then(data =>
                refetch())
                 toast.success('task completed Successfully')
                
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <div className="card-body">
                <h2 className={`card-title ${role==='update'&& 'line-through'}`}>{name}</h2>
                <p className={`${role==='update'&& 'line-through'}`}>{task}</p>
          <div className="card-actions">
            <button className="btn btn-primary" disabled={role==='update'} onClick={()=>update(taskdata._id)}>Complete</button>
            <button className="btn btn-primary" onClick={()=>deleteTask(taskdata._id)}>Delete</button>
          </div>
        </div>
      </div>
    );
};

export default Task;