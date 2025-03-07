import axios from 'axios';
import React, { useState } from 'react';

function AddCategoryForm() {
    const [categoryName, setCategoryName] = useState("");
    const [fields, setFields] = useState([]);

    // Add a new field entry
    const addField = () => {
        setFields([...fields, { fieldName: "", options: "" }]);
    };

    // Update field data
    const updateField = (index, key, value) => {
        const updated = [...fields];
        updated[index][key] = value;
        setFields(updated);
        console.log("Updated Fields:", updated);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formattedFields = fields.map(field => ({
            name: field.fieldName,
            options: field.options.split(",").map(opt => opt.trim())
        }));

        const payload = {
            categoryName: categoryName,
            fields: formattedFields
        };

        console.log("Submitting Category:", payload);

        try {
            const response = await axios.post('http://localhost:3000/admin/catagory', payload)
            const data = response.data
            console.log(data)
        } catch (err) {
            console.log(err)
        }
        setCategoryName('')
        setFields([])

        alert("Category Saved!");
    };

    return (
        <div>
            <div class='flex items-center justify-center mt-10'>

            <h2 className="text-xl font-bold mb-4">Add New Category</h2>
            </div>
        <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-md">

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Category Name */}
                <div>
                    <label className="block font-medium">Category Name</label>
                    <input
                        type="text"
                        placeholder="e.g., Books, Electronics"
                        className="w-full border p-2 rounded"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        required
                    />
                </div>

                {/* Dynamic Fields Section */}
                <h3 className="font-semibold">Custom Fields (Dynamic)</h3>
                {fields.map((field, index) => (
                    <div key={index} className="flex gap-4 items-center">
                        <input
                            type="text"
                            placeholder="Field Name (e.g., Type, Language)"
                            value={field.fieldName}
                            onChange={(e) => updateField(index, "fieldName", e.target.value)}
                            className="border p-2 rounded flex-1"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Options (comma separated, e.g., English, Urdu)"
                            value={field.options}
                            onChange={(e) => updateField(index, "options", e.target.value)}
                            className="border p-2 rounded flex-2"
                            required
                        />
                    </div>
                ))}

                {/* Add More Fields Button */}
                <button
                    type="button"
                    onClick={addField}
                    className="px-2 py-2 bg-black text-white w-11 h-11 shrink-0 grow-0 rounded-full ml-5 mr-5"
                >
                    +
                </button>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="px-6 py-2 bg-white text-black rounded border border-black"
                >
                    Save Category
                </button>
            </form>
        </div>
        </div>
    );
}

export default AddCategoryForm;
