import { makeStyles } from '@material-ui/core/styles';
import isDemo from './constDemo';
const sidebarSize = 2
const mainSize = 4
const useStyles = makeStyles({
    root: {
        backgroundColor: !isDemo? '#bec0ed' : 'white',
        height:'100%',
        width:'100%',
        display:'grid',
        gridTemplateColumns: `${sidebarSize}fr ${mainSize}fr`,
        gridGap:'1em',
        
    },
    header:{
        backgroundColor: !isDemo? '#9fa2ed': 'white',
        gridColumn: `1/${mainSize+sidebarSize}`,
        gridRow:'1',
    },
    sideBar:{
        backgroundColor:!isDemo? '#656ceb':'white',
        gridColumn: `1/${sidebarSize}`,
    },
    mainBar:{
        backgroundColor:!isDemo? '#656694':'white',
        gridColumn: `${sidebarSize}/${mainSize+sidebarSize}`,
        
    },
    footer:{
        backgroundColor:!isDemo? '#9fa2ed':'white',
        gridColumn: `1/${mainSize+sidebarSize}`
    }

  });

  export default useStyles;