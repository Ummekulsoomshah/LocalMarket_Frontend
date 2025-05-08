// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// const ItemaddPage = () => {
//   const navigate = useNavigate()
//   let { categId } = useParams()
//   let {catagory}=useParams()
//   const [isused, setused] = useState(false)
//   const [fields, setFields] = useState([])

//   const [image, setimage] = useState(null)
//   const [title, settitle] = useState('')
//   const [description, setdiscription] = useState('')
//   const [price, setPrice] = useState('')
//   const [dynamicfields, setdynamicfields] = useState({})
//   const handleFieldchange = (fieldname, value) => {
//     setdynamicfields((prev) => ({
//       ...prev,
//       [fieldname]: value
//     }))
//     console.log('dynamicfields',dynamicfields)
//   }

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     const formdata = new FormData();
//     formdata.append("image", image);
//     formdata.append("title", title);
//     formdata.append("description", description);
//     formdata.append("price", price);
//     formdata.append("isUsed", isused);
//     formdata.append("categId", categId);
//     formdata.append('fields',JSON.stringify(dynamicfields))

//     // Append dynamic fields
//     // Object.entries(dynamicfields).forEach(([key, value]) => {
//     //   formdata.append(key, value);
//     // });

//     for (let [key, value] of formdata.entries()) {
//       console.log(`${key}: ${value}`);
//     }

//     try {
//       console.log(localStorage.getItem('token'))
//       const response = await axios.post('http://localhost:3000/adproducts', formdata,
//         {
//           headers: {
//             'Content-type': 'multipart/form-data',
//             'authorization': `Bearer ${localStorage.getItem('token')}`
//           }
//         }
//       )
//       if (response.status === 200) {
//         const message = response.data.message
//         const insertId=response.data.insertid
//         console.log(message)
//         navigate(`/ProductDisplay/${insertId}`)
//       } else {
//         console.log("error in making post")
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   console.log(title, description, isused, dynamicfields, image)


//   useEffect(() => {
//     const fetchCategoryFields = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/getCatagorieFields/${catagory}`)
//         if (response.status == 200) {
//           const data = await response.data.fields
//           setFields(data)
//           console.log("data", data)
//           console.log("fields", fields)
//           console.log("fileds retrived successfuly")
//         } else {
//           console.log("error in retriving fields")
//         }
//       } catch (err) {
//         console.log(err)
//       }
//     }
//     fetchCategoryFields()

//   }, [])

//   return (
//     <div>
//       <div class='flex justify-center items-center'
//       ><h1 class='text-2xl mt-5 font-bold text-black'>POST YOUR AD</h1></div>

//       <div className="min-h-screen flex items-center justify-center">
//         <div className="bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg">
//           {/* Category Section */}
//           <div className="flex items-center justify-between border-b pb-4 mb-4">
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">

//               </div>
//               <div>
//                 <h3 className="font-bold text-lg">{categId}</h3>
//                 <p className="text-sm text-gray-500">All used or Second hand items you can sell</p>
//               </div>
//             </div>
//             <button className="text-blue-600 hover:underline" onClick={() => navigate('/CatagoryAd')}>Change</button>
//           </div>

//           <form onSubmit={(e) => { submitHandler(e) }}>
//             {/* Upload Images Section */}
//             <div className="mb-4">
//               <label className="block font-semibold mb-2">Upload Images</label>
//               <div className="grid grid-cols-2 gap-2">
//                 <div
//                   className="w-full h-16 border border-gray-300 rounded flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-100"
//                 >
//                   *png file
//                   <input
//                     required

//                     onChange={(e) => { setimage(e.target.files[0]) }}
//                     type="file"
//                     id="image"
//                     name="image"
//                     className="w-full p-2 bg-gray-700 text-gray-300 rounded-md "
//                   />
//                 </div>
//               </div>
//               <p className="text-xs text-gray-500 mt-2">
//                 For the cover picture we recommend using landscape mode.
//               </p>
//             </div>

//             {/* Condition */}
//             <div className="mb-4">
//               <label className="block font-semibold mb-2">Condition*</label>
//               <div className="flex gap-4">
//                 <button type='button' className={`border px-4 py-2 rounded ${isused ? "" : 'bg-gray-100'}`}
//                   onClick={() => setused(false)}
//                 >New</button>
//                 <button type='button' className={`border px-4 py-2 rounded ${isused ? "bg-gray-100" : ''}`}
//                   onClick={() => setused(true)}>Used</button>
//               </div>
//             </div>

//             {fields.map((field, index) => (
//               <div className="mb-4" key={index}>
//                 <label className="block font-semibold mb-2">{field.name}</label>
//                 <select
//                   onChange={(e) => handleFieldchange(field.name, e.target.value)}
//                   value={dynamicfields[field.name] || ''}
//                   className="w-full border p-2 rounded"
//                 >
//                   <option value="">Select {field.name}</option>
//                   {field.options.map((option, optIndex) => (
//                     <option key={optIndex} value={option}>
//                       {option}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             ))}



//             {/* Ad Title */}
//             <div className="mb-4">
//               <label className="block font-semibold mb-2">Ad title*</label>
//               <input
//                 value={title}
//                 onChange={(e) => settitle(e.target.value)}
//                 type="text"
//                 className="w-full border p-2 rounded"
//                 placeholder="Mention key features of your item"
//               />
//             </div>

//             {/* Description */}
//             <div className="mb-4">
//               <label className="block font-semibold mb-2">Description*</label>
//               <textarea
//                 value={description}
//                 onChange={(e) => setdiscription(e.target.value)}
//                 className="w-full border p-2 rounded"
//                 placeholder="Describe the item you’re selling"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block font-semibold mb-2">Price*</label>
//               <textarea
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//                 className="w-full border p-2 rounded"
//                 placeholder="please enter the price"
//               />
//             </div>
//             {/* Submit Button */}
//             <div className="text-right">
//               <button type='submit' className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
//                 Post Ad
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default ItemaddPage
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ItemaddPage = () => {
  const navigate = useNavigate();
  let { categId, catagory } = useParams();
  const [isUsed, setUsed] = useState(false);
  const [fields, setFields] = useState([]);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [dynamicFields, setDynamicFields] = useState({});

  const handleFieldChange = (fieldName, value) => {
    setDynamicFields((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("isUsed", isUsed);
    formData.append("categId", categId);
    formData.append('fields', JSON.stringify(dynamicFields));

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:3000/adproducts', formData, {
        headers: {
          'Content-type': 'multipart/form-data',
          'authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        const insertId = response.data.insertid;
        navigate(`/ProductDisplay/${insertId}`);
      } else {
        console.error('Error posting the ad');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const fetchCategoryFields = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/getCatagorieFields/${catagory}`);
        if (response.status === 200) {
          const data = response.data.fields;
          setFields(data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategoryFields();
  }, [catagory]);

  return (
    <div>
      <h1>POST YOUR AD</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Upload Image</label>
          <input
            required
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
          />
        </div>
        <div>
          <label>Condition</label>
          <button type='button' onClick={() => setUsed(false)}>New</button>
          <button type='button' onClick={() => setUsed(true)}>Used</button>
        </div>

        {fields.map((field, index) => (
          <div key={index}>
            <label>{field.name}</label>
            <select
              onChange={(e) => handleFieldChange(field.name, e.target.value)}
              value={dynamicFields[field.name] || ''}
            >
              <option value="">Select {field.name}</option>
              {field.options.map((option, optIndex) => (
                <option key={optIndex} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}

        <div>
          <label>Ad Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            required
          />
        </div>

        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Price</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div>
          <button type='submit'>Post Ad</button>
        </div>
      </form>
    </div>
  );
};

export default ItemaddPage;
