import { makeStyles } from '@material-ui/core/styles';
import isDemo from '../constDemo'
/**
 * 
 * gets the amount of skills and lanuagages
 * returns makeStyles funcion based on it.
 */
const [detailsSize , skillSize, langSize] = [3,4,3]
const useStyles = makeStyles({
    root: {
        paddingLeft:'2em',
        backgroundColor:!isDemo? '#fce1a9':'white',
        margin:'auto',
        height:'100%',
        width:'100%',
        display:'grid',
        gridTemplateColumns: '1fr',
        gridAutoRows: `${detailsSize}fr ${skillSize+1}fr ${langSize+1}fr`,
        gridGap:'1em',
    },
    details:{
        backgroundColor:!isDemo?'#e3c588':'white',
        alignItems:'center'
    },
    skills:{
        backgroundColor:!isDemo?'#ad9565':'white',
    },
    languages:{
        backgroundColor:!isDemo?'#d6a84b':'white',
    },


})


  export default useStyles;