import React from "react";
// import Province from "./province"
// import Territory from "./territory";
import "./CommunityDetails.css";
// import FNAddress from "../../FirstNationDB";
import FirstNationDB from "../../FirstNationDB";


export class FNAddress {
    constructor(Name, BandNum, Region, Address, City, Province, PostalCode) {
      this.Name = Name;
      this.BandNum = BandNum;
      this.Region = Region;
      this.Address = Address;
      this.City = City;
      this.Province = Province;
      this.PostalCode = PostalCode;

    }
}

class CommunityDetails extends React.Component{

    constructor( props ){
        super( props );
        // this.handleClick = this.handleClick.bind(this);
        this.state = {
            FNAddressDB: [],
            BandNumList: ['Select Band Number']
        }
    
    }

    
        
    // getFirstNationData = (database) => {
    //     // this.setState({Db:db});
    //     console.log("GOT HERE !!!")
    //     this.setState({DB:this.state.FNAddressDB.concat(database)});
    //     // console.log(database.map((FNAdd) => (FNAdd.Province)))
        

    // }

    //temporary solution
    componentDidMount = () => {
        this.updateDB();
        // this.updateBNL();
        // this.props.getFirstNationData(this.state.DB);
  
    }

    bandNumInputHandler = (eve) => {
        // eve.preventDefault();
        console.log("testing 123  ")
        console.log(this.state.searchText);

        // console.log("bandNumInputHandler")
        this.state.FNAddressDB.map(FNAdd => {
            if (FNAdd.BandNum === eve.target.value){
                this.props.bandNumHandlerChange(FNAdd);
            }
            
        })
        


    }
  
    updateDB = () => {
        var tempDB = [];
        var tempFNDB = [];
        tempDB.push( new FNAddress('Fort McKay First Nation', '467', 'AB',	'PO BOX 5360', 'FORT MCMURRAY', 'AB', 'T9H 3G4'));
        tempDB.push( new FNAddress('Fort McMurray #468 First Nation', '468', 'AB',	'PO BOX 6130, STN MAIN', 'FORT MCMURRAY', 'AB',	'T9H 4W1'));
        tempDB.push( new FNAddress('Frog Lake',	'465',	'AB', 'GENERAL DELIVERY', 'FROG LAKE', 'AB', 'T0A 1M0'));
        tempDB.push( new FNAddress('Heart Lake', '469',	'AB', 'PO BOX 447', 'LAC LA BICHE',	'AB','T0A 2C0'));
        tempDB.push( new FNAddress('Sturgeon Lake Cree Nation',	'455', 'AB', 'PO BOX 757',	'VALLEYVIEW', 'AB',	'T0H 3N0'));
        tempDB.push( new FNAddress('Beecher Bay','640','BC','4901B EAST SOOKE ROAD','SOOKE','BC','V9Z 1B6'));
        tempDB.push( new FNAddress('Binche Whut\'en','730','BC','204 Mandine Drive, PO Box 2039','Fort St. James','BC','V0J 1P0'));
        tempDB.push( new FNAddress('Blueberry River First Nations','547','BC','PO BOX 3009','BUICK CREEK','BC','V0C 2R0'));
        tempDB.push( new FNAddress('Bonaparte','686','BC','PO BOX 669','CACHE CREEK','BC','V0K 1H0'));
        tempDB.push( new FNAddress('Boothroyd','700','BC','PO BOX 70','BOSTON BAR','BC','V0K 1C0'));
        tempDB.push( new FNAddress('Douglas','561','BC','PO BOX 606','','MOUNT CURRIE,BC','V0N 2K0'));
        tempDB.push( new FNAddress('Dzawada enuxw First Nation','636','BC','GENERAL DELIVERY','','KINGCOME INLET','BC','V0N 2B0'));
        tempDB.push( new FNAddress('Ehattesaht','634','BC','PO BOX 59','','ZEBALLOS','BC','V0P 2A0'));
        tempDB.push( new FNAddress('Esk etemc','711','BC','PO BOX 157','','ALKALI LAKE','BC','V0L 1B0'));
        tempDB.push( new FNAddress('Kwikwasut inuxw Haxwa mis','625','BC','PO BOX 10','','ALERT BAY','BC','V0N 1A0'));
        tempDB.push( new FNAddress('Kwikwetlem First Nation','560','BC','2 - 65 COLONY FARM ROAD','','COQUITLAM','BC','V3C 5X9'));
        tempDB.push( new FNAddress('Lake Babine Nation','607','BC','PO BOX 879','','BURNS LAKE','BC','V0J 1E0'));
        tempDB.push( new FNAddress('Lax Kw alaams','674','BC','206 SHASHAAK STREET','','LAX KW ALAAMS','BC','V0V 1H0'));
        tempDB.push( new FNAddress('N Quatqua','556','BC','PO BOX 88','','D ARCY','BC','V0N 1L0'));
        tempDB.push( new FNAddress('Nadleh Whuten','612','BC','PO BOX 36','','FORT FRASER','BC','V0J 1N0'));
        tempDB.push( new FNAddress('Osoyoos','596','BC','1155 SEN POK CHIN BLVD','','OLIVER','BC','V0H 1T8'));
        tempDB.push( new FNAddress('Pacheedaht First Nation','658','BC','350 Kalaid Street, Box 170','PORT RENFREW','BC','V0S 1K0'));
        tempDB.push( new FNAddress('Shxw ow hamel First Nation','587','BC','58700A ST. ELMO ROAD','','HOPE','BC','V0X 1L2'));
        tempDB.push( new FNAddress('Shxwha:y Village','570','BC','44680 SCHWEYEY ROAD','','CHILLIWACK','BC','V2R 5M5'));
        tempDB.push( new FNAddress('Simpcw First Nation','691','BC','PO BOX 220','','BARRIERE','BC','V0E 1E0'));
        tempDB.push( new FNAddress('Siska','706','BC','PO BOX 519','','LYTTON','BC','V0K 1Z0'));
        tempDB.push( new FNAddress('Soowahlie','572','BC','4393 SOOWAHLIE ROAD','','CULTUS LAKE','BC','V2R 4Y2'));
        tempDB.push( new FNAddress('Splatsin','600','BC','PO BOX 460','','ENDERBY','BC','V0E 1V0'));
        tempDB.push( new FNAddress('Spuzzum','708','BC','SITE 3,  C 11,  RR 1','','YALE','BC','V0K 2S0'));
        tempDB.push( new FNAddress('Sq ewlets','568','BC','PO BOX 76','','LAKE ERROCK','BC','V0M 1N0'));
        tempDB.push( new FNAddress('Squamish','555','BC','PO BOX 86131','','NORTH VANCOUVER','BC','V7L 4J5'));
        tempDB.push( new FNAddress('Squiala First Nation','574','BC','45005 SQUIALA ROAD','','CHILLIWACK','BC','V2P 7Z9'));
        tempDB.push( new FNAddress('Stellat en First Nation','613','BC','PO BOX 760','','FRASER LAKE','BC','V0J 1S0'));
        tempDB.push( new FNAddress('Sts ailes','559','BC','4690 SALISH WAY, CHEHALIS ROAD','','AGASSIZ','BC','V0M 1A1'));
        tempDB.push( new FNAddress('Stswecem c Xgat tem First Nation','723','BC','GENERAL DELIVERY','','DOG CREEK','BC','V0L 1J0'));
        tempDB.push( new FNAddress('Ts uubaa-asatx','643','BC','313B DEER ROAD','PO BOX 159','','LAKE COWICHAN','BC','V0R 2G0'));
        tempDB.push( new FNAddress('Tsal alh','595','BC','SITE 3 BOX 76','','SHALALTH','BC','V0N 3C0'));
        tempDB.push( new FNAddress('Tsartlip','653','BC','PO BOX 70','#1 Boatramp Road','','BRENTWOOD BAY','BC','V8M 1R3'));
        tempDB.push( new FNAddress('Westbank First Nation','601','BC','201-515 HWY 97 SOUTH','','KELOWNA','BC','V1Z 3J2'));
        tempDB.push( new FNAddress('Wet suwet en First Nation','725','BC','PO BOX 760','','BURNS LAKE','BC','V0J 1E0'));
        tempDB.push( new FNAddress('Whispering Pines/Clinton','702','BC','615 WHISPERING PINES DRIVE','','KAMLOOPS','BC','V2B 8S4'));
        tempDB.push( new FNAddress('Williams Lake First Nation','719','BC','2672 INDIAN DRIVE','','WILLIAMS LAKE','BC','V2G 5K9'));
        tempDB.push( new FNAddress('Witset First Nation','530','BC','205 BEAVER ROAD','','SMITHERS','BC','V0J 2N1'));
        tempDB.push( new FNAddress('Canupawakpa Dakota First Nation','289','MB','PO BOX 146','','PIPESTONE','MB','R0M 1T0'));
        tempDB.push( new FNAddress('Chemawawin Cree Nation','309','MB','PO BOX 9','','EASTERVILLE','MB','R0C 0V0'));
        tempDB.push( new FNAddress('Cross Lake Band of Indians','276','MB','PO BOX 10','','CROSS LAKE','MB','R0B 0J0'));
        tempDB.push( new FNAddress('Dakota Plains','288','MB','PO BOX 1246','','PORTAGE LA PRAIRIE','MB','R1N 3J9'));
        tempDB.push( new FNAddress('Dakota Tipi','295','MB','2020 DAKOTA DRIVE','','DAKOTA TIPI','MB','R1N 3X6'));
        tempDB.push( new FNAddress('Little Grand Rapids','270','MB','PO BOX 129','','LITTLE GRAND RAPIDS','MB','R0B 0V0'));
        tempDB.push( new FNAddress('Little Saskatchewan','274','MB','PO BOX 98','','GYPSUMVILLE','MB','R0C 1J0'));
        tempDB.push( new FNAddress('Long Plain','287','MB','PO BOX 430','','PORTAGE LA PRAIRIE','MB','R1N 3B7'));
        tempDB.push( new FNAddress('Manto Sipi Cree Nation','302','MB','PO BOX 97','','GOD S RIVER','MB','R0B 0N0'));
        tempDB.push( new FNAddress('Marcel Colomb First Nation','328','MB','PO BOX 1150','','LYNN LAKE','MB','R0B 0W0'));
        tempDB.push( new FNAddress('Mathias Colomb','311','MB','PO BOX 135','','PUKATAWAGAN','MB','R0B 1G0'));
        tempDB.push( new FNAddress('Misipawistik Cree Nation','310','MB','PO BOX 500','','GRAND RAPIDS','MB','R0C 1E0'));
        tempDB.push( new FNAddress('Shamattawa First Nation','307','MB','PO BOX 210','','SHAMATTAWA','MB','R0B 1K0'));
        tempDB.push( new FNAddress('Sioux Valley Dakota Nation','290','MB','PO BOX 38','','GRISWOLD,MB','R0M 0S0'));
        tempDB.push( new FNAddress('Fort Folly','9','NB','PO BOX 1007','','DORCHESTER','NB','E4K 3V5'));
        tempDB.push( new FNAddress('Indian Island','10','NB','61 INDIAN ISLAND DRIVE','','INDIAN ISLAND','NB','E4W 1S9'));
        tempDB.push( new FNAddress('Kingsclear','11','NB','77 FRENCH VILLAGE RD','','KINGSCLEAR FIRST NATION','NB','E3E 1K3'));
        tempDB.push( new FNAddress('Madawaska Maliseet First Nation','6','NB','1771 MAIN STREET','','MADAWASKA MALISEET FIRST NAT','NB','E7C 1W9'));
        tempDB.push( new FNAddress('Metepenagiag Mi kmaq Nation','14','NB','PO BOX 293','','METEPENAGIAG MI KMAQ NATION','NB','E9E 2P2'));
        tempDB.push( new FNAddress('Bear River','21','NS','PO BOX 210','','BEAR RIVER','NS','B0S 1B0'));
        tempDB.push( new FNAddress('Eskasoni','23','NS','PO BOX 7040, 63 MINI MALL DRIVE','','ESKASONI','NS','B1W 1A6'));
        tempDB.push( new FNAddress('Glooscap First Nation','30','NS','159 SMITH ROAD','','HANTSPORT','NS','B0P 1P0'));
        tempDB.push( new FNAddress('Membertou','26','NS','111 MEMBERTOU STREET','','SYDNEY','NS','B1S 2M9'));
        tempDB.push( new FNAddress('Millbrook','27','NS','PO BOX 634','','TRURO','NS','B2N 5E5'));
        tempDB.push( new FNAddress('Paqtnkek Mi kmaw Nation','19','NS','RR 1, 7 DILLAN STREET','','AFTON','NS','B0H 1A0'));
        tempDB.push( new FNAddress('Pictou Landing','24','NS','43 MAPLE STREET, RR #2 BOX 55 SITE 6','','TRENTON','NS','B0K 1X0'));
        tempDB.push( new FNAddress('Potlotek First Nation','22','NS','12004 Highway 4','','CHAPEL ISLAND','NS','B0E 3B0'));
        tempDB.push( new FNAddress('SIPEKNE KATIK','25','NS','522 CHURCH STREET','','INDIAN BROOK','NS','B0N 1W0'));
        tempDB.push( new FNAddress('Ka a gee Tu First Nation','768','NT','PO BOX 4428','','HAY RIVER','NT','X0E 1G3'));
        tempDB.push( new FNAddress('Liidlii Kue First Nation','757','NT','PO BOX 469','','FORT SIMPSON','NT','X0E 0N0'));
        tempDB.push( new FNAddress('Lutsel K e Dene First Nation','764','NT','PO BOX 28','','LUTSEL K E','NT','X0E 1A0'));
        tempDB.push( new FNAddress('Nahanni Butte','766','NT','GENERAL DELIVERY','','NAHANNI BUTTE','NT','X0E 0N0'));
        tempDB.push( new FNAddress('Animbiigoo Zaagi igan Anishinaabek','194','ON','PO BOX 120','','BEARDMORE','ON','P0T 1G0'));
        tempDB.push( new FNAddress('Anishinabe of Wauzhushk Onigum','153','ON','PO BOX 1850','','KENORA','ON','P9N 3X8'));
        tempDB.push( new FNAddress('Anishnaabeg of Naongashiing','125','ON','PO BOX 335','','MORSON','ON','P0W 1J0'));
        tempDB.push( new FNAddress('Aroland','242','ON','PO BOX 10','','AROLAND','ON','P0T 1B0'));
        tempDB.push( new FNAddress('Atikameksheng Anishnawbek','224','ON','25 RESERVE ROAD','','NAUGHTON','ON','P0M 2M0'));
        tempDB.push( new FNAddress('Attawapiskat','143','ON','PO BOX 248','','ATTAWAPISKAT','ON','P0L 1A0'));
        tempDB.push( new FNAddress('Aundeck-Omni-Kaning','180','ON','RR 1, COMP 21','','LITTLE CURRENT','ON','P0P 1K0'));
        tempDB.push( new FNAddress('Chippewas of Rama First Nation','139','ON','200 - 5884 RAMA ROAD','','RAMA','ON','L3V 6H6'));
        tempDB.push( new FNAddress('Chippewas of the Thames First Nation','166','ON','RR 1','','MUNCEY','ON','N0L 1Y0'));
        tempDB.push( new FNAddress('Constance Lake','182','ON','P.O. Box 4000','','CONSTANCE LAKE','ON','P0L 1B0'));
        tempDB.push( new FNAddress('Fort William','187','ON','200 - 90 ANEMKI PLACE','','FORT WILLIAM FIRST NATION','ON','P7J 1L3'));
        tempDB.push( new FNAddress('Garden River First Nation','199','ON','7 SHINGWAUK STREET, RR 4','','GARDEN RIVER','ON','P6A 6Z8'));
        tempDB.push( new FNAddress('Ginoogaming First Nation','185','ON','PO BOX 89','','LONGLAC','ON','P0T 2A0'));
        tempDB.push( new FNAddress('Grassy Narrows First Nation','149','ON','GENERAL DELIVERY','','GRASSY NARROWS','ON','P0X 1B0'));
        tempDB.push( new FNAddress('Gull Bay','188','ON','1186 MEMORIAL AVENUE','PO BOX 29100, MCINTYRE CENTRE','','THUNDER BAY','ON','P7B 6P9'));
        tempDB.push( new FNAddress('Hiawatha First Nation','162','ON','123 Paudash Street','','HIAWATHA FIRST NATION','ON','K9J 0E6'));
        tempDB.push( new FNAddress('Iskatewizaagegan #39 Independent First Nation','154','ON','GENERAL DELIVERY','','KEJICK','ON','P0X 1E0'));
        tempDB.push( new FNAddress('Kasabonika Lake','210','ON','PO BOX 124','','KASABONIKA LAKE','ON','P0V 1Y0'));
        tempDB.push( new FNAddress('Kee-Way-Win','325','ON','GENERAL DELIVERY','','KEEWAYWIN','ON','P0V 3G0'));
        tempDB.push( new FNAddress('Kingfisher','212','ON','PO BOX 57','','KINGFISHER LAKE','ON','P0V 1Z0'));
        tempDB.push( new FNAddress('North Spirit Lake','238','ON','GENERAL DELIVERY','','NORTH SPIRIT LAKE','ON','P0V 2G0'));
        tempDB.push( new FNAddress('Northwest Angle No.33','151','ON','BOX 1490','','KENORA','ON','P9N 3X7'));
        tempDB.push( new FNAddress('Ojibway Nation of Saugeen','258','ON','GENERAL DELIVERY','','SAVANT LAKE','ON','P0V 2S0'));
        tempDB.push( new FNAddress('Shoal Lake No.40','155','ON','GENERAL DELIVERY','','KEJICK','ON','P0X 1E0'));
        tempDB.push( new FNAddress('Wapekeka','206','ON','PO BOX 2','','WAPEKEKA','ON','P0V 1B0'));
        tempDB.push( new FNAddress('Wasauksing First Nation','136','ON','PO BOX 250','','PARRY SOUND','ON','P2A 2X4'));
        tempDB.push( new FNAddress('Washagamis Bay','235','ON','PO BOX 625','','KEEWATIN','ON','P0X 1C0'));
        tempDB.push( new FNAddress('Wawakapewin','234','ON','PO BOX 477','','SIOUX LOOKOUT','ON','P8T 1A8'));
        tempDB.push( new FNAddress('Cree Nation of Mistissini','75','QC','187 Main Street','','Mistissini','QC','G0W 1C0'));
        tempDB.push( new FNAddress('Cree Nation of Nemaska','59','QC','32 Machishteewyaau Trail','','Nemaska','QC','J0Y 3B0'));
        tempDB.push( new FNAddress('Cree Nation of Wemindji','60','QC','16 BEAVER ROAD,  PO BOX 60','','WEMINDJI','QC','J0M 1L0'));
        tempDB.push( new FNAddress('Eastmain','57','QC','76 Nouchimi,  P.O. Box 90','','Eastmain','QC','J0M 1W0'));
        tempDB.push( new FNAddress('Micmacs of Gesgapegiag','52','QC','100 PERRON BLVD','','GESGAPEGIAG','QC','G0C 1Y0'));
        tempDB.push( new FNAddress('Mohawks of Kahnawake','70','QC','P.O. Box 720','','Kahnawake','QC','J0L 1B0'));
        tempDB.push( new FNAddress('Mohawks of Kanesatake','69','QC','681 Ste-Philomene Street','','Kanesatake','QC','J0N 1E0'));
        tempDB.push( new FNAddress('Montagnais de Pakua Shipi','88','QC','CP 178','','St-Augustin-Saguenay','QC','G0G 2R0'));
        tempDB.push( new FNAddress('Montagnais de Unamen Shipu','84','QC','90 rue du Large','','La Romaine','QC','G0G 1M0'));
        tempDB.push( new FNAddress('Naskapi Nation of Kawawachikamach','81','QC','P.O. Box 5111','','Kawawachikamach','QC','G0G 2Z0'));
        tempDB.push( new FNAddress('Nation Anishnabe du Lac Simon','63','QC','1026 Boulevard Cicip, CP 139','','Lac Simon','QC','J0Y 3M0'));
        tempDB.push( new FNAddress('Nation Huronne Wendat','50','QC','255 place Chef-Michel-Laveau','','Wendake','QC','G0A 4V0'));
        tempDB.push( new FNAddress('Odanak','72','QC','104 Rue Sibosis','','Odanak','QC','J0G 1H0'));
        tempDB.push( new FNAddress('Ouje-Bougoumou Cree Nation','89','QC','203 Opemisika Meskino Street, P.O. Box 1169','','Ouje-Bougoumou,QC,G0W 3C0'));
        tempDB.push( new FNAddress('Birch Narrows First Nation','403','SK','GENERAL DELIVERY','','TURNOR LAKE','SK','S0M 3E0'));
        tempDB.push( new FNAddress('Black Lake','359','SK','PO BOX 27','','BLACK LAKE','SK','S0J 0H0'));
        tempDB.push( new FNAddress('Buffalo River Dene Nation','398','SK','GENERAL DELIVERY','','DILLON','SK','S0M 0S0'));
        tempDB.push( new FNAddress('Canoe Lake Cree First Nation','394','SK','GENERAL DELIVERY','','CANOE NARROWS','SK','S0M 0K0'));
        tempDB.push( new FNAddress('Carry The Kettle','378','SK','PO BOX 57','','SINTALUTA','SK','S0G 4N0'));
        tempDB.push( new FNAddress('Clearwater River Dene','401','SK','PO BOX 5050','','CLEARWATER RIVER','SK','S0M 3H0'));
        tempDB.push( new FNAddress('Cote First Nation 366','366','SK','PO BOX 1659','','KAMSACK','SK','S0A 1S0'));
        tempDB.push( new FNAddress('Little Pine','340','SK','PO BOX 70','','PAYNTON','SK','S0M 2J0'));
        tempDB.push( new FNAddress('Lucky Man','341','SK','103B PACKHAM AVENUE','','SASKATOON','SK','S7N 4K4'));
        tempDB.push( new FNAddress('Makwa Sahgaiehcan First Nation','396','SK','PO BOX 340','','LOON LAKE','SK','S0M 1L0'));
        tempDB.push( new FNAddress('Ministikwan Lake Cree Nation','397','SK','PO BOX 240','','ISLAND LAKE','SK','S0M 3G0'));
        tempDB.push( new FNAddress('Pasqua First Nation #79','383','SK','PO BOX 79','','PASQUA','SK','S0G 5M0'));
        tempDB.push( new FNAddress('Peepeekisis Cree Nation No.81','384','SK','PO BOX 518','','BALCARRES','SK','S0G 0C0'));
        tempDB.push( new FNAddress('Pelican Lake','405','SK','PO BOX 399','','LEOVILLE','SK','S0J 1N0'));
        tempDB.push( new FNAddress('Peter Ballantyne Cree Nation','355','SK','GENERAL DELIVERY','','PELICAN NARROWS','SK','S0P 0E0'));
        tempDB.push( new FNAddress('Pheasant Rump Nakota','409','SK','PO BOX 238','','KISBEY','SK','S0C 1L0'));
        tempDB.push( new FNAddress('Piapot','385','SK','GENERAL DELIVERY','','ZEHNER','SK','S0G 5K0'));
        tempDB.push( new FNAddress('Zagime Anishinabek','364','SK','PO BOX 339','','GRENFELL','SK','S0G 2B0'));
        tempDB.push( new FNAddress('Aishihik','490','YT','','','','',''));
        tempDB.push( new FNAddress('Alexander','438','AB','PO BOX 3419','','MORINVILLE','AB','T8R 1S3'));
        tempDB.push( new FNAddress('Alexis Nakota Sioux Nation','437','AB','PO BOX 7','','GLENEVIS','AB','T0E 0X0'));
        tempDB.push( new FNAddress('Athabasca Chipewyan First Nation','463','AB','PO BOX 366','','FORT CHIPEWYAN','AB','T0P 1B0'));
        tempDB.push( new FNAddress('Bearspaw','473','AB','PO BOX 40','','MORLEY','AB','T0L 1N0'));
        tempDB.push( new FNAddress('Beaver First Nation','445','AB','PO BOX 270','','HIGH LEVEL','AB','T0H 1Z0'));
        tempDB.push( new FNAddress('Beaver Lake Cree Nation','460','AB','PO BOX 960','','LAC LA BICHE','AB','T0A 2C0'));
        tempDB.push( new FNAddress('Bigstone Cree Nation','458','AB','PO BOX 960','','WABASCA','AB','T0G 2K0'));
        tempDB.push( new FNAddress('Blood','435','AB','PO BOX 60','','STANDOFF','AB','T0L 1Y0'));
        tempDB.push( new FNAddress('Chiniki','433','AB','PO BOX 40','','MORLEY','AB','T0L 1N0'));
        tempDB.push( new FNAddress('Chipewyan Prairie First Nation','470','AB','GENERAL DELIVERY','','CHARD','AB','T0P 1G0'));
        tempDB.push( new FNAddress(' Cold Lake First Nations','464','AB','PO BOX 1769','','COLD LAKE','AB','T9M 1P4'));
        tempDB.push( new FNAddress('Dene Tha','448','AB','PO BOX 120','','CHATEH','AB','T0H 0S0'));
        tempDB.push( new FNAddress('Driftpile Cree Nation','450','AB','PO BOX 30',',DRIFTPILE,AB,T0G 0V0'));
        tempDB.push( new FNAddress('Duncan s First Nation','451','AB','PO BOX 148','','BROWNVALE','AB','T0H 0L0'));
        tempDB.push( new FNAddress('Enoch Cree Nation #440','440','AB','PO BOX 29','','ENOCH','AB','T7X 3Y3'));
        tempDB.push( new FNAddress('Horse Lake First Nation','449','AB','PO BOX 303','','HYTHE','AB','T0H 2C0'));
        tempDB.push( new FNAddress('Kapawe no First Nation','452','AB','PO BOX 10','','GROUARD','AB','T0G 1C0'));
        tempDB.push( new FNAddress('Kehewin Cree Nation','466','AB','PO BOX 220','','KEHEWIN','AB','T0A 1C0'));
        tempDB.push( new FNAddress('Little Red River Cree Nation','447','AB','PO BOX 30','','JOHN D OR PRAIRIE','AB','T0H 3X0'));
        tempDB.push( new FNAddress('Loon River Cree','476','AB','PO BOX 189','','RED EARTH CREEK','AB','T0G 1X0'));
        tempDB.push( new FNAddress('Louis Bull','439','AB','PO BOX 130','','MASKWACIS','AB','T0C 1N0'));
        tempDB.push( new FNAddress('Lubicon Lake','453','AB','PO BOX 1351','','ISIDORE','AB','T0H 3B0'));
        tempDB.push( new FNAddress('Mikisew Cree First Nation','461','AB','PO BOX 90','','FORT CHIPEWYAN','AB','T0P 1B0'));
        tempDB.push( new FNAddress('Montana','442','AB','PO BOX 70','','MASKWACIS','AB','TOC 1N0'));
        tempDB.push( new FNAddress('O Chiese','431','AB','PO BOX 1570','','ROCKY MOUNTAIN HOUSE','AB','T4T 1B2'));
        tempDB.push( new FNAddress('Paul','441','AB','PO BOX 89','','DUFFIELD','AB','T0E 0N0'));
        tempDB.push( new FNAddress('Peerless Trout First Nation','478','AB','PO BOX 128','','PEERLESS LAKE','AB','T0G 2W0'));
        tempDB.push( new FNAddress('Piikani Nation','436','AB','PO BOX 70','','BROCKET','AB','T0K 0H0'));
        tempDB.push( new FNAddress('Saddle Lake Cree Nation','462','AB','PO BOX 100','','SADDLE LAKE','AB','T0A 3T0'));
        tempDB.push( new FNAddress('Samson','444','AB','PO BOX 159','','MASKWACIS','AB','TOC 1NO'));
        tempDB.push( new FNAddress('Sawridge First Nation','454','AB','PO BOX 326','','SLAVE LAKE','AB','T0G 2A0'));
        tempDB.push( new FNAddress('Siksika Nation','430','AB','PO BOX 1100','','SIKSIKA','AB','T0J 3W0'));
        tempDB.push( new FNAddress('Smith s Landing First Nation','477','AB','PO BOX 1470','','FORT SMITH','NT','X0E 0P0'));
        tempDB.push( new FNAddress('Stoney','471','AB','PO BOX 40','','MORLEY','AB','T0L 1N0'));
        tempDB.push( new FNAddress('Sucker Creek','456','AB','PO BOX 65','','ENILDA','AB','T0G 0W0'));
        tempDB.push( new FNAddress('Sunchild First Nation','434','AB','PO BOX 747','','ROCKY MOUNTAIN HOUSE','AB','T4T 1A5'));
        tempDB.push( new FNAddress('Swan River First Nation','457','AB','PO BOX 270','','KINUSO','AB','T0G 1K0'));
        tempDB.push( new FNAddress('Tallcree Tribal Government','446','AB','PO BOX 100','','FORT VERMILION','AB','T0H 1N0'));
        tempDB.push( new FNAddress('Tsuut ina Nation','432','AB','200 - 9911 CHIILA BLVD SW','','TSUU T INA','AB','T2W 6H6'));
        tempDB.push( new FNAddress('Wesley','475','AB','PO BOX 40','','MORLEY','AB','T0L 1N0'));
        tempDB.push( new FNAddress('Whitefish Lake','459','AB','GENERAL DELIVERY','','ATIKAMEG','AB','T0G 0C0'));
        tempDB.push( new FNAddress('Woodland Cree First Nation','474','AB','GENERAL DELIVERY','','CADOTTE LAKE','AB','T0H 0N0'));
        tempDB.push( new FNAddress('Akisqnuk First Nation','604','BC','3050 HIGHWAY 93 / 95','','WINDERMERE','BC','V0B 2L2'));
        tempDB.push( new FNAddress('aqam Community','602','BC','7470 MISSION ROAD','','CRANBROOK','BC','V1C 7E5'));
        tempDB.push( new FNAddress('Esdilagh First Nation','709','BC','4 - 9001 WEST FRASER RD','','QUESNEL','BC','V2J 6R4'));
        tempDB.push( new FNAddress('Adams Lake','684','BC','PO BOX 588','','CHASE','BC','V0E 1M0'));
        tempDB.push( new FNAddress('Ahousaht','659','BC','GENERAL DELIVERY','','AHOUSAHT','BC','V0R 1A0'));
        tempDB.push( new FNAddress('Aitchelitz','558','BC','8161 AITCHELITZ ROAD','','CHILLIWACK','BC','V2R 4H4'));
        tempDB.push( new FNAddress('Ashcroft','685','BC','PO BOX 440','','ASHCROFT','BC','V0K 1A0'));
        tempDB.push( new FNAddress('Boston Bar First Nation','701','BC','PO BOX 369','','BOSTON BAR','BC','V0K 1C0'));
        tempDB.push( new FNAddress('Bridge River','590','BC','PO BOX 190','','LILLOOET','BC','V0K 1V0'));
        tempDB.push( new FNAddress('Burns Lake','619','BC','BAG 9000','','BURNS LAKE','BC','V0J 1E0'));
        tempDB.push( new FNAddress('Campbell River','622','BC','1650 OLD SPIT ROAD','','CAMPBELL RIVER','BC','V9W 3E8'));
        tempDB.push( new FNAddress('Canim Lake','713','BC','PO BOX 1030','','100 MILE HOUSE','BC','V0K 2E0'));
        tempDB.push( new FNAddress('Cape Mudge','623','BC','690 HEADSTART CRES','','CAMPBELL RIVER','BC','V9H 1P9'));
        tempDB.push( new FNAddress('Cayoose Creek','591','BC','PO BOX 484','','LILLOOET','BC','V0K 1V0'));
        tempDB.push( new FNAddress('Chawathil','583','BC','4-60814 LOUGHEED HIGHWAY','','HOPE','BC','V0X 1L3'));
        tempDB.push( new FNAddress('Cheam','584','BC','52161 Victor Drive','','Rosedale','BC','V0X 1X1'));
        tempDB.push( new FNAddress(' Cheslatta Carrier Nation','620','BC','PO BOX 909','','BURNS LAKE','BC','V0J 1E0'));
        tempDB.push( new FNAddress('Coldwater','693','BC','PO BOX 4600','','MERRITT','BC','V1K 1B8'));
        tempDB.push( new FNAddress('Cook s Ferry','694','BC','PO BOX 130','','SPENCES BRIDGE','BC','V0K 2L0'));
        tempDB.push( new FNAddress('Cowichan','642','BC','5760 ALLENBY ROAD','','DUNCAN,BC','V9L 5J1'));
        tempDB.push( new FNAddress('Da naxda xw First Nation','635','BC','PO BOX 330','','ALERT BAY','BC','V0N 1A0'));
        tempDB.push( new FNAddress('Ditidaht','662','BC','PO BOX 340','','PORT ALBERNI','BC','V9Y 7M8'));
        tempDB.push( new FNAddress('Doig River First Nation','548','BC','PO BOX 56','','ROSE PRAIRIE','BC','V0C 2H0'));
        tempDB.push( new FNAddress('Esquimalt','644','BC','1189 KOSAPSUM CRESCENT','','VICTORIA','BC','V9A 7K7'));
        tempDB.push( new FNAddress('Fort Nelson First Nation','543','BC','MILE 295 ALASKA HWY,  RR 1','','FORT NELSON','BC','V0C 1R0'));
        tempDB.push( new FNAddress('Gitanmaax','531','BC','PO BOX 440','','HAZELTON','BC','V0J 1Y0'));
        tempDB.push( new FNAddress('Gitanyow','537','BC','PO BOX 340','','KITWANGA','BC','V0J 2A0'));
        tempDB.push( new FNAddress('Gitga at First Nation','675','BC','GENERAL DELIVERY, 445 HAYIMIISAXAA WAY','','HARTLEY BAY','BC','V0V 1A0'));
        tempDB.push( new FNAddress('Gitsegukla','535','BC','710 RAY CHARLES AVE','','GITSEGUKLA','BC','V0J 2J3'));
        tempDB.push( new FNAddress('Gitwangak','536','BC','PO BOX 400','','KITWANGA','BC','V0J 2A0'));
        tempDB.push( new FNAddress('Gitxaala Nation','672','BC','PO BOX 149','','KITKATLA','BC','V0V 1C0'));
        tempDB.push( new FNAddress('Glen Vowell','533','BC','9500 SIK-E-DAKH RD','','SIK-E-DAKH','BC','V0J 1Y3'));
        tempDB.push( new FNAddress('Gwa Sala-Nakwaxda xw','724','BC','PO BOX 998','','PORT HARDY','BC','V0N 2P0'));
        tempDB.push( new FNAddress('Gwawaenuk Tribe','627','BC','PO BOX 344','','PORT MCNEIL','BC','V0N 2R0'));
        tempDB.push( new FNAddress('Hagwilget First Nation Government','534','BC','PO BOX 460','','NEW HAZELTON','BC','V0J 2J0'));
        tempDB.push( new FNAddress('Haisla Nation','676','BC','PO BOX 1101','','HAISLA','BC','V0T 2B0'));
        tempDB.push( new FNAddress('Halalt','645','BC','7973 CHEMAINUS ROAD,  RR 5','','CHEMAINUS','BC','V0R 1K5'));
        tempDB.push( new FNAddress('Halfway River First Nation','546','BC','PO BOX 59','','WONOWON','BC','V0C 2N0'));
        tempDB.push( new FNAddress('Heiltsuk','538','BC','PO BOX 880','','BELLA BELLA','BC','V0T 1Z0'));
        tempDB.push( new FNAddress('Hesquiaht','661','BC','PO BOX 2000','','TOFINO','BC','V0R 2Z0'));
        tempDB.push( new FNAddress('High Bar','703','BC','PO BOX 458','','CLINTON','BC','V0K 1K0'));
        tempDB.push( new FNAddress('Homalco','552','BC','1218 BUTE CRESCENT','','CAMPBELL RIVER','BC','V9H 1G5'));
        tempDB.push( new FNAddress('Hupacasath First Nation','664','BC','PO BOX 211','','PORT ALBERNI','BC','V9Y 7M7'));
        tempDB.push( new FNAddress(' Huu-ay-aht First Nations','663','BC','HUU-AY-AHT TREATY OFFICE, 3483 3RD AVE','','PORT ALBERNI','BC','V9Y 4E4'));
        tempDB.push( new FNAddress('Iskut','683','BC','PO BOX 30','','ISKUT','BC','V0J 1K0'));
        tempDB.push( new FNAddress('Komoks First Nation','624','BC','3330 COMOX ROAD','','COURTENAY','BC','V9N 3P8'));
        tempDB.push( new FNAddress('Kyuquot/Cheklesahht First Nations','638','BC','GENERAL DELIVERY','','KYUQUOT','BC','V0P 1J0'));
        tempDB.push( new FNAddress('Kanaka Bar','704','BC','PO BOX 610, 2693 SIWASH ROAD','','LYTTON','BC','V0K 1Z0'));
        tempDB.push( new FNAddress('Katzie','563','BC','10946 KATZIE ROAD','','PITT MEADOWS','BC','V3Y 2G6'));
        tempDB.push( new FNAddress('Kispiox','532','BC','1336 KISPIOX VALLEY ROAD','','KISPIOX','BC','V0J 1Y4'));
        tempDB.push( new FNAddress('Kitasoo','540','BC','GENERAL DELIVERY','','KLEMTU','BC','V0T 1L0'));
        tempDB.push( new FNAddress('Kitselas','680','BC','2225 GITAUS ROAD','','TERRACE','BC','V8G 0A9'));
        tempDB.push( new FNAddress('Kitsumkalum','681','BC','PO BOX 544','','TERRACE','BC','V8G 4B5'));
        tempDB.push( new FNAddress('Klahoose First Nation','553','BC','PO BOX 9, CORTES ISLAND','','SQUIRREL COVE','BC','V0P 1T0'));
        tempDB.push( new FNAddress('Kwadacha','610','BC','497 - 3RD AVENUE','','PRINCE GEORGE','BC','V2L 3C1'));
        tempDB.push( new FNAddress('Kwakiutl','626','BC','PO BOX 1440,,PORT HARDY','BC','V0N 2P0'));
        tempDB.push( new FNAddress('Kwantlen First Nation','564','BC','23690 GABRIEL LANE,  PO BOX 108','','FORT LANGLEY','BC','V1M 2R4'));
        tempDB.push( new FNAddress('Kwaw-kwaw-Apilt','580','BC','BLDG#10 3RD FLOOR,  7201 VEDDER RD','','CHILLIWACK','BC','V2R 4L9'));
        tempDB.push( new FNAddress('Kwiakah','628','BC','PO BOX 437, STATION A','','CAMPBELL RIVER','BC','V9W 5B6'));
        tempDB.push( new FNAddress('Leq a:mel First Nation','579','BC','43101 LEQ A: MEL WAY','','DEROCHE','BC','V0M 1G0'));
        tempDB.push( new FNAddress('Lheidli T enneh','611','BC','1041 WHENUN ROAD','','PRINCE GEORGE','BC','V2K 5X8'));
        tempDB.push( new FNAddress('Lhoosk uz Dene Nation','721','BC','PO BOX 4339','','QUESNEL','BC','V2J 3J8'));
        tempDB.push( new FNAddress('Lhtako Dene Nation','715','BC','PO BOX 4069','','QUESNEL','BC','V2J 3J2'));
        tempDB.push( new FNAddress('Lil wat Nation','557','BC','PO BOX 602','','MOUNT CURRIE','BC','V0N 2K0'));
        tempDB.push( new FNAddress('Little Shuswap Lake','689','BC','1886 LITTLE SHUSWAP LAKE ROAD','','CHASE','BC','V0E 1M2'));
        tempDB.push( new FNAddress('Lower Kootenay','606','BC','830 SIMON ROAD','','CRESTON','BC','V0B 1G2'));
        tempDB.push( new FNAddress('Lower Nicola','695','BC','181 NAWISHASKIN LANE','','MERRITT','BC','V1K 0A7'));
        tempDB.push( new FNAddress('Lower Similkameen','598','BC','517TH AVENUE, PO BOX 100','','KEREMEOS','BC','V0X 1N0'));
        tempDB.push( new FNAddress('Lyackson','646','BC','7973A CHEMAINUS ROAD','','CHEMAINUS','BC','V0R 1K5'));
        tempDB.push( new FNAddress('Lytton','705','BC','PO BOX 20','','LYTTON','BC','V0K 1Z0'));
        tempDB.push( new FNAddress('Malahat Nation','647','BC','110 THUNDER ROAD,  RR 4','','MILL BAY','BC','V0R 2P4'));
        tempDB.push( new FNAddress('Mamalilikulla First Nation','629','BC','1441-B 16TH AVENUE','','CAMPBELL RIVER','BC','V9W 2E4'));
        tempDB.push( new FNAddress('Matsqui First Nation','565','BC','PO BOX 10','','MATSQUI','BC','V4X 3R2'));
        tempDB.push( new FNAddress('McLeod Lake','618','BC','GENERAL DELIVERY','','MCLEOD LAKE','BC','V0J 2G0'));
        tempDB.push( new FNAddress('Metlakatla First Nation','673','BC','PO BOX 459','','PRINCE RUPERT','BC','V8J 3R2'));
        tempDB.push( new FNAddress('Mowachaht/Muchalaht','630','BC','PO BOX 459','','GOLD RIVER','BC','V0P 1G0'));
        tempDB.push( new FNAddress('Musqueam','550','BC','6735 SALISH DRIVE','','VANCOUVER','BC','V6N 4C4'));
        tempDB.push( new FNAddress('Nak azdli Whut en','614','BC','PO BOX 1329','','FORT ST. JAMES','BC','V0J 1P0'));
        tempDB.push( new FNAddress('Namgis First Nation','631','BC','PO BOX 210','','ALERT BAY','BC','V0N 1A0'));
        tempDB.push( new FNAddress('Nanoose First Nation','649','BC','209 MALLARD WAY','','LANTZVILLE','BC','V0R 2H0'));
        tempDB.push( new FNAddress('Nazko First Nation','720','BC','PO BOX 4129','','QUESNEL','BC','V2J 3J2'));
        tempDB.push( new FNAddress('Nee-Tahi-Buhn','726','BC','47805 OLSON ROAD','','BURNS LAKE','BC','V0J 1E4'));
        tempDB.push( new FNAddress('Neskonlith','690','BC','PO BOX 318','','CHASE','BC','V0E 1M0'));
        tempDB.push( new FNAddress('New Westminster','566','BC','105 - 3680 RAE AVENUE','','VANCOUVER','BC','V5R 2P5'));
        tempDB.push( new FNAddress('Nicomen','696','BC','PO BOX 670','','LYTTON','BC','V0K 1Z0'));
        tempDB.push( new FNAddress('Nisga a Village of Gingolx','671','BC','607 FRONT ST','','GINGOLX','BC','V0V 1B0'));
        tempDB.push( new FNAddress('Nisga a Village of Gitwinksihlkw','679','BC','PO BOX 1, 3004 TS OOHL TS AP AVE','','GITWINKSIHLKW','BC','V0J 3T0'));
        tempDB.push( new FNAddress('Nisga a Village of Laxgalt sap','678','BC','PO BOX 200, 416 NORTH RD','','GREENVILLE','BC','V0J 1X0'));
        tempDB.push( new FNAddress('Nisga a Village of New Aiyansh','677','BC','PO BOX 233,  5200 SKATEEN DR','','NEW AIYANSH','BC','V0J 1A0'));
        tempDB.push( new FNAddress('Nooaitch','699','BC','2954 SHACKELLY ROAD','','MERRITT','BC','V1K 1N9'));
        tempDB.push( new FNAddress('Nuchatlaht','639','BC','PO BOX 40','','ZEBALLOS','BC','V0P 2A0'));
        tempDB.push( new FNAddress('Nuxalk Nation','539','BC','PO BOX 65','','BELLA COOLA','BC','V0T 1C0'));
        tempDB.push( new FNAddress('Okanagan','616','BC','12420 WESTSIDE RD','','VERNON','BC','V1H 2A4'));
        tempDB.push( new FNAddress('Old Massett Village Council','669','BC','PO BOX 189','','OLD MASSET','BC','V0T 1M0'));
        tempDB.push( new FNAddress('Oregon Jack Creek','692','BC','PO BOX 940','','ASHCROFT','BC','V0K 1A0'));
        tempDB.push( new FNAddress('Pauquachin','652','BC','9010 WEST SAANICH ROAD','','SIDNEY','BC','V8L 5W4'));
        tempDB.push( new FNAddress('Penelakut Tribe','650','BC','PO BOX 360','','CHEMAINUS','BC','V0R 1K0'));
        tempDB.push( new FNAddress('Penticton','597','BC','RR 2 SITE 80 COMP 19','','PENTICTON','BC','V2A 6J7'));
        tempDB.push( new FNAddress('Peters First Nation','586','BC','16870 PETERS ROAD','','HOPE','BC','V0X 1L2'));
        tempDB.push( new FNAddress('Popkum','585','BC','54951 JULSETH ROAD','','POPKUM','BC','V0X 1X1'));
        tempDB.push( new FNAddress('Prophet River First Nation','544','BC','PO BOX 3250','','FORT NELSON','BC','V0C 1R0'));
        tempDB.push( new FNAddress('Qualicum First Nation','651','BC','5850 RIVER ROAD','','QUALICUM BEACH','BC','V9K 1Z5'));
        tempDB.push( new FNAddress('Quatsino','633','BC','305 QUATTISHE ROAD','','COAL HARBOUR','BC','V0N 1K0'));
        tempDB.push( new FNAddress('Saik uz First Nation','615','BC','135 JOSEPH STREET','','VANDERHOOF','BC','V0J 3A1'));
        tempDB.push( new FNAddress('Samahquam','567','BC','PO BOX 610','','MOUNT CURRIE','BC','V0N 2K0'));
        tempDB.push( new FNAddress('Saulteau First Nations','542','BC','PO BOX 1020','','CHETWYND','BC','V0C 1J0'));
        tempDB.push( new FNAddress('Seabird Island','581','BC','PO BOX 650','','AGASSIZ','BC','V0M 1A0'));
        tempDB.push( new FNAddress('Sechelt','551','BC','PO BOX 740, 5555 SUNSHINE COAST HWY','','SECHELT','BC','V0N 3A0'));
        tempDB.push( new FNAddress('Semiahmoo','569','BC','16049 BEACH ROAD','','SURREY','BC','V3S 9R6'));
        tempDB.push( new FNAddress('Shackan','698','BC','PO BOX 1360','','MERRITT','BC','V1K 1B8'));
        tempDB.push( new FNAddress('Shuswap','605','BC','RR#2, 3A - 492 Arrow Road','','INVERMERE','BC','V0A 1K2'));
        tempDB.push( new FNAddress('Skatin Nations','562','BC','PO Box 478','','Mount Currie','BC','V0N 2K0'));
        tempDB.push( new FNAddress('Skawahlook First Nation','582','BC','58611A LOUGHEED HWY','','AGASSIZ','BC','V0M 1A2'));
        tempDB.push( new FNAddress('Skeetchestn','687','BC','PO BOX 178','','SAVONA','BC','V0K 2J0'));
        tempDB.push( new FNAddress('Skidegate','670','BC','PO BOX 1301','','SKIDEGATE','BC','V0T 1S1'));
        tempDB.push( new FNAddress('Skin Tyee','729','BC','PO BOX 131','','SOUTHBANK','BC','V0J 2P0'));
        tempDB.push( new FNAddress('Skowkale','571','BC','PO BOX 2159','','SARDIS','BC','V2R 1A7'));
        tempDB.push( new FNAddress('Skuppah','707','BC','PO BOX 548','','LYTTON','BC','V0K 1Z0'));
        tempDB.push( new FNAddress('Skwah','573','BC','PO BOX 178','','CHILLIWACK','BC','V2P 6H7'));
        tempDB.push( new FNAddress('Snuneymuxw First Nation','648','BC','668 CENTRE STREET','','NANAIMO','BC','V9R 4Z4'));
        tempDB.push( new FNAddress('Soda Creek','716','BC','3405 MOUNTAIN HOUSE ROAD','','WILLIAMS LAKE','BC','V2G 5L5'));
        tempDB.push( new FNAddress('Songhees Nation','656','BC','1100 ADMIRALS RD','','VICTORIA','BC','V9A 2P6'));
        tempDB.push( new FNAddress('Stz uminus First Nation','641','BC','12611-A TRANS CANADA HIGHWAY','','LADYSMITH','BC','V9G 1M5'));
        tempDB.push( new FNAddress('Sumas First Nation','578','BC','2788 SUMAS MOUNTAIN ROAD','','ABBOTSFORD','BC','V3G 2J2'));
        tempDB.push( new FNAddress('T it q et','593','BC','PO BOX 615','','LILLOOET','BC','V0K 1V0'));
        tempDB.push( new FNAddress('Tahltan','682','BC','PO BOX 46','','TELEGRAPH CREEK','BC','V0J 2W0'));
        tempDB.push( new FNAddress('Takla Nation','608','BC','Unit 401-1777, 3rd Avenue','','PRINCE GEORGE','BC','V2L 3G7'));
        tempDB.push( new FNAddress('Tk emlups te Secwepemc','688','BC','200 - 330 CHIEF ALEX THOMAS WAY','','KAMLOOPS','BC','V2H 1H1'));
        tempDB.push( new FNAddress('Tl azt en Nation','617','BC','PO BOX 670','','FORT ST. JAMES','BC','V0J 1P0'));
        tempDB.push( new FNAddress('Tl etinqox Government','712','BC','PO BOX 168','','ALEXIS CREEK','BC','V0L 1A0'));
        tempDB.push( new FNAddress('Tla-o-qui-aht First Nations','660','BC','PO BOX 18','','TOFINO','BC','V0R 2Z0'));
        tempDB.push( new FNAddress('Tlatlasikwala','632','BC','PO BOX 339','','PORT HARDY','BC','V0N 2P0'));
        tempDB.push( new FNAddress('Tlowitsis Tribe','637','BC','1345 BUTE CRESCENT','','CAMPBELL RIVER','BC','V9H 1G6'));
        tempDB.push( new FNAddress('Tobacco Plains','603','BC','PO BOX 76','','GRASMERE','BC','V0B 1R0'));
        tempDB.push( new FNAddress('Toosey','718','BC','PO BOX 80','','RISKE CREEK','BC','V0L 1T0'));
        tempDB.push( new FNAddress('Toquaht','666','BC','1971 PENINSULA ROAD, PO BOX 759','','UCLUELET','BC','V0R 3A0'));
        tempDB.push( new FNAddress('Ts kw aylaxw First Nation','594','BC','PO BOX 2200','','LILLOOET','BC','V0K 1V0'));
        tempDB.push( new FNAddress('Tsawout First Nation','654','BC','7728 TETAYUT ROAD','','SAANICHTON','BC','V8M 2E4'));
        tempDB.push( new FNAddress('Tsawwassen First Nation','577','BC','1926 TSAWWASSEN DR. N.','','DELTA','BC','V4M 4G4'));
        tempDB.push( new FNAddress('Tsay Keh Dene','609','BC','1940 - 3rd Avenue','','Prince George','BC','V2M 1G7'));
        tempDB.push( new FNAddress('Tseshaht','665','BC','5091 TSUMA-AS DR','','PORT ALBERNI','BC','V9Y 8X9'));
        tempDB.push( new FNAddress('Tseycum','655','BC','1210 TOTEM LANE','','NORTH SAANICH','BC','V8L 5S4'));
        tempDB.push( new FNAddress('Tsideldel First Nation','710','BC','PO BOX 69','','CHILANKO FORKS','BC','V0L 1H0'));
        tempDB.push( new FNAddress('Tsleil-Waututh Nation','549','BC','3075 TAKAYA DRIVE','','NORTH VANCOUVER','BC','V7H 3A8'));
        tempDB.push( new FNAddress('Tzeachten','575','BC','45855 PROMONTORY ROAD','','CHILLIWACK','BC','V2R 0H3'));
        tempDB.push( new FNAddress('Uchucklesaht','667','BC','5251 ARGYLE STREET, SUITE A','','PORT ALBERNI','BC','V9Y 1V1'));
        tempDB.push( new FNAddress('Ucluelet First Nation','668','BC','PO BOX 699','','UCLUELET','BC','V0R 3A0'));
        tempDB.push( new FNAddress('Ulkatcho','722','BC','PO BOX 3430','','ANAHIM LAKE','BC','V0L 1C0'));
        tempDB.push( new FNAddress('Union Bar First Nation','588','BC','66427 KAWKAWA LAKE RD','','HOPE','BC','V0X 1L1'));
        tempDB.push( new FNAddress('Upper Nicola','697','BC','PO BOX 3700','','MERRITT','BC','V1K 1B8'));
        tempDB.push( new FNAddress('Upper Similkameen','599','BC','PO BOX 220','','HEDLEY','BC','V0X 1K0'));
        tempDB.push( new FNAddress('West Moberly First Nations','545','BC','PO BOX 90','','MOBERLY LAKE','BC','V0C 1X0'));
        tempDB.push( new FNAddress('Wuikinuxv Nation','541','BC','WUIKINUXV VILLAGE RIVERS INLET, PO BOX 3500','','PORT HARDY','BC','V0N 2P0'));
        tempDB.push( new FNAddress('Xaxli p','592','BC','PO BOX 1330','','LILLOOET','BC','V0K 1V0'));
        tempDB.push( new FNAddress('Xeni Gwet in First Nations Government','714','BC','GENERAL DELIVERY','','NEMIAH VALLEY','BC','V0L 1X0'));
        tempDB.push( new FNAddress('Yakweakwioose','576','BC','RR 2, 7176 CHILLIWACK RIVER ROAD','','SARDIS','BC','V2R 1B1'));
        tempDB.push( new FNAddress('Yale First Nation','589','BC','PO BOX 1869','','HOPE','BC','V0X 1L0'));
        tempDB.push( new FNAddress('Yekooche First Nation','728','BC','1890 - 3RD AVENUE','','PRINCE GEORGE','BC','V2M 1G4'));
        tempDB.push( new FNAddress('Yunesit in Government','717','BC','PO BOX 158','','HANCEVILLE','BC','V0L 1K0'));
        tempDB.push( new FNAddress('Barren Lands','308','MB','PO BOX 40','','BROCHET','MB','R0B 0B0'));
        tempDB.push( new FNAddress('Berens River','266','MB','PO BOX 131','','BERENS RIVER','MB','R0B 0A0'));
        tempDB.push( new FNAddress('Birdtail Sioux','284','MB','PO BOX 22','','BEULAH','MB','R0M 0B0'));
        tempDB.push( new FNAddress('Black River First Nation','260','MB','GENERAL DELIVERY','','O HANLEY','MB','R0E 1K0'));
        tempDB.push( new FNAddress('Bloodvein','267','MB','GENERAL DELIVERY','','BLOODVEIN','MB','R0C 0J0'));
        tempDB.push( new FNAddress('Brokenhead Ojibway Nation','261','MB','GENERAL DELIVERY','','SCANTERBURY','MB','R0E 1W0'));
        tempDB.push( new FNAddress('Buffalo Point First Nation','265','MB','PO BOX 1037','','BUFFALO POINT','MB','R0A 2W0'));
        tempDB.push( new FNAddress('Bunibonibee Cree Nation','301','MB','GENERAL DELIVERY','','OXFORD HOUSE','MB','R0B 1C0'));
        tempDB.push( new FNAddress('Dauphin River','316','MB','PO BOX 58','','GYPSUMVILLE','MB','R0C 1J0'));
        tempDB.push( new FNAddress('Ebb and Flow','280','MB','PO BOX 159','','EBB AND FLOW','MB','R0L 0R0'));
        tempDB.push( new FNAddress('Fisher River','264','MB','PO BOX 367','','KOOSTATAK','MB','R0C 1S0'));
        tempDB.push( new FNAddress('Fort Alexander','262','MB','PO BOX 3','','FORT ALEXANDER','MB','R0E 0P0'));
        tempDB.push( new FNAddress('Fox Lake','305','MB','PO BOX 369','','GILLAM','MB','R0B 0L0'));
        tempDB.push( new FNAddress('Gambler First Nation','294','MB','PO BOX 250','','BINSCARTH','MB','R0J 0G0'));
        tempDB.push( new FNAddress('Garden Hill First Nations','297','MB','GENERAL DELIVERY','','ISLAND LAKE','MB','R0B 0T0'));
        tempDB.push( new FNAddress('God s Lake First Nation','296','MB','PO BOX 258','','GOD S LAKE NARROWS','MB','R0B 0M0'));
        tempDB.push( new FNAddress('Hollow Water','263','MB','PO BOX 2561','','WANIPIGOW','MB','R0E 2E0'));
        tempDB.push( new FNAddress('Keeseekoowenin','286','MB','PO BOX 100','','ELPHINSTONE','MB','R0J 0N0'));
        tempDB.push( new FNAddress('Kinonjeoshtegon First Nation','268','MB','PO BOX 210','','DALLAS','MB','R0C 0S0'));
        tempDB.push( new FNAddress('Lake Manitoba','271','MB','PO BOX 1250','','LAKE MANITOBA FIRST NATION','MB','R0C 3K0'));
        tempDB.push( new FNAddress('Lake St. Martin','275','MB','550 BERRY ST','','WINNIPEG','MB','R3H 0R9'));
        tempDB.push( new FNAddress('Mosakahiken Cree Nation','312','MB','GENERAL DELIVERY','','MOOSE LAKE','MB','R0B 0Y0'));
        tempDB.push( new FNAddress('Nisichawayasihk Cree Nation','313','MB','GENERAL DELIVERY','','NELSON HOUSE','MB','R0B 1A0'));
        tempDB.push( new FNAddress('Northlands Denesuline First Nation','317','MB','PO BOX 120','','LAC BROCHET','MB','R0B 2E0'));
        tempDB.push( new FNAddress('Norway House Cree Nation','278','MB','PO BOX 250','','NORWAY HOUSE','MB','R0B 1B0'));
        tempDB.push( new FNAddress('O-Chi-Chak-Ko-Sipi First Nation','279','MB','PO BOX 103','','CRANE RIVER','MB','R0L 0M0'));
        tempDB.push( new FNAddress('O-Pipon-Na-Piwin Cree Nation','318','MB','PO BOX 139','','SOUTH INDIAN LAKE','MB','R0B 1N0'));
        tempDB.push( new FNAddress('Opaskwayak Cree Nation','315','MB','PO BOX 10880','','OPASKWAYAK','MB','R0B 2J0'));
        tempDB.push( new FNAddress('Pauingassi First Nation','327','MB','PO BOX 60','','PAUINGASSI','MB','R0B 2G0'));
        tempDB.push( new FNAddress('Peguis','269','MB','PO BOX 10','','PEGUIS RESERVE','MB','R0C 3J0'));
        tempDB.push( new FNAddress('Pinaymootang First Nation','272','MB','General Delivery','','FAIRFORD','MB','R0C 0X0'));
        tempDB.push( new FNAddress('Pine Creek','282','MB','PO BOX 70','','CAMPERVILLE','MB','R0L 0J0'));
        tempDB.push( new FNAddress('Poplar River First Nation','277','MB','PO BOX 90','','NEGGINAN','MB','R0B 0Z0'));
        tempDB.push( new FNAddress('Red Sucker Lake','300','MB','GENERAL DELIVERY','','RED SUCKER LAKE','MB','R0B 1H0'));
        tempDB.push( new FNAddress('Rolling River','291','MB','PO BOX 145','','ERICKSON','MB','R0J 0P0'));
        tempDB.push( new FNAddress('Roseau River Anishinabe First Nation Government','273','MB','PO BOX 30','','GINEW','MB','R0A 2R0'));
        tempDB.push( new FNAddress('Sandy Bay','283','MB','PO BOX 109','','MARIUS','MB','R0H 0T0'));
        tempDB.push( new FNAddress('Sapotaweyak Cree Nation','314','MB','GENERAL DELIVERY, VIA PELICAN RAPIDS','','PELICAN RAPIDS','MB','R0L 1L0'));
        tempDB.push( new FNAddress('Sayisi Dene First Nation','303','MB','GENERAL DELIVERY','','TADOULE LAKE','MB','R0B 2C0'));
        tempDB.push( new FNAddress('Skownan First Nation','281','MB','GENERAL DELIVERY','','SKOWNAN','MB','R0L 1Y0'));
        tempDB.push( new FNAddress('St. Theresa Point','298','MB','GENERAL DELIVERY','','ST THERESA POINT','MB','R0B 1J0'));
        tempDB.push( new FNAddress('Swan Lake','293','MB','PO BOX 368','','SWAN LAKE','MB','R0G 2S0'));
        tempDB.push( new FNAddress('Tataskweyak Cree Nation','306','MB','PO BOX 250','','SPLIT LAKE','MB','R0B 1P0'));
        tempDB.push( new FNAddress('Tootinaowaziibeeng Treaty Reserve','292','MB','P.O. Box 1','','SHORTDALE','MB','R0L 1W0'));
        tempDB.push( new FNAddress('War Lake First Nation','323','MB','GENERAL DELIVERY','','ILFORD','MB','R0B 0S0'));
        tempDB.push( new FNAddress('Wasagamack First Nation','299','MB','PO BOX 1','','WASAGAMACK','MB','R0B 1Z0'));
        tempDB.push( new FNAddress('Waywayseecappo First Nation Treaty Four - 1874','285','MB','PO BOX 9','','WAYWAYSEECAPPO','MB','R0J 1S0'));
        tempDB.push( new FNAddress('Wuskwi Sipihk First Nation','324','MB','PO BOX 220','','BIRCH RIVER','MB','R0L 0E0'));
        tempDB.push( new FNAddress('York Factory First Nation','304','MB','GENERAL DELIVERY','','YORK LANDING','MB','R0B 2B0'));
        tempDB.push( new FNAddress('Buctouche MicMac','4','NB','9 RESERVE ROAD','','BUCTOUCHE RESERVE','NB','E4S 4G2'));
        tempDB.push( new FNAddress('Eel Ground','7','NB','47 CHURCH RD','','EEL GROUND','NB','E1V 4E6'));
        tempDB.push( new FNAddress('Eel River Bar First Nation','8','NB','11 MAIN STREET, UNIT 201','','EEL RIVER BAR','NB','E8C 1A1'));
        tempDB.push( new FNAddress('Elsipogtog First Nation','3','NB','373 BIG COVE ROAD','','ELSIPOGTOG FIRST NATION','NB','E4W 2S3'));
        tempDB.push( new FNAddress('Esgenoopetitj First Nation','5','NB','621 BAYVIEW DRIVE','','BURNT CHURCH','NB','E9G 2A8'));
        tempDB.push( new FNAddress('Oromocto First Nation','12','NB','PO BOX 417, 4 HIAWATHA AVENUE','','OROMOCTO','NB','E2V 2J2'));
        tempDB.push( new FNAddress('Pabineau','13','NB','1290 PABINEAU FALLS ROAD','','PABINEAU FIRST NATION','NB','E2A 7M3'));
        tempDB.push( new FNAddress('Saint Mary s','15','NB','150 CLIFFE STREET','','FREDERICTON','NB','E3A 0A1'));
        tempDB.push( new FNAddress('Tobique','16','NB','13156 ROUTE 105','','TOBIQUE FIRST NATION','NB','E7H 5M7'));
        
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));
        tempDB.push( new FNAddress(''));

        // console.log(tempDB)
        this.setState({FNAddressDB:this.state.FNAddressDB.concat(tempDB)});
        this.updateBNL();
        tempDB.map(FNAdd => {
            tempFNDB.push(FNAdd.BandNum);
            // this.setState({BandNumLisst:this.state.BandNumList.concat(FNAdd.BandNum)});
        })
        // console.log(tempFNDB[0])
        this.setState({BandNumList:this.state.BandNumList.concat(tempFNDB)});

    }

    updateBNL = () => {
        // var tempDB = [];
        this.state.FNAddressDB.map(FNAdd => {
            // tempDB.push(FNAdd);
            this.setState({BandNumList:this.state.BandNumList.concat(FNAdd.BandNum)});
        })
        // console.log(tempDB[0]);

    }

    
    render(){
        const {communityValues, handleChange} = this.props;

        return(
            
            <div className="community-card center">
                <div className="co-details">
                    {/* <FirstNationDB getFirstNationData = {this.getFirstNationData}/> */}
                    <div className="cell-1">
                        Community:&emsp; <input type="text" placeholder=" Enter Community Name" className="inputV2" defaultValue={communityValues.community} onChange={handleChange('community')} />
                        {/* <b>{this.state.Db[0].Region}</b> */}
                    </div><br/>
                    
                    <div className="grid-CommunityDetails">
                        {/* <div className="cell-7">
                            Band Number:&emsp; <input type="value" maxLength="3" placeholder=" Enter Band Number" defaultValue={communityValues.bandNum} onChange={this.bandNumInputHandler}/>
                        </div>      */}
                        {/* <div className="cell-8">
                            <h1>{this.state.FNAddressDB.map((FNAdd) => (FNAdd.Region))}</h1>
                        </div>                   */}

                        <div className="search_select_box">
                        <div className="cell-7">
                           <label> Band Number:&emsp;<input list="browsers" name="myBrowser" maxLength="3" placeholder=" Enter Band Number" defaultValue={communityValues.bandNum} onChange={this.bandNumInputHandler}/> </label> <datalist id= "browsers" placeholder=" Enter Band Number" defaultValue={communityValues.bandNum} onChange={this.bandNumInputHandler} data-live-search="true" data-live-search-style="startsWith" class="selectpicker">
                                {this.state.BandNumList.map(lst => (
                                    <option key={lst}>{lst}</option>
                                ))}                              
                            </datalist>
                        </div>
                        </div>

                        
                            
                    </div>
                    
                </div>
                <br/><br/>
            </div>
            
        );
    }
}

export default CommunityDetails;