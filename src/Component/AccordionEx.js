import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, TextField, Typography } from "@mui/material";

function AccordionEx(){
    const name =[ 'khushi','Hetvi','Hetal','Priti','Rahul','Sunil','Keshvi','Khushali'];
    return(
        <>
            <Accordion>
                <AccordionSummary expandIcon={'>'}>
                    <Typography variant="h6">
                        What is Accordion ?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    The Accordion component lets users show and hide sections of related content on a page.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <br/><br/><br/><br/>

            {/* Auto Complete */}
            <Autocomplete 
                sx={{width:200}} 
                options={name} 
                renderInput={(Params) => <TextField {...Params} 
                label='Select Name ...' />}/>
             <br/><br/><br/><br/>
        </>
    )
}
export default AccordionEx;