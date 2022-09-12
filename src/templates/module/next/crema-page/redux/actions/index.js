import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS, CREATE_SAMPLE,
	GET_SAMPLES, DELETE_SAMPLE, SHOW_MESSAGE, GET_SAMPLE,
	UPDATE_SAMPLE
} from '../../../shared/constants/ActionTypes';

import { AdminApiConfig } from '../../../shared/services';
import { displayErrorMessage } from '../../../shared/transformers'

export const onGetSamples = (pagination = null, filter = null, leadUri = 'admin') => {
	return (dispatch) => {
		let params = {};
		if(filter) { params['filter'] = filter; }

		if(pagination) {
			params['page'] = pagination['page'];
			params['limit'] = pagination['limit'];
		}

		dispatch({type: FETCH_START});

		AdminApiConfig.get(`/samples`, {params})
			.then((result) => {
				dispatch({type: FETCH_START});
				const { data, total } = result.data;
				if (result.status === 200) {
					dispatch({type: GET_SAMPLES, payload: { total, data }});
					dispatch({type: FETCH_SUCCESS, });
				} else {
					const { message } = error.response.data;
					dispatch({
						type: FETCH_ERROR,
						payload: displayErrorMessage(message),
					});
				}
			})
			.catch((error) => {
				const { message } = error.response.data;
				dispatch({type: FETCH_ERROR, payload: displayErrorMessage(message)});
			});
	};
};

export const onDeleteSample = (uuid, leadUri = 'admin') => {
	return (dispatch) => {
		dispatch({type: FETCH_START});

		AdminApiConfig.delete(`/samples/${uuid}`)
			.then((result) => {
				if (result.status === 200) {
					dispatch({type: DELETE_SAMPLE});
					dispatch({type: SHOW_MESSAGE, payload: 'Successfully Deleted sample' });
				} else {
					const { message } = error.response.data;
					dispatch({ type: FETCH_ERROR, payload: displayErrorMessage(message) });
				}
			})
			.catch((error) => {
				const { message } = error.response.data;
				dispatch({type: FETCH_ERROR, payload: displayErrorMessage(message)});
			});
	};
}


export const onCreateSample = (data, leadUri = 'admin') => {
	return (dispatch) => {
		dispatch({type: FETCH_START});

		AdminApiConfig.post(`/samples`, data)
			.then((result) => {
				const { message } = result.data;
				if (result.status === 200) {
					dispatch({type: CREATE_SAMPLE});
					dispatch({type: SHOW_MESSAGE, payload: 'Successfully Created sample'});
				} else {
					dispatch({
						type: FETCH_ERROR,
						payload: displayErrorMessage(message),
					});
				}
			})
			.catch((error) => {
				const { message } = error.response.data;
				dispatch({type: FETCH_ERROR, payload: displayErrorMessage(message)});
			});
	};
}

export const onGetSample = (uuid, leadUri = 'admin') => {
	return (dispatch) => {
		dispatch({type: FETCH_START});

		AdminApiConfig.get(`/samples/${uuid}`)
			.then((result) => {
				const { message } = result.data;
				if (result.status === 200) {
					dispatch({type: FETCH_SUCCESS});
					dispatch({type: GET_SAMPLE, payload: result.data });
				} else {
					dispatch({ type: FETCH_ERROR, payload: displayErrorMessage(message) });
				}
			})
			.catch((error) => {
				const { message } =  error.response.data;
				dispatch({type: FETCH_ERROR, payload: displayErrorMessage(message)});
			});
	}
}

export const onUpdateSample = (uuid, data, leadUri = 'admin') => {
	return (dispatch) => {
		dispatch({type: FETCH_START});

		AdminApiConfig.put(`/samples/${uuid}`, data)
			.then((result) => {
				const { message } = result.data;
				if (result.status === 200) {
					dispatch({type: UPDATE_SAMPLE});
					dispatch({type: SHOW_MESSAGE, payload: 'Successfully updated sample'});
				} else {
					dispatch({ type: FETCH_ERROR, payload: displayErrorMessage(message) });
				}
			})
			.catch((error) => {
				const { message } = error.response.data;
				dispatch({type: FETCH_ERROR, payload: displayErrorMessage(message)});
			});
	}
}


