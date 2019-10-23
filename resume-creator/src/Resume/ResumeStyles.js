import { makeStyles } from '@material-ui/core/styles';

const sidebarSize = 2
const mainSize = 4
const useStyles = makeStyles({
    root: {
        backgroundColor: '#bec0ed',
        margin:'auto',
        height:'100%',
        width:'100%',
        display:'grid',
        gridTemplateColumns: `${sidebarSize}fr ${mainSize}fr`,
        gridGap:'1em',
        gridTemplateRows: '2fr 12fr 2fr'
    },
    header:{
        backgroundColor:'#9fa2ed',
        gridColumn: `1/${mainSize+sidebarSize}`,
        gridRow:'1',
    },
    sideBar:{
        backgroundColor:'#656ceb',
        gridColumn: `1/${sidebarSize}`,
    },
    mainBar:{
        backgroundColor:'#656694',
        gridColumn: `${sidebarSize}/${mainSize+sidebarSize}`,
        
    },
    footer:{
        backgroundColor:'#9fa2ed',
        gridColumn: `1/${mainSize+sidebarSize}`
    }

  });

  export default useStyles;