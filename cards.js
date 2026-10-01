// Card library for Card Advisor. To add or fix a card, edit this file and open a pull request.
// rates: points (or % back for cash back cards) per $1 by category. 'other' is the base rate.
// Category keys not listed fall back to 'travel' (for flights, hotels, brands and portals) and then to 'other'.
// perks: statement credits and benefits. per: m=month, q=quarter, h=half-year, y=calendar year, a=card anniversary year, 4y=four years. re: regex matched against statement credit lines. man: true means it never posts as a statement credit.
window.CARD_LIB={
  asOf:"Sept 28, 2026",
  cards:[
    {
      name:"Chase Sapphire Reserve",
      group:"Chase",
      program:"Chase Ultimate Rewards points",
      fee:795,
      credits:300,
      rates:{dining:3,travel:1,flights:4,hotels:4,chasetravel:8,delta:4,marriott:4,hyatt:4,ihg:4,atmos:4,qatar:4,other:1},
      perks:[
        {t:"Return protection",d:"Up to $500 per item, $1,000 per calendar year, if a store won't take a return within 90 days. Type what you've claimed so far.",per:"y",amt:1000,re:/return protection/i,man:true},
        {t:"$500 The Edit hotel credit",d:"Prepaid stays in The Edit collection, annual",per:"a",amt:500,re:/\bthe edit\b/i},
        {t:"Lyft credit",d:"Up to $120 a year, plus 5x points on Lyft",per:"a",amt:120,re:/lyft/i},
        {t:"$250 one-time hotel credit",d:"Select Chase Travel hotels (IHG, Omni, Montage, Pendry, Virgin and others), prepaid, 2-night minimum, through Dec 31, 2026",per:"y",amt:250,re:/hotel/i},
        {t:"$300 travel credit",d:"Resets each account anniversary",per:"a",amt:300,re:/travel/i}
      ]
    },
    {
      name:"Chase Sapphire Preferred",
      group:"Chase",
      program:"Chase Ultimate Rewards points",
      fee:95,
      credits:0,
      rates:{dining:3,gas:3,travel:2,transit:2,streaming:3,chasetravel:5,delta:2,other:1},
      perks:[
        {t:"DashPass and $10 monthly promo",d:"Activate by Dec 31, 2027",per:"m",amt:10,re:/doordash|dashpass/i},
        {t:"Hotel credit",d:"Up to $100 a year on Chase Travel hotel stays",per:"a",amt:100,re:/hotel/i},
        {t:"Global Entry, TSA PreCheck or NEXUS credit",d:"$120 every four years",per:"4y",amt:120,re:/global entry|tsa|nexus/i},
        {t:"Free year of Apple TV",d:"Activate under Benefits & Rewards on Chase",exp:"2026-12-31"},
        {t:"5x on Lyft",d:"Through Sept 30, 2027",exp:"2027-09-30"},
        {t:"5x on Peloton",d:"Equipment and accessories over $150, through Dec 31, 2027",exp:"2027-12-31"}
      ]
    },
    {
      name:"Capital One Venture X",
      group:"Capital One",
      program:"Capital One miles",
      fee:395,
      credits:400,
      rates:{travel:2,c1travel:5,c1hotel:10,other:2},
      perks:[
        {t:"Return protection",d:"Up to $300 per item, $1,000 per calendar year, if a store won't take a return within 90 days. Type what you've claimed so far.",per:"y",amt:1000,re:/return protection/i,man:true},
        {t:"$300 Capital One Travel credit",d:"Book through the portal each account year",per:"a",amt:300,re:/travel|cot\b/i},
        {t:"Global Entry or TSA PreCheck credit",d:"Up to $120",per:"4y",amt:120,re:/global entry|tsa/i},
        {t:"10,000 anniversary miles",d:"Posts on your account anniversary"}
      ]
    },
    {
      name:"Chase Freedom Unlimited",
      group:"Chase",
      program:"Chase Ultimate Rewards points",
      fee:0,
      credits:0,
      rates:{dining:3,travel:1.5,drugstore:3,chasetravel:5,other:1.5}
    },
    {
      name:"Amex Platinum",
      group:"American Express",
      program:"Amex Membership Rewards points",
      fee:895,
      credits:0,
      rates:{travel:1,flights:5,amextravel:5,delta:5,atmos:5,qatar:5,other:1},
      perks:[
        {t:"Resy dining credit",d:"$100 each quarter, enrollment required",per:"q",amt:100,re:/resy/i},
        {t:"lululemon credit",d:"$75 each quarter, enrollment required",per:"q",amt:75,re:/lululemon/i},
        {t:"Uber One credit",d:"$120 a year toward Uber One",per:"y",amt:120,re:/uber ?one/i},
        {t:"Uber Cash",d:"$15 a month, $20 extra in December ($200 a year). It doesn't post as a statement credit, so type your total for the year so far.",per:"y",amt:200,man:true},
        {t:"Airline incidental credit",d:"Up to $200 a year for bag fees and similar",per:"y",amt:200,re:/airline/i},
        {t:"Digital entertainment credit",d:"Up to $25 a month on eligible streaming and news subscriptions, enrollment required",per:"m",amt:25,re:/digital entertainment|disney|hulu|espn|peacock|paramount|youtube|new york times|nytimes|wall street|wsj|audible|siriusxm/i},
        {t:"Walmart+ credit",d:"Up to $12.95 a month plus tax toward a monthly Walmart+ membership",per:"m",amt:12.95,re:/walmart/i},
        {t:"Equinox credit",d:"Up to $300 a year on an Equinox membership or Equinox+, enrollment required",per:"y",amt:300,re:/equinox|soulcycle/i},
        {t:"CLEAR+ credit",d:"Up to $209 a year toward CLEAR+, enrollment required",per:"y",amt:209,re:/\bclear\b/i},
        {t:"Oura Ring credit",d:"Up to $200 a year on an Oura Ring bought at ouraring.com, enrollment required",per:"y",amt:200,re:/oura/i},
        {t:"Global Entry or TSA PreCheck credit",d:"Up to $120 for Global Entry or $85 for TSA PreCheck, about every four years",per:"4y",amt:120,re:/global entry|tsa|precheck/i},
        {t:"Return protection",d:"Up to $300 per item, $1,000 per calendar year, if a store won't take a return within 90 days. Type what you've claimed so far.",per:"y",amt:1000,re:/return protection/i,man:true},
        {t:"Hotel credit",d:"$300 each half-year, prepaid Fine Hotels + Resorts or Hotel Collection via Amex Travel",per:"h",amt:300,re:/hotel|fhr|amex travel/i}
      ]
    },
    {
      name:"Amex Delta SkyMiles Gold",
      group:"American Express",
      program:"Delta SkyMiles",
      fee:150,
      credits:0,
      rates:{dining:2,groceries:2,travel:1,delta:2,other:1},
      perks:[
        {t:"Delta Stays credit",d:"Up to $100 a year on prepaid hotels or vacation rentals booked through Delta Stays",per:"y",amt:100,re:/stays/i},
        {t:"Venue Collection concessions",d:"10% back on qualifying concessions, up to $250 per calendar year, enrollment required",per:"y",amt:250,re:/venue|concession/i},
        {t:"Rideshare credit",d:"Up to $10 a month on select US rideshare, after your first renewal, enrollment required",per:"m",amt:10,re:/uber|lyft|rideshare/i},
        {t:"$200 Delta flight credit",d:"Unlocks after $10,000 in purchases in the calendar year",per:"y",amt:200,re:/delta/i}
      ]
    },
    {
      name:"Amex Gold",
      group:"American Express",
      program:"Amex Membership Rewards points",
      fee:325,
      credits:150,
      rates:{dining:4,groceries:4,flights:3,delta:3,atmos:3,qatar:3,amextravel:2,travel:1},
      offer:"Up to 100,000 points after $6,000 in 6 months (offers vary)",
      note:"4x at restaurants (to $50k) and US supermarkets (to $25k). About $424 of credits exist; I counted $150 you'd likely use."
    },
    {
      name:"Blue Cash Preferred",
      group:"American Express",
      program:"cash back",
      fee:95,
      credits:0,
      rates:{groceries:6,streaming:6,gas:3,transit:3},
      caps:{groceries:6000},
      offer:"Up to $300 back (offers vary), $0 fee the first year",
      note:"6% at US supermarkets on the first $6,000 a year, then 1%. A Disney/Hulu/ESPN credit of up to $120 isn't counted."
    },
    {
      name:"Capital One Savor",
      group:"Capital One",
      program:"cash back",
      fee:0,
      credits:0,
      rates:{dining:3,groceries:3,streaming:3},
      offer:"$200 to $250 after spending (offers vary)",
      note:"3% at restaurants, grocery stores (not Walmart or Target), and streaming. No annual fee."
    },
    {
      name:"Citi Custom Cash",
      group:"Citi",
      program:"cash back",
      fee:0,
      credits:0,
      rates:{},
      top:{
        cats:["dining","groceries","gas","transit","streaming","drugstore"],
        rate:5,
        cap:6000
      },
      offer:"$200 after $1,500 in 6 months",
      note:"5% on your top spending category each cycle, up to $500 a month, then 1%. No annual fee."
    },
    {
      name:"Wells Fargo Autograph",
      group:"Wells Fargo",
      program:"Wells Fargo Rewards points",
      fee:0,
      credits:0,
      rates:{dining:3,travel:3,delta:3,gas:3,transit:3,streaming:3},
      offer:"20,000 points after $1,000 in 3 months",
      note:"3x at restaurants, travel, gas stations, transit, streaming, and phone plans, with no cap. No annual fee."
    },
    {
      name:"Blue Cash Everyday",
      group:"American Express",
      program:"cash back",
      fee:0,
      credits:0,
      rates:{groceries:3,gas:3,online:3},
      caps:{groceries:6000,gas:6000,online:6000},
      offer:"Up to $200 after $2,000 in 6 months (offers vary)",
      note:"3% at US supermarkets, US gas stations, and US online retail, each up to $6,000 a year, then 1%."
    },
    {
      name:"Bank of America Customized Cash",
      group:"Bank of America",
      program:"cash back",
      fee:0,
      credits:0,
      rates:{groceries:2},
      caps:{groceries:10000},
      top:{
        cats:["dining","gas","online","travel","drugstore"],
        rate:3,
        cap:10000
      },
      offer:"Check Bank of America for the current bonus",
      note:"3% in a category you choose, 2% at grocery stores and wholesale clubs, both capped at $2,500 a quarter combined, then 1%."
    },
    {
      name:"Wells Fargo Active Cash",
      group:"Wells Fargo",
      program:"cash back",
      fee:0,
      credits:0,
      rates:{travel:2,other:2},
      offer:"$200 after $500 in 3 months",
      note:"Flat 2% on everything. No annual fee."
    },
    {
      name:"Citi Double Cash",
      group:"Citi",
      program:"cash back",
      fee:0,
      credits:0,
      rates:{travel:2,other:2},
      offer:"Check Citi for the current bonus",
      note:"Flat 2%: 1% when you buy and 1% when you pay. Charges a 3% foreign transaction fee."
    },
    {
      name:"Atmos Rewards Ascent",
      group:"Airline & hotel co-brand",
      program:"Atmos points",
      fee:95,
      credits:150,
      rates:{atmos:3,gas:2,transit:2,streaming:2},
      offer:"80,000 points and a $99 companion fare after $4,000 in 120 days",
      note:"3x on Alaska and Hawaiian, 2x on gas, transit, ride-hailing, and streaming. Counted $150 for the companion fare (needs $6,000 in yearly spend). Edit that below."
    },
    {
      name:"Atmos Rewards Summit",
      group:"Airline & hotel co-brand",
      program:"Atmos points",
      fee:395,
      credits:250,
      rates:{atmos:3,dining:3,gas:2,transit:2,streaming:2},
      offer:"Up to 100,000 points plus a 25,000-point companion award after $6,500 in 90 days",
      note:"3x on Alaska, Hawaiian, dining, and foreign purchases (foreign spend isn't modeled). Counted $250 for the companion award and lounge perks. Edit that below."
    },
    {
      name:"Qatar Airways Visa Signature",
      group:"Airline & hotel co-brand",
      program:"Avios",
      fee:99,
      credits:0,
      rates:{qatar:4,dining:2},
      offer:"Up to 40,000 Avios (varies)",
      note:"4 Avios per $1 on Qatar Airways, 2 on restaurants, 1 elsewhere."
    },
    {
      name:"Qatar Airways Visa Infinite",
      group:"Airline & hotel co-brand",
      program:"Avios",
      fee:499,
      credits:100,
      rates:{qatar:5,dining:3},
      offer:"Up to 50,000 Avios (varies)",
      note:"5 Avios per $1 on Qatar Airways, 3 on restaurants, 1 elsewhere, plus a year of Gold status. Counted $100 for status and lounge perks (edit below)."
    },
    {
      name:"IHG One Rewards Premier",
      group:"Airline & hotel co-brand",
      program:"IHG points",
      fee:99,
      credits:150,
      rates:{ihg:10,travel:5,delta:5,gas:5,dining:5,other:3},
      offer:"Up to 175,000 points after $5,000 in 3 months (varies)",
      note:"10x at IHG, 5x on travel, gas, and dining, 3x elsewhere. Counted the anniversary free night at $150."
    },
    {
      name:"IHG One Rewards Traveler",
      group:"Airline & hotel co-brand",
      program:"IHG points",
      fee:0,
      credits:0,
      rates:{ihg:5,dining:3,gas:3,streaming:3,other:2},
      offer:"80,000 points after $2,000 in 3 months (varies)",
      note:"5x at IHG, 3x on dining, gas, and streaming, 2x elsewhere. No annual fee."
    },
    {
      name:"World of Hyatt",
      group:"Airline & hotel co-brand",
      program:"World of Hyatt points",
      fee:95,
      credits:150,
      rates:{hyatt:4,dining:2,flights:2,delta:2,atmos:2,qatar:2,transit:2},
      offer:"Up to 60,000 points, or free nights, depending on the offer",
      note:"4x at Hyatt, 2x on dining, airlines direct, and local transit, 1x elsewhere. Counted the annual free night at $150."
    },
    {
      name:"Marriott Bonvoy Boundless",
      group:"Airline & hotel co-brand",
      program:"Bonvoy points",
      fee:95,
      credits:150,
      rates:{marriott:6,gas:3,groceries:3,dining:3,other:2},
      caps:{gas:6000,groceries:6000,dining:6000},
      offer:"125,000 points plus a free night after $3,000 in 3 months (varies)",
      note:"6x at Marriott, 3x on gas, groceries, and dining, 2x elsewhere. The 3x has a $6,000 yearly cap that I model per category, so it runs slightly generous. Counted the annual free night at $150."
    },
    {
      name:"Marriott Bonvoy Brilliant",
      group:"Airline & hotel co-brand",
      program:"Bonvoy points",
      fee:650,
      credits:450,
      rates:{marriott:6,dining:3,flights:3,delta:3,atmos:3,qatar:3,other:2},
      offer:"Up to 150,000 points plus $250 after $6,000 in 6 months (ends Sept 30, 2026)",
      note:"6x at Marriott, 3x on dining and airlines direct, 2x elsewhere. Counted about $450 for the 85,000-point free night and the $300 dining credit."
    }
  ]
};
