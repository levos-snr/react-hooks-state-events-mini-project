import React,{useState} from "react";

function NewTaskForm({categories,onTaskFormSubmit}) {
  const [formData, setFormData] = useState({
    text: "",
    category: "Code"
  })
  
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
     
  }
  
  
  
  
  
  const handleSubmit = (event) => {
    event.preventDefault()
    onTaskFormSubmit(formData)

  }
  
 
  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleChange}>
          {
            categories.filter(category => category !== "All").
              map(category => <option key={category}>{category}</option>)
        }
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
