import { makeStyles } from '@material-ui/core/styles';
/**
 * 
 * gets the amount of skills and lanuagages
 * returns makeStyles funcion based on it.
 */
const [detailsSize , skillSize, langSize] = [5,9,2]
const useStyles = makeStyles({
    root: {
        paddingLeft:'2em',
        backgroundColor: '#fce1a9',
        margin:'auto',
        height:'100%',
        width:'100%',
        display:'grid',
        gridTemplateColumns: '1fr',
        gridAutoRows: `${detailsSize}fr ${skillSize+1}fr ${langSize+1}fr`,
        gridGap:'1em',
    },
    details:{
        backgroundColor:'#e3c588',
        alignItems:'center'
    },
    skills:{
        backgroundColor:'#ad9565',
    },
    languages:{
        backgroundColor:'#d6a84b',
    },


})


  export default useStyles;