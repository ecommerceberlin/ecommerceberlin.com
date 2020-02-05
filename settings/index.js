

exports.default = {
    
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
                {name : "WidgetVipVisitorBenefits", props : {
                    label : "vips.benefits.title" 
                }},
                {name : "WidgetVips", props : {
                    limit: 12,
                    mobile: 4
                }},
                {name : "WidgetSchedule", props : { } },
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
                {name : "WidgetVisitorBenefits"},
                {name : "WidgetPresenters", props : {
                    disableTemps : true,
                    label : "presenters.list_featured",
                    limit : null,
                    bio : true,
                    filter : "@featuredPresenters"
                }},
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
                    start : ['referral', 'email', 'cname2'],
                    // first : true
                }},
            
            ],
        },

        presenters : {
            title : "",
            opengraph : "",
            widgets : [
                {name : "WidgetPresenters", props : {
                    first : true,
                    disableTemps : true,
                    label : "presenters.list_all",
                    limit : null,
                    bio : true,
                    filter : "@filterPresenterWithBio"
                }},
                {name : "WidgetVisitor", props : {label : "visitors.register_alt"} },
                {name : "WidgetVideoWithEventInfo"},
                {name : "WidgetSchedule", props : { } },
                {name : "WidgetVisitor", props : {label : "visitors.register"} },
            ]
        },

        schedule : {
            title : "",
            opengraph : "",
            widgets : [
                {name : "WidgetSchedule", props : {first : true} },
                {name : "WidgetVisitor", props : {label : "visitors.register_alt"} },
                {name : "WidgetVideoWithEventInfo"},
                {name : "WidgetPresenters", props : {
                    disableTemps : true,
                    label : "presenters.list_all",
                    limit : null,
                    bio : true,
                    filter : "@filterPresenterWithBio"
                }}
            ]   
        }

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
        height : 510,
        steps : [
            "choose_booth",
            "confirm",
            "pay",
            "access"
        ],
        allowedGroupIds : [281, 282, 283, 284],
        styles : {
            light : null,
            standard : 281,
            hot : 282,
            superhot : 283,
            ultra : null,
            grand : 284,
            stage : 287,
            networking : 285
        },
        api : "https://order.ecommerceberlin.com/preorder"
    },

    speakers : {

        benefits : [

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

    vips : {

        label : "vips.benefits.title",
        baseLabel : "vips.benefits",
        items : [

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

    reviews : {

    },

    ui : {

        menuItems : [
            {
              name: 'general',
              items: [
                {name: 'home', to: '/'},
                {name: 'about', to: '/about'},
              ]
            },
            {
              name: 'visitors',
              items: [
                {name: 'visit', to: '/visit'},
                {name: 'schedule', to: '/schedule'},
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

    exhibitors : {
        benefits : [
            {
                icon : "FaHandshake",
                label :  'outreach',
            },
            {   
                icon : "FaComments",
                label : 'feedback'
            },
            {   
                icon : "FaSmile",
                label : 'organizer'
            },
            {   
                icon : "FaPiggyBank",
                label : 'all_inclusive'
            },
            {
                icon : "FaLink",
                label : 'meet_clients'
            },
            {
                icon : "FaLightbulb",
                label : 'inspiration'
            }
        ]
    },
    visitor : {
        benefits : [

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
        ],
        default_ticket_id : 1549,
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
        event_date : '13th February 2020',
        event_hours : '10:00-17:00',

    },

    rolebuttons : {
        accent : "gold",
        items : [
        {
          url: 'https://res.cloudinary.com/eventjuicer/image/upload/v1579000835/visit.jpg',
          label: 'common.visitor',
          width: '50%',
          target : "/visit"
        },
        {
          url: 'https://res.cloudinary.com/eventjuicer/image/upload/v1579000835/exhibit.jpg',
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
                avatar: 'https://res.cloudinary.com/eventjuicer/image/upload/v1546386301/ecommerceberlin_support_lz.jpg',
                phone: '+49 157 7254 7327',
                email: 'lucas@ecommerceberlin.com',
                chatlio : true
            },
            {
                name: 'Peter',
                position : 'Project Manager',
                langs : ["en"],
                avatar: 'https://res.cloudinary.com/eventjuicer/image/upload/v1546386405/ecommerceberlin_support_psz.jpg',
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
            B: { company_id: 1440 },
            C: { company_id: 1601 },
            D: { company_id: 0 },
            E: { company_id: 0 }
          },
        //   minimized : ["A", "C"],
          venueStyle : "gold",
    },

    footer : {
        iconStyle : "black",
        links : [
            {label : "common.pages.imprint", href : "/legal-imprint"},
            {label : "visitors.agreement.title", href : "/legal-visitors"},
            {label : "exhibitors.agreement.title", href : "/legal-exhibitors"},
            {label : "common.pages.cookies", href : "/legal-cookies"},
        ]
    },
};


 