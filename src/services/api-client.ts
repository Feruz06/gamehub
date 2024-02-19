import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: '66cc678e6d5d4209b4df171584484b52',
	},
})
