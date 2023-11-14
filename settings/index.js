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
    allowedGroupIds : [398, 399, 400, 401, 402, 403, 407, 413],
    venueLayout: "https://res.cloudinary.com/eventjuicer/image/upload/v1678744350/ebe8/ebe8_venueplan.png",
    boothStyleMapping: {
        399: "light", //STD
        398: "standard", //HOT
        400: "hot", //SUPER HOT
        407: "superHot", //ULTRA

        406: "boothSold", //BUFFER - LAST MINUTE

        401: "grand", //GRAND
        402: "premiumGrand", //PREMIUM GRAND

        404: "stage", //STAGE KEYNOTE
        405: "stage", //STAGE OPEN
        413: "stage", //STAGE STANDARD
        410: "networking", //VIPZONE
        409: "networking", //NETWORKING
        // 321: "boothSold"
    },
    api : "https://order.ecommerceberlin.com/preorder",
    benefits: {
       

        399: standardBenefits, //STD
        398: standardBenefits, //HOT
        400: standardBenefits, //SUPER HOT
        407: standardBenefits, //ULTRA
        406: standardBenefits, //BUFFER - LAST MINUTE
        401: premiumBenefits, //GRAND
        402: premiumBenefits, //PREMIUM GRAND
        410: networkingBenefits, //VIPZONE
        409: networkingBenefits, //NETWORKING
        404: stageBenefits, //STAGE KEYNOTE
        405: stageBenefits, //STAGE OPEN
        413: stageBenefits, //STAGE STANDARD

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
        proxy: "https://api.eventjuicer.workers.dev?url=",

        post_api : "https://api.eventjuicer.com/v1/public/hosts/ecommerceberlin.com/register",
        service_api : "https://api.eventjuicer.com/v1/services",
        og_image : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_limit,w_1024/v1546943854/ebe_og_home.jpg",

    },


    hero : {

        videoSrc : "https://res.cloudinary.com/ecommerceberlin/video/upload/q_auto,f_auto/v1689923579/Website/ebe24-website-video.mp4",
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

    bookingmap : {
        ...bookingmapShared,
        disabledTicketIds : [
            2383, 2465, //STD
            2380, 2467, //HOT
            2412, 2456, //SH
            2417, 2469, //ULTRA
            2400, 2468, //GRAND
            2393, 2466, //P GRAND
        ],
    },

    workshops : {

        apply: {
            disabled: 0
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
        ],
        
        start: [
            'email',
            "fname",
            'lname', 


        ],

        ticket_id : 2575,
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

        ticket_id : 2616,
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

            ticket_id : 2437,
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
            //    baseLabel: 'exhibitors.faq.before_event',
              label: 'fee',
            },    
            {
              label: 'exhibitor-status',
              important: true,
              buttons: [],
            },
            { label: 'submission-limits' },
            { label: 'co-presenter' },
            { label: 'ranking' },
            { label: 'fair-play' },
            // {
            // //  baseLabel: 'cfp.faq.before_event',
            // //   label: 'stage',
            // },
            { label: 'after-win' },
            { label: 'language' },
            { label: 'recordings' },
            { label: 'slot-duration' },
            { label: 'non-winners' },
            { label: 'masterclasses' },
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
                    label :  'fintech',
                },
            
                {
                    icon : "FaPoll",
                    label : 'marketing'
                },
            
                {
                    icon : "FaPoll",
                    label : 'conversion'
                },
    
                {
                    icon : "FaPoll",
                    label : 'crossborder'
                },
    
                {
                    icon : "FaPoll",
                    label : 'logistics'
                },
    
                {
                    icon : "FaPoll",
                    label : 'it'
                },

                {
                    icon : "FaTrophy",
                    label : 'trends'
                }
    
            ]
        }, 

    },

    vips : {

        register: {

            label: "vips.register.description",
            
            allowed: {

                test123: {},
                EBE_vip20_utudeb: {},
                EBE_umijus: {},
                EBE_media_utudeb: {},
                EBE_vip22_irufep: {},
                EBE_ahehaj: {},
                EBE_ujaxop: {},
                EBE_imoyav: {},
                EBE_gfmnachrichten_etobih: {},
                EBE_ikajip: {},
                EBE_omawik: {},
                EBE_iyasiq: {},
                EBE_oveyev: {},
                EBE_uxopuk: {},
                EBE_efifum: {},
                EBE_uzunun: {},
                EBE_ixefow: {},
                EBE_emeyef: {},
                EBE_ewemop: {},
                EBE_eduvez: {},

            },
            wrapperProps: {
                label : "vips.register.title",
                first : true,
            },
            fields : [
                // {name: "referral", required: true},
                {name: "email", required: true},
                {name: "fname", required: true},
                {name: "lname", required: true},
                {name: "cname2", required: true},
                {name: "position", required: true},
                {name: "phone", required: true}
              ],
            ticket_id : 2176,
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
                {name: 'about', to: '/about'},
                // {name: 'cfp', to: '/speaking'},
                // {name: 'vote', to: '/vote'},
              ]
            },
            {
              name: 'visitors',
              items: [
                {name: 'visit', to: '/visit'},
                //  {name: 'schedule', to: '/schedule'},
                // {name: 'presenters', to: '/presenters'},
                {name: 'exhibitors', to: '/exhibitors'},
                // {name: 'offers', to: '/offers'},
                {name: 'vip', to: '/vip'},
                {name: 'ambassador', to: '/ambassador'}
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

        ticketgroups : [403],
        soldout: 'https://res.cloudinary.com/ecommerceberlin/image/upload/v1684149426/Website/PREMIUM%20SERVICES/sold-out.png'

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
              {name: "phone", required: true},



            {
                name: "profile_linkedin", 
                required: false
            },
            { 
                name: "participant_type", 
                required: true,
                options: "participant_type"},
            { 
                name: "company_role", 
                required: true,
                options: "company_role"
            },
            {
                name: "accept", 
                required: true, 
                type: "confirm"
            },

               
            ],

            start : ['email', 'fname'],
            ticket_id : 2426,
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
        event_date : '22nd FEBRUARY 2024',
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
                name: 'Gerome Yalim',
                position : '',
                langs : ["en"],
                avatar: 'https://res.cloudinary.com/ecommerceberlin/image/upload/v1691403509/Website/gerome2.png',
                phone: '+49 305 201 42 88',
                email: 'hello@ecommerceberlin.com',
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
            // '13:00': 'break_20',
            '13:10': 'presentation',
            '13:50': 'presentation',
            '14:30': 'presentation',
            '15:10': 'presentation',
            '15:50': 'presentation',
            '16:10': 'presentation',
            '16:30': 'presentation',
        
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
            //  {label: "Become a visitor", color: "primary",  href: "/visit", variant: "contained"}
        ],
    },


    vipphotostream : {

        wrapperProps: {
            label : "vips.gallery.title"
        },

        cols: 12,

        items : [

            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1690965126/Website/VIP/ecommerce-berlin-2023-palej-pl-_AOG9078.jpg", cols: 6},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1690965125/Website/VIP/ecommerce-berlin-2023-DSC03345-palej-pl.jpg", cols: 6},

            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1690965125/Website/VIP/ecommerce-berlin-2023-palej-pl-DSC01767.jpg", cols: 4},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1690965125/Website/VIP/ecommerce-berlin-2023-DSC03294-palej-pl.jpg", cols: 4},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1690965125/Website/VIP/ecommerce-berlin-2023-palej-pl-_AOG9086.jpg", cols: 4},

            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1690965126/Website/VIP/ecommerce-berlin-2023-palej-pl-DSC01942.jpg", cols: 6},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1691145728/Website/VIP/ecommerce-berlin-2023-palej-pl-DSC01943.jpg", cols: 6},
     
        ]
    },




    cfpphotostream : {

        wrapperProps: {
            label : "cfp.gallery.title"
        },

        cols: 12,

        items : [

            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1692363067/Website/CFP%20-%20gallery/cfp_gal_3.jpg", cols: 6},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824808/Website/CFP%20-%20gallery/Conference4_Nivea.jpg", cols: 6},


            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1692363068/Website/CFP%20-%20gallery/cfp_gal_1.jpg", cols: 4},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824722/Website/CFP%20-%20gallery/IMG_0782_copy.jpg", cols: 4},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1692363068/Website/CFP%20-%20gallery/cfp_gal_5.jpg", cols: 4},

            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824707/Website/CFP%20-%20gallery/IMG_9984.jpg", cols: 6},
          {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824698/Website/CFP%20-%20gallery/Conference6_Facebook_Lisa.jpg", cols: 6},
     

            // {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824698/Website/CFP%20-%20gallery/Conference10_Douglas.jpg", cols: 6},
            // {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824685/Website/CFP%20-%20gallery/2SH09325.jpg", cols: 6},
            // {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824685/Website/CFP%20-%20gallery/Conference5_BabySweets.jpg", cols: 4}

        ]
    },

    cfptimeline: {

        baseLabel: "cfp.timeline",

        items : [
            {date: "2023-09-04", name: "submissions", icon:  "NoteAdd", dotColor: 'primary', active: true },
            {date: "2023-10-02", name: "public-voting", icon:  "Public" },
            {date: "2023-10-23", name: "qualification", icon:  "Assessment" },
            // {date: "2022-10-24", name: "jury-voting", icon:  "HowToVote" },
            {date: "2023-10-30", name: "results", icon:  "Mic", active: false }
            
        ]

    },
};


export default settings














