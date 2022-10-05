import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';

const NewBoxForm = ({addBox}) => {
    const initialState = {
        width: "",
        height: "",
        backgroundColor: ""
    }
    const [formData, setFormData] = useState(initialState);

    const handleChange = e => {
        const { name,value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData, id: uuid() });
        setFormData(initialState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width (px) </label>
            <input
                id="width"
                type="text"
                name="width"
                placeholder="width"
                value={formData.width}
                onChange={handleChange}
            />

            <label htmlFor="height">Height (px) </label>
            <input
                type="text"
                placeholder="height"
                name="height"
                id="height"
                value={formData.height}
                onChange={handleChange}
            />

            <label htmlFor="backgroundColor">Background Color </label>
            <input
                type="text"
                placeholder="backgroundColor"
                name="backgroundColor"
                id="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
            />

            <button>Create New Box!</button>
        </form>
    )
}

export default NewBoxForm;