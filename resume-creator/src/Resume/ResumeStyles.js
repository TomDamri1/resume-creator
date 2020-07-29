import { makeStyles } from '@material-ui/core/styles';
const sidebarSize = 2
const mainSize = 4
const useStyles = makeStyles({
    root: {
        backgroundColor: 'white',
        height:'100%',
        width:'100%',
        display:'grid',
        gridTemplateColumns: `${sidebarSize}fr ${mainSize}fr`,
        gridGap:'1em',
        
    },
    header:{
        backgroundColor:'white',
        gridColumn: `1/${mainSize+sidebarSize}`,
        gridRow:'1',
    },
    sideBar:{
        backgroundColor:'white',
        gridColumn: `1/${sidebarSize}`,
    },
    mainBar:{
        backgroundColor:'white',
        gridColumn: `${sidebarSize}/${mainSize+sidebarSize}`,
        
    },
    footer:{
        backgroundColor:'white',
        gridColumn: `1/${mainSize+sidebarSize}`
    }

  });

  export default useStyles;