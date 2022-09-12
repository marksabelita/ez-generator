import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {makeStyles, Card, Box, Button} from '@material-ui/core';
import {onCreateSample, onGetSample, onUpdateSample} from '../../../../../redux/actions';
import InfoView from '../../../../../@crema/core/InfoView';
import {formData} from './formdata';
import RawHooksForm from '../../../../../shared/components/Forms/rawHooks';
import styles from './styles';
import {useLeavePage} from '../../../../../shared/hooks';
import {FETCH_START, FETCH_SUCCESS} from '../../../../../shared/constants/ActionTypes';
import Drawer from '@material-ui/core/Drawer';
import {useForm} from "react-hook-form";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';
 
const useStyles = makeStyles((theme) => styles(theme));
const Update = (props) => {
    const {
		loadSamples,
        samplesDrawerOpen,
        setSamplesDrawerOpen,
		uuid,
    } = props;

    const dispatch = useDispatch();
    
    const {created, updated, sample} = useSelector(({samples}) => samples);
    const classes = useStyles(props);
    const [initialSample, setInitialSample] = useState({ type: '', description: '' });
    const [displayForm, setDisplayForm] = useState(false);

    // init forms
    const [initFormComponent, setFormComponent] = useState(formData); 
    const onRedirectToSample = () => { setSamplesDrawerOpen(false); }
    const [enableLeavePage, setEnableLeavePage] = useState(false);
    const methods = useForm({ defaultValues: initialSample, shouldFocusError: true, shouldUnregister: false });
    const { handleSubmit, reset, getValues, setError } = methods;

    useLeavePage(enableLeavePage);

    useEffect(async () => {
        if(!uuid) { reset(initialSample); } 
        initForms();
    }, [uuid])

    useEffect(() => {
        if(SamplesDrawerOpen) {
            reset({ project_type: '', description: '', year: moment().format("YYYY") });
        }
    }, [SamplesDrawerOpen])

    useEffect(async () => {
        dispatch({type: FETCH_START});
        if(sample) { 
            console.log();
            reset({...sample, year: moment(`${sample.year}/01/01`)});
            setDisplayForm(true);
        }
        
        dispatch({type: FETCH_SUCCESS});
    }, [sample])

    useEffect(() => {
        if(created || updated) { 
            loadSamples();
            setSamplesDrawerOpen(false);
        }
    }, [created, updated]);

    // Dispath Error

    const initForms = () => {
        if(uuid) { dispatch(onGetSample(uuid)); }
        console.log(formData);
        setFormComponent(formData);
        setDisplayForm(true);
    }
  
    // Submit form

    const onError = (data) => {
        console.log(data);
    }

    const onSubmit = async (data, setErrors) => {
        if(!uuid) { 
            const transformedData = data;
            dispatch(onCreateSample(transformedData)); 
        } else {
            dispatch(onUpdateSample(uuid, data));
        }
    }

    const onFormChange = async (field, data, formData, setValue) => {
        // setEnableLeavePage(true);
    }

    return (
		<>
            <Drawer
				anchor='right'
				open={SamplesDrawerOpen}
				onClose={(event, reason) => { 
					if(reason != 'backdropClick') {
						setSamplesDrawerOpen(false);
					}
				}}
				className={classes.drawerWidth}
				>

                <FontAwesomeIcon icon={faTimes} onClick={() => { setSamplesDrawerOpen(false); }} className={classes.faCloseDrawer}/>

                <Box  sx={{
                    width: "800px",
                    height: "100vh"
                }}   className={classes.sidebarHolder}  p={4}>
                    <form onSubmit={handleSubmit(onSubmit, onError)}>
                        <Box mt={10}>
                            <h1> { !uuid  ? 'Create' : 'Update'} company achievements </h1>
                            <Box
                                mt={8}
                                padding={4}
                                sx={{background: '#ffffff'}}
                                >
                                    { displayForm ? <RawHooksForm 
                                        formData={initFormComponent}
                                        methods={methods}
                                        props={null}
                                        actions={{
                                            onFormChange: onFormChange
                                        }}
                                    /> : null } 
                            </Box>

                            <Box mt={4}>
                                <Box className={classes.fixedFooter}>
                                    <Box width="100%" >
                                        <Button
                                            variant='contained'
                                            color='secondary'
                                            className={classes.footerSubmitButton}
                                            type='submit'>
                                                SAVE
                                        </Button>

                                        <Button
                                            variant='contained'
                                            color='default'
                                            className={classes.footerSubmitButton}
                                            onClick={() => {
                                                setSamplesDrawerOpen(false); 
                                            }}
                                            type='button'>
                                                CANCEL
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </form>
                </Box>
            </Drawer>
            <InfoView />
        </>
    )
}

export default Update;
