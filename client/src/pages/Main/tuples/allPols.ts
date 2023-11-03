import { shuffle } from '@Utils';

const allPols = [    
{
    id: "A000370",
    member_id: "A000370",
    first_name: "Alma",
    middle_name: "",
    last_name: "Adams",
    twitter_account: "RepAdams",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NC",
            fec_candidate_id: "H4NC12100",
            district: "12",
            ocd_id: "ocd-division/country:us/state:nc/cd:12",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 89.83,
            votes_against_party_pct: 1.69
        }
    ]
},
{
    id: "A000055",
    member_id: "A000055",
    first_name: "Robert",
    middle_name: "B.",
    last_name: "Aderholt",
    twitter_account: "Robert_Aderholt",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "AL",
            fec_candidate_id: "H6AL04098",
            district: "4",
            ocd_id: "ocd-division/country:us/state:al/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 2.78,
            votes_with_party_pct: 88.51,
            votes_against_party_pct: 2.87
        }
    ]
},
{
    id: "A000371",
    member_id: "A000371",
    first_name: "Pete",
    middle_name: null,
    last_name: "Aguilar",
    twitter_account: "reppeteaguilar",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H2CA31125",
            district: "33",
            ocd_id: "ocd-division/country:us/state:ca/cd:33",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 90.5,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "A000379",
    member_id: "A000379",
    first_name: "Mark",
    middle_name: null,
    last_name: "Alford",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MO",
            fec_candidate_id: "H2MO04207",
            district: "4",
            ocd_id: "ocd-division/country:us/state:mo/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 90.5,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "A000372",
    member_id: "A000372",
    first_name: "Rick",
    middle_name: null,
    last_name: "Allen",
    twitter_account: "reprickallen",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "GA",
            fec_candidate_id: "H2GA12121",
            district: "12",
            ocd_id: "ocd-division/country:us/state:ga/cd:12",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 91.06,
            votes_against_party_pct: 0.56
        }
    ]
},
{
    id: "A000376",
    member_id: "A000376",
    first_name: "Colin",
    middle_name: null,
    last_name: "Allred",
    twitter_account: "RepColinAllred",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H8TX32098",
            district: "32",
            ocd_id: "ocd-division/country:us/state:tx/cd:32",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 79.21,
            votes_against_party_pct: 12.36
        }
    ]
},
{
    id: "A000369",
    member_id: "A000369",
    first_name: "Mark",
    middle_name: null,
    last_name: "Amodei",
    twitter_account: "MarkAmodeiNV2",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NV",
            fec_candidate_id: "H2NV02395",
            district: "2",
            ocd_id: "ocd-division/country:us/state:nv/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 90.5,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "A000377",
    member_id: "A000377",
    first_name: "Kelly",
    middle_name: null,
    last_name: "Armstrong",
    twitter_account: "RepArmstrongND",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "ND",
            fec_candidate_id: "H8ND00096",
            district: "At-Large",
            ocd_id: "ocd-division/country:us/state:nd/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 90.45,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "A000375",
    member_id: "A000375",
    first_name: "Jodey",
    middle_name: null,
    last_name: "Arrington",
    twitter_account: "RepArrington",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H6TX19099",
            district: "19",
            ocd_id: "ocd-division/country:us/state:tx/cd:19",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 3.89,
            votes_with_party_pct: 89.53,
            votes_against_party_pct: 1.74
        }
    ]
},
{
    id: "A000148",
    member_id: "A000148",
    first_name: "Jake",
    middle_name: null,
    last_name: "Auchincloss",
    twitter_account: "RepAuchincloss",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MA",
            fec_candidate_id: "H0MA04192",
            district: "4",
            ocd_id: "ocd-division/country:us/state:ma/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 91.06,
            votes_against_party_pct: 0.56
        }
    ]
},
{
    id: "B001291",
    member_id: "B001291",
    first_name: "Brian",
    middle_name: null,
    last_name: "Babin",
    twitter_account: "RepBrianBabin",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H6TX02079",
            district: "36",
            ocd_id: "ocd-division/country:us/state:tx/cd:36",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 89.27,
            votes_against_party_pct: 2.26
        }
    ]
},
{
    id: "B001298",
    member_id: "B001298",
    first_name: "Don",
    middle_name: null,
    last_name: "Bacon",
    twitter_account: "repdonbacon",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NE",
            fec_candidate_id: "H6NE02125",
            district: "2",
            ocd_id: "ocd-division/country:us/state:ne/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 89.83,
            votes_against_party_pct: 1.69
        }
    ]
},
{
    id: "B001307",
    member_id: "B001307",
    first_name: "James",
    middle_name: null,
    last_name: "Baird",
    twitter_account: "RepJimBaird",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IN",
            fec_candidate_id: "H8IN04199",
            district: "4",
            ocd_id: "ocd-division/country:us/state:in/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 91.01,
            votes_against_party_pct: 0.56
        }
    ]
},
{
    id: "B001306",
    member_id: "B001306",
    first_name: "Troy",
    middle_name: null,
    last_name: "Balderson",
    twitter_account: "RepBalderson",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "OH",
            fec_candidate_id: "H8OH12180",
            district: "12",
            ocd_id: "ocd-division/country:us/state:oh/cd:12",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 90.5,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "B001318",
    member_id: "B001318",
    first_name: "Becca",
    middle_name: null,
    last_name: "Balint",
    twitter_account: "RepBeccaB",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "VT",
            fec_candidate_id: "H2VT01076",
            district: "At-Large",
            ocd_id: "ocd-division/country:us/state:vt/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 89.27,
            votes_against_party_pct: 2.26
        }
    ]
},
{
    id: "B001299",
    member_id: "B001299",
    first_name: "Jim",
    middle_name: null,
    last_name: "Banks",
    twitter_account: "RepJimBanks",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IN",
            fec_candidate_id: "H6IN03229",
            district: "3",
            ocd_id: "ocd-division/country:us/state:in/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 88.7,
            votes_against_party_pct: 2.82
        }
    ]
},
{
    id: "B001282",
    member_id: "B001282",
    first_name: "Andy",
    middle_name: null,
    last_name: "Barr",
    twitter_account: "RepAndyBarr",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "KY",
            fec_candidate_id: "H0KY06104",
            district: "6",
            ocd_id: "ocd-division/country:us/state:ky/cd:6",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 91.01,
            votes_against_party_pct: 0.56
        }
    ]
},
{
    id: "B001300",
    member_id: "B001300",
    first_name: "Nanette",
    middle_name: null,
    last_name: "Barragán",
    twitter_account: "RepBarragan",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H6CA44103",
            district: "44",
            ocd_id: "ocd-division/country:us/state:ca/cd:44",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 88.7,
            votes_against_party_pct: 2.82
        }
    ]
},
{
    id: "B001314",
    member_id: "B001314",
    first_name: "Aaron",
    middle_name: null,
    last_name: "Bean",
    twitter_account: "RepAaronBean",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H2FL04211",
            district: "4",
            ocd_id: "ocd-division/country:us/state:fl/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.33,
            votes_against_party_pct: 2.25
        }
    ]
},
{
    id: "B001281",
    member_id: "B001281",
    first_name: "Joyce",
    middle_name: null,
    last_name: "Beatty",
    twitter_account: "RepBeatty",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "OH",
            fec_candidate_id: "H2OH03125",
            district: "3",
            ocd_id: "ocd-division/country:us/state:oh/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 89.2,
            votes_against_party_pct: 2.27
        }
    ]
},
{
    id: "B000668",
    member_id: "B000668",
    first_name: "Cliff",
    middle_name: null,
    last_name: "Bentz",
    twitter_account: "RepBentz",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "OR",
            fec_candidate_id: "H0OR02127",
            district: "2",
            ocd_id: "ocd-division/country:us/state:or/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 90.5,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "B001287",
    member_id: "B001287",
    first_name: "Ami",
    middle_name: null,
    last_name: "Bera",
    twitter_account: "RepBera",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H0CA03078",
            district: "6",
            ocd_id: "ocd-division/country:us/state:ca/cd:6",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "B001301",
    member_id: "B001301",
    first_name: "Jack",
    middle_name: null,
    last_name: "Bergman",
    twitter_account: "RepJackBergman",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MI",
            fec_candidate_id: "H6MI01226",
            district: "1",
            ocd_id: "ocd-division/country:us/state:mi/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 2.22,
            votes_with_party_pct: 90.29,
            votes_against_party_pct: 1.14
        }
    ]
},
{
    id: "B001292",
    member_id: "B001292",
    first_name: "Donald",
    middle_name: null,
    last_name: "Beyer",
    twitter_account: "RepDonBeyer",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "VA",
            fec_candidate_id: "H4VA08224",
            district: "8",
            ocd_id: "ocd-division/country:us/state:va/cd:8",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.33,
            votes_against_party_pct: 2.25
        }
    ]
},
{
    id: "B000740",
    member_id: "B000740",
    first_name: "Stephanie",
    middle_name: null,
    last_name: "Bice",
    twitter_account: "RepBice",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "OK",
            fec_candidate_id: "H0OK05205",
            district: "5",
            ocd_id: "ocd-division/country:us/state:ok/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.39,
            votes_against_party_pct: 2.23
        }
    ]
},
{
    id: "B001302",
    member_id: "B001302",
    first_name: "Andy",
    middle_name: null,
    last_name: "Biggs",
    twitter_account: "RepAndyBiggsAZ",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "AZ",
            fec_candidate_id: "H6AZ05083",
            district: "5",
            ocd_id: "ocd-division/country:us/state:az/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 79.78,
            votes_against_party_pct: 12.36
        }
    ]
},
{
    id: "B001257",
    member_id: "B001257",
    first_name: "Gus",
    middle_name: null,
    last_name: "Bilirakis",
    twitter_account: "RepGusBilirakis",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H6FL09070",
            district: "12",
            ocd_id: "ocd-division/country:us/state:fl/cd:12",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 87.01,
            votes_against_party_pct: 4.52
        }
    ]
},
{
    id: "B000490",
    member_id: "B000490",
    first_name: "Sanford",
    middle_name: "D.",
    last_name: "Bishop",
    twitter_account: "SanfordBishop",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "GA",
            fec_candidate_id: "H2GA02031",
            district: "2",
            ocd_id: "ocd-division/country:us/state:ga/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 90.5,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "B001311",
    member_id: "B001311",
    first_name: "Dan",
    middle_name: null,
    last_name: "Bishop",
    twitter_account: "RepDanBishop",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NC",
            fec_candidate_id: "H0NC09187",
            district: "8",
            ocd_id: "ocd-division/country:us/state:nc/cd:8",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 84.09,
            votes_against_party_pct: 7.39
        }
    ]
},
{
    id: "B000574",
    member_id: "B000574",
    first_name: "Earl",
    middle_name: null,
    last_name: "Blumenauer",
    twitter_account: "BlumenauerMedia",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "OR",
            fec_candidate_id: "H6OR03064",
            district: "3",
            ocd_id: "ocd-division/country:us/state:or/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 12.78,
            votes_with_party_pct: 87.18,
            votes_against_party_pct: 3.21
        }
    ]
},
{
    id: "B001303",
    member_id: "B001303",
    first_name: "Lisa",
    middle_name: null,
    last_name: "Blunt Rochester",
    twitter_account: "RepLBR",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "DE",
            fec_candidate_id: "H6DE00206",
            district: "At-Large",
            ocd_id: "ocd-division/country:us/state:de/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.39,
            votes_against_party_pct: 2.23
        }
    ]
},
{
    id: "B000825",
    member_id: "B000825",
    first_name: "Lauren",
    middle_name: null,
    last_name: "Boebert",
    twitter_account: "RepBoebert",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CO",
            fec_candidate_id: "H0CO03165",
            district: "3",
            ocd_id: "ocd-division/country:us/state:co/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 5,
            votes_with_party_pct: 82.94,
            votes_against_party_pct: 9.41
        }
    ]
},
{
    id: "B001278",
    member_id: "B001278",
    first_name: "Suzanne",
    middle_name: null,
    last_name: "Bonamici",
    twitter_account: "RepBonamici",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "OR",
            fec_candidate_id: "H2OR01133",
            district: "1",
            ocd_id: "ocd-division/country:us/state:or/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 35,
            votes_with_party_pct: 81.03,
            votes_against_party_pct: 6.03
        }
    ]
},
{
    id: "B001295",
    member_id: "B001295",
    first_name: "Mike",
    middle_name: null,
    last_name: "Bost",
    twitter_account: "RepBost",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IL",
            fec_candidate_id: "H4IL12060",
            district: "12",
            ocd_id: "ocd-division/country:us/state:il/cd:12",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 90.5,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "B001223",
    member_id: "B001223",
    first_name: "Jamaal",
    middle_name: null,
    last_name: "Bowman",
    twitter_account: "RepBowman",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NY",
            fec_candidate_id: "H0NY16143",
            district: "16",
            ocd_id: "ocd-division/country:us/state:ny/cd:16",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 84.36,
            votes_against_party_pct: 7.26
        }
    ]
},
{
    id: "B001296",
    member_id: "B001296",
    first_name: "Brendan",
    middle_name: null,
    last_name: "Boyle",
    twitter_account: "CongBoyle",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "PA",
            fec_candidate_id: "H4PA13199",
            district: "2",
            ocd_id: "ocd-division/country:us/state:pa/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 2.78,
            votes_with_party_pct: 90.23,
            votes_against_party_pct: 1.15
        }
    ]
},
{
    id: "B001317",
    member_id: "B001317",
    first_name: "Josh",
    middle_name: null,
    last_name: "Brecheen",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "OK",
            fec_candidate_id: "H2OK02315",
            district: "2",
            ocd_id: "ocd-division/country:us/state:ok/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 83.05,
            votes_against_party_pct: 8.47
        }
    ]
},
{
    id: "B001313",
    member_id: "B001313",
    first_name: "Shontel",
    middle_name: null,
    last_name: "Brown",
    twitter_account: "RepShontelBrown",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "OH",
            fec_candidate_id: "H2OH11169",
            district: "11",
            ocd_id: "ocd-division/country:us/state:oh/cd:11",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.39,
            votes_against_party_pct: 2.23
        }
    ]
},
{
    id: "B001285",
    member_id: "B001285",
    first_name: "Julia",
    middle_name: null,
    last_name: "Brownley",
    twitter_account: "RepBrownley",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H2CA00120",
            district: "26",
            ocd_id: "ocd-division/country:us/state:ca/cd:26",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "B001260",
    member_id: "B001260",
    first_name: "Vern",
    middle_name: null,
    last_name: "Buchanan",
    twitter_account: "VernBuchanan",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H6FL13148",
            district: "16",
            ocd_id: "ocd-division/country:us/state:fl/cd:16",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 7.22,
            votes_with_party_pct: 90.36,
            votes_against_party_pct: 0.6
        }
    ]
},
{
    id: "B001297",
    member_id: "B001297",
    first_name: "Ken",
    middle_name: null,
    last_name: "Buck",
    twitter_account: "RepKenBuck",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CO",
            fec_candidate_id: "S0CO00237",
            district: "4",
            ocd_id: "ocd-division/country:us/state:co/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 8.33,
            votes_with_party_pct: 87.8,
            votes_against_party_pct: 6.1
        }
    ]
},
{
    id: "B001275",
    member_id: "B001275",
    first_name: "Larry",
    middle_name: null,
    last_name: "Bucshon",
    twitter_account: "RepLarryBucshon",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IN",
            fec_candidate_id: "H0IN08114",
            district: "8",
            ocd_id: "ocd-division/country:us/state:in/cd:8",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 11.11,
            votes_with_party_pct: 89.31,
            votes_against_party_pct: 1.26
        }
    ]
},
{
    id: "B001315",
    member_id: "B001315",
    first_name: "Nikki",
    middle_name: null,
    last_name: "Budzinski",
    twitter_account: "RepNikkiB",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IL",
            fec_candidate_id: "H2IL13153",
            district: "13",
            ocd_id: "ocd-division/country:us/state:il/cd:13",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 84.92,
            votes_against_party_pct: 6.7
        }
    ]
},
{
    id: "B001309",
    member_id: "B001309",
    first_name: "Tim",
    middle_name: null,
    last_name: "Burchett",
    twitter_account: "RepTimBurchett",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TN",
            fec_candidate_id: "H8TN02119",
            district: "2",
            ocd_id: "ocd-division/country:us/state:tn/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 84.36,
            votes_against_party_pct: 7.26
        }
    ]
},
{
    id: "B001248",
    member_id: "B001248",
    first_name: "Michael",
    middle_name: "C.",
    last_name: "Burgess",
    twitter_account: "MichaelCBurgess",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H2TX26093",
            district: "26",
            ocd_id: "ocd-division/country:us/state:tx/cd:26",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 87.08,
            votes_against_party_pct: 4.49
        }
    ]
},
{
    id: "B001316",
    member_id: "B001316",
    first_name: "Eric",
    middle_name: null,
    last_name: "Burlison",
    twitter_account: "RepEricBurlison",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MO",
            fec_candidate_id: "H2MO07143",
            district: "7",
            ocd_id: "ocd-division/country:us/state:mo/cd:7",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 83.71,
            votes_against_party_pct: 7.87
        }
    ]
},
{
    id: "B001224",
    member_id: "B001224",
    first_name: "Cori",
    middle_name: null,
    last_name: "Bush",
    twitter_account: "RepCori",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MO",
            fec_candidate_id: "H8MO01143",
            district: "1",
            ocd_id: "ocd-division/country:us/state:mo/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 85.96,
            votes_against_party_pct: 5.62
        }
    ]
},
{
    id: "C000059",
    member_id: "C000059",
    first_name: "Ken",
    middle_name: null,
    last_name: "Calvert",
    twitter_account: "KenCalvert",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H2CA37023",
            district: "41",
            ocd_id: "ocd-division/country:us/state:ca/cd:41",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "C001039",
    member_id: "C001039",
    first_name: "Kat",
    middle_name: null,
    last_name: "Cammack",
    twitter_account: "RepKatCammack",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H0FL03175",
            district: "3",
            ocd_id: "ocd-division/country:us/state:fl/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 86.52,
            votes_against_party_pct: 5.06
        }
    ]
},
{
    id: "C001134",
    member_id: "C001134",
    first_name: "Yadira",
    middle_name: null,
    last_name: "Caraveo",
    twitter_account: "RepCaraveoMD",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CO",
            fec_candidate_id: "H2CO08020",
            district: "8",
            ocd_id: "ocd-division/country:us/state:co/cd:8",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 80.45,
            votes_against_party_pct: 11.17
        }
    ]
},
{
    id: "C001112",
    member_id: "C001112",
    first_name: "Salud",
    middle_name: null,
    last_name: "Carbajal",
    twitter_account: "RepCarbajal",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H6CA24303",
            district: "24",
            ocd_id: "ocd-division/country:us/state:ca/cd:24",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 91.62,
            votes_against_party_pct: 0
        }
    ]
},
{
    id: "C001097",
    member_id: "C001097",
    first_name: "Tony",
    middle_name: null,
    last_name: "Cárdenas",
    twitter_account: "RepCardenas",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H2CA28113",
            district: "29",
            ocd_id: "ocd-division/country:us/state:ca/cd:29",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 88.76,
            votes_against_party_pct: 2.81
        }
    ]
},
{
    id: "C001126",
    member_id: "C001126",
    first_name: "Mike",
    middle_name: null,
    last_name: "Carey",
    twitter_account: "RepMikeCarey",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "OH",
            fec_candidate_id: "H2OH15228",
            district: "15",
            ocd_id: "ocd-division/country:us/state:oh/cd:15",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 90.45,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "C001054",
    member_id: "C001054",
    first_name: "Jerry",
    middle_name: null,
    last_name: "Carl",
    twitter_account: "RepJerryCarl",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "AL",
            fec_candidate_id: "H0AL01055",
            district: "1",
            ocd_id: "ocd-division/country:us/state:al/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "C001072",
    member_id: "C001072",
    first_name: "André",
    middle_name: "",
    last_name: "Carson",
    twitter_account: "RepAndreCarson",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IN",
            fec_candidate_id: "H8IN07184",
            district: "7",
            ocd_id: "ocd-division/country:us/state:in/cd:7",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.27,
            votes_against_party_pct: 3.35
        }
    ]
},
{
    id: "C001125",
    member_id: "C001125",
    first_name: "Troy",
    middle_name: null,
    last_name: "Carter",
    twitter_account: "RepTroyCarter",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "LA",
            fec_candidate_id: "H2LA02149",
            district: "2",
            ocd_id: "ocd-division/country:us/state:la/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.39,
            votes_against_party_pct: 2.23
        }
    ]
},
{
    id: "C001103",
    member_id: "C001103",
    first_name: "Buddy",
    middle_name: null,
    last_name: "Carter",
    twitter_account: "RepBuddyCarter",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "GA",
            fec_candidate_id: "H4GA01039",
            district: "1",
            ocd_id: "ocd-division/country:us/state:ga/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 90.45,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "C001051",
    member_id: "C001051",
    first_name: "John",
    middle_name: null,
    last_name: "Carter",
    twitter_account: "JudgeCarter",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H2TX31044",
            district: "31",
            ocd_id: "ocd-division/country:us/state:tx/cd:31",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 90.45,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "C001090",
    member_id: "C001090",
    first_name: "Matt",
    middle_name: null,
    last_name: "Cartwright",
    twitter_account: "RepCartwright",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "PA",
            fec_candidate_id: "H2PA17079",
            district: "8",
            ocd_id: "ocd-division/country:us/state:pa/cd:8",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.39,
            votes_against_party_pct: 2.23
        }
    ]
},
{
    id: "C001131",
    member_id: "C001131",
    first_name: "Greg",
    middle_name: null,
    last_name: "Casar",
    twitter_account: "RepCasar",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H2TX35144",
            district: "35",
            ocd_id: "ocd-division/country:us/state:tx/cd:35",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 85.39,
            votes_against_party_pct: 6.18
        }
    ]
},
{
    id: "C001055",
    member_id: "C001055",
    first_name: "Ed",
    middle_name: null,
    last_name: "Case",
    twitter_account: "RepEdCase",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "HI",
            fec_candidate_id: "H2HI02128",
            district: "1",
            ocd_id: "ocd-division/country:us/state:hi/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 86.52,
            votes_against_party_pct: 5.06
        }
    ]
},
{
    id: "C001117",
    member_id: "C001117",
    first_name: "Sean",
    middle_name: null,
    last_name: "Casten",
    twitter_account: "RepCasten",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IL",
            fec_candidate_id: "H8IL06139",
            district: "6",
            ocd_id: "ocd-division/country:us/state:il/cd:6",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 86.36,
            votes_against_party_pct: 5.11
        }
    ]
},
{
    id: "C001066",
    member_id: "C001066",
    first_name: "Kathy",
    middle_name: null,
    last_name: "Castor",
    twitter_account: "USRepKCastor",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H6FL11126",
            district: "14",
            ocd_id: "ocd-division/country:us/state:fl/cd:14",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 6.67,
            votes_with_party_pct: 91.02,
            votes_against_party_pct: 0
        }
    ]
},
{
    id: "C001091",
    member_id: "C001091",
    first_name: "Joaquín",
    middle_name: null,
    last_name: "Castro",
    twitter_account: "JoaquinCastrotx",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H2TX35011",
            district: "20",
            ocd_id: "ocd-division/country:us/state:tx/cd:20",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 33.89,
            votes_with_party_pct: 86.44,
            votes_against_party_pct: 0.85
        }
    ]
},
{
    id: "C001135",
    member_id: "C001135",
    first_name: "Lori",
    middle_name: null,
    last_name: "Chavez-DeRemer",
    twitter_account: "RepLCD",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "OR",
            fec_candidate_id: "H2OR05209",
            district: "5",
            ocd_id: "ocd-division/country:us/state:or/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.39,
            votes_against_party_pct: 2.23
        }
    ]
},
{
    id: "C001127",
    member_id: "C001127",
    first_name: "Sheila",
    middle_name: null,
    last_name: "Cherfilus-McCormick",
    twitter_account: "CongresswomanSC",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H8FL20032",
            district: "20",
            ocd_id: "ocd-division/country:us/state:fl/cd:20",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 2.78,
            votes_with_party_pct: 89.08,
            votes_against_party_pct: 2.3
        }
    ]
},
{
    id: "C001080",
    member_id: "C001080",
    first_name: "Judy",
    middle_name: null,
    last_name: "Chu",
    twitter_account: "RepJudyChu",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H0CA32101",
            district: "28",
            ocd_id: "ocd-division/country:us/state:ca/cd:28",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 88.64,
            votes_against_party_pct: 2.84
        }
    ]
},
{
    id: "C001084",
    member_id: "C001084",
    first_name: "David",
    middle_name: null,
    last_name: "Cicilline",
    twitter_account: "RepCicilline",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "RI",
            fec_candidate_id: "H0RI01073",
            district: "1",
            ocd_id: "ocd-division/country:us/state:ri/cd:1",
            start_date: "2023-01-03",
            end_date: "2023-06-01",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.33,
            votes_against_party_pct: 2.25
        }
    ]
},
{
    id: "C001133",
    member_id: "C001133",
    first_name: "Juan",
    middle_name: null,
    last_name: "Ciscomani",
    twitter_account: "RepCiscomani",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "AZ",
            fec_candidate_id: "H2AZ02360",
            district: "6",
            ocd_id: "ocd-division/country:us/state:az/cd:6",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 89.83,
            votes_against_party_pct: 1.69
        }
    ]
},
{
    id: "C001101",
    member_id: "C001101",
    first_name: "Katherine",
    middle_name: "",
    last_name: "Clark",
    twitter_account: "RepKClark",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MA",
            fec_candidate_id: "H4MA05084",
            district: "5",
            ocd_id: "ocd-division/country:us/state:ma/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 90.5,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "C001067",
    member_id: "C001067",
    first_name: "Yvette",
    middle_name: "D.",
    last_name: "Clarke",
    twitter_account: "RepYvetteClarke",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NY",
            fec_candidate_id: "H4NY11138",
            district: "9",
            ocd_id: "ocd-division/country:us/state:ny/cd:9",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 88.2,
            votes_against_party_pct: 3.37
        }
    ]
},
{
    id: "C001061",
    member_id: "C001061",
    first_name: "Emanuel",
    middle_name: null,
    last_name: "Cleaver",
    twitter_account: "RepCleaver",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MO",
            fec_candidate_id: "H4MO05234",
            district: "5",
            ocd_id: "ocd-division/country:us/state:mo/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 52.22,
            votes_with_party_pct: 81.18,
            votes_against_party_pct: 1.18
        }
    ]
},
{
    id: "C001118",
    member_id: "C001118",
    first_name: "Ben",
    middle_name: null,
    last_name: "Cline",
    twitter_account: "RepBenCline",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "VA",
            fec_candidate_id: "H8VA06104",
            district: "6",
            ocd_id: "ocd-division/country:us/state:va/cd:6",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 84.36,
            votes_against_party_pct: 7.26
        }
    ]
},
{
    id: "C001115",
    member_id: "C001115",
    first_name: "Michael",
    middle_name: null,
    last_name: "Cloud",
    twitter_account: "RepCloudTX",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H8TX27049",
            district: "27",
            ocd_id: "ocd-division/country:us/state:tx/cd:27",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 85.47,
            votes_against_party_pct: 6.15
        }
    ]
},
{
    id: "C000537",
    member_id: "C000537",
    first_name: "James",
    middle_name: "E.",
    last_name: "Clyburn",
    twitter_account: "WhipClyburn",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "SC",
            fec_candidate_id: "H2SC02042",
            district: "6",
            ocd_id: "ocd-division/country:us/state:sc/cd:6",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "C001116",
    member_id: "C001116",
    first_name: "Andrew",
    middle_name: null,
    last_name: "Clyde",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "GA",
            fec_candidate_id: "H0GA09246",
            district: "9",
            ocd_id: "ocd-division/country:us/state:ga/cd:9",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 85.47,
            votes_against_party_pct: 6.15
        }
    ]
},
{
    id: "C001068",
    member_id: "C001068",
    first_name: "Steve",
    middle_name: null,
    last_name: "Cohen",
    twitter_account: "RepCohen",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TN",
            fec_candidate_id: "H6TN09068",
            district: "9",
            ocd_id: "ocd-division/country:us/state:tn/cd:9",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 12.78,
            votes_with_party_pct: 89.1,
            votes_against_party_pct: 1.28
        }
    ]
},
{
    id: "C001053",
    member_id: "C001053",
    first_name: "Tom",
    middle_name: "",
    last_name: "Cole",
    twitter_account: "TomColeOK04",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "OK",
            fec_candidate_id: "H2OK04055",
            district: "4",
            ocd_id: "ocd-division/country:us/state:ok/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 90.45,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "C001129",
    member_id: "C001129",
    first_name: "Mike",
    middle_name: null,
    last_name: "Collins",
    twitter_account: "RepMikeCollins",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "GA",
            fec_candidate_id: "H4GA10071",
            district: "10",
            ocd_id: "ocd-division/country:us/state:ga/cd:10",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 86.03,
            votes_against_party_pct: 5.59
        }
    ]
},
{
    id: "C001108",
    member_id: "C001108",
    first_name: "James",
    middle_name: null,
    last_name: "Comer",
    twitter_account: "RepJamesComer",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "KY",
            fec_candidate_id: "H6KY01110",
            district: "1",
            ocd_id: "ocd-division/country:us/state:ky/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.83,
            votes_against_party_pct: 2.79
        }
    ]
},
{
    id: "C001078",
    member_id: "C001078",
    first_name: "Gerald",
    middle_name: "E.",
    last_name: "Connolly",
    twitter_account: "GerryConnolly",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "VA",
            fec_candidate_id: "H8VA11062",
            district: "11",
            ocd_id: "ocd-division/country:us/state:va/cd:11",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.27,
            votes_against_party_pct: 3.35
        }
    ]
},
{
    id: "C001110",
    member_id: "C001110",
    first_name: "J.",
    middle_name: "Luis",
    last_name: "Correa",
    twitter_account: "reploucorrea",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H6CA46116",
            district: "46",
            ocd_id: "ocd-division/country:us/state:ca/cd:46",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 86.03,
            votes_against_party_pct: 5.59
        }
    ]
},
{
    id: "C001059",
    member_id: "C001059",
    first_name: "Jim",
    middle_name: null,
    last_name: "Costa",
    twitter_account: "RepJimCosta",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H4CA20082",
            district: "21",
            ocd_id: "ocd-division/country:us/state:ca/cd:21",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 13.33,
            votes_with_party_pct: 76.77,
            votes_against_party_pct: 13.55
        }
    ]
},
{
    id: "C001069",
    member_id: "C001069",
    first_name: "Joe",
    middle_name: null,
    last_name: "Courtney",
    twitter_account: "RepJoeCourtney",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CT",
            fec_candidate_id: "H2CT02112",
            district: "2",
            ocd_id: "ocd-division/country:us/state:ct/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 88.76,
            votes_against_party_pct: 2.81
        }
    ]
},
{
    id: "C001119",
    member_id: "C001119",
    first_name: "Angie",
    middle_name: null,
    last_name: "Craig",
    twitter_account: "RepAngieCraig",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MN",
            fec_candidate_id: "H6MN02131",
            district: "2",
            ocd_id: "ocd-division/country:us/state:mn/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 74.86,
            votes_against_party_pct: 16.76
        }
    ]
},
{
    id: "C001132",
    member_id: "C001132",
    first_name: "Eli",
    middle_name: null,
    last_name: "Crane",
    twitter_account: "RepEliCrane",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "AZ",
            fec_candidate_id: "H2AZ01354",
            district: "2",
            ocd_id: "ocd-division/country:us/state:az/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 2.22,
            votes_with_party_pct: 81.14,
            votes_against_party_pct: 10.86
        }
    ]
},
{
    id: "C001087",
    member_id: "C001087",
    first_name: "Rick",
    middle_name: null,
    last_name: "Crawford",
    twitter_account: "RepRickCrawford",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "AR",
            fec_candidate_id: "H0AR01083",
            district: "1",
            ocd_id: "ocd-division/country:us/state:ar/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.89,
            votes_against_party_pct: 1.69
        }
    ]
},
{
    id: "C001120",
    member_id: "C001120",
    first_name: "Dan",
    middle_name: null,
    last_name: "Crenshaw",
    twitter_account: "RepDanCrenshaw",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H8TX02166",
            district: "2",
            ocd_id: "ocd-division/country:us/state:tx/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 4.44,
            votes_with_party_pct: 90.06,
            votes_against_party_pct: 1.17
        }
    ]
},
{
    id: "C001130",
    member_id: "C001130",
    first_name: "Jasmine",
    middle_name: null,
    last_name: "Crockett",
    twitter_account: "RepJasmine",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H2TX30178",
            district: "30",
            ocd_id: "ocd-division/country:us/state:tx/cd:30",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.27,
            votes_against_party_pct: 3.35
        }
    ]
},
{
    id: "C001121",
    member_id: "C001121",
    first_name: "Jason",
    middle_name: null,
    last_name: "Crow",
    twitter_account: "RepJasonCrow",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CO",
            fec_candidate_id: "H8CO06229",
            district: "6",
            ocd_id: "ocd-division/country:us/state:co/cd:6",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 91.62,
            votes_against_party_pct: 0
        }
    ]
},
{
    id: "C001063",
    member_id: "C001063",
    first_name: "Henry",
    middle_name: null,
    last_name: "Cuellar",
    twitter_account: "RepCuellar",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H2TX23082",
            district: "28",
            ocd_id: "ocd-division/country:us/state:tx/cd:28",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 8.33,
            votes_with_party_pct: 73.78,
            votes_against_party_pct: 17.07
        }
    ]
},
{
    id: "C001114",
    member_id: "C001114",
    first_name: "John",
    middle_name: null,
    last_name: "Curtis",
    twitter_account: "RepJohnCurtis",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "UT",
            fec_candidate_id: "H8UT03238",
            district: "3",
            ocd_id: "ocd-division/country:us/state:ut/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 90.5,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "D000632",
    member_id: "D000632",
    first_name: "Anthony",
    middle_name: null,
    last_name: "D'Esposito",
    twitter_account: "RepDesposito",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NY",
            fec_candidate_id: "H2NY04277",
            district: "4",
            ocd_id: "ocd-division/country:us/state:ny/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 87.64,
            votes_against_party_pct: 3.93
        }
    ]
},
{
    id: "D000629",
    member_id: "D000629",
    first_name: "Sharice",
    middle_name: null,
    last_name: "Davids",
    twitter_account: "RepDavids",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "KS",
            fec_candidate_id: "H8KS03155",
            district: "3",
            ocd_id: "ocd-division/country:us/state:ks/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 87.57,
            votes_against_party_pct: 3.95
        }
    ]
},
{
    id: "D000626",
    member_id: "D000626",
    first_name: "Warren",
    middle_name: null,
    last_name: "Davidson",
    twitter_account: "WarrenDavidson",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "OH",
            fec_candidate_id: "H6OH08315",
            district: "8",
            ocd_id: "ocd-division/country:us/state:oh/cd:8",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 85.47,
            votes_against_party_pct: 6.15
        }
    ]
},
{
    id: "D000230",
    member_id: "D000230",
    first_name: "Donald",
    middle_name: "G.",
    last_name: "Davis",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NC",
            fec_candidate_id: "H2NC02287",
            district: "1",
            ocd_id: "ocd-division/country:us/state:nc/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 71.91,
            votes_against_party_pct: 19.66
        }
    ]
},
{
    id: "D000096",
    member_id: "D000096",
    first_name: "Danny",
    middle_name: "K.",
    last_name: "Davis",
    twitter_account: "RepDannyDavis",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IL",
            fec_candidate_id: "H4IL07037",
            district: "7",
            ocd_id: "ocd-division/country:us/state:il/cd:7",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 6.67,
            votes_with_party_pct: 89.22,
            votes_against_party_pct: 1.8
        }
    ]
},
{
    id: "D000594",
    member_id: "D000594",
    first_name: "Mónica",
    middle_name: null,
    last_name: "De La Cruz",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H0TX15124",
            district: "15",
            ocd_id: "ocd-division/country:us/state:tx/cd:15",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 2.22,
            votes_with_party_pct: 90.29,
            votes_against_party_pct: 1.14
        }
    ]
},
{
    id: "D000631",
    member_id: "D000631",
    first_name: "Madeleine",
    middle_name: null,
    last_name: "Dean",
    twitter_account: "RepDean",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "PA",
            fec_candidate_id: "H8PA04116",
            district: "4",
            ocd_id: "ocd-division/country:us/state:pa/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 91.01,
            votes_against_party_pct: 0.56
        }
    ]
},
{
    id: "D000197",
    member_id: "D000197",
    first_name: "Diana",
    middle_name: null,
    last_name: "DeGette",
    twitter_account: "RepDianaDeGette",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CO",
            fec_candidate_id: "H6CO01141",
            district: "1",
            ocd_id: "ocd-division/country:us/state:co/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "D000216",
    member_id: "D000216",
    first_name: "Rosa",
    middle_name: null,
    last_name: "DeLauro",
    twitter_account: "RosaDeLauro",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CT",
            fec_candidate_id: "H0CT03072",
            district: "3",
            ocd_id: "ocd-division/country:us/state:ct/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 91.06,
            votes_against_party_pct: 0.56
        }
    ]
},
{
    id: "D000617",
    member_id: "D000617",
    first_name: "Suzan",
    middle_name: "K.",
    last_name: "DelBene",
    twitter_account: "RepDelBene",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "WA",
            fec_candidate_id: "H0WA08046",
            district: "1",
            ocd_id: "ocd-division/country:us/state:wa/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 91.06,
            votes_against_party_pct: 0.56
        }
    ]
},
{
    id: "D000530",
    member_id: "D000530",
    first_name: "Chris",
    middle_name: null,
    last_name: "Deluzio",
    twitter_account: "RepDeluzio",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "PA",
            fec_candidate_id: "H2PA17103",
            district: "17",
            ocd_id: "ocd-division/country:us/state:pa/cd:17",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 87.71,
            votes_against_party_pct: 3.91
        }
    ]
},
{
    id: "D000623",
    member_id: "D000623",
    first_name: "Mark",
    middle_name: null,
    last_name: "DeSaulnier",
    twitter_account: "RepDeSaulnier",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H0CA10073",
            district: "10",
            ocd_id: "ocd-division/country:us/state:ca/cd:10",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.33,
            votes_against_party_pct: 2.25
        }
    ]
},
{
    id: "D000616",
    member_id: "D000616",
    first_name: "Scott",
    middle_name: null,
    last_name: "DesJarlais",
    twitter_account: "DesJarlaisTN04",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TN",
            fec_candidate_id: "H0TN04195",
            district: "4",
            ocd_id: "ocd-division/country:us/state:tn/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 87.64,
            votes_against_party_pct: 3.93
        }
    ]
},
{
    id: "D000600",
    member_id: "D000600",
    first_name: "Mario",
    middle_name: null,
    last_name: "Diaz-Balart",
    twitter_account: "MarioDB",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H2FL25018",
            district: "26",
            ocd_id: "ocd-division/country:us/state:fl/cd:26",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 90.4,
            votes_against_party_pct: 1.13
        }
    ]
},
{
    id: "D000624",
    member_id: "D000624",
    first_name: "Debbie",
    middle_name: null,
    last_name: "Dingell",
    twitter_account: "RepDebDingell",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MI",
            fec_candidate_id: "H4MI12079",
            district: "6",
            ocd_id: "ocd-division/country:us/state:mi/cd:6",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 91.01,
            votes_against_party_pct: 0.56
        }
    ]
},
{
    id: "D000399",
    member_id: "D000399",
    first_name: "Lloyd",
    middle_name: null,
    last_name: "Doggett",
    twitter_account: "RepLloydDoggett",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H4TX10028",
            district: "37",
            ocd_id: "ocd-division/country:us/state:tx/cd:37",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 89.83,
            votes_against_party_pct: 1.69
        }
    ]
},
{
    id: "D000032",
    member_id: "D000032",
    first_name: "Byron",
    middle_name: "",
    last_name: "Donalds",
    twitter_account: "RepByronDonalds",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H0FL19205",
            district: "19",
            ocd_id: "ocd-division/country:us/state:fl/cd:19",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 85.96,
            votes_against_party_pct: 5.62
        }
    ]
},
{
    id: "D000633",
    member_id: "D000633",
    first_name: "John",
    middle_name: null,
    last_name: "Duarte",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H2CA13131",
            district: "13",
            ocd_id: "ocd-division/country:us/state:ca/cd:13",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 89.77,
            votes_against_party_pct: 1.7
        }
    ]
},
{
    id: "D000615",
    member_id: "D000615",
    first_name: "Jeffrey",
    middle_name: null,
    last_name: "Duncan",
    twitter_account: "RepJeffDuncan",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "SC",
            fec_candidate_id: "H0SC03077",
            district: "3",
            ocd_id: "ocd-division/country:us/state:sc/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 85.8,
            votes_against_party_pct: 5.68
        }
    ]
},
{
    id: "D000628",
    member_id: "D000628",
    first_name: "Neal",
    middle_name: null,
    last_name: "Dunn",
    twitter_account: "drnealdunnfl2",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H6FL02208",
            district: "2",
            ocd_id: "ocd-division/country:us/state:fl/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 90.45,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "E000246",
    member_id: "E000246",
    first_name: "Chuck",
    middle_name: null,
    last_name: "Edwards",
    twitter_account: "RepEdwards",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NC",
            fec_candidate_id: "H2NC14050",
            district: "11",
            ocd_id: "ocd-division/country:us/state:nc/cd:11",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 90.96,
            votes_against_party_pct: 0.56
        }
    ]
},
{
    id: "E000071",
    member_id: "E000071",
    first_name: "Jake",
    middle_name: null,
    last_name: "Ellzey",
    twitter_account: "RepEllzey",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H8TX06266",
            district: "6",
            ocd_id: "ocd-division/country:us/state:tx/cd:6",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 90.34,
            votes_against_party_pct: 1.14
        }
    ]
},
{
    id: "E000294",
    member_id: "E000294",
    first_name: "Tom",
    middle_name: null,
    last_name: "Emmer",
    twitter_account: "RepTomEmmer",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MN",
            fec_candidate_id: "H4MN06087",
            district: "6",
            ocd_id: "ocd-division/country:us/state:mn/cd:6",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 87.71,
            votes_against_party_pct: 3.91
        }
    ]
},
{
    id: "E000299",
    member_id: "E000299",
    first_name: "Veronica",
    middle_name: null,
    last_name: "Escobar",
    twitter_account: "RepEscobar",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H8TX16109",
            district: "16",
            ocd_id: "ocd-division/country:us/state:tx/cd:16",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "E000215",
    member_id: "E000215",
    first_name: "Anna",
    middle_name: "G.",
    last_name: "Eshoo",
    twitter_account: "RepAnnaEshoo",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H8CA12098",
            district: "16",
            ocd_id: "ocd-division/country:us/state:ca/cd:16",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 2.78,
            votes_with_party_pct: 89.66,
            votes_against_party_pct: 1.72
        }
    ]
},
{
    id: "E000297",
    member_id: "E000297",
    first_name: "Adriano",
    middle_name: null,
    last_name: "Espaillat",
    twitter_account: "RepEspaillat",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NY",
            fec_candidate_id: "H2NY13096",
            district: "13",
            ocd_id: "ocd-division/country:us/state:ny/cd:13",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.33,
            votes_against_party_pct: 2.25
        }
    ]
},
{
    id: "E000298",
    member_id: "E000298",
    first_name: "Ron",
    middle_name: null,
    last_name: "Estes",
    twitter_account: "RepRonEstes",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "KS",
            fec_candidate_id: "H8KS04112",
            district: "4",
            ocd_id: "ocd-division/country:us/state:ks/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 89.83,
            votes_against_party_pct: 1.69
        }
    ]
},
{
    id: "E000296",
    member_id: "E000296",
    first_name: "Dwight",
    middle_name: "",
    last_name: "Evans",
    twitter_account: "RepDwightEvans",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "PA",
            fec_candidate_id: "H6PA02171",
            district: "3",
            ocd_id: "ocd-division/country:us/state:pa/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.83,
            votes_against_party_pct: 2.79
        }
    ]
},
{
    id: "E000235",
    member_id: "E000235",
    first_name: "Mike",
    middle_name: null,
    last_name: "Ezell",
    twitter_account: "RepEzell",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MS",
            fec_candidate_id: "H2MS04258",
            district: "4",
            ocd_id: "ocd-division/country:us/state:ms/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "F000246",
    member_id: "F000246",
    first_name: "Pat",
    middle_name: null,
    last_name: "Fallon",
    twitter_account: "RepPatFallon",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H0TX04219",
            district: "4",
            ocd_id: "ocd-division/country:us/state:tx/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 87.15,
            votes_against_party_pct: 4.47
        }
    ]
},
{
    id: "F000446",
    member_id: "F000446",
    first_name: "Randy",
    middle_name: null,
    last_name: "Feenstra",
    twitter_account: "RepFeenstra",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IA",
            fec_candidate_id: "H0IA04145",
            district: "4",
            ocd_id: "ocd-division/country:us/state:ia/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 91.06,
            votes_against_party_pct: 0.56
        }
    ]
},
{
    id: "F000465",
    member_id: "F000465",
    first_name: "A.",
    middle_name: "Drew",
    last_name: "Ferguson",
    twitter_account: "RepDrewFerguson",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "GA",
            fec_candidate_id: "H6GA03113",
            district: "3",
            ocd_id: "ocd-division/country:us/state:ga/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 91.01,
            votes_against_party_pct: 0.56
        }
    ]
},
{
    id: "L000273",
    member_id: "L000273",
    first_name: "Teresa",
    middle_name: "Leger",
    last_name: "Fernandez",
    twitter_account: "RepTeresaLF",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NM",
            fec_candidate_id: "H0NM03102",
            district: "3",
            ocd_id: "ocd-division/country:us/state:nm/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 16.11,
            votes_with_party_pct: 87.33,
            votes_against_party_pct: 2.67
        }
    ]
},
{
    id: "F000475",
    member_id: "F000475",
    first_name: "Brad",
    middle_name: null,
    last_name: "Finstad",
    twitter_account: "RepFinstad",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MN",
            fec_candidate_id: "H2MN01223",
            district: "1",
            ocd_id: "ocd-division/country:us/state:mn/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 90.5,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "F000470",
    member_id: "F000470",
    first_name: "Michelle",
    middle_name: null,
    last_name: "Fischbach",
    twitter_account: "RepFischbach",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MN",
            fec_candidate_id: "H0MN07091",
            district: "7",
            ocd_id: "ocd-division/country:us/state:mn/cd:7",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "F000471",
    member_id: "F000471",
    first_name: "Scott",
    middle_name: null,
    last_name: "Fitzgerald",
    twitter_account: "RepFitzgerald",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "WI",
            fec_candidate_id: "H0WI05113",
            district: "5",
            ocd_id: "ocd-division/country:us/state:wi/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.27,
            votes_against_party_pct: 3.35
        }
    ]
},
{
    id: "F000466",
    member_id: "F000466",
    first_name: "Brian",
    middle_name: null,
    last_name: "Fitzpatrick",
    twitter_account: "repbrianfitz",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "PA",
            fec_candidate_id: "H6PA08277",
            district: "1",
            ocd_id: "ocd-division/country:us/state:pa/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 67.04,
            votes_against_party_pct: 24.58
        }
    ]
},
{
    id: "F000459",
    member_id: "F000459",
    first_name: "Chuck",
    middle_name: null,
    last_name: "Fleischmann",
    twitter_account: "RepChuck",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TN",
            fec_candidate_id: "H0TN03254",
            district: "3",
            ocd_id: "ocd-division/country:us/state:tn/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.39,
            votes_against_party_pct: 2.23
        }
    ]
},
{
    id: "F000468",
    member_id: "F000468",
    first_name: "Lizzie",
    middle_name: null,
    last_name: "Fletcher",
    twitter_account: "RepFletcher",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H8TX07140",
            district: "7",
            ocd_id: "ocd-division/country:us/state:tx/cd:7",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 71.51,
            votes_against_party_pct: 20.11
        }
    ]
},
{
    id: "F000474",
    member_id: "F000474",
    first_name: "Mike",
    middle_name: null,
    last_name: "Flood",
    twitter_account: "USRepMikeFlood",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NE",
            fec_candidate_id: "H2NE01118",
            district: "1",
            ocd_id: "ocd-division/country:us/state:ne/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 91.62,
            votes_against_party_pct: 0
        }
    ]
},
{
    id: "F000454",
    member_id: "F000454",
    first_name: "Bill",
    middle_name: null,
    last_name: "Foster",
    twitter_account: "RepBillFoster",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IL",
            fec_candidate_id: "H8IL14067",
            district: "11",
            ocd_id: "ocd-division/country:us/state:il/cd:11",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.83,
            votes_against_party_pct: 2.79
        }
    ]
},
{
    id: "F000477",
    member_id: "F000477",
    first_name: "Valerie",
    middle_name: null,
    last_name: "Foushee",
    twitter_account: "ValerieFoushee",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NC",
            fec_candidate_id: "H2NC06114",
            district: "4",
            ocd_id: "ocd-division/country:us/state:nc/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 2.22,
            votes_with_party_pct: 89.71,
            votes_against_party_pct: 1.71
        }
    ]
},
{
    id: "F000450",
    member_id: "F000450",
    first_name: "Virginia",
    middle_name: null,
    last_name: "Foxx",
    twitter_account: "VirginiaFoxx",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NC",
            fec_candidate_id: "H4NC05146",
            district: "5",
            ocd_id: "ocd-division/country:us/state:nc/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.33,
            votes_against_party_pct: 2.25
        }
    ]
},
{
    id: "F000462",
    member_id: "F000462",
    first_name: "Lois",
    middle_name: null,
    last_name: "Frankel",
    twitter_account: "RepLoisFrankel",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H2FL14053",
            district: "22",
            ocd_id: "ocd-division/country:us/state:fl/cd:22",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 90.45,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "F000472",
    member_id: "F000472",
    first_name: "Scott",
    middle_name: null,
    last_name: "Franklin",
    twitter_account: "RepFranklin",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H0FL15104",
            district: "18",
            ocd_id: "ocd-division/country:us/state:fl/cd:18",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.83,
            votes_against_party_pct: 2.79
        }
    ]
},
{
    id: "F000476",
    member_id: "F000476",
    first_name: "Maxwell",
    middle_name: null,
    last_name: "Frost",
    twitter_account: "RepMaxwellFrost",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H2FL10259",
            district: "10",
            ocd_id: "ocd-division/country:us/state:fl/cd:10",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 87.15,
            votes_against_party_pct: 4.47
        }
    ]
},
{
    id: "F000478",
    member_id: "F000478",
    first_name: "Russell",
    middle_name: null,
    last_name: "Fry",
    twitter_account: "RepRussellFry",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "SC",
            fec_candidate_id: "H2SC07280",
            district: "7",
            ocd_id: "ocd-division/country:us/state:sc/cd:7",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 86.59,
            votes_against_party_pct: 5.03
        }
    ]
},
{
    id: "F000469",
    member_id: "F000469",
    first_name: "Russ",
    middle_name: "",
    last_name: "Fulcher",
    twitter_account: "RepRussFulcher",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "ID",
            fec_candidate_id: "H8ID01124",
            district: "1",
            ocd_id: "ocd-division/country:us/state:id/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 87.64,
            votes_against_party_pct: 3.93
        }
    ]
},
{
    id: "G000578",
    member_id: "G000578",
    first_name: "Matt",
    middle_name: null,
    last_name: "Gaetz",
    twitter_account: "RepMattGaetz",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H6FL01119",
            district: "1",
            ocd_id: "ocd-division/country:us/state:fl/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 82.12,
            votes_against_party_pct: 10.61
        }
    ]
},
{
    id: "G000579",
    member_id: "G000579",
    first_name: "Mike",
    middle_name: null,
    last_name: "Gallagher",
    twitter_account: "RepGallagher",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "WI",
            fec_candidate_id: "H6WI08155",
            district: "8",
            ocd_id: "ocd-division/country:us/state:wi/cd:8",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.89,
            votes_against_party_pct: 1.69
        }
    ]
},
{
    id: "G000574",
    member_id: "G000574",
    first_name: "Ruben",
    middle_name: null,
    last_name: "Gallego",
    twitter_account: "RepRubenGallego",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "AZ",
            fec_candidate_id: "H4AZ07043",
            district: "3",
            ocd_id: "ocd-division/country:us/state:az/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 6.11,
            votes_with_party_pct: 89.29,
            votes_against_party_pct: 1.79
        }
    ]
},
{
    id: "G000559",
    member_id: "G000559",
    first_name: "John",
    middle_name: null,
    last_name: "Garamendi",
    twitter_account: "RepGaramendi",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H0CA10149",
            district: "8",
            ocd_id: "ocd-division/country:us/state:ca/cd:8",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 88.7,
            votes_against_party_pct: 2.82
        }
    ]
},
{
    id: "G000597",
    member_id: "G000597",
    first_name: "Andrew",
    middle_name: null,
    last_name: "Garbarino",
    twitter_account: "RepGarbarino",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NY",
            fec_candidate_id: "H0NY02234",
            district: "2",
            ocd_id: "ocd-division/country:us/state:ny/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 87.64,
            votes_against_party_pct: 3.93
        }
    ]
},
{
    id: "G000061",
    member_id: "G000061",
    first_name: "Mike",
    middle_name: null,
    last_name: "Garcia",
    twitter_account: "RepMikeGarcia",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H0CA25105",
            district: "27",
            ocd_id: "ocd-division/country:us/state:ca/cd:27",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 90.5,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "G000586",
    member_id: "G000586",
    first_name: "Jesús",
    middle_name: null,
    last_name: "García",
    twitter_account: "RepChuyGarcia",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IL",
            fec_candidate_id: "H8IL04134",
            district: "4",
            ocd_id: "ocd-division/country:us/state:il/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 52.78,
            votes_with_party_pct: 76.19,
            votes_against_party_pct: 5.95
        }
    ]
},
{
    id: "G000598",
    member_id: "G000598",
    first_name: "Robert",
    middle_name: null,
    last_name: "Garcia",
    twitter_account: "RepRobertGarcia",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H2CA47188",
            district: "42",
            ocd_id: "ocd-division/country:us/state:ca/cd:42",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 86.52,
            votes_against_party_pct: 5.06
        }
    ]
},
{
    id: "G000587",
    member_id: "G000587",
    first_name: "Sylvia",
    middle_name: null,
    last_name: "Garcia",
    twitter_account: "RepSylviaGarcia",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H8TX29052",
            district: "29",
            ocd_id: "ocd-division/country:us/state:tx/cd:29",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.39,
            votes_against_party_pct: 2.23
        }
    ]
},
{
    id: "G000593",
    member_id: "G000593",
    first_name: "Carlos",
    middle_name: null,
    last_name: "Giménez",
    twitter_account: "RepCarlos",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H0FL26036",
            district: "28",
            ocd_id: "ocd-division/country:us/state:fl/cd:28",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.27,
            votes_against_party_pct: 3.35
        }
    ]
},
{
    id: "G000600",
    member_id: "G000600",
    first_name: "Marie",
    middle_name: null,
    last_name: "Gluesenkamp Perez",
    twitter_account: "RepMGP",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "WA",
            fec_candidate_id: "H2WA03217",
            district: "3",
            ocd_id: "ocd-division/country:us/state:wa/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 74.72,
            votes_against_party_pct: 16.85
        }
    ]
},
{
    id: "G000592",
    member_id: "G000592",
    first_name: "Jared",
    middle_name: null,
    last_name: "Golden",
    twitter_account: "repgolden",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "ME",
            fec_candidate_id: "H8ME02185",
            district: "2",
            ocd_id: "ocd-division/country:us/state:me/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 68.54,
            votes_against_party_pct: 23.03
        }
    ]
},
{
    id: "G000599",
    member_id: "G000599",
    first_name: "Dan",
    middle_name: null,
    last_name: "Goldman",
    twitter_account: "RepDanGoldman",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NY",
            fec_candidate_id: "H2NY10308",
            district: "10",
            ocd_id: "ocd-division/country:us/state:ny/cd:10",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 6.11,
            votes_with_party_pct: 88.1,
            votes_against_party_pct: 2.98
        }
    ]
},
{
    id: "G000585",
    member_id: "G000585",
    first_name: "Jimmy",
    middle_name: null,
    last_name: "Gomez",
    twitter_account: "RepJimmyGomez",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H8CA34266",
            district: "34",
            ocd_id: "ocd-division/country:us/state:ca/cd:34",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 87.5,
            votes_against_party_pct: 3.98
        }
    ]
},
{
    id: "G000594",
    member_id: "G000594",
    first_name: "Tony",
    middle_name: null,
    last_name: "Gonzales",
    twitter_account: "RepTonyGonzales",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H0TX35015",
            district: "23",
            ocd_id: "ocd-division/country:us/state:tx/cd:23",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.83,
            votes_against_party_pct: 2.79
        }
    ]
},
{
    id: "G000581",
    member_id: "G000581",
    first_name: "Vicente",
    middle_name: null,
    last_name: "Gonzalez",
    twitter_account: "RepGonzalez",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H6TX15162",
            district: "34",
            ocd_id: "ocd-division/country:us/state:tx/cd:34",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 3.33,
            votes_with_party_pct: 73.41,
            votes_against_party_pct: 17.92
        }
    ]
},
{
    id: "G000582",
    member_id: "G000582",
    first_name: "Jenniffer",
    middle_name: null,
    last_name: "González-Colón",
    twitter_account: "repjenniffer",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Resident Commissioner",
            short_title: "R.C.",
            state: "PR",
            fec_candidate_id: "",
            district: "At-Large",
            ocd_id: "ocd-division/country:us/state:pr/cd:80",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 60.22,
            votes_with_party_pct: 89.19,
            votes_against_party_pct: 10.81
        }
    ]
},
{
    id: "G000595",
    member_id: "G000595",
    first_name: "Robert",
    middle_name: null,
    last_name: "Good",
    twitter_account: "RepBobGood",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "VA",
            fec_candidate_id: "H0VA05160",
            district: "5",
            ocd_id: "ocd-division/country:us/state:va/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 82.49,
            votes_against_party_pct: 9.6
        }
    ]
},
{
    id: "G000589",
    member_id: "G000589",
    first_name: "Lance",
    middle_name: null,
    last_name: "Gooden",
    twitter_account: "RepLanceGooden",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H8TX05144",
            district: "5",
            ocd_id: "ocd-division/country:us/state:tx/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.83,
            votes_against_party_pct: 2.79
        }
    ]
},
{
    id: "G000565",
    member_id: "G000565",
    first_name: "Paul",
    middle_name: null,
    last_name: "Gosar",
    twitter_account: "RepGosar",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "AZ",
            fec_candidate_id: "H0AZ01259",
            district: "9",
            ocd_id: "ocd-division/country:us/state:az/cd:9",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 84.75,
            votes_against_party_pct: 6.78
        }
    ]
},
{
    id: "G000583",
    member_id: "G000583",
    first_name: "Josh",
    middle_name: null,
    last_name: "Gottheimer",
    twitter_account: "RepJoshG",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NJ",
            fec_candidate_id: "H6NJ05171",
            district: "5",
            ocd_id: "ocd-division/country:us/state:nj/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 2.22,
            votes_with_party_pct: 84.57,
            votes_against_party_pct: 6.86
        }
    ]
},
{
    id: "G000377",
    member_id: "G000377",
    first_name: "Kay",
    middle_name: null,
    last_name: "Granger",
    twitter_account: "RepKayGranger",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H6TX12060",
            district: "12",
            ocd_id: "ocd-division/country:us/state:tx/cd:12",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 90.4,
            votes_against_party_pct: 1.13
        }
    ]
},
{
    id: "G000577",
    member_id: "G000577",
    first_name: "Garret",
    middle_name: null,
    last_name: "Graves",
    twitter_account: "RepGarretGraves",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "LA",
            fec_candidate_id: "H4LA06153",
            district: "6",
            ocd_id: "ocd-division/country:us/state:la/cd:6",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.89,
            votes_against_party_pct: 1.69
        }
    ]
},
{
    id: "G000546",
    member_id: "G000546",
    first_name: "Sam",
    middle_name: null,
    last_name: "Graves",
    twitter_account: "RepSamGraves",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MO",
            fec_candidate_id: "H0MO06073",
            district: "6",
            ocd_id: "ocd-division/country:us/state:mo/cd:6",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "G000590",
    member_id: "G000590",
    first_name: "Mark",
    middle_name: null,
    last_name: "Green",
    twitter_account: "RepMarkGreen",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TN",
            fec_candidate_id: "H8TN07076",
            district: "7",
            ocd_id: "ocd-division/country:us/state:tn/cd:7",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 87.64,
            votes_against_party_pct: 3.93
        }
    ]
},
{
    id: "G000553",
    member_id: "G000553",
    first_name: "Al",
    middle_name: null,
    last_name: "Green",
    twitter_account: "RepAlGreen",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H4TX09095",
            district: "9",
            ocd_id: "ocd-division/country:us/state:tx/cd:9",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 2.22,
            votes_with_party_pct: 88.57,
            votes_against_party_pct: 2.86
        }
    ]
},
{
    id: "G000596",
    member_id: "G000596",
    first_name: "Marjorie",
    middle_name: "Taylor",
    last_name: "Greene",
    twitter_account: "RepMTG",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "GA",
            fec_candidate_id: "H0GA06192",
            district: "14",
            ocd_id: "ocd-division/country:us/state:ga/cd:14",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 83.15,
            votes_against_party_pct: 8.43
        }
    ]
},
{
    id: "G000568",
    member_id: "G000568",
    first_name: "Morgan",
    middle_name: null,
    last_name: "Griffith",
    twitter_account: "RepMGriffith",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "VA",
            fec_candidate_id: "H0VA09055",
            district: "9",
            ocd_id: "ocd-division/country:us/state:va/cd:9",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 86.36,
            votes_against_party_pct: 5.11
        }
    ]
},
{
    id: "G000551",
    member_id: "G000551",
    first_name: "Raúl",
    middle_name: "M.",
    last_name: "Grijalva",
    twitter_account: "RepraulGrijalva",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "AZ",
            fec_candidate_id: "H2AZ07070",
            district: "7",
            ocd_id: "ocd-division/country:us/state:az/cd:7",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 5.56,
            votes_with_party_pct: 87.57,
            votes_against_party_pct: 3.55
        }
    ]
},
{
    id: "G000576",
    member_id: "G000576",
    first_name: "Glenn",
    middle_name: null,
    last_name: "Grothman",
    twitter_account: "RepGrothman",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "WI",
            fec_candidate_id: "H4WI06048",
            district: "6",
            ocd_id: "ocd-division/country:us/state:wi/cd:6",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 89.27,
            votes_against_party_pct: 2.26
        }
    ]
},
{
    id: "G000591",
    member_id: "G000591",
    first_name: "Michael",
    middle_name: null,
    last_name: "Guest",
    twitter_account: "RepMichaelGuest",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MS",
            fec_candidate_id: "H8MS03125",
            district: "3",
            ocd_id: "ocd-division/country:us/state:ms/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 88.2,
            votes_against_party_pct: 3.37
        }
    ]
},
{
    id: "G000558",
    member_id: "G000558",
    first_name: "Brett",
    middle_name: null,
    last_name: "Guthrie",
    twitter_account: "RepGuthrie",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "KY",
            fec_candidate_id: "H8KY02031",
            district: "2",
            ocd_id: "ocd-division/country:us/state:ky/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 90.5,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "H001096",
    member_id: "H001096",
    first_name: "Harriet",
    middle_name: null,
    last_name: "Hageman",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "WY",
            fec_candidate_id: "H2WY00166",
            district: "At-Large",
            ocd_id: "ocd-division/country:us/state:wy/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 86.03,
            votes_against_party_pct: 5.59
        }
    ]
},
{
    id: "H001090",
    member_id: "H001090",
    first_name: "Josh",
    middle_name: null,
    last_name: "Harder",
    twitter_account: "RepJoshHarder",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H8CA10126",
            district: "9",
            ocd_id: "ocd-division/country:us/state:ca/cd:9",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 87.15,
            votes_against_party_pct: 4.47
        }
    ]
},
{
    id: "H001052",
    member_id: "H001052",
    first_name: "Andy",
    middle_name: null,
    last_name: "Harris",
    twitter_account: "RepAndyHarrisMD",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MD",
            fec_candidate_id: "H8MD01094",
            district: "1",
            ocd_id: "ocd-division/country:us/state:md/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 85.39,
            votes_against_party_pct: 6.18
        }
    ]
},
{
    id: "H001086",
    member_id: "H001086",
    first_name: "Diana",
    middle_name: null,
    last_name: "Harshbarger",
    twitter_account: "RepHarshbarger",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TN",
            fec_candidate_id: "H0TN01118",
            district: "1",
            ocd_id: "ocd-division/country:us/state:tn/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.27,
            votes_against_party_pct: 3.35
        }
    ]
},
{
    id: "H001081",
    member_id: "H001081",
    first_name: "Jahana",
    middle_name: null,
    last_name: "Hayes",
    twitter_account: "RepJahanaHayes",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CT",
            fec_candidate_id: "H8CT05245",
            district: "5",
            ocd_id: "ocd-division/country:us/state:ct/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "H001082",
    member_id: "H001082",
    first_name: "Kevin",
    middle_name: null,
    last_name: "Hern",
    twitter_account: "repkevinhern",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "OK",
            fec_candidate_id: "H8OK01157",
            district: "1",
            ocd_id: "ocd-division/country:us/state:ok/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 87.71,
            votes_against_party_pct: 3.91
        }
    ]
},
{
    id: "H001038",
    member_id: "H001038",
    first_name: "Brian",
    middle_name: null,
    last_name: "Higgins",
    twitter_account: "RepBrianHiggins",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NY",
            fec_candidate_id: "H4NY27076",
            district: "26",
            ocd_id: "ocd-division/country:us/state:ny/cd:26",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 88.76,
            votes_against_party_pct: 2.81
        }
    ]
},
{
    id: "H001077",
    member_id: "H001077",
    first_name: "Clay",
    middle_name: null,
    last_name: "Higgins",
    twitter_account: "RepClayHiggins",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "LA",
            fec_candidate_id: "H6LA03148",
            district: "3",
            ocd_id: "ocd-division/country:us/state:la/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 86.44,
            votes_against_party_pct: 5.08
        }
    ]
},
{
    id: "H001072",
    member_id: "H001072",
    first_name: "French",
    middle_name: null,
    last_name: "Hill",
    twitter_account: "RepFrenchHill",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "AR",
            fec_candidate_id: "H4AR02141",
            district: "2",
            ocd_id: "ocd-division/country:us/state:ar/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 90.96,
            votes_against_party_pct: 0.56
        }
    ]
},
{
    id: "H001047",
    member_id: "H001047",
    first_name: "Jim",
    middle_name: null,
    last_name: "Himes",
    twitter_account: "JAHimes",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CT",
            fec_candidate_id: "H8CT04172",
            district: "4",
            ocd_id: "ocd-division/country:us/state:ct/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 87.15,
            votes_against_party_pct: 4.47
        }
    ]
},
{
    id: "H001091",
    member_id: "H001091",
    first_name: "Ashley",
    middle_name: null,
    last_name: "Hinson",
    twitter_account: "RepAshleyHinson",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IA",
            fec_candidate_id: "H0IA01174",
            district: "2",
            ocd_id: "ocd-division/country:us/state:ia/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 90.5,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "H001066",
    member_id: "H001066",
    first_name: "Steven",
    middle_name: null,
    last_name: "Horsford",
    twitter_account: "RepHorsford",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NV",
            fec_candidate_id: "H2NV04011",
            district: "4",
            ocd_id: "ocd-division/country:us/state:nv/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 90.96,
            votes_against_party_pct: 0.56
        }
    ]
},
{
    id: "H001093",
    member_id: "H001093",
    first_name: "Erin",
    middle_name: null,
    last_name: "Houchin",
    twitter_account: "RepHouchin",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IN",
            fec_candidate_id: "H6IN09143",
            district: "9",
            ocd_id: "ocd-division/country:us/state:in/cd:9",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 90.5,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "H001085",
    member_id: "H001085",
    first_name: "Chrissy",
    middle_name: null,
    last_name: "Houlahan",
    twitter_account: "RepHoulahan",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "PA",
            fec_candidate_id: "H8PA06087",
            district: "6",
            ocd_id: "ocd-division/country:us/state:pa/cd:6",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 86.52,
            votes_against_party_pct: 5.06
        }
    ]
},
{
    id: "H000874",
    member_id: "H000874",
    first_name: "Steny",
    middle_name: "H.",
    last_name: "Hoyer",
    twitter_account: "LeaderHoyer",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MD",
            fec_candidate_id: "H2MD05155",
            district: "5",
            ocd_id: "ocd-division/country:us/state:md/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 20.56,
            votes_with_party_pct: 88.73,
            votes_against_party_pct: 0.7
        }
    ]
},
{
    id: "H001094",
    member_id: "H001094",
    first_name: "Valerie",
    middle_name: null,
    last_name: "Hoyle",
    twitter_account: "repvalhoyle",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "OR",
            fec_candidate_id: "H2OR04095",
            district: "4",
            ocd_id: "ocd-division/country:us/state:or/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 10,
            votes_with_party_pct: 88.2,
            votes_against_party_pct: 2.48
        }
    ]
},
{
    id: "H001067",
    member_id: "H001067",
    first_name: "Richard",
    middle_name: null,
    last_name: "Hudson",
    twitter_account: "RepRichHudson",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NC",
            fec_candidate_id: "H2NC08185",
            district: "9",
            ocd_id: "ocd-division/country:us/state:nc/cd:9",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 2.78,
            votes_with_party_pct: 89.08,
            votes_against_party_pct: 2.3
        }
    ]
},
{
    id: "H001068",
    member_id: "H001068",
    first_name: "Jared",
    middle_name: null,
    last_name: "Huffman",
    twitter_account: "RepHuffman",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H2CA06259",
            district: "2",
            ocd_id: "ocd-division/country:us/state:ca/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 86.52,
            votes_against_party_pct: 5.06
        }
    ]
},
{
    id: "H001058",
    member_id: "H001058",
    first_name: "Bill",
    middle_name: null,
    last_name: "Huizenga",
    twitter_account: "RepHuizenga",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MI",
            fec_candidate_id: "H0MI02094",
            district: "4",
            ocd_id: "ocd-division/country:us/state:mi/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 88.2,
            votes_against_party_pct: 3.37
        }
    ]
},
{
    id: "H001095",
    member_id: "H001095",
    first_name: "Wesley",
    middle_name: null,
    last_name: "Hunt",
    twitter_account: "RepWesleyHunt",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H0TX07170",
            district: "38",
            ocd_id: "ocd-division/country:us/state:tx/cd:38",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 43.89,
            votes_with_party_pct: 80,
            votes_against_party_pct: 7
        }
    ]
},
{
    id: "I000056",
    member_id: "I000056",
    first_name: "Darrell",
    middle_name: null,
    last_name: "Issa",
    twitter_account: "DarrellIssa",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H0CA48024",
            district: "48",
            ocd_id: "ocd-division/country:us/state:ca/cd:48",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 90.45,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "I000058",
    member_id: "I000058",
    first_name: "Glenn",
    middle_name: null,
    last_name: "Ivey",
    twitter_account: "RepGlennIvey",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MD",
            fec_candidate_id: "H2MD04315",
            district: "4",
            ocd_id: "ocd-division/country:us/state:md/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "J000304",
    member_id: "J000304",
    first_name: "Ronny",
    middle_name: null,
    last_name: "Jackson",
    twitter_account: "RepRonnyJackson",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H0TX13228",
            district: "13",
            ocd_id: "ocd-division/country:us/state:tx/cd:13",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 88.14,
            votes_against_party_pct: 3.39
        }
    ]
},
{
    id: "J000308",
    member_id: "J000308",
    first_name: "Jeffrey",
    middle_name: null,
    last_name: "Jackson",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NC",
            fec_candidate_id: "H2NC14076",
            district: "14",
            ocd_id: "ocd-division/country:us/state:nc/cd:14",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.39,
            votes_against_party_pct: 2.23
        }
    ]
},
{
    id: "J000309",
    member_id: "J000309",
    first_name: "Jonathan",
    middle_name: null,
    last_name: "Jackson",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IL",
            fec_candidate_id: "H2IL01349",
            district: "1",
            ocd_id: "ocd-division/country:us/state:il/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 89.2,
            votes_against_party_pct: 2.27
        }
    ]
},
{
    id: "J000032",
    member_id: "J000032",
    first_name: "Sheila",
    middle_name: "",
    last_name: "Jackson Lee",
    twitter_account: "JacksonLeeTX18",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H4TX18054",
            district: "18",
            ocd_id: "ocd-division/country:us/state:tx/cd:18",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 13.33,
            votes_with_party_pct: 87.1,
            votes_against_party_pct: 3.23
        }
    ]
},
{
    id: "J000305",
    member_id: "J000305",
    first_name: "Sara",
    middle_name: null,
    last_name: "Jacobs",
    twitter_account: "RepSaraJacobs",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H8CA49074",
            district: "51",
            ocd_id: "ocd-division/country:us/state:ca/cd:51",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.83,
            votes_against_party_pct: 2.79
        }
    ]
},
{
    id: "J000307",
    member_id: "J000307",
    first_name: "John",
    middle_name: null,
    last_name: "James",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MI",
            fec_candidate_id: "H2MI10150",
            district: "10",
            ocd_id: "ocd-division/country:us/state:mi/cd:10",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 91.01,
            votes_against_party_pct: 0.56
        }
    ]
},
{
    id: "J000298",
    member_id: "J000298",
    first_name: "Pramila",
    middle_name: null,
    last_name: "Jayapal",
    twitter_account: "RepJayapal",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "WA",
            fec_candidate_id: "H6WA07458",
            district: "7",
            ocd_id: "ocd-division/country:us/state:wa/cd:7",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 87.15,
            votes_against_party_pct: 4.47
        }
    ]
},
{
    id: "J000294",
    member_id: "J000294",
    first_name: "Hakeem",
    middle_name: null,
    last_name: "Jeffries",
    twitter_account: "RepJeffries",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NY",
            fec_candidate_id: "H2NY10092",
            district: "8",
            ocd_id: "ocd-division/country:us/state:ny/cd:8",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 90.5,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "J000292",
    member_id: "J000292",
    first_name: "Bill",
    middle_name: null,
    last_name: "Johnson",
    twitter_account: "RepBillJohnson",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "OH",
            fec_candidate_id: "H0OH06189",
            district: "6",
            ocd_id: "ocd-division/country:us/state:oh/cd:6",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 90.45,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "J000288",
    member_id: "J000288",
    first_name: "Hank",
    middle_name: null,
    last_name: "Johnson",
    twitter_account: "RepHankJohnson",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "GA",
            fec_candidate_id: "H6GA04129",
            district: "4",
            ocd_id: "ocd-division/country:us/state:ga/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 86.93,
            votes_against_party_pct: 4.55
        }
    ]
},
{
    id: "J000301",
    member_id: "J000301",
    first_name: "Dusty",
    middle_name: null,
    last_name: "Johnson",
    twitter_account: "RepJohnson",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "SD",
            fec_candidate_id: "H8SD01055",
            district: "At-Large",
            ocd_id: "ocd-division/country:us/state:sd/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.39,
            votes_against_party_pct: 2.23
        }
    ]
},
{
    id: "J000299",
    member_id: "J000299",
    first_name: "Mike",
    middle_name: null,
    last_name: "Johnson",
    twitter_account: "RepMikeJohnson",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "LA",
            fec_candidate_id: "H6LA04138",
            district: "4",
            ocd_id: "ocd-division/country:us/state:la/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 5.56,
            votes_with_party_pct: 88.17,
            votes_against_party_pct: 2.96
        }
    ]
},
{
    id: "J000289",
    member_id: "J000289",
    first_name: "Jim",
    middle_name: null,
    last_name: "Jordan",
    twitter_account: "Jim_Jordan",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "OH",
            fec_candidate_id: "H6OH04082",
            district: "4",
            ocd_id: "ocd-division/country:us/state:oh/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 87.01,
            votes_against_party_pct: 4.52
        }
    ]
},
{
    id: "J000302",
    member_id: "J000302",
    first_name: "John",
    middle_name: null,
    last_name: "Joyce",
    twitter_account: "RepJohnJoyce",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "PA",
            fec_candidate_id: "H8PA13125",
            district: "13",
            ocd_id: "ocd-division/country:us/state:pa/cd:13",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.83,
            votes_against_party_pct: 2.79
        }
    ]
},
{
    id: "J000295",
    member_id: "J000295",
    first_name: "Dave",
    middle_name: null,
    last_name: "Joyce",
    twitter_account: "RepDaveJoyce",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "OH",
            fec_candidate_id: "H2OH14064",
            district: "14",
            ocd_id: "ocd-division/country:us/state:oh/cd:14",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 9.44,
            votes_with_party_pct: 86.42,
            votes_against_party_pct: 4.32
        }
    ]
},
{
    id: "K000400",
    member_id: "K000400",
    first_name: "Sydney",
    middle_name: null,
    last_name: "Kamlager-Dove",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H2CA37304",
            district: "37",
            ocd_id: "ocd-division/country:us/state:ca/cd:37",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 86.52,
            votes_against_party_pct: 5.06
        }
    ]
},
{
    id: "K000009",
    member_id: "K000009",
    first_name: "Marcy",
    middle_name: null,
    last_name: "Kaptur",
    twitter_account: "RepMarcyKaptur",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "OH",
            fec_candidate_id: "H2OH09031",
            district: "9",
            ocd_id: "ocd-division/country:us/state:oh/cd:9",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 86.44,
            votes_against_party_pct: 5.08
        }
    ]
},
{
    id: "K000398",
    member_id: "K000398",
    first_name: "Thomas",
    middle_name: null,
    last_name: "Kean",
    twitter_account: "CongressmanKean",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NJ",
            fec_candidate_id: "H0NJ07261",
            district: "7",
            ocd_id: "ocd-division/country:us/state:nj/cd:7",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.27,
            votes_against_party_pct: 3.35
        }
    ]
},
{
    id: "K000375",
    member_id: "K000375",
    first_name: "Bill",
    middle_name: null,
    last_name: "Keating",
    twitter_account: "USRepKeating",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MA",
            fec_candidate_id: "H0MA10082",
            district: "9",
            ocd_id: "ocd-division/country:us/state:ma/cd:9",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.89,
            votes_against_party_pct: 1.69
        }
    ]
},
{
    id: "K000376",
    member_id: "K000376",
    first_name: "Mike",
    middle_name: null,
    last_name: "Kelly",
    twitter_account: "MikeKellyPA",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "PA",
            fec_candidate_id: "H0PA03271",
            district: "16",
            ocd_id: "ocd-division/country:us/state:pa/cd:16",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "K000388",
    member_id: "K000388",
    first_name: "Trent",
    middle_name: "",
    last_name: "Kelly",
    twitter_account: "RepTrentKelly",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MS",
            fec_candidate_id: "H6MS01131",
            district: "1",
            ocd_id: "ocd-division/country:us/state:ms/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 87.15,
            votes_against_party_pct: 4.47
        }
    ]
},
{
    id: "K000385",
    member_id: "K000385",
    first_name: "Robin",
    middle_name: "",
    last_name: "Kelly",
    twitter_account: "RepRobinKelly",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IL",
            fec_candidate_id: "H2IL02172",
            district: "2",
            ocd_id: "ocd-division/country:us/state:il/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 21.67,
            votes_with_party_pct: 86.43,
            votes_against_party_pct: 2.86
        }
    ]
},
{
    id: "K000389",
    member_id: "K000389",
    first_name: "Ro",
    middle_name: null,
    last_name: "Khanna",
    twitter_account: "RepRoKhanna",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H4CA12055",
            district: "17",
            ocd_id: "ocd-division/country:us/state:ca/cd:17",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 91.01,
            votes_against_party_pct: 0.56
        }
    ]
},
{
    id: "K000399",
    member_id: "K000399",
    first_name: "Jennifer",
    middle_name: null,
    last_name: "Kiggans",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "VA",
            fec_candidate_id: "H2VA02064",
            district: "2",
            ocd_id: "ocd-division/country:us/state:va/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 88.2,
            votes_against_party_pct: 3.37
        }
    ]
},
{
    id: "K000380",
    member_id: "K000380",
    first_name: "Dan",
    middle_name: null,
    last_name: "Kildee",
    twitter_account: "RepDanKildee",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MI",
            fec_candidate_id: "H2MI05119",
            district: "8",
            ocd_id: "ocd-division/country:us/state:mi/cd:8",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.27,
            votes_against_party_pct: 3.35
        }
    ]
},
{
    id: "K000401",
    member_id: "K000401",
    first_name: "Kevin",
    middle_name: null,
    last_name: "Kiley",
    twitter_account: "RepKiley",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H2CA03157",
            district: "3",
            ocd_id: "ocd-division/country:us/state:ca/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.33,
            votes_against_party_pct: 2.25
        }
    ]
},
{
    id: "K000381",
    member_id: "K000381",
    first_name: "Derek",
    middle_name: null,
    last_name: "Kilmer",
    twitter_account: "RepDerekKilmer",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "WA",
            fec_candidate_id: "H2WA06129",
            district: "6",
            ocd_id: "ocd-division/country:us/state:wa/cd:6",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.89,
            votes_against_party_pct: 1.69
        }
    ]
},
{
    id: "K000394",
    member_id: "K000394",
    first_name: "Andy",
    middle_name: null,
    last_name: "Kim",
    twitter_account: "RepAndyKimNJ",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NJ",
            fec_candidate_id: "H8NJ03206",
            district: "3",
            ocd_id: "ocd-division/country:us/state:nj/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.39,
            votes_against_party_pct: 2.23
        }
    ]
},
{
    id: "K000397",
    member_id: "K000397",
    first_name: "Young",
    middle_name: null,
    last_name: "Kim",
    twitter_account: "RepYoungKim",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H8CA39240",
            district: "40",
            ocd_id: "ocd-division/country:us/state:ca/cd:40",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 89.2,
            votes_against_party_pct: 2.27
        }
    ]
},
{
    id: "K000391",
    member_id: "K000391",
    first_name: "Raja",
    middle_name: null,
    last_name: "Krishnamoorthi",
    twitter_account: "congressmanraja",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IL",
            fec_candidate_id: "H6IL08147",
            district: "8",
            ocd_id: "ocd-division/country:us/state:il/cd:8",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.89,
            votes_against_party_pct: 1.69
        }
    ]
},
{
    id: "K000382",
    member_id: "K000382",
    first_name: "Ann",
    middle_name: "McLane",
    last_name: "Kuster",
    twitter_account: "RepAnnieKuster",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NH",
            fec_candidate_id: "H0NH02181",
            district: "2",
            ocd_id: "ocd-division/country:us/state:nh/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 6.67,
            votes_with_party_pct: 89.82,
            votes_against_party_pct: 1.2
        }
    ]
},
{
    id: "K000392",
    member_id: "K000392",
    first_name: "David",
    middle_name: null,
    last_name: "Kustoff",
    twitter_account: "repdavidkustoff",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TN",
            fec_candidate_id: "H2TN07103",
            district: "8",
            ocd_id: "ocd-division/country:us/state:tn/cd:8",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 4.44,
            votes_with_party_pct: 90.06,
            votes_against_party_pct: 1.17
        }
    ]
},
{
    id: "L000585",
    member_id: "L000585",
    first_name: "Darin",
    middle_name: "M.",
    last_name: "LaHood",
    twitter_account: "RepLaHood",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IL",
            fec_candidate_id: "H6IL18088",
            district: "16",
            ocd_id: "ocd-division/country:us/state:il/cd:16",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 90.4,
            votes_against_party_pct: 1.13
        }
    ]
},
{
    id: "L000598",
    member_id: "L000598",
    first_name: "Nick",
    middle_name: null,
    last_name: "LaLota",
    twitter_account: "RepLaLota",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NY",
            fec_candidate_id: "H2NY01190",
            district: "1",
            ocd_id: "ocd-division/country:us/state:ny/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 86.52,
            votes_against_party_pct: 5.06
        }
    ]
},
{
    id: "L000578",
    member_id: "L000578",
    first_name: "Doug",
    middle_name: null,
    last_name: "LaMalfa",
    twitter_account: "RepLaMalfa",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H2CA02142",
            district: "1",
            ocd_id: "ocd-division/country:us/state:ca/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 3.33,
            votes_with_party_pct: 89.6,
            votes_against_party_pct: 1.73
        }
    ]
},
{
    id: "L000564",
    member_id: "L000564",
    first_name: "Doug",
    middle_name: null,
    last_name: "Lamborn",
    twitter_account: "RepDLamborn",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CO",
            fec_candidate_id: "H6CO05159",
            district: "5",
            ocd_id: "ocd-division/country:us/state:co/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 88.7,
            votes_against_party_pct: 2.82
        }
    ]
},
{
    id: "L000601",
    member_id: "L000601",
    first_name: "Greg",
    middle_name: null,
    last_name: "Landsman",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "OH",
            fec_candidate_id: "H2OH01194",
            district: "1",
            ocd_id: "ocd-division/country:us/state:oh/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.83,
            votes_against_party_pct: 2.79
        }
    ]
},
{
    id: "L000600",
    member_id: "L000600",
    first_name: "Nick",
    middle_name: null,
    last_name: "Langworthy",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NY",
            fec_candidate_id: "H2NY23228",
            district: "23",
            ocd_id: "ocd-division/country:us/state:ny/cd:23",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.33,
            votes_against_party_pct: 2.25
        }
    ]
},
{
    id: "L000560",
    member_id: "L000560",
    first_name: "Rick",
    middle_name: null,
    last_name: "Larsen",
    twitter_account: "RepRickLarsen",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "WA",
            fec_candidate_id: "H0WA02080",
            district: "2",
            ocd_id: "ocd-division/country:us/state:wa/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.27,
            votes_against_party_pct: 3.35
        }
    ]
},
{
    id: "L000557",
    member_id: "L000557",
    first_name: "John",
    middle_name: "B.",
    last_name: "Larson",
    twitter_account: "RepJohnLarson",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CT",
            fec_candidate_id: "H8CT01046",
            district: "1",
            ocd_id: "ocd-division/country:us/state:ct/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 8.33,
            votes_with_party_pct: 89.63,
            votes_against_party_pct: 1.22
        }
    ]
},
{
    id: "L000566",
    member_id: "L000566",
    first_name: "Robert",
    middle_name: "E.",
    last_name: "Latta",
    twitter_account: "BobLatta",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "OH",
            fec_candidate_id: "H8OH05036",
            district: "5",
            ocd_id: "ocd-division/country:us/state:oh/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "L000266",
    member_id: "L000266",
    first_name: "Jake",
    middle_name: null,
    last_name: "LaTurner",
    twitter_account: "RepLaTurner",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "KS",
            fec_candidate_id: "H0KS02188",
            district: "2",
            ocd_id: "ocd-division/country:us/state:ks/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 90.5,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "L000599",
    member_id: "L000599",
    first_name: "Michael",
    middle_name: null,
    last_name: "Lawler",
    twitter_account: "RepMikeLawler",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NY",
            fec_candidate_id: "H2NY17162",
            district: "17",
            ocd_id: "ocd-division/country:us/state:ny/cd:17",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 87.15,
            votes_against_party_pct: 4.47
        }
    ]
},
{
    id: "L000597",
    member_id: "L000597",
    first_name: "Laurel",
    middle_name: null,
    last_name: "Lee",
    twitter_account: "RepLaurelLee",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H2FL15241",
            district: "15",
            ocd_id: "ocd-division/country:us/state:fl/cd:15",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 91.01,
            votes_against_party_pct: 0.56
        }
    ]
},
{
    id: "L000590",
    member_id: "L000590",
    first_name: "Susie",
    middle_name: null,
    last_name: "Lee",
    twitter_account: "RepSusieLee",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NV",
            fec_candidate_id: "H6NV04020",
            district: "3",
            ocd_id: "ocd-division/country:us/state:nv/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 85.39,
            votes_against_party_pct: 6.18
        }
    ]
},
{
    id: "L000551",
    member_id: "L000551",
    first_name: "Barbara",
    middle_name: null,
    last_name: "Lee",
    twitter_account: "RepBarbaraLee",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H8CA09060",
            district: "12",
            ocd_id: "ocd-division/country:us/state:ca/cd:12",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 11.11,
            votes_with_party_pct: 88.05,
            votes_against_party_pct: 2.52
        }
    ]
},
{
    id: "L000602",
    member_id: "L000602",
    first_name: "Summer",
    middle_name: null,
    last_name: "Lee",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "PA",
            fec_candidate_id: "H2PA18200",
            district: "12",
            ocd_id: "ocd-division/country:us/state:pa/cd:12",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 84.92,
            votes_against_party_pct: 6.7
        }
    ]
},
{
    id: "L000589",
    member_id: "L000589",
    first_name: "Debbie",
    middle_name: null,
    last_name: "Lesko",
    twitter_account: "RepDLesko",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "AZ",
            fec_candidate_id: "H8AZ08158",
            district: "8",
            ocd_id: "ocd-division/country:us/state:az/cd:8",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 87.08,
            votes_against_party_pct: 4.49
        }
    ]
},
{
    id: "L000595",
    member_id: "L000595",
    first_name: "Julia",
    middle_name: null,
    last_name: "Letlow",
    twitter_account: "repjulialetlow",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "LA",
            fec_candidate_id: "H2LA05126",
            district: "5",
            ocd_id: "ocd-division/country:us/state:la/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 90.45,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "L000593",
    member_id: "L000593",
    first_name: "Mike",
    middle_name: null,
    last_name: "Levin",
    twitter_account: "RepMikeLevin",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H8CA49058",
            district: "49",
            ocd_id: "ocd-division/country:us/state:ca/cd:49",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "L000582",
    member_id: "L000582",
    first_name: "Ted",
    middle_name: null,
    last_name: "Lieu",
    twitter_account: "RepTedLieu",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H4CA33119",
            district: "36",
            ocd_id: "ocd-division/country:us/state:ca/cd:36",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 6.67,
            votes_with_party_pct: 89.22,
            votes_against_party_pct: 1.8
        }
    ]
},
{
    id: "L000397",
    member_id: "L000397",
    first_name: "Zoe",
    middle_name: null,
    last_name: "Lofgren",
    twitter_account: "RepZoeLofgren",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H4CA16049",
            district: "18",
            ocd_id: "ocd-division/country:us/state:ca/cd:18",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 6.67,
            votes_with_party_pct: 88.62,
            votes_against_party_pct: 2.4
        }
    ]
},
{
    id: "L000583",
    member_id: "L000583",
    first_name: "Barry",
    middle_name: null,
    last_name: "Loudermilk",
    twitter_account: "RepLoudermilk",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "GA",
            fec_candidate_id: "H4GA11061",
            district: "11",
            ocd_id: "ocd-division/country:us/state:ga/cd:11",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 2.22,
            votes_with_party_pct: 86.29,
            votes_against_party_pct: 5.14
        }
    ]
},
{
    id: "L000491",
    member_id: "L000491",
    first_name: "Frank",
    middle_name: "D.",
    last_name: "Lucas",
    twitter_account: "RepFrankLucas",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "OK",
            fec_candidate_id: "H4OK06056",
            district: "3",
            ocd_id: "ocd-division/country:us/state:ok/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 90.4,
            votes_against_party_pct: 1.13
        }
    ]
},
{
    id: "L000569",
    member_id: "L000569",
    first_name: "Blaine",
    middle_name: null,
    last_name: "Luetkemeyer",
    twitter_account: "RepBlaine",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MO",
            fec_candidate_id: "H8MO09153",
            district: "3",
            ocd_id: "ocd-division/country:us/state:mo/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 90.45,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "L000596",
    member_id: "L000596",
    first_name: "Anna Paulina",
    middle_name: null,
    last_name: "Luna",
    twitter_account: "RepLuna",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H0FL13158",
            district: "13",
            ocd_id: "ocd-division/country:us/state:fl/cd:13",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 84.92,
            votes_against_party_pct: 6.7
        }
    ]
},
{
    id: "L000603",
    member_id: "L000603",
    first_name: "Morgan",
    middle_name: null,
    last_name: "Luttrell",
    twitter_account: "RepLuttrell",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H2TX08182",
            district: "8",
            ocd_id: "ocd-division/country:us/state:tx/cd:8",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 2.22,
            votes_with_party_pct: 86.86,
            votes_against_party_pct: 4.57
        }
    ]
},
{
    id: "L000562",
    member_id: "L000562",
    first_name: "Stephen",
    middle_name: "F.",
    last_name: "Lynch",
    twitter_account: "RepStephenLynch",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MA",
            fec_candidate_id: "H2MA09072",
            district: "8",
            ocd_id: "ocd-division/country:us/state:ma/cd:8",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 90.34,
            votes_against_party_pct: 1.14
        }
    ]
},
{
    id: "M000194",
    member_id: "M000194",
    first_name: "Nancy",
    middle_name: null,
    last_name: "Mace",
    twitter_account: "RepNancyMace",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "SC",
            fec_candidate_id: "H0SC01394",
            district: "1",
            ocd_id: "ocd-division/country:us/state:sc/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 81.92,
            votes_against_party_pct: 9.6
        }
    ]
},
{
    id: "M001223",
    member_id: "M001223",
    first_name: "Seth",
    middle_name: null,
    last_name: "Magaziner",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "RI",
            fec_candidate_id: "H2RI02184",
            district: "2",
            ocd_id: "ocd-division/country:us/state:ri/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.89,
            votes_against_party_pct: 1.69
        }
    ]
},
{
    id: "M000317",
    member_id: "M000317",
    first_name: "Nicole",
    middle_name: null,
    last_name: "Malliotakis",
    twitter_account: "RepMalliotakis",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NY",
            fec_candidate_id: "H0NY11078",
            district: "11",
            ocd_id: "ocd-division/country:us/state:ny/cd:11",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 88.7,
            votes_against_party_pct: 2.82
        }
    ]
},
{
    id: "M000871",
    member_id: "M000871",
    first_name: "Tracey",
    middle_name: null,
    last_name: "Mann",
    twitter_account: "RepMann",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "KS",
            fec_candidate_id: "H0KS01123",
            district: "1",
            ocd_id: "ocd-division/country:us/state:ks/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 90.5,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "M001135",
    member_id: "M001135",
    first_name: "Kathy",
    middle_name: null,
    last_name: "Manning",
    twitter_account: "RepKManning",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NC",
            fec_candidate_id: "H8NC13067",
            district: "6",
            ocd_id: "ocd-division/country:us/state:nc/cd:6",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 83.71,
            votes_against_party_pct: 7.87
        }
    ]
},
{
    id: "M001184",
    member_id: "M001184",
    first_name: "Thomas",
    middle_name: null,
    last_name: "Massie",
    twitter_account: "RepThomasMassie",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "KY",
            fec_candidate_id: "H2KY04121",
            district: "4",
            ocd_id: "ocd-division/country:us/state:ky/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 81.01,
            votes_against_party_pct: 10.61
        }
    ]
},
{
    id: "M001199",
    member_id: "M001199",
    first_name: "Brian",
    middle_name: null,
    last_name: "Mast",
    twitter_account: "repbrianmast",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H6FL18097",
            district: "21",
            ocd_id: "ocd-division/country:us/state:fl/cd:21",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 88.7,
            votes_against_party_pct: 2.82
        }
    ]
},
{
    id: "M001163",
    member_id: "M001163",
    first_name: "Doris",
    middle_name: null,
    last_name: "Matsui",
    twitter_account: "DorisMatsui",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H6CA05195",
            district: "7",
            ocd_id: "ocd-division/country:us/state:ca/cd:7",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "M001208",
    member_id: "M001208",
    first_name: "Lucy",
    middle_name: null,
    last_name: "McBath",
    twitter_account: "replucymcbath",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "GA",
            fec_candidate_id: "H8GA06393",
            district: "7",
            ocd_id: "ocd-division/country:us/state:ga/cd:7",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 91.62,
            votes_against_party_pct: 0
        }
    ]
},
{
    id: "M001165",
    member_id: "M001165",
    first_name: "Kevin",
    middle_name: null,
    last_name: "McCarthy",
    twitter_account: "GOPLeader",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Speaker of the House",
            short_title: "",
            state: "CA",
            fec_candidate_id: "",
            district: "20",
            ocd_id: "ocd-division/country:us/state:ca/cd:20",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: null,
            votes_with_party_pct: null,
            votes_against_party_pct: null
        }
    ]
},
{
    id: "M001157",
    member_id: "M001157",
    first_name: "Michael",
    middle_name: null,
    last_name: "McCaul",
    twitter_account: "RepMcCaul",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H4TX10093",
            district: "10",
            ocd_id: "ocd-division/country:us/state:tx/cd:10",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 89.77,
            votes_against_party_pct: 1.7
        }
    ]
},
{
    id: "M001136",
    member_id: "M001136",
    first_name: "Lisa",
    middle_name: null,
    last_name: "McClain",
    twitter_account: "RepLisaMcClain",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MI",
            fec_candidate_id: "H0MI10287",
            district: "9",
            ocd_id: "ocd-division/country:us/state:mi/cd:9",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.89,
            votes_against_party_pct: 1.69
        }
    ]
},
{
    id: "M001177",
    member_id: "M001177",
    first_name: "Tom",
    middle_name: null,
    last_name: "McClintock",
    twitter_account: "RepMcClintock",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H8CA04152",
            district: "5",
            ocd_id: "ocd-division/country:us/state:ca/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 86.52,
            votes_against_party_pct: 5.06
        }
    ]
},
{
    id: "M001143",
    member_id: "M001143",
    first_name: "Betty",
    middle_name: null,
    last_name: "McCollum",
    twitter_account: "BettyMcCollum04",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MN",
            fec_candidate_id: "H0MN04049",
            district: "4",
            ocd_id: "ocd-division/country:us/state:mn/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "M001218",
    member_id: "M001218",
    first_name: "Rich",
    middle_name: null,
    last_name: "McCormick",
    twitter_account: "RepMcCormick",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "GA",
            fec_candidate_id: "H0GA07273",
            district: "6",
            ocd_id: "ocd-division/country:us/state:ga/cd:6",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 86.03,
            votes_against_party_pct: 5.59
        }
    ]
},
{
    id: "M001220",
    member_id: "M001220",
    first_name: "Morgan",
    middle_name: null,
    last_name: "McGarvey",
    twitter_account: "RepMcGarvey",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "KY",
            fec_candidate_id: "H2KY03206",
            district: "3",
            ocd_id: "ocd-division/country:us/state:ky/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "M000312",
    member_id: "M000312",
    first_name: "Jim",
    middle_name: null,
    last_name: "McGovern",
    twitter_account: "RepMcGovern",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MA",
            fec_candidate_id: "H4MA03022",
            district: "2",
            ocd_id: "ocd-division/country:us/state:ma/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "M001156",
    member_id: "M001156",
    first_name: "Patrick",
    middle_name: "T.",
    last_name: "McHenry",
    twitter_account: "PatrickMcHenry",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NC",
            fec_candidate_id: "H4NC10047",
            district: "10",
            ocd_id: "ocd-division/country:us/state:nc/cd:10",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 6.67,
            votes_with_party_pct: 89.82,
            votes_against_party_pct: 1.2
        }
    ]
},
{
    id: "M001159",
    member_id: "M001159",
    first_name: "Cathy",
    middle_name: null,
    last_name: "McMorris Rodgers",
    twitter_account: "CathyMcMorris",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "WA",
            fec_candidate_id: "H4WA05077",
            district: "5",
            ocd_id: "ocd-division/country:us/state:wa/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 90.34,
            votes_against_party_pct: 1.14
        }
    ]
},
{
    id: "M001137",
    member_id: "M001137",
    first_name: "Gregory",
    middle_name: "W.",
    last_name: "Meeks",
    twitter_account: "RepGregoryMeeks",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NY",
            fec_candidate_id: "H8NY06048",
            district: "5",
            ocd_id: "ocd-division/country:us/state:ny/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "M001226",
    member_id: "M001226",
    first_name: "Robert",
    middle_name: null,
    last_name: "Menendez",
    twitter_account: "RepMenendez",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NJ",
            fec_candidate_id: "H2NJ08232",
            district: "8",
            ocd_id: "ocd-division/country:us/state:nj/cd:8",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 90.4,
            votes_against_party_pct: 1.13
        }
    ]
},
{
    id: "M001188",
    member_id: "M001188",
    first_name: "Grace",
    middle_name: null,
    last_name: "Meng",
    twitter_account: "RepGraceMeng",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NY",
            fec_candidate_id: "H2NY06116",
            district: "6",
            ocd_id: "ocd-division/country:us/state:ny/cd:6",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 88.7,
            votes_against_party_pct: 2.82
        }
    ]
},
{
    id: "M001204",
    member_id: "M001204",
    first_name: "Daniel",
    middle_name: null,
    last_name: "Meuser",
    twitter_account: "RepMeuser",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "PA",
            fec_candidate_id: "H8PA10147",
            district: "9",
            ocd_id: "ocd-division/country:us/state:pa/cd:9",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 88.76,
            votes_against_party_pct: 2.81
        }
    ]
},
{
    id: "M000687",
    member_id: "M000687",
    first_name: "Kweisi",
    middle_name: null,
    last_name: "Mfume",
    twitter_account: "RepKweisiMfume",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MD",
            fec_candidate_id: "S6MD03185",
            district: "7",
            ocd_id: "ocd-division/country:us/state:md/cd:7",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 2.22,
            votes_with_party_pct: 90.86,
            votes_against_party_pct: 0.57
        }
    ]
},
{
    id: "M001222",
    member_id: "M001222",
    first_name: "Max",
    middle_name: null,
    last_name: "Miller",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "OH",
            fec_candidate_id: "H2OH16051",
            district: "7",
            ocd_id: "ocd-division/country:us/state:oh/cd:7",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 90.45,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "M001205",
    member_id: "M001205",
    first_name: "Carol",
    middle_name: null,
    last_name: "Miller",
    twitter_account: "RepCarolMiller",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "WV",
            fec_candidate_id: "H8WV03097",
            district: "1",
            ocd_id: "ocd-division/country:us/state:wv/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "M001211",
    member_id: "M001211",
    first_name: "Mary",
    middle_name: null,
    last_name: "Miller",
    twitter_account: "RepMaryMiller",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IL",
            fec_candidate_id: "H0IL15129",
            district: "15",
            ocd_id: "ocd-division/country:us/state:il/cd:15",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 85.39,
            votes_against_party_pct: 6.18
        }
    ]
},
{
    id: "M001215",
    member_id: "M001215",
    first_name: "Mariannette",
    middle_name: null,
    last_name: "Miller-Meeks",
    twitter_account: "RepMMM",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IA",
            fec_candidate_id: "H8IA02043",
            district: "1",
            ocd_id: "ocd-division/country:us/state:ia/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 89.2,
            votes_against_party_pct: 2.27
        }
    ]
},
{
    id: "M001216",
    member_id: "M001216",
    first_name: "Cory",
    middle_name: null,
    last_name: "Mills",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H2FL07156",
            district: "7",
            ocd_id: "ocd-division/country:us/state:fl/cd:7",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 87.71,
            votes_against_party_pct: 3.91
        }
    ]
},
{
    id: "M001221",
    member_id: "M001221",
    first_name: "Marcus",
    middle_name: null,
    last_name: "Molinaro",
    twitter_account: "RepMolinaroNY19",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NY",
            fec_candidate_id: "H2NY19127",
            district: "19",
            ocd_id: "ocd-division/country:us/state:ny/cd:19",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 87.57,
            votes_against_party_pct: 3.95
        }
    ]
},
{
    id: "M001194",
    member_id: "M001194",
    first_name: "John",
    middle_name: null,
    last_name: "Moolenaar",
    twitter_account: "RepMoolenaar",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MI",
            fec_candidate_id: "H4MI04126",
            district: "2",
            ocd_id: "ocd-division/country:us/state:mi/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.83,
            votes_against_party_pct: 2.79
        }
    ]
},
{
    id: "M001195",
    member_id: "M001195",
    first_name: "Alex",
    middle_name: null,
    last_name: "Mooney",
    twitter_account: "RepAlexMooney",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "WV",
            fec_candidate_id: "H4WV02080",
            district: "2",
            ocd_id: "ocd-division/country:us/state:wv/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 87.5,
            votes_against_party_pct: 3.98
        }
    ]
},
{
    id: "M001213",
    member_id: "M001213",
    first_name: "Blake",
    middle_name: null,
    last_name: "Moore",
    twitter_account: "RepBlakeMoore",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "UT",
            fec_candidate_id: "H0UT01205",
            district: "1",
            ocd_id: "ocd-division/country:us/state:ut/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 90.5,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "M001212",
    member_id: "M001212",
    first_name: "Barry",
    middle_name: null,
    last_name: "Moore",
    twitter_account: "RepBarryMoore",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "AL",
            fec_candidate_id: "H8AL02171",
            district: "2",
            ocd_id: "ocd-division/country:us/state:al/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 87.08,
            votes_against_party_pct: 4.49
        }
    ]
},
{
    id: "M001160",
    member_id: "M001160",
    first_name: "Gwen",
    middle_name: null,
    last_name: "Moore",
    twitter_account: "RepGwenMoore",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "WI",
            fec_candidate_id: "H4WI04183",
            district: "4",
            ocd_id: "ocd-division/country:us/state:wi/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 88.14,
            votes_against_party_pct: 3.39
        }
    ]
},
{
    id: "M001224",
    member_id: "M001224",
    first_name: "Nathaniel",
    middle_name: null,
    last_name: "Moran",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H2TX01112",
            district: "1",
            ocd_id: "ocd-division/country:us/state:tx/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 87.64,
            votes_against_party_pct: 3.93
        }
    ]
},
{
    id: "M001206",
    member_id: "M001206",
    first_name: "Joe",
    middle_name: null,
    last_name: "Morelle",
    twitter_account: "repjoemorelle",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NY",
            fec_candidate_id: "H8NY25105",
            district: "25",
            ocd_id: "ocd-division/country:us/state:ny/cd:25",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 90.34,
            votes_against_party_pct: 1.14
        }
    ]
},
{
    id: "M001217",
    member_id: "M001217",
    first_name: "Jared",
    middle_name: null,
    last_name: "Moskowitz",
    twitter_account: "RepMoskowitz",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H2FL22171",
            district: "23",
            ocd_id: "ocd-division/country:us/state:fl/cd:23",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 10.56,
            votes_with_party_pct: 82.5,
            votes_against_party_pct: 8.13
        }
    ]
},
{
    id: "M001196",
    member_id: "M001196",
    first_name: "Seth",
    middle_name: null,
    last_name: "Moulton",
    twitter_account: "teammoulton",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MA",
            fec_candidate_id: "H4MA06090",
            district: "6",
            ocd_id: "ocd-division/country:us/state:ma/cd:6",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 87.71,
            votes_against_party_pct: 3.91
        }
    ]
},
{
    id: "M001214",
    member_id: "M001214",
    first_name: "Frank",
    middle_name: null,
    last_name: "Mrvan",
    twitter_account: "RepMrvan",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IN",
            fec_candidate_id: "H0IN01150",
            district: "1",
            ocd_id: "ocd-division/country:us/state:in/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 87.57,
            votes_against_party_pct: 3.95
        }
    ]
},
{
    id: "M001225",
    member_id: "M001225",
    first_name: "Kevin",
    middle_name: null,
    last_name: "Mullin",
    twitter_account: "RepKevinMullin",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H2CA14162",
            district: "15",
            ocd_id: "ocd-division/country:us/state:ca/cd:15",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 13.33,
            votes_with_party_pct: 88.39,
            votes_against_party_pct: 1.94
        }
    ]
},
{
    id: "M001210",
    member_id: "M001210",
    first_name: "Greg",
    middle_name: null,
    last_name: "Murphy",
    twitter_account: "RepGregMurphy",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NC",
            fec_candidate_id: "H0NC03172",
            district: "3",
            ocd_id: "ocd-division/country:us/state:nc/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.33,
            votes_against_party_pct: 2.25
        }
    ]
},
{
    id: "N000002",
    member_id: "N000002",
    first_name: "Jerrold",
    middle_name: "",
    last_name: "Nadler",
    twitter_account: "RepJerryNadler",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NY",
            fec_candidate_id: "H2NY17071",
            district: "12",
            ocd_id: "ocd-division/country:us/state:ny/cd:12",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 2.78,
            votes_with_party_pct: 89.08,
            votes_against_party_pct: 2.3
        }
    ]
},
{
    id: "N000179",
    member_id: "N000179",
    first_name: "Grace",
    middle_name: "F.",
    last_name: "Napolitano",
    twitter_account: "GraceNapolitano",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H8CA34068",
            district: "31",
            ocd_id: "ocd-division/country:us/state:ca/cd:31",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 89.2,
            votes_against_party_pct: 2.27
        }
    ]
},
{
    id: "N000015",
    member_id: "N000015",
    first_name: "Richard",
    middle_name: "E.",
    last_name: "Neal",
    twitter_account: "RepRichardNeal",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MA",
            fec_candidate_id: "H8MA02041",
            district: "1",
            ocd_id: "ocd-division/country:us/state:ma/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 88.76,
            votes_against_party_pct: 2.81
        }
    ]
},
{
    id: "N000191",
    member_id: "N000191",
    first_name: "Joe",
    middle_name: null,
    last_name: "Neguse",
    twitter_account: "RepJoeNeguse",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CO",
            fec_candidate_id: "H8CO02160",
            district: "2",
            ocd_id: "ocd-division/country:us/state:co/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 91.62,
            votes_against_party_pct: 0
        }
    ]
},
{
    id: "N000026",
    member_id: "N000026",
    first_name: "Troy",
    middle_name: null,
    last_name: "Nehls",
    twitter_account: "RepTroyNehls",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H0TX22302",
            district: "22",
            ocd_id: "ocd-division/country:us/state:tx/cd:22",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 2.22,
            votes_with_party_pct: 86.86,
            votes_against_party_pct: 4.57
        }
    ]
},
{
    id: "N000189",
    member_id: "N000189",
    first_name: "Dan",
    middle_name: null,
    last_name: "Newhouse",
    twitter_account: "RepNewhouse",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "WA",
            fec_candidate_id: "H4WA04104",
            district: "4",
            ocd_id: "ocd-division/country:us/state:wa/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 90.5,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "N000194",
    member_id: "N000194",
    first_name: "Wiley",
    middle_name: null,
    last_name: "Nickel",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NC",
            fec_candidate_id: "H2NC14019",
            district: "13",
            ocd_id: "ocd-division/country:us/state:nc/cd:13",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 88.14,
            votes_against_party_pct: 3.39
        }
    ]
},
{
    id: "N000188",
    member_id: "N000188",
    first_name: "Donald",
    middle_name: "W.",
    last_name: "Norcross",
    twitter_account: "DonaldNorcross",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NJ",
            fec_candidate_id: "H4NJ01084",
            district: "1",
            ocd_id: "ocd-division/country:us/state:nj/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 90.91,
            votes_against_party_pct: 0.57
        }
    ]
},
{
    id: "N000190",
    member_id: "N000190",
    first_name: "Ralph",
    middle_name: null,
    last_name: "Norman",
    twitter_account: "RepRalphNorman",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "SC",
            fec_candidate_id: "H8SC05158",
            district: "5",
            ocd_id: "ocd-division/country:us/state:sc/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 84.75,
            votes_against_party_pct: 6.78
        }
    ]
},
{
    id: "N000193",
    member_id: "N000193",
    first_name: "Zach",
    middle_name: null,
    last_name: "Nunn",
    twitter_account: "ZachNunn",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IA",
            fec_candidate_id: "H2IA03119",
            district: "3",
            ocd_id: "ocd-division/country:us/state:ia/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 88.64,
            votes_against_party_pct: 2.84
        }
    ]
},
{
    id: "O000019",
    member_id: "O000019",
    first_name: "Jay",
    middle_name: null,
    last_name: "Obernolte",
    twitter_account: "JayObernolte",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H0CA08135",
            district: "23",
            ocd_id: "ocd-division/country:us/state:ca/cd:23",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "O000172",
    member_id: "O000172",
    first_name: "Alexandria",
    middle_name: null,
    last_name: "Ocasio-Cortez",
    twitter_account: "RepAOC",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NY",
            fec_candidate_id: "H8NY15148",
            district: "14",
            ocd_id: "ocd-division/country:us/state:ny/cd:14",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 84.75,
            votes_against_party_pct: 6.78
        }
    ]
},
{
    id: "O000175",
    member_id: "O000175",
    first_name: "William",
    middle_name: null,
    last_name: "Ogles",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TN",
            fec_candidate_id: "H2TN05446",
            district: "5",
            ocd_id: "ocd-division/country:us/state:tn/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 84.75,
            votes_against_party_pct: 6.78
        }
    ]
},
{
    id: "O000173",
    member_id: "O000173",
    first_name: "Ilhan",
    middle_name: null,
    last_name: "Omar",
    twitter_account: "Ilhan",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MN",
            fec_candidate_id: "H8MN05239",
            district: "5",
            ocd_id: "ocd-division/country:us/state:mn/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 84.66,
            votes_against_party_pct: 6.82
        }
    ]
},
{
    id: "O000086",
    member_id: "O000086",
    first_name: "Burgess",
    middle_name: null,
    last_name: "Owens",
    twitter_account: "RepBurgessOwens",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "UT",
            fec_candidate_id: "H0UT04076",
            district: "4",
            ocd_id: "ocd-division/country:us/state:ut/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 91.01,
            votes_against_party_pct: 0.56
        }
    ]
},
{
    id: "P000034",
    member_id: "P000034",
    first_name: "Frank",
    middle_name: null,
    last_name: "Pallone",
    twitter_account: "FrankPallone",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NJ",
            fec_candidate_id: "H8NJ03073",
            district: "6",
            ocd_id: "ocd-division/country:us/state:nj/cd:6",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.83,
            votes_against_party_pct: 2.79
        }
    ]
},
{
    id: "P000609",
    member_id: "P000609",
    first_name: "Gary",
    middle_name: null,
    last_name: "Palmer",
    twitter_account: "USRepGaryPalmer",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "AL",
            fec_candidate_id: "H4AL06098",
            district: "6",
            ocd_id: "ocd-division/country:us/state:al/cd:6",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 5.56,
            votes_with_party_pct: 89.35,
            votes_against_party_pct: 1.78
        }
    ]
},
{
    id: "P000613",
    member_id: "P000613",
    first_name: "Jimmy",
    middle_name: null,
    last_name: "Panetta",
    twitter_account: "RepJimmyPanetta",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H6CA20152",
            district: "19",
            ocd_id: "ocd-division/country:us/state:ca/cd:19",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 86.59,
            votes_against_party_pct: 5.03
        }
    ]
},
{
    id: "P000614",
    member_id: "P000614",
    first_name: "Chris",
    middle_name: null,
    last_name: "Pappas",
    twitter_account: "RepChrisPappas",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NH",
            fec_candidate_id: "H8NH01210",
            district: "1",
            ocd_id: "ocd-division/country:us/state:nh/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 80.45,
            votes_against_party_pct: 11.17
        }
    ]
},
{
    id: "P000096",
    member_id: "P000096",
    first_name: "Bill",
    middle_name: null,
    last_name: "Pascrell",
    twitter_account: "BillPascrell",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NJ",
            fec_candidate_id: "H6NJ08118",
            district: "9",
            ocd_id: "ocd-division/country:us/state:nj/cd:9",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 90.5,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "P000604",
    member_id: "P000604",
    first_name: "Donald",
    middle_name: "M.",
    last_name: "Payne",
    twitter_account: "RepDonaldPayne",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NJ",
            fec_candidate_id: "H2NJ10154",
            district: "10",
            ocd_id: "ocd-division/country:us/state:nj/cd:10",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "P000197",
    member_id: "P000197",
    first_name: "Nancy",
    middle_name: null,
    last_name: "Pelosi",
    twitter_account: "SpeakerPelosi",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "",
            district: "11",
            ocd_id: "ocd-division/country:us/state:ca/cd:11",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 89.77,
            votes_against_party_pct: 1.7
        }
    ]
},
{
    id: "P000619",
    member_id: "P000619",
    first_name: "Mary",
    middle_name: null,
    last_name: "Peltola",
    twitter_account: "Rep_Peltola",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "AK",
            fec_candidate_id: "H2AK01158",
            district: "At-Large",
            ocd_id: "ocd-division/country:us/state:ak/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 73.45,
            votes_against_party_pct: 18.08
        }
    ]
},
{
    id: "P000615",
    member_id: "P000615",
    first_name: "Greg",
    middle_name: null,
    last_name: "Pence",
    twitter_account: "RepGregPence",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IN",
            fec_candidate_id: "H8IN06129",
            district: "6",
            ocd_id: "ocd-division/country:us/state:in/cd:6",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 12.78,
            votes_with_party_pct: 88.46,
            votes_against_party_pct: 1.92
        }
    ]
},
{
    id: "P000605",
    member_id: "P000605",
    first_name: "Scott",
    middle_name: null,
    last_name: "Perry",
    twitter_account: "RepScottPerry",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "PA",
            fec_candidate_id: "H2PA04135",
            district: "10",
            ocd_id: "ocd-division/country:us/state:pa/cd:10",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 84.36,
            votes_against_party_pct: 7.26
        }
    ]
},
{
    id: "P000608",
    member_id: "P000608",
    first_name: "Scott",
    middle_name: null,
    last_name: "Peters",
    twitter_account: "RepScottPeters",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H2CA52089",
            district: "50",
            ocd_id: "ocd-division/country:us/state:ca/cd:50",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 89.83,
            votes_against_party_pct: 1.69
        }
    ]
},
{
    id: "P000620",
    member_id: "P000620",
    first_name: "Brittany",
    middle_name: null,
    last_name: "Pettersen",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CO",
            fec_candidate_id: "H8CO07045",
            district: "7",
            ocd_id: "ocd-division/country:us/state:co/cd:7",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.89,
            votes_against_party_pct: 1.69
        }
    ]
},
{
    id: "P000048",
    member_id: "P000048",
    first_name: "August",
    middle_name: null,
    last_name: "Pfluger",
    twitter_account: "RepPfluger",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H0TX11230",
            district: "11",
            ocd_id: "ocd-division/country:us/state:tx/cd:11",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 90.5,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "P000616",
    member_id: "P000616",
    first_name: "Dean",
    middle_name: null,
    last_name: "Phillips",
    twitter_account: "RepDeanPhillips",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MN",
            fec_candidate_id: "H8MN03143",
            district: "3",
            ocd_id: "ocd-division/country:us/state:mn/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 5.56,
            votes_with_party_pct: 89.35,
            votes_against_party_pct: 1.78
        }
    ]
},
{
    id: "P000597",
    member_id: "P000597",
    first_name: "Chellie",
    middle_name: null,
    last_name: "Pingree",
    twitter_account: "ChelliePingree",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "ME",
            fec_candidate_id: "H8ME01120",
            district: "1",
            ocd_id: "ocd-division/country:us/state:me/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "P000607",
    member_id: "P000607",
    first_name: "Mark",
    middle_name: null,
    last_name: "Pocan",
    twitter_account: "RepMarkPocan",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "WI",
            fec_candidate_id: "H2WI02124",
            district: "2",
            ocd_id: "ocd-division/country:us/state:wi/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 6.11,
            votes_with_party_pct: 88.1,
            votes_against_party_pct: 2.98
        }
    ]
},
{
    id: "P000618",
    member_id: "P000618",
    first_name: "Katie",
    middle_name: null,
    last_name: "Porter",
    twitter_account: "RepKatiePorter",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H8CA45130",
            district: "47",
            ocd_id: "ocd-division/country:us/state:ca/cd:47",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.89,
            votes_against_party_pct: 1.69
        }
    ]
},
{
    id: "P000599",
    member_id: "P000599",
    first_name: "Bill",
    middle_name: null,
    last_name: "Posey",
    twitter_account: "CongBillPosey",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H8FL15107",
            district: "8",
            ocd_id: "ocd-division/country:us/state:fl/cd:8",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 84.83,
            votes_against_party_pct: 6.74
        }
    ]
},
{
    id: "P000617",
    member_id: "P000617",
    first_name: "Ayanna",
    middle_name: null,
    last_name: "Pressley",
    twitter_account: "RepPressley",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MA",
            fec_candidate_id: "H8MA07032",
            district: "7",
            ocd_id: "ocd-division/country:us/state:ma/cd:7",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 87.5,
            votes_against_party_pct: 3.98
        }
    ]
},
{
    id: "Q000023",
    member_id: "Q000023",
    first_name: "Mike",
    middle_name: null,
    last_name: "Quigley",
    twitter_account: "RepMikeQuigley",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IL",
            fec_candidate_id: "H0IL05096",
            district: "5",
            ocd_id: "ocd-division/country:us/state:il/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 90.4,
            votes_against_party_pct: 1.13
        }
    ]
},
{
    id: "R000617",
    member_id: "R000617",
    first_name: "Delia",
    middle_name: null,
    last_name: "Ramirez",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IL",
            fec_candidate_id: "H2IL03162",
            district: "3",
            ocd_id: "ocd-division/country:us/state:il/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 86.03,
            votes_against_party_pct: 5.59
        }
    ]
},
{
    id: "R000606",
    member_id: "R000606",
    first_name: "Jamie",
    middle_name: null,
    last_name: "Raskin",
    twitter_account: "repraskin",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MD",
            fec_candidate_id: "H6MD08457",
            district: "8",
            ocd_id: "ocd-division/country:us/state:md/cd:8",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.89,
            votes_against_party_pct: 1.69
        }
    ]
},
{
    id: "R000610",
    member_id: "R000610",
    first_name: "Guy",
    middle_name: null,
    last_name: "Reschenthaler",
    twitter_account: "GReschenthaler",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "PA",
            fec_candidate_id: "H8PA18199",
            district: "14",
            ocd_id: "ocd-division/country:us/state:pa/cd:14",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.83,
            votes_against_party_pct: 2.79
        }
    ]
},
{
    id: "R000575",
    member_id: "R000575",
    first_name: "Mike",
    middle_name: "D.",
    last_name: "Rogers",
    twitter_account: "RepMikeRogersAL",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "AL",
            fec_candidate_id: "H2AL03032",
            district: "3",
            ocd_id: "ocd-division/country:us/state:al/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 90.4,
            votes_against_party_pct: 1.13
        }
    ]
},
{
    id: "R000395",
    member_id: "R000395",
    first_name: "Harold",
    middle_name: null,
    last_name: "Rogers",
    twitter_account: "RepHalRogers",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "KY",
            fec_candidate_id: "H0KY05015",
            district: "5",
            ocd_id: "ocd-division/country:us/state:ky/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.89,
            votes_against_party_pct: 1.69
        }
    ]
},
{
    id: "R000612",
    member_id: "R000612",
    first_name: "John",
    middle_name: null,
    last_name: "Rose",
    twitter_account: "RepJohnRose",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TN",
            fec_candidate_id: "H8TN06094",
            district: "6",
            ocd_id: "ocd-division/country:us/state:tn/cd:6",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.89,
            votes_against_party_pct: 1.69
        }
    ]
},
{
    id: "R000103",
    member_id: "R000103",
    first_name: "Matt",
    middle_name: null,
    last_name: "Rosendale",
    twitter_account: "RepRosendale",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MT",
            fec_candidate_id: "H4MT00050",
            district: "2",
            ocd_id: "ocd-division/country:us/state:mt/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 80.34,
            votes_against_party_pct: 11.8
        }
    ]
},
{
    id: "R000305",
    member_id: "R000305",
    first_name: "Deborah",
    middle_name: null,
    last_name: "Ross",
    twitter_account: "RepDeborahRoss",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NC",
            fec_candidate_id: "H0NC02125",
            district: "2",
            ocd_id: "ocd-division/country:us/state:nc/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "R000603",
    member_id: "R000603",
    first_name: "David",
    middle_name: null,
    last_name: "Rouzer",
    twitter_account: "RepDavidRouzer",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NC",
            fec_candidate_id: "H2NC07096",
            district: "7",
            ocd_id: "ocd-division/country:us/state:nc/cd:7",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 90.5,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "R000614",
    member_id: "R000614",
    first_name: "Chip",
    middle_name: null,
    last_name: "Roy",
    twitter_account: "RepChipRoy",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H8TX21307",
            district: "21",
            ocd_id: "ocd-division/country:us/state:tx/cd:21",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 81.82,
            votes_against_party_pct: 9.66
        }
    ]
},
{
    id: "R000599",
    member_id: "R000599",
    first_name: "Raul",
    middle_name: null,
    last_name: "Ruiz",
    twitter_account: "CongressmanRuiz",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H2CA36439",
            district: "25",
            ocd_id: "ocd-division/country:us/state:ca/cd:25",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 90.96,
            votes_against_party_pct: 0.56
        }
    ]
},
{
    id: "R000576",
    member_id: "R000576",
    first_name: "C.A. Dutch",
    middle_name: null,
    last_name: "Ruppersberger",
    twitter_account: "Call_Me_Dutch",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MD",
            fec_candidate_id: "H2MD02160",
            district: "2",
            ocd_id: "ocd-division/country:us/state:md/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 90.4,
            votes_against_party_pct: 1.13
        }
    ]
},
{
    id: "R000609",
    member_id: "R000609",
    first_name: "John",
    middle_name: null,
    last_name: "Rutherford",
    twitter_account: "RepRutherfordFL",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H6FL04105",
            district: "5",
            ocd_id: "ocd-division/country:us/state:fl/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 90.4,
            votes_against_party_pct: 1.13
        }
    ]
},
{
    id: "R000579",
    member_id: "R000579",
    first_name: "Patrick",
    middle_name: null,
    last_name: "Ryan",
    twitter_account: "RepPatRyanNY",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NY",
            fec_candidate_id: "H8NY19223",
            district: "18",
            ocd_id: "ocd-division/country:us/state:ny/cd:18",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 85.47,
            votes_against_party_pct: 6.15
        }
    ]
},
{
    id: "S000168",
    member_id: "S000168",
    first_name: "Maria",
    middle_name: "Elvira",
    last_name: "Salazar",
    twitter_account: "RepMariaSalazar",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H8FL27185",
            district: "27",
            ocd_id: "ocd-division/country:us/state:fl/cd:27",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 2.78,
            votes_with_party_pct: 89.08,
            votes_against_party_pct: 2.3
        }
    ]
},
{
    id: "S001226",
    member_id: "S001226",
    first_name: "Andrea",
    middle_name: null,
    last_name: "Salinas",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "OR",
            fec_candidate_id: "H2OR06066",
            district: "6",
            ocd_id: "ocd-division/country:us/state:or/cd:6",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 87.71,
            votes_against_party_pct: 3.91
        }
    ]
},
{
    id: "S001156",
    member_id: "S001156",
    first_name: "Linda",
    middle_name: "T.",
    last_name: "Sánchez",
    twitter_account: "RepLindaSanchez",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H2CA39078",
            district: "38",
            ocd_id: "ocd-division/country:us/state:ca/cd:38",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 88.7,
            votes_against_party_pct: 2.82
        }
    ]
},
{
    id: "S001222",
    member_id: "S001222",
    first_name: "George",
    middle_name: null,
    last_name: "Santos",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NY",
            fec_candidate_id: "H0NY03083",
            district: "3",
            ocd_id: "ocd-division/country:us/state:ny/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 83.24,
            votes_against_party_pct: 8.38
        }
    ]
},
{
    id: "S001168",
    member_id: "S001168",
    first_name: "John",
    middle_name: null,
    last_name: "Sarbanes",
    twitter_account: "RepSarbanes",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MD",
            fec_candidate_id: "H6MD03292",
            district: "3",
            ocd_id: "ocd-division/country:us/state:md/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 6.67,
            votes_with_party_pct: 89.82,
            votes_against_party_pct: 1.2
        }
    ]
},
{
    id: "S001176",
    member_id: "S001176",
    first_name: "Steve",
    middle_name: null,
    last_name: "Scalise",
    twitter_account: "SteveScalise",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "LA",
            fec_candidate_id: "H0LA01087",
            district: "1",
            ocd_id: "ocd-division/country:us/state:la/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 2.22,
            votes_with_party_pct: 89.14,
            votes_against_party_pct: 2.29
        }
    ]
},
{
    id: "S001205",
    member_id: "S001205",
    first_name: "Mary",
    middle_name: "Gay",
    last_name: "Scanlon",
    twitter_account: "RepMGS",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "PA",
            fec_candidate_id: "H8PA07200",
            district: "5",
            ocd_id: "ocd-division/country:us/state:pa/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.39,
            votes_against_party_pct: 2.23
        }
    ]
},
{
    id: "S001145",
    member_id: "S001145",
    first_name: "Jan",
    middle_name: null,
    last_name: "Schakowsky",
    twitter_account: "JanSchakowsky",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IL",
            fec_candidate_id: "H8IL09067",
            district: "9",
            ocd_id: "ocd-division/country:us/state:il/cd:9",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 88.64,
            votes_against_party_pct: 2.84
        }
    ]
},
{
    id: "S001150",
    member_id: "S001150",
    first_name: "Adam",
    middle_name: "B.",
    last_name: "Schiff",
    twitter_account: "RepAdamSchiff",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H0CA27085",
            district: "30",
            ocd_id: "ocd-division/country:us/state:ca/cd:30",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 91.53,
            votes_against_party_pct: 0
        }
    ]
},
{
    id: "S001190",
    member_id: "S001190",
    first_name: "Brad",
    middle_name: null,
    last_name: "Schneider",
    twitter_account: "repschneider",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IL",
            fec_candidate_id: "H2IL10068",
            district: "10",
            ocd_id: "ocd-division/country:us/state:il/cd:10",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 2.78,
            votes_with_party_pct: 88.51,
            votes_against_party_pct: 2.87
        }
    ]
},
{
    id: "S001221",
    member_id: "S001221",
    first_name: "Hillary",
    middle_name: null,
    last_name: "Scholten",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MI",
            fec_candidate_id: "H0MI03316",
            district: "3",
            ocd_id: "ocd-division/country:us/state:mi/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 87.15,
            votes_against_party_pct: 4.47
        }
    ]
},
{
    id: "S001216",
    member_id: "S001216",
    first_name: "Kim",
    middle_name: null,
    last_name: "Schrier",
    twitter_account: "RepKimSchrier",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "WA",
            fec_candidate_id: "H8WA08189",
            district: "8",
            ocd_id: "ocd-division/country:us/state:wa/cd:8",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 5.56,
            votes_with_party_pct: 81.07,
            votes_against_party_pct: 10.06
        }
    ]
},
{
    id: "S001183",
    member_id: "S001183",
    first_name: "David",
    middle_name: null,
    last_name: "Schweikert",
    twitter_account: "RepDavid",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "AZ",
            fec_candidate_id: "H4AZ06045",
            district: "1",
            ocd_id: "ocd-division/country:us/state:az/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 86.52,
            votes_against_party_pct: 5.06
        }
    ]
},
{
    id: "S000185",
    member_id: "S000185",
    first_name: "Robert",
    middle_name: "C.",
    last_name: "Scott",
    twitter_account: "BobbyScott",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "VA",
            fec_candidate_id: "H6VA01117",
            district: "3",
            ocd_id: "ocd-division/country:us/state:va/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.83,
            votes_against_party_pct: 2.79
        }
    ]
},
{
    id: "S001157",
    member_id: "S001157",
    first_name: "David",
    middle_name: null,
    last_name: "Scott",
    twitter_account: "RepDavidScott",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "GA",
            fec_candidate_id: "H2GA13012",
            district: "13",
            ocd_id: "ocd-division/country:us/state:ga/cd:13",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 2.22,
            votes_with_party_pct: 89.71,
            votes_against_party_pct: 1.71
        }
    ]
},
{
    id: "S001189",
    member_id: "S001189",
    first_name: "Austin",
    middle_name: null,
    last_name: "Scott",
    twitter_account: "AustinScottGA08",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "GA",
            fec_candidate_id: "H0GA08099",
            district: "8",
            ocd_id: "ocd-division/country:us/state:ga/cd:8",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.89,
            votes_against_party_pct: 1.69
        }
    ]
},
{
    id: "S001224",
    member_id: "S001224",
    first_name: "Keith",
    middle_name: null,
    last_name: "Self",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H2TX03290",
            district: "3",
            ocd_id: "ocd-division/country:us/state:tx/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 87.64,
            votes_against_party_pct: 3.93
        }
    ]
},
{
    id: "S000250",
    member_id: "S000250",
    first_name: "Pete",
    middle_name: null,
    last_name: "Sessions",
    twitter_account: "PeteSessions",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H2TX03126",
            district: "17",
            ocd_id: "ocd-division/country:us/state:tx/cd:17",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.33,
            votes_against_party_pct: 2.25
        }
    ]
},
{
    id: "S001185",
    member_id: "S001185",
    first_name: "Terri",
    middle_name: null,
    last_name: "Sewell",
    twitter_account: "RepTerriSewell",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "AL",
            fec_candidate_id: "H0AL07086",
            district: "7",
            ocd_id: "ocd-division/country:us/state:al/cd:7",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 90.96,
            votes_against_party_pct: 0.56
        }
    ]
},
{
    id: "S000344",
    member_id: "S000344",
    first_name: "Brad",
    middle_name: null,
    last_name: "Sherman",
    twitter_account: "BradSherman",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H6CA24113",
            district: "32",
            ocd_id: "ocd-division/country:us/state:ca/cd:32",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.39,
            votes_against_party_pct: 2.23
        }
    ]
},
{
    id: "S001207",
    member_id: "S001207",
    first_name: "Mikie",
    middle_name: null,
    last_name: "Sherrill",
    twitter_account: "RepSherrill",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NJ",
            fec_candidate_id: "H8NJ11142",
            district: "11",
            ocd_id: "ocd-division/country:us/state:nj/cd:11",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 86.44,
            votes_against_party_pct: 5.08
        }
    ]
},
{
    id: "S001148",
    member_id: "S001148",
    first_name: "Mike",
    middle_name: null,
    last_name: "Simpson",
    twitter_account: "CongMikeSimpson",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "ID",
            fec_candidate_id: "H8ID02064",
            district: "2",
            ocd_id: "ocd-division/country:us/state:id/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 2.78,
            votes_with_party_pct: 89.66,
            votes_against_party_pct: 1.72
        }
    ]
},
{
    id: "S001208",
    member_id: "S001208",
    first_name: "Elissa",
    middle_name: null,
    last_name: "Slotkin",
    twitter_account: "RepSlotkin",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MI",
            fec_candidate_id: "H8MI08102",
            district: "7",
            ocd_id: "ocd-division/country:us/state:mi/cd:7",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 86.59,
            votes_against_party_pct: 5.03
        }
    ]
},
{
    id: "S001172",
    member_id: "S001172",
    first_name: "Adrian",
    middle_name: null,
    last_name: "Smith",
    twitter_account: "RepAdrianSmith",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NE",
            fec_candidate_id: "H6NE03115",
            district: "3",
            ocd_id: "ocd-division/country:us/state:ne/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 90.4,
            votes_against_party_pct: 1.13
        }
    ]
},
{
    id: "S001195",
    member_id: "S001195",
    first_name: "Jason",
    middle_name: "",
    last_name: "Smith",
    twitter_account: "RepJasonSmith",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MO",
            fec_candidate_id: "H4MO08162",
            district: "8",
            ocd_id: "ocd-division/country:us/state:mo/cd:8",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 90.45,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "S000510",
    member_id: "S000510",
    first_name: "Adam",
    middle_name: null,
    last_name: "Smith",
    twitter_account: "RepAdamSmith",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "WA",
            fec_candidate_id: "H6WA09025",
            district: "9",
            ocd_id: "ocd-division/country:us/state:wa/cd:9",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 90.45,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "S000522",
    member_id: "S000522",
    first_name: "Christopher",
    middle_name: "H.",
    last_name: "Smith",
    twitter_account: "RepChrisSmith",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NJ",
            fec_candidate_id: "H8NJ04014",
            district: "4",
            ocd_id: "ocd-division/country:us/state:nj/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 88.2,
            votes_against_party_pct: 3.37
        }
    ]
},
{
    id: "S001199",
    member_id: "S001199",
    first_name: "Lloyd",
    middle_name: null,
    last_name: "Smucker",
    twitter_account: "RepSmucker",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "PA",
            fec_candidate_id: "H6PA16320",
            district: "11",
            ocd_id: "ocd-division/country:us/state:pa/cd:11",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.33,
            votes_against_party_pct: 2.25
        }
    ]
},
{
    id: "S001225",
    member_id: "S001225",
    first_name: "Eric",
    middle_name: null,
    last_name: "Sorensen",
    twitter_account: "RepEricSorensen",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IL",
            fec_candidate_id: "H2IL17147",
            district: "17",
            ocd_id: "ocd-division/country:us/state:il/cd:17",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 86.59,
            votes_against_party_pct: 5.03
        }
    ]
},
{
    id: "S001200",
    member_id: "S001200",
    first_name: "Darren",
    middle_name: null,
    last_name: "Soto",
    twitter_account: "RepDarrenSoto",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H6FL09179",
            district: "9",
            ocd_id: "ocd-division/country:us/state:fl/cd:9",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 90.34,
            votes_against_party_pct: 1.14
        }
    ]
},
{
    id: "S001209",
    member_id: "S001209",
    first_name: "Abigail",
    middle_name: null,
    last_name: "Spanberger",
    twitter_account: "RepSpanberger",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "VA",
            fec_candidate_id: "H8VA07094",
            district: "7",
            ocd_id: "ocd-division/country:us/state:va/cd:7",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 85.96,
            votes_against_party_pct: 5.62
        }
    ]
},
{
    id: "S000929",
    member_id: "S000929",
    first_name: "Victoria",
    middle_name: null,
    last_name: "Spartz",
    twitter_account: "RepSpartz",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IN",
            fec_candidate_id: "H0IN05326",
            district: "5",
            ocd_id: "ocd-division/country:us/state:in/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 3.33,
            votes_with_party_pct: 88.44,
            votes_against_party_pct: 7.51
        }
    ]
},
{
    id: "S001218",
    member_id: "S001218",
    first_name: "Melanie",
    middle_name: null,
    last_name: "Stansbury",
    twitter_account: "Rep_Stansbury",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NM",
            fec_candidate_id: "H2NM01144",
            district: "1",
            ocd_id: "ocd-division/country:us/state:nm/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 89.27,
            votes_against_party_pct: 2.26
        }
    ]
},
{
    id: "S001211",
    member_id: "S001211",
    first_name: "Greg",
    middle_name: null,
    last_name: "Stanton",
    twitter_account: "RepGregStanton",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "AZ",
            fec_candidate_id: "H8AZ09040",
            district: "4",
            ocd_id: "ocd-division/country:us/state:az/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 84.36,
            votes_against_party_pct: 7.26
        }
    ]
},
{
    id: "S001212",
    member_id: "S001212",
    first_name: "Pete",
    middle_name: null,
    last_name: "Stauber",
    twitter_account: "RepPeteStauber",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MN",
            fec_candidate_id: "H8MN08043",
            district: "8",
            ocd_id: "ocd-division/country:us/state:mn/cd:8",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 87.15,
            votes_against_party_pct: 4.47
        }
    ]
},
{
    id: "S001135",
    member_id: "S001135",
    first_name: "Michelle",
    middle_name: null,
    last_name: "Steel",
    twitter_account: "RepSteel",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H0CA48198",
            district: "45",
            ocd_id: "ocd-division/country:us/state:ca/cd:45",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.39,
            votes_against_party_pct: 2.23
        }
    ]
},
{
    id: "S001196",
    member_id: "S001196",
    first_name: "Elise",
    middle_name: null,
    last_name: "Stefanik",
    twitter_account: "RepStefanik",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NY",
            fec_candidate_id: "H4NY21079",
            district: "21",
            ocd_id: "ocd-division/country:us/state:ny/cd:21",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 90.5,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "S001213",
    member_id: "S001213",
    first_name: "Bryan",
    middle_name: null,
    last_name: "Steil",
    twitter_account: "RepBryanSteil",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "WI",
            fec_candidate_id: "H8WI01156",
            district: "1",
            ocd_id: "ocd-division/country:us/state:wi/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "S001214",
    member_id: "S001214",
    first_name: "Greg",
    middle_name: null,
    last_name: "Steube",
    twitter_account: "RepGregSteube",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H8FL17053",
            district: "17",
            ocd_id: "ocd-division/country:us/state:fl/cd:17",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 61.11,
            votes_with_party_pct: 66.67,
            votes_against_party_pct: 11.59
        }
    ]
},
{
    id: "S001215",
    member_id: "S001215",
    first_name: "Haley",
    middle_name: "",
    last_name: "Stevens",
    twitter_account: "RepHaleyStevens",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MI",
            fec_candidate_id: "H8MI11254",
            district: "11",
            ocd_id: "ocd-division/country:us/state:mi/cd:11",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 91.62,
            votes_against_party_pct: 0
        }
    ]
},
{
    id: "S001192",
    member_id: "S001192",
    first_name: "Chris",
    middle_name: null,
    last_name: "Stewart",
    twitter_account: "RepChrisStewart",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "UT",
            fec_candidate_id: "H2UT02324",
            district: "2",
            ocd_id: "ocd-division/country:us/state:ut/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 91.06,
            votes_against_party_pct: 0.56
        }
    ]
},
{
    id: "S001159",
    member_id: "S001159",
    first_name: "Marilyn",
    middle_name: null,
    last_name: "Strickland",
    twitter_account: "RepStricklandWA",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "WA",
            fec_candidate_id: "H0WA10034",
            district: "10",
            ocd_id: "ocd-division/country:us/state:wa/cd:10",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "S001220",
    member_id: "S001220",
    first_name: "Dale",
    middle_name: null,
    last_name: "Strong",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "AL",
            fec_candidate_id: "H2AL05102",
            district: "5",
            ocd_id: "ocd-division/country:us/state:al/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.39,
            votes_against_party_pct: 2.23
        }
    ]
},
{
    id: "S001193",
    member_id: "S001193",
    first_name: "Eric",
    middle_name: null,
    last_name: "Swalwell",
    twitter_account: "RepSwalwell",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H2CA15094",
            district: "14",
            ocd_id: "ocd-division/country:us/state:ca/cd:14",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 7.22,
            votes_with_party_pct: 90.96,
            votes_against_party_pct: 0
        }
    ]
},
{
    id: "S001223",
    member_id: "S001223",
    first_name: "Emilia",
    middle_name: null,
    last_name: "Sykes",
    twitter_account: "RepEmiliaSykes",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "OH",
            fec_candidate_id: "H2OH13264",
            district: "13",
            ocd_id: "ocd-division/country:us/state:oh/cd:13",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 91.06,
            votes_against_party_pct: 0.56
        }
    ]
},
{
    id: "T000472",
    member_id: "T000472",
    first_name: "Mark",
    middle_name: null,
    last_name: "Takano",
    twitter_account: "RepMarkTakano",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H2CA43245",
            district: "39",
            ocd_id: "ocd-division/country:us/state:ca/cd:39",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 88.64,
            votes_against_party_pct: 2.84
        }
    ]
},
{
    id: "T000478",
    member_id: "T000478",
    first_name: "Claudia",
    middle_name: null,
    last_name: "Tenney",
    twitter_account: "RepTenney",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NY",
            fec_candidate_id: "H4NY22051",
            district: "24",
            ocd_id: "ocd-division/country:us/state:ny/cd:24",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 88.76,
            votes_against_party_pct: 2.81
        }
    ]
},
{
    id: "T000488",
    member_id: "T000488",
    first_name: "Shri",
    middle_name: null,
    last_name: "Thanedar",
    twitter_account: "RepShriThanedar",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MI",
            fec_candidate_id: "H2MI13204",
            district: "13",
            ocd_id: "ocd-division/country:us/state:mi/cd:13",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "T000193",
    member_id: "T000193",
    first_name: "Bennie",
    middle_name: null,
    last_name: "Thompson",
    twitter_account: "BennieGThompson",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MS",
            fec_candidate_id: "H4MS02068",
            district: "2",
            ocd_id: "ocd-division/country:us/state:ms/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 91.06,
            votes_against_party_pct: 0.56
        }
    ]
},
{
    id: "T000460",
    member_id: "T000460",
    first_name: "Mike",
    middle_name: null,
    last_name: "Thompson",
    twitter_account: "RepThompson",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H8CA01109",
            district: "4",
            ocd_id: "ocd-division/country:us/state:ca/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.83,
            votes_against_party_pct: 2.79
        }
    ]
},
{
    id: "T000467",
    member_id: "T000467",
    first_name: "Glenn",
    middle_name: null,
    last_name: "Thompson",
    twitter_account: "CongressmanGT",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "PA",
            fec_candidate_id: "H8PA05071",
            district: "15",
            ocd_id: "ocd-division/country:us/state:pa/cd:15",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.39,
            votes_against_party_pct: 2.23
        }
    ]
},
{
    id: "T000165",
    member_id: "T000165",
    first_name: "Tom",
    middle_name: null,
    last_name: "Tiffany",
    twitter_account: "RepTiffany",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "WI",
            fec_candidate_id: "H0WI07101",
            district: "7",
            ocd_id: "ocd-division/country:us/state:wi/cd:7",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 84.27,
            votes_against_party_pct: 7.3
        }
    ]
},
{
    id: "T000480",
    member_id: "T000480",
    first_name: "William",
    middle_name: null,
    last_name: "Timmons",
    twitter_account: "RepTimmons",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "SC",
            fec_candidate_id: "H8SC04250",
            district: "4",
            ocd_id: "ocd-division/country:us/state:sc/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 88.64,
            votes_against_party_pct: 2.84
        }
    ]
},
{
    id: "T000468",
    member_id: "T000468",
    first_name: "Dina",
    middle_name: null,
    last_name: "Titus",
    twitter_account: "RepDinaTitus",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NV",
            fec_candidate_id: "H8NV03036",
            district: "1",
            ocd_id: "ocd-division/country:us/state:nv/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.83,
            votes_against_party_pct: 2.79
        }
    ]
},
{
    id: "T000481",
    member_id: "T000481",
    first_name: "Rashida",
    middle_name: null,
    last_name: "Tlaib",
    twitter_account: "RepRashida",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MI",
            fec_candidate_id: "H8MI13250",
            district: "12",
            ocd_id: "ocd-division/country:us/state:mi/cd:12",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 85.96,
            votes_against_party_pct: 5.62
        }
    ]
},
{
    id: "T000487",
    member_id: "T000487",
    first_name: "Jill",
    middle_name: null,
    last_name: "Tokuda",
    twitter_account: "RepJillTokuda",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "HI",
            fec_candidate_id: "H2HI02581",
            district: "2",
            ocd_id: "ocd-division/country:us/state:hi/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.27,
            votes_against_party_pct: 3.35
        }
    ]
},
{
    id: "T000469",
    member_id: "T000469",
    first_name: "Paul",
    middle_name: null,
    last_name: "Tonko",
    twitter_account: "RepPaulTonko",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NY",
            fec_candidate_id: "H8NY21203",
            district: "20",
            ocd_id: "ocd-division/country:us/state:ny/cd:20",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.83,
            votes_against_party_pct: 2.79
        }
    ]
},
{
    id: "T000486",
    member_id: "T000486",
    first_name: "Ritchie",
    middle_name: null,
    last_name: "Torres",
    twitter_account: "RepRitchie",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NY",
            fec_candidate_id: "H0NY15160",
            district: "15",
            ocd_id: "ocd-division/country:us/state:ny/cd:15",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 90.5,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "T000474",
    member_id: "T000474",
    first_name: "Norma",
    middle_name: null,
    last_name: "Torres",
    twitter_account: "NormaJTorres",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H4CA35031",
            district: "35",
            ocd_id: "ocd-division/country:us/state:ca/cd:35",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 91.06,
            votes_against_party_pct: 0.56
        }
    ]
},
{
    id: "T000482",
    member_id: "T000482",
    first_name: "Lori",
    middle_name: null,
    last_name: "Trahan",
    twitter_account: "RepLoriTrahan",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MA",
            fec_candidate_id: "H8MA03106",
            district: "3",
            ocd_id: "ocd-division/country:us/state:ma/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 90.45,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "T000483",
    member_id: "T000483",
    first_name: "David",
    middle_name: null,
    last_name: "Trone",
    twitter_account: "RepDavidTrone",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MD",
            fec_candidate_id: "H6MD08549",
            district: "6",
            ocd_id: "ocd-division/country:us/state:md/cd:6",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 4.44,
            votes_with_party_pct: 88.89,
            votes_against_party_pct: 2.92
        }
    ]
},
{
    id: "T000463",
    member_id: "T000463",
    first_name: "Michael",
    middle_name: "R.",
    last_name: "Turner",
    twitter_account: "RepMikeTurner",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "OH",
            fec_candidate_id: "H2OH03067",
            district: "10",
            ocd_id: "ocd-division/country:us/state:oh/cd:10",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 2.78,
            votes_with_party_pct: 89.66,
            votes_against_party_pct: 1.72
        }
    ]
},
{
    id: "U000040",
    member_id: "U000040",
    first_name: "Lauren",
    middle_name: null,
    last_name: "Underwood",
    twitter_account: "RepUnderwood",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IL",
            fec_candidate_id: "H8IL14174",
            district: "14",
            ocd_id: "ocd-division/country:us/state:il/cd:14",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.33,
            votes_against_party_pct: 2.25
        }
    ]
},
{
    id: "V000129",
    member_id: "V000129",
    first_name: "David",
    middle_name: null,
    last_name: "Valadao",
    twitter_account: "RepDavidValadao",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H2CA20094",
            district: "22",
            ocd_id: "ocd-division/country:us/state:ca/cd:22",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 90.5,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "V000133",
    member_id: "V000133",
    first_name: "Jefferson",
    middle_name: null,
    last_name: "Van Drew",
    twitter_account: "CongressmanJVD",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NJ",
            fec_candidate_id: "H8NJ02166",
            district: "2",
            ocd_id: "ocd-division/country:us/state:nj/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 87.08,
            votes_against_party_pct: 4.49
        }
    ]
},
{
    id: "V000134",
    member_id: "V000134",
    first_name: "Beth",
    middle_name: null,
    last_name: "Van Duyne",
    twitter_account: "RepBethVanDuyne",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H0TX24209",
            district: "24",
            ocd_id: "ocd-division/country:us/state:tx/cd:24",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.27,
            votes_against_party_pct: 3.35
        }
    ]
},
{
    id: "V000135",
    member_id: "V000135",
    first_name: "Derrick",
    middle_name: null,
    last_name: "Van Orden",
    twitter_account: "RepVanOrden",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "WI",
            fec_candidate_id: "H0WI03175",
            district: "3",
            ocd_id: "ocd-division/country:us/state:wi/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 88.64,
            votes_against_party_pct: 2.84
        }
    ]
},
{
    id: "V000130",
    member_id: "V000130",
    first_name: "Juan",
    middle_name: null,
    last_name: "Vargas",
    twitter_account: "RepJuanVargas",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H2CA50026",
            district: "52",
            ocd_id: "ocd-division/country:us/state:ca/cd:52",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.67,
            votes_with_party_pct: 89.2,
            votes_against_party_pct: 2.27
        }
    ]
},
{
    id: "V000136",
    member_id: "V000136",
    first_name: "Gabe",
    middle_name: null,
    last_name: "Vasquez",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NM",
            fec_candidate_id: "H2NM02191",
            district: "2",
            ocd_id: "ocd-division/country:us/state:nm/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 87.15,
            votes_against_party_pct: 4.47
        }
    ]
},
{
    id: "V000131",
    member_id: "V000131",
    first_name: "Marc",
    middle_name: null,
    last_name: "Veasey",
    twitter_account: "RepVeasey",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H2TX33073",
            district: "33",
            ocd_id: "ocd-division/country:us/state:tx/cd:33",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 81.01,
            votes_against_party_pct: 10.61
        }
    ]
},
{
    id: "V000081",
    member_id: "V000081",
    first_name: "Nydia",
    middle_name: "M.",
    last_name: "Velázquez",
    twitter_account: "NydiaVelazquez",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NY",
            fec_candidate_id: "H2NY00010",
            district: "7",
            ocd_id: "ocd-division/country:us/state:ny/cd:7",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.83,
            votes_against_party_pct: 2.79
        }
    ]
},
{
    id: "W000812",
    member_id: "W000812",
    first_name: "Ann",
    middle_name: null,
    last_name: "Wagner",
    twitter_account: "RepAnnWagner",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MO",
            fec_candidate_id: "H2MO02102",
            district: "2",
            ocd_id: "ocd-division/country:us/state:mo/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 2.22,
            votes_with_party_pct: 89.14,
            votes_against_party_pct: 2.29
        }
    ]
},
{
    id: "W000798",
    member_id: "W000798",
    first_name: "Tim",
    middle_name: null,
    last_name: "Walberg",
    twitter_account: "RepWalberg",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MI",
            fec_candidate_id: "H4MI07103",
            district: "5",
            ocd_id: "ocd-division/country:us/state:mi/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "W000823",
    member_id: "W000823",
    first_name: "Michael",
    middle_name: null,
    last_name: "Waltz",
    twitter_account: "RepMichaelWaltz",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H8FL06148",
            district: "6",
            ocd_id: "ocd-division/country:us/state:fl/cd:6",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 2.78,
            votes_with_party_pct: 87.93,
            votes_against_party_pct: 3.45
        }
    ]
},
{
    id: "W000797",
    member_id: "W000797",
    first_name: "Debbie",
    middle_name: null,
    last_name: "Wasserman Schultz",
    twitter_account: "RepDWStweets",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H4FL20023",
            district: "25",
            ocd_id: "ocd-division/country:us/state:fl/cd:25",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 91.57,
            votes_against_party_pct: 0
        }
    ]
},
{
    id: "W000187",
    member_id: "W000187",
    first_name: "Maxine",
    middle_name: null,
    last_name: "Waters",
    twitter_account: "RepMaxineWaters",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "CA",
            fec_candidate_id: "H4CA23011",
            district: "43",
            ocd_id: "ocd-division/country:us/state:ca/cd:43",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 89.27,
            votes_against_party_pct: 2.26
        }
    ]
},
{
    id: "W000822",
    member_id: "W000822",
    first_name: "Bonnie",
    middle_name: null,
    last_name: "Watson Coleman",
    twitter_account: "RepBonnie",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NJ",
            fec_candidate_id: "H4NJ12149",
            district: "12",
            ocd_id: "ocd-division/country:us/state:nj/cd:12",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "W000814",
    member_id: "W000814",
    first_name: "Randy",
    middle_name: null,
    last_name: "Weber",
    twitter_account: "TXRandy14",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H2TX14149",
            district: "14",
            ocd_id: "ocd-division/country:us/state:tx/cd:14",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 89.27,
            votes_against_party_pct: 2.26
        }
    ]
},
{
    id: "W000806",
    member_id: "W000806",
    first_name: "Daniel",
    middle_name: null,
    last_name: "Webster",
    twitter_account: "RepWebster",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H0FL08208",
            district: "11",
            ocd_id: "ocd-division/country:us/state:fl/cd:11",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 87.64,
            votes_against_party_pct: 3.93
        }
    ]
},
{
    id: "W000815",
    member_id: "W000815",
    first_name: "Brad",
    middle_name: null,
    last_name: "Wenstrup",
    twitter_account: "RepBradWenstrup",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "OH",
            fec_candidate_id: "H2OH02085",
            district: "2",
            ocd_id: "ocd-division/country:us/state:oh/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 90.5,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "W000821",
    member_id: "W000821",
    first_name: "Bruce",
    middle_name: null,
    last_name: "Westerman",
    twitter_account: "RepWesterman",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "AR",
            fec_candidate_id: "H4AR04048",
            district: "4",
            ocd_id: "ocd-division/country:us/state:ar/cd:4",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 90.45,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "W000825",
    member_id: "W000825",
    first_name: "Jennifer",
    middle_name: null,
    last_name: "Wexton",
    twitter_account: "RepWexton",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "VA",
            fec_candidate_id: "H8VA10106",
            district: "10",
            ocd_id: "ocd-division/country:us/state:va/cd:10",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 2.22,
            votes_with_party_pct: 89.71,
            votes_against_party_pct: 1.71
        }
    ]
},
{
    id: "W000826",
    member_id: "W000826",
    first_name: "Susan",
    middle_name: null,
    last_name: "Wild",
    twitter_account: "RepSusanWild",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "PA",
            fec_candidate_id: "H8PA15229",
            district: "7",
            ocd_id: "ocd-division/country:us/state:pa/cd:7",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 6.67,
            votes_with_party_pct: 83.83,
            votes_against_party_pct: 7.19
        }
    ]
},
{
    id: "W000828",
    member_id: "W000828",
    first_name: "Brandon",
    middle_name: null,
    last_name: "Williams",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "NY",
            fec_candidate_id: "H2NY22212",
            district: "22",
            ocd_id: "ocd-division/country:us/state:ny/cd:22",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.89,
            votes_against_party_pct: 1.69
        }
    ]
},
{
    id: "W000788",
    member_id: "W000788",
    first_name: "Nikema",
    middle_name: null,
    last_name: "Williams",
    twitter_account: "RepNikema",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "GA",
            fec_candidate_id: "H0GA05301",
            district: "5",
            ocd_id: "ocd-division/country:us/state:ga/cd:5",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 88.83,
            votes_against_party_pct: 2.79
        }
    ]
},
{
    id: "W000816",
    member_id: "W000816",
    first_name: "Roger",
    middle_name: null,
    last_name: "Williams",
    twitter_account: "RepRWilliams",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "TX",
            fec_candidate_id: "H2TX33040",
            district: "25",
            ocd_id: "ocd-division/country:us/state:tx/cd:25",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 8.89,
            votes_with_party_pct: 87.73,
            votes_against_party_pct: 3.07
        }
    ]
},
{
    id: "W000808",
    member_id: "W000808",
    first_name: "Frederica",
    middle_name: null,
    last_name: "Wilson",
    twitter_account: "RepWilson",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "FL",
            fec_candidate_id: "H0FL17068",
            district: "24",
            ocd_id: "ocd-division/country:us/state:fl/cd:24",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 1.11,
            votes_with_party_pct: 89.83,
            votes_against_party_pct: 1.69
        }
    ]
},
{
    id: "W000795",
    member_id: "W000795",
    first_name: "Joe",
    middle_name: null,
    last_name: "Wilson",
    twitter_account: "RepJoeWilson",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "SC",
            fec_candidate_id: "H2SC02059",
            district: "2",
            ocd_id: "ocd-division/country:us/state:sc/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 89.33,
            votes_against_party_pct: 2.25
        }
    ]
},
{
    id: "W000804",
    member_id: "W000804",
    first_name: "Robert",
    middle_name: "J.",
    last_name: "Wittman",
    twitter_account: "RobWittman",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "VA",
            fec_candidate_id: "H8VA01147",
            district: "1",
            ocd_id: "ocd-division/country:us/state:va/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0.56,
            votes_with_party_pct: 90.45,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "W000809",
    member_id: "W000809",
    first_name: "Steve",
    middle_name: null,
    last_name: "Womack",
    twitter_account: "Rep_SteveWomack",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "AR",
            fec_candidate_id: "H0AR03055",
            district: "3",
            ocd_id: "ocd-division/country:us/state:ar/cd:3",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 90.5,
            votes_against_party_pct: 1.12
        }
    ]
},
{
    id: "Y000067",
    member_id: "Y000067",
    first_name: "Rudy",
    middle_name: null,
    last_name: "Yakym",
    twitter_account: "RepRudyYakym",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "IN",
            fec_candidate_id: "H2IN02295",
            district: "2",
            ocd_id: "ocd-division/country:us/state:in/cd:2",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 91.06,
            votes_against_party_pct: 0.56
        }
    ]
},
{
    id: "Z000018",
    member_id: "Z000018",
    first_name: "Ryan",
    middle_name: null,
    last_name: "Zinke",
    twitter_account: "RepRyanZinke",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "MT",
            fec_candidate_id: "H4MT01041",
            district: "1",
            ocd_id: "ocd-division/country:us/state:mt/cd:1",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 89.94,
            votes_against_party_pct: 1.68
        }
    ]
},
{
    id: "M001227",
    member_id: "M001227",
    first_name: "Jennifer",
    middle_name: null,
    last_name: "McClellan",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Representative",
            short_title: "Rep.",
            state: "VA",
            fec_candidate_id: "",
            district: "4",
            ocd_id: "ocd-division/country:us/state:va/cd:4",
            start_date: "2023-03-07",
            end_date: "2025-01-03",
            next_election: "",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 98.7,
            votes_against_party_pct: 1.3
        }
    ]
},
{
    id: "M001219",
    member_id: "M001219",
    first_name: "Jim",
    middle_name: null,
    last_name: "Moylan",
    twitter_account: null,
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Delegate",
            short_title: "Del.",
            state: "GU",
            fec_candidate_id: "",
            district: "",
            ocd_id: "ocd-division/country:us/state:gu/cd:",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 57.39,
            votes_with_party_pct: 97.96,
            votes_against_party_pct: 2.04
        }
    ]
},
{
    id: "N000147",
    member_id: "N000147",
    first_name: "Eleanor",
    middle_name: "Holmes",
    last_name: "Norton",
    twitter_account: "EleanorNorton",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Delegate",
            short_title: "Del.",
            state: "DC",
            fec_candidate_id: "",
            district: "At-Large",
            ocd_id: "ocd-division/country:us/state:dc/cd:79",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 0,
            votes_with_party_pct: 98.26,
            votes_against_party_pct: 1.74
        }
    ]
},
{
    id: "P000610",
    member_id: "P000610",
    first_name: "Stacey",
    middle_name: null,
    last_name: "Plaskett",
    twitter_account: "staceyplaskett",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Delegate",
            short_title: "Del.",
            state: "VI",
            fec_candidate_id: "",
            district: "At-Large",
            ocd_id: "ocd-division/country:us/state:vi/cd:79",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 7.83,
            votes_with_party_pct: 93.4,
            votes_against_party_pct: 6.6
        }
    ]
},
{
    id: "R000600",
    member_id: "R000600",
    first_name: "Amata",
    middle_name: "Coleman",
    last_name: "Radewagen",
    twitter_account: "RepAmata",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Delegate",
            short_title: "Del.",
            state: "AS",
            fec_candidate_id: "",
            district: "At-Large",
            ocd_id: "ocd-division/country:us/state:as/cd:79",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 58.26,
            votes_with_party_pct: 97.92,
            votes_against_party_pct: 2.08
        }
    ]
},
{
    id: "S001177",
    member_id: "S001177",
    first_name: "Gregorio",
    middle_name: "Kilili Camacho",
    last_name: "Sablan",
    twitter_account: "Kilili_Sablan",
    roles: [ 
        {
            congress: "118",
            chamber: "House",
            title: "Delegate",
            short_title: "Del.",
            state: "MP",
            fec_candidate_id: "",
            district: "At-Large",
            ocd_id: "ocd-division/country:us/state:mp/cd:79",
            start_date: "2023-01-03",
            end_date: "2025-01-03",
            next_election: "2024",
            state_rank: "",
            missed_votes_pct: 7.83,
            votes_with_party_pct: 100,
            votes_against_party_pct: 0
        }
    ]
}    
];

const ALL_POLS = shuffle(allPols);

export default ALL_POLS;
