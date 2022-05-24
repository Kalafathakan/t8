import { useState } from 'react';

type TasksProps = {
    make: string;
    model: string;
    color: string;
    id: string;
    onDelete:(id: string) => void
  }

const Cars = (props: TasksProps) => {

  const [taskName, setTaskName] = useState('');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setTaskName(e.target.value);
  };

    return (
      <div>
        
        <h4>{props.make}</h4>
        <button
          onClick={() => props.onDelete(props.id)}
        >
          Delete Car
        </button>
        <div>
          <form>
            <div>
        </div>
        <ul>
                <li>{props.model}</li>
                <li>{props.color}</li>
            </ul>
            </form>
          <hr></hr>
        </div>
      </div>
    );
  };

  export default Cars;