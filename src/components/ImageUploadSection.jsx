import React, { useState } from "react";

const ImageUploadSection = () => {
    const [image, setImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setImage(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="image-upload-section">
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {image && <img src={image} alt="Uploaded" className="uploaded-image" />}
        </div>
    );
};

export default ImageUploadSection;