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
        
        backgroundColor: !isDemo?'#656694':'white',
        margin:'auto',
        height:'100%',
        width:'100%',
        display:'grid',
        gridTemplateColumns: '1fr',
        gridAutoRows: `${profileSize}fr ${historySize}fr ${educationSize}fr`,
        gridGap:'1em',
    },
    profile:{
        backgroundColor:!isDemo?'#7a56bf':'white',
        alignItems:'center'
    },
    history:{
        backgroundColor:!isDemo?'#8a6fbf':'white',
    },
    education:{
        backgroundColor:!isDemo?'#9984c2':'white',
    },


})


  export default useStyles;