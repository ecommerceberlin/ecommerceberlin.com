import {
  connect,
  get as _get,
  Wrapper,
  Markdown,
  reduxWrapper,
  configure,
} from 'eventjuicer-site-components';

const settings = require('../../settings').default;

const PageLegalVisitorsData = () => (
 
  <Wrapper
    first
    label="Mobile app for Exhibitors and Visitors Privacy Policy"
  >
    <Markdown>{`
    
## General information and contact details of the Administrator

1. Company under the business name E-Commerce Capitals spółka z ograniczoną odpowiedzialnością sp. k. seated in Poznań (Poland), ul. Jana Matejki 52/4, 60-770 Poznań (Poland), 
entered into the Register of Entrepreneurs under the National Court Register number 0000592712, 
whose files are kept by the District Court Poznań Nowe Miasto and Wilda in Poznań, 8th Economic Department of the National Court Register, that uses tax identification number (NIP): 7792423665 and REGON statistical number: 363746333, 
hereinafter referred to as ‘Company’ or ‘Administrator’, fulfilling the obligation specified in art. 12, sec. 1 of the Regulation (EU) 2016/679 of the European Parliament and of the Council of April 27, 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, 
and repealing Directive 95/46/EC (General Data Protection Regulation), hereinafter referred to as ‘GDPR’, as personal data administrator, hereby presents this information, 
asking whoever it may concern to get acquainted with it.

2. The Administrator provides the following contact details for communication regarding personal data processing. 
Email address: office@ecommercecapitals.com, address: ul. Jana Matejki 52/4, 60-770 Poznań (Poland).

## Categories of personal data subject to processing and information on the freedom to provide them

3. The Company is the organizer of E-commerce Berlin Expo, hereinafter referred to as "Fair". 
Whoever wants to participate in the Fair can do so free of charge, but first they have to submit a presentation and register as a Contest participant at the Fair’s website, providing the following personal data:

* email address, 
* first name, 
* last name, 
* telephone no,
* brand name,

Provision of personal data is voluntary. However, unless they are provided, it will be impossible to take a part in Fair. 

## Purposes for which personal data are processed

4. The personal data mentioned in point 3 above serve exclusively the following purposes:

1. to organize the Contest,
2. to announce the results of the Contest on Fair’s website. 

## Legal basis for personal data processing

5. The Administrator informs that Guests’ personal data are processed for purposes mentioned in point 3, subpoints 1) – 4) above, under art. 6, sec. 1 (b) of GDPR, that is, 
exclusively to execute the agreement between the Administrator and the Contest participants that is concluded during registration. 

## The period of personal data processing

6. Personal data of Contest participants will be processed for purposes mentioned in: 

* point 4 subpoint 1) - until the Contest is over,
* point 4 subpoint 2) – 6 months after the Fair is over.

## The place of personal data storing

We hereby inform that the data we accumulate are stored on servers that are leased from [Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Germany] and located at https://www.hetzner.com/rechtliches/impressum?country=us

## The rights of people whose data we process

1. Every person whose personal data we process has the right to file a complaint about our actions or negligence to the supervising body, 
that is, the Inspector General for Personal Data Protection. The Office of the Inspector General for Personal Data Protection is located at ul. Stawki 2, 00-193 Warsaw.

2. Every person whose data we process has the right to obtain confirmation from us whether their personal data are processed and if this is the case, 
they are entitled to acquire access to the data and obtain information included in this document.

3. Every person whose personal data we process has the right to demand that we immediately correct the data that are incorrect. 
Besides, considering the purposes of processing, the person whom given data concern has the right to demand to complement incomplete personal data, including through presentation of an additional statement.

4. Every person whom the data concern has the right to ‘be forgotten’. It means that everybody whom the data concern may demand that we remove their personal data and we will do so immediately, provided that:

* the personal data are no longer essential for the purposes mentioned in point 5 above,
* the person whom the data concern withdraws the permission on the basis of which we process the data,
* the person whom the data concern opposed to our processing of the data (see point 15 below)
* the data are processed illegally,
* the request to remove the data results from the fact that we have not fulfilled our legal obligation under the law of the European Union or the Polish law,
* personal data have been acquired as a result of offering information society services to a person under 18.

5. The person whom the data concern has the right to demand that we restrict processing in the following situations:

* the person whom the data concern questions correctness of personal data – for the period of time we need to verify these data,
* the processing is illegal and the person whom the data concern opposes to their removing, demanding restriction of the use of the data instead,
* we do not need the personal data for the purposes of processing anymore, but the person whom they concern needs them for formulating, pursuing or defending claims,
* the person whom the data concern opposed to our processing of the data (see point 15) – for as long as it takes to determine whether legally justified grounds on the part of the Administrator are superior to the grounds of opposition of the person whom the data concern.

6. The person whom the data concern has the right to receive from us – in a structured, commonly used, machine-readable format – their personal data they have provided and they have the right to send these personal data to another administration as well as demand – if technically feasible – that we submit the data directly to another administrator, provided that:

* the data are processed on the basis of a permission we have obtained or in order to execute an agreement that has been concluded with us,
* the data are processed automatically.

7. We process the accumulated personal data for the purpose of direct marketing so the person whom the data concern has the right to oppose – for reasons related to their particular situation – to processing of their personal data, to the scope within which the processing is made for the purpose of direct marketing. 
In such a case we will immediately cease to process their personal data for this purpose.


`}</Markdown>
  </Wrapper>
 

)


export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  await configure(store, {
    settings: settings,
    //preload: [""]
  });

})

export default connect()(PageLegalVisitorsData);
