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
            const response = await axios.post('http://localhost:3002/addcategory', payload);
            const data = response.data;
            console.log(data);
        } catch (err) {
            console.log(err);
        }
        setCategoryName('');
        setFields([]);

        alert("Category Saved!");
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-600 text-white flex justify-center items-center p-10">
        <div className="relative w-full max-w-lg bg-white shadow-lg rounded-xl p-8">
            {/* Close Button */}
            <button
                className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl font-bold focus:outline-none"
                onClick={() => window.history.back()}
                title="Close"
            >
                &times;
            </button>

            {/* Header */}
            <div className="flex justify-center items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Add New Category</h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Category Name */}
                <div>
                    <label className="block font-medium text-gray-700">Category Name</label>
                    <input
                        type="text"
                        placeholder="e.g., Books, Electronics"
                        className="w-full border p-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        required
                    />
                </div>

                {/* Dynamic Fields Section */}
                <h3 className="font-semibold text-lg text-gray-700">Custom Fields (Dynamic)</h3>
                {fields.map((field, index) => (
                    <div key={index} className="flex gap-4 items-center">
                        <input
                            type="text"
                            placeholder="Field Name (e.g., Type, Language)"
                            value={field.fieldName}
                            onChange={(e) => updateField(index, "fieldName", e.target.value)}
                            className="border p-3 rounded-md flex-1 text-gray-800"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Options (comma separated, e.g., English, Urdu)"
                            value={field.options}
                            onChange={(e) => updateField(index, "options", e.target.value)}
                            className="border p-3 rounded-md flex-2 text-gray-800"
                            required
                        />
                    </div>
                ))}

                {/* Add More Fields Button */}
                <div className="flex justify-center">
                    <button
                        type="button"
                        onClick={addField}
                        className="px-4 py-2 bg-black text-white rounded-full shadow-md hover:bg-gray-700 transition duration-300"
                    >
                        +
                    </button>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white font-medium rounded-lg text-lg shadow-md border-b border-gray-700 hover:bg-gray-700 transition duration-300"
                    >
                        Save Category
                    </button>
                </div>
            </form>
        </div>
    </div>
    );
}

export default AddCategoryForm;
