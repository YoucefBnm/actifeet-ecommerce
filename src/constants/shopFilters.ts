export type SHOPFILTERSTYPE = {
    [key: string]: {
        gender: string[];
        category: string[];
        brand: string[];
        badge?: string[];
        sizes: string[];
        colors: string[]
    }
}

export const SHOP_FILTERS:SHOPFILTERSTYPE = {
    'all': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "climbing",
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "adidas",
            "altra",
            "asics",
            "black diamond",
            "brooks",
            "columbia",
            "la sportiva",
            "new balance",
            "nike",
            "ocun",
            "on",
            "puma",
            "red chili",
            "salomon",
            "scarpa",
            "tenaya",
            "under armour"
        ],
        "sizes": [
            '3',
            '3.5',
            '4',
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '13.5',
            '14',
            '14.5',
            '15'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "pink",
            "red",
            "sienna",
            "slateblue",
            "teal",
            "white",
            "yellow"
        ]
    },

    'men': {
        "gender": [
            "men"
        ],
        "category": [
            "climbing",
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "adidas",
            "altra",
            "asics",
            "black diamond",
            "brooks",
            "columbia",
            "la sportiva",
            "new balance",
            "nike",
            "ocun",
            "on",
            "puma",
            "red chili",
            "salomon",
            "scarpa",
            "tenaya",
            "under armour"
        ],
        "sizes": [
            '4',
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '13.5',
            '14',
            '15'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "red",
            "sienna",
            "slateblue",
            "teal",
            "white",
            "yellow"
        ]
    },

    'menrunning': {
        "gender": [
            "men"
        ],
        "category": [
            "running"
        ],
        "brand": [
            "adidas",
            "altra",
            "asics",
            "brooks",
            "nike",
            "on",
            "puma",
            "salomon",
            "under armour"
        ],
        "sizes": [
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "red",
            "slateblue",
            "teal",
            "white",
            "yellow"
        ]
    },
    'mencross training': {
        "gender": [
            "men"
        ],
        "category": [
            "cross training"
        ],
        "brand": [
            "adidas",
            "altra",
            "asics",
            "new balance",
            "nike",
            "on",
            "puma",
            "under armour"
        ],
        "sizes": [
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "red",
            "sienna",
            "slateblue",
            "teal",
            "white"
        ]
    },
    'menclimbing': {
        "gender": [
            "men"
        ],
        "category": [
            "climbing"
        ],
        "brand": [
            "black diamond",
            "la sportiva",
            "ocun",
            "red chili",
            "scarpa",
            "tenaya"
        ],
        "sizes": [
            '4',
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '13.5',
            '14',
            '15'
        ],
        "colors": [
            "black",
            "blue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "teal",
            "yellow"
        ]
    },
    'menhiking': {
        "gender": [
            "men"
        ],
        "category": [
            "hiking"
        ],
        "brand": [
            "adidas",
            "altra",
            "asics",
            "brooks",
            "columbia",
            "nike",
            "on",
            "puma",
            "salomon",
            "under armour"
        ],
        "sizes": [
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "red",
            "sienna",
            "teal",
            "white",
            "yellow"
        ]
    },

    'menbest seller': {
        "gender": [
            "men"
        ],
        "category": [
            "climbing",
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "adidas",
            "altra",
            "asics",
            "black diamond",
            "brooks",
            "columbia",
            "la sportiva",
            "new balance",
            "nike",
            "ocun",
            "on",
            "salomon",
            "tenaya",
            "under armour"
        ],
        "sizes": [
            '4',
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "red",
            "sienna",
            "slateblue",
            "teal",
            "white",
            "yellow"
        ]
    },
    'mennew': {
        "gender": [
            "men"
        ],
        "category": [
            "climbing",
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "adidas",
            "altra",
            "asics",
            "brooks",
            "columbia",
            "nike",
            "on",
            "salomon",
            "scarpa",
            "under armour"
        ],
        "sizes": [
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "red",
            "sienna",
            "teal",
            "white"
        ]
    },
    'mensale': {
        "gender": [
            "men"
        ],
        "category": [
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "adidas",
            "asics",
            "brooks",
            "columbia",
            "on",
            "puma",
            "salomon",
            "under armour"
        ],
        "sizes": [
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "orange",
            "slateblue",
            "teal",
            "white"
        ]
    },

    'menadidas': {
        "gender": [
            "men"
        ],
        "category": [
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "adidas"
        ],
        "sizes": [
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14'
        ],
        "colors": [
            "black",
            "blue",
            "darkblue",
            "grey",
            "sienna",
            "white"
        ]
    },
    'menaltra': {
        "gender": [
            "men"
        ],
        "category": [
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "altra"
        ],
        "sizes": [
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "red",
            "teal",
            "white",
            "yellow"
        ]
    },
    'menasics': {
        "gender": [
            "men"
        ],
        "category": [
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "asics"
        ],
        "sizes": [
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14'
        ],
        "colors": [
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "red",
            "slateblue",
            "teal",
            "white"
        ]
    },
    'menblack diamond': {
        "gender": [
            "men"
        ],
        "category": [
            "climbing"
        ],
        "brand": [
            "black diamond"
        ],
        "sizes": [
            '6.5',
            '7',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12'
        ],
        "colors": [
            "black"
        ]
    },
    'menbrooks': {
        "gender": [
            "men"
        ],
        "category": [
            "hiking",
            "running"
        ],
        "brand": [
            "brooks"
        ],
        "sizes": [
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "red",
            "teal",
            "white",
            "yellow"
        ]
    },
    'mencolumbia': {
        "gender": [
            "men"
        ],
        "category": [
            "hiking"
        ],
        "brand": [
            "columbia"
        ],
        "sizes": [
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "black",
            "blue",
            "orange",
            "sienna",
            "teal",
            "white"
        ]
    },
    'menla sportiva': {
        "gender": [
            "men"
        ],
        "category": [
            "climbing"
        ],
        "brand": [
            "la sportiva"
        ],
        "sizes": [
            '4',
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5'
        ],
        "colors": [
            "black",
            "blue",
            "orange",
            "teal",
            "yellow"
        ]
    },
    'mennew balance': {
        "gender": [
            "men"
        ],
        "category": [
            "cross training"
        ],
        "brand": [
            "new balance"
        ],
        "sizes": [
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "black",
            "red"
        ]
    },
    'mennike': {
        "gender": [
            "men"
        ],
        "category": [
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "nike"
        ],
        "sizes": [
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "red",
            "yellow"
        ]
    },
    'menocun': {
        "gender": [
            "men"
        ],
        "category": [
            "climbing"
        ],
        "brand": [
            "ocun"
        ],
        "sizes": [
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13'
        ],
        "colors": [
            "green",
            "orange"
        ]
    },
    'menon': {
        "gender": [
            "men"
        ],
        "category": [
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "on"
        ],
        "sizes": [
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14'
        ],
        "colors": [
            "black",
            "blue",
            "grey",
            "lightblue",
            "orange",
            "sienna",
            "slateblue"
        ]
    },
    'menpuma': {
        "gender": [
            "men"
        ],
        "category": [
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "puma"
        ],
        "sizes": [
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '13',
            '14'
        ],
        "colors": [
            "black",
            "grey",
            "lightblue",
            "orange",
            "white"
        ]
    },
    'menredchili': {
        "gender": [
            "men"
        ],
        "category": [
            "climbing"
        ],
        "brand": [
            "red chili"
        ],
        "sizes": [
            '4.5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12'
        ],
        "colors": [
            "black",
            "green",
            "orange"
        ]
    },
    'mensalomon': {
        "gender": [
            "men"
        ],
        "category": [
            "hiking",
            "running"
        ],
        "brand": [
            "salomon"
        ],
        "sizes": [
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14'
        ],
        "colors": [
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "red",
            "teal",
            "white"
        ]
    },
    'menscarpa': {
        "gender": [
            "men"
        ],
        "category": [
            "climbing"
        ],
        "brand": [
            "scarpa"
        ],
        "sizes": [
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '14',
            '15'
        ],
        "colors": [
            "black",
            "blue",
            "grey",
            "orange",
            "teal"
        ]
    },
    'mentenaya': {
        "gender": [
            "men"
        ],
        "category": [
            "climbing"
        ],
        "brand": [
            "tenaya"
        ],
        "sizes": [
            '8',
            '9',
            '11.5',
            '13.5'
        ],
        "colors": [
            "blue",
            "lightblue"
        ]
    },
    'menunder armour': {
        "gender": [
            "men"
        ],
        "category": [
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "under armour"
        ],
        "sizes": [
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "red",
            "slateblue",
            "teal",
            "white"
        ]
    },

    'women': {
        "gender": [
            "women"
        ],
        "category": [
            "climbing",
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "adidas",
            "altra",
            "asics",
            "black diamond",
            "brooks",
            "columbia",
            "la sportiva",
            "new balance",
            "nike",
            "ocun",
            "on",
            "puma",
            "red chili",
            "salomon",
            "scarpa",
            "tenaya",
            "under armour"
        ],
        "sizes": [
            '3',
            '3.5',
            '4',
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '13.5',
            '14',
            '14.5',
            '15'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "pink",
            "red",
            "sienna",
            "slateblue",
            "teal",
            "white",
            "yellow"
        ]
    },

    'womenrunning': {
        "gender": [
            "women"
        ],
        "category": [
            "running"
        ],
        "brand": [
            "adidas",
            "altra",
            "asics",
            "brooks",
            "columbia",
            "nike",
            "on",
            "puma",
            "under armour"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "pink",
            "red",
            "slateblue",
            "teal",
            "white"
        ]
    },
    'womencross training': {
        "gender": [
            "women"
        ],
        "category": [
            "cross training"
        ],
        "brand": [
            "adidas",
            "asics",
            "new balance",
            "nike",
            "on",
            "puma",
            "under armour"
        ],
        "sizes": [
            '4',
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "pink",
            "red",
            "teal",
            "white"
        ]
    },
    'womenclimbing': {
        "gender": [
            "women"
        ],
        "category": [
            "climbing"
        ],
        "brand": [
            "black diamond",
            "la sportiva",
            "ocun",
            "red chili",
            "scarpa",
            "tenaya"
        ],
        "sizes": [
            '3',
            '3.5',
            '4',
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '13.5',
            '14.5',
            '15'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "pink",
            "red",
            "teal",
            "white",
            "yellow"
        ]
    },
    'womenhiking': {
        "gender": [
            "women"
        ],
        "category": [
            "hiking"
        ],
        "brand": [
            "adidas",
            "altra",
            "brooks",
            "columbia",
            "new balance",
            "nike",
            "puma",
            "salomon",
            "under armour"
        ],
        "sizes": [
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "pink",
            "sienna",
            "slateblue",
            "teal",
            "white"
        ]
    },

    'womenbest seller': {
        "gender": [
            "women"
        ],
        "category": [
            "climbing",
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "adidas",
            "altra",
            "asics",
            "brooks",
            "la sportiva",
            "new balance",
            "nike",
            "ocun",
            "on",
            "puma",
            "salomon",
            "scarpa",
            "tenaya",
            "under armour"
        ],
        "sizes": [
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "pink",
            "red",
            "slateblue",
            "teal",
            "white"
        ]
    },
    'womennew': {
        "gender": [
            "women"
        ],
        "category": [
            "climbing",
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "altra",
            "asics",
            "black diamond",
            "brooks",
            "columbia",
            "new balance",
            "nike",
            "on",
            "salomon",
            "scarpa"
        ],
        "sizes": [
            '4',
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '13.5',
            '14.5',
            '15'
        ],
        "colors": [
            "black",
            "blue",
            "darkblue",
            "grey",
            "lightblue",
            "orange",
            "pink",
            "sienna",
            "slateblue",
            "teal",
            "white"
        ]
    },
    'womensale': {
        "gender": [
            "women"
        ],
        "category": [
            "climbing",
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "adidas",
            "altra",
            "asics",
            "brooks",
            "columbia",
            "la sportiva",
            "new balance",
            "nike",
            "puma",
            "red chili",
            "under armour"
        ],
        "sizes": [
            '4',
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "pink",
            "red",
            "slateblue",
            "teal",
            "white"
        ]
    },

    'womenadidas': {
        "gender": [
            "women"
        ],
        "category": [
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "adidas"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "lightblue",
            "white"
        ]
    },
    'womenaltra': {
        "gender": [
            "women"
        ],
        "category": [
            "hiking",
            "running"
        ],
        "brand": [
            "altra"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12'
        ],
        "colors": [
            "black",
            "blue",
            "green",
            "lightblue",
            "teal"
        ]
    },
    'womenasics': {
        "gender": [
            "women"
        ],
        "category": [
            "cross training",
            "running"
        ],
        "brand": [
            "asics"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13'
        ],
        "colors": [
            "black",
            "blue",
            "darkblue",
            "grey",
            "lightblue",
            "orange",
            "red",
            "slateblue"
        ]
    },
    'womenblack diamond': {
        "gender": [
            "women"
        ],
        "category": [
            "climbing"
        ],
        "brand": [
            "black diamond"
        ],
        "sizes": [
            '5.5',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10'
        ],
        "colors": [
            "black",
            "blue",
            "red",
            "white",
            "yellow"
        ]
    },
    'womenbrooks': {
        "gender": [
            "women"
        ],
        "category": [
            "hiking",
            "running"
        ],
        "brand": [
            "brooks"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12'
        ],
        "colors": [
            "beige",
            "black",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "pink",
            "slateblue",
            "teal",
            "white"
        ]
    },
    'womencolumbia': {
        "gender": [
            "women"
        ],
        "category": [
            "hiking",
            "running"
        ],
        "brand": [
            "columbia"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '12'
        ],
        "colors": [
            "beige",
            "black",
            "darkblue",
            "grey",
            "lightblue",
            "sienna",
            "white"
        ]
    },
    'womenla sportiva': {
        "gender": [
            "women"
        ],
        "category": [
            "climbing"
        ],
        "brand": [
            "la sportiva"
        ],
        "sizes": [
            '3',
            '3.5',
            '4',
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10'
        ],
        "colors": [
            "black",
            "blue",
            "green",
            "grey",
            "orange",
            "white",
            "yellow"
        ]
    },
    'womennew balance': {
        "gender": [
            "women"
        ],
        "category": [
            "cross training",
            "hiking"
        ],
        "brand": [
            "new balance"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '12'
        ],
        "colors": [
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "slateblue",
            "teal",
            "white"
        ]
    },
    'womennike': {
        "gender": [
            "women"
        ],
        "category": [
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "nike"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13'
        ],
        "colors": [
            "black",
            "darkblue",
            "green",
            "red",
            "teal"
        ]
    },
    'womenocun': {
        "gender": [
            "women"
        ],
        "category": [
            "climbing"
        ],
        "brand": [
            "ocun"
        ],
        "sizes": [
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10'
        ],
        "colors": [
            "darkblue",
            "pink",
            "red"
        ]
    },
    'womenpuma': {
        "gender": [
            "women"
        ],
        "category": [
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "puma"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '13',
            '14'
        ],
        "colors": [
            "beige",
            "black",
            "darkblue",
            "grey",
            "lightblue",
            "red",
            "white"
        ]
    },
    'womenred chili': {
        "gender": [
            "women"
        ],
        "category": [
            "climbing"
        ],
        "brand": [
            "red chili"
        ],
        "sizes": [
            '4',
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '9.5'
        ],
        "colors": [
            "blue",
            "red"
        ]
    },
    'womensalomon': {
        "gender": [
            "women"
        ],
        "category": [
            "hiking"
        ],
        "brand": [
            "salomon"
        ],
        "sizes": [
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '12'
        ],
        "colors": [
            "black",
            "darkblue",
            "grey",
            "lightblue",
            "orange",
            "pink",
            "teal",
            "white"
        ]
    },
    'womenscarpa': {
        "gender": [
            "women"
        ],
        "category": [
            "climbing"
        ],
        "brand": [
            "scarpa"
        ],
        "sizes": [
            '3.5',
            '4',
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '13.5',
            '14.5',
            '15'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "green",
            "lightblue",
            "orange",
            "pink",
            "teal",
            "white",
            "yellow"
        ]
    },
    'womentenaya': {
        "gender": [
            "women"
        ],
        "category": [
            "climbing"
        ],
        "brand": [
            "tenaya"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '7',
            '7.5',
            '8',
            '8.5',
            '9'
        ],
        "colors": [
            "blue",
            "green"
        ]
    },
    'womenunder armour': {
        "gender": [
            "women"
        ],
        "category": [
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "under armour"
        ],
        "sizes": [
            '4',
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '12',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "beige",
            "black",
            "darkblue",
            "grey",
            "lightblue",
            "pink",
            "slateblue",
            "white"
        ]
    },


    'running': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "running"
        ],
        "brand": [
            "adidas",
            "altra",
            "asics",
            "brooks",
            "columbia",
            "nike",
            "on",
            "puma",
            "salomon",
            "under armour"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "pink",
            "red",
            "slateblue",
            "teal",
            "white",
            "yellow"
        ]
    },
    'runningbest seller': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "running"
        ],
        "brand": [
            "adidas",
            "altra",
            "asics",
            "brooks",
            "nike",
            "salomon",
            "under armour"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "pink",
            "red",
            "slateblue",
            "teal",
            "white",
            "yellow"
        ]
    },
    'runningnew': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "running"
        ],
        "brand": [
            "adidas",
            "altra",
            "asics",
            "brooks",
            "nike",
            "salomon",
            "under armour"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "black",
            "blue",
            "darkblue",
            "grey",
            "lightblue",
            "red",
            "slateblue",
            "teal",
            "white"
        ]
    },
    'runningsale': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "running"
        ],
        "brand": [
            "altra",
            "asics",
            "brooks",
            "columbia",
            "nike",
            "on",
            "under armour"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "pink",
            "red",
            "slateblue",
            "teal",
            "white"
        ]
    },
    
    'cross training': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "cross training"
        ],
        "brand": [
            "adidas",
            "altra",
            "asics",
            "new balance",
            "nike",
            "on",
            "puma",
            "under armour"
        ],
        "sizes": [
            '4',
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "pink",
            "red",
            "sienna",
            "slateblue",
            "teal",
            "white"
        ]
    },
    'cross trainingbest seller': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "cross training"
        ],
        "brand": [
            "altra",
            "new balance",
            "nike",
            "on",
            "puma",
            "under armour"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "pink",
            "red",
            "teal",
            "white"
        ]
    },
    'cross trainingnew': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "cross training"
        ],
        "brand": [
            "asics",
            "nike",
            "on",
            "under armour"
        ],
        "sizes": [
            '5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "black",
            "blue",
            "green",
            "grey",
            "lightblue",
            "red",
            "sienna",
            "teal",
            "white"
        ]
    },
    'cross trainingsale': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "cross training"
        ],
        "brand": [
            "adidas",
            "asics",
            "new balance",
            "nike",
            "puma",
            "under armour"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "orange",
            "red",
            "slateblue",
            "white"
        ]
    },

    'climbing': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "climbing"
        ],
        "brand": [
            "black diamond",
            "la sportiva",
            "ocun",
            "red chili",
            "scarpa",
            "tenaya"
        ],
        "sizes": [
            '3',
            '3.5',
            '4',
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '13.5',
            '14',
            '14.5',
            '15'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "pink",
            "red",
            "teal",
            "white",
            "yellow"
        ]
    },
    'climbingbest seller': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "climbing"
        ],
        "brand": [
            "black diamond",
            "la sportiva",
            "ocun",
            "scarpa",
            "tenaya"
        ],
        "sizes": [
            '4',
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13'
        ],
        "colors": [
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "pink",
            "yellow"
        ]
    },
    'climbingnew': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "climbing"
        ],
        "brand": [
            "black diamond",
            "scarpa"
        ],
        "sizes": [
            '4',
            '4.5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '13.5',
            '14.5',
            '15'
        ],
        "colors": [
            "black",
            "blue",
            "orange",
            "pink",
            "teal",
            "white"
        ]
    },
    'climbingsale': {
        "gender": [
            "women"
        ],
        "category": [
            "climbing"
        ],
        "brand": [
            "la sportiva",
            "red chili"
        ],
        "sizes": [
            '4',
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10'
        ],
        "colors": [
            "green",
            "red"
        ]
    },


    'hiking': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "hiking"
        ],
        "brand": [
            "adidas",
            "altra",
            "asics",
            "brooks",
            "columbia",
            "new balance",
            "nike",
            "on",
            "puma",
            "salomon",
            "under armour"
        ],
        "sizes": [
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "pink",
            "red",
            "sienna",
            "slateblue",
            "teal",
            "white",
            "yellow"
        ]
    },
    'hikingbest seller': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "hiking"
        ],
        "brand": [
            "adidas",
            "altra",
            "brooks",
            "columbia",
            "new balance",
            "nike",
            "salomon"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14'
        ],
        "colors": [
            "black",
            "darkblue",
            "green",
            "orange",
            "sienna",
            "teal",
            "white"
        ]
    },
    'hikingnew': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "hiking"
        ],
        "brand": [
            "altra",
            "brooks",
            "columbia",
            "new balance",
            "salomon"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14'
        ],
        "colors": [
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "sienna",
            "slateblue",
            "teal",
            "white"
        ]
    },
    'hikingsale': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "hiking"
        ],
        "brand": [
            "columbia",
            "puma",
            "salomon",
            "under armour"
        ],
        "sizes": [
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "black",
            "darkblue",
            "grey",
            "orange"
        ]
    },

    'bestseller': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "climbing",
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "adidas",
            "altra",
            "asics",
            "black diamond",
            "brooks",
            "columbia",
            "la sportiva",
            "new balance",
            "nike",
            "ocun",
            "on",
            "puma",
            "salomon",
            "scarpa",
            "tenaya",
            "under armour"
        ],
        "sizes": [
            '4',
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "pink",
            "red",
            "sienna",
            "slateblue",
            "teal",
            "white",
            "yellow"
        ]
    },
    'new': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "climbing",
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "adidas",
            "altra",
            "asics",
            "black diamond",
            "brooks",
            "columbia",
            "new balance",
            "nike",
            "on",
            "salomon",
            "scarpa",
            "under armour"
        ],
        "sizes": [
            '4',
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '13.5',
            '14',
            '14.5',
            '15'
        ],
        "colors": [
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "pink",
            "red",
            "sienna",
            "slateblue",
            "teal",
            "white"
        ]
    },
    'sale': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "climbing",
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "adidas",
            "altra",
            "asics",
            "brooks",
            "columbia",
            "la sportiva",
            "new balance",
            "nike",
            "on",
            "puma",
            "red chili",
            "salomon",
            "under armour"
        ],
        "sizes": [
            '4',
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "pink",
            "red",
            "slateblue",
            "teal",
            "white"
        ]
    },
    'best seller': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "climbing",
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "adidas",
            "altra",
            "asics",
            "black diamond",
            "brooks",
            "columbia",
            "la sportiva",
            "new balance",
            "nike",
            "ocun",
            "on",
            "puma",
            "salomon",
            "scarpa",
            "tenaya",
            "under armour"
        ],
        "sizes": [
            '4',
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "pink",
            "red",
            "sienna",
            "slateblue",
            "teal",
            "white",
            "yellow"
        ]
    },
    'adidas': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "adidas"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "grey",
            "lightblue",
            "sienna",
            "white"
        ]
    },
    'altra': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "altra"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "red",
            "teal",
            "white",
            "yellow"
        ]
    },
    'asics': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "asics"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14'
        ],
        "colors": [
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "red",
            "slateblue",
            "teal",
            "white"
        ]
    },
    'black diamond': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "climbing"
        ],
        "brand": [
            "black diamond"
        ],
        "sizes": [
            '5.5',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12'
        ],
        "colors": [
            "black",
            "blue",
            "red",
            "white",
            "yellow"
        ]
    },
    'brooks': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "hiking",
            "running"
        ],
        "brand": [
            "brooks"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "pink",
            "red",
            "slateblue",
            "teal",
            "white",
            "yellow"
        ]
    },
    'columbia': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "hiking",
            "running"
        ],
        "brand": [
            "columbia"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "grey",
            "lightblue",
            "orange",
            "sienna",
            "teal",
            "white"
        ]
    },
    'la sportiva': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "climbing"
        ],
        "brand": [
            "la sportiva"
        ],
        "sizes": [
            '3',
            '3.5',
            '4',
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5'
        ],
        "colors": [
            "black",
            "blue",
            "green",
            "grey",
            "orange",
            "teal",
            "white",
            "yellow"
        ]
    },
    'new balance': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "cross training",
            "hiking"
        ],
        "brand": [
            "new balance"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "red",
            "slateblue",
            "teal",
            "white"
        ]
    },
    'nike': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "nike"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "red",
            "teal",
            "yellow"
        ]
    },
    'ocun': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "climbing"
        ],
        "brand": [
            "ocun"
        ],
        "sizes": [
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13'
        ],
        "colors": [
            "darkblue",
            "green",
            "orange",
            "pink",
            "red"
        ]
    },
    'on': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "on"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14'
        ],
        "colors": [
            "black",
            "blue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "sienna",
            "slateblue",
            "white"
        ]
    },
    'puma': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "puma"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '13',
            '14'
        ],
        "colors": [
            "beige",
            "black",
            "darkblue",
            "grey",
            "lightblue",
            "orange",
            "red",
            "white"
        ]
    },
    'red chili': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "climbing"
        ],
        "brand": [
            "red chili"
        ],
        "sizes": [
            '4',
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12'
        ],
        "colors": [
            "black",
            "blue",
            "green",
            "orange",
            "red"
        ]
    },
    'salomon': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "hiking",
            "running"
        ],
        "brand": [
            "salomon"
        ],
        "sizes": [
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14'
        ],
        "colors": [
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "pink",
            "red",
            "teal",
            "white"
        ]
    },
    'scarpa': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "climbing"
        ],
        "brand": [
            "scarpa"
        ],
        "sizes": [
            '3.5',
            '4',
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '13.5',
            '14',
            '14.5',
            '15'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "green",
            "grey",
            "lightblue",
            "orange",
            "pink",
            "teal",
            "white",
            "yellow"
        ]
    },
    'tenaya': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "climbing"
        ],
        "brand": [
            "tenaya"
        ],
        "sizes": [
            '5',
            '5.5',
            '6',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '11.5',
            '13.5'
        ],
        "colors": [
            "blue",
            "green",
            "lightblue"
        ]
    },
    'under armour': {
        "gender": [
            "men",
            "women"
        ],
        "category": [
            "cross training",
            "hiking",
            "running"
        ],
        "brand": [
            "under armour"
        ],
        "sizes": [
            '4',
            '4.5',
            '5',
            '5.5',
            '6',
            '6.5',
            '7',
            '7.5',
            '8',
            '8.5',
            '9',
            '9.5',
            '10',
            '10.5',
            '11',
            '11.5',
            '12',
            '12.5',
            '13',
            '14',
            '15'
        ],
        "colors": [
            "beige",
            "black",
            "blue",
            "darkblue",
            "green",
            "grey",
            "lightblue",
            "pink",
            "red",
            "slateblue",
            "teal",
            "white"
        ]
    },

    
}