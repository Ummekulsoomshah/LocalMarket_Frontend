import React from 'react'
import { useParams } from 'react-router-dom'
const ItemaddPage = () => {
  let {catagory}=useParams()
  console.log(catagory)
  return (
    <div>
      <div class='flex justify-center items-center'
      ><h1 class='text-2xl mt-5 font-bold text-black'>POST YOUR AD</h1></div>

      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg">
          {/* Category Section */}
          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                📚 {/* You can replace this with an actual image */}
              </div>
              <div>
                <h3 className="font-bold text-lg">{catagory}</h3>
                <p className="text-sm text-gray-500">All used or Second hand items you can sell</p>
              </div>
            </div>
            <button className="text-blue-600 hover:underline">Change</button>
          </div>

          {/* Upload Images Section */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Upload Images</label>
            <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className="w-16 h-16 border border-gray-300 rounded flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-100"
                >
                  📷
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              For the cover picture we recommend using landscape mode.
            </p>
          </div>

          {/* Condition */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Condition*</label>
            <div className="flex gap-4">
              <button className="border px-4 py-2 rounded bg-gray-100">New</button>
              <button className="border px-4 py-2 rounded">Used</button>
            </div>
          </div>

          {/* Type */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Type*</label>
            <select className="w-full border p-2 rounded">
              <option>Select type</option>
            </select>
          </div>

          {/* Language */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Language*</label>
            <select className="w-full border p-2 rounded">
              <option>Select language</option>
            </select>
          </div>

          {/* Ad Title */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Ad title*</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              placeholder="Mention key features of your item"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Description*</label>
            <textarea
              className="w-full border p-2 rounded"
              placeholder="Describe the item you’re selling"
            />
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Post Ad
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ItemaddPage
