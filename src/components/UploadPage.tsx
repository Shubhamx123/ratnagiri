import React, { useState } from 'react';
import { Upload as UploadIcon, Image, Tag, FileText, Folder } from 'lucide-react';

const categories = [
  'Geoglyphs',
  'Archaeological Sites',
  'Natural Heritage',
  'Cultural Heritage',
  'Biodiversity',
  'Conservation',
  'Documentation'
];

const UploadPage = () => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (file: File) => {
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-off-white py-12">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-merriweather font-bold text-text-dark mb-8">
            Upload Geoglyph Image
          </h1>

          <div className="bg-white rounded-lg shadow-md p-8">
            <form className="space-y-8">
              {/* Image Upload Area */}
              <div 
                className={`relative border-2 border-dashed rounded-lg p-8 text-center
                  ${dragActive ? 'border-forest-green bg-forest-green/5' : 'border-gray-300'}
                  ${preview ? 'border-solid' : ''}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {preview ? (
                  <div className="relative">
                    <img 
                      src={preview} 
                      alt="Preview" 
                      className="max-h-64 mx-auto rounded-lg"
                    />
                    <button 
                      type="button"
                      onClick={() => {
                        setSelectedFile(null);
                        setPreview(null);
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileInput}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <Image size={48} className="text-gray-400" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-gray-700">
                          Drag and drop your image here
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                          or click to browse from your computer
                        </p>
                      </div>
                      <div className="text-xs text-gray-400">
                        Supported formats: JPG, PNG, GIF (max 10MB)
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Image Details */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-1">
                    <div className="flex items-center space-x-2">
                      <FileText size={16} />
                      <span>Title</span>
                    </div>
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent transition-colors"
                    placeholder="Enter a descriptive title"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-1">
                    <div className="flex items-center space-x-2">
                      <FileText size={16} />
                      <span>Description</span>
                    </div>
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent transition-colors"
                    placeholder="Provide details about the image, location, historical context, etc."
                  />
                </div>

                <div>
                  <label htmlFor="tags" className="block text-sm font-semibold text-gray-700 mb-1">
                    <div className="flex items-center space-x-2">
                      <Tag size={16} />
                      <span>Tags</span>
                    </div>
                  </label>
                  <input
                    type="text"
                    id="tags"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent transition-colors"
                    placeholder="Add tags separated by commas (e.g., ancient, petroglyphs, konkan)"
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-1">
                    <div className="flex items-center space-x-2">
                      <Folder size={16} />
                      <span>Category</span>
                    </div>
                  </label>
                  <select
                    id="category"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent transition-colors"
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category.toLowerCase()}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-forest-green text-white rounded-lg hover:bg-forest-green/90 transition-colors flex items-center space-x-2"
                >
                  <UploadIcon size={16} />
                  <span>Upload Image</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;