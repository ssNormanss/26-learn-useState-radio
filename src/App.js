import "./styles.css";
import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "HTML, CSS, JS"
  },
  {
    id: 2,
    name: "ReactJS"
  },
  {
    id: 3,
    name: "VueJS"
  },
  {
    id: 4,
    name: "Angular"
  }
];

export default function App() {
  const [checked, SetChecked] = useState(2);
  const handleSubmit = () => {
    //Call API
    console.log({ ids: checked });
  };

  return (
    <div className="App" style={{ padding: 32 }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="radio"
            checked={checked === course.id}
            onChange={() => SetChecked(course.id)}
          />
          {course.name}
        </div>
      ))}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
