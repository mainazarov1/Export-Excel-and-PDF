import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { StoreContext, StoreContextContainer } from './utils/StoreContext'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<StoreContextContainer>
			<App />
		</StoreContextContainer>
	</React.StrictMode>,
)
