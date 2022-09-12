import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onGetSamples, onDeleteSample } from '../../../../../redux/actions';
import { Fonts } from '../../../../../shared/constants/AppEnums';
import ConfirmationDialog from '../../../../../@crema/core/ConfirmationDialog';
import InfoView from '../../../../../@crema/core/InfoView';
import config from '../../../../../shared/config';
import { TableComponent, BreadCrumbs, DeleteDrawer } from '../../../../../shared/components';
import Update from '../update';
import { FETCH_SUCCESS, FETCH_START } from '../../../../../shared/constants/ActionTypes';

const { PAGE_LIMIT } = config;

const Lists = () => {
	const [breadCrumbsLinks, setBreadCrubmlinks] = useState([{href: '#', name: 'Company Details'}])
	const dispatch = useDispatch();
	const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(PAGE_LIMIT);
	const [filterText, onSetFilterText] = useState('');
	const [isOnInitFilterText, onInitFilterText] = useState(true);
	const [isDeleteDialogOpen, onDisplayDialog] = useState(false);
	const [selectedSample, onSetSelectedSample] = useState(null);
	const {samples, deleted} = useSelector(({ samples }) => samples);
	const [uuid, setUuid] = useState(null);
	const [samplesDrawerOpen, setSamplesDrawerOpen] = useState(false);
	const [deleteDrawerOpen, setDeleteDrawerOpen] = useState(false);
	const [deleteInfo, setDeleteInfo] = useState({ title: '', message: ''});
	
	const columns = [
		{
			label: 'Type',
			id: 'project_type',
			type: 'text',
			fontWeight: Fonts.BOLD,
			minWidth: 120,
			align: 'left',
		},
		{
			label: 'Description',
			id: 'description',
			type: 'html',
			fontWeight: Fonts.BOLD,
			minWidth: 120,
			align: 'left',
		},
		{
			label: 'Year',
			id: 'year',
			type: 'text',
			fontWeight: Fonts.BOLD,
			minWidth: 120,
			align: 'left',
		},
		{
			label: 'Actions',
			type: 'action',
			actions: [ 'Edit', 'Delete' ],
			minWidth: 120,
			align: 'center',
		}
	]
		
	useEffect(async () => { 
		dispatch({type: FETCH_START});
		setPage(0); 
		dispatch({type: FETCH_SUCCESS});
	}, []);
	
	useEffect(() => { 
		const pagination = { limit: rowsPerPage, page: 0 };
		dispatch(onGetSamples(pagination, null)); 
	}, [dispatch]);

	useEffect(() => {  
		if(deleted) { 
			loadSamples();
		}
	}, [deleted])

	/* Filters and paginations */
	const onPageChange = (event, value) => { 
		setPage(value);	
		const pagination = { limit: rowsPerPage, page: value };
		const filter = (filterText) ? filterText : null;
		dispatch(onGetSamples(pagination, filter)); 
	}

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			if(!isOnInitFilterText) {	
				const pagination = { limit: rowsPerPage, page: 0 };
				const filter = (filterText) ? filterText : null;
				dispatch(onGetSamples(pagination, filter)); 
			} else { onInitFilterText(false); }
		}, 1000);
		return () => clearTimeout(timeoutId);
	}, [filterText]);

	const loadSamples = async   () => { 
		const pagination = { limit: rowsPerPage, page };
		const filter = (filterText) ? filterText : null;
		dispatch(onGetSamples(pagination, filter));
	}

	const onPageRowsChange = (event) => {
		const { value } = event.target;
		setRowsPerPage(value);	
		const pagination = { limit: value, page: 0 };
		const filter = (filterText) ? filterText : null;
		dispatch(onGetSamples(pagination, filter)); 
	}

	/* Table actions */
	const onClickAction = (action, item) => {
		onSetSelectedSample(item);
		
		if(action == 'Edit') { 
			setUuid(item.uuid);
			setSamplesDrawerOpen(true); 
		} 
		else if(action == 'Delete') { 
			setDeleteDrawerOpen(true);
			setDeleteInfo({
				title: `Delete ${item.type}`,
				message: `You are about to delete this commpany achievement! upon deletion you can inform the administrator if you want to restore this user.`
			})
		}
	}

	/* Action click events */
	const onClickDeleteSample = (event) => {
		const {uuid} = selectedSample;
		setDeleteDrawerOpen(false);
		if(!event) { onSetSelectedSample(null); } 
		else {
			if(uuid) { dispatch(onDeleteSample(uuid)); }
		}
	}
	
	const onClickCreate = () => {
		setUuid(null);
		setSamplesDrawerOpen(true);
	}

	const onSubmitDelete = () => {
		onClickDeleteSample(true);
		setSamplesDrawerOpen(false);
	}

	return (
		<>
			<BreadCrumbs links={breadCrumbsLinks}/>

			<Update
				loadSamples={loadSamples}
				samplesDrawerOpen={samplesDrawerOpen}
				setSamplesDrawerOpen={setSamplesDrawerOpen}
				uuid={uuid}
			/>

			<DeleteDrawer 
				info={deleteInfo}
				drawerOpen={deleteDrawerOpen}
				setDrawerOpen={setDeleteDrawerOpen}
				onSubmitDelete={onSubmitDelete}
			/>

			<TableComponent 
				columns={columns}
				rowsPerPage={rowsPerPage}
				totalList={ samples.total }
				rows={ samples.data }
				hasHeader={ false }
				page={ page }
				onPageChange={ onPageChange }
				onPageRowsChange={ onPageRowsChange }
				filterText={ filterText }
				onSetFilterText = { onSetFilterText }
				onClickAction={ onClickAction }
				hasCreate={true}
				onClickCreate={onClickCreate}
				createLabel="Create company achievement"
			/>
			{
				isDeleteDialogOpen ? (
					<ConfirmationDialog
						open={isDeleteDialogOpen}
						onDeny={() => onClickDeleteSample(false) }
						onConfirm={() => onClickDeleteSample(true) }
						title="Are you sure you want to delete this company achievement?"
						dialogTitle="Delete company achievement"
					/>
				) : null
			}
			<InfoView />
		</>
	);
}

export default Lists;
