import {
  connect,
  get as _get,
  MyHead as Head,
  // Typography,
  // Faq,
  // FaqLink,
  Wrapper,
  LayoutMain as Layout,
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
        <Wrapper label="exhibitors.agreement.title">
          <div
            dangerouslySetInnerHTML={{
              __html: `
        
<div>
<h2>1. General provisions, definitions.</h2>
<p>1.1. These regulations constitute the general terms of the agreement within the framework of fair E-commerce Berlin Expo organized by E-commerce Capitals spółka z ograniczoną odpowiedzialnością spółka komandytowa (limited liability company in the organization limited partnership), based in Poznań.</p>
<p>1.2. The terms used herein, capitalized mean:</p>

<ul>
<li>1.2.1. Organizer - E-commerce Capitals spółka z ograniczoną odpowiedzialnością sp. k. (Limited Liability Company limited partnership) with its registered seat in Poznań (postal code 60-770), ul. Jana Matejki 52/4, entered into the register of associations, other social and professional organizations, foundations and independent public health care facilities of the National Court Register and the register of entrepreneurs under KRS number 0000592712 whose registration files are kept by the District Court for Poznań - Nowe Miasto and Wilda in Poznań, VIII Commercial Division of the National Court Register using the given 7792439665 tax identification number and REGON number 36746333; Address for correspondence with the Organizer: ul. Jana Matejki 52/4, 60-770 Poznań; Email Address: hello@ecommerceberlin.com </li>
<li>1.2.2. Fair - held by the Organizer of E-commerce Berlin Expo, which will take place in Berlin at the STATION BERLIN, St. Luckenwalder Str. 4–6, 10963 Berlin, Germany, on 13th February 2020, from 10:00 AM to 5:00 PM;</li>
<li>1.2.3. Regulations - the present document constituting the general conditions of the Agreement;</li>
<li>1.2.4. Exhibitor - a natural person, legal person or entity without legal personality, which conducts business activity: related to e-commerce, in particular providing electronic services, whose offer is addressed to operators of online shops or who in the course of its business intends to start running or managing an online store or making offers to entities engaged in these activities;</li>
<li>1.2.5. Pavilion - "Pavilion" in the STATION BERLIN, St. Luckenwalder Str. 4–6, 10963 Berlin</li>
<li>1.2.6. Stand - an exhibition space located in the Pavilion;</li>
<li>1.2.7. Presentation - a 20-minute multimedia presentation addressed to Exhibitors and Visitors on the activities carried out by the Exhibitor;</li>
<li>1.2.8. Agreement – an agreement concluded on the terms specified in the Regulations between the Organizer and the Exhibitor, defining the rights and obligations of the Organizer and the Exhibitor;</li>
<li>1.2.9. Fair Website - made available by the Organizer on the Internet at http://ecommerceberlin.com website enabling inter alia conclusion of the Agreement between the Organizer and the Exhibitor;</li>
<li>1.2.10. Visitor - a natural person who is neither an Exhibitor nor a representative of the Organizer, but who is present in Pavilion during the Fair.</li>
<li>1.2.11. Additional Services - above-standard benefits provided by the Organizer not dalling within any of the categories od Stands, individually agreed with the Exhibitor, in particular as to their scope and remuneration payable to the Organizer.</li>
</ul>

<h2>2. Obligations of the Organizer</h2>
<p>2.1. Organizer provides Exhibitors on the terms specified in the Regulations, stands in a category chosen by the Exhibitor, on the terms specified in the Regulations. The organizer offers the following categories of Stands: Stand "Standard" Stand "Startup" Stand "Hot", Stand "Super Hot", Stand "Grand".</p>
<p>2.2. Within the Stand "Standard", for the duration of Fair the Organizer allows Exhibitors to use:</p>

<ul>
  <li>2.2.1 9m2 (nine square meters) of the open-space surface floor of Pavilion (rectangle with dimensions 3m x 3m),</li>
  <li>2.2.2. two round tables with a diameter of min. 70 cm placed on the surface as referred to in paragraph 2.2.1.,</li>
  <li>2.2.3. 4 (four) chairs,</li>
  <li>2.2.4 the possibility of placing on the surface as referred to in point. 2.2.1. of rollups prepared by the Exhibitor or advertising walls of the base width of not more than 3 meters (three meters), stand construction height must not exceed 2.5 meters (two and a half meters) and the advertising wall can be placed only in the back of the Stands.</li>
  <li>2.2.5. access to the connection of the power of the maximum power of 500W (voltage 220 volt).</li>
  <li>2.2.6. Internet access in the Pavilion via WIFI.</li>
</ul>

<p>2.3. Within the Stand "Hot", "Super Hot", for the duration of Fair the Organizer allows Exhibitors to use:</p>

<ul>
<li>2.3.1 9m2 (nine square meters) of the open-space surface floor of Pavilion (rectangle with dimensions 3m x 3m),</li>
<li>2.3.2. one round table with a diameter of min. 70 cm placed on the surface as referred to in paragraph 2.2.1.,</li>
<li>2.3.3. 4 (four) chairs,</li>
<li>2.3.4 the possibility of placing on the surface as referred to in point. 2.2.1. of rollups prepared by the Exhibitor or advertising walls of the base width of not more than 3 meters (three meters), stand construction height must not exceed 2.5 meters (two and a half meters) and the advertising wall can be placed only in the back of the Stands.</li>
<li>2.3.5. access to the connection of the power of the maximum power of 500W (voltage 220 volt).</li>
<li>&lt;2.3.6. Internet access in the Pavilion via WIFI.</li>
</ul>

<p>2.4. Within the "Grand" Stand Organizer for the duration of Fair allows Exhibitors to use:</p>

<ul>
<li>2.4.1 18m2 (eighteen square meters) of the open-space surface floor of Pavilion (rectangle of size with dimensions of 6m x 3m),</li>
<li>2.4.2. two round tables with a diameter of min. 70 cm placed on the surface as referred to in point. </li>
<li>2.3.3. 6 (six) chairs</li>
<li>2.3.4. the possibility of placing on the surface as referred to in point. 2.3.1. of rollups prepared by the Exhibitor or advertising walls of the base width of not more than 6 meters (six meters), stand construction height must not exceed 2.5 meters (two and a half meters) and the advertising wall can be placed only in the back of the Stands.</li>
<li>2.4.5. access to the connection of the power of the maximum power of 1000W (voltage 220 volt).</li>
<li>2.4.6. Internet access in the Pavilion via WIFI.</li>
</ul>

<p>2.4. Organizer allows Exhibitors on the terms set out in point. 8 of the Regulations, to make Presentations.</p>
<p>2.5. The Organizer allows Exhibitors to receive Additional Services related to the Fair, provided that the scope of Additional Services and remuneration payable to the Organizer is previously agreed. To order Additional Services, please contact the Organizer by e-mail (address indicated in Section 1.2.1 of the Regulations).</p>
<h2>3. Conclusion of the Agreement with the Organizer</h2>
<p>3.1. The Agreement with the Organizer, the subject of which is to use during the Fair one or more Stands or to allow to conduct one or more Presentations, as well as the possibility to use, on separately agreed terms, the Additional Services, is concluded in electronic form, through the Fair Website.</p>
<p>3.2. The condition of conclusion of the Agreement, as referred to in paragraph. 3.1. is:</p>
<p>3.2.1 Choosing by the Exhibitor at least one Stand or Presentation, whereas the selection of Stand or Presentation Exhibitor carries out with the help of the application provided by the Organizer as part of the Fair Website,</p>
<p>3.2.2. filling out the registration form,</p>
<p>3.2.3. acceptance of the Regulations.</p>
<p>3.3. The Agreement is concluded at the time of acceptance of the Regulations, which completes the Exhibitor’s registration process.</p>
<h2>4. Remuneration</h2>
<p>4.1. Organizer under the Agreement shall be entitled to remuneration in the amount specified in the current price list available on the Fair Website. Upon the conclusion of the Agreement the Exhibitor is obliged to pay to the Organizer for services provided by the Organizer under the Agreement, including the Stand, Presentation and Additional Services The remuneration is the sum of the products of the number selected by the Exhibitor Stands and/or Presentation and their rates specified in current at the date of conclusion of the Contract price list available on Fair Website.</p>
<p>4.2. Exhibitor informs that the prices of Stands and Presentations are dependent on tranche pricing, within the scope of which the Exhibitor enters into an Agreement, in accordance with the principle that the later signing of the contract, the higher the price. Exhibitor stipulates 3 (three) tranche pricings. The price changes do not apply to contracts concluded before the announcement of price list changes on the Fair Website.</p>
<p>4.3. Upon conclusion of the Agreement, the Organizer will send to the Exhibitor's email address provided during registration proforma invoice, whereas after the payment Oraganizer issues and sends invoice to the email address provided during registration.</p>
<p>4.4. The Exhibitor is obliged to make the payment to the account of the Organizer indicated on the proforma invoice within 3 (three) days from the date of conclusion of the Agreement.</p>
<p>4.5. In the absence of payment in total on schedule as referred to in paragraph 4.4., the Agreement is terminated with immediate effect, without notice to the Exhibitor, by sending an email to the email address of the Exhibitors rovided during registration on the Fair Website. The Exhibitor is not entitled to any claims in this respect.</p>
<p>4.6. The payment date shall be the date of the acceptance of the bank account of the Organiser.</p>
<p>4.7. Exhibitor authorizes the Organizer to issue VAT invoices and proforma VAT invoices electronically and transmit them as a file in PDF format, to the email address of the Exhibitor provided during registration on the Fair Website.</p>
<p>4.8. Exhibitor who failed to make timely payment of all remuneration due to Organizer is entitled to conclude another Agreement with the Organizer, but only within successive tranche pricings. However, if the previous Agreement was concluded in the last tranche pricing the Exhibitor is entitled to its conclusion at the same tranche.</p>

<h2>5. Termination of the Agreement.</h2>
<p>5.1. Each Exhibitor may, without giving any reason, terminate the Agreement in writing, without notice.</p>
<p>5.2 In the event of termination of Agreement by the Exhibitor by 30 November 2018, payment already made shall settled as follows: the Organizer returns 50% (fifty percent) of the advance payment made, while retaining the remaining 50% (fifty percent) as a fee for making the Exhibitor’s profile available on Fair Website.</p>
<p>5.3. In the event of termination of Agreement by the Exhibitor by 1 December 2018, the Organizer does not return the payment made, whilst retains 100% (one hundred percent) of the amount paid as a fee for making the Exhibitor’s profile available on Fair Website.</p>
<p>5.4. The Organizer reserves the right to cancel the Fair for reasons beyond its control, especially because of the insufficient number of participants, and also due to reasons of force majeure.</p>
<p>5.5. Exhibitor will be notified on cancelling of Fair by an email sent to the address given by the Exhibitor during the registration through the Fair Website.</p>
<p>5.6. In case of cancellation of the Fair, the Agreement shall automatically terminate and Exhibitors have a claim for the payment made, in total.</p>
<p>5.7. In case of cancellation of the Fair the Organizer is not liable for damages towards the Exhibitor.</p>
<p>5.8. The Organizer reserves the right to terminate this Agreement immediately in case according to unfettered evaluation of the Organizer, the activity led by the Exhibitor is not within the framework of the activities referred to in section. 1.2.4. of Regulations. In that case, the Organizer will inform the Exhibitor on termination of the Agreement by sending an email to the address provided by the Exhibitor in relation with registration through the Fair Website and the Exhibitors have a claim for the payment made in total.</p>
<p>5.9 The Organizer reserves the right to terminate the Agreement within 10 days from the date of its conclusion without giving any reason. The provisions of paragraph 5.8, second sentence shall apply accordingly.</p>

<h2>6. Liability of the Organizer</h2>
<p>6.1. Subject to the provisions of paragraphs 5.5 to 5.8 the Organizer shall be liable for non-performance or improper performance of the Agreement, only to the amount of the actual damages suffered by the Exhibitor limited to the amount paid by the Exhibitor as a remuneration.</p>
<p>6.2. The Organizer is not liable for lost profits of the Exhibitor.</p>
<p>6.3. The Organizer is not liable for any damage caused to Exhibitors by other Exhibitors or other third parties.</p>
<p>6.4. The Organizer specifically is not liable any for the things left by the Exhibitor at the Pavilion, in particular at the Stand, including for any loss or damage.</p>

<h2>7. The terms of use of the Stand.</h2>
<p>7.1. Exhibitor may not use the Stands in a manner inconsistent with their purpose, in particular may not: use jointly within the Stands devices with a total power consumption greater than the power connections of the power made available within the Stands, place within the Stands a rollup or advertising wall with dimensions larger than those laid down for the Stand of a given category. Advertising wall can be placed only in the back of the Stands. It is prohibited to use coffee machines within the Stand.</p>
<p>7.2. In order to arrange the Stands Organizer provides the Exhibitor with Stand on February 19th from 2:00 PM and at the day of the event at 2 (two) hours before the time of commencement of the Fair.</p>
<p>7.3. The Exhibitor cannot proceed with the dismantling of the Stand before 5:00 PM.</p>
<p>7.4. Exhibitor may use any number of Startup, Standard, Hot, Super Hot and Grand Stands.</p>
<p>7.5. The Exhibitor can use only one Stand to promote a product (good or service), whereas by promotion should be understood presenting an offer of a product or service; by a single product or service must be understood a group of products or services offered by the Exhibitor under one brand (trademark which constitutes a distinctive sign).</p>
<p>7.6. Upon completion of Fair the Exhibitor shall remove from the Stands and Pavilion, on the day of the Fair, until 11:59 PM, all the things brought to the Pavilion by him or persons authorized by him.</p>
<p>7.7. In the case of remaining of items referred to in point. 7.6. on the Stand or in any other place in the Pavilion, the Organizer will remove these things at the expense of the Exhibitor and store them at the Exhibitor’s expense and risk.</p>
<p>7.8. Subject to the provisions of point. 8, any activity of Exhibitors within the Fair, and in particular the promotional and marketing should take place only at the Stand of the Exhibitor. Any activity for promotion and marketing outside the Exhibitor’s Stand is only possible on the basis of a separate agreement with the Organizer, concluded in writing, under pain of nullity.</p>
<p>7.9. Upon completion of Fair the Exhibitor is obliged to return all items that constitute the equipment of Stands without deterioration exceeding the effects of normal use.</p>

<h2>8. Terms of conducting Presentations.</h2>
<p>8.1. The Exhibitor, who has entered into the Agreement with Organizer, the subject of which is to enable carrying out of Presentations, is obliged:</p>

<p>8.1.1. within the deadline of 15th January 2019, until 8:00 PM by sending an email to the address as referred to in point. 1.2.1., to inform the Organizer on the topic of Presentation, under pain of losing the right to carry it out, without refund.</p>
<p>8.1.2. until 20th January 2019 until 12:00 PM to send to the Organizer, as an attachment to an email sent to the address, as referred to in point. 1.2.1., Presentation slides (in PDF format only), under pain of losing the right to carry it out without refund.</p>

<p>8.2. The Presentation topic must be related to e-commerce, under pain of losing the right to carry it out without any refund and may be associated with the promotion of economic activities carried out by the Exhibitor.</p>
<p>8.3. The Exhibitor agrees to the free carrying out of Presentation to Organizer for the purpose of educational publication.</p>

<p>8.4. The Organizer:</p>
<p>8.4.1. will allow Exhibitors to carry out during the Fair a 20-minute Presentation in the conference room located in the Pavilion, within the time specified in detail by the Organizer and specified in the schedule published on the Fair Website no later than one (1) day before the Fair, whereas setting the order of Presentations and possible grouping them in the context of thematic is dependant entirely on the will of the Organizer,</p>
<p>8.4.2. on the principles set out in point. 10. will place within the Fair Website the profile of the Exhibitor.</p>
<p>8.4.3. for the time of the Presentation provide access to media facilities enabling carrying out of the Presentation (sound system, projector, computer, lighting), whereas the proper display of slide Presentation will be possible only in the case of sending a slide Presentation in PDF format.</p>
<p>8.5. The Organizer reserves that exceeding the 20-minute Presentation time will immediately result in depriving access to the media facilities including turning off the sound and the projector.</p>
<p>8.6. The Organizer is not responsible for the content showed by the Exhibitor during the Presentation.</p>

<h2>9. Contractual Penalties</h2>
<p>9.1. In the event of a breach by the Exhibitor of the provisions of paragraphs. 7.1. Exhibitor pays to the Organizer, on first call, a contractual penalty of 50% of the payment mentioned in paragraph 4.1 of the Regulations, for each act of breach.</p>
<p>9.2. In the event of a breach by the Exhibitor of the provisions of paragraphs. 7.3. Exhibitor pays to the Organizer, on first call, a contractual penalty of 25% of the payment mentioned in paragraph 4.1 of the Regulations, for each act of breach.</p>
<p>9.3. In the event of a breach by the Exhibitor of the provisions of paragraphs. 7.5. Exhibitor pays to the Organizer, on first call, a contractual penalty of 25% of the payment mentioned in paragraph 4.1 of the Regulations, for each act of breach.</p>
<p>9.4. In the event of a breach by the Exhibitor of the provisions of paragraphs. 7.6. Exhibitor pays to the Organizer, on first call, a contractual penalty of 50% of the payment mentioned in paragraph 4.1 of the Regulations, for each act of breach.</p>
<p>9.5. In the event of a breach by the Exhibitor of the provisions of paragraphs. 7.8. Exhibitor pays to the Organizer, on first call, a contractual penalty of 50% of the payment mentioned in paragraph 4.1 of the Regulations, for each act of breach.</p>
<p>9.6. The Organizer reserves the right to seek damages in the amount exceeding the amount of contractual penalties.</p>

<h2>10. Exhibitor’s profile within the Virtual Catalogue of Exhibitors</h2>
<p>10.1. The Organizer, as part of remuneration as referred to in point. 4, provides Exhibitors within the Fair Website Exhibitor’s profile available for users of the website.</p>
<p>10.2. The Exhibitor undertakes to complete the profile with all the information required by the Organizer, in particular, submit logo to the profile, information about its business, as well as prepare and put in the profile the information on the special offer for Visitors.</p>
<p>10.3. The Organizer reserves the right not to make Exhibitor’s profile available to the users of Fair Website if the Exhibitor fails to perform any of the duties set out in point. 10.2.</p>
<p>10.4. The data submitted by the Exhibitor as part of the profile, ie. name, logo and description of the activities will be presented by the Organizer in the Virtual Catalogue of Exhibitors accessible on the Fair Website.</p>
<p>10.5. Exhibitor upon the conclusion of the Agreement grants the Organizer free, territorially unlimited license for the period from the date of conclusion of the Agreement until 20th February 2019 to use the materials placed within Exhibitor’s profile to promote Fair, including its further editions, the media, in particular in the press, radio, television, within the Fair Website, in transmissions directed to the general Internet users by any means of communication within the network, in email messages, as well as to promote the activities of the Organizer within the scope described above.</p>
<p>10.6. Exhibitor’s profile will be removed from the Virtual Catalogue of Exhibitors immediately after termination of the Agreement. </p>

<h2>11. The activities of third parties</h2>
<p>11.1. During the Fair Organizer is the sole administrator of the Pavilion and grants access to its area only to Exhibitors and their authorized representatives, Visitors and Organizer’s own employees and associates.</p>
<p>11.2. Staying at the Pavilion during the Fair of persons other than Exhibitors, their authorized representatives, Visitors and employees or associates of the Organizer is prohibited.</p>
<p>11.3. Subject to paragraph 7.8, running at the time of the Fair in the Pavilion of any business, promotional information, including sale or provision of services for Exhibitors or Visitors, paid or unpaid, requires the prior written under pain of nullity consent of the Organizer.</p>
<p>11.4. Taking pictures and recording video at the Pavilion during the Fair requires the prior written under pain of nullity consent of the Organizer.</p>

<h2>12. Jurisdiction</h2>
<p>Any disputes between Exhibitors and Organizer will be solved amicably, and if there is no agreement between them, the dispute will be settled by court of law competent ratione loci for the Organizer.</p>

<h2>13. Governing law</h2>
<p>The governing law shall be the Law of the Republic of Poland.</p>

<h2>14. Entry into force and amendments to the Regulations.</h2>
<p>14.1. Regulations come into force on 15th March 2018.</p>
<p>14.2. The Organizer reserves the right to change the Regulations, whereas the revised Regulations will apply to contracts concluded before the entry into force of the amendments only in case the Exhibitor agrees to that.</p>
<p>14.3. Amendments to the Regulations come into force on the date of their publication on the Fair Website.</p>

</div>

`,
            }}
          />
        </Wrapper>
      </Layout>
    );
  }
}

export default connect()(PageLegalExhibitors);
