import React from 'react'
import { Dialog, DialogTitle, DialogActions, Button, DialogContent, Grid } from '@mui/material'
import { TextBox } from '@/components/form';

function AddNotification(props) {
    const { open, handleClose } = props;
    return (
        <>
            <Dialog fullWidth maxWidth="xs" open={open} onClose={handleClose} >
                <DialogTitle sx={{ pb: 2 }}>{'Add Notification'}</DialogTitle>
                <DialogContent>
                    <Grid container spacing={2} pt={2}>
                        <Grid item lg={12} md={12} sm={12} xs={12} mt={2}>
                            <TextBox
                                fullWidth
                                label="Title"
                                name="title"
                                onChange={(e) => {
                                    console.log(e.target.value)
                                }}
                                // value={formik?.values?.title}
                                // onChange={(e) => {
                                //     formik.setFieldValue("title", e.target.value.trimStart());
                                // }}
                                // error={formik.touched.title && formik.errors.title}
                                // helperText={formik.touched.title && formik.errors.title}
                                // required
                            />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <TextBox
                                fullWidth
                                label="Description"
                                name="description"
                                multiline={true}
                                rows={3}
                                onChange={(e) => {
                                    console.log(e.target.value)
                                }}
                                // value={formik?.values?.description}
                                // onChange={formik.handleChange}
                                // error={formik.touched.description && formik.errors.description}
                                // helperText={formik.touched.description && formik.errors.description}
                                // required
                            />
                        </Grid>
                    </Grid>

                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="inherit" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleClose}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default AddNotification;