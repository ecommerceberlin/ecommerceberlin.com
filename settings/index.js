const regFormOptions = {
    participant_type: [
        "retailer_wholesaler",
        "brand_manufacturer",
        "service_provider",
        "consultant",
        "developer",
        "media",
        "student"
    ],
    company_role: [
        "student",
        "entry",
        "manager",
        "professional",
        "head_of_department",
        "director",
        "c_level",
        "board_member",
        "other"
    ],
    location: [
        "yes",
        "no",
    ],
    objective: [
        "solutions",
        "conference",
        "networking"
    ],
    business_model: [
        "b2b_model",
        "b2c_model",
        "d2c_model",
        "wholesale",
        "other_model"
    ],
    employee: [
        "1_20_ppl",
        "21_100_ppl",
        "101_500_ppl",
        "501_ppl"
    ],
    revenue: [
        "0_5_revenue",
        "5_50_revenue",
        "50_revenue"
    ]
 }

const sharedBenefits = [
    // {
    //     icon : "A",
    //     primary : "shared"
    // }
]
const stageBenefits =    [{
    icon : "A", 
    primary : "speakingslot"
    },
    {
    icon : "A",
    primary : "printedmapstage"
    },
    {
    icon : "A", 
    primary : "screenbranding"
    },
    {
    icon : "A", 
    primary : "logowebsitestage"
    },
   
    {
    icon : "A",
    primary : "keynoteroom"
    },

    {
        icon : "A",
        primary : "blogpost"
        },
    
    ...sharedBenefits]

const networkingBenefits =    [{
    icon : "A", 
    primary : "spacenetworking"
    },
    {
    icon : "A",
    primary : "printedmap"
    },
    {
    icon : "A", 
    primary : "logocubes"
    },
    {
    icon : "A", 
    primary : "mailingpromo"
    },
   
    {
    icon : "A",
    primary : "onsitebranding"
    },

    {
        icon : "A",
        primary : "logowebsite"
        },
    
    ...sharedBenefits]



const standardBenefits =    [{
    icon : "Space", 
    primary : "space"
    },
    // {
    // icon : "Furniture",
    // primary : "furniture"
    // },
    {
    icon : "Electricity", 
    primary : "electricity"
    },
    // {
    // icon : "A", 
    // primary : "reps"
    // },
   
    // {
    // icon : "A",
    // primary : "socialmedia"
    // },
    
    ...sharedBenefits]


    
const hotBenefits = [...standardBenefits, 
    // {
    //     icon : "A",
    //     primary : "party"
    // },
]

const grandBenefits =    [{
    icon : "Space", 
    primary : "space_grand"
    },
    {
    icon : "Electricity", 
    primary : "electricity_grand"
    },
...sharedBenefits]

const startupBenefits =    [{
    icon : "Space", 
    primary : "space_startup"
    },
    {
    icon : "Electricity", 
    primary : "electricity_startup"
    },
...sharedBenefits]

const islandBenefits =    [{
    icon : "Space", 
    primary : "space_island"
    },
    {
    icon : "Electricity", 
    primary : "electricity_island"
    },
...sharedBenefits]

const premiumBenefits =    [{
    icon : "Space", 
    primary : "space_premium"
    },
    // {
    // icon : "Furniture",
    // primary : "furniture"
    // },
    {
    icon : "Electricity", 
    primary : "electricity_premium"
    },
    // {
    // icon : "A", 
    // primary : "reps_premium"
    // },
    // {
    // icon : "A",
    // primary : "party_premium"
    // },
    // {
    // icon : "A",
    // primary : "socialmedia_premium"
    // },
    // {
    //     icon : "A",
    //     primary : "co-exhibitor"
    // },
...sharedBenefits]


/**
 * 



 * 
 */

const bookingmapShared = {

    use_old_ecommerce_module: 0,
    show_recent_purchases: 1,
    height : 1811,
    steps : [
        "choose_booth",
        "confirm",
        "pay",
        "access"
    ],
    // allowedGroupIds : [499, 488, 487, 489, 496, 490, 491, 502],
    // venueLayout: "https://res.cloudinary.com/eventjuicer/image/upload/v1678744350/ebe8/ebe8_venueplan.png",
    boothStyleMapping: {
        499: "light", 
        488: "standard", 
        487: "hot", 
        489: "superHot", 
        496: "ultra", 

        495: "boothSold", 

        490: "grand", 
        491: "premiumGrand", 

        494: "stage", 
        493: "stage", 
        500: "stage", 
        497: "networking", 
        502: "networking", //ISLAND
        // 321: "boothSold"
    },
    api : "https://order.ecommerceberlin.com/preorder",
    benefits: {
       

        499: startupBenefits, //STARTUP
        488: standardBenefits, //HOT
        487: standardBenefits, //SUPER HOT
        489: standardBenefits, //PRIME
        496: standardBenefits, //ULTRA
        495: standardBenefits, //BUFFER - LAST MINUTE
        490: grandBenefits, //GRAND
        491: premiumBenefits, //PREMIUM GRAND
        502: islandBenefits, //ISLAND
        497: networkingBenefits, //VIPZONE
        // 453: networkingBenefits, //NETWORKING
        494: stageBenefits, //STAGE KEYNOTE
        493: stageBenefits, //STAGE OPEN
        500: stageBenefits, //STAGE MAIN

        // 357: hotBenefits, //SUPER HOT
        // 378: hotBenefits, //ULTRA
        // 358: premiumBenefits, //GRAND
        // 359: premiumBenefits, //PREMIUM GRAND
    }

}


const settings = {
    

    metaverse: {
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
            xl: "https://res.cloudinary.com/eventjuicer/image/upload/v1676582136/ebe7/Creators_of_the_Metaverse_1200x300.png",
            lg: "https://res.cloudinary.com/eventjuicer/image/upload/v1676582136/ebe7/Creators_of_the_Metaverse_1200x300.png",
            md: "https://res.cloudinary.com/eventjuicer/image/upload/v1676582138/ebe7/Creators_of_the_Metaverse_1200x600.png",
            sm: "https://res.cloudinary.com/eventjuicer/image/upload/v1676582145/ebe7/Creators_of_the_Metaverse_1000x1000.png",
            xs: "https://res.cloudinary.com/eventjuicer/image/upload/v1676582145/ebe7/Creators_of_the_Metaverse_1000x1000.png"
        },
        href: "https://www.creatorsofthemetaverse.de/fest/"
    },



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
     //   proxy: "https://api.eventjuicer.workers.dev?url=",
        proxy: "",
        post_api : "https://api.eventjuicer.com/v1/public/hosts/ecommerceberlin.com/register",
        service_api : "https://api.eventjuicer.com/v1/services",
        og_image : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_limit,w_1024/v1546943854/ebe_og_home.jpg",

        fingerprint: {
            apiKey: "OWW4rlCshv8k9OqaljFK",
            subdomain: "metrics."
        },
    },


    hero : {

        videoSrc : "https://res.cloudinary.com/ecommerceberlin/video/upload/q_auto,f_auto/v1736504778/Visitors%20registration%20form/ebe24-website-video_small.mp4",
        background : "https://res.cloudinary.com/ecommerceberlin/image/upload/q_auto,f_auto/v1691504553/Website/ebe24_final_poster.png",
        overlay : "black",
        template : "heroGold",
        heading : "event.claim",
        subheading : "event.description",
        showable: ["date", "hours","location"]
    },

    
    bookingmap_top30 : {
        ...bookingmapShared,
        disabledTicketIds : [

            2382, 2381, 2451, 2379, 2384, 2373, 2402, //STD
            2378, 2411, 2377, 2375, 2429, 2443, 2394, //HOT
            2386, 2388, 2389, 2390, 2391, 2431, 2444, //SH
            2419, 2415, 2420, 2422, 2423, 2430, 2457, //ULTRA
            2397, 2458, 2459, 2460, 2461, //GRAND
            2398, 2395, 2462, 2463, 2464, //P GRAND

        ],
    },

    bookingmap_exposales : {
        ...bookingmapShared,
        disabledTicketIds : [

             //STD
             //HOT
             //SH
             //ULTRA
             //GRAND
             //P GRAND

        ],
    },

    bookingmap : {
        ...bookingmapShared,
        disabledTicketIds : [
            3154, 3131, 3224, //STARTUP
            3133, 3129, //HOT
            3209, 3160, //SH
            3210, //PRIME
            3211, 3168, 3164, 3169, //ULTRA
            3212, 3148, 3202, 3203, 3204, //GRAND
            3213, 3149, //P GRAND
            3143, //ISLAND
        ],
    },

    workshops : {

        apply: {
            disabled: 1,
            disabledTreshold: 200
        },
    },

    masterclasses : {

        schedule: {

        wrapperProps: {
            label: "masterclasses.schedule.title",
            secondaryLabel: "masterclasses.schedule.description"
        },
        times : {

            // 15+10+10 = 35!!!
            // 
            // '10:25': 'presentation',
            '10:30': 'presentation',
            '11:15': 'presentation',
            '12:00': 'presentation',
            '12:45': 'presentation',
            '13:30': 'presentation',
            '14:15': 'presentation',
            '15:00': 'presentation',
            '15:45': 'presentation',
            '16:30': 'presentation',
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
            // {name: "presenter", required: true},  
            // {name: "bio", required: true},  
            // {name: "profile_linkedin", required: true},  
            // {name: "presentation_title", required: false},
            // {name: "presentation_description", required: true}
        ],
        
        start: [
            'presenter',
            "profile_linkedin",
            'presentation_title', 
            'fname',
            'email',


        ],

        ticket_id : 2782,
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
            { label: 'format' },
            { label: 'booking' },
            { label: 'cost' },
            { label: 'attendees' }
        ]
    },

    faq_participant: {
        wrapperProps: {},
        // showTitle: false,
        baseLabel: "masterclasses.participants.faq",
        items: [
            { label: 'format' },
            { label: 'application' },
            { label: 'selection' },
            // { label: 'hosting' }
        ]
    },

    photostream : {

        wrapperProps: {
            label : "masterclasses.gallery.title"
        },
    
        overlay: "none",
    
        cols: 12,
    
        items : [
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/w_800,h_600,c_fit/v1723113276/Website/Masterclasses/masterclass1-min.jpg", cols: 3},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/w_800,h_600,c_fit/v1723113276/Website/Masterclasses/masterclass2-min.jpg", cols: 3},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/w_800,h_600,c_fit/v1723113276/Website/Masterclasses/masterclass3-min.jpg", cols: 3},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/w_800,h_600,c_fit/v1723113276/Website/Masterclasses/masterclass4-min.jpg", cols: 3},

            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/w_800,h_600,c_fit/v1723113276/Website/Masterclasses/masterclass5-min.jpg", cols: 3},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/w_800,h_600,c_fit/v1723113276/Website/Masterclasses/masterclass6-min.jpg", cols: 3},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/w_800,h_600,c_fit/v1723113276/Website/Masterclasses/masterclass7-min.jpg", cols: 3},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/w_800,h_600,c_fit/v1723113276/Website/Masterclasses/masterclass8-min.jpg", cols: 3},

            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/w_800,h_600,c_fit/v1723113276/Website/Masterclasses/masterclass9-min.jpg", cols: 3},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/w_800,h_600,c_fit/v1723113276/Website/Masterclasses/masterclass10-min.jpg", cols: 3},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/w_800,h_600,c_fit/v1723113276/Website/Masterclasses/masterclass11-min.jpg", cols: 3},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/w_800,h_600,c_fit/v1723113276/Website/Masterclasses/masterclass12-min.jpg", cols: 3},
            
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

    vip : {

        registration: {
        wrapperProps: {
            label: "vips.form.title",
        },
        
        baseLabel: "vips",
        fields: [
            {name: "fname", required: true},
            {name: "lname", required: true},
            {name: "cname2", required: true},
            {name: "company_website", required: true},
            {name: "company_address", required: true},
            {name: "nip", required: true},
            {name: "email", required: true},
            {name: "position", required: true},
            {name: "phone", required: true}, 
            {name: "profile_linkedin", required: true}, 
            {
                name: "participant_type",
                required: true,
                options: regFormOptions.participant_type
            },
            {
                name: "company_role",
                required: true,
                options: regFormOptions.company_role
            },
            {
                name: "location", 
                required: true, 
                options: regFormOptions.location
            },
            {
                name: "objective", 
                required: true, 
                options: regFormOptions.objective
            },
            {
                name: "business_model", 
                required: true, 
                options: regFormOptions.business_model
            },
            {
                name: "employee", 
                required: false, 
                options: regFormOptions.employee
            },
            {
                name: "revenue", 
                required: false, 
                options: regFormOptions.revenue
            },
            {
                  name: "accept", 
                  required: true, 
                  type: "confirm"
            },
        ],
        
        start: [
            'email',
            "fname",
            'lname', 


        ],

        ticket_id : 2830,
        email_template : "ecommerceberlin-vip-apply",
    },


    faq: {
        wrapperProps: {
            label: "faq"
        },
        baseLabel: "vips.faq",
        items: [
            { label: 'howtobecome' },
            { label: 'benefits' },
            { label: 'applying' },
            { label: 'deadline' }
        ]
    },


    benefits : {

        label: "vips.benefits.title",
        baseLabel: "vips.benefits",

        items: [

            {
                icon : "FaSearch",
                label :  'fastentry',
            },
        
            {
                icon : "FaPoll",
                label : 'badge'
            },
        
            {
                icon : "FaPoll",
                label : 'vipzone'
            },

            {
                icon : "FaPoll",
                label : 'networking'
            },

            {
                icon : "FaPoll",
                label : 'seats'
            },

            {
                icon : "FaTrophy",
                label : 'passes'
            }

        ]
    }, 

    },


    ambassador : {


        people: [

            {
                name: "Thomas Ficht",
                cname2: "MyToys Group",
                position: "Head of Payment, Risk and Customer Accounts",
                avatar_cdn: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1549985234/MyToys_Thomas_ficht.jpg",
            }, 
            
            {
                name: "Efe von Thenen",
                cname2: "ePages",
                position: "Chief Marketing Officer",
                avatar_cdn: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1692879067/Website/CFP%20Advisory%20Board/efe-acunaz-square.jpg",
            }, 
            
            {
                name: "Ralph Hünermann",
                cname2: "Odoscope",
                position: "CEO & Founder",
                avatar_cdn: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1698934214/ralph.jpg",
            }, 
            
            {
                name: "Matthias	Genz",
                cname2: "MediaMarktSaturn",
                position: "Chief Customer Officer",
                avatar_cdn: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1646830314/Speakers/Matthias_Genz_2022_02333_web_copy.jpg",
            }, 
            
            {
                name: "Dr. Pascal Volz",
                cname2: "fischerAppelt",
                position: "Managing Director Performance",
                avatar_cdn: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1618837908/Speakers/fischerAppelt_Pascal_Volz_web.jpg",
            }, 
            
            {
                name: "Volker Harbrecht",
                cname2: "Meta",
                position: "Head of Disruptors eCommerce",
                avatar_cdn: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1673612408/Call%20for%20Papers%202022/Volker_Harbrecht.png",
            }, 

            {
                name: "Robert Hein",
                cname2: "Olution Advisory Services",
                position: "Advisory Board Member",
                avatar_cdn: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1672318255/Call%20for%20Papers%202022/Robert_Hein_Head_Shot_Square.jpg",
            }, 

            {
                name: "Dominique Leikauf",
                cname2: "DKB Service",
                position: "Cluster Lead People and Culture",
                avatar_cdn: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1698934327/dominique%20leikauf.jpg",
            }, 

            {
                name: "Alexander Holzknecht",
                cname2: "Motatos",
                position: "Chief Commercial Officer",
                avatar_cdn: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1672238551/Call%20for%20Papers%202022/CCO_Alexander_holzknecht.jpg",
            }, 

            {
                name: "Anna Graf",
                cname2: "Arvato",
                position: "Innovation lead Web3",
                avatar_cdn: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1692878567/Website/CFP%20Advisory%20Board/anna-graf-square.jpg",
            }, 

            {
                name: "Arne Vogt",
                cname2: "Artavo",
                position: "Business Development",
                avatar_cdn: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1671446798/Jury/Arne_Vogt_ARTAVO_06_2022-315_WEB_SocialMedia.jpg",
            }, 

            {
                name: "Daniel Wishnia",
                cname2: "Aroundtown",
                position: "Chief Digital Transformation Officer",
                avatar_cdn: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1637335110/Jury/Daniel.Wishnia.jpg",
            }, 

            {
                name: "Rad Jha",
                cname2: "flaconi",
                position: "Vice President Supply Chain ",
                avatar_cdn: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1698934622/Jury/rad.jpg",
            }, 

            {
                name: "Anamika Datta",
                cname2: "ex-Zalando",
                position: "Senior Product Manager",
                avatar_cdn: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1672239736/Call%20for%20Papers%202022/ANAMIKA_PORTRAIT_CURLY.jpg",
            }, 

            {
                name: "Oke Harms",
                cname2: "Kickerkult",
                position: "Founder & Owner",
                avatar_cdn: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1707310034/oke.jpg",
            }, 

            {
                name: "Ioannis Salavopoulos",
                cname2: "Viva.com",
                position: "Acting Branch Gen. Manager Germany & Regional VP Bus. Dev.",
                avatar_cdn: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1707309859/Jury/ioannis-salavopoulos.jpg",
            }, 

            {
                name: "Anil Altas Brug",
                cname2: "Turboslow; Yopaat",
                position: "Co-founder & Operations Director",
                avatar_cdn: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1708081202/Website/anil-atlas-brug.jpg",
            }, 

            {
                name: "Raluca Bujoreanu",
                cname2: "Zalando",
                position: "Product Lead",
                avatar_cdn: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1727685365/Call%20for%20Papers%202024/raluca-bujoreanu.jpg",
            }, 
        ],


        registration: {
        wrapperProps: {
            label: "ambassador.form.title",
        },
        
        baseLabel: "ambassador",
        fields: [
            {name: "fname", required: true},
            {name: "lname", required: true},
            {name: "cname2", required: true},
            // {name: "company_website", required: true},
            // {name: "company_address", required: true},
            {name: "email", required: true},
            {name: "position", required: true},
            {name: "phone", required: true}, 
            {name: "profile_linkedin", required: true}, 
        ],
        
        start: [
            'email',
            "fname",
            'lname', 
        ],

        ticket_id : 2831,
        email_template : "ecommerceberlin-ambassador-apply",
    },


    benefits : {

        label: "ambassador.benefits.title",
        baseLabel: "ambassador.benefits",

        items: [

            {
                icon : "FaSearch",
                label :  'networking',
            },
        
            {
                icon : "FaPoll",
                label : 'promotion'
            },
        
            {
                icon : "FaPoll",
                label : 'involvement'
            },

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

    exhibitor_offer: {
    registration: {
        wrapperProps: {
            label: "exhibitor.offer.title",
        },
        
        baseLabel: "exhibitor_offer",
        fields: [
            {name: "fname", required: true},
            {name: "lname", required: true},
            {name: "cname2", required: true},
            {name: "email", required: true},
            {name: "phone", required: true}, 
        ],
        
        start: [
            'email',
            "fname",
            'lname', 
        ],
  
        ticket_id : 3145,
        }
    },

    report_request: {
        registration: {
            wrapperProps: {
                label: "report.request.title",
            },
            
            baseLabel: "report_request",
            fields: [
                {name: "fname", required: true},
                {name: "lname", required: true},
                {name: "cname2", required: true},
                {name: "email", required: true},
                {name: "phone", required: true}, 
            ],
            
            start: [
                'email',
                "fname",
                'lname', 
            ],
      
            ticket_id : 2990,
            }
        },

    speakers : {

        og_template: "ebe24-speaker-template",

        callforpapers: {

            wrapperProps: {
                label: "presenters.form.title"
            },
            
            baseLabel: "presenters",
            legend: "speakers.callforpapers.legend",
            
            fields: [
                {name: "presenter", required: true},  
                {name: "cname2", required: true},
                {name: "profile_linkedin", required: true}, 
                {
                  name: "presentation_category", 
                  required: true,
                  options : "categories"
                },
                {name: "presentation_title", required: true},
                {name: "presentation_description", required: true},
                {name: "fname", required: true},
                {name: "lname", required: true},
                {name: "email", required: true},
                {name: "phone", required: true},
            ],
            
              start: [
                'presenter',
                'cname2'
            ],

            ticket_id : 2794,
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
            { label: 'goal', },    
            { label: 'eligibility', }, 
            { label: 'fee', },     
            { label: 'criteria', },    
            { label: 'language', },  
            { label: 'submission-limits', },  
            { label: 'case-study', },  
            { label: 'selection', },  
            { label: 'benefits', },  
            { label: 'after-win', },  
            { label: 'self-promotion', },  
            { label: 'speaking-opportunities', }, 
            // {
            //   label: 'exhibitor-status',
            //   important: true,
            //   buttons: [],
            // },
            // { label: 'co-presenter' },
            // { label: 'ranking' },
            // { label: 'fair-play' },
            // { label: 'recordings' },
            // { label: 'slot-duration' },
            // { label: 'non-winners' },
            // { label: 'masterclasses' },
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

        cfpcategories : {

            label: "cfp.categories.title",
            baseLabel: "cfp.categories",
            typography: "subtitle",
            dense: true,
    
            items: [
    
                {   icon : "FaPoll",
                    label :  'ai',
                },
            
                {
                    icon : "FaPoll",
                    label : 'futuretech'
                },
            
                {
                    icon : "FaPoll",
                    label : 'shopsystems'
                },
    
                {
                    icon : "FaPoll",
                    label : 'logistics'
                },
    
                {
                    icon : "FaPoll",
                    label : 'crossborder'
                },
    
                {
                    icon : "FaPoll",
                    label : 'fintech'
                },

                {
                    icon : "FaTrophy",
                    label : 'marketing'
                },

                {
                    icon : "FaPoll",
                    label : 'customerjourney'
                },

                {
                    icon : "FaPoll",
                    label : 'leadership'
                }
    
            ]
        }, 

    },

    vips : {

        register: {

            label: "vips.register.description",
            
            allowed: {

                test123: {},
                vip_haendler: {},
                EBE_efe: {},
                EBE_hxkdkh: {},
                EBE_irrxzz: {},
                EBE_zuteob: {},
                EBE_obpgim: {},
                EBE_blekso: {},
                EBE_znkytu: {},
                EBE_pqipxv: {},
                EBE_mcqszr: {},
                EBE_hilcys: {},
                EBE_fbyzxs: {},
                EBE_uzvkos: {},
                EBE_wjjcpv: {},
                EBE_iyxzzv: {},
                EBE_xpfhoq: {},
                EBE_oelvvu: {},
                EBE_xzvzau: {},
                EBE_jdsuqu: {},
                EBE_hriocc: {},
                EBE_ojkvgt: {},
                EBE_fwyzcm: {},
                EBE_ravzoy: {},
                EBE_dwtvrf: {},
                EBE_iagoxy: {},
                EBE_sqrnif: {},
                EBE_kzjxdk: {},
                EBE_fprpcq: {},
                EBE_kuylqt: {},
                EBE_vlrknb: {},
                EBE_nhtswb: {},
                EBE_tuldxa: {},
                EBE_xpshha: {},
                EBE_mhjchm: {},
                EBE_iawvqf: {},
                EBE_yesytz: {},
                EBE_aeohrf: {},
                EBE_hwuskq: {},
                EBE_fuhkyq: {},
                EBE_yrhckg: {},
                EBE_mjrfne: {}
            },
            wrapperProps: {
                label : "vips.register.title",
                first : true,
            },
            fields : [
                {name: "email", required: true},
                {name: "fname", required: true},
                {name: "lname", required: true},
                {name: "cname2", required: true},
                {name: "position", required: true},
              //   {name: "nip", required: false},
                {name: "phone", required: true},

  
              {
                  name: "profile_linkedin", 
                  required: false
              },
              {
                name: "participant_type",
                required: true,
                options: regFormOptions.participant_type
            },
            {
                name: "company_role",
                required: true,
                options: regFormOptions.company_role

            },
            {
                name: "location", 
                required: true,
                options: regFormOptions.location
            },
            {
                name: "objective", 
                required: true, 
                options: regFormOptions.objective
            },
            {
                name: "business_model", 
                required: true, 
                options: regFormOptions.business_model
            },
            {
                name: "employee", 
                required: false, 
                options: regFormOptions.employee
            },
            {
                name: "revenue", 
                required: false, 
                options: regFormOptions.revenue
            },
            {
                name: "accept", 
                required: true, 
                type: "confirm"
            },
  
                 
              ],
            ticket_id : 2783,
            start : ['email', 'fname'],
            template : "ecommerceberlin-vip-registration",
            background : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit,h_500,w_500/v1546813408/ebe_lanyard1.jpg",
            api : "https://api.eventjuicer.com/v1/public/hosts/ecommerceberlin.com/register",
        },

        benefits : {

            label: "vips.benefits.title",
            //secondaryLabel: "vips.benefits.description",
            baseLabel: "vips.benefits",
            typography: "subtitle",
            dense: true,
            
            items: [
                
                {   
                    icon : "FaChair",
                    label : 'badge'
                },

                {   
                    icon : "FaFastForward",
                    label : 'fastentry'
                },
            
                {   
                    icon : "FaHandshake",
                    label : 'video'
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
                {name: 'about', to: 'https://ecommerceberlin.com/about'},
                // {name: 'cfp', to: '/speaking'},
                // {name: 'vote', to: '/vote'},
                {name: 'premium-services', to: 'https://ecommerceberlin.com/premium'},
              ]
            },
            // {
            //   name: 'visitors',
            //   items: [
                // {name: 'visit', to: '/visit'},
                // {name: 'schedule', to: '/schedule'},
                // {name: 'speakers', to: '/speakers'},
                // {name: 'exhibitors', to: '/exhibitors'},
                // {name: 'masterclasses', to: '/masterclasses'},
                // {name: 'presenters', to: '/presenters'},
                // {name: 'offers', to: '/offers'},
                // {name: 'vip', to: '/vip'},
                // {name: 'ambassador', to: '/ambassador'}
            //   ]
            // },
            // {
            //   name: 'exhibitors',
            //   items: [
                // {name: 'exhibit', to: '/exhibit'},
                // {name: 'masterclasses-organizer', to: '/masterclasses/organizer'},
                // {name: 'sample-visitors', to: '/sample-visitors'},
                // {name: 'exhibitors', to: '/exhibitors'},
                // {name: 'premium-services', to: '/premium'},
                // {name: 'faq', to: '/faq'},
              
            //   ]
            // }
        ]
    },

    premium : {

        ticketgroups : [447],
        soldout: 'https://res.cloudinary.com/ecommerceberlin/image/upload/v1684149426/Website/PREMIUM%20SERVICES/sold-out.png'

    },

    vipticket : {

        ticketgroups : [471],
        soldout: 'https://res.cloudinary.com/ecommerceberlin/image/upload/v1684149426/Website/PREMIUM%20SERVICES/sold-out.png',
        wrapperProps: {
            label: "vipticket.title",
            secondaryLabel: ""
            }
    },

    vipticket_alt : {
        ticketgroups : [471],
        soldout: 'https://res.cloudinary.com/ecommerceberlin/image/upload/v1684149426/Website/PREMIUM%20SERVICES/sold-out.png',
        wrapperProps: {
            label: "vipticket_alt.title",
            secondaryLabel: ""
        }
    },

    exhibitors : {

        disableMeetups: false,

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
              {name: "phone", required: true},



            {
                name: "profile_linkedin", 
                required: false
            },
            { 
                name: "participant_type", 
                required: true,
                options: regFormOptions.participant_type
            },
            { 
                name: "company_role", 
                required: true,
                options: regFormOptions.company_role
            },
            
            {
                name: "location", 
                required: true, 
                options: regFormOptions.location 
            },
            {
                name: "objective", 
                required: true, 
                options: regFormOptions.objective
            },
            {
                name: "business_model", 
                required: true, 
                options: regFormOptions.business_model
            },
            {
                name: "employee", 
                required: false, 
                options: regFormOptions.employee
            },
            {
                name: "revenue", 
                required: false, 
                options: regFormOptions.revenue
            },
            {
                name: "accept", 
                required: true, 
                type: "confirm"
            },

               
            ],

            start : ['email', 'fname'],
            ticket_id : 2783,
            email_template : "ecommerceberlin-visitor-registration",
            background : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit,h_500,w_500/v1546813408/ebe_lanyard1.jpg",
            api : "https://api.eventjuicer.com/v1/public/hosts/ecommerceberlin.com/register",

        },
        
        update: {
            wrapperProps: {
            label: "visitor.update.title",
            // secondaryLabel: ""
            },
            legend: "",
            baseLabel: "visitor.update",
            fields: [
                {
                    name: "profile_linkedin", 
                    required: false
                },
                { 
                    name: "participant_type", 
                    required: true,
                    options: regFormOptions.participant_type
                },
                { 
                    name: "company_role", 
                    required: true,
                    options: regFormOptions.company_role
                },
                {
                    name: "location", 
                    required: true, 
                    options: regFormOptions.location
                },
    
            ],
    
            start: [],
    
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
        event_location : 'Messe Berlin',
        event_date : '17 & 18th FEBRUARY 2026',
        event_hours : '9:00-17:00',

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

   

   

    schedule : {
        times : {
            '10:00': 'presentation',
            '10:15': 'presentation',
            '11:00': 'presentation',
            '11:45': 'presentation',
            '12:30': 'presentation',
            '13:15': 'presentation',
            '14:00': 'presentation',
            '14:45': 'presentation',
            '15:30': 'presentation',
            '16:15': 'presentation',
            '16:45': 'presentation',
        
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

        title: 'event.support.hello',
        description: 'event.support.description',

        hideOrganizerDetails: true,


        people : [
           
            {
                name: 'Noel Graf',
                position : '',
                langs : ["en"],
                avatar: 'https://res.cloudinary.com/ecommerceberlin/image/upload/v1736502955/Website/noel-graf.png',
                phone: '+49 305 201 51 10',
                email: 'hello@ecommerceberlin.com',
                chatlio : true
            },
            {
                name: 'Lucas Zarna',
                position : '',
                langs : ["en"],
                avatar: 'https://res.cloudinary.com/ecommerceberlin/image/upload/v1705307707/Website/lucas-zarna-small-24.png',
                phone: '+49 176 316 244 92',
                email: 'sales@ecommerceberlin.com',
                chatlio : true
            }
        ],



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
        logotype: "https://res.cloudinary.com/eventjuicer/image/upload/h_30,c_fit,f_auto/v1710940958/Logo_b_y_expo.png",
        links: [
            //  {label: "Become a visitor", color: "primary",  href: "/visit", variant: "contained"}
        ],
    },


    vipphotostream : {

        wrapperProps: {
            label : "vips.gallery.title"
        },

        cols: 12,

        items : [

            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit/v1730980806/VIP%20zone/3407_ecommerce-berlin-berlin-tomek-DSC02435-eventshooters--2048px.jpg", cols: 6},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit/v1730980798/VIP%20zone/2036_ecommerce-berlin-berlin-patryk-P2088315-eventshooters--2048px.jpg", cols: 6},

            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit/v1730980803/VIP%20zone/3279_ecommerce-berlin-berlin-tomek-DSC02389-eventshooters--2048px.jpg", cols: 4},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit/v1709117066/ebe8_photos/2218/757_ecommerce-berlin-berlin-michal-NEW03137-eventshooters-elementy-2048px.jpg", cols: 4},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit/v1730980804/VIP%20zone/3285_ecommerce-berlin-berlin-tomek-DSC02392-eventshooters--2048px.jpg", cols: 4},

            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit/v1730980798/VIP%20zone/2106_ecommerce-berlin-berlin-tomek-DSC01726-eventshooters-elementy-2048px.jpg", cols: 6},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit/v1730980796/VIP%20zone/1254_ecommerce-berlin-berlin-tomek-DSC01233-eventshooters-elementy-2048px.jpg", cols: 6},
     
        ]
    },

    ambassadorphotostream : {

        wrapperProps: {
            label : "ambassador.gallery.title"
        },

        cols: 12,

        items : [

            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1710421467/Website/ambassador%20photos/ebe25-website-ebefest6.jpg", cols: 6},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1710421467/Website/ambassador%20photos/ebe25-website-ebefest2.jpg", cols: 6},

            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1710421467/Website/ambassador%20photos/ebe25-website-ebefest3.jpg", cols: 4},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1710421467/Website/ambassador%20photos/ebe25-website-ebefest4.jpg", cols: 4},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1710421467/Website/ambassador%20photos/ebe25-website-ebefest5.jpg", cols: 4},

            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1710421467/Website/ambassador%20photos/ebe25-website-ebefest1.jpg", cols: 6},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1710421467/Website/ambassador%20photos/ebe25-website-ebefest7.jpg", cols: 6},
     
        ]
    },


    cfpphotostream : {

        wrapperProps: {
            label : "cfp.gallery.title"
        },

        cols: 12,

        items : [

            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit/v1723643745/Website/CFS%20Conference%20Photos/ebe25-conference-1.jpg", cols: 3},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit/v1723643744/Website/CFS%20Conference%20Photos/ebe25-conference-2.jpg", cols: 3},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit/v1723643744/Website/CFS%20Conference%20Photos/ebe25-conference-3.jpg", cols: 3},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit/v1723643744/Website/CFS%20Conference%20Photos/ebe25-conference-4.jpg", cols: 3},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit/v1723643744/Website/CFS%20Conference%20Photos/ebe25-conference-5.jpg", cols: 3},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit/v1723643744/Website/CFS%20Conference%20Photos/ebe25-conference-6.jpg", cols: 3},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit/v1723643743/Website/CFS%20Conference%20Photos/ebe25-conference-7.jpg", cols: 3},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit/v1723643743/Website/CFS%20Conference%20Photos/ebe25-conference-8.jpg", cols: 3},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit/v1723643743/Website/CFS%20Conference%20Photos/ebe25-conference-9.jpg", cols: 3},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit/v1723643743/Website/CFS%20Conference%20Photos/ebe25-conference-10.jpg", cols: 3},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit/v1723644425/Website/CFS%20Conference%20Photos/ebe25-conference-11.jpg", cols: 3},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit/v1723644425/Website/CFS%20Conference%20Photos/ebe25-conference-12.jpg", cols: 3},            

       ]
    },

    cfptimeline: {

        baseLabel: "cfp.timeline",

        items : [
            {date: "2024-09-02", name: "submissions", icon:  "NoteAdd", dotColor: 'primary', active: true },
            {date: "2024-10-01", name: "public-voting", icon:  "Public" },
            {date: "2024-10-23", name: "qualification", icon:  "Assessment" },
            // {date: "2022-10-24", name: "jury-voting", icon:  "HowToVote" },
            {date: "2024-10-30", name: "results", icon:  "Mic", active: false }
            
        ]

    },
};


export default settings














