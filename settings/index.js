const sharedBenefits = [
    {
        icon : "A",
        primary : "shared"
    }
]

const standardBenefits =    [{
    icon : "Space", 
    primary : "space"
    },
    {
    icon : "Furniture",
    primary : "furniture"
    },
    {
    icon : "Electricity", 
    primary : "electricity"
    },
    {
    icon : "A", 
    primary : "reps"
    },
   
    {
    icon : "A",
    primary : "socialmedia"
    },...sharedBenefits]


const hotBenefits = [...standardBenefits, 
    {
        icon : "A",
        primary : "party"
    },
]

const premiumBenefits =    [{
    icon : "Space", 
    primary : "space_premium"
    },
    {
    icon : "Furniture",
    primary : "furniture"
    },
    {
    icon : "Electricity", 
    primary : "electricity_premium"
    },
    {
    icon : "A", 
    primary : "reps_premium"
    },
    {
    icon : "A",
    primary : "party_premium"
    },
    {
    icon : "A",
    primary : "socialmedia_premium"
    },
    {
        icon : "A",
        primary : "co-exhibitor"
    },
...sharedBenefits]

const bookingmapShared = {

    use_old_ecommerce_module: 0,
    show_recent_purchases: 1,
    height : 1925,
    steps : [
        "choose_booth",
        "confirm",
        "pay",
        "access"
    ],
    allowedGroupIds : [356, 355, 357, 378],
    boothStyleMapping: {
        356: "light", //STD
        355: "standard", //HOT
        357: "hot", //SUPER HOT
        378: "superHot", //ULTRA

        376: "boothSold", //BUFFER - LAST MINUTE

        358: "grand", //GRAND
        359: "premiumGrand", //PREMIUM GRAND

        361: "stage", //STAGE KEYNOTE
        362: "stage", //STAGE OPEN
        380: "networking", //VIPZONE
        381: "networking", //NETWORKING
        // 321: "boothSold"
    },
    api : "https://order.ecommerceberlin.com/preorder",
    benefits: {
        356: standardBenefits, //STD
        355: standardBenefits, //HOT
        357: hotBenefits, //SUPER HOT
        378: hotBenefits, //ULTRA
        358: premiumBenefits, //GRAND
        359: premiumBenefits, //PREMIUM GRAND
    }

}


const settings = {
    
    banner_cfp: {
        /**
         * 
            xs, extra-small: 0px
            sm, small: 600px
            md, medium: 960px
            lg, large: 1280px
            xl, extra-large: 1920px
         */
        //wrapperProps: {},
        sizes: {
            xl: "https://res.cloudinary.com/eventjuicer/image/upload/v1633037966/ebe_cfp2021/ebe_cfp2021_1584x396.png",
            lg: "https://res.cloudinary.com/eventjuicer/image/upload/v1633037966/ebe_cfp2021/ebe_cfp2021_1500x500.png",
            md: "https://res.cloudinary.com/eventjuicer/image/upload/v1633037964/ebe_cfp2021/ebe_cfp2021_1104x736.png",
            sm: "https://res.cloudinary.com/eventjuicer/image/upload/v1633037964/ebe_cfp2021/ebe_cfp2021_800x800.png",
            xs: "https://res.cloudinary.com/eventjuicer/image/upload/v1633037964/ebe_cfp2021/ebe_cfp2021_800x800.png"
        },
        href: "/vote"
    },


    system : {
        // use_old_ecommerce_module: 1, //MOVED to bookingmap
        passwords : {
            'admin': '1751bfe48d5ad21fd9d'
        },
        lang_api_endpoint : 'https://api.eventjuicer.workers.dev/?url=https%3A%2F%2Flocalise.biz%2Fapi%2Fexport%2Fall.json%3Fformat%3Dmulti%26pretty%26key%3DtWMy1RRHuiW6DD9T7AyYtFlQzAeztbBK',

        api : "https://api.eventjuicer.com/v1/public/hosts/ecommerceberlin.com",
        proxy: "https://api.eventjuicer.workers.dev?url=",

        post_api : "https://api.eventjuicer.com/v1/public/hosts/ecommerceberlin.com/register",
        service_api : "https://api.eventjuicer.com/v1/services",
        og_image : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_limit,w_1024/v1546943854/ebe_og_home.jpg",

    },


    hero : {

        videoSrc : "https://res.cloudinary.com/eventjuicer/video/upload/q_auto,f_auto/v1544572510/ebe_hero_final.mp4",
        background : "https://res.cloudinary.com/eventjuicer/image/upload/q_auto,f_auto/v1544572575/ebe_hero_final_poster.jpg",
        overlay : "black",
        template : "heroGold",
        heading : "event.claim",
        subheading : "event.description",
        showable: ["date", "hours","location"]
    },

    
    bookingmap_top30 : {
        ...bookingmapShared,
        disabledTicketIds : [

            2089, 2088, 2090, 2087, //STD
            2085, 2084, 2083, 2117, 2081, //HOT
            2092, 2093, 2094, 2095, 2096, //SH
            2169, 2170, 2171, 2172, 2173, //ULTRA,
            2105, 2106, 2102, 2097, 2107, //GRAND
            2100, 2108, 2099, 2104, 2103 //P GRAND

        ],
    },

    bookingmap : {
        ...bookingmapShared,
        disabledTicketIds : [
            2175, //STD
            2082, //HOT
            2118, //SH
            2171, //UTLRA
            2165, //GRAND
            2164, //P GRAND
        ],
    },





    masterclasses : {

    apply: {
        limit: 25
    },

    schedule: {

        wrapperProps: {
            label: "masterclasses.schedule.title",
            secondaryLabel: "masterclasses.schedule.description"
        },
        times : {

            // 15+10+10 = 35!!!
            // 
            // '10:25': 'presentation',
            '10:20': 'presentation',
            '11:30': 'presentation',
            '12:40': 'presentation',
            '13:50': 'presentation',
            '15:00': 'presentation',
            '16:10': 'presentation',
          }, 
          venues : {
            M1: { company_id: 0 },
            M2: { company_id: 0 },
          },
        //   minimized : ["B", "E"],
          venueStyle : "red",
    },


        registration: {
        wrapperProps: {
            label: "masterclasses.form.title",
            // secondaryLabel: ""
        },
        
        baseLabel: "masterclasses",
        fields: [
            {name: "email", required: true},
            {name: "fname", required: true},
            {name: "lname", required: true},
            {name: "cname2", required: true},
            {name: "phone", required: true},
            {name: "presenter", required: true},  
            // {name: "bio", required: true},  
            // {name: "profile_linkedin", required: true},  
            {name: "presentation_title", required: false},
            // {name: "presentation_description", required: true}
        ],
        
        start: [
            'presenter',
            "profile_linkedin",
            'presentation_title', 


        ],

        ticket_id : 2175,
        email_template : "en-masterclasses-application",
   },


   update: {
        wrapperProps: {
        label: "masterclasses.update.title",
        // secondaryLabel: ""
        },
        legend: "",
        baseLabel: "masterclasses",
        fields: [
        {name: "presentation_title", required: true},
        {name: "presentation_description", required: true, long: true },
        {name: "presenter", required: true},
        {name: "position", required: true},
        {name: "logotype", required: true},
        {name: "avatar", required: true},
        {name: "bio", long: true, required: true},

        ],

        start: [],

   },


   faq: {
        wrapperProps: {
            label: "faq"
        },
        baseLabel: "masterclasses.faq",
        items: [
            { label: 'cost' },
            { label: 'offering' },
            { label: 'participation' },
            { label: 'toolset' }
        ]
    },

    faq_participant: {
        wrapperProps: {},
        // showTitle: false,
        baseLabel: "masterclasses.participants.faq",
        items: [
            { label: 'formula' },
            { label: 'application' },
            { label: 'cost' },
            { label: 'vip' }
        ]
    },

   photostream : {

    wrapperProps: {
        label : "masterclasses.gallery.title"
    },

    overlay: "red",

    cols: 12,

    items : [
        {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1665404744/vipzone/strefaVIP_01.jpg", cols: 3},
        {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1665404741/vipzone/strefaVIP_02.jpg", cols: 3},
        {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1665404740/vipzone/strefaVIP_04.jpg", cols: 3},
        {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1665404740/vipzone/strefaVIP_03.jpg", cols: 3},
      
    ]
    },

    benefits : {

        label: "masterclasses.steps.title",
        baseLabel: "masterclasses.steps",

        items: [

            {
                icon : "FaSearch",
                label :  'costam1',
            },
        
            {
                icon : "FaPoll",
                label : 'costam2'
            },
        
            {
                icon : "FaTrophy",
                label : 'costam3'
            }

        ]
    }, 

},












    exhibitor_registration: {

        wrapperProps: {
            label : "ecommerce.regform.title",
            secondaryLabel: null,
            dense: false,
            first: true
        },

        path_to_regform: "exhibitor_registration.regform",

        regform: {
            wrapperProps: {},
            legend: "exhibitor.regform.legend",
            baseLabel: "exhibitor",
            fields : [
            {name: "email", required: true},
            {name: "fname", required: true},
            {name: "lname", required: true},
            {name: "phone", required: true},

            {name: "cname", required: true},
            {name: "company_address", required: true},
            {name: "nip", required: true},

            {name: "accept", required: true, type: "confirm"}
            ],
            start : [],
            email_template : "ebe-exhibitor-confirmation",
            right: null,
        }
        
    },


    speakers : {

        callforpapers: {

            wrapperProps: {
                label: "presenters.form.title"
            },
            
            baseLabel: "presenters",
            legend: "speakers.callforpapers.legend",
            
            fields: [
                {name: "email", required: true},
                {name: "fname", required: true},
                {name: "lname", required: true},
                {name: "cname2", required: true},
                {name: "phone", required: true},
                {name: "presenter", required: true},  
                {
                  name: "presentation_category", 
                  required: true,
                  options : "categories"
                },
                {name: "presentation_title", required: true},
                {name: "presentation_description", required: true}
            ],
            
              start: [
                'presenter',
                'presentation_title', 
                'presentation_description',
                'presentation_category',
                'cname2'
            ],

            ticket_id : 2220,
            email_template : "ebe-presenters-application",

        },

        callforpapers_update: {

            wrapperProps: {
                label: "presenters.update.title",
                // secondaryLabel: ""
            },
            legend: "",
            baseLabel: "presenters",
            fields: [
                {name: "presentation_title", required: true},
                {name: "presentation_description", required: true, long: true },
                {name: "presenter", required: true},
                {name: "position", required: true},
                {name: "logotype", required: true},
                {name: "avatar", required: true},
                {name: "bio", long: true, required: true},
               
            ],
            
            start: [],

    
        },

        faq: {
            wrapperProps: {
              label: "cfp.faq.name"
            },
            showTitle: false,
            baseLabel: "cfp.faq",
            items: [
            {
              label: 'exhibitor-status',
              important: true,
              buttons: [],
            },
            {
          //    baseLabel: 'exhibitors.faq.before_event',
              label: 'fee',
            },
            { label: 'submission-limits' },
            { label: 'co-presenter' },
            { label: 'ranking' },
            { label: 'fair-play' },
            {
            //  baseLabel: 'cfp.faq.before_event',
              label: 'stage',
            },
            ]

        },

        benefits : {

            label: "presenters.steps.title",
        //    secondaryLabel: "presenters.steps.description",
            baseLabel: "presenters.steps",
            typography: "subtitle",
            dense: true,
            
            items: [

                {
                    icon : "FaSearch",
                    label :  'assessment',
                },
            
                {
                    icon : "FaPoll",
                    label : 'contest'
                },
            
                {
                    icon : "FaTrophy",
                    label : 'speaker'
                }

            ]
        },

      
    },

    vips : {

        register: {

            data : { important: 1 },
            template : "ecommerceberlin-vip-registration",
            wrapperProps: {
                label : "vips.register.title",
            },
            fields : [
                {name: "referral", required: true},
                {name: "email", required: true},
                {name: "fname", required: true},
                {name: "lname", required: true},
                {name: "cname2", required: true},
                {name: "position", required: true},
                {name: "phone", required: true}
              ],
            ticket_id : 1830,
            start : ['referral', 'email', 'fname'],
            first : true
        },

        benefits : {

            label: "vips.benefits.title",
            //secondaryLabel: "vips.benefits.description",
            baseLabel: "vips.benefits",
            typography: "subtitle",
            dense: true,
            
            items: [

                {   
                    icon : "FaFastForward",
                    label : 'fastentry'
                },
            
                {   
                    icon : "FaChair",
                    label : 'seats'
                },
            
                {   
                    icon : "FaHandshake",
                    label : 'vipzone'
                }
            ]
        },

    },

    reviews : {

    },

    ui : {

        menuItems : [
            {
              name: 'general',
              items: [
                {name: 'home', to: '/'},
                {name: 'about', to: '/about'},
                // {name: 'cfp', to: '/speaking'},
                // {name: 'vote', to: '/vote'},
              ]
            },
            {
              name: 'visitors',
              items: [
                {name: 'visit', to: '/visit'},
                // {name: 'schedule', to: '/schedule'},
                {name: 'presenters', to: '/presenters'},
                {name: 'exhibitors', to: '/exhibitors'},
                // {name: 'offers', to: '/offers'}
              ]
            },
            {
              name: 'exhibitors',
              items: [
                {name: 'exhibit', to: '/exhibit'},
                {name: 'sample-visitors', to: '/sample-visitors'},
                {name: 'exhibitors', to: '/exhibitors'},
                {name: 'premium-services', to: '/premium'},
                {name: 'faq', to: '/faq'},
              
              ]
            }
        ]
    },

    premium : {

        ticketgroups : [360]

    },

    exhibitors : {


     

        benefits : {

            label: "exhibitors.benefits.title",
            //secondaryLabel: "exhibitors.benefits.description",
            baseLabel: "exhibitors.benefits",
            typography: "subtitle",
            dense: true,

            items: [

                {
                    icon : "FaHandshake",
                    label :  'outreach',
                },
            
                {
                    icon : "FaPiggyBank",
                    label : 'all_inclusive'
                },
            
                {
                    icon : "FaComments",
                    label : 'feedback'
                },

                {
                    icon : "FaLink",
                    label : 'meet_clients'
                },

                {
                    icon : "FaSmile",
                    label : 'organizer'
                },

                {
                    icon : "FaLightbulb",
                    label : 'inspiration'
                },

            ]
        }
    },
    visitor : {


        register: {

            wrapperProps: {
                label: "visitors.register",
                secondaryLabel: "event.parties"
            },

            fields : [
              {name: "email", required: true},
              {name: "fname", required: true},
              {name: "lname", required: true},
              {name: "cname2", required: true},
              {name: "position", required: true},
            //   {name: "nip", required: false},
              {name: "phone", required: true}
            ],

            start : ['email', 'fname'],
            ticket_id : 2176,
            email_template : "ecommerceberlin-visitor-registration",
            background : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit,h_500,w_500/v1546813408/ebe_lanyard1.jpg",
            api : "https://api.eventjuicer.com/v1/public/hosts/ecommerceberlin.com/register",

        },

        benefits : {

            label: "visitors.benefits.title",
            //secondaryLabel: "visitors.benefits.title",
            baseLabel: "visitors.benefits",
            typography: "subtitle",
            dense: true,

            items: [

                {
                    icon : "FaLockOpen",
                    label :  'free_entry',
                },
            
                {
                    icon : "FaPiggyBank",
                    label : 'special_offers'
                },
            
                {
                    icon : "FaSearch",
                    label : 'insight'
                },
            
                {   
                    icon : "FaWrench",
                    label : 'case_studies'
                },
            
                {   
                    icon : "FaHandshake",
                    label : 'networking'
                },
            
                {   
                    icon : "FaChartLine",
                    label : 'future'
                }
    
            ]
        }, 

        default_ticket_id : 1830,
        default_email_template : "ecommerceberlin-visitor-registration",
        background : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit,h_500,w_500/v1546813408/ebe_lanyard1.jpg",
    },

    common : {

        organizer_name : 'E-commerce Capitals Sp. z o.o. Sp. k.',
        organizer_address : 'POLAND, 60‐586 Poznań, ul. Botaniczna 26/2',
        organizer_regno : 'VAT ID 7792439665',
        event_name : 'E-commerce Berlin Expo',
        event_location : 'STATION Berlin, Luckenwalder Str. 4-6',
        event_date : '23rd FEBRUARY 2023',
        event_hours : '10:00-17:00',

    },

    rolebuttons : {
        accent : "gold",
        items : [
        {
          url: 'https://res.cloudinary.com/eventjuicer/image/upload/w_768,c_fit,f_auto,q_auto/v1579000835/visit.jpg',
          label: 'common.visitor',
          width: '50%',
          target : "/visit"
        },
        {
          url: 'https://res.cloudinary.com/eventjuicer/image/upload/w_768,c_fit,f_auto,q_auto/v1579000835/exhibit.jpg',
          label: 'common.exhibitor',
          width: '50%',
          target : "/exhibit"
        },
        ]
    },

    customer_support : {

    },

    sales_support : {

        title: 'event.support.hello',
        description: 'event.support.description',

        people : [
            {             
                name: 'Lucas',
                position : 'Business Development Manager',
                langs : ["de"],
                avatar: 'https://res.cloudinary.com/eventjuicer/image/upload/w_150,c_fit,f_auto/v1546386301/ecommerceberlin_support_lz.jpg',
                phone: '+49 176 316 244 92',
                email: 'hello@ecommerceberlin.com',
                chatlio : true
            },
            {
                name: 'Peter',
                position : 'Project Manager',
                langs : ["en"],
                avatar: 'https://res.cloudinary.com/eventjuicer/image/upload/w_150,c_fit,f_auto/v1546386405/ecommerceberlin_support_psz.jpg',
                phone: '+49 302 555 98 75',
                email: 'peter@ecommerceberlin.com',
                chatlio : true
            }
          ]
    },

    schedule : {
        times : {
            '10:30': 'presentation',
            '11:10': 'presentation',
            '11:50': 'presentation',
            '12:30': 'presentation',
            '13:00': 'break_20',
            '13:20': 'presentation',
            '14:00': 'presentation',
            '14:40': 'presentation',
            '15:20': 'presentation',
            '15:50': 'presentation'
          },    
          venues : {
            A: { company_id: 0 },
            B: { company_id: 0 },
            C: { company_id: 0 },
            D: { company_id: 0 },
            E: { company_id: 0 }
          },
        //   minimized : ["A", "C"],
          venueStyle : "gold",
    },

    footer : {
        primaryStyle: null,
        secondaryStyle: null,
        iconStyle : "black",
        links : [
            {label: "common.pages.imprint", href : "/legal/imprint"},
            {label: "visitors.agreement.title", href : "/legal/visitors"},
            {label: "exhibitors.agreement.title", href : "/legal/exhibitors"},
            {label: "common.pages.cookies", href : "/legal/cookies"},
            {label: "visitors.data-agreement.title", href: "/legal/visitors-data"}
        ]
    },




    appbar : {
        logotype: "https://res.cloudinary.com/eventjuicer/image/upload/h_30,c_fit,f_auto/v1633022810/EBE_WH.png",
        links: [
             {label: "Become a visitor", color: "primary",  href: "/visit", variant: "contained"}
        ],
    },

    cfpphotostream : {

        wrapperProps: {
            label : "cfp.gallery.title"
        },

        cols: 12,

        items : [

            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824810/Website/CFP%20-%20gallery/Conference2_MyTheresa.jpg", cols: 6},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824698/Website/CFP%20-%20gallery/Conference6_Facebook_Lisa.jpg", cols: 6},

            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824722/Website/CFP%20-%20gallery/IMG_0782_copy.jpg", cols: 4},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824720/Website/CFP%20-%20gallery/IMG_0643.jpg", cols: 4},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824718/Website/CFP%20-%20gallery/Conference7_IBM_Isabelle.jpg", cols: 4},

            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824707/Website/CFP%20-%20gallery/IMG_9984.jpg", cols: 6},
          //  {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824699/Website/CFP%20-%20gallery/2SH07600.jpg", cols: 3},
          {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824808/Website/CFP%20-%20gallery/Conference4_Nivea.jpg", cols: 6},
     

            // {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824698/Website/CFP%20-%20gallery/Conference10_Douglas.jpg", cols: 6},
            // {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824685/Website/CFP%20-%20gallery/2SH09325.jpg", cols: 6},
            // {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824685/Website/CFP%20-%20gallery/Conference5_BabySweets.jpg", cols: 4}

        ]
    },

    cfptimeline: {

        baseLabel: "cfp.timeline",

        items : [
            {date: "2022-09-01", name: "submissions", icon:  "NoteAdd", dotColor: 'primary', active: true },
            {date: "2022-10-03", name: "public-voting", icon:  "Public" },
            {date: "2022-10-19", name: "qualification", icon:  "Assessment" },
            {date: "2022-10-24", name: "jury-voting", icon:  "HowToVote" },
            {date: "2022-10-31", name: "results", icon:  "Mic", active: false }
            
        ]

    }
};


export default settings














