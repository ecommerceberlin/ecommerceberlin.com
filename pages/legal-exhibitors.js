import {
  connect,
  get as _get,
  MyHead as Head,
  // Typography,
  // Faq,
  // FaqLink,
  Wrapper,
  LayoutMain as Layout,
  Markdown,
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

class PageLegalExhibitors extends React.Component {
  static async getInitialProps({
    err,
    req,
    res,
    pathname,
    query,
    asPath,
    isServer,
    store,
  }) {
    return {
      settings: settings,
    };
  }

  render() {
    const { url } = this.props;

    return (
      <Layout>
        <Wrapper first label="exhibitors.agreement.title">
          <Markdown>{`
          
## 1. General provisions, definitions.           
          
1.1. These regulations constitute the general terms of the agreement within the framework of fair E-commerce Berlin Expo organized by E-commerce Capitals spółka z ograniczoną odpowiedzialnością spółka komandytowa (limited liability company in the organization limited partnership), based in Poznań.

1.2. The terms used herein, capitalized mean:

* 1.2.1. Organizer - E-commerce Capitals spółka z ograniczoną odpowiedzialnością sp. k. (Limited Liability Company limited partnership) with its registered seat in Poznań (postal code 60-770), ul. Jana Matejki 52/4, entered into the register of associations, other social and professional organizations, foundations and independent public health care facilities of the National Court Register and the register of entrepreneurs under KRS number 0000592712 whose registration files are kept by the District Court for Poznań - Nowe Miasto and Wilda in Poznań, VIII Commercial Division of the National Court Register using the given 7792439665 tax identification number and REGON number 36746333; Address for correspondence with the Organizer: ul. Jana Matejki 52/4, 60-770 Poznań; Email Address: hello@ecommerceberlin.com 
* 1.2.2. Fair - held by the Organizer of E-commerce Berlin Expo, which will take place in Berlin at the STATION BERLIN, St. Luckenwalder Str. 4–6, 10963 Berlin, Germany, on 18th February 2021, from 10:00 AM to 5:00 PM;
* 1.2.3. Regulations - the present document constituting the general conditions of the Agreement;
* 1.2.4. Exhibitor - a natural person, legal person or entity without legal personality, which conducts business activity: related to e-commerce, in particular providing electronic services, whose offer is addressed to operators of online shops or who in the course of its business intends to start running or managing an online store or making offers to entities engaged in these activities; 
* 1.2.5. Pavilion - "Pavilion" in the STATION BERLIN, St. Luckenwalder Str. 4–6, 10963 Berlin
* 1.2.6. Exhibition space- an exhibition space located in the Pavilion including furnishing, wi-fi, electricity;
* 1.2.7. Agreement – an agreement concluded on the terms specified in the Regulations between the Organizer and the Exhibitor, defining the rights and obligations of the Organizer and the Exhibitor; 
* 1.2.8. Fair Website - made available by the Organizer on the Internet at https://ecommerceberlin.com website enabling inter alia conclusion of the Agreement between the Organizer and the Exhibitor;
* 1.2.9. Visitor - a natural person who is neither an Exhibitor nor a representative of the Organizer, but who is present in the Pavilion during the Fair. 
* 1.2.10. Additional Services - above-standard benefits provided by the Organizer not falling within any of the categories of Exhibition space, individually agreed with the Exhibitor, in particular as to their scope and remuneration payable to the Organizer. 


## 2. Obligations of the Organizer

2.1. Organizer provides Exhibitors on the terms specified in the Regulations:

2.1.1 Exhibition space  in a category chosen by the Exhibitor, categories of Exhibition space are specified on Fair website,
2.1.2 advertising and marketing services as referred to Section 9 below,
2.1.3 services of account manager as referred to Section  9 below.


2.2. The Organizer provides Exhibitors with Additional Services related to the Fair, provided that the scope of Additional Services and remuneration payable to the Organizer is previously agreed. To order Additional Services, please contact the Organizer by email (address indicated in Section 1.2.1 of the Regulations).


 
## 3. Conclusion of the Agreement

3.1. The Agreement is concluded by signing a written copy of the Participation Agreement.


## 4. Remuneration

4.1. Organizer under the Agreement shall be entitled to remuneration in the amount specified in the current price list available on the Fair Website. The total remuneration consists of Exhibition space fee, Flat Fee of 1.200 EUR for advertising, marketing, account manager services and registration, and Additional Services fee,.

4.2. Upon the conclusion of the Agreement the Exhibitor is obliged to pay the Organizer for services provided by the Organizer under the Agreement, including the Exhibition Space, services specified in Section 2.1.2 and 2.1.3 and Additional Services as specified in the Participation Agreement. 

4.3. Exhibitor informs that the prices of Exhibition Space depend on tranche pricing, within the scope of which the Exhibitor enters into an Agreement, in accordance with the principle that the later the Agreement is concluded the higher the price is. The Organiser stipulates 3 (three) tranche pricings. The price changes do not apply to the Agreements concluded before the announcement of price list changes on the Fair Website.

4.4. The Organizer shall send a proforma invoice to the Exhibitor's email address provided during registration, whereas after the payment is completed, the Organizer shall issue and send invoice to the email address provided during registration.

4.5. The Exhibitor is obliged to make the payment to the account of the Organizer indicated on the proforma invoice within 7 (seven) days from the date of conclusion of the Agreement.

4.6. In the absence of payment in total on schedule as referred to in paragraph 4.5., the Agreement is terminated with immediate effect, without notice to the Exhibitor. The Exhibitor is not entitled to any claims in this respect.

4.7. The payment date shall be the date of the acceptance of the bank account of the Organiser.

4.8. Exhibitor authorizes the Organizer to issue VAT invoices and proforma VAT invoices electronically and transmit them as a file in PDF format, to the email address of the Exhibitor provided during registration on the Fair Website.

4.9. An exhibitor who failed to make timely payment of all remuneration due to the Organizer is entitled to conclude another Agreement with the Organizer, but only within successive tranche pricings. However, if the previous Agreement was concluded in the last tranche pricing the Exhibitor is entitled to its conclusion at the same tranche.

## 5. Termination of the Agreement

5.1. Each Exhibitor may, without giving any reason, terminate the Agreement in writing, without notice.

5.2. In the event of termination of Agreement by the Exhibitor by 15 October 2020, payment already made shall be settled as follows: the Organizer returns 50% (fifty percent) of the payment made as a remuneration for Exhibition space, while retaining the remaining 50% (fifty percent) as a handling fee. Payment for other services already provided (including partial performance) shall not be returned.

5.3. In the event of termination of Agreement by the Exhibitor after 15 October 2020, the Organizer does not return the payment made as a remuneration for Exhibition space, whilst retaining 100% (one hundred percent) of the amount paid as handling fee. Payment for other services already provided (including partial performance) shall not be returned.

5.4. The Organizer reserves the right to cancel, postpone or close the Fair for visitors for reasons beyond his control, especially because of the insufficient number of participants, and also due to reasons of force majeure, as well as due to the threat to public health (e.g. epidemiologic threat)

5.5. In case of cancellation of the Fair, the whole payment made for Exhibition space shall be returned to the Exhibitor, however  Payment for other services (advertising, marketing, account manager services, additional services)  already provided (including partial performance) shall not be returned.

5.6. Exhibitor will be notified on canceling, postponing or closure for visitors of Fair by an email sent to the address given by the Exhibitor during the registration through the Fair Website.

5.7. The Organiser's liability under Article 495 §§ 1 and 2 of the Polish Civil Code is excluded

5.8. In case of cancellation, postponement or closure for visitors of the Fair the Organizer ‘s liability for any damages towards the Exhibitor is excluded to the fullest extent permitted by law.

5.9. The Organizer reserves the right to terminate this Agreement immediately if the Exhibitor does not meet the definition mentioned in section 1.2.4 of the Regulations.

5.10. Regardless of the above, the Organizer is entitled to terminate the Agreement within 10 days from the date of its conclusion without giving any reason.

## 6. Liability of the Organizer

6.1. Subject to the provisions of Section 5 above the Organizer shall be liable for non-performance or improper performance of the Agreement, only to the amount of the actual damages suffered by the Exhibitor limited to the amount paid by the Exhibitor as a remuneration.

6.2. The Organizer is not liable for lost profits of the Exhibitor.

6.3. The Organizer is not liable for any damage caused to Exhibitors by other Exhibitors or other third parties.

6.4. The Organizer is not liable for any of the objects left by the Exhibitor at the Pavilion, in particular in the Exhibition space, including loss or damage.
 

## 7. The terms of use of the Exhibition space.

7.1. Exhibitor may not use the Exhibition space in a manner inconsistent with their purpose, in particular the Exhibitor may not: use devices with a joint total power consumption greater than the power connections made available for the Exhibition space, place a roll-up or advertising wall with dimensions larger than those fixed for the Exhibition space of a given category within said Exhibition space. Advertising wall can be placed only in the back of the Exhibition space. It is prohibited to use coffee machines without notifying the Organizer and without Organizer's confirmation that the ordered power connection is sufficient to safely operate the device in question

7.2. In order to arrange the Exhibition space Organizer provides the Exhibitor with the Exhibition space on February 17th from 12:00 PM and on the day of the event at 2 (two) hours before the time of commencement of the Fair.

7.3. The Exhibitor cannot proceed with the removal of the equipment placed in the Exhibition space before 5:00 PM on the 18.02.2021.

7.4. The Exhibitor may use any number of Exhibition spaces stipulated in the Agreement.

7.5. If not agreed otherwise, the Exhibitor can use one Exhibition space to promote single product (good or service) of the Exhibitor, whereas promotion shall be understood by: presenting an offer of a product or service; a single product (good or service) shall be understood by: a group of products offered by the Exhibitor under one brand (trademark which constitutes a distinctive sign). It is permitted to promote more than one product (brand) in one Exhibition space only if following conditions are jointly met:
7.5.1 Organizer gave his consent,
7.5.2 Exhibitor ordered and paid for Premium, Grand or Networking Zone Exhibition space,
7.5.3 Exhibitor paid an additional, 1.000 EUR fee.

7.6. Upon completion of Fair, the Exhibitor shall remove from the Exhibition space and Pavilion, on the day of the Fair, until 11:59 PM, all the objects brought to the Pavilion by him or persons authorized by him.

7.7. In the case of remaining items referred to in Section 7.6. in the Exhibition space or in any other place in the Pavilion, the Organizer will remove these things at the expense of the Exhibitor and store them at the Exhibitor’s expense and risk.

7.8. If not agreed otherwise, any activity of Exhibitors within the Fair (including advertising, promotion and marketing) should take place only in the Exhibitor's Exhibition space.

7.9. Upon completion of Fair the Exhibitor is obliged to return all items that constitute the provided by the Organizer equipment of Exhibition space without deterioration exceeding the effects of normal use.
 


## 8. Contractual Penalties

8.1. In the event of a breach by the Exhibitor of the provisions of paragraphs. 7.1. the Exhibitor shall pay the Organizer, on first call, a contractual penalty of 50% of the payment mentioned in paragraph 4.1 of the Regulations, for each act of breach.


8.2. In the event of a breach of the provisions of paragraphs. 7.3. the Exhibitor shall pay the Organizer, on first call, a contractual penalty of 25% of the payment mentioned in paragraph 4.1 of the Regulations, for each act of breach.

8.3. In the event of a breach of the provisions of paragraphs. 7.5. the Exhibitor shall pay the Organizer, on first call, a contractual penalty of 25% of the payment mentioned in paragraph 4.1 of the Regulations, for each act of breach.

8.4. In the event of a breach of the provisions of paragraphs. 7.6. the Exhibitor shall pay the Organizer, on first call, a contractual penalty of 50% of the payment mentioned in paragraph 4.1 of the Regulations, for each act of breach.

8.5. In the event of a breach of the provisions of paragraphs. 7.8. the Exhibitor shall pay the Organizer, on first call, a contractual penalty of 50% of the payment mentioned in paragraph 4.1 of the Regulations, for each act of breach.

8.6. The Organizer reserves the right to seek damages in the amount exceeding the amount of contractual penalties.

9. Registration, Advertising and marketing services, account manager services

9.1. The Organizer, within the Flat Fee after conclusion of the Agreement registers Exhibitor in The Ecommerce Berlin EXPO CRM system without delay. 

9.2. The Organizer, within the Flat Fee , provides Exhibitors within the Fair Website Exhibitor’s profile available for users of the Fair Website.

9.3. The Exhibitor undertakes to complete the profile with all the information required by the Organizer. In particular submitting: a logo to the profile, information about its business, as well as preparing and adding the information on the special offer for Visitors in the profile.

9.4. The Organizer reserves the right not to make the Exhibitor's profile available to the users of Fair Website if the Exhibitor fails to perform any of the duties set out in Section 9.3.

9.5. The data submitted by the Exhibitor as part of the profile, ie. name, logo and description of the activities will be presented by the Organizer in the Virtual Catalogue of Exhibitors accessible on the Fair Website.

9.6. The Exhibitor, upon the conclusion of the Agreement, grants the Organizer free, territorially unlimited license for the period from the date of conclusion of the Agreement until February 18, 2021 to use the materials placed within Exhibitor’s profile to promote Fair, including its further editions, the media, in particular in the press, radio, television, within the Fair Website, in transmissions directed to the general Internet users by any means of communication within the network, in email messages, as well as to promote the activities of the Organizer within the scope described above.

9.7. The Organizer, upon the conclusion of the Agreement, grants the Exhibitor, within Flat Fee, territorially unlimited license for the period from the date of conclusion of the Agreement until February 18, 2021 to use the trade mark “E-Commerce Berlin Expo” to promote Exhibitors participation in Fair, in any media, in particular in the press, radio, television, in transmissions directed to the general Internet users by any means of communication within the network, in email messages.

9.8. In any case related to the Agreement or Fair the Exhibitor may contact an account manager, who shall provide any information or support needed.

## 10. The activities of third parties

10.1. During the Fair Organizer is the sole administrator of the Pavilion and grants access to its areas only to Exhibitors and their authorized representatives, Visitors and Organizer’s own employees and associates.

10.2. Staying of persons other than Exhibitors, their authorized representatives, Visitors and employees or associates of the Organizer in the Pavilion during the Fair is prohibited.

10.3. If not agreed otherwise, running in the Pavilion during the Fair any business, including sale or provision of services for Exhibitors or Visitors, paid or unpaid, requires the prior written under pain of nullity consent of the Organizer.

10.4. Taking pictures and recording video at the Pavilion during the Fair requires the prior written, under pain of nullity, consent of the Organizer.


## 11. Jurisdiction

11.1. Any disputes between Exhibitors and Organizer shall be solved amicably, and if there is no agreement between them, the dispute will be settled by court of law competent ratione loci for the Organizer.

 
## 12. Governing law

12.1. The governing law shall be the Law of the Republic of Poland.

 
## 13. Entry into force and amendments to the Regulations

13.1. Regulations come into force on 2nd March, 2020.

13.2. The Organizer reserves the right to change the Regulations, the revised Regulations will apply to contracts concluded before the amendments’ date of entry into force.

13.3. Amendments to the Regulations come into force on the date of their publication on the Fair Website.
 


`}</Markdown>
        </Wrapper>
      </Layout>
    );
  }
}

export default connect()(PageLegalExhibitors);
