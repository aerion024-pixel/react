import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Peserta } from './components/Peserta'
import DataPeserta from './components/DataPeserta'
import FormPeserta from './components/FormPeserta'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// Route A: A

import Login from './pages/login.pages'
import MainLayout from './pages/Main.Layout'
import Dashboard from './pages/Dashboard'
import ListUser from './pages/user/List'
import Produk from './pages/Product'

function App() {

  //   const [ListPeserta, setListPeserta] = useState(Peserta)
  // const [editPeserta, setEditPeserta] = useState(null)

  //   const handleSubmit = (dataPeserta) => {
  //     if(editPeserta){
  //       setListPeserta(
  //         setListPeserta.map((item) => (item.id === dataPeserta.id ? dataPeserta : item)))
  //         setEditPeserta(null)

  //     }else {
  //       setListPeserta([...ListPeserta, dataPeserta])
  //     }
  //     console.log(dataPeserta)
  //   }

  //   const handleHapus = (id) => {
  //     setListPeserta(ListPeserta.filter((item) => item.id !== id))
  //     if (id=== pesertaEdit.id ) {
  //       setEditPeserta(null)
  //     }
  //   }

  //   return (
  //     <>
  //       <FormPeserta onSimpan={handleSubmit} pesertaEdit={editPeserta} />
  //       {/* map: looping jg */}
  //       {ListPeserta.map((item) => (
  //         <DataPeserta key={item.id} peserta={item} onEdit={setEditPeserta} onHapus={handleHapus} />
  //       ))}
  //     </>
  //   )
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" replace />} />
        <Route path="/Login" element={<Login />}></Route>
        <Route element={<MainLayout />}>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/User" element={<ListUser />}></Route>
          <Route path='/Produk' element={<Produk />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
