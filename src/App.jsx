import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Peserta } from './components/Peserta'
import DataPeserta from './components/DataPeserta'
import FormPeserta from './components/FormPeserta'

function App() {

  const [ListPeserta, setListPeserta] = useState(Peserta)
const [editPeserta, setEditPeserta] = useState(null)

  const handleSubmit = (dataPeserta) => {
    if(editPeserta){
      setListPeserta(
        setListPeserta.map((item) => (item.id === dataPeserta.id ? dataPeserta : item)))
        setEditPeserta(null)
      
    }else {
      setListPeserta([...ListPeserta, dataPeserta])
    }
    console.log(dataPeserta)
  }

  const handleHapus = (id) => {
    setListPeserta(ListPeserta.filter((item) => item.id !== id))
    if (id=== pesertaEdit.id ) {
      setEditPeserta(null)
    }
  }

  return (
    <>
      <FormPeserta onSimpan={handleSubmit} pesertaEdit={editPeserta} />
      {/* map: looping jg */}
      {ListPeserta.map((item) => (
        <DataPeserta key={item.id} peserta={item} onEdit={setEditPeserta} onHapus={handleHapus} />
      ))}
    </>
  )
}

export default App
