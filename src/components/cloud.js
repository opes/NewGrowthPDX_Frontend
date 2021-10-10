const { useState } = require('react');

function App() {

    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState("");

    const uploadImage = async event => {
        const files = event.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'plantimages')
        setLoading(true)

        const res = await fetch("https://api.cloudinary.com/v1_1/mountaincloud/image/upload",
        {
            method: 'POST',
            body: data
        })

        const file = await res.json()

        console.log(file)
    }

    return (
        <div className="Cloud">
            <h1>Upload</h1>
            <input type="file" name="file" placeholder="upload image" onChange={uploadImage}/>
            <button></button>
        </div>
    )
}

export default App;