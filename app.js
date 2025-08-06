// ZoomInfo Account Dashboard JavaScript

class AccountDashboard {
    constructor() {
        this.accounts = [];
        this.filteredAccounts = [];
        this.currentSort = { column: null, direction: 'asc' };
        this.searchTimeout = null;
        
        this.init();
    }
    
    init() {
        this.loadData();
        this.setupEventListeners();
        this.populateFilters();
    }
    
    loadData() {
        // Load accounts data from the provided JSON
        this.accounts = [
           [
 {
   "Company Name": "Vanguard Innovations",
   "Assigned To": "Jordan Green",
   "Account Type": "Prospect",
   "Prospect Score": 74,
   "Account Notes": [
      "Referred by analyst",
      "Placeholder"
   ],
   "Drop Notes": "Nurture",
   "Website": "www.castillo.com",
   "LinkedIn URL": "https://linkedin.com/company/76",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 1809,
   "Head Office": "Amandahaven, Vermont",
   "Country": "Australia",
   "Segmentation": "Enterprise",
   "Activity": 1,
   "Generation": 9,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Summit Solutions",
   "Assigned To": "Blake Davis",
   "Account Type": "Suspect",
   "Prospect Score": 77,
   "Account Notes": [
      "Referred by analyst",
      "Placeholder"
   ],
   "Drop Notes": "Do not call",
   "Website": "www.wilson.com",
   "LinkedIn URL": "https://linkedin.com/company/76",
   "Revenue Estimate": "$10 mil. - $25 mil.",
   "Employees": 790,
   "Head Office": "New Melissaside, Minnesota",
   "Country": "United States",
   "Segmentation": "Mid-Market",
   "Activity": 2,
   "Generation": 4,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Valiant Consulting",
   "Assigned To": "Morgan Lee",
   "Account Type": "Customer",
   "Prospect Score": 79,
   "Account Notes": [
      "VC-backed",
      "Placeholder"
   ],
   "Drop Notes": "Wrong fit",
   "Website": "www.campbell.com",
   "LinkedIn URL": "https://linkedin.com/company/914",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 1846,
   "Head Office": "South Edward, Texas",
   "Country": "Germany",
   "Segmentation": "Enterprise",
   "Activity": 3,
   "Generation": 9,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Summit Consulting",
   "Assigned To": "Avery Reid",
   "Account Type": "Suspect",
   "Prospect Score": 78,
   "Account Notes": [
      "New lead",
      "Placeholder"
   ],
   "Drop Notes": "Lost to competition",
   "Website": "www.sullivan-rodriguez.com",
   "LinkedIn URL": "https://linkedin.com/company/517",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 176,
   "Head Office": "Mckenzieside, Delaware",
   "Country": "France",
   "Segmentation": "Enterprise",
   "Activity": 4,
   "Generation": 2,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Vanguard Corporation",
   "Assigned To": "Jordan Green",
   "Account Type": "Prospect",
   "Prospect Score": 86,
   "Account Notes": [
      "Needs follow up",
      "Placeholder"
   ],
   "Drop Notes": "Out of territory",
   "Website": "www.campbell.com",
   "LinkedIn URL": "https://linkedin.com/company/111",
   "Revenue Estimate": "$25 mil. - $50 mil.",
   "Employees": 1285,
   "Head Office": "Thompsonton, Montana",
   "Country": "Australia",
   "Segmentation": "Mid-Market",
   "Activity": 1,
   "Generation": 2,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Momentum Networks",
   "Assigned To": "Morgan Lee",
   "Account Type": "Prospect",
   "Prospect Score": 87,
   "Account Notes": [
      "VC-backed",
      "Placeholder"
   ],
   "Drop Notes": "Lost to competition",
   "Website": "www.parker.com",
   "LinkedIn URL": "https://linkedin.com/company/768",
   "Revenue Estimate": "$25 mil. - $50 mil.",
   "Employees": 508,
   "Head Office": "South Johnshire, Wyoming",
   "Country": "United States",
   "Segmentation": "SMB",
   "Activity": 2,
   "Generation": 5,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Cypress Analytics",
   "Assigned To": "Taylor Smith",
   "Account Type": "Suspect",
   "Prospect Score": 77,
   "Account Notes": [
      "Top 10 account",
      "Placeholder"
   ],
   "Drop Notes": "Nurture",
   "Website": "www.leach-gibbs.com",
   "LinkedIn URL": "https://linkedin.com/company/834",
   "Revenue Estimate": "$25 mil. - $50 mil.",
   "Employees": 1095,
   "Head Office": "Fosterberg, Pennsylvania",
   "Country": "Germany",
   "Segmentation": "Enterprise",
   "Activity": 3,
   "Generation": 3,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Momentum Partners",
   "Assigned To": "Avery Reid",
   "Account Type": "Prospect",
   "Prospect Score": 76,
   "Account Notes": [
      "VC-backed",
      "Placeholder"
   ],
   "Drop Notes": "Do not call",
   "Website": "www.wilkerson.com",
   "LinkedIn URL": "https://linkedin.com/company/529",
   "Revenue Estimate": "$250 mil. - $500 mil.",
   "Employees": 533,
   "Head Office": "North Cheryl, Nebraska",
   "Country": "Germany",
   "Segmentation": "SMB",
   "Activity": 4,
   "Generation": 4,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Vertex Networks",
   "Assigned To": "Taylor Smith",
   "Account Type": "Suspect",
   "Prospect Score": 74,
   "Account Notes": [
      "New lead",
      "Placeholder"
   ],
   "Drop Notes": "Wrong fit",
   "Website": "www.hayes.com",
   "LinkedIn URL": "https://linkedin.com/company/521",
   "Revenue Estimate": "$25 mil. - $50 mil.",
   "Employees": 542,
   "Head Office": "Gibsonton, Tennessee",
   "Country": "United Kingdom",
   "Segmentation": "SMB",
   "Activity": 5,
   "Generation": 5,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Valiant Partners",
   "Assigned To": "Sydney Wong",
   "Account Type": "Prospect",
   "Prospect Score": 65,
   "Account Notes": [
      "Budget review pending",
      "Placeholder"
   ],
   "Drop Notes": "Do not call",
   "Website": "www.mullins.com",
   "LinkedIn URL": "https://linkedin.com/company/198",
   "Revenue Estimate": "$10 mil. - $25 mil.",
   "Employees": 431,
   "Head Office": "Valenciaburgh, Washington",
   "Country": "Canada",
   "Segmentation": "Mid-Market",
   "Activity": 6,
   "Generation": 6,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Valiant Corporation",
   "Assigned To": "Sydney Wong",
   "Account Type": "Prospect",
   "Prospect Score": 67,
   "Account Notes": [
      "Referred by analyst",
      "Placeholder"
   ],
   "Drop Notes": "Budget freeze",
   "Website": "www.oliver-shea.com",
   "LinkedIn URL": "https://linkedin.com/company/71",
   "Revenue Estimate": "$25 mil. - $50 mil.",
   "Employees": 409,
   "Head Office": "Jasonview, Alaska",
   "Country": "United States",
   "Segmentation": "Mid-Market",
   "Activity": 6,
   "Generation": 6,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "NexGen Consulting",
   "Assigned To": "Avery Reid",
   "Account Type": "Customer",
   "Prospect Score": 69,
   "Account Notes": [
      "Repeat outreach",
      "Placeholder"
   ],
   "Drop Notes": "Budget freeze",
   "Website": "www.olson.com",
   "LinkedIn URL": "https://linkedin.com/company/253",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 1358,
   "Head Office": "West Timothy, New Hampshire",
   "Country": "France",
   "Segmentation": "Mid-Market",
   "Activity": 7,
   "Generation": 7,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Atlas Networks",
   "Assigned To": "Jordan Green",
   "Account Type": "Suspect",
   "Prospect Score": 85,
   "Account Notes": [
      "Strong pipeline",
      "Placeholder"
   ],
   "Drop Notes": "Nurture",
   "Website": "www.jones.com",
   "LinkedIn URL": "https://linkedin.com/company/814",
   "Revenue Estimate": "$10 mil. - $25 mil.",
   "Employees": 1897,
   "Head Office": "South Elijahbury, Alabama",
   "Country": "Australia",
   "Segmentation": "Enterprise",
   "Activity": 1,
   "Generation": 1,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Summit Corporation",
   "Assigned To": "Avery Reid",
   "Account Type": "Customer",
   "Prospect Score": 77,
   "Account Notes": [
      "Budget review pending",
      "Placeholder"
   ],
   "Drop Notes": "Do not call",
   "Website": "www.clark.com",
   "LinkedIn URL": "https://linkedin.com/company/832",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 1066,
   "Head Office": "Cameronfurt, Utah",
   "Country": "Australia",
   "Segmentation": "Enterprise",
   "Activity": 2,
   "Generation": 2,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Vanguard Corporation",
   "Assigned To": "Jordan Green",
   "Account Type": "Customer",
   "Prospect Score": 81,
   "Account Notes": [
      "Top 10 account",
      "Placeholder"
   ],
   "Drop Notes": "Wrong fit",
   "Website": "www.brooks.com",
   "LinkedIn URL": "https://linkedin.com/company/471",
   "Revenue Estimate": "$25 mil. - $50 mil.",
   "Employees": 1565,
   "Head Office": "Gabrielstad, Ohio",
   "Country": "France",
   "Segmentation": "SMB",
   "Activity": 3,
   "Generation": 3,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Atlas Consulting",
   "Assigned To": "Blake Davis",
   "Account Type": "Suspect",
   "Prospect Score": 79,
   "Account Notes": [
      "Top 10 account",
      "Placeholder"
   ],
   "Drop Notes": "Budget freeze",
   "Website": "www.scott.com",
   "LinkedIn URL": "https://linkedin.com/company/274",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 927,
   "Head Office": "East Stevenville, Texas",
   "Country": "Germany",
   "Segmentation": "SMB",
   "Activity": 4,
   "Generation": 4,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Radiant Partners",
   "Assigned To": "Avery Reid",
   "Account Type": "Customer",
   "Prospect Score": 90,
   "Account Notes": [
      "Upsell potential",
      "Placeholder"
   ],
   "Drop Notes": "Nurture",
   "Website": "www.saunders-cochran.com",
   "LinkedIn URL": "https://linkedin.com/company/802",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 1932,
   "Head Office": "Marystad, North Dakota",
   "Country": "Germany",
   "Segmentation": "SMB",
   "Activity": 1,
   "Generation": 1,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Radiant Analytics",
   "Assigned To": "Taylor Smith",
   "Account Type": "Customer",
   "Prospect Score": 60,
   "Account Notes": [
      "Needs follow up",
      "Placeholder"
   ],
   "Drop Notes": "Budget freeze",
   "Website": "www.rhodes-hunter.com",
   "LinkedIn URL": "https://linkedin.com/company/626",
   "Revenue Estimate": "$25 mil. - $50 mil.",
   "Employees": 820,
   "Head Office": "Jamesfurt, Illinois",
   "Country": "Germany",
   "Segmentation": "Enterprise",
   "Activity": 2,
   "Generation": 2,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Momentum Services",
   "Assigned To": "Jordan Green",
   "Account Type": "Prospect",
   "Prospect Score": 60,
   "Account Notes": [
      "Strong pipeline",
      "Placeholder"
   ],
   "Drop Notes": "Lost to competition",
   "Website": "www.smith-rojas.com",
   "LinkedIn URL": "https://linkedin.com/company/693",
   "Revenue Estimate": "$100 mil. - $250 mil.",
   "Employees": 1618,
   "Head Office": "Thompsonport, Texas",
   "Country": "United Kingdom",
   "Segmentation": "Enterprise",
   "Activity": 3,
   "Generation": 3,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Momentum Analytics",
   "Assigned To": "Morgan Lee",
   "Account Type": "Customer",
   "Prospect Score": 61,
   "Account Notes": [
      "VC-backed",
      "Placeholder"
   ],
   "Drop Notes": "Do not call",
   "Website": "www.anthony.com",
   "LinkedIn URL": "https://linkedin.com/company/401",
   "Revenue Estimate": "$10 mil. - $25 mil.",
   "Employees": 1691,
   "Head Office": "North Richard, Connecticut",
   "Country": "France",
   "Segmentation": "Mid-Market",
   "Activity": 4,
   "Generation": 4,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Premier Analytics",
   "Assigned To": "Jordan Green",
   "Account Type": "Suspect",
   "Prospect Score": 71,
   "Account Notes": [
      "VC-backed",
      "Placeholder"
   ],
   "Drop Notes": "Nurture",
   "Website": "www.andrews-cannon.com",
   "LinkedIn URL": "https://linkedin.com/company/409",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 1164,
   "Head Office": "Taylorberg, New Mexico",
   "Country": "Germany",
   "Segmentation": "SMB",
   "Activity": 5,
   "Generation": 5,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Everest Analytics",
   "Assigned To": "Blake Davis",
   "Account Type": "Customer",
   "Prospect Score": 70,
   "Account Notes": [
      "Needs follow up",
      "Placeholder"
   ],
   "Drop Notes": "Lost to competition",
   "Website": "www.ryan-mcdaniel.com",
   "LinkedIn URL": "https://linkedin.com/company/563",
   "Revenue Estimate": "$250 mil. - $500 mil.",
   "Employees": 1774,
   "Head Office": "Christopherfort, South Carolina",
   "Country": "United States",
   "Segmentation": "Mid-Market",
   "Activity": 6,
   "Generation": 6,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Vertex Technologies",
   "Assigned To": "Jordan Green",
   "Account Type": "Suspect",
   "Prospect Score": 82,
   "Account Notes": [
      "Needs follow up",
      "Placeholder"
   ],
   "Drop Notes": "Lost to competition",
   "Website": "www.brewer.com",
   "LinkedIn URL": "https://linkedin.com/company/985",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 1856,
   "Head Office": "Josephstad, South Carolina",
   "Country": "Australia",
   "Segmentation": "SMB",
   "Activity": 6,
   "Generation": 6,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Pinnacle Networks",
   "Assigned To": "Morgan Lee",
   "Account Type": "Suspect",
   "Prospect Score": 73,
   "Account Notes": [
      "Top 10 account",
      "Placeholder"
   ],
   "Drop Notes": "Out of territory",
   "Website": "www.kelley.com",
   "LinkedIn URL": "https://linkedin.com/company/361",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 421,
   "Head Office": "New Steven, New Hampshire",
   "Country": "Canada",
   "Segmentation": "Mid-Market",
   "Activity": 7,
   "Generation": 7,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Valiant Partners",
   "Assigned To": "Avery Reid",
   "Account Type": "Suspect",
   "Prospect Score": 63,
   "Account Notes": [
      "New lead",
      "Placeholder"
   ],
   "Drop Notes": "Lost to competition",
   "Website": "www.martinez.com",
   "LinkedIn URL": "https://linkedin.com/company/991",
   "Revenue Estimate": "$100 mil. - $250 mil.",
   "Employees": 1842,
   "Head Office": "Lake Dianeberg, Tennessee",
   "Country": "Canada",
   "Segmentation": "Enterprise",
   "Activity": 1,
   "Generation": 1,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Everest Partners",
   "Assigned To": "Morgan Lee",
   "Account Type": "Prospect",
   "Prospect Score": 83,
   "Account Notes": [
      "Nurture in Q3",
      "Placeholder"
   ],
   "Drop Notes": "Budget freeze",
   "Website": "www.williams.com",
   "LinkedIn URL": "https://linkedin.com/company/860",
   "Revenue Estimate": "$100 mil. - $250 mil.",
   "Employees": 1200,
   "Head Office": "North Amanda, Arizona",
   "Country": "France",
   "Segmentation": "Mid-Market",
   "Activity": 2,
   "Generation": 2,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Aspire Analytics",
   "Assigned To": "Morgan Lee",
   "Account Type": "Suspect",
   "Prospect Score": 87,
   "Account Notes": [
      "VC-backed",
      "Placeholder"
   ],
   "Drop Notes": "Budget freeze",
   "Website": "www.ortiz-holt.com",
   "LinkedIn URL": "https://linkedin.com/company/98",
   "Revenue Estimate": "$25 mil. - $50 mil.",
   "Employees": 1125,
   "Head Office": "Jaclyntown, Arizona",
   "Country": "Canada",
   "Segmentation": "Enterprise",
   "Activity": 3,
   "Generation": 3,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Aspire Analytics",
   "Assigned To": "Jordan Green",
   "Account Type": "Suspect",
   "Prospect Score": 75,
   "Account Notes": [
      "Needs follow up",
      "Placeholder"
   ],
   "Drop Notes": "Out of territory",
   "Website": "www.pope-larsen.com",
   "LinkedIn URL": "https://linkedin.com/company/514",
   "Revenue Estimate": "$25 mil. - $50 mil.",
   "Employees": 1653,
   "Head Office": "West Michael, Mississippi",
   "Country": "Germany",
   "Segmentation": "Enterprise",
   "Activity": 4,
   "Generation": 4,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Aspire Consulting",
   "Assigned To": "Jordan Green",
   "Account Type": "Prospect",
   "Prospect Score": 61,
   "Account Notes": [
      "New lead",
      "Placeholder"
   ],
   "Drop Notes": "Wrong fit",
   "Website": "www.mitchell-ortiz.com",
   "LinkedIn URL": "https://linkedin.com/company/428",
   "Revenue Estimate": "$25 mil. - $50 mil.",
   "Employees": 1832,
   "Head Office": "Garzaport, Arizona",
   "Country": "United States",
   "Segmentation": "Mid-Market",
   "Activity": 1,
   "Generation": 1,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Vanguard Services",
   "Assigned To": "Taylor Smith",
   "Account Type": "Prospect",
   "Prospect Score": 70,
   "Account Notes": [
      "Repeat outreach",
      "Placeholder"
   ],
   "Drop Notes": "Budget freeze",
   "Website": "www.walton.com",
   "LinkedIn URL": "https://linkedin.com/company/471",
   "Revenue Estimate": "$25 mil. - $50 mil.",
   "Employees": 1873,
   "Head Office": "West Shawn, Utah",
   "Country": "Germany",
   "Segmentation": "Enterprise",
   "Activity": 2,
   "Generation": 2,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Vanguard Innovations",
   "Assigned To": "Sydney Wong",
   "Account Type": "Prospect",
   "Prospect Score": 82,
   "Account Notes": [
      "Repeat outreach",
      "Placeholder"
   ],
   "Drop Notes": "Nurture",
   "Website": "www.collier.com",
   "LinkedIn URL": "https://linkedin.com/company/116",
   "Revenue Estimate": "$25 mil. - $50 mil.",
   "Employees": 1804,
   "Head Office": "New Stevenport, Delaware",
   "Country": "Canada",
   "Segmentation": "Mid-Market",
   "Activity": 3,
   "Generation": 3,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Silverline Innovations",
   "Assigned To": "Avery Reid",
   "Account Type": "Prospect",
   "Prospect Score": 90,
   "Account Notes": [
      "Nurture in Q3",
      "Placeholder"
   ],
   "Drop Notes": "Budget freeze",
   "Website": "www.mathews-gomez.com",
   "LinkedIn URL": "https://linkedin.com/company/252",
   "Revenue Estimate": "$100 mil. - $250 mil.",
   "Employees": 1303,
   "Head Office": "Jonesburgh, Tennessee",
   "Country": "United States",
   "Segmentation": "Enterprise",
   "Activity": 4,
   "Generation": 4,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Greenleaf Corporation",
   "Assigned To": "Blake Davis",
   "Account Type": "Customer",
   "Prospect Score": 65,
   "Account Notes": [
      "New lead",
      "Placeholder"
   ],
   "Drop Notes": "Do not call",
   "Website": "www.nicholson-jackson.com",
   "LinkedIn URL": "https://linkedin.com/company/205",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 147,
   "Head Office": "East Robin, Mississippi",
   "Country": "United States",
   "Segmentation": "SMB",
   "Activity": 5,
   "Generation": 5,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Greenleaf Analytics",
   "Assigned To": "Taylor Smith",
   "Account Type": "Customer",
   "Prospect Score": 61,
   "Account Notes": [
      "Nurture in Q3",
      "Placeholder"
   ],
   "Drop Notes": "Do not call",
   "Website": "www.cox.com",
   "LinkedIn URL": "https://linkedin.com/company/879",
   "Revenue Estimate": "$250 mil. - $500 mil.",
   "Employees": 1993,
   "Head Office": "Howardborough, Maine",
   "Country": "Canada",
   "Segmentation": "Mid-Market",
   "Activity": 6,
   "Generation": 6,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Momentum Industries",
   "Assigned To": "Sydney Wong",
   "Account Type": "Prospect",
   "Prospect Score": 82,
   "Account Notes": [
      "Strong pipeline",
      "Placeholder"
   ],
   "Drop Notes": "Do not call",
   "Website": "www.stone-powell.com",
   "LinkedIn URL": "https://linkedin.com/company/424",
   "Revenue Estimate": "$250 mil. - $500 mil.",
   "Employees": 1933,
   "Head Office": "Bennettstad, Minnesota",
   "Country": "Australia",
   "Segmentation": "Enterprise",
   "Activity": 6,
   "Generation": 6,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Radiant Analytics",
   "Assigned To": "Jordan Green",
   "Account Type": "Customer",
   "Prospect Score": 62,
   "Account Notes": [
      "New lead",
      "Placeholder"
   ],
   "Drop Notes": "Nurture",
   "Website": "www.stone-hudson.com",
   "LinkedIn URL": "https://linkedin.com/company/978",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 884,
   "Head Office": "East Matthewport, Ohio",
   "Country": "United Kingdom",
   "Segmentation": "Enterprise",
   "Activity": 7,
   "Generation": 7,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Apex Networks",
   "Assigned To": "Taylor Smith",
   "Account Type": "Prospect",
   "Prospect Score": 84,
   "Account Notes": [
      "New lead",
      "Placeholder"
   ],
   "Drop Notes": "Out of territory",
   "Website": "www.thomas-hernandez.com",
   "LinkedIn URL": "https://linkedin.com/company/434",
   "Revenue Estimate": "$250 mil. - $500 mil.",
   "Employees": 1341,
   "Head Office": "Duaneview, Maryland",
   "Country": "Canada",
   "Segmentation": "Enterprise",
   "Activity": 1,
   "Generation": 1,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Valiant Innovations",
   "Assigned To": "Taylor Smith",
   "Account Type": "Customer",
   "Prospect Score": 63,
   "Account Notes": [
      "VC-backed",
      "Placeholder"
   ],
   "Drop Notes": "Out of territory",
   "Website": "www.lynch.com",
   "LinkedIn URL": "https://linkedin.com/company/779",
   "Revenue Estimate": "$10 mil. - $25 mil.",
   "Employees": 489,
   "Head Office": "Jennifermouth, Wyoming",
   "Country": "Germany",
   "Segmentation": "Mid-Market",
   "Activity": 2,
   "Generation": 2,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Everest Innovations",
   "Assigned To": "Taylor Smith",
   "Account Type": "Customer",
   "Prospect Score": 65,
   "Account Notes": [
      "Nurture in Q3",
      "Placeholder"
   ],
   "Drop Notes": "Out of territory",
   "Website": "www.hill.com",
   "LinkedIn URL": "https://linkedin.com/company/422",
   "Revenue Estimate": "$250 mil. - $500 mil.",
   "Employees": 452,
   "Head Office": "Seanmouth, South Carolina",
   "Country": "Canada",
   "Segmentation": "Mid-Market",
   "Activity": 3,
   "Generation": 3,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Quantum Networks",
   "Assigned To": "Blake Davis",
   "Account Type": "Suspect",
   "Prospect Score": 65,
   "Account Notes": [
      "Repeat outreach",
      "Placeholder"
   ],
   "Drop Notes": "Wrong fit",
   "Website": "www.hall-phillips.com",
   "LinkedIn URL": "https://linkedin.com/company/273",
   "Revenue Estimate": "$250 mil. - $500 mil.",
   "Employees": 1379,
   "Head Office": "New Eric, New Mexico",
   "Country": "France",
   "Segmentation": "Enterprise",
   "Activity": 4,
   "Generation": 4,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Aspire Services",
   "Assigned To": "Jordan Green",
   "Account Type": "Prospect",
   "Prospect Score": 80,
   "Account Notes": [
      "Repeat outreach",
      "Placeholder"
   ],
   "Drop Notes": "Do not call",
   "Website": "www.austin.com",
   "LinkedIn URL": "https://linkedin.com/company/379",
   "Revenue Estimate": "$100 mil. - $250 mil.",
   "Employees": 1026,
   "Head Office": "Joyceberg, Arizona",
   "Country": "Australia",
   "Segmentation": "Mid-Market",
   "Activity": 1,
   "Generation": 1,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Quantum Corporation",
   "Assigned To": "Morgan Lee",
   "Account Type": "Prospect",
   "Prospect Score": 77,
   "Account Notes": [
      "Repeat outreach",
      "Placeholder"
   ],
   "Drop Notes": "Budget freeze",
   "Website": "www.davis.com",
   "LinkedIn URL": "https://linkedin.com/company/897",
   "Revenue Estimate": "$10 mil. - $25 mil.",
   "Employees": 1678,
   "Head Office": "West Luke, Arkansas",
   "Country": "United States",
   "Segmentation": "Mid-Market",
   "Activity": 2,
   "Generation": 2,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Quantum Consulting",
   "Assigned To": "Blake Davis",
   "Account Type": "Customer",
   "Prospect Score": 73,
   "Account Notes": [
      "Strong pipeline",
      "Placeholder"
   ],
   "Drop Notes": "Nurture",
   "Website": "www.nguyen-scott.com",
   "LinkedIn URL": "https://linkedin.com/company/442",
   "Revenue Estimate": "$10 mil. - $25 mil.",
   "Employees": 1557,
   "Head Office": "Carriemouth, West Virginia",
   "Country": "United States",
   "Segmentation": "Mid-Market",
   "Activity": 3,
   "Generation": 3,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "BlueSky Services",
   "Assigned To": "Taylor Smith",
   "Account Type": "Prospect",
   "Prospect Score": 64,
   "Account Notes": [
      "Repeat outreach",
      "Placeholder"
   ],
   "Drop Notes": "Budget freeze",
   "Website": "www.ferguson-lopez.com",
   "LinkedIn URL": "https://linkedin.com/company/635",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 1638,
   "Head Office": "North Andrea, Mississippi",
   "Country": "Australia",
   "Segmentation": "Mid-Market",
   "Activity": 4,
   "Generation": 4,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Atlas Industries",
   "Assigned To": "Jordan Green",
   "Account Type": "Suspect",
   "Prospect Score": 74,
   "Account Notes": [
      "Strong pipeline",
      "Placeholder"
   ],
   "Drop Notes": "Do not call",
   "Website": "www.wilson.com",
   "LinkedIn URL": "https://linkedin.com/company/745",
   "Revenue Estimate": "$10 mil. - $25 mil.",
   "Employees": 1039,
   "Head Office": "Sethmouth, South Dakota",
   "Country": "France",
   "Segmentation": "SMB",
   "Activity": 5,
   "Generation": 5,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Momentum Services",
   "Assigned To": "Avery Reid",
   "Account Type": "Suspect",
   "Prospect Score": 72,
   "Account Notes": [
      "VC-backed",
      "Placeholder"
   ],
   "Drop Notes": "Wrong fit",
   "Website": "www.wilson-barry.com",
   "LinkedIn URL": "https://linkedin.com/company/372",
   "Revenue Estimate": "$100 mil. - $250 mil.",
   "Employees": 599,
   "Head Office": "North Donna, South Carolina",
   "Country": "Canada",
   "Segmentation": "Enterprise",
   "Activity": 6,
   "Generation": 6,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Cypress Networks",
   "Assigned To": "Morgan Lee",
   "Account Type": "Suspect",
   "Prospect Score": 84,
   "Account Notes": [
      "Top 10 account",
      "Placeholder"
   ],
   "Drop Notes": "Do not call",
   "Website": "www.krause.com",
   "LinkedIn URL": "https://linkedin.com/company/663",
   "Revenue Estimate": "$250 mil. - $500 mil.",
   "Employees": 712,
   "Head Office": "Port Vickimouth, Alabama",
   "Country": "United States",
   "Segmentation": "Enterprise",
   "Activity": 6,
   "Generation": 6,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Cypress Analytics",
   "Assigned To": "Blake Davis",
   "Account Type": "Customer",
   "Prospect Score": 90,
   "Account Notes": [
      "Needs follow up",
      "Placeholder"
   ],
   "Drop Notes": "Wrong fit",
   "Website": "www.gay-johnson.com",
   "LinkedIn URL": "https://linkedin.com/company/541",
   "Revenue Estimate": "$10 mil. - $25 mil.",
   "Employees": 1068,
   "Head Office": "Carlystad, New Jersey",
   "Country": "France",
   "Segmentation": "SMB",
   "Activity": 7,
   "Generation": 7,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Vertex Industries",
   "Assigned To": "Taylor Smith",
   "Account Type": "Prospect",
   "Prospect Score": 61,
   "Account Notes": [
      "Nurture in Q3",
      "Placeholder"
   ],
   "Drop Notes": "Do not call",
   "Website": "www.morrow.com",
   "LinkedIn URL": "https://linkedin.com/company/446",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 764,
   "Head Office": "West Jonathan, Utah",
   "Country": "Germany",
   "Segmentation": "Enterprise",
   "Activity": 1,
   "Generation": 1,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Cypress Corporation",
   "Assigned To": "Taylor Smith",
   "Account Type": "Prospect",
   "Prospect Score": 62,
   "Account Notes": [
      "Referred by analyst",
      "Placeholder"
   ],
   "Drop Notes": "Lost to competition",
   "Website": "www.king.com",
   "LinkedIn URL": "https://linkedin.com/company/973",
   "Revenue Estimate": "$25 mil. - $50 mil.",
   "Employees": 226,
   "Head Office": "Taylorstad, North Carolina",
   "Country": "United States",
   "Segmentation": "Enterprise",
   "Activity": 2,
   "Generation": 2,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Momentum Technologies",
   "Assigned To": "Jordan Green",
   "Account Type": "Suspect",
   "Prospect Score": 77,
   "Account Notes": [
      "Top 10 account",
      "Placeholder"
   ],
   "Drop Notes": "Lost to competition",
   "Website": "www.cross.com",
   "LinkedIn URL": "https://linkedin.com/company/128",
   "Revenue Estimate": "$100 mil. - $250 mil.",
   "Employees": 1297,
   "Head Office": "Jacksonmouth, Connecticut",
   "Country": "Canada",
   "Segmentation": "SMB",
   "Activity": 3,
   "Generation": 3,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Everest Services",
   "Assigned To": "Jordan Green",
   "Account Type": "Customer",
   "Prospect Score": 88,
   "Account Notes": [
      "Nurture in Q3",
      "Placeholder"
   ],
   "Drop Notes": "Nurture",
   "Website": "www.ramirez.com",
   "LinkedIn URL": "https://linkedin.com/company/100",
   "Revenue Estimate": "$25 mil. - $50 mil.",
   "Employees": 1508,
   "Head Office": "West William, Wisconsin",
   "Country": "Canada",
   "Segmentation": "SMB",
   "Activity": 4,
   "Generation": 4,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Greenleaf Technologies",
   "Assigned To": "Avery Reid",
   "Account Type": "Suspect",
   "Prospect Score": 88,
   "Account Notes": [
      "Referred by analyst",
      "Placeholder"
   ],
   "Drop Notes": "Out of territory",
   "Website": "www.vang-kelley.com",
   "LinkedIn URL": "https://linkedin.com/company/733",
   "Revenue Estimate": "$10 mil. - $25 mil.",
   "Employees": 1593,
   "Head Office": "Anthonyhaven, Rhode Island",
   "Country": "Germany",
   "Segmentation": "Mid-Market",
   "Activity": 1,
   "Generation": 1,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Pinnacle Consulting",
   "Assigned To": "Morgan Lee",
   "Account Type": "Customer",
   "Prospect Score": 82,
   "Account Notes": [
      "Top 10 account",
      "Placeholder"
   ],
   "Drop Notes": "Out of territory",
   "Website": "www.howard.com",
   "LinkedIn URL": "https://linkedin.com/company/134",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 1524,
   "Head Office": "New Luke, Illinois",
   "Country": "Germany",
   "Segmentation": "Enterprise",
   "Activity": 2,
   "Generation": 2,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Vertex Corporation",
   "Assigned To": "Taylor Smith",
   "Account Type": "Prospect",
   "Prospect Score": 69,
   "Account Notes": [
      "VC-backed",
      "Placeholder"
   ],
   "Drop Notes": "Budget freeze",
   "Website": "www.thomas.com",
   "LinkedIn URL": "https://linkedin.com/company/938",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 983,
   "Head Office": "Duaneview, Louisiana",
   "Country": "United Kingdom",
   "Segmentation": "SMB",
   "Activity": 3,
   "Generation": 3,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Silverline Solutions",
   "Assigned To": "Taylor Smith",
   "Account Type": "Suspect",
   "Prospect Score": 90,
   "Account Notes": [
      "Nurture in Q3",
      "Placeholder"
   ],
   "Drop Notes": "Out of territory",
   "Website": "www.vargas-morgan.com",
   "LinkedIn URL": "https://linkedin.com/company/502",
   "Revenue Estimate": "$100 mil. - $250 mil.",
   "Employees": 1147,
   "Head Office": "Wilsonmouth, Maine",
   "Country": "United Kingdom",
   "Segmentation": "Enterprise",
   "Activity": 4,
   "Generation": 4,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "NexGen Networks",
   "Assigned To": "Morgan Lee",
   "Account Type": "Customer",
   "Prospect Score": 89,
   "Account Notes": [
      "Upsell potential",
      "Placeholder"
   ],
   "Drop Notes": "Out of territory",
   "Website": "www.nguyen.com",
   "LinkedIn URL": "https://linkedin.com/company/133",
   "Revenue Estimate": "$100 mil. - $250 mil.",
   "Employees": 1350,
   "Head Office": "Thompsonside, Mississippi",
   "Country": "France",
   "Segmentation": "Enterprise",
   "Activity": 5,
   "Generation": 5,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Momentum Innovations",
   "Assigned To": "Taylor Smith",
   "Account Type": "Customer",
   "Prospect Score": 70,
   "Account Notes": [
      "Upsell potential",
      "Placeholder"
   ],
   "Drop Notes": "Out of territory",
   "Website": "www.smith.com",
   "LinkedIn URL": "https://linkedin.com/company/925",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 1479,
   "Head Office": "Holdenbury, Massachusetts",
   "Country": "Germany",
   "Segmentation": "Enterprise",
   "Activity": 6,
   "Generation": 6,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Valiant Corporation",
   "Assigned To": "Morgan Lee",
   "Account Type": "Customer",
   "Prospect Score": 76,
   "Account Notes": [
      "Needs follow up",
      "Placeholder"
   ],
   "Drop Notes": "Lost to competition",
   "Website": "www.guzman.com",
   "LinkedIn URL": "https://linkedin.com/company/545",
   "Revenue Estimate": "$100 mil. - $250 mil.",
   "Employees": 1103,
   "Head Office": "Seanfort, Oregon",
   "Country": "Germany",
   "Segmentation": "Enterprise",
   "Activity": 6,
   "Generation": 6,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Summit Technologies",
   "Assigned To": "Blake Davis",
   "Account Type": "Prospect",
   "Prospect Score": 72,
   "Account Notes": [
      "Repeat outreach",
      "Placeholder"
   ],
   "Drop Notes": "Wrong fit",
   "Website": "www.taylor.com",
   "LinkedIn URL": "https://linkedin.com/company/367",
   "Revenue Estimate": "$100 mil. - $250 mil.",
   "Employees": 494,
   "Head Office": "Justinstad, Nebraska",
   "Country": "United States",
   "Segmentation": "Mid-Market",
   "Activity": 7,
   "Generation": 7,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Vanguard Corporation",
   "Assigned To": "Sydney Wong",
   "Account Type": "Suspect",
   "Prospect Score": 72,
   "Account Notes": [
      "New lead",
      "Placeholder"
   ],
   "Drop Notes": "Do not call",
   "Website": "www.blair.com",
   "LinkedIn URL": "https://linkedin.com/company/734",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 244,
   "Head Office": "Patrickhaven, Vermont",
   "Country": "Canada",
   "Segmentation": "Enterprise",
   "Activity": 1,
   "Generation": 1,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Trinity Innovations",
   "Assigned To": "Avery Reid",
   "Account Type": "Suspect",
   "Prospect Score": 81,
   "Account Notes": [
      "Upsell potential",
      "Placeholder"
   ],
   "Drop Notes": "Budget freeze",
   "Website": "www.lee.com",
   "LinkedIn URL": "https://linkedin.com/company/749",
   "Revenue Estimate": "$250 mil. - $500 mil.",
   "Employees": 969,
   "Head Office": "South Evanport, Indiana",
   "Country": "Australia",
   "Segmentation": "Mid-Market",
   "Activity": 2,
   "Generation": 2,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Quantum Services",
   "Assigned To": "Blake Davis",
   "Account Type": "Prospect",
   "Prospect Score": 63,
   "Account Notes": [
      "Budget review pending",
      "Placeholder"
   ],
   "Drop Notes": "Nurture",
   "Website": "www.jones.com",
   "LinkedIn URL": "https://linkedin.com/company/961",
   "Revenue Estimate": "$25 mil. - $50 mil.",
   "Employees": 1031,
   "Head Office": "East Michaelland, Iowa",
   "Country": "United Kingdom",
   "Segmentation": "Mid-Market",
   "Activity": 3,
   "Generation": 3,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Apex Innovations",
   "Assigned To": "Sydney Wong",
   "Account Type": "Prospect",
   "Prospect Score": 83,
   "Account Notes": [
      "Strong pipeline",
      "Placeholder"
   ],
   "Drop Notes": "Out of territory",
   "Website": "www.rogers.com",
   "LinkedIn URL": "https://linkedin.com/company/498",
   "Revenue Estimate": "$250 mil. - $500 mil.",
   "Employees": 1450,
   "Head Office": "Port Danielville, North Dakota",
   "Country": "Australia",
   "Segmentation": "Mid-Market",
   "Activity": 4,
   "Generation": 4,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Synergy Analytics",
   "Assigned To": "Morgan Lee",
   "Account Type": "Customer",
   "Prospect Score": 84,
   "Account Notes": [
      "Budget review pending",
      "Placeholder"
   ],
   "Drop Notes": "Lost to competition",
   "Website": "www.bird.com",
   "LinkedIn URL": "https://linkedin.com/company/808",
   "Revenue Estimate": "$10 mil. - $25 mil.",
   "Employees": 1566,
   "Head Office": "Turnershire, South Carolina",
   "Country": "United Kingdom",
   "Segmentation": "Enterprise",
   "Activity": 1,
   "Generation": 1,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Synergy Industries",
   "Assigned To": "Avery Reid",
   "Account Type": "Prospect",
   "Prospect Score": 61,
   "Account Notes": [
      "VC-backed",
      "Placeholder"
   ],
   "Drop Notes": "Lost to competition",
   "Website": "www.johnson.com",
   "LinkedIn URL": "https://linkedin.com/company/293",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 915,
   "Head Office": "Port Jason, Michigan",
   "Country": "France",
   "Segmentation": "SMB",
   "Activity": 2,
   "Generation": 2,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Greenleaf Analytics",
   "Assigned To": "Blake Davis",
   "Account Type": "Suspect",
   "Prospect Score": 86,
   "Account Notes": [
      "Upsell potential",
      "Placeholder"
   ],
   "Drop Notes": "Nurture",
   "Website": "www.lee.com",
   "LinkedIn URL": "https://linkedin.com/company/852",
   "Revenue Estimate": "$100 mil. - $250 mil.",
   "Employees": 490,
   "Head Office": "Travishaven, North Carolina",
   "Country": "Canada",
   "Segmentation": "SMB",
   "Activity": 3,
   "Generation": 3,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Greenleaf Industries",
   "Assigned To": "Blake Davis",
   "Account Type": "Customer",
   "Prospect Score": 80,
   "Account Notes": [
      "Repeat outreach",
      "Placeholder"
   ],
   "Drop Notes": "Out of territory",
   "Website": "www.allen.com",
   "LinkedIn URL": "https://linkedin.com/company/268",
   "Revenue Estimate": "$100 mil. - $250 mil.",
   "Employees": 1449,
   "Head Office": "Davidborough, Massachusetts",
   "Country": "Germany",
   "Segmentation": "SMB",
   "Activity": 4,
   "Generation": 4,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Summit Partners",
   "Assigned To": "Jordan Green",
   "Account Type": "Prospect",
   "Prospect Score": 70,
   "Account Notes": [
      "Nurture in Q3",
      "Placeholder"
   ],
   "Drop Notes": "Lost to competition",
   "Website": "www.mcguire-wilson.com",
   "LinkedIn URL": "https://linkedin.com/company/968",
   "Revenue Estimate": "$25 mil. - $50 mil.",
   "Employees": 1004,
   "Head Office": "Michelleville, Oklahoma",
   "Country": "Australia",
   "Segmentation": "Mid-Market",
   "Activity": 5,
   "Generation": 5,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Apex Consulting",
   "Assigned To": "Taylor Smith",
   "Account Type": "Customer",
   "Prospect Score": 89,
   "Account Notes": [
      "VC-backed",
      "Placeholder"
   ],
   "Drop Notes": "Lost to competition",
   "Website": "www.prince.com",
   "LinkedIn URL": "https://linkedin.com/company/801",
   "Revenue Estimate": "$100 mil. - $250 mil.",
   "Employees": 474,
   "Head Office": "Rileybury, Washington",
   "Country": "Canada",
   "Segmentation": "Mid-Market",
   "Activity": 6,
   "Generation": 6,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Everest Partners",
   "Assigned To": "Sydney Wong",
   "Account Type": "Customer",
   "Prospect Score": 79,
   "Account Notes": [
      "Repeat outreach",
      "Placeholder"
   ],
   "Drop Notes": "Wrong fit",
   "Website": "www.stanley-valenzuela.com",
   "LinkedIn URL": "https://linkedin.com/company/302",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 1246,
   "Head Office": "South Charlesstad, Tennessee",
   "Country": "Germany",
   "Segmentation": "SMB",
   "Activity": 6,
   "Generation": 6,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Vanguard Industries",
   "Assigned To": "Taylor Smith",
   "Account Type": "Suspect",
   "Prospect Score": 71,
   "Account Notes": [
      "Strong pipeline",
      "Placeholder"
   ],
   "Drop Notes": "Wrong fit",
   "Website": "www.bennett-harvey.com",
   "LinkedIn URL": "https://linkedin.com/company/124",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 1807,
   "Head Office": "Jonathanberg, Wisconsin",
   "Country": "Canada",
   "Segmentation": "Mid-Market",
   "Activity": 7,
   "Generation": 7,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Greenleaf Services",
   "Assigned To": "Taylor Smith",
   "Account Type": "Suspect",
   "Prospect Score": 89,
   "Account Notes": [
      "Referred by analyst",
      "Placeholder"
   ],
   "Drop Notes": "Do not call",
   "Website": "www.moore.com",
   "LinkedIn URL": "https://linkedin.com/company/323",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 1111,
   "Head Office": "Christophertown, Arizona",
   "Country": "Australia",
   "Segmentation": "Enterprise",
   "Activity": 1,
   "Generation": 1,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Silverline Industries",
   "Assigned To": "Avery Reid",
   "Account Type": "Customer",
   "Prospect Score": 86,
   "Account Notes": [
      "Needs follow up",
      "Placeholder"
   ],
   "Drop Notes": "Budget freeze",
   "Website": "www.palmer-brown.com",
   "LinkedIn URL": "https://linkedin.com/company/414",
   "Revenue Estimate": "$250 mil. - $500 mil.",
   "Employees": 231,
   "Head Office": "Port Loriborough, Nebraska",
   "Country": "Australia",
   "Segmentation": "SMB",
   "Activity": 2,
   "Generation": 2,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Premier Innovations",
   "Assigned To": "Sydney Wong",
   "Account Type": "Suspect",
   "Prospect Score": 77,
   "Account Notes": [
      "New lead",
      "Placeholder"
   ],
   "Drop Notes": "Budget freeze",
   "Website": "www.johnson.com",
   "LinkedIn URL": "https://linkedin.com/company/476",
   "Revenue Estimate": "$250 mil. - $500 mil.",
   "Employees": 103,
   "Head Office": "North Amymouth, Kansas",
   "Country": "Canada",
   "Segmentation": "Mid-Market",
   "Activity": 3,
   "Generation": 3,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Pinnacle Solutions",
   "Assigned To": "Jordan Green",
   "Account Type": "Suspect",
   "Prospect Score": 65,
   "Account Notes": [
      "Budget review pending",
      "Placeholder"
   ],
   "Drop Notes": "Budget freeze",
   "Website": "www.brewer-foley.com",
   "LinkedIn URL": "https://linkedin.com/company/595",
   "Revenue Estimate": "$10 mil. - $25 mil.",
   "Employees": 1485,
   "Head Office": "Floreschester, Arizona",
   "Country": "France",
   "Segmentation": "SMB",
   "Activity": 4,
   "Generation": 4,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Valiant Technologies",
   "Assigned To": "Blake Davis",
   "Account Type": "Suspect",
   "Prospect Score": 63,
   "Account Notes": [
      "Referred by analyst",
      "Placeholder"
   ],
   "Drop Notes": "Lost to competition",
   "Website": "www.anderson.com",
   "LinkedIn URL": "https://linkedin.com/company/926",
   "Revenue Estimate": "$250 mil. - $500 mil.",
   "Employees": 1592,
   "Head Office": "North Brendaton, Iowa",
   "Country": "United States",
   "Segmentation": "Mid-Market",
   "Activity": 1,
   "Generation": 1,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Atlas Technologies",
   "Assigned To": "Taylor Smith",
   "Account Type": "Suspect",
   "Prospect Score": 77,
   "Account Notes": [
      "New lead",
      "Placeholder"
   ],
   "Drop Notes": "Do not call",
   "Website": "www.price-taylor.com",
   "LinkedIn URL": "https://linkedin.com/company/958",
   "Revenue Estimate": "$250 mil. - $500 mil.",
   "Employees": 1660,
   "Head Office": "East Kimberlymouth, Kentucky",
   "Country": "Australia",
   "Segmentation": "Mid-Market",
   "Activity": 2,
   "Generation": 2,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Cypress Consulting",
   "Assigned To": "Blake Davis",
   "Account Type": "Customer",
   "Prospect Score": 73,
   "Account Notes": [
      "Repeat outreach",
      "Placeholder"
   ],
   "Drop Notes": "Do not call",
   "Website": "www.glass.com",
   "LinkedIn URL": "https://linkedin.com/company/530",
   "Revenue Estimate": "$100 mil. - $250 mil.",
   "Employees": 636,
   "Head Office": "Robertfort, Alaska",
   "Country": "France",
   "Segmentation": "Enterprise",
   "Activity": 3,
   "Generation": 3,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Quantum Consulting",
   "Assigned To": "Sydney Wong",
   "Account Type": "Suspect",
   "Prospect Score": 89,
   "Account Notes": [
      "Referred by analyst",
      "Placeholder"
   ],
   "Drop Notes": "Do not call",
   "Website": "www.diaz.com",
   "LinkedIn URL": "https://linkedin.com/company/685",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 541,
   "Head Office": "North Rebeccaville, Mississippi",
   "Country": "Australia",
   "Segmentation": "Mid-Market",
   "Activity": 4,
   "Generation": 4,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Trinity Innovations",
   "Assigned To": "Blake Davis",
   "Account Type": "Customer",
   "Prospect Score": 83,
   "Account Notes": [
      "Nurture in Q3",
      "Placeholder"
   ],
   "Drop Notes": "Budget freeze",
   "Website": "www.velez.com",
   "LinkedIn URL": "https://linkedin.com/company/930",
   "Revenue Estimate": "$250 mil. - $500 mil.",
   "Employees": 1958,
   "Head Office": "Christopherton, Alaska",
   "Country": "United States",
   "Segmentation": "Enterprise",
   "Activity": 5,
   "Generation": 5,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Trinity Solutions",
   "Assigned To": "Sydney Wong",
   "Account Type": "Customer",
   "Prospect Score": 62,
   "Account Notes": [
      "Nurture in Q3",
      "Placeholder"
   ],
   "Drop Notes": "Wrong fit",
   "Website": "www.ramirez.com",
   "LinkedIn URL": "https://linkedin.com/company/698",
   "Revenue Estimate": "$25 mil. - $50 mil.",
   "Employees": 215,
   "Head Office": "West Alexfort, Indiana",
   "Country": "Canada",
   "Segmentation": "SMB",
   "Activity": 6,
   "Generation": 6,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Everest Analytics",
   "Assigned To": "Sydney Wong",
   "Account Type": "Customer",
   "Prospect Score": 87,
   "Account Notes": [
      "VC-backed",
      "Placeholder"
   ],
   "Drop Notes": "Lost to competition",
   "Website": "www.contreras.com",
   "LinkedIn URL": "https://linkedin.com/company/720",
   "Revenue Estimate": "$25 mil. - $50 mil.",
   "Employees": 508,
   "Head Office": "Jonburgh, Colorado",
   "Country": "Canada",
   "Segmentation": "Enterprise",
   "Activity": 6,
   "Generation": 6,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Quantum Networks",
   "Assigned To": "Taylor Smith",
   "Account Type": "Prospect",
   "Prospect Score": 72,
   "Account Notes": [
      "Needs follow up",
      "Placeholder"
   ],
   "Drop Notes": "Do not call",
   "Website": "www.smith.com",
   "LinkedIn URL": "https://linkedin.com/company/960",
   "Revenue Estimate": "$100 mil. - $250 mil.",
   "Employees": 1525,
   "Head Office": "Gonzalezton, South Carolina",
   "Country": "United States",
   "Segmentation": "Mid-Market",
   "Activity": 7,
   "Generation": 7,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Summit Corporation",
   "Assigned To": "Sydney Wong",
   "Account Type": "Suspect",
   "Prospect Score": 72,
   "Account Notes": [
      "VC-backed",
      "Placeholder"
   ],
   "Drop Notes": "Lost to competition",
   "Website": "www.hawkins-anderson.com",
   "LinkedIn URL": "https://linkedin.com/company/990",
   "Revenue Estimate": "$10 mil. - $25 mil.",
   "Employees": 666,
   "Head Office": "Michellefurt, Vermont",
   "Country": "United Kingdom",
   "Segmentation": "Enterprise",
   "Activity": 9,
   "Generation": 9,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Apex Analytics",
   "Assigned To": "Jordan Green",
   "Account Type": "Customer",
   "Prospect Score": 71,
   "Account Notes": [
      "Referred by analyst",
      "Placeholder"
   ],
   "Drop Notes": "Budget freeze",
   "Website": "www.olson-miranda.com",
   "LinkedIn URL": "https://linkedin.com/company/235",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 849,
   "Head Office": "Marthatown, Nevada",
   "Country": "France",
   "Segmentation": "SMB",
   "Activity": 1,
   "Generation": 1,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Valiant Consulting",
   "Assigned To": "Avery Reid",
   "Account Type": "Customer",
   "Prospect Score": 75,
   "Account Notes": [
      "Nurture in Q3",
      "Placeholder"
   ],
   "Drop Notes": "Do not call",
   "Website": "www.rogers-mcclure.com",
   "LinkedIn URL": "https://linkedin.com/company/451",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 550,
   "Head Office": "Autumnmouth, Oregon",
   "Country": "France",
   "Segmentation": "Mid-Market",
   "Activity": 2,
   "Generation": 2,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Everest Analytics",
   "Assigned To": "Blake Davis",
   "Account Type": "Suspect",
   "Prospect Score": 67,
   "Account Notes": [
      "Repeat outreach",
      "Placeholder"
   ],
   "Drop Notes": "Do not call",
   "Website": "www.dennis.com",
   "LinkedIn URL": "https://linkedin.com/company/582",
   "Revenue Estimate": "$25 mil. - $50 mil.",
   "Employees": 716,
   "Head Office": "Maryborough, Nebraska",
   "Country": "Canada",
   "Segmentation": "SMB",
   "Activity": 3,
   "Generation": 3,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "NexGen Industries",
   "Assigned To": "Jordan Green",
   "Account Type": "Suspect",
   "Prospect Score": 90,
   "Account Notes": [
      "VC-backed",
      "Placeholder"
   ],
   "Drop Notes": "Out of territory",
   "Website": "www.jacobson.com",
   "LinkedIn URL": "https://linkedin.com/company/329",
   "Revenue Estimate": "$100 mil. - $250 mil.",
   "Employees": 1021,
   "Head Office": "Duaneburgh, South Carolina",
   "Country": "United Kingdom",
   "Segmentation": "Enterprise",
   "Activity": 4,
   "Generation": 4,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Momentum Innovations",
   "Assigned To": "Morgan Lee",
   "Account Type": "Customer",
   "Prospect Score": 89,
   "Account Notes": [
      "New lead",
      "Placeholder"
   ],
   "Drop Notes": "Wrong fit",
   "Website": "www.kennedy.com",
   "LinkedIn URL": "https://linkedin.com/company/182",
   "Revenue Estimate": "$10 mil. - $25 mil.",
   "Employees": 1834,
   "Head Office": "West Veronica, West Virginia",
   "Country": "Canada",
   "Segmentation": "Mid-Market",
   "Activity": 5,
   "Generation": 5,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Apex Analytics",
   "Assigned To": "Jordan Green",
   "Account Type": "Suspect",
   "Prospect Score": 63,
   "Account Notes": [
      "Needs follow up",
      "Placeholder"
   ],
   "Drop Notes": "Wrong fit",
   "Website": "www.hurley-bowman.com",
   "LinkedIn URL": "https://linkedin.com/company/868",
   "Revenue Estimate": "$100 mil. - $250 mil.",
   "Employees": 752,
   "Head Office": "West Annettefurt, Idaho",
   "Country": "Germany",
   "Segmentation": "SMB",
   "Activity": 6,
   "Generation": 6,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Premier Solutions",
   "Assigned To": "Jordan Green",
   "Account Type": "Customer",
   "Prospect Score": 81,
   "Account Notes": [
      "Needs follow up",
      "Placeholder"
   ],
   "Drop Notes": "Nurture",
   "Website": "www.johnson.com",
   "LinkedIn URL": "https://linkedin.com/company/450",
   "Revenue Estimate": "$25 mil. - $50 mil.",
   "Employees": 1896,
   "Head Office": "North Barbaramouth, Nebraska",
   "Country": "Canada",
   "Segmentation": "Mid-Market",
   "Activity": 6,
   "Generation": 6,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Atlas Innovations",
   "Assigned To": "Blake Davis",
   "Account Type": "Suspect",
   "Prospect Score": 70,
   "Account Notes": [
      "Referred by analyst",
      "Placeholder"
   ],
   "Drop Notes": "Out of territory",
   "Website": "www.williams.com",
   "LinkedIn URL": "https://linkedin.com/company/552",
   "Revenue Estimate": "$25 mil. - $50 mil.",
   "Employees": 598,
   "Head Office": "Matthewfort, Connecticut",
   "Country": "United Kingdom",
   "Segmentation": "SMB",
   "Activity": 7,
   "Generation": 7,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Atlas Technologies",
   "Assigned To": "Blake Davis",
   "Account Type": "Prospect",
   "Prospect Score": 71,
   "Account Notes": [
      "Top 10 account",
      "Placeholder"
   ],
   "Drop Notes": "Lost to competition",
   "Website": "www.harris.com",
   "LinkedIn URL": "https://linkedin.com/company/781",
   "Revenue Estimate": "$250 mil. - $500 mil.",
   "Employees": 239,
   "Head Office": "West Wendyside, Arizona",
   "Country": "United States",
   "Segmentation": "Mid-Market",
   "Activity": 9,
   "Generation": 9,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Premier Analytics",
   "Assigned To": "Avery Reid",
   "Account Type": "Customer",
   "Prospect Score": 65,
   "Account Notes": [
      "New lead",
      "Placeholder"
   ],
   "Drop Notes": "Budget freeze",
   "Website": "www.arnold-johnson.com",
   "LinkedIn URL": "https://linkedin.com/company/822",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 253,
   "Head Office": "Summerville, Florida",
   "Country": "Australia",
   "Segmentation": "SMB",
   "Activity": 4,
   "Generation": 4,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Trinity Analytics",
   "Assigned To": "Taylor Smith",
   "Account Type": "Prospect",
   "Prospect Score": 82,
   "Account Notes": [
      "Budget review pending",
      "Placeholder"
   ],
   "Drop Notes": "Nurture",
   "Website": "www.sanders.com",
   "LinkedIn URL": "https://linkedin.com/company/775",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 298,
   "Head Office": "New Shawn, New York",
   "Country": "Australia",
   "Segmentation": "Mid-Market",
   "Activity": 5,
   "Generation": 5,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "NexGen Technologies",
   "Assigned To": "Jordan Green",
   "Account Type": "Prospect",
   "Prospect Score": 63,
   "Account Notes": [
      "Upsell potential",
      "Placeholder"
   ],
   "Drop Notes": "Budget freeze",
   "Website": "www.cohen.com",
   "LinkedIn URL": "https://linkedin.com/company/656",
   "Revenue Estimate": "$50 mil. - $100 mil.",
   "Employees": 1317,
   "Head Office": "Amberberg, New Mexico",
   "Country": "United Kingdom",
   "Segmentation": "Mid-Market",
   "Activity": 5,
   "Generation": 5,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Aspire Consulting",
   "Assigned To": "Blake Davis",
   "Account Type": "Suspect",
   "Prospect Score": 65,
   "Account Notes": [
      "Upsell potential",
      "Placeholder"
   ],
   "Drop Notes": "Nurture",
   "Website": "www.riley.com",
   "LinkedIn URL": "https://linkedin.com/company/972",
   "Revenue Estimate": "$100 mil. - $250 mil.",
   "Employees": 241,
   "Head Office": "South Kristin, Texas",
   "Country": "Canada",
   "Segmentation": "Enterprise",
   "Activity": 6,
   "Generation": 6,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Silverline Analytics",
   "Assigned To": "Sydney Wong",
   "Account Type": "Prospect",
   "Prospect Score": 88,
   "Account Notes": [
      "Needs follow up",
      "Placeholder"
   ],
   "Drop Notes": "Do not call",
   "Website": "www.walker-massey.com",
   "LinkedIn URL": "https://linkedin.com/company/641",
   "Revenue Estimate": "$25 mil. - $50 mil.",
   "Employees": 1300,
   "Head Office": "Lake Jeremyville, Michigan",
   "Country": "Australia",
   "Segmentation": "Enterprise",
   "Activity": 7,
   "Generation": 7,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
},
 {
   "Company Name": "Vertex Consulting",
   "Assigned To": "Avery Reid",
   "Account Type": "Suspect",
   "Prospect Score": 72,
   "Account Notes": [
      "Upsell potential",
      "Placeholder"
   ],
   "Drop Notes": "Wrong fit",
   "Website": "www.barnett.com",
   "LinkedIn URL": "https://linkedin.com/company/653",
   "Revenue Estimate": "$25 mil. - $50 mil.",
   "Employees": 797,
   "Head Office": "Castilloview, California",
   "Country": "Canada",
   "Segmentation": "Enterprise",
   "Activity": 9,
   "Generation": 9,
   "Interests": "Placeholder",
   "Location": "Placeholder",
   "SalesforceID": "0016g00000A1BCdEFA",
   "DropNotes": "Placeholder"
}
]
        ];
        
        this.filteredAccounts = [...this.accounts];
        this.renderTable();
        this.updateResultsCount();
        this.updateAccountSelector();
    }
    
    populateFilters() {
        // Populate Assigned To filter
        const assignedToFilter = document.getElementById('assignedToFilter');
        const assignedToSet = new Set(this.accounts.map(account => account['Assigned To']));
        
        assignedToFilter.innerHTML = '';
        assignedToSet.forEach(person => {
            const option = document.createElement('option');
            option.value = person;
            option.textContent = person;
            assignedToFilter.appendChild(option);
        });
    }
    
    setupEventListeners() {
        // Filter event listeners
        document.getElementById('revenueFilter').addEventListener('change', () => this.applyFilters());
        document.getElementById('minEmployees').addEventListener('input', () => this.debouncedFilter());
        document.getElementById('maxEmployees').addEventListener('input', () => this.debouncedFilter());
        document.getElementById('segmentationFilter').addEventListener('change', () => this.applyFilters());
        document.getElementById('assignedToFilter').addEventListener('change', () => this.applyFilters());
        document.getElementById('searchInput').addEventListener('input', () => this.debouncedFilter());
        
        // Clear filters button
        document.getElementById('clearFilters').addEventListener('click', () => this.clearFilters());
        
        // Export data button
        document.getElementById('exportData').addEventListener('click', () => this.exportData());
        
        // Table sorting
        document.querySelectorAll('.sortable').forEach(header => {
            header.addEventListener('click', () => this.sortTable(header.dataset.column));
        });
        
        // Account selector
        document.getElementById('accountSelector').addEventListener('change', (e) => {
            this.showAccountDetails(e.target.value);
        });
    }
    
    debouncedFilter() {
        clearTimeout(this.searchTimeout);
        this.showLoading(true);
        
        this.searchTimeout = setTimeout(() => {
            this.applyFilters();
        }, 300);
    }
    
    applyFilters() {
        const revenueFilter = Array.from(document.getElementById('revenueFilter').selectedOptions).map(o => o.value);
        const minEmployees = parseInt(document.getElementById('minEmployees').value) || 0;
        const maxEmployees = parseInt(document.getElementById('maxEmployees').value) || Infinity;
        const segmentationFilter = Array.from(document.getElementById('segmentationFilter').selectedOptions).map(o => o.value);
        const assignedToFilter = Array.from(document.getElementById('assignedToFilter').selectedOptions).map(o => o.value);
        const searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();
        
        this.filteredAccounts = this.accounts.filter(account => {
            // Revenue filter
            if (revenueFilter.length > 0 && !revenueFilter.includes(account['Revenue Estimate'])) {
                return false;
            }
            
            // Employee count filter
            const employees = account['Employees'];
            if (employees < minEmployees || employees > maxEmployees) {
                return false;
            }
            
            // Segmentation filter
            if (segmentationFilter.length > 0 && !segmentationFilter.includes(account['Segmentation'])) {
                return false;
            }
            
            // Assigned To filter
            if (assignedToFilter.length > 0 && !assignedToFilter.includes(account['Assigned To'])) {
                return false;
            }
            
            // Search filter
            if (searchQuery) {
                const searchableText = [
                    account['Company Name'],
                    account['Assigned To'],
                    account['Account Type'],
                    account['Head Office'],
                    account['Country'],
                    account['Account Notes'],
                    account['Drop Notes']
                ].join(' ').toLowerCase();
                
                if (!searchableText.includes(searchQuery)) {
                    return false;
                }
            }
            
            return true;
        });
        
        this.renderTable();
        this.updateResultsCount();
        this.updateAccountSelector();
        this.showLoading(false);
    }
    
    sortTable(column) {
        // Update sort direction
        if (this.currentSort.column === column) {
            this.currentSort.direction = this.currentSort.direction === 'asc' ? 'desc' : 'asc';
        } else {
            this.currentSort.column = column;
            this.currentSort.direction = 'asc';
        }
        
        // Sort filtered accounts
        this.filteredAccounts.sort((a, b) => {
            let aValue = a[column];
            let bValue = b[column];
            
            // Handle numeric values
            if (column === 'Employees' || column === 'Prospect Score') {
                aValue = Number(aValue);
                bValue = Number(bValue);
            }
            
            // Handle string comparison
            if (typeof aValue === 'string') {
                aValue = aValue.toLowerCase();
                bValue = bValue.toLowerCase();
            }
            
            let comparison = 0;
            if (aValue > bValue) comparison = 1;
            if (aValue < bValue) comparison = -1;
            
            return this.currentSort.direction === 'desc' ? -comparison : comparison;
        });
        
        this.renderTable();
        this.updateSortIndicators();
    }
    
    updateSortIndicators() {
        // Reset all sort indicators
        document.querySelectorAll('.sortable').forEach(header => {
            header.classList.remove('sort-asc', 'sort-desc');
        });
        
        // Add current sort indicator
        if (this.currentSort.column) {
            const header = document.querySelector(`[data-column="${this.currentSort.column}"]`);
            if (header) {
                header.classList.add(`sort-${this.currentSort.direction}`);
            }
        }
    }
    
    renderTable() {
        const tbody = document.getElementById('accountsTableBody');
        tbody.innerHTML = '';
        
        this.filteredAccounts.forEach(account => {
            const row = document.createElement('tr');
            
            const revenueClass = this.getRevenueClass(account['Revenue Estimate']);
            const statusBadgeClass = this.getStatusBadgeClass(account['Account Type']);
            
            row.innerHTML = `
                <td><strong>${account['Company Name']}</strong></td>
                <td>${account['Assigned To']}</td>
                <td><span class="status-badge ${statusBadgeClass}">${account['Account Type']}</span></td>
                <td><strong>${account['Prospect Score']}</strong></td>
                <td>${account['Account Notes']}</td>
                <td>${account['Drop Notes']}</td>
                <td class="link-cell"><a href="https://${account['Website']}" target="_blank">${account['Website']}</a></td>
                <td class="link-cell"><a href="${account['LinkedIn URL']}" target="_blank">LinkedIn</a></td>
                <td class="${revenueClass}">${account['Revenue Estimate']}</td>
                <td>${account['Employees'].toLocaleString()}</td>
                <td>${account['Head Office']}</td>
                <td>${account['Country']}</td>
                <td>${account['Segmentation']}</td>
            `;
            
            tbody.appendChild(row);
        });
    }
    
    getRevenueClass(revenue) {
        if (revenue.includes('$10 mil') || revenue.includes('$25 mil')) {
            return 'revenue-low';
        } else if (revenue.includes('$50 mil') || revenue.includes('$100 mil')) {
            return 'revenue-medium';
        } else {
            return 'revenue-high';
        }
    }
    
    getStatusBadgeClass(accountType) {
        return accountType.toLowerCase();
    }
    
    updateResultsCount() {
        const count = this.filteredAccounts.length;
        document.getElementById('resultsCount').textContent = `${count} account${count !== 1 ? 's' : ''} found`;
    }
    
    updateAccountSelector() {
        const selector = document.getElementById('accountSelector');
        const detailsSection = document.getElementById('accountDetailsSection');
        
        // Clear existing options
        selector.innerHTML = '<option value="">Choose an account...</option>';
        
        // Add options for filtered accounts
        this.filteredAccounts.forEach(account => {
            const option = document.createElement('option');
            option.value = account['Company Name'];
            option.textContent = account['Company Name'];
            selector.appendChild(option);
        });
        
        // Always show account details section when there are accounts
        if (this.filteredAccounts.length > 0) {
            detailsSection.classList.remove('hidden');
        } else {
            detailsSection.classList.add('hidden');
        }
        
        // Reset account details cards to hidden state
        document.getElementById('accountDetailsCards').classList.add('hidden');
        selector.value = '';
    }
    
    showAccountDetails(companyName) {
        const detailsCards = document.getElementById('accountDetailsCards');
        
        if (!companyName) {
            detailsCards.classList.add('hidden');
            return;
        }
        
        const account = this.filteredAccounts.find(acc => acc['Company Name'] === companyName);
        if (!account) return;
        
        detailsCards.classList.remove('hidden');
        
        // Update scoring with animation
        this.animateScore('activityScoreFill', 'activityScoreValue', account['Activity'], 10);
        this.animateScore('generationScoreFill', 'generationScoreValue', account['Generation'], 10);
        
        // Update account information
        document.getElementById('accountNotes').textContent = account['Account Notes'];
        document.getElementById('dropNotes').textContent = account['Drop Notes'];
        document.getElementById('salesforceId').textContent = account['SalesforceID'];
    }
    
    animateScore(fillElementId, valueElementId, score, maxScore) {
        const fillElement = document.getElementById(fillElementId);
        const valueElement = document.getElementById(valueElementId);
        const percentage = (score / maxScore) * 100;
        
        // Update value immediately
        valueElement.textContent = `${score}/${maxScore}`;
        
        // Reset and animate fill
        fillElement.style.width = '0%';
        fillElement.style.transition = 'none';
        
        // Force reflow then animate
        fillElement.offsetHeight;
        fillElement.style.transition = 'width 1s cubic-bezier(0.16, 1, 0.3, 1)';
        fillElement.style.width = `${percentage}%`;
    }
    
    clearFilters() {
        // Reset all filter inputs
        const revenueFilter = document.getElementById('revenueFilter');
        const segmentationFilter = document.getElementById('segmentationFilter');
        const assignedToFilter = document.getElementById('assignedToFilter');
        
        // Clear multi-select options
        Array.from(revenueFilter.options).forEach(option => option.selected = false);
        Array.from(segmentationFilter.options).forEach(option => option.selected = false);
        Array.from(assignedToFilter.options).forEach(option => option.selected = false);
        
        // Clear other inputs
        document.getElementById('minEmployees').value = '';
        document.getElementById('maxEmployees').value = '';
        document.getElementById('searchInput').value = '';
        
        // Reset account selector and hide details
        document.getElementById('accountSelector').value = '';
        document.getElementById('accountDetailsCards').classList.add('hidden');
        
        // Apply filters (which will show all accounts)
        this.applyFilters();
    }
    
    exportData() {
        if (this.filteredAccounts.length === 0) {
            alert('No data to export. Please adjust your filters.');
            return;
        }
        
        // Create CSV content
        const headers = Object.keys(this.filteredAccounts[0]);
        const csvContent = [
            headers.join(','),
            ...this.filteredAccounts.map(account => 
                headers.map(header => `"${account[header]}"`).join(',')
            )
        ].join('\n');
        
        // Create and trigger download
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'zoominfo_accounts_export.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }
    
    showLoading(show) {
        const indicator = document.getElementById('loadingIndicator');
        if (show) {
            indicator.classList.remove('hidden');
        } else {
            indicator.classList.add('hidden');
        }
    }
}

// Initialize the dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AccountDashboard();
});
