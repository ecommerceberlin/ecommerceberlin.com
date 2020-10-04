
//


const settings = {
    
    globals : {
        filterPresenterWithBio : {
            type : "condition", 
            required : ["avatar", "logotype", "bio"]
        },
        featuredPresenters : {
            type : "condition",
            required : ["avatar", "logotype", "bio", "featured"]
        },
        anotherTestGlobal : {type : "widget"},
        vipVisitor : {
            type : "props",
            data : {

            }
        }
    },

    pages : {

        speaking : {

            title : "",
            opengraph : "",
            widgets : [

            ]
        },

        vip : {
            title : "",
            opengraph : "",
            widgets : [
                {name : "WidgetVisitor", props : {
                    data : { important: 1 },
                    template : "ecommerceberlin-vip-registration",
                    label : "vips.register.title",
                    fields : [
                        {name: "referral", required: true},
                        {name: "email", required: true},
                        {name: "fname", required: true},
                        {name: "lname", required: true},
                        {name: "cname2", required: true},
                        {name: "position", required: true},
                        {name: "phone", required: true}
                      ],
                    start : ['referral', 'email', 'fname'],
                    first : true
                }},
                {name : "WidgetIconGrid", props : {
                    setting : "vips.benefits" 
                }},
                {name : "WidgetVips", props : {
                    limit: 12,
                    mobile: 4
                }},
                // {name : "WidgetSchedule", props : { } },
                {name : "WidgetVideoWithEventInfo"},
                {name : "WidgetVisitor", props : {
                    data : { important: 1 },
                    template : "ecommerceberlin-vip-registration",
                    label : "vips.register.title",
                    fields : [
                        {name: "referral", required: true},
                        {name: "email", required: true},
                        {name: "fname", required: true},
                        {name: "lname", required: true},
                        {name: "cname2", required: true},
                        {name: "position", required: true},
                        {name: "phone", required: true}
                      ],
                    start : ['referral','email', 'cname2'],
                    // first : true
                }},
             
                // {name : "WidgetPresenters", props : {
                //     disableTemps : true,
                //     label : "presenters.list_featured",
                //     limit : null,
                //     bio : true,
                //     filter : "@featuredPresenters"
                // }},
                // {name : "WidgetVisitor", props : {
                //     data : { important: 1 },
                //     template : "ecommerceberlin-vip-registration",
                //     label : "vips.register.title",
                //     fields : [
                //         {name: "referral", required: true},
                //         {name: "email", required: true},
                //         {name: "fname", required: true},
                //         {name: "lname", required: true},
                //         {name: "cname2", required: true},
                //         {name: "position", required: true},
                //         {name: "phone", required: true}
                //       ],
                //     start : ['referral', 'email', 'cname2'],
                //     // first : true
                // }},
            
            ],
        },

       
        presenters : {
            title : "",
            opengraph : "",
            widgets : [
                // {name : "WidgetPresenters", props : {
                //     first : true,
                //     disableTemps : true,
                //     label : "presenters.list_all",
                //     limit : null,
                //     bio : true,
                //     filter : "@filterPresenterWithBio"
                // }},
                {name : "WidgetVisitor", props : {label : "visitors.register_alt"} },
                {name : "WidgetVideoWithEventInfo"},
                // {name : "WidgetSchedule", props : { } },
                // {name : "WidgetVisitor", props : {label : "visitors.register"} },
            ]
        },

        presenters_all : {
            title : "",
            opengraph : "",
            widgets : [
                // {name : "WidgetPresenters", props : {
                //     first : true,
                //     disableTemps : true,
                //     label : "presenters.list_all",
                //     limit : null,
                //     bio : true,
                //     filter : "@filterPresenterWithBio"
                // }},
                {name : "WidgetVisitor", props : {label : "visitors.register_alt"} },
                {name : "WidgetVideoWithEventInfo"},
                // {name : "WidgetSchedule", props : { } },
                // {name : "WidgetVisitor", props : {label : "visitors.register"} },
            ]
        },

        schedule : {
            title : "",
            opengraph : "",
            widgets : [
                // {name : "WidgetSchedule", props : {first : true} },
                {name : "WidgetVisitor", props : {label : "visitors.register_alt"} },
                {name : "WidgetVideoWithEventInfo"},
                // {name : "WidgetPresenters", props : {
                //     disableTemps : true,
                //     label : "presenters.list_all",
                //     limit : null,
                //     bio : true,
                //     filter : "@filterPresenterWithBio"
                // }}
            ]   
        }

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
            xl: "https://res.cloudinary.com/eventjuicer/image/upload/v1601670727/ebe_cf/CallForPapers_2021_LiveOnStage1728x240.png",
            lg: "https://res.cloudinary.com/eventjuicer/image/upload/v1601670727/ebe_cf/CallForPapers_2021_LiveOnStage1350x440.png",
            md: "https://res.cloudinary.com/eventjuicer/image/upload/v1601670727/ebe_cf/CallForPapers_2021_LiveOnStage1104x736.png",
            sm: "https://res.cloudinary.com/eventjuicer/image/upload/v1601670726/ebe_cf/CallForPapers_2021_LiveOnStage900x450.png",
            xs: "https://res.cloudinary.com/eventjuicer/image/upload/v1601670728/ebe_cf/CallForPapers_2021_LiveOnStageArtboard-4.png"
        },
        href: "/vote"
    },


    system : {
        passwords : {
            'admin': '1751bfe48d5ad21fd9d'
        },
        lang_api_endpoint : 'https://localise.biz/api/export/all.json?format=multi&pretty&key=tWMy1RRHuiW6DD9T7AyYtFlQzAeztbBK',
        available_locales : ["en", "de"],
        default_locale : "en",
        api : "https://api.eventjuicer.com/v1/public/hosts/ecommerceberlin.com",
        og_image : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_limit,w_1024/v1546943854/ebe_og_home.jpg",
    
    },
    hero : {

        videoSrc : "https://res.cloudinary.com/eventjuicer/video/upload/v1544572510/ebe_hero_final.mp4",
        background : "https://res.cloudinary.com/eventjuicer/image/upload/v1544572575/ebe_hero_final_poster.jpg",
        overlay : "black",
        template : "heroGold",
        heading : "event.claim",
        subheading : "event.description"
    },

    bookingmap : {
        height : 2600,
        steps : [
            "choose_booth",
            "confirm",
            "pay",
            "access"
        ],
        allowedGroupIds : [322, 323, 324, 325, 329],
        disabledTicketIds : [1821, 1822, 1819, 1820, 1836],
        boothStyleMapping: {
            322: "light", //STD
            323: "standard", //HOT
            324: "hot", //SHOT
            329: "superHot", //GRAND
            325: "ultra", //PREMIUM GRAND

            328: "stage",
            326: "networking",
            // 321: "boothSold"
        },
        api : "https://order.ecommerceberlin.com/preorder"
    },

    speakers : {


        callforpapers: {
            
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

            ticket_id : 1842,
            email_template : "ebe-presenters-application",

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

        benefits : {

            label: "vips.benefits.title",
     //       secondaryLabel: "vips.benefits.description",
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
                {name: 'vote', to: '/vote'},
              ]
            },
            {
              name: 'visitors',
              items: [
                {name: 'visit', to: '/visit'},
                // {name: 'schedule', to: '/schedule'},
                // {name: 'presenters', to: '/presenters'},
                // {name: 'exhibitors', to: '/exhibitors'},
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

        ticketgroups : [331]

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

            label : "visitors.register",
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
            ticket_id : 1830,
            email_template : "ecommerceberlin-visitor-registration",
            background : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit,h_500,w_500/v1546813408/ebe_lanyard1.jpg",

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
        api : "https://api.eventjuicer.com/v1/public/hosts/ecommerceberlin.com/register"
    },

    common : {

        organizer_name : 'E-commerce Capitals Sp. z o.o. Sp. k.',
        organizer_address : 'POLAND, Poznan, Jana Matejki 52/4',
        organizer_regno : 'VAT ID 7792439665',
        event_name : 'E-commerce Berlin Expo',
        event_location : 'STATION Berlin, Luckenwalder Str. 4-6',
        event_date : '18th February 2021',
        event_hours : '10:00-17:00',

    },

    rolebuttons : {
        accent : "gold",
        items : [
        {
          url: 'https://res.cloudinary.com/eventjuicer/image/upload/w_768,c_fit,f_auto/v1579000835/visit.jpg',
          label: 'common.visitor',
          width: '50%',
          target : "/visit"
        },
        {
          url: 'https://res.cloudinary.com/eventjuicer/image/upload/w_768,c_fit,f_auto/v1579000835/exhibit.jpg',
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
                phone: '+49 157 7254 7327',
                email: 'lucas@ecommerceberlin.com',
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
        links: [
            {label: "common.menu.exhibitors.exhibit", color: "primary",  href: "/exhibit", as: "/exhibit", variant: "contained"}
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
            {date: "2020-09-01", name: "submissions", icon:  "NoteAdd", dotColor: 'primary', active: true },
            {date: "2020-10-01", name: "public-voting", icon:  "Public" },
            {date: "2020-10-23", name: "qualification", icon:  "Assessment" },
            {date: "2020-10-26", name: "jury-voting", icon:  "HowToVote" },
            {date: "2020-10-30", name: "results", icon:  "Mic", active: false }
            
        ]

    }
};


export default settings














