import { useEffect, useState } from "react"
const FormPeserta = ({ onSimpan, onCancel, pesertaEdit }) => {
    const [Nama, setNama] = useState("")
    const [Jurusan, setJurusan] = useState("")
    const [error, setError] = useState("")

    //useEffect: hasil request dari server menghasilkan sebuah data, hanya sekali di render
    //menggunakan arrow function, useEffect(() =>)
    // user
    //},[user])

    useEffect(() => {
        if (pesertaEdit) {
            setNama(pesertaEdit.nama)
            setJurusan(pesertaEdit.jurusan)
        } else {
            //
            setNama("")
            setJurusan("")
        }
    }, [pesertaEdit])

    const handleSimpan = (e) => {
        e.preventDefault()
        if (!Nama.trim() || !Jurusan.trim()) {
            setError("Mohon isi nama dan jurusan")
            return
        }
        //jika dia edit
        //jika dia tambah

        onSimpan({
            id: pesertaEdit? pesertaEdit.id : Date.now(),
            nama: Nama,
            jurusan: Jurusan
        })
        setNama("")
        setJurusan("")
    }
    return (
        <form onSubmit={handleSimpan} method="post" style={{
            background: "#0e9499",
            padding: "16px",
            borderRadius: "8px",
            marginBottom: "20px"
        }}
        >
            <h3>Tambah Peserta :{Nama}</h3>
            <div style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
            }}>
                <input type="text" placeholder="Nama Peserta" value={Nama} onChange={(e) => setNama(e.target.value)} style={{ padding: "8px" }} />
                <input type="text" placeholder="Jurusan" value={Jurusan} onChange={(e) => setJurusan(e.target.value)} style={{ padding: "8px" }} />
                <button type="submit" style={{
                    background: "#2c2fdd",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    padding: "8px 16px",
                }}
                >Simpan</button>

            </div>
        </form>
    )
}

export default FormPeserta;
