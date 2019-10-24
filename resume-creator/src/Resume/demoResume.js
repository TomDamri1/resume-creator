const demo = {
    basicDetails:{
        firstName:'Tom',
        lastName:'Damri',
        email:'Tomdamri@gmail.com',
        jobTitle:'full stack developer'
    },
    communicationDetails:{
        phoneNumber:'054-814-1595',
        Country:'Israel',
        City:"Be'er sheva",
        streetAddress:"Lavon pinhas 1",
    },
    birthAndNationalityDetails :{
        birthdate:'13-10-1994',
        birthPlace:"Be'er sheva",
        nationality:'Israeli',
        languages:{
            1:{type:'Hebrew' , level:'100'},
            2:{type:'English' , level:'90'}
        }
    },
    employmentHistory:{
        1:{
            title:'Tutor',
            place:'Cyber Education Center',
            start:'2018',
            end:'2019',
        },
        2:{
            title:'Tutor',
            place:'Net@',
            start:'2017',
            end:'2018',
        },
        3:{
            title:'IT Help Desk',
            place:'Bezeq',
            start:'2016',
            end:'2017',
        },
        4:{
            title:'Israeli Police and IDF',
            place:'South District',
            start:'2013',
            end:'2016',
        },
    },
    educationDetails:{
        1:{
            title:'Honored Student SCE',
            place:'SCE',
            start:'2017',
            end:'2019',
            degree:'Third year Software Engineering Student'
        },
        2:{
            title:'Mekif Amit',
            place:"Be'er Sheva",
            start:'2007',
            end:'2012',
            degree:'Full Bagrut, 10 computer sience units'
        },
        
    },
    skills:{
        1:{type:'Java' ,level:'90'},
        2:{type:'Python' ,level:'95'},
        3:{type:'ReactJS' ,level:'80'},
        4:{type:'C' ,level:'80'},
        5:{type:'C++' ,level:'70'},
        6:{type:'C#' ,level:'70'},
        7:{type:'Windows' ,level:'100'},
        8:{type:'Linux' ,level:'90'},
    },
    profile:{
        bio:'Third year honored student in SCE collage of engineering , controlls the principles of data structure,algorithms. Got passion for programming and like to work and develop himself. Programming on his free time.',
        stations:{
            1:'Github : https://github.com/TomDamri1',
            2:'Resume-Creator project - (ReactJS) using hooks and context, creates this resume.',
            3:"Color-Picker project - (ReactJS) a complex project using react classes and passing down to components method.",
            4:"Chat-App project - (Linux , Python) a 4 people group project, created with Driver-Navigator method, main subject : made the front end and UI processes and threads.",
            5:"Scheduluz project - (C#) a 4 people group project, created school calendar, with permissions mail sending option, polls and more.",
        }

    },
}

export default demo