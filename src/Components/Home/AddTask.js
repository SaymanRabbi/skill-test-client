import React from 'react';
import { useForm } from 'react-hook-form';
const AddTask = ({refetch}) => {
    const { register, handleSubmit, formState: { errors },reset } = useForm();
  const onSubmit = (data) => {
      const task = {
          name: data.name,
          task:data.textarea
      }
      fetch('https://limitless-taiga-02244.herokuapp.com/task', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(task)
      }).then(res => res.json()).then(data =>  refetch())
      refetch()
      reset()
  };
    return (
        <div className='flex justify-center items-center py-10'>
        <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
<form onSubmit={handleSubmit(onSubmit)}>
<div className="form-control w-full max-w-xs">
        <input type="text"  placeholder="Your Name" className="input input-bordered w-full max-w-xs"{...register("name",{
            required: {
                value: true,
                message:"Your Name"
            },
        })}
        />
        <label className="label">
            {
                errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>
            }
    
    </label>
</div>
<div className="form-control w-full max-w-xs">
        <textarea type="text" placeholder="Your Task...." className="input input-bordered w-full max-w-xs"{...register("textarea",{
            required: {
                value: true,
                message:"Your task"
            }
        })} />
        <label className="label">
            {
                errors.password?.type === 'textarea' && <span className="label-text-alt text-red-600">{errors.textarea.message}</span>
            }
    
        </label>
        
    </div>
    <input type="submit" value='Add Task' className="btn w-full max-w-xs" />
</form>
                </div>
            </div>
            </div>
    );
};

export default AddTask;