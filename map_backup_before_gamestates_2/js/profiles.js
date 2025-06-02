// originally js took info from csv to display on sidebar, but I wanted full control over the design of each

const customProfiles = {
  CAMBERWELL: `
   <p id="camberwell-title">ual: camberwell</p>
    <p id="camberwell-p">campus cafe</p> 
     <p id="camberwell-p">5 milks |&nbsp;£3 latte </p>
     <p id="camberwell-p"> contactless only</p>
  `,

  "WILSON ROAD": `
   <p id="camberwell-title">Wilson Road Campus</p>
    <p id="camberwell-p">campus cafe</p> 
     <p id="camberwell-p">5 milks |&nbsp;£3 latte </p>
     <p id="camberwell-p"> contactless only</p>
    
  `,

  "Sainsbury's Local": `
    <p id="sains-title">Sainsbury's Local</p>
    <p id="sains-1"> corner store </p>
    <p id ="sains-1"> supermarket sub </p>
    <p id="sains-1"> no min. spend </p>
  `,

  "TOAD Bakery": `
    <p id="toad-title">TOAD Bakery</p>
    <p id="toad-subtitle"> cafe </p>
    <p id="toad-subtitle"> independent </p>
    <p id="toad-subtitle">2 milks |&nbsp; no lattes </p>
    <p id="toad-subtitle"> cash accepted</p>
  `,

  "CAFÉ MONDO": `
        <p id="toad-title">CAFÉ MONDO</p>
        <p id="toad-subtitle"> cafe </p>
    <p id="toad-subtitle"> independent </p>
    <p id="toad-subtitle">3 milks |&nbsp; £2.20 latte </p>
    <p id="toad-subtitle"> cash accepted</p>
  `,

  "Spring Social Supermarket": `
    <p id="spring-title">Spring Social</p>
    <p id = "spring-1" > A charity run store  </p>
     <p id = "spring-1" > for those who need it </p>
    
      
  `,

  "Nisa Local": `
    <p id="sains-title">Nisa Local</p>
    <p id="sains-1"> corner store </p>
    <p id="sains-1"> franchise </p>
    <p id="sains-1"> no min. spend </p>
  `,

  Payless: `
     <p id="sains-title">Payless</p>
    <p id="sains-1"> corner store </p>
    <p id="sains-1"> independent </p>
    <p id ="sains-1"> £1 min. spend </p>
    
  `,

  Louis: `
    <p id="toad-title">Louis</p>
    <p id="toad-subtitle">cafe</p> 
    <p id="toad-subtitle">indepdendent</p>
    <p id="toad-subtitle">6 milks |&nbsp;£3.90 latte </p>
    <p id="toad-subtitle"> cash accepted</p>
  `,

  "James Stores": `
     <p id="sains-title">James Store</p>
    <p id="sains-1"> corner store </p>
    <p id="sains-1"> independent </p>
    <p id ="sains-1"> £1 min. spend </p>
  `,

  Londis: `
       <p id="sains-title">Londis</p>
    <p id="sains-1"> corner store </p>
    <p id="sains-1"> independent </p>
    <p id ="sains-1"> no min. spend </p>
  `,

  "Tesco Express": `
  <p id="sains-title">Tesco Express</p>
    <p id="sains-1"> corner store </p>
    <p id ="sains-1"> supermarket sub </p>
    <p id="sains-1"> no min. spend </p>
  `,

  "Rise & Grind": `
    <p id="coolcats-title">Rise & Grind</p>
    <p id="coolcats-subtitle"> closed down</p>
  `,

  Vinebins: `
    s <p id="sains-title">Vinebins</p>
    <p id="sains-1"> corner store </p>
    <p id="sains-1"> independent </p>
    <p id ="sains-1"> £1 min. spend </p>
  `,

  Preseco: `
    <p id="sains-title">Preseco</p>
    <p id="sains-1"> corner store </p>
    <p id="sains-1"> independent </p>
    <p id ="sains-1"> £1 min. spend </p>
  `,

  Costcutter: `
    <p id="sains-title">Costcutter</p>
    <p id="sains-1"> corner store </p>
    <p id="sains-1"> franchise </p>
    <p id ="sains-1"> £2 min. spend </p>
  `,

  "Peckham Theatre Cafe": `
    <p id="toad-title">Peckham Theatre</p>
    <p id="toad-subtitle"> cafe </p>
    <p id="toad-subtitle">indepdendent</p>
    <p id="toad-subtitle">1 milk |&nbsp; £2.95 latte </p>
   <p id="toad-subtitle"> cash accepted</p>
  `,

  "Gayle's Coffee Bar": `
    <p id="toad-title">Gayle's Coffee Bar</p>
     <p id="toad-subtitle"> cafe </p>
    <p id="toad-subtitle">indepdendent</p>
    <p id="toad-subtitle">4 milks |&nbsp; £3.80 latte </p>
    <p id="toad-subtitle"> cash accepted</p>
  `,

  "Cool Cats' Cafe": `
    <p id="coolcats-title">Cool Cats Cafe</p>
    <p id="coolcats-subtitle"> closed down</p>
  `,

  "Ozis Cafe": `
    <p id="toad-title">Ozis Cafe</p>
    <p id="toad-subtitle"> cafe </p>
    <p id="toad-subtitle">indepdendent</p>
    <p id="toad-subtitle">2 milks |&nbsp;£3.90 latte </p>
    <p id="toad-subtitle"> cash accepted</p>

  `,

  "St Giles Church": `
    <p id="one-line-bus">St Giles Church</p>
    <p id="one-line-bus-2"> bus stop </p>
    <p id="one-line-bus-2"> 8 busses </p>
  `,

  "Vestry Road (Stop N)": `
    <p id="two-line-bus">Vestry Road </p>
    <p id="two-line-bus-2">(Stop N)</p>
    <p id="two-line-bus-3"> bus stop</p>
    <p id="two-line-bus-3"> 8 busses</p>
  `,

  "Vestry Road (Stop V)": `
    <p>Vestry Road (Stop V)</p>
  `,

  "Peckham Road / Southampton Way (Stop P)": `
    <p>Peckham Road / Southampton Way (Stop P)</p>
  `,

  "Peckham Road / Southampton Way (Stop T)": `
    <p>Peckham Road / Southampton Way (Stop T)</p>
  `,

  "Harris Academy (Stop Q)": `
    <p id="two-line-bus">Harris Academy </p>
    <p id="two-line-bus-2">(Stop Q)</p>
    <p id="two-line-bus-3"> bus stop</p>
    <p id="two-line-bus-3"> 11 busses</p>
  `,

  "Harris Academy (Stop S)": `
    <p id="two-line-bus">Harris Academy </p>
    <p id="two-line-bus-2">(Stop Q)</p>
    <p id="two-line-bus-3"> bus stop</p>
    <p id="two-line-bus-3"> 11 busses</p>
  `,

  "Southampton Way / Peckham Road (Stop C)": `
    <p>Southampton Way / Peckham Road (Stop C)</p>
  `,

  "Southampton Way Estate Stop (D)": `
    <p>Southampton Way Estate Stop (D)</p>
  `,

  "Southampton Way Estate Stop (B)": `
    <p>Southampton Way Estate Stop (B)</p>
  `,

  CSM: `
 <p id="camberwell-title">ual: csm</p>
    <p id="camberwell-p">campus cafe</p> 
     <p id="camberwell-p">5 milks |&nbsp;£3 latte </p>
     <p id="camberwell-p"> contactless only</p>

  `,

  Wildcard: `
      <p id="toad-title">Wildcard</p>
    <p id="toad-subtitle"> cafe </p>
    <p id="toad-subtitle">regional</p>
    <p id="toad-subtitle">4 milks |&nbsp;£3.90 latte </p>
     <p id="toad-subtitle"> contactless only</p>
  `,

  "Redemption Roasters": `
    <p id="rr-title">Redemption</p>
    <p id="rr-subtitle">Roasters</p>
    <p id="rr-p"> cafe </p> 
    <p id="rr-p"> regional </p>
    <p id="rr-p"> 4 milks |&nbsp;£4.30 latte </p>
    <p id="rr-p"> contactless only </p>
  `,

  "Midnight Pantry": `
     <p id="toad-title">  Midnight Pantry </p>
    <p id="toad-subtitle"> cafe </p>
    <p id="toad-subtitle">regional</p>
    <p id="toad-subtitle">3 milks | no lattes </p>
    <p id="toad-subtitle"> contactless only</p>
  `,

  Longboys: `
    <p id="toad-title">  Longboys </p>
        <p id="toad-subtitle">cafe</p> 
          <p id="toad-subtitle">regional</p> 
   <p id="toad-subtitle">2 milks |&nbsp; £3.60 </p>
    <p id="toad-subtitle"> contactless only</p>
  `,

  Vermuteria: `
    <p id="toad-title">  Vermuteria </p>
  <p id="toad-subtitle">cafe</p> 
          <p id="toad-subtitle">independent</p> 
   <p id="toad-subtitle">3 milks |&nbsp; £3.60 </p>
    <p id="toad-subtitle"> cash accepted</p>
  `,

  Matchado: `
     <p id="toad-title">  Matchado </p>
  <p id="toad-subtitle">cafe</p> 
          <p id="toad-subtitle">independent</p> 
   <p id="toad-subtitle">4 milks | matcha only </p>
    <p id="toad-subtitle"> contactless only</p>
  `,

  "London Wildlife Trust": `
    <p id="rr-title">London Wildlife </p> 
    <p id = "rr-subtitle"> Trust </p>
     <p id="rr-p"> cafe </p> 
    <p id="rr-p"> independent </p>
    <p id="rr-p"> 4 milks |&nbsp;£3.40 latte </p>
    <p id="rr-p"> contactless only </p>
  `,

  Benugo: `
    <p id="toad-title">Benugo</p>
    <p id="toad-subtitle">cafe</p> 
    <p id="toad-subtitle">chain</p>
    <p id="toad-subtitle">4 milks |&nbsp;£4.20 latte </p>
    <p id="toad-subtitle"> contactless only</p>
  `,

  Starbucks: `
    <p id="toad-title">Starbucks</p>
    <p id="toad-subtitle">cafe</p> 
    <p id="toad-subtitle">chain</p>
    <p id="toad-subtitle">4 milks |&nbsp;£4 latte </p>
    <p id="toad-subtitle"> cash accepted</p>
  `,

  "Pret A Manger": `
    <p id="toad-title">Pret A Manger</p>
    <p id="toad-subtitle">cafe</p> 
    <p id="toad-subtitle">chain</p>
    <p id="toad-subtitle">4 milks |&nbsp;£4 latte </p>
    <p id="toad-subtitle"> cash accepted</p>
  `,

  "GAIL's": `
     <p id="toad-title">GAIL's</p>
    <p id="toad-subtitle">cafe</p> 
    <p id="toad-subtitle">chain</p>
    <p id="toad-subtitle">4 milks |&nbsp;£4.30 latte </p>
    <p id="toad-subtitle"> contactless only</p>
  `,

  "EL&N": `
     <p id="toad-title">EL&N</p>
    <p id="toad-subtitle">cafe</p> 
    <p id="toad-subtitle">chain</p>
    <p id="toad-subtitle">5 milks |&nbsp;£3 latte </p>
    <p id="toad-subtitle"> cash accepted</p>
  `,

  "Le Pain Quotidien": `
    <p id="toad-title">Le Pain Quotidien</p>
    <p id="toad-subtitle">cafe</p> 
    <p id="toad-subtitle">last location of</p>
    <p id="toad-subtitle">former chain</p>
    <p id="toad-subtitle">6 milks |&nbsp;£3.90 latte </p>
    <p id="toad-subtitle"> cash accepted</p>
  `,

  "bread&truffle.": `
   <p id="toad-title">bread & truffle.</p>
   <p id="toad-subtitle">cafe</p> 
    <p id="toad-subtitle">regional</p>
    <p id="toad-subtitle">1 milk |&nbsp;£3.70 latte </p>
    <p id="toad-subtitle"> contactless only</p>
  `,

  "PAUL Le Café": `
   <p id="toad-title">PAUL Le Café</p>
   <p id="toad-subtitle">cafe</p> 
    <p id="toad-subtitle">chain</p>
    <p id="toad-subtitle">5 milks |&nbsp;£3.90 latte </p>
    <p id="toad-subtitle"> contactless only</p>
  `,

  "Blank Street": `
     <p id="toad-title">Blank Street</p>
   <p id="toad-subtitle">cafe</p> 
    <p id="toad-subtitle">chain</p>
    <p id="toad-subtitle">2 milks |&nbsp;£3.80 latte </p>
    <p id="toad-subtitle"> contactless only</p>
  `,

  "Aux Merveilleux de Fred": `
    <p id="rr-title">Aux Merveilleux</p>
    <p id="rr-subtitle"> de Fred</p>
    <p id="rr-p"> cafe </p> 
    <p id="rr-p"> regional </p>
    <p id="rr-p"> 3 milks |&nbsp;£3.50 latte </p>
    <p id="rr-p"> contactless only </p>
  `,

  Costa: `
    <p id="toad-title">Costa</p>
   <p id="toad-subtitle">cafe</p> 
    <p id="toad-subtitle">chain</p>
    <p id="toad-subtitle">4 milks |&nbsp;£4 latte </p>
    <p id="toad-subtitle"> cash accepted </p>
  `,

  "Joe & The Juice": `
    <p id="toad-title">Joe & The Juice</p>
   <p id="toad-subtitle">cafe</p> 
    <p id="toad-subtitle">chain</p>
    <p id="toad-subtitle">6 milks |&nbsp;£4.30 latte </p>
    <p id="toad-subtitle"> contactless only </p>
  `,

  "After School Cookie Club": `
    <p id="rr-title">After School</p>
    <p id="rr-subtitle"> Cookie Club</p>
    <p id="rr-p"> cafe </p> 
    <p id="rr-p"> regional </p>
    <p id="rr-p"> 1 milk |&nbsp;£3.50 latte </p>
    <p id="rr-p"> exact cash only </p>
  `,

  "News & Coffee": `
     <p id="toad-title">News & Coffee</p>
   <p id="toad-subtitle">cafe</p> 
    <p id="toad-subtitle">regional</p>
    <p id="toad-subtitle">2 milks |&nbsp;£3.70 latte </p>
    <p id="toad-subtitle"> contactless only </p>
  `,

  "Carhartt Coffee": `
         <p id="toad-title">Carhartt Coffee</p>
   <p id="toad-subtitle">cafe</p> 
    <p id="toad-subtitle">chain</p>
    <p id="toad-subtitle">4 milks |&nbsp;£3.40 latte </p>
    <p id="toad-subtitle"> contactless only </p>
  `,

  "Cafe Hermanos": `
     <p id="toad-title">Cafe Hermanos</p>
   <p id="toad-subtitle">cafe</p> 
    <p id="toad-subtitle">regional</p>
    <p id="toad-subtitle">4 milks |&nbsp;£4.10 latte </p>
    <p id="toad-subtitle"> contactless only </p>
  `,

  "Café Nero": `
       <p id="toad-title">Café Nero</p>
   <p id="toad-subtitle">cafe</p> 
    <p id="toad-subtitle">chain</p>
    <p id="toad-subtitle">4 milks |&nbsp;£3.90 latte </p>
    <p id="toad-subtitle"> contactless only </p>
  `,

  "The Pasty Shop": `
   <p id="toad-title">The Pasty Shop</p>
   <p id="toad-subtitle">cafe</p> 
    <p id="toad-subtitle">regional</p>
    <p id="toad-subtitle">3 milks |&nbsp;£4.20 latte </p>
    <p id="toad-subtitle"> cash accepted </p>
  `,

  ikoi: `
   <p id="toad-title">ikoi</p>
   <p id="toad-subtitle">cafe</p> 
    <p id="toad-subtitle">independent</p>
    <p id="toad-subtitle">4 milks |&nbsp;£3.60 latte </p>
    <p id="toad-subtitle"> contactless </p>
  `,

  Frothee: `
    <p id="toad-title">Frothee</p>
   <p id="toad-subtitle">cafe</p> 
    <p id="toad-subtitle">independent</p>
    <p id="toad-subtitle">5 milks |&nbsp;£3.90 latte </p>
    <p id="toad-subtitle"> contactless </p>
  `,

  "Café Express": `
     <p id="toad-title">Café Express</p>
   <p id="toad-subtitle">cafe</p> 
    <p id="toad-subtitle">independent</p>
    <p id="toad-subtitle">2 milks |&nbsp;£2.70 latte </p>
    <p id="toad-subtitle"> cash accepted </p>
  `,

  Alma: `
       <p id="toad-title">Alma</p>
   <p id="toad-subtitle">cafe</p> 
    <p id="toad-subtitle">regional</p>
    <p id="toad-subtitle">4 milks |&nbsp;£3.70 latte </p>
    <p id="toad-subtitle"> contactless </p>
  `,

  Supermarket: `
   <p id="spring-title">Supermarket</p>
    <p id = "spring-1" > Permanently closed  </p>
     <p id = "spring-1" > corner store premises </p>
  `,

  "M&S Simply Food": `
    <p id="sains-title">M&S Simply Food</p>
    <p id="sains-1"> corner store </p>
    <p id ="sains-1"> supermarket sub </p>
    <p id="sains-1"> no min. spend </p>
  `,

  "Little Waitrose": `
    <p id="sains-title">Little Waitrose</p>
    <p id="sains-1"> corner store </p>
    <p id ="sains-1"> supermarket sub </p>
    <p id="sains-1"> no min. spend </p>
  `,

  "St Pancras International (Stop S)": `
    <p>St Pancras International (Stop S)</p>
  `,

  "London Kings Cross": `
    <p>London Kings Cross</p>
  `,

  "Chenies Place": `
    <p>Chenies Place</p>
  `,

  "St Pancras International (Stop M)": `
    <p>St Pancras International (Stop M)</p>
  `,

  "Kings Cross St Pancras (Stop T)": `
    <p>Kings Cross St Pancras (Stop T)</p>
  `,

  "Kings Cross St Pancras (Stop D)": `
    <p>Kings Cross St Pancras (Stop D)</p>
  `,

  "Kings Cross St Pancras (Stop E)": `
    <p>Kings Cross St Pancras (Stop E)</p>
  `,

  "Kings Cross / York Way (Stop G)": `
    <p>Kings Cross / York Way (Stop G)</p>
  `,

  "Wharfdale Road / London Canal Museum": `
    <p>Wharfdale Road / London Canal Museum</p>
  `,

  "Kings Cross / Pentonville Road (Stop H)": `
    <p>Kings Cross / Pentonville Road (Stop H)</p>
  `,

  "Kings Cross / Caledonian Road (Stop X)": `
    <p>Kings Cross / Caledonian Road (Stop X)</p>
  `,

  "Kings Cross Station (Stop R)": `
    <p>Kings Cross Station (Stop R)</p>
  `,

  "Killick Street (Stop S)": `
    <p>Killick Street (Stop S)</p>
  `,

  "Killick Street (Stop K)": `
    <p>Killick Street (Stop K)</p>
  `,

  "Goods Way (Stop D)": `
    <p>Goods Way (Stop D)</p>
  `,

  "York Way / Kings Place (Stop C)": `
    <p>York Way / Kings Place (Stop C)</p>
  `,

  "Copenhagen Street / York way (Stop E)": `
    <p>Copenhagen Street / York way (Stop E)</p>
  `,

  "Randells Road (Stop B)": `
    <p>Randells Road (Stop B)</p>
  `,

  "Randells Road (Stop F)": `
    <p>Randells Road (Stop F)</p>
  `,

  "St Pancras International": `
      <p id="coolcats-title">St Pancras </p>
    <p id="coolcats-subtitle"> international rail</p>
  `,

  "Kings Cross": `
    <p id="coolcats-title">Kings Cross </p>
    <p id="coolcats-subtitle"> national rail</p>
  `,

  "Kings Cross St Pancras": `
    <p id="two-line-bus">Kings Cross </p>
    <p id="two-line-bus-2">St Pancras</p>
    <p id="two-line-bus-3"> tube station</p>
    <p id="two-line-bus-3"> 6 lines</p>
  `,

  "York Road": `
    <p>York Road</p>
  `,
};
