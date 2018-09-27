import React, {Component} from "react";
import SmallEllipseBtn from "../template/SmallEllipseBtn";
import countryList from 'react-select-country-list';

// third page
class ThirdPage extends Component {
    state = {
        phoneNumPre: [
            {
                "name": "Australia",
                "dial_code": "+61",
                "code": "AU"
            },
            {
                "name": "Afghanistan",
                "dial_code": "+93",
                "code": "AF"
            },
            {
                "name": "Aland Islands",
                "dial_code": "+358",
                "code": "AX"
            },
            {
                "name": "Albania",
                "dial_code": "+355",
                "code": "AL"
            },
            {
                "name": "Algeria",
                "dial_code": "+213",
                "code": "DZ"
            },
            {
                "name": "AmericanSamoa",
                "dial_code": "+1 684",
                "code": "AS"
            },
            {
                "name": "Andorra",
                "dial_code": "+376",
                "code": "AD"
            },
            {
                "name": "Angola",
                "dial_code": "+244",
                "code": "AO"
            },
            {
                "name": "Anguilla",
                "dial_code": "+1 264",
                "code": "AI"
            },
            {
                "name": "Antarctica",
                "dial_code": "+672",
                "code": "AQ"
            },
            {
                "name": "Antigua and Barbuda",
                "dial_code": "+1268",
                "code": "AG"
            },
            {
                "name": "Argentina",
                "dial_code": "+54",
                "code": "AR"
            },
            {
                "name": "Armenia",
                "dial_code": "+374",
                "code": "AM"
            },
            {
                "name": "Aruba",
                "dial_code": "+297",
                "code": "AW"
            },
            {
                "name": "Austria",
                "dial_code": "+43",
                "code": "AT"
            },
            {
                "name": "Azerbaijan",
                "dial_code": "+994",
                "code": "AZ"
            },
            {
                "name": "Bahamas",
                "dial_code": "+1 242",
                "code": "BS"
            },
            {
                "name": "Bahrain",
                "dial_code": "+973",
                "code": "BH"
            },
            {
                "name": "Bangladesh",
                "dial_code": "+880",
                "code": "BD"
            },
            {
                "name": "Barbados",
                "dial_code": "+1 246",
                "code": "BB"
            },
            {
                "name": "Belarus",
                "dial_code": "+375",
                "code": "BY"
            },
            {
                "name": "Belgium",
                "dial_code": "+32",
                "code": "BE"
            },
            {
                "name": "Belize",
                "dial_code": "+501",
                "code": "BZ"
            },
            {
                "name": "Benin",
                "dial_code": "+229",
                "code": "BJ"
            },
            {
                "name": "Bermuda",
                "dial_code": "+1 441",
                "code": "BM"
            },
            {
                "name": "Bhutan",
                "dial_code": "+975",
                "code": "BT"
            },
            {
                "name": "Bolivia, Plurinational State of",
                "dial_code": "+591",
                "code": "BO"
            },
            {
                "name": "Bosnia and Herzegovina",
                "dial_code": "+387",
                "code": "BA"
            },
            {
                "name": "Botswana",
                "dial_code": "+267",
                "code": "BW"
            },
            {
                "name": "Brazil",
                "dial_code": "+55",
                "code": "BR"
            },
            {
                "name": "British Indian Ocean Territory",
                "dial_code": "+246",
                "code": "IO"
            },
            {
                "name": "Brunei Darussalam",
                "dial_code": "+673",
                "code": "BN"
            },
            {
                "name": "Bulgaria",
                "dial_code": "+359",
                "code": "BG"
            },
            {
                "name": "Burkina Faso",
                "dial_code": "+226",
                "code": "BF"
            },
            {
                "name": "Burundi",
                "dial_code": "+257",
                "code": "BI"
            },
            {
                "name": "Cambodia",
                "dial_code": "+855",
                "code": "KH"
            },
            {
                "name": "Cameroon",
                "dial_code": "+237",
                "code": "CM"
            },
            {
                "name": "Canada",
                "dial_code": "+1",
                "code": "CA"
            },
            {
                "name": "Cape Verde",
                "dial_code": "+238",
                "code": "CV"
            },
            {
                "name": "Cayman Islands",
                "dial_code": "+ 345",
                "code": "KY"
            },
            {
                "name": "Central African Republic",
                "dial_code": "+236",
                "code": "CF"
            },
            {
                "name": "Chad",
                "dial_code": "+235",
                "code": "TD"
            },
            {
                "name": "Chile",
                "dial_code": "+56",
                "code": "CL"
            },
            {
                "name": "China",
                "dial_code": "+86",
                "code": "CN"
            },
            {
                "name": "Christmas Island",
                "dial_code": "+61",
                "code": "CX"
            },
            {
                "name": "Cocos (Keeling) Islands",
                "dial_code": "+61",
                "code": "CC"
            },
            {
                "name": "Colombia",
                "dial_code": "+57",
                "code": "CO"
            },
            {
                "name": "Comoros",
                "dial_code": "+269",
                "code": "KM"
            },
            {
                "name": "Congo",
                "dial_code": "+242",
                "code": "CG"
            },
            {
                "name": "Congo, The Democratic Republic of the Congo",
                "dial_code": "+243",
                "code": "CD"
            },
            {
                "name": "Cook Islands",
                "dial_code": "+682",
                "code": "CK"
            },
            {
                "name": "Costa Rica",
                "dial_code": "+506",
                "code": "CR"
            },
            {
                "name": "Cote d'Ivoire",
                "dial_code": "+225",
                "code": "CI"
            },
            {
                "name": "Croatia",
                "dial_code": "+385",
                "code": "HR"
            },
            {
                "name": "Cuba",
                "dial_code": "+53",
                "code": "CU"
            },
            {
                "name": "Cyprus",
                "dial_code": "+357",
                "code": "CY"
            },
            {
                "name": "Czech Republic",
                "dial_code": "+420",
                "code": "CZ"
            },
            {
                "name": "Denmark",
                "dial_code": "+45",
                "code": "DK"
            },
            {
                "name": "Djibouti",
                "dial_code": "+253",
                "code": "DJ"
            },
            {
                "name": "Dominica",
                "dial_code": "+1 767",
                "code": "DM"
            },
            {
                "name": "Dominican Republic",
                "dial_code": "+1 849",
                "code": "DO"
            },
            {
                "name": "Ecuador",
                "dial_code": "+593",
                "code": "EC"
            },
            {
                "name": "Egypt",
                "dial_code": "+20",
                "code": "EG"
            },
            {
                "name": "El Salvador",
                "dial_code": "+503",
                "code": "SV"
            },
            {
                "name": "Equatorial Guinea",
                "dial_code": "+240",
                "code": "GQ"
            },
            {
                "name": "Eritrea",
                "dial_code": "+291",
                "code": "ER"
            },
            {
                "name": "Estonia",
                "dial_code": "+372",
                "code": "EE"
            },
            {
                "name": "Ethiopia",
                "dial_code": "+251",
                "code": "ET"
            },
            {
                "name": "Falkland Islands (Malvinas)",
                "dial_code": "+500",
                "code": "FK"
            },
            {
                "name": "Faroe Islands",
                "dial_code": "+298",
                "code": "FO"
            },
            {
                "name": "Fiji",
                "dial_code": "+679",
                "code": "FJ"
            },
            {
                "name": "Finland",
                "dial_code": "+358",
                "code": "FI"
            },
            {
                "name": "France",
                "dial_code": "+33",
                "code": "FR"
            },
            {
                "name": "French Guiana",
                "dial_code": "+594",
                "code": "GF"
            },
            {
                "name": "French Polynesia",
                "dial_code": "+689",
                "code": "PF"
            },
            {
                "name": "Gabon",
                "dial_code": "+241",
                "code": "GA"
            },
            {
                "name": "Gambia",
                "dial_code": "+220",
                "code": "GM"
            },
            {
                "name": "Georgia",
                "dial_code": "+995",
                "code": "GE"
            },
            {
                "name": "Germany",
                "dial_code": "+49",
                "code": "DE"
            },
            {
                "name": "Ghana",
                "dial_code": "+233",
                "code": "GH"
            },
            {
                "name": "Gibraltar",
                "dial_code": "+350",
                "code": "GI"
            },
            {
                "name": "Greece",
                "dial_code": "+30",
                "code": "GR"
            },
            {
                "name": "Greenland",
                "dial_code": "+299",
                "code": "GL"
            },
            {
                "name": "Grenada",
                "dial_code": "+1 473",
                "code": "GD"
            },
            {
                "name": "Guadeloupe",
                "dial_code": "+590",
                "code": "GP"
            },
            {
                "name": "Guam",
                "dial_code": "+1 671",
                "code": "GU"
            },
            {
                "name": "Guatemala",
                "dial_code": "+502",
                "code": "GT"
            },
            {
                "name": "Guernsey",
                "dial_code": "+44",
                "code": "GG"
            },
            {
                "name": "Guinea",
                "dial_code": "+224",
                "code": "GN"
            },
            {
                "name": "Guinea-Bissau",
                "dial_code": "+245",
                "code": "GW"
            },
            {
                "name": "Guyana",
                "dial_code": "+595",
                "code": "GY"
            },
            {
                "name": "Haiti",
                "dial_code": "+509",
                "code": "HT"
            },
            {
                "name": "Holy See (Vatican City State)",
                "dial_code": "+379",
                "code": "VA"
            },
            {
                "name": "Honduras",
                "dial_code": "+504",
                "code": "HN"
            },
            {
                "name": "Hong Kong",
                "dial_code": "+852",
                "code": "HK"
            },
            {
                "name": "Hungary",
                "dial_code": "+36",
                "code": "HU"
            },
            {
                "name": "Iceland",
                "dial_code": "+354",
                "code": "IS"
            },
            {
                "name": "India",
                "dial_code": "+91",
                "code": "IN"
            },
            {
                "name": "Indonesia",
                "dial_code": "+62",
                "code": "ID"
            },
            {
                "name": "Iran, Islamic Republic of Persian Gulf",
                "dial_code": "+98",
                "code": "IR"
            },
            {
                "name": "Iraq",
                "dial_code": "+964",
                "code": "IQ"
            },
            {
                "name": "Ireland",
                "dial_code": "+353",
                "code": "IE"
            },
            {
                "name": "Isle of Man",
                "dial_code": "+44",
                "code": "IM"
            },
            {
                "name": "Israel",
                "dial_code": "+972",
                "code": "IL"
            },
            {
                "name": "Italy",
                "dial_code": "+39",
                "code": "IT"
            },
            {
                "name": "Jamaica",
                "dial_code": "+1 876",
                "code": "JM"
            },
            {
                "name": "Japan",
                "dial_code": "+81",
                "code": "JP"
            },
            {
                "name": "Jersey",
                "dial_code": "+44",
                "code": "JE"
            },
            {
                "name": "Jordan",
                "dial_code": "+962",
                "code": "JO"
            },
            {
                "name": "Kazakhstan",
                "dial_code": "+7 7",
                "code": "KZ"
            },
            {
                "name": "Kenya",
                "dial_code": "+254",
                "code": "KE"
            },
            {
                "name": "Kiribati",
                "dial_code": "+686",
                "code": "KI"
            },
            {
                "name": "Korea, Democratic People's Republic of Korea",
                "dial_code": "+850",
                "code": "KP"
            },
            {
                "name": "Korea, Republic of South Korea",
                "dial_code": "+82",
                "code": "KR"
            },
            {
                "name": "Kuwait",
                "dial_code": "+965",
                "code": "KW"
            },
            {
                "name": "Kyrgyzstan",
                "dial_code": "+996",
                "code": "KG"
            },
            {
                "name": "Laos",
                "dial_code": "+856",
                "code": "LA"
            },
            {
                "name": "Latvia",
                "dial_code": "+371",
                "code": "LV"
            },
            {
                "name": "Lebanon",
                "dial_code": "+961",
                "code": "LB"
            },
            {
                "name": "Lesotho",
                "dial_code": "+266",
                "code": "LS"
            },
            {
                "name": "Liberia",
                "dial_code": "+231",
                "code": "LR"
            },
            {
                "name": "Libyan Arab Jamahiriya",
                "dial_code": "+218",
                "code": "LY"
            },
            {
                "name": "Liechtenstein",
                "dial_code": "+423",
                "code": "LI"
            },
            {
                "name": "Lithuania",
                "dial_code": "+370",
                "code": "LT"
            },
            {
                "name": "Luxembourg",
                "dial_code": "+352",
                "code": "LU"
            },
            {
                "name": "Macao",
                "dial_code": "+853",
                "code": "MO"
            },
            {
                "name": "Macedonia",
                "dial_code": "+389",
                "code": "MK"
            },
            {
                "name": "Madagascar",
                "dial_code": "+261",
                "code": "MG"
            },
            {
                "name": "Malawi",
                "dial_code": "+265",
                "code": "MW"
            },
            {
                "name": "Malaysia",
                "dial_code": "+60",
                "code": "MY"
            },
            {
                "name": "Maldives",
                "dial_code": "+960",
                "code": "MV"
            },
            {
                "name": "Mali",
                "dial_code": "+223",
                "code": "ML"
            },
            {
                "name": "Malta",
                "dial_code": "+356",
                "code": "MT"
            },
            {
                "name": "Marshall Islands",
                "dial_code": "+692",
                "code": "MH"
            },
            {
                "name": "Martinique",
                "dial_code": "+596",
                "code": "MQ"
            },
            {
                "name": "Mauritania",
                "dial_code": "+222",
                "code": "MR"
            },
            {
                "name": "Mauritius",
                "dial_code": "+230",
                "code": "MU"
            },
            {
                "name": "Mayotte",
                "dial_code": "+262",
                "code": "YT"
            },
            {
                "name": "Mexico",
                "dial_code": "+52",
                "code": "MX"
            },
            {
                "name": "Micronesia, Federated States of Micronesia",
                "dial_code": "+691",
                "code": "FM"
            },
            {
                "name": "Moldova",
                "dial_code": "+373",
                "code": "MD"
            },
            {
                "name": "Monaco",
                "dial_code": "+377",
                "code": "MC"
            },
            {
                "name": "Mongolia",
                "dial_code": "+976",
                "code": "MN"
            },
            {
                "name": "Montenegro",
                "dial_code": "+382",
                "code": "ME"
            },
            {
                "name": "Montserrat",
                "dial_code": "+1664",
                "code": "MS"
            },
            {
                "name": "Morocco",
                "dial_code": "+212",
                "code": "MA"
            },
            {
                "name": "Mozambique",
                "dial_code": "+258",
                "code": "MZ"
            },
            {
                "name": "Myanmar",
                "dial_code": "+95",
                "code": "MM"
            },
            {
                "name": "Namibia",
                "dial_code": "+264",
                "code": "NA"
            },
            {
                "name": "Nauru",
                "dial_code": "+674",
                "code": "NR"
            },
            {
                "name": "Nepal",
                "dial_code": "+977",
                "code": "NP"
            },
            {
                "name": "Netherlands",
                "dial_code": "+31",
                "code": "NL"
            },
            {
                "name": "Netherlands Antilles",
                "dial_code": "+599",
                "code": "AN"
            },
            {
                "name": "New Caledonia",
                "dial_code": "+687",
                "code": "NC"
            },
            {
                "name": "New Zealand",
                "dial_code": "+64",
                "code": "NZ"
            },
            {
                "name": "Nicaragua",
                "dial_code": "+505",
                "code": "NI"
            },
            {
                "name": "Niger",
                "dial_code": "+227",
                "code": "NE"
            },
            {
                "name": "Nigeria",
                "dial_code": "+234",
                "code": "NG"
            },
            {
                "name": "Niue",
                "dial_code": "+683",
                "code": "NU"
            },
            {
                "name": "Norfolk Island",
                "dial_code": "+672",
                "code": "NF"
            },
            {
                "name": "Northern Mariana Islands",
                "dial_code": "+1 670",
                "code": "MP"
            },
            {
                "name": "Norway",
                "dial_code": "+47",
                "code": "NO"
            },
            {
                "name": "Oman",
                "dial_code": "+968",
                "code": "OM"
            },
            {
                "name": "Pakistan",
                "dial_code": "+92",
                "code": "PK"
            },
            {
                "name": "Palau",
                "dial_code": "+680",
                "code": "PW"
            },
            {
                "name": "Palestinian Territory, Occupied",
                "dial_code": "+970",
                "code": "PS"
            },
            {
                "name": "Panama",
                "dial_code": "+507",
                "code": "PA"
            },
            {
                "name": "Papua New Guinea",
                "dial_code": "+675",
                "code": "PG"
            },
            {
                "name": "Paraguay",
                "dial_code": "+595",
                "code": "PY"
            },
            {
                "name": "Peru",
                "dial_code": "+51",
                "code": "PE"
            },
            {
                "name": "Philippines",
                "dial_code": "+63",
                "code": "PH"
            },
            {
                "name": "Pitcairn",
                "dial_code": "+872",
                "code": "PN"
            },
            {
                "name": "Poland",
                "dial_code": "+48",
                "code": "PL"
            },
            {
                "name": "Portugal",
                "dial_code": "+351",
                "code": "PT"
            },
            {
                "name": "Puerto Rico",
                "dial_code": "+1 939",
                "code": "PR"
            },
            {
                "name": "Qatar",
                "dial_code": "+974",
                "code": "QA"
            },
            {
                "name": "Romania",
                "dial_code": "+40",
                "code": "RO"
            },
            {
                "name": "Russia",
                "dial_code": "+7",
                "code": "RU"
            },
            {
                "name": "Rwanda",
                "dial_code": "+250",
                "code": "RW"
            },
            {
                "name": "Reunion",
                "dial_code": "+262",
                "code": "RE"
            },
            {
                "name": "Saint Barthelemy",
                "dial_code": "+590",
                "code": "BL"
            },
            {
                "name": "Saint Helena, Ascension and Tristan Da Cunha",
                "dial_code": "+290",
                "code": "SH"
            },
            {
                "name": "Saint Kitts and Nevis",
                "dial_code": "+1 869",
                "code": "KN"
            },
            {
                "name": "Saint Lucia",
                "dial_code": "+1 758",
                "code": "LC"
            },
            {
                "name": "Saint Martin",
                "dial_code": "+590",
                "code": "MF"
            },
            {
                "name": "Saint Pierre and Miquelon",
                "dial_code": "+508",
                "code": "PM"
            },
            {
                "name": "Saint Vincent and the Grenadines",
                "dial_code": "+1 784",
                "code": "VC"
            },
            {
                "name": "Samoa",
                "dial_code": "+685",
                "code": "WS"
            },
            {
                "name": "San Marino",
                "dial_code": "+378",
                "code": "SM"
            },
            {
                "name": "Sao Tome and Principe",
                "dial_code": "+239",
                "code": "ST"
            },
            {
                "name": "Saudi Arabia",
                "dial_code": "+966",
                "code": "SA"
            },
            {
                "name": "Senegal",
                "dial_code": "+221",
                "code": "SN"
            },
            {
                "name": "Serbia",
                "dial_code": "+381",
                "code": "RS"
            },
            {
                "name": "Seychelles",
                "dial_code": "+248",
                "code": "SC"
            },
            {
                "name": "Sierra Leone",
                "dial_code": "+232",
                "code": "SL"
            },
            {
                "name": "Singapore",
                "dial_code": "+65",
                "code": "SG"
            },
            {
                "name": "Slovakia",
                "dial_code": "+421",
                "code": "SK"
            },
            {
                "name": "Slovenia",
                "dial_code": "+386",
                "code": "SI"
            },
            {
                "name": "Solomon Islands",
                "dial_code": "+677",
                "code": "SB"
            },
            {
                "name": "Somalia",
                "dial_code": "+252",
                "code": "SO"
            },
            {
                "name": "South Africa",
                "dial_code": "+27",
                "code": "ZA"
            },
            {
                "name": "South Georgia and the South Sandwich Islands",
                "dial_code": "+500",
                "code": "GS"
            },
            {
                "name": "Spain",
                "dial_code": "+34",
                "code": "ES"
            },
            {
                "name": "Sri Lanka",
                "dial_code": "+94",
                "code": "LK"
            },
            {
                "name": "Sudan",
                "dial_code": "+249",
                "code": "SD"
            },
            {
                "name": "Suriname",
                "dial_code": "+597",
                "code": "SR"
            },
            {
                "name": "Svalbard and Jan Mayen",
                "dial_code": "+47",
                "code": "SJ"
            },
            {
                "name": "Swaziland",
                "dial_code": "+268",
                "code": "SZ"
            },
            {
                "name": "Sweden",
                "dial_code": "+46",
                "code": "SE"
            },
            {
                "name": "Switzerland",
                "dial_code": "+41",
                "code": "CH"
            },
            {
                "name": "Syrian Arab Republic",
                "dial_code": "+963",
                "code": "SY"
            },
            {
                "name": "Taiwan",
                "dial_code": "+886",
                "code": "TW"
            },
            {
                "name": "Tajikistan",
                "dial_code": "+992",
                "code": "TJ"
            },
            {
                "name": "Tanzania, United Republic of Tanzania",
                "dial_code": "+255",
                "code": "TZ"
            },
            {
                "name": "Thailand",
                "dial_code": "+66",
                "code": "TH"
            },
            {
                "name": "Timor-Leste",
                "dial_code": "+670",
                "code": "TL"
            },
            {
                "name": "Togo",
                "dial_code": "+228",
                "code": "TG"
            },
            {
                "name": "Tokelau",
                "dial_code": "+690",
                "code": "TK"
            },
            {
                "name": "Tonga",
                "dial_code": "+676",
                "code": "TO"
            },
            {
                "name": "Trinidad and Tobago",
                "dial_code": "+1 868",
                "code": "TT"
            },
            {
                "name": "Tunisia",
                "dial_code": "+216",
                "code": "TN"
            },
            {
                "name": "Turkey",
                "dial_code": "+90",
                "code": "TR"
            },
            {
                "name": "Turkmenistan",
                "dial_code": "+993",
                "code": "TM"
            },
            {
                "name": "Turks and Caicos Islands",
                "dial_code": "+1 649",
                "code": "TC"
            },
            {
                "name": "Tuvalu",
                "dial_code": "+688",
                "code": "TV"
            },
            {
                "name": "Uganda",
                "dial_code": "+256",
                "code": "UG"
            },
            {
                "name": "Ukraine",
                "dial_code": "+380",
                "code": "UA"
            },
            {
                "name": "United Arab Emirates",
                "dial_code": "+971",
                "code": "AE"
            },
            {
                "name": "United Kingdom",
                "dial_code": "+44",
                "code": "GB"
            },
            {
                "name": "United States",
                "dial_code": "+1",
                "code": "US"
            },
            {
                "name": "Uruguay",
                "dial_code": "+598",
                "code": "UY"
            },
            {
                "name": "Uzbekistan",
                "dial_code": "+998",
                "code": "UZ"
            },
            {
                "name": "Vanuatu",
                "dial_code": "+678",
                "code": "VU"
            },
            {
                "name": "Venezuela, Bolivarian Republic of Venezuela",
                "dial_code": "+58",
                "code": "VE"
            },
            {
                "name": "Vietnam",
                "dial_code": "+84",
                "code": "VN"
            },
            {
                "name": "Virgin Islands, British",
                "dial_code": "+1 284",
                "code": "VG"
            },
            {
                "name": "Virgin Islands, U.S.",
                "dial_code": "+1 340",
                "code": "VI"
            },
            {
                "name": "Wallis and Futuna",
                "dial_code": "+681",
                "code": "WF"
            },
            {
                "name": "Yemen",
                "dial_code": "+967",
                "code": "YE"
            },
            {
                "name": "Zambia",
                "dial_code": "+260",
                "code": "ZM"
            },
            {
                "name": "Zimbabwe",
                "dial_code": "+263",
                "code": "ZW"
            }
        ],
        phoneNumberPre: "",
        country: "",
        post_code_wrong: false,
        phone_number_wrong: false,
        countryName: countryList().getData()
    };

    componentDidMount() {

        console.log(this.state.phoneNumPre[2]);
        // previous phone
        if (this.props.phoneNumberPre !== "") {
            this.setState({phoneNumberPre: this.props.phoneNumberPre});
        } else {
            this.setState({phoneNumberPre: ""});
        }
        // previous country
        if (this.props.country !== "") {
            this.setState({country: this.props.country});
        } else {
            this.setState({country: ""});
        }
    }

    validator = () => {
        let phoneNumber = document.getElementById("phone_number");
        let isValid = true;
        // if already get error for previous operation
        if (
            this.state.phone_number_wrong === true ||
            this.state.post_code_wrong === true
        ) {
            isValid = false;
            return isValid;
        }
        // first time try to submit form
        else {
            // phone number validate
            if (phoneNumber.value === "" && phoneNumber.required) {
                phoneNumber.style.boxShadow = "0px 2px 0px 0px red";
                this.setState({phone_number_wrong: true});
                isValid = false;
                return isValid;
            }
            if (phoneNumber.value !== "") {
                try {
                    let match = phoneNumber.value.match(/[0-9]/g);
                    let input = phoneNumber.value;
                    if (match.length !== input.length) {
                        phoneNumber.style.boxShadow = "0px 2px 0px 0px red";
                        this.setState({phone_number_wrong: true});
                        isValid = false;
                        return isValid;
                    }
                } catch (e) {
                    phoneNumber.style.boxShadow = "0px 2px 0px 0px red";
                    this.setState({phone_number_wrong: true});
                    isValid = false;
                    return isValid;
                }
            }
            // post code validate
            let postCode = document.getElementById("post_code");
            isValid = true;
            if (postCode.value === "" && postCode.required) {
                postCode.style.boxShadow = "0px 2px 0px 0px red";
                this.setState({post_code_wrong: true});
                isValid = false;
                return isValid;
            }
            if (postCode.value !== "") {
                try {
                    let match = postCode.value.match(/[0-9]/g);
                    let input = postCode.value;
                    if (match.length !== input.length) {
                        postCode.style.boxShadow = "0px 2px 0px 0px red";
                        this.setState({post_code_wrong: true});
                        isValid = false;
                        return isValid;
                    }
                } catch (e) {
                    postCode.style.boxShadow = "0px 2px 0px 0px red";
                    this.setState({post_code_wrong: true});
                    isValid = false;
                    return isValid;
                }
            }
            return isValid;
        }
    };

    //  when change the input of
    //   phone number field
    //   post code field
    //   will call this function
    handleChange = e => {
        let state = {};
        let stateName = e.target.id + "_wrong";
        state[stateName] = false;
        e.target.style.boxShadow = "0px 2px 0px 0px rgba(70,130,180,1)";
        this.setState(state);
    };

    // store the info of this page to the pages/NewUserProfilePage
    storeInfo() {
        const phoneNumberPre = document.getElementById("phone_pre").value;
        const phoneNumber = document.getElementById("phone_number").value;
        const country = document.getElementById("country").value;
        const postcode = document.getElementById("post_code").value;
        this.props.onChangeState("phoneNumberPre", phoneNumberPre);
        this.props.onChangeState("phoneNumber", phoneNumber);
        this.props.onChangeState("country", country);
        this.props.onChangeState("postcode", postcode);
    }

    handleClickNext = () => {
        const isValid = this.validator();
        if (isValid === true) {
            this.storeInfo();
            this.props.onHandleNextPage("page_4");
            this.props.onHandleProgress("75%");
        }
    };

    handleClickPre = () => {
        this.storeInfo();
        this.props.onHandleNextPage("page_2");
        this.props.onHandleProgress("25%");
    };

    render() {
        return (
            <React.Fragment>
                <div className="next-page-animation">
                    {/* phone number */}
                    <div className="form-row">
                        <div className="form-group col-3 col-lg-4"/>
                        <div
                            className="form-group col-6 col-lg-4"
                            style={{
                                color: "#686369",
                                fontSize: "23px",
                                textAlign: "center"
                            }}
                        >
                            <label htmlFor="first_name">Your phone number?</label>
                        </div>
                        <div className="form-group col-3 col-lg-4"/>
                    </div>

                    {/* input for phone*/}
                    <div className="form-row">
                        <div className="form-group col-3 col-lg-4"/>
                        <div
                            className="form-group col-6 col-lg-4"
                            style={{
                                width: "100%",
                                margin: "auto",
                                textAlign: "center"
                            }}
                        >
                            <div className="form-row">
                                <div className="form-group col-lg-1"/>
                                <div className="form-group col-4 col-lg-3">
                                    <select
                                        value={this.state.phoneNumberPre}
                                        id="phone_pre"
                                        className="form-control"
                                        style={{
                                            boxShadow: "0px 2px 0px 0px rgba(70,130,180,1)",
                                            boxSizing: "border-box !important",
                                            outline: "none !important",
                                            color: "#525252",
                                            padding: "3px",
                                            textAlign: "center",
                                            maxWidth: "100%",
                                            minWidth: "100%",
                                            minHeight: "100%",
                                            textOverflow: "ellipsis",
                                            margin: "auto auto",
                                            background: "transparent !important",
                                            border: "none",
                                            fontSize: "20px",
                                            paddingLeft: "0",
                                            paddingRight: "0",
                                            textAlignLast: "center"
                                        }}
                                        required
                                        onChange={e => {
                                            this.setState({phoneNumberPre: e.target.value});
                                        }}
                                    >
                                        {this.state.phoneNumPre.length === 0
                                            ? null
                                            : this.state.phoneNumPre.map(phoneNum => {
                                                return (
                                                    <option key={phoneNum.code} value={phoneNum.dial_code}>
                                                        {phoneNum.dial_code}
                                                    </option>
                                                );
                                            })}
                                    </select>
                                </div>

                                <div className="form-group col-8 col-lg-8">
                                    <input
                                        type="text"
                                        id="phone_number"
                                        style={{
                                            boxShadow: "0px 2px 0px 0px rgba(70,130,180,1)",
                                            boxSizing: "border-box !important",
                                            outline: "none !important",
                                            color: "#525252",
                                            padding: "3px",
                                            textAlign: "center",
                                            maxWidth: "80%",
                                            minWidth: "80%",
                                            minHeight: "100%",
                                            textOverflow: "ellipsis",
                                            margin: "auto auto",
                                            background: "transparent !important",
                                            border: "none",
                                            fontSize: "20px",
                                            paddingLeft: "0",
                                            paddingRight: "0"
                                        }}
                                        required
                                        onChange={this.handleChange}
                                        defaultValue={this.props.phoneNumber}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-3 col-lg-4"/>
                    </div>
                    {/* if wrong */}
                    {this.state.phone_number_wrong ? (
                        <div className="form-row">
                            <div className="form-group col-3 col-lg-4"/>
                            <div
                                className="form-group col-6 col-lg-4"
                                style={{
                                    color: "red",
                                    textAlign: "center",
                                    fontSize: " 1rem "
                                }}
                            >
                                Please fill the correct phone number
                            </div>
                            <div className="form-group col-3 col-lg-4"/>
                        </div>
                    ) : (
                        ""
                    )}
                    <br/>
                    {/* your country */}
                    <div className="form-row">
                        <div className="form-group col-3 col-lg-4"/>
                        <div
                            className="form-group col-6 col-lg-4"
                            style={{
                                color: "#686369",
                                fontSize: "23px",
                                textAlign: "center"
                            }}
                        >
                            <label htmlFor="country">Your country?</label>
                        </div>
                        <div className="form-group col-3 col-lg-4"/>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-3 col-lg-4"/>
                        <div
                            className="form-group col-6 col-lg-4"
                            style={{
                                width: "100%",
                                margin: "auto",
                                textAlign: "center"
                            }}
                        >
                            <select
                                id="country"
                                className="form-control"
                                value={this.state.country}
                                onChange={this.handleChange.bind(this)}
                                style={{
                                    boxShadow: "0px 2px 0px 0px rgba(70,130,180,1)",
                                    boxSizing: "border-box !important",
                                    outline: "none !important",
                                    color: "#525252",
                                    padding: "3px",
                                    alignContent: "center",
                                    maxWidth: "80%",
                                    minWidth: "80%",
                                    minHeight: "100%",
                                    textOverflow: "ellipsis",
                                    margin: "auto auto",
                                    background: "transparent !important",
                                    border: "none",
                                    fontSize: "20px",
                                    textAlign: "center",
                                    textAlignLast: "center"
                                }}
                                required
                                onChange={e => {
                                    this.setState({country: e.target.value});
                                }}
                                placeholder="Select your country"
                            >
                                {this.state.countryName.length === 0
                                    ? null
                                    : this.state.countryName.map(country => {
                                        return (
                                            <option key={country.value} value={country.label}>
                                                {country.label}
                                            </option>
                                        );
                                    })}
                            </select>
                        </div>
                        <div className="form-group col-3 col-lg-4"/>
                    </div>

                    <br/>
                    {/* your country */}
                    <div className="form-row">
                        <div className="form-group col-3 col-lg-4"/>
                        <div
                            className="form-group col-6 col-lg-4"
                            style={{
                                color: "#686369",
                                fontSize: "23px",
                                textAlign: "center"
                            }}
                        >
                            <label htmlFor="post_code">Your postcode?</label>
                        </div>
                        <div className="form-group col-3 col-lg-4"/>
                    </div>
                    {/* inout for post code */}
                    <div className="form-row">
                        <div className="form-group col-3 col-lg-4"/>
                        <div
                            className="form-group col-6 col-lg-4"
                            style={{
                                width: "100%",
                                margin: "auto",
                                textAlign: "center"
                            }}
                        >
                            <input
                                type="text"
                                id="post_code"
                                style={{
                                    boxShadow: "0px 2px 0px 0px rgba(70,130,180,1)",
                                    boxSizing: "border-box !important",
                                    outline: "none !important",
                                    color: "#525252",
                                    padding: "3px",
                                    textAlign: "center",
                                    maxWidth: "80%",
                                    minWidth: "80%",
                                    minHeight: "100%",
                                    textOverflow: "ellipsis",
                                    margin: "auto auto",
                                    background: "transparent !important",
                                    border: "none",
                                    fontSize: "20px"
                                }}
                                required
                                onChange={this.handleChange}
                                defaultValue={this.props.postcode}
                            />
                            {/* if wrong */}
                            {this.state.post_code_wrong ? (
                                <div style={{color: "red"}}>
                                    Please fill the correct post code
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="form-group col-3 col-lg-4"/>
                    </div>
                    <br/>
                    {/* next btn */}
                    <div className="form-row">
                        <div className="form-group col-4"/>
                        <div className="form-group col-4">
                            <div className="form-row">
                                <div
                                    className="form-group col-12 col-lg-6"
                                    style={{textAlign: "center"}}
                                >
                  <span onClick={this.handleClickPre}>
                    <SmallEllipseBtn
                        text="Previous"
                        btnColor="rgba(0, 166, 255, 1)"
                        paddingLeft="20px"
                        paddingRight="20px"
                    />
                  </span>
                                </div>
                                <div
                                    className="form-group col-12 col-lg-6"
                                    style={{textAlign: "center"}}
                                >
                  <span onClick={this.handleClickNext}>
                    <SmallEllipseBtn
                        text="Next"
                        btnColor="rgba(0, 166, 255, 1)"
                        paddingLeft="35px"
                        paddingRight="35px"
                    />
                  </span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-4"/>
                    </div>

                    {/* end */}
                </div>
            </React.Fragment>
        );
    }
}

export default ThirdPage;
