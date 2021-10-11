import React, { useState } from 'react';

function Cloud() {
    // const [loading, setLoading] = useState(false);
    // const [image, setImage] = useState("");

    const uploadImage = (files) => {
        console.log(files[0]);
        // const files = event.target.files
        // const data = new FormData()
        // data.append('file', files[0])
        // data.append('upload_preset', 'plantimages')
        // setLoading(true)

        // const res = fetch("https://api.cloudinary.com/v1_1/mountaincloud/image/upload",
        // {
        //     method: 'POST',
        //     body: data
        // })

        // const file = res.json()

        // console.log(file)
    }

    return (
        <div>
            <h1>Upload</h1>
            <input
                type="file"
                name="file"
                placeholder="upload image"
                onChange={(event) => {
                    uploadImage(event.target.files)
                }}
                />
            <button></button>
        </div>
    )
}

export default Cloud;