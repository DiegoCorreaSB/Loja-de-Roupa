import { useState, useRef } from "react";

const UploudImage = () => {

    const [preview, setPreview] = useState('https://images.icon-icons.com/565/PNG/512/cloud-upload_icon-icons.com_54314.png');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]; // Pega o primeiro arquivo selecionado

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);
        }
    }


    const clickBtn = () => {
        // 2. Disparamos o clique do input escondido via código
        fileInputRef.current?.click();
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {
                preview && (
                    <div style={{ marginTop: '10px' }}>
                        <img
                            src={preview}
                            alt="Preview"
                            style={{ width: '150px', borderRadius: '8px' }}
                        />
                    </div>
                )
            }
            <div>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                />

                <button className="upImg"
                    type="button"
                    onClick={clickBtn}
                >
                    Selecionar Imagem
                </button>
            </div>
        </div>

    )
}

export default UploudImage