import { makeStyles } from '@material-ui/core/styles';
import isDemo from '../constDemo'
/**
 * 
 * gets the amount of skills and lanuagages
 * returns makeStyles funcion based on it.
 */

const [profileSize , historySize, educationSize] = [4,3,5]
const useStyles = makeStyles({
    root: {
        
        backgroundColor:'white',
        margin:'auto',
        height:'100%',
        width:'100%',
        display:'grid',
        gridTemplateColumns: '1fr',
        gridAutoRows: `${profileSize}fr ${historySize}fr ${educationSize}fr`,
        gridGap:'1em',
    },
    profile:{
        backgroundColor:'white',
        alignItems:'center'
    },
    history:{
        backgroundColor:'white',
    },
    education:{
        backgroundColor:'white',
    },


})


  export default useStyles;