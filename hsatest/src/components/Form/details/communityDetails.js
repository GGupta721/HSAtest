import React from "react";
import "./CommunityDetails.css";
// import FNAddress from "../../FirstNationDB";
import FirstNationDB from "../../FirstNationDB";
import { toast } from 'react-toastify';


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
            BandNumList: ['Select Band Number'],
            AllowContinue : true
        }
    

        // state = {
        //     AllowContinue : true
        // }
    
        
    }

    authenticateResponses = () => {
        this.setState({AllowContinue: true});
    
        Object.entries(this.props.communityValues).map((inputField) =>{
            // console.log(inputField);
                if(inputField[1].length < 1 || inputField[1] === ''){
                    this.setState({AllowContinue: false});
                    
                }


                })
        
    }

    continue = async (eve) => {
            const result = await this.authenticateResponses();
            if(this.state.AllowContinue){
                    // console.log('once')
                    eve.preventDefault();
                    this.props.nextPage();
            }
            else if(this.state.AllowContinue===false){
                this.valdateQues("")
            }
    }

    valdateQues = (quesNum) => {
        toast.error(`Please provide an input for all the fields`, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: false
        });
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
        // console.log("testing 123  ")
        // console.log(this.state.searchText);

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
        tempDB.push( new FNAddress('Fort McKay First Nation', '467', 'Alberta',	'PO BOX 5360', 'FORT MCMURRAY', 'Alberta', 'T9H 3G4'));
        tempDB.push( new FNAddress('Fort McMurray #468 First Nation', '468', 'Alberta',	'PO BOX 6130, STN MAIN', 'FORT MCMURRAY', 'Alberta','T9H 4W1'));
        tempDB.push( new FNAddress('Frog Lake',	'465',	'Alberta', 'GENERAL DELIVERY', 'FROG LAKE', 'Alberta', 'T0A 1M0'));
        tempDB.push( new FNAddress('Heart Lake', '469',	'Alberta', 'PO BOX 447', 'LAC LA BICHE',	'Alberta','T0A 2C0'));
        tempDB.push( new FNAddress('Sturgeon Lake Cree Nation',	'455', 'Alberta', 'PO BOX 757',	'VALLEYVIEW', 'Alberta',	'T0H 3N0'));
        tempDB.push( new FNAddress('Beecher Bay','640','British Columbia','4901B EAST SOOKE ROAD','SOOKE','British Columbia','V9Z 1B6'));
        tempDB.push( new FNAddress('Binche Whut\'en','730','British Columbia','204 Mandine Drive, PO Box 2039','Fort St. James','British Columbia','V0J 1P0'));
        tempDB.push( new FNAddress('Blueberry River First Nations','547','British Columbia','PO BOX 3009','BUICK CREEK','British Columbia','V0C 2R0'));
        tempDB.push( new FNAddress('Bonaparte','686','British Columbia','PO BOX 669','CACHE CREEK','British Columbia','V0K 1H0'));
        tempDB.push( new FNAddress('Boothroyd','700','British Columbia','PO BOX 70','BOSTON BAR','British Columbia','V0K 1C0'));
        tempDB.push( new FNAddress('Douglas','561','British Columbia','PO BOX 606','MOUNT CURRIE,BC','V0N 2K0'));
        tempDB.push( new FNAddress('Dzawada enuxw First Nation','636','British Columbia','GENERAL DELIVERY','KINGCOME INLET','British Columbia','V0N 2B0'));
        tempDB.push( new FNAddress('Ehattesaht','634','British Columbia','PO BOX 59','ZEBALLOS','British Columbia','V0P 2A0'));
        tempDB.push( new FNAddress('Esk etemc','711','British Columbia','PO BOX 157','ALKALI LAKE','British Columbia','V0L 1B0'));
        tempDB.push( new FNAddress('Kwikwasut inuxw Haxwa mis','625','British Columbia','PO BOX 10','ALERT BAY','British Columbia','V0N 1A0'));
        tempDB.push( new FNAddress('Kwikwetlem First Nation','560','British Columbia','2 - 65 COLONY FARM ROAD','COQUITLAM','British Columbia','V3C 5X9'));
        tempDB.push( new FNAddress('Lake Babine Nation','607','British Columbia','PO BOX 879','BURNS LAKE','British Columbia','V0J 1E0'));
        tempDB.push( new FNAddress('Lax Kw alaams','674','British Columbia','206 SHASHAAK STREET','LAX KW ALAAMS','British Columbia','V0V 1H0'));
        tempDB.push( new FNAddress('N Quatqua','556','British Columbia','PO BOX 88','D ARCY','British Columbia','V0N 1L0'));
        tempDB.push( new FNAddress('Nadleh Whuten','612','British Columbia','PO BOX 36','FORT FRASER','British Columbia','V0J 1N0'));
        tempDB.push( new FNAddress('Osoyoos','596','British Columbia','1155 SEN POK CHIN BLVD','OLIVER','British Columbia','V0H 1T8'));
        tempDB.push( new FNAddress('Pacheedaht First Nation','658','British Columbia','350 Kalaid Street, Box 170','PORT RENFREW','British Columbia','V0S 1K0'));
        tempDB.push( new FNAddress('Shxw ow hamel First Nation','587','British Columbia','58700A ST. ELMO ROAD','HOPE','British Columbia','V0X 1L2'));
        tempDB.push( new FNAddress('Shxwha:y Village','570','British Columbia','44680 SCHWEYEY ROAD','CHILLIWACK','British Columbia','V2R 5M5'));
        tempDB.push( new FNAddress('Simpcw First Nation','691','British Columbia','PO BOX 220','BARRIERE','British Columbia','V0E 1E0'));
        tempDB.push( new FNAddress('Siska','706','British Columbia','PO BOX 519','LYTTON','British Columbia','V0K 1Z0'));
        tempDB.push( new FNAddress('Soowahlie','572','British Columbia','4393 SOOWAHLIE ROAD','CULTUS LAKE','British Columbia','V2R 4Y2'));
        tempDB.push( new FNAddress('Splatsin','600','British Columbia','PO BOX 460','ENDERBY','British Columbia','V0E 1V0'));
        tempDB.push( new FNAddress('Spuzzum','708','British Columbia','SITE 3,  C 11,  RR 1','YALE','British Columbia','V0K 2S0'));
        tempDB.push( new FNAddress('Sq ewlets','568','British Columbia','PO BOX 76','LAKE ERROCK','British Columbia','V0M 1N0'));
        tempDB.push( new FNAddress('Squamish','555','British Columbia','PO BOX 86131','NORTH VANCOUVER','British Columbia','V7L 4J5'));
        tempDB.push( new FNAddress('Squiala First Nation','574','British Columbia','45005 SQUIALA ROAD','CHILLIWACK','British Columbia','V2P 7Z9'));
        tempDB.push( new FNAddress('Stellat en First Nation','613','British Columbia','PO BOX 760','FRASER LAKE','British Columbia','V0J 1S0'));
        tempDB.push( new FNAddress('Sts ailes','559','British Columbia','4690 SALISH WAY, CHEHALIS ROAD','AGASSIZ','British Columbia','V0M 1A1'));
        tempDB.push( new FNAddress('Stswecem c Xgat tem First Nation','723','British Columbia','GENERAL DELIVERY','DOG CREEK','British Columbia','V0L 1J0'));
        tempDB.push( new FNAddress('Ts uubaa-asatx','643','British Columbia','313B DEER ROAD','PO BOX 159','LAKE COWICHAN','British Columbia','V0R 2G0'));
        tempDB.push( new FNAddress('Tsal alh','595','British Columbia','SITE 3 BOX 76','SHALALTH','British Columbia','V0N 3C0'));
        tempDB.push( new FNAddress('Tsartlip','653','British Columbia','PO BOX 70','#1 Boatramp Road','BRENTWOOD BAY','British Columbia','V8M 1R3'));
        tempDB.push( new FNAddress('Westbank First Nation','601','British Columbia','201-515 HWY 97 SOUTH','KELOWNA','British Columbia','V1Z 3J2'));
        tempDB.push( new FNAddress('Wet suwet en First Nation','725','British Columbia','PO BOX 760','BURNS LAKE','British Columbia','V0J 1E0'));
        tempDB.push( new FNAddress('Whispering Pines/Clinton','702','British Columbia','615 WHISPERING PINES DRIVE','KAMLOOPS','British Columbia','V2B 8S4'));
        tempDB.push( new FNAddress('Williams Lake First Nation','719','British Columbia','2672 INDIAN DRIVE','WILLIAMS LAKE','British Columbia','V2G 5K9'));
        tempDB.push( new FNAddress('Witset First Nation','530','British Columbia','205 BEAVER ROAD','SMITHERS','British Columbia','V0J 2N1'));
        tempDB.push( new FNAddress('Canupawakpa Dakota First Nation','289','Manitoba','PO BOX 146','PIPESTONE','Manitoba','R0M 1T0'));
        tempDB.push( new FNAddress('Chemawawin Cree Nation','309','Manitoba','PO BOX 9','EASTERVILLE','Manitoba','R0C 0V0'));
        tempDB.push( new FNAddress('Cross Lake Band of Indians','276','Manitoba','PO BOX 10','CROSS LAKE','Manitoba','R0B 0J0'));
        tempDB.push( new FNAddress('Dakota Plains','288','Manitoba','PO BOX 1246','PORTAGE LA PRAIRIE','Manitoba','R1N 3J9'));
        tempDB.push( new FNAddress('Dakota Tipi','295','Manitoba','2020 DAKOTA DRIVE','DAKOTA TIPI','Manitoba','R1N 3X6'));
        tempDB.push( new FNAddress('Little Grand Rapids','270','Manitoba','PO BOX 129','LITTLE GRAND RAPIDS','Manitoba','R0B 0V0'));
        tempDB.push( new FNAddress('Little Saskatchewan','274','Manitoba','PO BOX 98','GYPSUMVILLE','Manitoba','R0C 1J0'));
        tempDB.push( new FNAddress('Long Plain','287','Manitoba','PO BOX 430','PORTAGE LA PRAIRIE','Manitoba','R1N 3B7'));
        tempDB.push( new FNAddress('Manto Sipi Cree Nation','302','Manitoba','PO BOX 97','GOD S RIVER','Manitoba','R0B 0N0'));
        tempDB.push( new FNAddress('Marcel Colomb First Nation','328','Manitoba','PO BOX 1150','LYNN LAKE','Manitoba','R0B 0W0'));
        tempDB.push( new FNAddress('Mathias Colomb','311','Manitoba','PO BOX 135','PUKATAWAGAN','Manitoba','R0B 1G0'));
        tempDB.push( new FNAddress('Misipawistik Cree Nation','310','Manitoba','PO BOX 500','GRAND RAPIDS','Manitoba','R0C 1E0'));
        tempDB.push( new FNAddress('Shamattawa First Nation','307','Manitoba','PO BOX 210','SHAMATTAWA','Manitoba','R0B 1K0'));
        tempDB.push( new FNAddress('Sioux Valley Dakota Nation','290','Manitoba','PO BOX 38','GRISWOLD,MB','R0M 0S0'));
        tempDB.push( new FNAddress('Fort Folly','9','New Brunswick','PO BOX 1007','DORCHESTER','New Brunswick','E4K 3V5'));
        tempDB.push( new FNAddress('Indian Island','10','New Brunswick','61 INDIAN ISLAND DRIVE','INDIAN ISLAND','New Brunswick','E4W 1S9'));
        tempDB.push( new FNAddress('Kingsclear','11','New Brunswick','77 FRENCH VILLAGE RD','KINGSCLEAR FIRST NATION','New Brunswick','E3E 1K3'));
        tempDB.push( new FNAddress('Madawaska Maliseet First Nation','6','New Brunswick','1771 MAIN STREET','MADAWASKA MALISEET FIRST NAT','New Brunswick','E7C 1W9'));
        tempDB.push( new FNAddress('Metepenagiag Mi kmaq Nation','14','New Brunswick','PO BOX 293','METEPENAGIAG MI KMAQ NATION','New Brunswick','E9E 2P2'));
        tempDB.push( new FNAddress('Bear River','21','Nova Scotia','PO BOX 210','BEAR RIVER','Nova Scotia','B0S 1B0'));
        tempDB.push( new FNAddress('Eskasoni','23','Nova Scotia','PO BOX 7040, 63 MINI MALL DRIVE','ESKASONI','Nova Scotia','B1W 1A6'));
        tempDB.push( new FNAddress('Glooscap First Nation','30','Nova Scotia','159 SMITH ROAD','HANTSPORT','Nova Scotia','B0P 1P0'));
        tempDB.push( new FNAddress('Membertou','26','Nova Scotia','111 MEMBERTOU STREET','SYDNEY','Nova Scotia','B1S 2M9'));
        tempDB.push( new FNAddress('Millbrook','27','Nova Scotia','PO BOX 634','TRURO','Nova Scotia','B2N 5E5'));
        tempDB.push( new FNAddress('Paqtnkek Mi kmaw Nation','19','Nova Scotia','RR 1, 7 DILLAN STREET','AFTON','Nova Scotia','B0H 1A0'));
        tempDB.push( new FNAddress('Pictou Landing','24','Nova Scotia','43 MAPLE STREET, RR #2 BOX 55 SITE 6','TRENTON','Nova Scotia','B0K 1X0'));
        tempDB.push( new FNAddress('Potlotek First Nation','22','Nova Scotia','12004 Highway 4','CHAPEL ISLAND','Nova Scotia','B0E 3B0'));
        tempDB.push( new FNAddress('SIPEKNE KATIK','25','Nova Scotia','522 CHURCH STREET','INDIAN BROOK','Nova Scotia','B0N 1W0'));
        tempDB.push( new FNAddress('Ka a gee Tu First Nation','768','Northwest Territories','PO BOX 4428','HAY RIVER','Northwest Territories','X0E 1G3'));
        tempDB.push( new FNAddress('Liidlii Kue First Nation','757','Northwest Territories','PO BOX 469','FORT SIMPSON','Northwest Territories','X0E 0N0'));
        tempDB.push( new FNAddress('Lutsel K e Dene First Nation','764','Northwest Territories','PO BOX 28','LUTSEL K E','Northwest Territories','X0E 1A0'));
        tempDB.push( new FNAddress('Nahanni Butte','766','Northwest Territories','GENERAL DELIVERY','NAHANNI BUTTE','Northwest Territories','X0E 0N0'));
        tempDB.push( new FNAddress('Animbiigoo Zaagi igan Anishinaabek','194','Ontario','PO BOX 120','BEARDMORE','Ontario','P0T 1G0'));
        tempDB.push( new FNAddress('Anishinabe of Wauzhushk Onigum','153','Ontario','PO BOX 1850','KENORA','Ontario','P9N 3X8'));
        tempDB.push( new FNAddress('Anishnaabeg of Naongashiing','125','Ontario','PO BOX 335','MORSON','Ontario','P0W 1J0'));
        tempDB.push( new FNAddress('Aroland','242','Ontario','PO BOX 10','AROLAND','Ontario','P0T 1B0'));
        tempDB.push( new FNAddress('Atikameksheng Anishnawbek','224','Ontario','25 RESERVE ROAD','NAUGHTON','Ontario','P0M 2M0'));
        tempDB.push( new FNAddress('Attawapiskat','143','Ontario','PO BOX 248','ATTAWAPISKAT','Ontario','P0L 1A0'));
        tempDB.push( new FNAddress('Aundeck-Omni-Kaning','180','Ontario','RR 1, COMP 21','LITTLE CURRENT','Ontario','P0P 1K0'));
        tempDB.push( new FNAddress('Chippewas of Rama First Nation','139','Ontario','200 - 5884 RAMA ROAD','RAMA','Ontario','L3V 6H6'));
        tempDB.push( new FNAddress('Chippewas of the Thames First Nation','166','Ontario','RR 1','MUNCEY','Ontario','N0L 1Y0'));
        tempDB.push( new FNAddress('Constance Lake','182','Ontario','P.O. Box 4000','CONSTANCE LAKE','Ontario','P0L 1B0'));
        tempDB.push( new FNAddress('Fort William','187','Ontario','200 - 90 ANEMKI PLACE','FORT WILLIAM FIRST NATION','Ontario','P7J 1L3'));
        tempDB.push( new FNAddress('Garden River First Nation','199','Ontario','7 SHINGWAUK STREET, RR 4','GARDEN RIVER','Ontario','P6A 6Z8'));
        tempDB.push( new FNAddress('Ginoogaming First Nation','185','Ontario','PO BOX 89','LONGLAC','Ontario','P0T 2A0'));
        tempDB.push( new FNAddress('Grassy Narrows First Nation','149','Ontario','GENERAL DELIVERY','GRASSY NARROWS','Ontario','P0X 1B0'));
        tempDB.push( new FNAddress('Gull Bay','188','Ontario','1186 MEMORIAL AVENUE','PO BOX 29100, MCINTYRE CENTRE','THUNDER BAY','Ontario','P7B 6P9'));
        tempDB.push( new FNAddress('Hiawatha First Nation','162','Ontario','123 Paudash Street','HIAWATHA FIRST NATION','Ontario','K9J 0E6'));
        tempDB.push( new FNAddress('Iskatewizaagegan #39 Independent First Nation','154','Ontario','GENERAL DELIVERY','KEJICK','Ontario','P0X 1E0'));
        tempDB.push( new FNAddress('Kasabonika Lake','210','Ontario','PO BOX 124','KASABONIKA LAKE','Ontario','P0V 1Y0'));
        tempDB.push( new FNAddress('Kee-Way-Win','325','Ontario','GENERAL DELIVERY','KEEWAYWIN','Ontario','P0V 3G0'));
        tempDB.push( new FNAddress('Kingfisher','212','Ontario','PO BOX 57','KINGFISHER LAKE','Ontario','P0V 1Z0'));
        tempDB.push( new FNAddress('North Spirit Lake','238','Ontario','GENERAL DELIVERY','NORTH SPIRIT LAKE','Ontario','P0V 2G0'));
        tempDB.push( new FNAddress('Northwest Angle No.33','151','Ontario','BOX 1490','KENORA','Ontario','P9N 3X7'));
        tempDB.push( new FNAddress('Ojibway Nation of Saugeen','258','Ontario','GENERAL DELIVERY','SAVANT LAKE','Ontario','P0V 2S0'));
        tempDB.push( new FNAddress('Shoal Lake No.40','155','Ontario','GENERAL DELIVERY','KEJICK','Ontario','P0X 1E0'));
        tempDB.push( new FNAddress('Wapekeka','206','Ontario','PO BOX 2','WAPEKEKA','Ontario','P0V 1B0'));
        tempDB.push( new FNAddress('Wasauksing First Nation','136','Ontario','PO BOX 250','PARRY SOUND','Ontario','P2A 2X4'));
        tempDB.push( new FNAddress('Washagamis Bay','235','Ontario','PO BOX 625','KEEWATIN','Ontario','P0X 1C0'));
        tempDB.push( new FNAddress('Wawakapewin','234','Ontario','PO BOX 477','SIOUX LOOKOUT','Ontario','P8T 1A8'));
        tempDB.push( new FNAddress('Cree Nation of Mistissini','75','Quebec','187 Main Street','Mistissini','Quebec','G0W 1C0'));
        tempDB.push( new FNAddress('Cree Nation of Nemaska','59','Quebec','32 Machishteewyaau Trail','Nemaska','Quebec','J0Y 3B0'));
        tempDB.push( new FNAddress('Cree Nation of Wemindji','60','Quebec','16 BEAVER ROAD,  PO BOX 60','WEMINDJI','Quebec','J0M 1L0'));
        tempDB.push( new FNAddress('Eastmain','57','Quebec','76 Nouchimi,  P.O. Box 90','Eastmain','Quebec','J0M 1W0'));
        tempDB.push( new FNAddress('Micmacs of Gesgapegiag','52','Quebec','100 PERRON BLVD','GESGAPEGIAG','Quebec','G0C 1Y0'));
        tempDB.push( new FNAddress('Mohawks of Kahnawake','70','Quebec','P.O. Box 720','Kahnawake','Quebec','J0L 1B0'));
        tempDB.push( new FNAddress('Mohawks of Kanesatake','69','Quebec','681 Ste-Philomene Street','Kanesatake','Quebec','J0N 1E0'));
        tempDB.push( new FNAddress('Montagnais de Pakua Shipi','88','Quebec','CP 178','St-Augustin-Saguenay','Quebec','G0G 2R0'));
        tempDB.push( new FNAddress('Montagnais de Unamen Shipu','84','Quebec','90 rue du Large','La Romaine','Quebec','G0G 1M0'));
        tempDB.push( new FNAddress('Naskapi Nation of Kawawachikamach','81','Quebec','P.O. Box 5111','Kawawachikamach','Quebec','G0G 2Z0'));
        tempDB.push( new FNAddress('Nation Anishnabe du Lac Simon','63','Quebec','1026 Boulevard Cicip, CP 139','Lac Simon','Quebec','J0Y 3M0'));
        tempDB.push( new FNAddress('Nation Huronne Wendat','50','Quebec','255 place Chef-Michel-Laveau','Wendake','Quebec','G0A 4V0'));
        tempDB.push( new FNAddress('Odanak','72','Quebec','104 Rue Sibosis','Odanak','Quebec','J0G 1H0'));
        tempDB.push( new FNAddress('Ouje-Bougoumou Cree Nation','89','Quebec','203 Opemisika Meskino Street, P.O. Box 1169','Ouje-Bougoumou,QC,G0W 3C0'));
        tempDB.push( new FNAddress('Birch Narrows First Nation','403','Saskatchewan','GENERAL DELIVERY','TURNOR LAKE','Saskatchewan','S0M 3E0'));
        tempDB.push( new FNAddress('Black Lake','359','Saskatchewan','PO BOX 27','BLACK LAKE','Saskatchewan','S0J 0H0'));
        tempDB.push( new FNAddress('Buffalo River Dene Nation','398','Saskatchewan','GENERAL DELIVERY','DILLON','Saskatchewan','S0M 0S0'));
        tempDB.push( new FNAddress('Canoe Lake Cree First Nation','394','Saskatchewan','GENERAL DELIVERY','CANOE NARROWS','Saskatchewan','S0M 0K0'));
        tempDB.push( new FNAddress('Carry The Kettle','378','Saskatchewan','PO BOX 57','SINTALUTA','Saskatchewan','S0G 4N0'));
        tempDB.push( new FNAddress('Clearwater River Dene','401','Saskatchewan','PO BOX 5050','CLEARWATER RIVER','Saskatchewan','S0M 3H0'));
        tempDB.push( new FNAddress('Cote First Nation 366','366','Saskatchewan','PO BOX 1659','KAMSACK','Saskatchewan','S0A 1S0'));
        tempDB.push( new FNAddress('Little Pine','340','Saskatchewan','PO BOX 70','PAYNTON','Saskatchewan','S0M 2J0'));
        tempDB.push( new FNAddress('Lucky Man','341','Saskatchewan','103B PACKHAM AVENUE','SASKATOON','Saskatchewan','S7N 4K4'));
        tempDB.push( new FNAddress('Makwa Sahgaiehcan First Nation','396','Saskatchewan','PO BOX 340','LOON LAKE','Saskatchewan','S0M 1L0'));
        tempDB.push( new FNAddress('Ministikwan Lake Cree Nation','397','Saskatchewan','PO BOX 240','ISLAND LAKE','Saskatchewan','S0M 3G0'));
        tempDB.push( new FNAddress('Pasqua First Nation #79','383','Saskatchewan','PO BOX 79','PASQUA','Saskatchewan','S0G 5M0'));
        tempDB.push( new FNAddress('Peepeekisis Cree Nation No.81','384','Saskatchewan','PO BOX 518','BALCARRES','Saskatchewan','S0G 0C0'));
        tempDB.push( new FNAddress('Pelican Lake','405','Saskatchewan','PO BOX 399','LEOVILLE','Saskatchewan','S0J 1N0'));
        tempDB.push( new FNAddress('Peter Ballantyne Cree Nation','355','Saskatchewan','GENERAL DELIVERY','PELICAN NARROWS','Saskatchewan','S0P 0E0'));
        tempDB.push( new FNAddress('Pheasant Rump Nakota','409','Saskatchewan','PO BOX 238','KISBEY','Saskatchewan','S0C 1L0'));
        tempDB.push( new FNAddress('Piapot','385','Saskatchewan','GENERAL DELIVERY','ZEHNER','Saskatchewan','S0G 5K0'));
        tempDB.push( new FNAddress('Zagime Anishinabek','364','Saskatchewan','PO BOX 339','GRENFELL','Saskatchewan','S0G 2B0'));
        tempDB.push( new FNAddress('Aishihik','490','Yukon'));
        tempDB.push( new FNAddress('Alexander','438','Alberta','PO BOX 3419','MORINVILLE','Alberta','T8R 1S3'));
        tempDB.push( new FNAddress('Alexis Nakota Sioux Nation','437','Alberta','PO BOX 7','GLENEVIS','Alberta','T0E 0X0'));
        tempDB.push( new FNAddress('Athabasca Chipewyan First Nation','463','Alberta','PO BOX 366','FORT CHIPEWYAN','Alberta','T0P 1B0'));
        tempDB.push( new FNAddress('Bearspaw','473','Alberta','PO BOX 40','MORLEY','Alberta','T0L 1N0'));
        tempDB.push( new FNAddress('Beaver First Nation','445','Alberta','PO BOX 270','HIGH LEVEL','Alberta','T0H 1Z0'));
        tempDB.push( new FNAddress('Beaver Lake Cree Nation','460','Alberta','PO BOX 960','LAC LA BICHE','Alberta','T0A 2C0'));
        tempDB.push( new FNAddress('Bigstone Cree Nation','458','Alberta','PO BOX 960','WABASCA','Alberta','T0G 2K0'));
        tempDB.push( new FNAddress('Blood','435','Alberta','PO BOX 60','STANDOFF','Alberta','T0L 1Y0'));
        tempDB.push( new FNAddress('Chiniki','433','Alberta','PO BOX 40','MORLEY','Alberta','T0L 1N0'));
        tempDB.push( new FNAddress('Chipewyan Prairie First Nation','470','Alberta','GENERAL DELIVERY','CHARD','Alberta','T0P 1G0'));
        tempDB.push( new FNAddress(' Cold Lake First Nations','464','Alberta','PO BOX 1769','COLD LAKE','Alberta','T9M 1P4'));
        tempDB.push( new FNAddress('Dene Tha','448','Alberta','PO BOX 120','CHATEH','Alberta','T0H 0S0'));
        tempDB.push( new FNAddress('Driftpile Cree Nation','450','Alberta','PO BOX 30',',DRIFTPILE,AB,T0G 0V0'));
        tempDB.push( new FNAddress('Duncan s First Nation','451','Alberta','PO BOX 148','BROWNVALE','Alberta','T0H 0L0'));
        tempDB.push( new FNAddress('Enoch Cree Nation #440','440','Alberta','PO BOX 29','ENOCH','Alberta','T7X 3Y3'));
        tempDB.push( new FNAddress('Horse Lake First Nation','449','Alberta','PO BOX 303','HYTHE','Alberta','T0H 2C0'));
        tempDB.push( new FNAddress('Kapawe no First Nation','452','Alberta','PO BOX 10','GROUARD','Alberta','T0G 1C0'));
        tempDB.push( new FNAddress('Kehewin Cree Nation','466','Alberta','PO BOX 220','KEHEWIN','Alberta','T0A 1C0'));
        tempDB.push( new FNAddress('Little Red River Cree Nation','447','Alberta','PO BOX 30','JOHN D OR PRAIRIE','Alberta','T0H 3X0'));
        tempDB.push( new FNAddress('Loon River Cree','476','Alberta','PO BOX 189','RED EARTH CREEK','Alberta','T0G 1X0'));
        tempDB.push( new FNAddress('Louis Bull','439','Alberta','PO BOX 130','MASKWACIS','Alberta','T0C 1N0'));
        tempDB.push( new FNAddress('Lubicon Lake','453','Alberta','PO BOX 1351','ISIDORE','Alberta','T0H 3B0'));
        tempDB.push( new FNAddress('Mikisew Cree First Nation','461','Alberta','PO BOX 90','FORT CHIPEWYAN','Alberta','T0P 1B0'));
        tempDB.push( new FNAddress('Montana','442','Alberta','PO BOX 70','MASKWACIS','Alberta','TOC 1N0'));
        tempDB.push( new FNAddress('O Chiese','431','Alberta','PO BOX 1570','ROCKY MOUNTAIN HOUSE','Alberta','T4T 1B2'));
        tempDB.push( new FNAddress('Paul','441','Alberta','PO BOX 89','DUFFIELD','Alberta','T0E 0N0'));
        tempDB.push( new FNAddress('Peerless Trout First Nation','478','Alberta','PO BOX 128','PEERLESS LAKE','Alberta','T0G 2W0'));
        tempDB.push( new FNAddress('Piikani Nation','436','Alberta','PO BOX 70','BROCKET','Alberta','T0K 0H0'));
        tempDB.push( new FNAddress('Saddle Lake Cree Nation','462','Alberta','PO BOX 100','SADDLE LAKE','Alberta','T0A 3T0'));
        tempDB.push( new FNAddress('Samson','444','Alberta','PO BOX 159','MASKWACIS','Alberta','TOC 1NO'));
        tempDB.push( new FNAddress('Sawridge First Nation','454','Alberta','PO BOX 326','SLAVE LAKE','Alberta','T0G 2A0'));
        tempDB.push( new FNAddress('Siksika Nation','430','Alberta','PO BOX 1100','SIKSIKA','Alberta','T0J 3W0'));
        tempDB.push( new FNAddress('Smith s Landing First Nation','477','Alberta','PO BOX 1470','FORT SMITH','Northwest Territories','X0E 0P0'));
        tempDB.push( new FNAddress('Stoney','471','Alberta','PO BOX 40','MORLEY','Alberta','T0L 1N0'));
        tempDB.push( new FNAddress('Sucker Creek','456','Alberta','PO BOX 65','ENILDA','Alberta','T0G 0W0'));
        tempDB.push( new FNAddress('Sunchild First Nation','434','Alberta','PO BOX 747','ROCKY MOUNTAIN HOUSE','Alberta','T4T 1A5'));
        tempDB.push( new FNAddress('Swan River First Nation','457','Alberta','PO BOX 270','KINUSO','Alberta','T0G 1K0'));
        tempDB.push( new FNAddress('Tallcree Tribal Government','446','Alberta','PO BOX 100','FORT VERMILION','Alberta','T0H 1N0'));
        tempDB.push( new FNAddress('Tsuut ina Nation','432','Alberta','200 - 9911 CHIILA BLVD SW','TSUU T INA','Alberta','T2W 6H6'));
        tempDB.push( new FNAddress('Wesley','475','Alberta','PO BOX 40','MORLEY','Alberta','T0L 1N0'));
        tempDB.push( new FNAddress('Whitefish Lake','459','Alberta','GENERAL DELIVERY','ATIKAMEG','Alberta','T0G 0C0'));
        tempDB.push( new FNAddress('Woodland Cree First Nation','474','Alberta','GENERAL DELIVERY','CADOTTE LAKE','Alberta','T0H 0N0'));
        tempDB.push( new FNAddress('Akisqnuk First Nation','604','British Columbia','3050 HIGHWAY 93 / 95','WINDERMERE','British Columbia','V0B 2L2'));
        tempDB.push( new FNAddress('aqam Community','602','British Columbia','7470 MISSION ROAD','CRANBROOK','British Columbia','V1C 7E5'));
        tempDB.push( new FNAddress('Esdilagh First Nation','709','British Columbia','4 - 9001 WEST FRASER RD','QUESNEL','British Columbia','V2J 6R4'));
        tempDB.push( new FNAddress('Adams Lake','684','British Columbia','PO BOX 588','CHASE','British Columbia','V0E 1M0'));
        tempDB.push( new FNAddress('Ahousaht','659','British Columbia','GENERAL DELIVERY','AHOUSAHT','British Columbia','V0R 1A0'));
        tempDB.push( new FNAddress('Aitchelitz','558','British Columbia','8161 AITCHELITZ ROAD','CHILLIWACK','British Columbia','V2R 4H4'));
        tempDB.push( new FNAddress('Ashcroft','685','British Columbia','PO BOX 440','ASHCROFT','British Columbia','V0K 1A0'));
        tempDB.push( new FNAddress('Boston Bar First Nation','701','British Columbia','PO BOX 369','BOSTON BAR','British Columbia','V0K 1C0'));
        tempDB.push( new FNAddress('Bridge River','590','British Columbia','PO BOX 190','LILLOOET','British Columbia','V0K 1V0'));
        tempDB.push( new FNAddress('Burns Lake','619','British Columbia','BAG 9000','BURNS LAKE','British Columbia','V0J 1E0'));
        tempDB.push( new FNAddress('Campbell River','622','British Columbia','1650 OLD SPIT ROAD','CAMPBELL RIVER','British Columbia','V9W 3E8'));
        tempDB.push( new FNAddress('Canim Lake','713','British Columbia','PO BOX 1030','100 MILE HOUSE','British Columbia','V0K 2E0'));
        tempDB.push( new FNAddress('Cape Mudge','623','British Columbia','690 HEADSTART CRES','CAMPBELL RIVER','British Columbia','V9H 1P9'));
        tempDB.push( new FNAddress('Cayoose Creek','591','British Columbia','PO BOX 484','LILLOOET','British Columbia','V0K 1V0'));
        tempDB.push( new FNAddress('Chawathil','583','British Columbia','4-60814 LOUGHEED HIGHWAY','HOPE','British Columbia','V0X 1L3'));
        tempDB.push( new FNAddress('Cheam','584','British Columbia','52161 Victor Drive','Rosedale','British Columbia','V0X 1X1'));
        tempDB.push( new FNAddress(' Cheslatta Carrier Nation','620','British Columbia','PO BOX 909','BURNS LAKE','British Columbia','V0J 1E0'));
        tempDB.push( new FNAddress('Coldwater','693','British Columbia','PO BOX 4600','MERRITT','British Columbia','V1K 1B8'));
        tempDB.push( new FNAddress('Cook s Ferry','694','British Columbia','PO BOX 130','SPENCES BRIDGE','British Columbia','V0K 2L0'));
        tempDB.push( new FNAddress('Cowichan','642','British Columbia','5760 ALLENBY ROAD','DUNCAN,BC','V9L 5J1'));
        tempDB.push( new FNAddress('Da naxda xw First Nation','635','British Columbia','PO BOX 330','ALERT BAY','British Columbia','V0N 1A0'));
        tempDB.push( new FNAddress('Ditidaht','662','British Columbia','PO BOX 340','PORT ALBERNI','British Columbia','V9Y 7M8'));
        tempDB.push( new FNAddress('Doig River First Nation','548','British Columbia','PO BOX 56','ROSE PRAIRIE','British Columbia','V0C 2H0'));
        tempDB.push( new FNAddress('Esquimalt','644','British Columbia','1189 KOSAPSUM CRESCENT','VICTORIA','British Columbia','V9A 7K7'));
        tempDB.push( new FNAddress('Fort Nelson First Nation','543','British Columbia','MILE 295 ALASKA HWY,  RR 1','FORT NELSON','British Columbia','V0C 1R0'));
        tempDB.push( new FNAddress('Gitanmaax','531','British Columbia','PO BOX 440','HAZELTON','British Columbia','V0J 1Y0'));
        tempDB.push( new FNAddress('Gitanyow','537','British Columbia','PO BOX 340','KITWANGA','British Columbia','V0J 2A0'));
        tempDB.push( new FNAddress('Gitga at First Nation','675','British Columbia','GENERAL DELIVERY, 445 HAYIMIISAXAA WAY','HARTLEY BAY','British Columbia','V0V 1A0'));
        tempDB.push( new FNAddress('Gitsegukla','535','British Columbia','710 RAY CHARLES AVE','GITSEGUKLA','British Columbia','V0J 2J3'));
        tempDB.push( new FNAddress('Gitwangak','536','British Columbia','PO BOX 400','KITWANGA','British Columbia','V0J 2A0'));
        tempDB.push( new FNAddress('Gitxaala Nation','672','British Columbia','PO BOX 149','KITKATLA','British Columbia','V0V 1C0'));
        tempDB.push( new FNAddress('Glen Vowell','533','British Columbia','9500 SIK-E-DAKH RD','SIK-E-DAKH','British Columbia','V0J 1Y3'));
        tempDB.push( new FNAddress('Gwa Sala-Nakwaxda xw','724','British Columbia','PO BOX 998','PORT HARDY','British Columbia','V0N 2P0'));
        tempDB.push( new FNAddress('Gwawaenuk Tribe','627','British Columbia','PO BOX 344','PORT MCNEIL','British Columbia','V0N 2R0'));
        tempDB.push( new FNAddress('Hagwilget First Nation Government','534','British Columbia','PO BOX 460','NEW HAZELTON','British Columbia','V0J 2J0'));
        tempDB.push( new FNAddress('Haisla Nation','676','British Columbia','PO BOX 1101','HAISLA','British Columbia','V0T 2B0'));
        tempDB.push( new FNAddress('Halalt','645','British Columbia','7973 CHEMAINUS ROAD,  RR 5','CHEMAINUS','British Columbia','V0R 1K5'));
        tempDB.push( new FNAddress('Halfway River First Nation','546','British Columbia','PO BOX 59','WONOWON','British Columbia','V0C 2N0'));
        tempDB.push( new FNAddress('Heiltsuk','538','British Columbia','PO BOX 880','BELLA BELLA','British Columbia','V0T 1Z0'));
        tempDB.push( new FNAddress('Hesquiaht','661','British Columbia','PO BOX 2000','TOFINO','British Columbia','V0R 2Z0'));
        tempDB.push( new FNAddress('High Bar','703','British Columbia','PO BOX 458','CLINTON','British Columbia','V0K 1K0'));
        tempDB.push( new FNAddress('Homalco','552','British Columbia','1218 BUTE CRESCENT','CAMPBELL RIVER','British Columbia','V9H 1G5'));
        tempDB.push( new FNAddress('Hupacasath First Nation','664','British Columbia','PO BOX 211','PORT ALBERNI','British Columbia','V9Y 7M7'));
        tempDB.push( new FNAddress(' Huu-ay-aht First Nations','663','British Columbia','HUU-AY-AHT TREATY OFFICE, 3483 3RD AVE','PORT ALBERNI','British Columbia','V9Y 4E4'));
        tempDB.push( new FNAddress('Iskut','683','British Columbia','PO BOX 30','ISKUT','British Columbia','V0J 1K0'));
        tempDB.push( new FNAddress('Komoks First Nation','624','British Columbia','3330 COMOX ROAD','COURTENAY','British Columbia','V9N 3P8'));
        tempDB.push( new FNAddress('Kyuquot/Cheklesahht First Nations','638','British Columbia','GENERAL DELIVERY','KYUQUOT','British Columbia','V0P 1J0'));
        tempDB.push( new FNAddress('Kanaka Bar','704','British Columbia','PO BOX 610, 2693 SIWASH ROAD','LYTTON','British Columbia','V0K 1Z0'));
        tempDB.push( new FNAddress('Katzie','563','British Columbia','10946 KATZIE ROAD','PITT MEADOWS','British Columbia','V3Y 2G6'));
        tempDB.push( new FNAddress('Kispiox','532','British Columbia','1336 KISPIOX VALLEY ROAD','KISPIOX','British Columbia','V0J 1Y4'));
        tempDB.push( new FNAddress('Kitasoo','540','British Columbia','GENERAL DELIVERY','KLEMTU','British Columbia','V0T 1L0'));
        tempDB.push( new FNAddress('Kitselas','680','British Columbia','2225 GITAUS ROAD','TERRACE','British Columbia','V8G 0A9'));
        tempDB.push( new FNAddress('Kitsumkalum','681','British Columbia','PO BOX 544','TERRACE','British Columbia','V8G 4B5'));
        tempDB.push( new FNAddress('Klahoose First Nation','553','British Columbia','PO BOX 9, CORTES ISLAND','SQUIRREL COVE','British Columbia','V0P 1T0'));
        tempDB.push( new FNAddress('Kwadacha','610','British Columbia','497 - 3RD AVENUE','PRINCE GEORGE','British Columbia','V2L 3C1'));
        tempDB.push( new FNAddress('Kwakiutl','626','British Columbia','PO BOX 1440,,PORT HARDY','British Columbia','V0N 2P0'));
        tempDB.push( new FNAddress('Kwantlen First Nation','564','British Columbia','23690 GABRIEL LANE,  PO BOX 108','FORT LANGLEY','British Columbia','V1M 2R4'));
        tempDB.push( new FNAddress('Kwaw-kwaw-Apilt','580','British Columbia','BLDG#10 3RD FLOOR,  7201 VEDDER RD','CHILLIWACK','British Columbia','V2R 4L9'));
        tempDB.push( new FNAddress('Kwiakah','628','British Columbia','PO BOX 437, STATION A','CAMPBELL RIVER','British Columbia','V9W 5B6'));
        tempDB.push( new FNAddress('Leq a:mel First Nation','579','British Columbia','43101 LEQ A: MEL WAY','DEROCHE','British Columbia','V0M 1G0'));
        tempDB.push( new FNAddress('Lheidli T enneh','611','British Columbia','1041 WHENUN ROAD','PRINCE GEORGE','British Columbia','V2K 5X8'));
        tempDB.push( new FNAddress('Lhoosk uz Dene Nation','721','British Columbia','PO BOX 4339','QUESNEL','British Columbia','V2J 3J8'));
        tempDB.push( new FNAddress('Lhtako Dene Nation','715','British Columbia','PO BOX 4069','QUESNEL','British Columbia','V2J 3J2'));
        tempDB.push( new FNAddress('Lil wat Nation','557','British Columbia','PO BOX 602','MOUNT CURRIE','British Columbia','V0N 2K0'));
        tempDB.push( new FNAddress('Little Shuswap Lake','689','British Columbia','1886 LITTLE SHUSWAP LAKE ROAD','CHASE','British Columbia','V0E 1M2'));
        tempDB.push( new FNAddress('Lower Kootenay','606','British Columbia','830 SIMON ROAD','CRESTON','British Columbia','V0B 1G2'));
        tempDB.push( new FNAddress('Lower Nicola','695','British Columbia','181 NAWISHASKIN LANE','MERRITT','British Columbia','V1K 0A7'));
        tempDB.push( new FNAddress('Lower Similkameen','598','British Columbia','517TH AVENUE, PO BOX 100','KEREMEOS','British Columbia','V0X 1N0'));
        tempDB.push( new FNAddress('Lyackson','646','British Columbia','7973A CHEMAINUS ROAD','CHEMAINUS','British Columbia','V0R 1K5'));
        tempDB.push( new FNAddress('Lytton','705','British Columbia','PO BOX 20','LYTTON','British Columbia','V0K 1Z0'));
        tempDB.push( new FNAddress('Malahat Nation','647','British Columbia','110 THUNDER ROAD,  RR 4','MILL BAY','British Columbia','V0R 2P4'));
        tempDB.push( new FNAddress('Mamalilikulla First Nation','629','British Columbia','1441-B 16TH AVENUE','CAMPBELL RIVER','British Columbia','V9W 2E4'));
        tempDB.push( new FNAddress('Matsqui First Nation','565','British Columbia','PO BOX 10','MATSQUI','British Columbia','V4X 3R2'));
        tempDB.push( new FNAddress('McLeod Lake','618','British Columbia','GENERAL DELIVERY','MCLEOD LAKE','British Columbia','V0J 2G0'));
        tempDB.push( new FNAddress('Metlakatla First Nation','673','British Columbia','PO BOX 459','PRINCE RUPERT','British Columbia','V8J 3R2'));
        tempDB.push( new FNAddress('Mowachaht/Muchalaht','630','British Columbia','PO BOX 459','GOLD RIVER','British Columbia','V0P 1G0'));
        tempDB.push( new FNAddress('Musqueam','550','British Columbia','6735 SALISH DRIVE','VANCOUVER','British Columbia','V6N 4C4'));
        tempDB.push( new FNAddress('Nak azdli Whut en','614','British Columbia','PO BOX 1329','FORT ST. JAMES','British Columbia','V0J 1P0'));
        tempDB.push( new FNAddress('Namgis First Nation','631','British Columbia','PO BOX 210','ALERT BAY','British Columbia','V0N 1A0'));
        tempDB.push( new FNAddress('Nanoose First Nation','649','British Columbia','209 MALLARD WAY','LANTZVILLE','British Columbia','V0R 2H0'));
        tempDB.push( new FNAddress('Nazko First Nation','720','British Columbia','PO BOX 4129','QUESNEL','British Columbia','V2J 3J2'));
        tempDB.push( new FNAddress('Nee-Tahi-Buhn','726','British Columbia','47805 OLSON ROAD','BURNS LAKE','British Columbia','V0J 1E4'));
        tempDB.push( new FNAddress('Neskonlith','690','British Columbia','PO BOX 318','CHASE','British Columbia','V0E 1M0'));
        tempDB.push( new FNAddress('New Westminster','566','British Columbia','105 - 3680 RAE AVENUE','VANCOUVER','British Columbia','V5R 2P5'));
        tempDB.push( new FNAddress('Nicomen','696','British Columbia','PO BOX 670','LYTTON','British Columbia','V0K 1Z0'));
        tempDB.push( new FNAddress('Nisga a Village of Gingolx','671','British Columbia','607 FRONT ST','GINGOLX','British Columbia','V0V 1B0'));
        tempDB.push( new FNAddress('Nisga a Village of Gitwinksihlkw','679','British Columbia','PO BOX 1, 3004 TS OOHL TS AP AVE','GITWINKSIHLKW','British Columbia','V0J 3T0'));
        tempDB.push( new FNAddress('Nisga a Village of Laxgalt sap','678','British Columbia','PO BOX 200, 416 NORTH RD','GREENVILLE','British Columbia','V0J 1X0'));
        tempDB.push( new FNAddress('Nisga a Village of New Aiyansh','677','British Columbia','PO BOX 233,  5200 SKATEEN DR','NEW AIYANSH','British Columbia','V0J 1A0'));
        tempDB.push( new FNAddress('Nooaitch','699','British Columbia','2954 SHACKELLY ROAD','MERRITT','British Columbia','V1K 1N9'));
        tempDB.push( new FNAddress('Nuchatlaht','639','British Columbia','PO BOX 40','ZEBALLOS','British Columbia','V0P 2A0'));
        tempDB.push( new FNAddress('Nuxalk Nation','539','British Columbia','PO BOX 65','BELLA COOLA','British Columbia','V0T 1C0'));
        tempDB.push( new FNAddress('Okanagan','616','British Columbia','12420 WESTSIDE RD','VERNON','British Columbia','V1H 2A4'));
        tempDB.push( new FNAddress('Old Massett Village Council','669','British Columbia','PO BOX 189','OLD MASSET','British Columbia','V0T 1M0'));
        tempDB.push( new FNAddress('Oregon Jack Creek','692','British Columbia','PO BOX 940','ASHCROFT','British Columbia','V0K 1A0'));
        tempDB.push( new FNAddress('Pauquachin','652','British Columbia','9010 WEST SAANICH ROAD','SIDNEY','British Columbia','V8L 5W4'));
        tempDB.push( new FNAddress('Penelakut Tribe','650','British Columbia','PO BOX 360','CHEMAINUS','British Columbia','V0R 1K0'));
        tempDB.push( new FNAddress('Penticton','597','British Columbia','RR 2 SITE 80 COMP 19','PENTICTON','British Columbia','V2A 6J7'));
        tempDB.push( new FNAddress('Peters First Nation','586','British Columbia','16870 PETERS ROAD','HOPE','British Columbia','V0X 1L2'));
        tempDB.push( new FNAddress('Popkum','585','British Columbia','54951 JULSETH ROAD','POPKUM','British Columbia','V0X 1X1'));
        tempDB.push( new FNAddress('Prophet River First Nation','544','British Columbia','PO BOX 3250','FORT NELSON','British Columbia','V0C 1R0'));
        tempDB.push( new FNAddress('Qualicum First Nation','651','British Columbia','5850 RIVER ROAD','QUALICUM BEACH','British Columbia','V9K 1Z5'));
        tempDB.push( new FNAddress('Quatsino','633','British Columbia','305 QUATTISHE ROAD','COAL HARBOUR','British Columbia','V0N 1K0'));
        tempDB.push( new FNAddress('Saik uz First Nation','615','British Columbia','135 JOSEPH STREET','VANDERHOOF','British Columbia','V0J 3A1'));
        tempDB.push( new FNAddress('Samahquam','567','British Columbia','PO BOX 610','MOUNT CURRIE','British Columbia','V0N 2K0'));
        tempDB.push( new FNAddress('Saulteau First Nations','542','British Columbia','PO BOX 1020','CHETWYND','British Columbia','V0C 1J0'));
        tempDB.push( new FNAddress('Seabird Island','581','British Columbia','PO BOX 650','AGASSIZ','British Columbia','V0M 1A0'));
        tempDB.push( new FNAddress('Sechelt','551','British Columbia','PO BOX 740, 5555 SUNSHINE COAST HWY','SECHELT','British Columbia','V0N 3A0'));
        tempDB.push( new FNAddress('Semiahmoo','569','British Columbia','16049 BEACH ROAD','SURREY','British Columbia','V3S 9R6'));
        tempDB.push( new FNAddress('Shackan','698','British Columbia','PO BOX 1360','MERRITT','British Columbia','V1K 1B8'));
        tempDB.push( new FNAddress('Shuswap','605','British Columbia','RR#2, 3A - 492 Arrow Road','INVERMERE','British Columbia','V0A 1K2'));
        tempDB.push( new FNAddress('Skatin Nations','562','British Columbia','PO Box 478','Mount Currie','British Columbia','V0N 2K0'));
        tempDB.push( new FNAddress('Skawahlook First Nation','582','British Columbia','58611A LOUGHEED HWY','AGASSIZ','British Columbia','V0M 1A2'));
        tempDB.push( new FNAddress('Skeetchestn','687','British Columbia','PO BOX 178','SAVONA','British Columbia','V0K 2J0'));
        tempDB.push( new FNAddress('Skidegate','670','British Columbia','PO BOX 1301','SKIDEGATE','British Columbia','V0T 1S1'));
        tempDB.push( new FNAddress('Skin Tyee','729','British Columbia','PO BOX 131','SOUTHBANK','British Columbia','V0J 2P0'));
        tempDB.push( new FNAddress('Skowkale','571','British Columbia','PO BOX 2159','SARDIS','British Columbia','V2R 1A7'));
        tempDB.push( new FNAddress('Skuppah','707','British Columbia','PO BOX 548','LYTTON','British Columbia','V0K 1Z0'));
        tempDB.push( new FNAddress('Skwah','573','British Columbia','PO BOX 178','CHILLIWACK','British Columbia','V2P 6H7'));
        tempDB.push( new FNAddress('Snuneymuxw First Nation','648','British Columbia','668 CENTRE STREET','NANAIMO','British Columbia','V9R 4Z4'));
        tempDB.push( new FNAddress('Soda Creek','716','British Columbia','3405 MOUNTAIN HOUSE ROAD','WILLIAMS LAKE','British Columbia','V2G 5L5'));
        tempDB.push( new FNAddress('Songhees Nation','656','British Columbia','1100 ADMIRALS RD','VICTORIA','British Columbia','V9A 2P6'));
        tempDB.push( new FNAddress('Stz uminus First Nation','641','British Columbia','12611-A TRANS CANADA HIGHWAY','LADYSMITH','British Columbia','V9G 1M5'));
        tempDB.push( new FNAddress('Sumas First Nation','578','British Columbia','2788 SUMAS MOUNTAIN ROAD','ABBOTSFORD','British Columbia','V3G 2J2'));
        tempDB.push( new FNAddress('T it q et','593','British Columbia','PO BOX 615','LILLOOET','British Columbia','V0K 1V0'));
        tempDB.push( new FNAddress('Tahltan','682','British Columbia','PO BOX 46','TELEGRAPH CREEK','British Columbia','V0J 2W0'));
        tempDB.push( new FNAddress('Takla Nation','608','British Columbia','Unit 401-1777, 3rd Avenue','PRINCE GEORGE','British Columbia','V2L 3G7'));
        tempDB.push( new FNAddress('Tk emlups te Secwepemc','688','British Columbia','200 - 330 CHIEF ALEX THOMAS WAY','KAMLOOPS','British Columbia','V2H 1H1'));
        tempDB.push( new FNAddress('Tl azt en Nation','617','British Columbia','PO BOX 670','FORT ST. JAMES','British Columbia','V0J 1P0'));
        tempDB.push( new FNAddress('Tl etinqox Government','712','British Columbia','PO BOX 168','ALEXIS CREEK','British Columbia','V0L 1A0'));
        tempDB.push( new FNAddress('Tla-o-qui-aht First Nations','660','British Columbia','PO BOX 18','TOFINO','British Columbia','V0R 2Z0'));
        tempDB.push( new FNAddress('Tlatlasikwala','632','British Columbia','PO BOX 339','PORT HARDY','British Columbia','V0N 2P0'));
        tempDB.push( new FNAddress('Tlowitsis Tribe','637','British Columbia','1345 BUTE CRESCENT','CAMPBELL RIVER','British Columbia','V9H 1G6'));
        tempDB.push( new FNAddress('Tobacco Plains','603','British Columbia','PO BOX 76','GRASMERE','British Columbia','V0B 1R0'));
        tempDB.push( new FNAddress('Toosey','718','British Columbia','PO BOX 80','RISKE CREEK','British Columbia','V0L 1T0'));
        tempDB.push( new FNAddress('Toquaht','666','British Columbia','1971 PENINSULA ROAD, PO BOX 759','UCLUELET','British Columbia','V0R 3A0'));
        tempDB.push( new FNAddress('Ts kw aylaxw First Nation','594','British Columbia','PO BOX 2200','LILLOOET','British Columbia','V0K 1V0'));
        tempDB.push( new FNAddress('Tsawout First Nation','654','British Columbia','7728 TETAYUT ROAD','SAANICHTON','British Columbia','V8M 2E4'));
        tempDB.push( new FNAddress('Tsawwassen First Nation','577','British Columbia','1926 TSAWWASSEN DR. N.','DELTA','British Columbia','V4M 4G4'));
        tempDB.push( new FNAddress('Tsay Keh Dene','609','British Columbia','1940 - 3rd Avenue','Prince George','British Columbia','V2M 1G7'));
        tempDB.push( new FNAddress('Tseshaht','665','British Columbia','5091 TSUMA-AS DR','PORT ALBERNI','British Columbia','V9Y 8X9'));
        tempDB.push( new FNAddress('Tseycum','655','British Columbia','1210 TOTEM LANE','NORTH SAANICH','British Columbia','V8L 5S4'));
        tempDB.push( new FNAddress('Tsideldel First Nation','710','British Columbia','PO BOX 69','CHILANKO FORKS','British Columbia','V0L 1H0'));
        tempDB.push( new FNAddress('Tsleil-Waututh Nation','549','British Columbia','3075 TAKAYA DRIVE','NORTH VANCOUVER','British Columbia','V7H 3A8'));
        tempDB.push( new FNAddress('Tzeachten','575','British Columbia','45855 PROMONTORY ROAD','CHILLIWACK','British Columbia','V2R 0H3'));
        tempDB.push( new FNAddress('Uchucklesaht','667','British Columbia','5251 ARGYLE STREET, SUITE A','PORT ALBERNI','British Columbia','V9Y 1V1'));
        tempDB.push( new FNAddress('Ucluelet First Nation','668','British Columbia','PO BOX 699','UCLUELET','British Columbia','V0R 3A0'));
        tempDB.push( new FNAddress('Ulkatcho','722','British Columbia','PO BOX 3430','ANAHIM LAKE','British Columbia','V0L 1C0'));
        tempDB.push( new FNAddress('Union Bar First Nation','588','British Columbia','66427 KAWKAWA LAKE RD','HOPE','British Columbia','V0X 1L1'));
        tempDB.push( new FNAddress('Upper Nicola','697','British Columbia','PO BOX 3700','MERRITT','British Columbia','V1K 1B8'));
        tempDB.push( new FNAddress('Upper Similkameen','599','British Columbia','PO BOX 220','HEDLEY','British Columbia','V0X 1K0'));
        tempDB.push( new FNAddress('West Moberly First Nations','545','British Columbia','PO BOX 90','MOBERLY LAKE','British Columbia','V0C 1X0'));
        tempDB.push( new FNAddress('Wuikinuxv Nation','541','British Columbia','WUIKINUXV VILLAGE RIVERS INLET, PO BOX 3500','PORT HARDY','British Columbia','V0N 2P0'));
        tempDB.push( new FNAddress('Xaxli p','592','British Columbia','PO BOX 1330','LILLOOET','British Columbia','V0K 1V0'));
        tempDB.push( new FNAddress('Xeni Gwet in First Nations Government','714','British Columbia','GENERAL DELIVERY','NEMIAH VALLEY','British Columbia','V0L 1X0'));
        tempDB.push( new FNAddress('Yakweakwioose','576','British Columbia','RR 2, 7176 CHILLIWACK RIVER ROAD','SARDIS','British Columbia','V2R 1B1'));
        tempDB.push( new FNAddress('Yale First Nation','589','British Columbia','PO BOX 1869','HOPE','British Columbia','V0X 1L0'));
        tempDB.push( new FNAddress('Yekooche First Nation','728','British Columbia','1890 - 3RD AVENUE','PRINCE GEORGE','British Columbia','V2M 1G4'));
        tempDB.push( new FNAddress('Yunesit in Government','717','British Columbia','PO BOX 158','HANCEVILLE','British Columbia','V0L 1K0'));
        tempDB.push( new FNAddress('Barren Lands','308','Manitoba','PO BOX 40','BROCHET','Manitoba','R0B 0B0'));
        tempDB.push( new FNAddress('Berens River','266','Manitoba','PO BOX 131','BERENS RIVER','Manitoba','R0B 0A0'));
        tempDB.push( new FNAddress('Birdtail Sioux','284','Manitoba','PO BOX 22','BEULAH','Manitoba','R0M 0B0'));
        tempDB.push( new FNAddress('Black River First Nation','260','Manitoba','GENERAL DELIVERY','O HANLEY','Manitoba','R0E 1K0'));
        tempDB.push( new FNAddress('Bloodvein','267','Manitoba','GENERAL DELIVERY','BLOODVEIN','Manitoba','R0C 0J0'));
        tempDB.push( new FNAddress('Brokenhead Ojibway Nation','261','Manitoba','GENERAL DELIVERY','SCANTERBURY','Manitoba','R0E 1W0'));
        tempDB.push( new FNAddress('Buffalo Point First Nation','265','Manitoba','PO BOX 1037','BUFFALO POINT','Manitoba','R0A 2W0'));
        tempDB.push( new FNAddress('Bunibonibee Cree Nation','301','Manitoba','GENERAL DELIVERY','OXFORD HOUSE','Manitoba','R0B 1C0'));
        tempDB.push( new FNAddress('Dauphin River','316','Manitoba','PO BOX 58','GYPSUMVILLE','Manitoba','R0C 1J0'));
        tempDB.push( new FNAddress('Ebb and Flow','280','Manitoba','PO BOX 159','EBB AND FLOW','Manitoba','R0L 0R0'));
        tempDB.push( new FNAddress('Fisher River','264','Manitoba','PO BOX 367','KOOSTATAK','Manitoba','R0C 1S0'));
        tempDB.push( new FNAddress('Fort Alexander','262','Manitoba','PO BOX 3','FORT ALEXANDER','Manitoba','R0E 0P0'));
        tempDB.push( new FNAddress('Fox Lake','305','Manitoba','PO BOX 369','GILLAM','Manitoba','R0B 0L0'));
        tempDB.push( new FNAddress('Gambler First Nation','294','Manitoba','PO BOX 250','BINSCARTH','Manitoba','R0J 0G0'));
        tempDB.push( new FNAddress('Garden Hill First Nations','297','Manitoba','GENERAL DELIVERY','ISLAND LAKE','Manitoba','R0B 0T0'));
        tempDB.push( new FNAddress('God s Lake First Nation','296','Manitoba','PO BOX 258','GOD S LAKE NARROWS','Manitoba','R0B 0M0'));
        tempDB.push( new FNAddress('Hollow Water','263','Manitoba','PO BOX 2561','WANIPIGOW','Manitoba','R0E 2E0'));
        tempDB.push( new FNAddress('Keeseekoowenin','286','Manitoba','PO BOX 100','ELPHINSTONE','Manitoba','R0J 0N0'));
        tempDB.push( new FNAddress('Kinonjeoshtegon First Nation','268','Manitoba','PO BOX 210','DALLAS','Manitoba','R0C 0S0'));
        tempDB.push( new FNAddress('Lake Manitoba','271','Manitoba','PO BOX 1250','LAKE MANITOBA FIRST NATION','Manitoba','R0C 3K0'));
        tempDB.push( new FNAddress('Lake St. Martin','275','Manitoba','550 BERRY ST','WINNIPEG','Manitoba','R3H 0R9'));
        tempDB.push( new FNAddress('Mosakahiken Cree Nation','312','Manitoba','GENERAL DELIVERY','MOOSE LAKE','Manitoba','R0B 0Y0'));
        tempDB.push( new FNAddress('Nisichawayasihk Cree Nation','313','Manitoba','GENERAL DELIVERY','NELSON HOUSE','Manitoba','R0B 1A0'));
        tempDB.push( new FNAddress('Northlands Denesuline First Nation','317','Manitoba','PO BOX 120','LAC BROCHET','Manitoba','R0B 2E0'));
        tempDB.push( new FNAddress('Norway House Cree Nation','278','Manitoba','PO BOX 250','NORWAY HOUSE','Manitoba','R0B 1B0'));
        tempDB.push( new FNAddress('O-Chi-Chak-Ko-Sipi First Nation','279','Manitoba','PO BOX 103','CRANE RIVER','Manitoba','R0L 0M0'));
        tempDB.push( new FNAddress('O-Pipon-Na-Piwin Cree Nation','318','Manitoba','PO BOX 139','SOUTH INDIAN LAKE','Manitoba','R0B 1N0'));
        tempDB.push( new FNAddress('Opaskwayak Cree Nation','315','Manitoba','PO BOX 10880','OPASKWAYAK','Manitoba','R0B 2J0'));
        tempDB.push( new FNAddress('Pauingassi First Nation','327','Manitoba','PO BOX 60','PAUINGASSI','Manitoba','R0B 2G0'));
        tempDB.push( new FNAddress('Peguis','269','Manitoba','PO BOX 10','PEGUIS RESERVE','Manitoba','R0C 3J0'));
        tempDB.push( new FNAddress('Pinaymootang First Nation','272','Manitoba','General Delivery','FAIRFORD','Manitoba','R0C 0X0'));
        tempDB.push( new FNAddress('Pine Creek','282','Manitoba','PO BOX 70','CAMPERVILLE','Manitoba','R0L 0J0'));
        tempDB.push( new FNAddress('Poplar River First Nation','277','Manitoba','PO BOX 90','NEGGINAN','Manitoba','R0B 0Z0'));
        tempDB.push( new FNAddress('Red Sucker Lake','300','Manitoba','GENERAL DELIVERY','RED SUCKER LAKE','Manitoba','R0B 1H0'));
        tempDB.push( new FNAddress('Rolling River','291','Manitoba','PO BOX 145','ERICKSON','Manitoba','R0J 0P0'));
        tempDB.push( new FNAddress('Roseau River Anishinabe First Nation Government','273','Manitoba','PO BOX 30','GINEW','Manitoba','R0A 2R0'));
        tempDB.push( new FNAddress('Sandy Bay','283','Manitoba','PO BOX 109','MARIUS','Manitoba','R0H 0T0'));
        tempDB.push( new FNAddress('Sapotaweyak Cree Nation','314','Manitoba','GENERAL DELIVERY, VIA PELICAN RAPIDS','PELICAN RAPIDS','Manitoba','R0L 1L0'));
        tempDB.push( new FNAddress('Sayisi Dene First Nation','303','Manitoba','GENERAL DELIVERY','TADOULE LAKE','Manitoba','R0B 2C0'));
        tempDB.push( new FNAddress('Skownan First Nation','281','Manitoba','GENERAL DELIVERY','SKOWNAN','Manitoba','R0L 1Y0'));
        tempDB.push( new FNAddress('St. Theresa Point','298','Manitoba','GENERAL DELIVERY','ST THERESA POINT','Manitoba','R0B 1J0'));
        tempDB.push( new FNAddress('Swan Lake','293','Manitoba','PO BOX 368','SWAN LAKE','Manitoba','R0G 2S0'));
        tempDB.push( new FNAddress('Tataskweyak Cree Nation','306','Manitoba','PO BOX 250','SPLIT LAKE','Manitoba','R0B 1P0'));
        tempDB.push( new FNAddress('Tootinaowaziibeeng Treaty Reserve','292','Manitoba','P.O. Box 1','SHORTDALE','Manitoba','R0L 1W0'));
        tempDB.push( new FNAddress('War Lake First Nation','323','Manitoba','GENERAL DELIVERY','ILFORD','Manitoba','R0B 0S0'));
        tempDB.push( new FNAddress('Wasagamack First Nation','299','Manitoba','PO BOX 1','WASAGAMACK','Manitoba','R0B 1Z0'));
        tempDB.push( new FNAddress('Waywayseecappo First Nation Treaty Four - 1874','285','Manitoba','PO BOX 9','WAYWAYSEECAPPO','Manitoba','R0J 1S0'));
        tempDB.push( new FNAddress('Wuskwi Sipihk First Nation','324','Manitoba','PO BOX 220','BIRCH RIVER','Manitoba','R0L 0E0'));
        tempDB.push( new FNAddress('York Factory First Nation','304','Manitoba','GENERAL DELIVERY','YORK LANDING','Manitoba','R0B 2B0'));
        tempDB.push( new FNAddress('Buctouche MicMac','4','New Brunswick','9 RESERVE ROAD','BUCTOUCHE RESERVE','New Brunswick','E4S 4G2'));
        tempDB.push( new FNAddress('Eel Ground','7','New Brunswick','47 CHURCH RD','EEL GROUND','New Brunswick','E1V 4E6'));
        tempDB.push( new FNAddress('Eel River Bar First Nation','8','New Brunswick','11 MAIN STREET, UNIT 201','EEL RIVER BAR','New Brunswick','E8C 1A1'));
        tempDB.push( new FNAddress('Elsipogtog First Nation','3','New Brunswick','373 BIG COVE ROAD','ELSIPOGTOG FIRST NATION','New Brunswick','E4W 2S3'));
        tempDB.push( new FNAddress('Esgenoopetitj First Nation','5','New Brunswick','621 BAYVIEW DRIVE','BURNT CHURCH','New Brunswick','E9G 2A8'));
        tempDB.push( new FNAddress('Oromocto First Nation','12','New Brunswick','PO BOX 417, 4 HIAWATHA AVENUE','OROMOCTO','New Brunswick','E2V 2J2'));
        tempDB.push( new FNAddress('Pabineau','13','New Brunswick','1290 PABINEAU FALLS ROAD','PABINEAU FIRST NATION','New Brunswick','E2A 7M3'));
        tempDB.push( new FNAddress('Saint Mary s','15','New Brunswick','150 CLIFFE STREET','FREDERICTON','New Brunswick','E3A 0A1'));
        tempDB.push( new FNAddress('Tobique','16','New Brunswick','13156 ROUTE 105','TOBIQUE FIRST NATION','New Brunswick','E7H 5M7'));
        tempDB.push( new FNAddress('Woodstock','17','New Brunswick','3 WULASTOOK COURT','WOODSTOCK FIRST NATION','New Brunswick','E7M 4K6'));
        tempDB.push( new FNAddress('Miawpukek','47','New Foundaland and Labrador','50 MIAWPUKEK DRIVE, PO BOX 10','CONNE RIVER','New Foundaland and Labrador','A0H 1J0'));
        tempDB.push( new FNAddress('Mushuau Innu First Nation','32','New Foundaland and Labrador','PO BOX 190','NATUASHISH','New Foundaland and Labrador','A0P 1A0'));
        tempDB.push( new FNAddress(' Qalipu Mi kmaq First Nation','34','New Foundaland and Labrador','3 CHURCH STREET','CORNER BROOK','New Foundaland and Labrador','A2H 2Z4'));
        tempDB.push( new FNAddress('Sheshatshiu Innu First Nation','33','New Foundaland and Labrador','PO BOX 160','SHESHATSHIU FIRST NATION','New Foundaland and Labrador','A0P 1M0'));
        tempDB.push( new FNAddress('Acadia','18','Nova Scotia','10526 HIGHWAY 3','YARMOUTH','Nova Scotia','B5A 4A8'));
        tempDB.push( new FNAddress('Annapolis Valley','20','Nova Scotia','29 TONEY BLVD','CAMBRIDGE 32','Nova Scotia','B0P 1G0'));
        tempDB.push( new FNAddress(' Wagmatcook','28','Nova Scotia','PO BOX 30001','WAGMATCOOK','Nova Scotia','B0E 3N0'));
        tempDB.push( new FNAddress('We koqma q First Nation','29','Nova Scotia','150 Reservation Road','Waycobah','Nova Scotia','B0E 3M0'));
        tempDB.push( new FNAddress('Acho Dene Koe First Nation','758','Northwest Territories','GENERAL DELIVERY','FORT LIARD','Northwest Territories','X0E 0A0'));
        tempDB.push( new FNAddress('Aklavik','755','Northwest Territories','PO BOX 118','AKLAVIK','Northwest Territories','X0E 0A0'));
        tempDB.push( new FNAddress('Behdzi Ahda  First Nation','771','Northwest Territories','PO BOX 53','COLVILLE LAKE','Northwest Territories','X0E 0L0'));
        tempDB.push( new FNAddress('Dechi Laot i First Nations','774','Northwest Territories','PO BOX 34','WEKWETI','Northwest Territories','X0E 1W0'));
        tempDB.push( new FNAddress('Deh Gah Got ie Dene First Nation','760','Northwest Territories','PO BOX 200','FORT PROVIDENCE','Northwest Territories','X0E 0L0'));
        tempDB.push( new FNAddress('Deline First Nation','754','Northwest Territories','PO BOX 156','DELINE','Northwest Territories','X0E 0G0'));
        tempDB.push( new FNAddress('Dog Rib Rae','765','Northwest Territories','PO BOX 412','BEHCHOKO','Northwest Territories','X0E 0Y0'));
        tempDB.push( new FNAddress('Fort Good Hope','752','Northwest Territories','PO BOX 80','FORT GOOD HOPE','Northwest Territories','X0E 0H0'));
        tempDB.push( new FNAddress('Gameti First Nation','773','Northwest Territories','PO BOX 104','GAMETI','Northwest Territories','X0E 1R0'));
        tempDB.push( new FNAddress('Gwichya Gwich in','753','Northwest Territories','PO BOX 4','TSIIGEHTCHIC','Northwest Territories','X0E 0B0'));
        tempDB.push( new FNAddress('Inuvik Native','780','Northwest Territories','PO BOX 2570','INUVIK','Northwest Territories','X0E 0T0'));
        tempDB.push( new FNAddress('Jean Marie River First Nation','770','Northwest Territories','GENERAL DELIVERY','JEAN MARIE RIVER,NT,X0E 0N0'));
        tempDB.push( new FNAddress('K atlodeeche First Nation','761','Northwest Territories','PO BOX 3060','HAY RIVER RESERVE','Northwest Territories','X0E 1G4'));
        tempDB.push( new FNAddress('Pehdzeh Ki First Nation','756','Northwest Territories','GENERAL DELIVERY','WRIGLEY','Northwest Territories','X0E 1E0'));
        tempDB.push( new FNAddress('Salt River First Nation #195','759','Northwest Territories','PO BOX 960','FORT SMITH','Northwest Territories','X0E 0P0'));
        tempDB.push( new FNAddress('Sambaa K e First Nation','767','Northwest Territories','PO BOX 10, VIA FORT SIMPSON','TROUT LAKE','Northwest Territories','X0E 0N0'));
        tempDB.push( new FNAddress('Teetl it Gwich in Band Council','751','Northwest Territories','PO BOX 30','FORT MCPHERSON','Northwest Territories','X0E 0J0'));
        tempDB.push( new FNAddress('Tulita Dene','750','Northwest Territories','PO BOX 118','TULITA','Northwest Territories','X0E 0K0'));
        tempDB.push( new FNAddress('West Point First Nation','772','Northwest Territories','1 - 47031 MACKENZIE HWY','HAY RIVER','Northwest Territories','X0E 0R9'));
        tempDB.push( new FNAddress('Wha Ti First Nation','769','Northwest Territories','PO BOX 92','WHA TI','Northwest Territories','X0E 1P0'));
        tempDB.push( new FNAddress('Yellowknives Dene First Nation','763','Northwest Territories','PO BOX 2514','YELLOWKNIFE','Northwest Territories','X1A 2P8'));
        tempDB.push( new FNAddress(' Aamjiwnaang','172','Ontario','978 TASHMOO AVENUE','SARNIA','Ontario','N7T 7H5'));
        tempDB.push( new FNAddress(' Albany','142','Ontario','PO BOX 1','FORT ALBANY','Ontario','P0L 1H0'));
        tempDB.push( new FNAddress('Alderville First Nation','160','Ontario','PO BOX 46','ROSENEATH','Ontario','K0K 2X0'));
        tempDB.push( new FNAddress('Algonquins of Pikwakanagan First Nation','163','Ontario','1657A Mishomis Inamo','Pikwakanagan','Ontario','K0J 1X0'));
        tempDB.push( new FNAddress('Animakee Wa Zhing #37','152','Ontario','PO BOX 1590','KENORA','Ontario','P9N 3X7'));
        tempDB.push( new FNAddress('Batchewana First Nation','198','Ontario','236 FRONTENAC STREET','SAULT STE MARIE','Ontario','P6A 5K9'));
        tempDB.push( new FNAddress('Bay of Quinte Mohawk','244','Ontario','24 Meadow Dr, RR 1','Tyendinaga�Mohawk�Territory','Ontario','K0K 1X0'));
        tempDB.push( new FNAddress('Bearfoot Onondaga','248','Ontario'));
        tempDB.push( new FNAddress('Bearskin Lake','207','Ontario','PO BOX 25','BEARSKIN LAKE','Ontario','P0V 1E0'));
        tempDB.push( new FNAddress('Beausoleil','141','Ontario','GENERAL DELIVERY','CEDAR POINT','Ontario','L0K 1C0'));
        tempDB.push( new FNAddress('Big Grassy','124','Ontario','PO BOX 414','MORSON','Ontario','P0W 1J0'));
        tempDB.push( new FNAddress('Biigtigong Nishnaabeg','192','Ontario','PO BOX 193','HERON BAY','Ontario','P0T 1R0'));
        tempDB.push( new FNAddress('Biinjitiwaabik Zaaging Anishinaabek','197','Ontario','GENERAL DELIVERY','MACDIARMID','Ontario','P0T 2B0'));
        tempDB.push( new FNAddress('Bingwi Neyaashi Anishinaabek','196','Ontario','292 Court Street South','Thunder Bay','Ontario','P7B 6C6'));
        tempDB.push( new FNAddress('Brunswick House','228','Ontario','PO BOX 1178','CHAPLEAU','Ontario','P0M 1K0'));
        tempDB.push( new FNAddress('Caldwell','165','Ontario','14 ORANGE STREET','LEAMINGTON','Ontario','N8H 1P5'));
        tempDB.push( new FNAddress('Cat Lake','216','Ontario','PO BOX 81','CAT LAKE','Ontario','P0V 1J0'));
        tempDB.push( new FNAddress('Chapleau Cree First Nation','221','Ontario','PO BOX 400','CHAPLEAU','Ontario','P0M 1K0'));
        tempDB.push( new FNAddress('Chapleau Ojibway','229','Ontario','85 Northern Avenue East','Sault Ste. Marie','Ontario','P6B 4H5'));
        tempDB.push( new FNAddress('Chippewas of Georgina Island','138','Ontario','RR 2, PO BOX 13','SUTTON WEST','Ontario','L0E 1R0'));
        tempDB.push( new FNAddress('Chippewas of Kettle and Stony Point','171','Ontario','6247 INDIAN LANE','KETTLE AND STONY POINT FIRST NATION','Ontario','N0N 1J1'));
        tempDB.push( new FNAddress('Chippewas of Nawash First Nation','122','Ontario','135 Lakeshore Blvd','Neyaashiinigmiing','Ontario','N0H 2T0'));
        tempDB.push( new FNAddress('Couchiching First Nation','126','Ontario','RR 2 RMB 2027','FORT FRANCES,ON,P9A 3M3'));
        tempDB.push( new FNAddress('Curve Lake','161','Ontario','GENERAL DELIVERY','CURVE LAKE','Ontario','K0L 1R0'));
        tempDB.push( new FNAddress('Deer Lake','237','Ontario','GENERAL DELIVERY','DEER LAKE','Ontario','P0V 1N0'));
        tempDB.push( new FNAddress('Delaware','253','Ontario'));
        tempDB.push( new FNAddress('Dokis','218','Ontario','948 MAIN STREET','DOKIS FIRST NATION','Ontario','P0M 2N1'));
        tempDB.push( new FNAddress('Eabametoong First Nation','183','Ontario','PO BOX 298','FORT HOPE','Ontario','P0T 1L0'));
        tempDB.push( new FNAddress('Eagle Lake','148','Ontario','PO BOX 1001','MIGISI SAHGAIGAN','Ontario','P0V 3H0'));
        tempDB.push( new FNAddress('Flying Post','227','Ontario','PO BOX 1027','NIPIGON','Ontario','P0T 2J0'));
        tempDB.push( new FNAddress('Fort Severn','215','Ontario','GENERAL DELIVERY','FORT SEVERN','Ontario','P0V 1W0'));
        tempDB.push( new FNAddress('Kitchenuhmaykoosib Inninuwug','209','Ontario','PO BOX 329','BIG TROUT LAKE','Ontario','P0V 1G0'));
        tempDB.push( new FNAddress('Konadaha Seneca','251','Ontario'));
        tempDB.push( new FNAddress('Lac Des Mille Lacs','189','Ontario','328 - 1100 MEMORIAL AVENUE','THUNDER BAY','Ontario','P7B 4A3'));
        tempDB.push( new FNAddress(' La Croix','127','Ontario','PO BOX 640','FORT FRANCES','Ontario','P9A 3M9'));
        tempDB.push( new FNAddress('Lac Seul','205','Ontario','PO BOX 100','HUDSON','Ontario','P0V 1X0'));
        tempDB.push( new FNAddress('Long Lake No.58 First Nation','184','Ontario','PO BOX 609','LONGLAC','Ontario','P0T 2A0'));
        tempDB.push( new FNAddress('Lower Cayuga','250','Ontario'));
        tempDB.push( new FNAddress('Lower Mohawk','254','Ontario'));
        tempDB.push( new FNAddress('M Chigeeng First Nation','181','Ontario','PO BOX 333, 53 HWY 551','M CHIGEENG','Ontario','P0P 1G0'));
        tempDB.push( new FNAddress('Magnetawan','174','Ontario','10 HWY 529','BRITT','Ontario','P0G 1A0'));
        tempDB.push( new FNAddress('Martin Falls','186','Ontario','GENERAL DELIVERY','OGOKI POST','Ontario','P0T 2L0'));
        tempDB.push( new FNAddress('Matachewan','219','Ontario','PO BOX 160','MATACHEWAN','Ontario','P0K 1M0'));
        tempDB.push( new FNAddress('Mattagami','226','Ontario','PO BOX 99','GOGAMA','Ontario','P0M 1W0'));
        tempDB.push( new FNAddress('McDowell Lake','326','Ontario','PO BOX 321','RED LAKE','Ontario','P0V 2M0'));
        tempDB.push( new FNAddress('Michipicoten','225','Ontario','PO BOX 1, SITE 8, RR 1','WAWA','Ontario','P0S 1K0'));
        tempDB.push( new FNAddress('Mishkeegogamang','203','Ontario','GENERAL DELIVERY','OSNABURGH','Ontario','P0V 2H0'));
        tempDB.push( new FNAddress('Missanabie Cree','223','Ontario','174B HWY 17B','GARDEN RIVER','Ontario','P6A 6Z1'));
        tempDB.push( new FNAddress('Mississauga','200','Ontario','PO BOX 1299','BLIND RIVER','Ontario','P0R 1B0'));
        tempDB.push( new FNAddress('Mississaugas of Scugog Island First Nation','140','Ontario','22521 ISLAND ROAD','PORT PERRY','Ontario','L9L 1B6'));
        tempDB.push( new FNAddress('Mississaugas of the Credit','120','Ontario','2789 MISSISSAUGA ROAD, RR 6','HAGERSVILLE','Ontario','N0A 1H0'));
        tempDB.push( new FNAddress('Mitaanjigamiing First Nation','133','Ontario','PO BOX 609','FORT FRANCES','Ontario','P9A 3M9'));
        tempDB.push( new FNAddress('Mohawks of Akwesasne','159','Ontario','PO BOX 90','AKWESASNE','Quebec','H0M 1A0'));
        tempDB.push( new FNAddress('Mohawks of the Bay of Quinte','164','Ontario','24 MEADOW DRIVE','TYENDINAGA MOHAWK TERRITORY','Ontario','K0K 1X0'));
        tempDB.push( new FNAddress('Moose Cree First Nation','144','Ontario','PO BOX 190','MOOSE FACTORY','Ontario','P0L 1W0'));
        tempDB.push( new FNAddress('Moose Deer Point','135','Ontario','PO BOX 119','MACTIER','Ontario','P0C 1H0'));
        tempDB.push( new FNAddress('Moravian of the Thames','167','Ontario','14760 Schoolhouse Line,  RR 3','THAMESVILLE','Ontario','N0P 2K0'));
        tempDB.push( new FNAddress('Munsee-Delaware Nation','168','Ontario','RR 1','MUNCEY','Ontario','N0L 1Y0'));
        tempDB.push( new FNAddress('Muskrat Dam Lake','213','Ontario','PO BOX 140','MUSKRAT DAM','Ontario','P0V 3B0'));
        tempDB.push( new FNAddress('Naicatchewenin','128','Ontario','PO BOX 15,  RR 1','DEVLIN','Ontario','P0W 1C0'));
        tempDB.push( new FNAddress('Naotkamegwanning','158','Ontario','1800 PAWITIK STREET','PAWITIK','Ontario','P0X 1L0'));
        tempDB.push( new FNAddress('Neskantaga First Nation','239','Ontario','PO BOX 105','LANSDOWNE HOUSE','Ontario','P0T 1Z0'));
        tempDB.push( new FNAddress('Nibinamik First Nation','241','Ontario','GENERAL DELIVERY','SUMMER BEAVER','Ontario','P0T 3B0'));
        tempDB.push( new FNAddress('Nigigoonsiminikaaning First Nation','129','Ontario','PO BOX 68','FORT FRANCES','Ontario','P9A 3M5'));
        tempDB.push( new FNAddress('Niharondasa Seneca','252','Ontario'));
        tempDB.push( new FNAddress('Niisaachewan Anishinaabe Nation','147','Ontario','22 BAND OFFICE RD.','DALLES','Ontario','P9N 0J2'));
        tempDB.push( new FNAddress('Nipissing First Nation','220','Ontario','36 SEMO ROAD','GARDEN VILLAGE','Ontario','P2B 3K2'));
        tempDB.push( new FNAddress('North Caribou Lake','204','Ontario','PO Box 154, 30 Band Office Road','WEAGAMOW LAKE','Ontario','P0V 2Y0'));
        tempDB.push( new FNAddress('Ojibways of Onigaming First Nation','131','Ontario','PO BOX 160','NESTOR FALLS','Ontario','P0X 1K0'));
        tempDB.push( new FNAddress('Oneida','246','Ontario'));
        tempDB.push( new FNAddress('Oneida Nation of the Thames','169','Ontario','RR 2','SOUTHWOLD','Ontario','N0L 2G0'));
        tempDB.push( new FNAddress('Onondaga Clear Sky','247','Ontario'));
        tempDB.push( new FNAddress('Pays Plat','191','Ontario','10 CENTRAL PLACE','PAYS PLAT','Ontario','P0T 3C0'));
        tempDB.push( new FNAddress('Pic Mobert','195','Ontario','PO BOX 717','MOBERT','Ontario','P0M 2J0'));
        tempDB.push( new FNAddress('Pikangikum','208','Ontario','PO BOX 323','PIKANGIKUM','Ontario','P0V 2L0'));
        tempDB.push( new FNAddress('Poplar Hill','236','Ontario','PO BOX 1','POPLAR HILL','Ontario','P0V 3E0'));
        tempDB.push( new FNAddress('Rainy River First Nations','130','Ontario','PO BOX 450','EMO','Ontario','P0W 1E0'));
        tempDB.push( new FNAddress('Red Rock','193','Ontario','PO BOX 1030','NIPIGON','Ontario','P0T 2J0'));
        tempDB.push( new FNAddress('Sachigo Lake','214','Ontario','PO BOX 51','SACHIGO LAKE','Ontario','P0V 2P0'));
        tempDB.push( new FNAddress('Sagamok Anishnawbek','179','Ontario','PO BOX 610','MASSEY','Ontario','P0P 1P0'));
        tempDB.push( new FNAddress('Sandy Lake','211','Ontario','PO BOX 12','SANDY LAKE','Ontario','P0V 1V0'));
        tempDB.push( new FNAddress('Saugeen','123','Ontario','6493 Hwy 21','Saugeen First Nation # 29','Ontario','N0H 2L0'));
        tempDB.push( new FNAddress('Seine River First Nation','132','Ontario','PO BOX 124','MINE CENTRE','Ontario','P0W 1H0'));
        tempDB.push( new FNAddress('Serpent River','201','Ontario','PO BOX 14, 195 VILLAGE ROAD','CUTLER','Ontario','P0P 1B0'));
        tempDB.push( new FNAddress('Shawanaga First Nation','137','Ontario','RR1, 2 VILLAGE ROAD','NOBEL','Ontario','P0G 1G0'));
        tempDB.push( new FNAddress('Sheguiandah','176','Ontario','PO BOX 101','SHEGUIANDAH','Ontario','P0P 1W0'));
        tempDB.push( new FNAddress('Sheshegwaning','178','Ontario','1079A SHESHEGWANING ROAD','SHESHEGWANING','Ontario','P0P 1X0'));
        tempDB.push( new FNAddress('Six Nations of the Grand River','121','Ontario','PO BOX 5000','OHSWEKEN','Ontario','N0A 1M0'));
        tempDB.push( new FNAddress('Slate Falls Nation','259','Ontario','48 LAKEVIEW DR','SLATE FALLS','Ontario','P0V 3C0'));
        tempDB.push( new FNAddress('Taykwa Tagamou Nation','145','Ontario','PO BOX 3310, RR 2','COCHRANE','Ontario','P0L 1C0'));
        tempDB.push( new FNAddress('Temagami First Nation','222','Ontario','GENERAL DELIVERY','BEAR ISLAND','Ontario','P0H 1C0'));
        tempDB.push( new FNAddress('Thessalon','202','Ontario','40 SUGARBUSH ROAD','THESSALON','Ontario','P0R 1L0'));
        tempDB.push( new FNAddress('Tuscarora','245','Ontario'));
        tempDB.push( new FNAddress('Upper Cayuga','249','Ontario'));
        tempDB.push( new FNAddress('Upper Mohawk','257','Ontario'));
        tempDB.push( new FNAddress('Wabaseemoong Independent Nations','150','Ontario','GENERAL DELIVERY','WHITEDOG','Ontario','P0X 1P0'));
        tempDB.push( new FNAddress('Wabauskang First Nation','156','Ontario','PO BOX 339','EAR FALLS','Ontario','P0V 1T0'));
        tempDB.push( new FNAddress('Wabigoon Lake Ojibway Nation','157','Ontario','RR 1, SITE 115,  PO BOX 300','DRYDEN','Ontario','P8N 2Y4'));
        tempDB.push( new FNAddress('Wahgoshig First Nation','233','Ontario','RR 3','MATHESON','Ontario','P0K 1N0'));
        tempDB.push( new FNAddress('Wahnapitae','232','Ontario','259 TAIGHWENINI TRAIL ROAD','CAPREOL','Ontario','P0M 1H0'));
        tempDB.push( new FNAddress('Wahta Mohawk','134','Ontario','PO BOX 260','BALA','Ontario','P0C 1A0'));
        tempDB.push( new FNAddress('Walker Mohawk','255','Ontario'));
        tempDB.push( new FNAddress('Walpole Island','170','Ontario','RR 3','WALLACEBURG','Ontario','N8A 4K9'));
        tempDB.push( new FNAddress('Webequie','240','Ontario','PO BOX 268','WEBEQUIE','Ontario','P0T 3A0'));
        tempDB.push( new FNAddress('Weenusk','146','Ontario','PO BOX 1','PEAWANUCK','Ontario','P0L 2H0'));
        tempDB.push( new FNAddress('Whitefish River','230','Ontario','PO BOX A','BIRCH ISLAND','Ontario','P0P 1A0'));
        tempDB.push( new FNAddress('Whitesand','190','Ontario','PO BOX 68','ARMSTRONG','Ontario','P0T 1A0'));
        tempDB.push( new FNAddress('Wikwemikong','175','Ontario','PO BOX 112','WIKWEMIKONG','Ontario','P0P 2J0'));
        tempDB.push( new FNAddress('Wunnumin','217','Ontario','PO BOX 105','WUNNUMIN LAKE','Ontario','P0V 2Z0'));
        tempDB.push( new FNAddress('Zhiibaahaasing First Nation','173','Ontario','36 SAGON ROAD','ZHIIBAAHAASING','Ontario','P0P 1X0'));
        tempDB.push( new FNAddress('Abegweit','1','Prince Edward Island','PO BOX 36,  11222 ST. PETERS ROAD','SCOTCHFORT','Prince Edward Island','C0A 1T0'));
        tempDB.push( new FNAddress('Lennox Island','2','Prince Edward Island','PO BOX 134','LENNOX ISLAND','Prince Edward Island','C0B 1P0'));
        tempDB.push( new FNAddress('Algonquins of Barriere Lake','74','Quebec','Parc de la Verendrye, P.O Box 74, General Delivery','Rapid Lake','Quebec','J0W 2C0'));
        tempDB.push( new FNAddress('Atikamekw d Opitciwan','79','Quebec','22 rue Amisk, CP 135','Obedjiwan','Quebec','G0W 3B0'));
        tempDB.push( new FNAddress('Bande des Innus de Pessamit','85','Quebec','4 rue Metshteu, CP 40','Pessamit','Quebec','G0H 1B0'));
        tempDB.push( new FNAddress('Communaute anicinape de Kitcisakik','62','Quebec','5206 Kitcisakik','Val D Or','Quebec','J9P 7C6'));
        tempDB.push( new FNAddress('Conseil de la Premere Nation Abitibiwinni','55','Quebec','45 Rue Migwan','Pikogan','Quebec','J9T 3A3'));
        tempDB.push( new FNAddress('Conseil des Atikamekw de Wemotaci','77','Quebec','36 Rue Kenosi, CP 221','Wemotaci','Quebec','G0X 3R0'));
        tempDB.push( new FNAddress('Cree Nation of Chisasibi','58','Quebec','1 Riverside Drive, P.O. Box 150','Chisasibi','Quebec','J0M 1E0'));
        tempDB.push( new FNAddress('Innu Takuaikan Uashat Mak Mani-Utenam','80','Quebec','265 boulevard des Montagnais, CP 8000','Uashat','Quebec','G4R 4L9'));
        tempDB.push( new FNAddress('Innue Essipit','86','Quebec','32 rue de la Reserve, CP 820','Essipit','Quebec','G0T 1K0'));
        tempDB.push( new FNAddress('Kebaowek First Nation','65','Quebec','110 Ogima Street','Kebaowek','Quebec','J0Z 3R1'));
        tempDB.push( new FNAddress('Kitigan Zibi Anishinabeg','73','Quebec','1 Paganakomin Mikan Street, P.O. Box 309','Maniwaki','Quebec','J9E 3C9'));
        tempDB.push( new FNAddress('La Nation Innu Matimekush-Lac John','87','Quebec','170 rue Pearce Lake','Schefferville','Quebec','G0G 2T0'));
        tempDB.push( new FNAddress('La Nation Micmac de Gespeg','53','Quebec','34 Montee de Corte-Real, C.P. 69 Succ. Fontenelle','Gaspe','Quebec','G4X 6V2'));
        tempDB.push( new FNAddress('Les Atikamekw de Manawan','78','Quebec','135 Rue Kicik','Manawan','Quebec','J0K 1M0'));
        tempDB.push( new FNAddress('Les Innus de Ekuanitshit','82','Quebec','35 rue Manitou','Ekuanitshit','Quebec','G0G 1V0'));
        tempDB.push( new FNAddress('Listuguj Mi gmaq Government','51','Quebec','17 Riverside Street West,  P.O. Box 298','Listuguj','Quebec','G0C 2R0'));
        tempDB.push( new FNAddress('Long Point First Nation','67','Quebec','112 Kakinwawigak Mikana, P.O. Box 1','Winneway','Quebec','J0Z 2J0'));
        tempDB.push( new FNAddress('Premiere nation de Whapmagoostui','95','Quebec','P.O. Box 390','Whapmagoostui','Quebec','J0M 1G0'));
        tempDB.push( new FNAddress('Premiere Nation des Abenakis de W�linak','71','Quebec','10120 Rue Kolipao','W�linak','Quebec','G0X 1B0'));
        tempDB.push( new FNAddress('Premiere Nation des Innus de Nutashkuan','83','Quebec','78 rue Mashkush','Natashquan','Quebec','G0G 2E0'));
        tempDB.push( new FNAddress('Premiere Nation des Pekuakamiulnuatsh','76','Quebec','1671 rue Ouiatchouan','Mashteuiatsh','Quebec','G0W 2H0'));
        tempDB.push( new FNAddress('Premi�re Nation Wolastoqiyik (Mal�cite) Wahsipekuk','54','Quebec','217 rue de la Greve','Cacouna','Quebec','G0L 1G0'));
        tempDB.push( new FNAddress('The Crees of the Waskaganish First Nation','61','Quebec','70 Waskaganish Street, P.O. BOX 60','Waskaganish','Quebec','J0M 1R0'));
        tempDB.push( new FNAddress('Timiskaming First Nation','64','Quebec','24 Algonquin Avenue','Notre-Dame-du-Nord','Quebec','J0Z 3B0'));
        tempDB.push( new FNAddress('Waswanipi','56','Quebec','1 Chief Louis R. Gull Street,  Diom Blacksmith Building,  P.O. Box 8','Waswapini','Quebec','J0Y 3C0'));
        tempDB.push( new FNAddress('Wolf Lake','68','Quebec','Hunter s Point, P.O. Box 998','Temiscaming','Quebec','J0Z 3R0'));
        tempDB.push( new FNAddress('Ahtahkakoop','406','Saskatchewan','PO BOX 220','SHELL LAKE','Saskatchewan','S0J 2G0'));
        tempDB.push( new FNAddress('Beardy s and Okemasis','369','Saskatchewan','PO BOX 340','DUCK LAKE','Saskatchewan','S0K 1J0'));
        tempDB.push( new FNAddress('Big Island Lake Cree Nation','399','Saskatchewan','PO BOX 309','PIERCELAND','Saskatchewan','S0M 2K0'));
        tempDB.push( new FNAddress('Big River','404','Saskatchewan','PO BOX 519','DEBDEN','Saskatchewan','S0J 0S0'));
        tempDB.push( new FNAddress('Cowessess','361','Saskatchewan','PO BOX 100','COWESSESS','Saskatchewan','S0G 5L0'));
        tempDB.push( new FNAddress('Cumberland House Cree Nation','350','Saskatchewan','PO BOX 220','CUMBERLAND HOUSE','Saskatchewan','S0E 0S0'));
        tempDB.push( new FNAddress('Day Star','389','Saskatchewan','PO BOX 277','PUNNICHY','Saskatchewan','S0A 3C0'));
        tempDB.push( new FNAddress('English River First Nation','400','Saskatchewan','GENERAL DELIVERY','PATUANAK','Saskatchewan','S0M 2H0'));
        tempDB.push( new FNAddress('Fishing Lake First Nation','390','Saskatchewan','PO BOX 508','WADENA','Saskatchewan','S0A 4J0'));
        tempDB.push( new FNAddress('Flying Dust First Nation','395','Saskatchewan','8001 FLYING DUST RESERVE','MEADOW LAKE','Saskatchewan','S9X 1T8'));
        tempDB.push( new FNAddress('Fond du Lac','351','Saskatchewan','PO BOX 211','FOND DU LAC','Saskatchewan','S0J 0W0'));
        tempDB.push( new FNAddress('George Gordon First Nation','391','Saskatchewan','PO BOX 248','PUNNICHY','Saskatchewan','S0A 3C0'));
        tempDB.push( new FNAddress('Hatchet Lake','352','Saskatchewan','GENERAL DELIVERY','WOLLASTON LAKE','Saskatchewan','S0J 3C0'));
        tempDB.push( new FNAddress('James Smith','370','Saskatchewan','PO BOX 1059','MELFORT','Saskatchewan','S0E 1A0'));
        tempDB.push( new FNAddress('Kahkewistahaw','362','Saskatchewan','PO BOX 609','BROADVIEW','Saskatchewan','S0G 0K0'));
        tempDB.push( new FNAddress('Kawacatoose','393','Saskatchewan','PO BOX 640','RAYMORE','Saskatchewan','S0A 3J0'));
        tempDB.push( new FNAddress('Keeseekoose','367','Saskatchewan','PO BOX 1120','KAMSACK','Saskatchewan','S0A 1S0'));
        tempDB.push( new FNAddress('Kinistin Saulteaux Nation','377','Saskatchewan','PO BOX 2590','TISDALE','Saskatchewan','S0E 1T0'));
        tempDB.push( new FNAddress('Lac La Ronge','353','Saskatchewan','PO BOX 480','LA RONGE','Saskatchewan','S0J 1L0'));
        tempDB.push( new FNAddress('Little Black Bear','379','Saskatchewan','PO BOX 40','GOODEVE','Saskatchewan','S0A 1C0'));
        tempDB.push( new FNAddress('Mistawasis Nehiyawak','374','Saskatchewan','PO BOX 250','LEASK','Saskatchewan','S0J 1M0'));
        tempDB.push( new FNAddress('Montreal Lake','354','Saskatchewan','PO BOX 106','MONTREAL LAKE','Saskatchewan','S0J 1Y0'));
        tempDB.push( new FNAddress('Moosomin','342','Saskatchewan','PO BOX 98','COCHIN','Saskatchewan','S0M 0L0'));
        tempDB.push( new FNAddress('Mosquito, Grizzly Bear s Head, Lean Man First Nations','343','Saskatchewan','PO BOX 177','CANDO','Saskatchewan','S0K 0V0'));
        tempDB.push( new FNAddress('Muscowpetung','381','Saskatchewan','PO BOX 1310','FORT QU APPELLE','Saskatchewan','S0G 1S0'));
        tempDB.push( new FNAddress('Muskeg Lake Cree Nation #102','375','Saskatchewan','PO BOX 248','MARCELIN','Saskatchewan','S0J 1R0'));
        tempDB.push( new FNAddress('Muskoday First Nation','371','Saskatchewan','PO BOX 99','MUSKODAY','Saskatchewan','S0J 3H0'));
        tempDB.push( new FNAddress('Muskowekwan','392','Saskatchewan','PO BOX 249','LESTOCK','Saskatchewan','S0A 2G0'));
        tempDB.push( new FNAddress('Nekaneet','380','Saskatchewan','PO BOX 548','MAPLE CREEK','Saskatchewan','S0N 1N0'));
        tempDB.push( new FNAddress('Ocean Man','408','Saskatchewan','PO BOX 157','STOUGHTON','Saskatchewan','S0G 4T0'));
        tempDB.push( new FNAddress('Ochapowace','363','Saskatchewan','PO BOX 550','WHITEWOOD','Saskatchewan','S0G 5C0'));
        tempDB.push( new FNAddress('Okanese','382','Saskatchewan','PO BOX 759','BALCARRES','Saskatchewan','S0G 0C0'));
        tempDB.push( new FNAddress('One Arrow First Nation','373','Saskatchewan','PO BOX 147','BELLEVUE','Saskatchewan','S0K 3Y0'));
        tempDB.push( new FNAddress('Onion Lake Cree Nation','344','Saskatchewan','PO BOX 100','ONION LAKE','Saskatchewan','S0M 2E0'));
        tempDB.push( new FNAddress('Red Earth','356','Saskatchewan','PO BOX 109','RED EARTH','Saskatchewan','S0E 1K0'));
        tempDB.push( new FNAddress('Red Pheasant','346','Saskatchewan','PO BOX 70','CANDO','Saskatchewan','S0K 0V0'));
        tempDB.push( new FNAddress('Saulteaux','347','Saskatchewan','PO BOX 159','COCHIN','Saskatchewan','S0M 0L0'));
        tempDB.push( new FNAddress('Shoal Lake Cree Nation','357','Saskatchewan','PO BOX 51','PAKWAW','Saskatchewan','S0E 1G0'));
        tempDB.push( new FNAddress('Standing Buffalo','386','Saskatchewan','PO BOX 128','FORT QU APPELLE','Saskatchewan','S0G 1S0'));
        tempDB.push( new FNAddress('Star Blanket Cree Nation','387','Saskatchewan','PO BOX 456','BALCARRES','Saskatchewan','S0G 0C0'));
        tempDB.push( new FNAddress('Sturgeon Lake First Nation','360','Saskatchewan','RR 1 SITE 12, PO BOX 5','SHELLBROOK','Saskatchewan','S0J 2E0'));
        tempDB.push( new FNAddress('Sweetgrass','348','Saskatchewan','PO BOX 147','GALLIVAN','Saskatchewan','S0M 0X0'));
        tempDB.push( new FNAddress('The Key First Nation','368','Saskatchewan','PO BOX 70','NORQUAY','Saskatchewan','S0A 2V0'));
        tempDB.push( new FNAddress('Thunderchild First Nation','349','Saskatchewan','PO BOX 600','TURTLEFORD','Saskatchewan','S0M 2Y0'));
        tempDB.push( new FNAddress('Wahpeton Dakota Nation','358','Saskatchewan','PO BOX 128','PRINCE ALBERT','Saskatchewan','S6V 5R4'));
        tempDB.push( new FNAddress('Waterhen Lake','402','Saskatchewan','PO BOX 9','WATERHEN LAKE','Saskatchewan','S0M 3B0'));
        tempDB.push( new FNAddress('White Bear','365','Saskatchewan','PO BOX 700','CARLYLE','Saskatchewan','S0C 0R0'));
        tempDB.push( new FNAddress('Whitecap Dakota First Nation','372','Saskatchewan','182 CHIEF WHITECAP TRAIL','WHITECAP','Saskatchewan','S7K 2L2'));
        tempDB.push( new FNAddress('Witchekan Lake','407','Saskatchewan','PO BOX 879','SPIRITWOOD','Saskatchewan','S0J 2M0'));
        tempDB.push( new FNAddress('Wood Mountain','388','Saskatchewan','PO BOX 1792','ASSINIBOIA','Saskatchewan','S0H 0B0'));
        tempDB.push( new FNAddress('Yellow Quill','376','Saskatchewan','PO BOX 40','YELLOW QUILL','Saskatchewan','S0A 3A0'));
        tempDB.push( new FNAddress('Carcross/Tagish First Nation','491','Yukon','PO BOX 130','CARCROSS','Yukon','Y0B 1B0'));
        tempDB.push( new FNAddress('Champagne','493','Yukon'));
        tempDB.push( new FNAddress('Champagne and Aishihik First Nations','507','Yukon','PO BOX 5310','HAINES JUNCTION','Yukon','Y0B 1L0'));
        tempDB.push( new FNAddress('Dease River','504','Yukon','PO BOX 79','GOOD HOPE LAKE','British Columbia','V0C 2Z0'));
        tempDB.push( new FNAddress('First Nation of Nacho Nyak Dun','495','Yukon','PO BOX 220','MAYO','Yukon','Y0B 1M0'));
        tempDB.push( new FNAddress('Kluane First Nation','503','Yukon','PO BOX 20','BURWASH LANDING','Yukon','Y0B 1V0'));
        tempDB.push( new FNAddress('Kwanlin Dun First Nation','500','Yukon','35 McINTYRE STREET','WHITEHORSE','Yukon','Y1A 5S5'));
        tempDB.push( new FNAddress('Liard First Nation','502','Yukon','PO BOX 328','WATSON LAKE','Yukon','Y0A 1C0'));
        tempDB.push( new FNAddress('Little Salmon/Carmacks First Nation','492','Yukon','PO BOX 135','CARMACKS','Yukon','Y0B 1C0'));
        tempDB.push( new FNAddress('Ross River','497','Yukon','GENERAL DELIVERY','ROSS RIVER','Yukon','Y0B 1S0'));
        tempDB.push( new FNAddress('Selkirk First Nation','498','Yukon','PO BOX 40','PELLY CROSSING','Yukon','Y0B 1P0'));
        tempDB.push( new FNAddress('Ta an Kwach an','508','Yukon','117 INDUSTRIAL ROAD','WHITEHORSE','Yukon','Y1A 2T8'));
        tempDB.push( new FNAddress('Taku River Tlingit','501','Yukon','PO BOX 132','ATLIN','British Columbia','V0W 1A0'));
        tempDB.push( new FNAddress('Teslin Tlingit Council','499','Yukon','PO BOX 133','TESLIN','Yukon','Y0A 1B0'));
        tempDB.push( new FNAddress('Tr�ondek Hwech�in','494','Yukon','PO BOX 599','DAWSON CITY','Yukon','Y0B 1G0'));
        tempDB.push( new FNAddress('Vuntut Gwitchin First Nation','496','Yukon','PO BOX 94','OLD CROW','Yukon','Y0B 1N0'));
        tempDB.push( new FNAddress('White River First Nation','506','Yukon','PO BOX 2','BEAVER CREEK','Yukon','Y0B 1A0'));

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