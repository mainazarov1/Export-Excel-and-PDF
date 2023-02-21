import { Typography } from '@mui/material'
import { useContext, useEffect } from 'react'
import './App.css'
import { TableApp } from './components/Table/TableApp'
import { columns, users } from './mockApi/mockApi'
import { StoreContext, StoreContextContainer } from './utils/StoreContext'
import { usersResponse } from './utils/UsersService'
function App() {
	const {store,setStore} = useContext(StoreContext)
	useEffect(() => { 
		usersResponse().then(res => {
			setStore(res);
		})
	}, [])
	const rows = store?.map(el => {
		return {
			id: el.id,
			name: el.name,
			price: el.address.city,
			application: el.phone,
			status: el.address.geo.lat > 0 ? 'Active' : 'Inactive',
		}
	})
	return (
		<div className="App">
			<Typography>Отчет</Typography>
			<TableApp columns={columns} rows={rows} />
		</div>
	)
}

export default App
