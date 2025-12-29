// This is an array set to the variable navRoutes. It will be the routing information for all the links used within the navbar. No need for export function down below since we have it up here 
export const navRoutes = [
    // Index 0
    {
        label: "Disasters",                                               // Label for the specific index of the array used as a unique key to identify for mapping function later as well as the dropdown button text
        path: "/disasters",                                               // This is the path that shows up in the url when the dropdown is clicked
        children: [                                                       // All the children defined for the Disasters dropdown button (the links item within the dropdown menu of the dropdown button when clicked)
            {label: "Hurricanes", path: "/disasters/hurricanes"},         // label: text that shows up as the clickable link path: What shows up in the url
            {label: "Tornadoes", path: "/disasters/tornadoes"},           // label: text that shows up as the clickable link path: What shows up in the url
            {label: "Flooding", path: "/disasters/flooding"},             // label: text that shows up as the clickable link path: What shows up in the url
            {label: "Wildfires", path: "/disasters/wildfires"},           // label: text that shows up as the clickable link path: What shows up in the url
            {label: "Drought", path: "/disasters/drought"}                // label: text that shows up as the clickable link path: What shows up in the url
        ]
    },
    // Index 1
    {
        label: "Resources",                                               // Label for the specific index of the array used as a unique key to identify for mapping function later as well as the dropdown button text
        path: "/resources",                                               // This is the path that shows up in the url when the dropdown is clicked
        children: [
            { label: "Expert Consultants", path: "/resources/experts" },             // label: text that shows up as the clickable link path: What shows up in the url
            { label: "Templates & Guides", path: "/resources/templates-guides"},     // label: text that shows up as the clickable link path: What shows up in the url
            { label: "Training & Exercises", path: "/resources/training-exercises"}, // label: text that shows up as the clickable link path: What shows up in the url
            { label: "Data & Tools", path: "/resources/data-tools"},                 // label: text that shows up as the clickable link path: What shows up in the url
            { label: "Grants & Funding", path: "/resources/grants-funding"}          // label: text that shows up as the clickable link path: What shows up in the url
        ]
    },
    // Index 2
    {
        label: "Response",                                                 // Label for the specific index of the array used as a unique key to identify for mapping function later as well as the dropdown button text
        path: "/response",                                                 // This is the path that shows up in the url when the dropdown is clicked
        children: [
            { label: "Incident Action Planning", path: "/response/iap"},                    // label: text that shows up as the clickable link path: What shows up in the url
            { label: "EOC Tools", path: "/response/eoc"},                                   // label: text that shows up as the clickable link path: What shows up in the url
            { label: "Public Information & Alerts", path: "/response/public-info-alerts"},  // label: text that shows up as the clickable link path: What shows up in the url
            { label: "Sheltering & Mass Care", path: "/response/sheltering-care"},          // label: text that shows up as the clickable link path: What shows up in the url
            { label: "Damage Assessment", path: "/response/damage-assessment"},             // label: text that shows up as the clickable link path: What shows up in the url
            { label: "Crisis Communications", path: "/response/crisis-communications"}      // label: text that shows up as the clickable link path: What shows up in the url
        ]
    },
    // Index 3
    {
        label: "Recovery",                                                 // Label for the specific index of the array used as a unique key to identify for mapping function later as well as the dropdown button text
        path: "/recovery",                                                 // This is the path that shows up in the url when the dropdown is clicked
        children: [
            { label: "Individual & Public Assistance", path: "/recovery/individual-public-assistance"},   // label: text that shows up as the clickable link path: What shows up in the url
            { label: "Debris & Infrastructure", path: "/recovery/debris-infrastructure"},                 // label: text that shows up as the clickable link path: What shows up in the url
            { label: "Mitigation & Resilience", path: "/recovery/mitigation-resilience"},                 // label: text that shows up as the clickable link path: What shows up in the url
            { label: "Community Recovery", path: "/recovery/community-recovery"},                         // label: text that shows up as the clickable link path: What shows up in the url
            { label: "After-Action Support", path: "/recovery/after-action-support"}                      // label: text that shows up as the clickable link path: What shows up in the url
        ]
    }
]