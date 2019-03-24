import React from 'react'
import styles from './privacy.module.css'
import HeaderFooterLayout from '../layouts/HeaderFooterLayout'
import SEO from '../components/Seo'

export interface PrivacyPageProps {}

export interface PrivacyPageState {}

class PrivacyPage extends React.Component<PrivacyPageProps, PrivacyPageState> {
  constructor(props: PrivacyPageProps) {
    super(props)
  }
  render() {
    return (
      <HeaderFooterLayout>
        <SEO title="Privacy Policy" />
        <div className={styles.root}>
          <div className={styles.content}>
            <h1>Privacy Policy</h1>
            <p>Last updated: 04.08.2018</p>
            <p>
              This page informs you of our policies regarding the collection,
              use and disclosure of Personal Information we receive from users
              of the Site (malcoded.com). We use your Personal Information only
              for providing and improving the Site. By using the Site, you agree
              to the collection and use of information in accordance with this
              policy.
            </p>
            <h2>Data Controller</h2>
            <p>
              Responsible for the collection, processing and usage of you
              personal data is malcoded.com, Lukas Marx, Adlerstraße in Rees,
              Germany. (Art. 4, No. 7 GDPR)
            </p>
            <h2>Hosting</h2>
            <p>
              To serve this Site to you, we use a hosting company called{' '}
              <a href="https://www.digitalocean.com/security/gdpr/">
                DigitalOcean
              </a>{' '}
              (Data Processor). They are participant in and comply with the
              EU-U.S. Privacy Shield Framework. They also comply with the GDPR.
            </p>
            <h3>Content Delivery Network</h3>
            <p>
              A content delivery network (CDN) is a collection of servers spread
              arrount the world that are serving a copy of our website and
              assests (such as images).
            </p>
            <p>
              Because of the CDN, the request latency of the website is greatly
              reduced. In case of our CDN, it also provides protection against
              malicious activity such as DDOS-Attacks.
            </p>
            <p>
              We are using Cloudflare (Data Processor) as a service provider for
              the CDN. They are participant in and comply with the EU-U.S.
              Privacy Shield Framework. They also comply with the GDPR.
            </p>
            <h2>Personal Data</h2>
            <h3>Log Data</h3>
            <p>
              Like many site operators, we collect information that your browser
              sends whenever you visit our Site ("Log Data"). This Log Data may
              include information such as your computer's Internet Protocol
              ("IP") address, browser type, browser version, the pages of our
              Site that you visit, the time and date of your visit, the time
              spent on those pages and other statistics.
            </p>
            <p>
              This Log Data is required to ensure the functionality of the site.
              With the help of the Log Data, errors in the application can be
              detected and removed. This is our legitimate interest (Art. 6,
              Section 1 f, EU-GDPR).
            </p>
            <p>
              The Log Data is deleted regularly and is stored no longer than 14
              days.
            </p>
            <h3>Cloudflare(CDN)</h3>
            <p>
              In order to protect the website from malicious activity, decrese
              the load on our servers and increase your user experience, we need
              to collect personal data via Cloudflare such as your IP address,
              security fingerprints, DNS log data, and website performance data
              based on your usage of the website.
            </p>
            <p>
              This is our legitimate interest as of Art.6 Section 1 f EU-GDPR to
              ensure the security and quality of the website.
            </p>
            <h3>Newsletter</h3>
            <p>
              It is possible to subscribe to a free email newsletter on our
              site. Before you subscribe, you give your consent that you want to
              recieve emails form us with updates and marketing material. When
              you choose to subscribe to the newsletter we collect your email
              address.{' '}
            </p>
            <p>
              We are also using the double opt-in method, which means that we
              will send you an email and ask for consent (again).
            </p>
            <p>
              In the moment of sending the subscription request, as well as when
              you verify your email address, we are saving your IP-Address. We
              are required to do so by law, to proove that you actually gave
              your consent.
            </p>
            <p>
              We collect this data with your consent and therefore under Art. 6,
              Section 1 a, EU-GDPR.
            </p>
            <p>
              We need to collect this data, to be able to provide the newsletter
              service to you.
            </p>
            <p>
              Your email address is only stored as long as you are subscribed to
              the newsletter.
            </p>
            <p>
              However, we keep a hash of your email address as well as the
              information required (Ip-Addresses and Timestamps) to proof that
              you gave us your consent in the first place.
            </p>
            <p>
              The hash can't be used to send emails or reconstruct you email
              address
            </p>
            <p>
              We also track on wich links you click in emails you received from
              us.
            </p>
            <p>
              Of course you can unsubscribe at any time by clicking the
              unsubscribe link at the bottom of every email or by contacting us
              via email.
            </p>
            <h3>Comments & Social Sign In</h3>
            <p>
              We give our users the possibility to comment on posts. Before a
              user can leave a comment, he has to sign in using on of the
              provided authentication methods.
            </p>
            <p>
              We are using different, so called Social Sing In provider such as
              Google, Facebook, Twitter or Github. Using these providers, the
              user can create an account at our website, without the need of
              going trough a full registration process.
            </p>
            <p>
              Instead the user authorizes the provider to transmit certain
              personal information to us. We request the users email address,
              his name and his profile picture and save them on our server.
            </p>
            <p>Afterward, the user is signed in and can leave a comment.</p>
            <p>
              Before the personal data is submited to us, the user is informed
              that he is about to transmit the data and asked for his consent.
            </p>
            <p>
              Therefore we collect this data using Art. 6 Art. 6, Section 1 a,
              EU-GDPR.
            </p>
            <p>
              The user can request the deletion of his account by sending an
              email to support@malcoded.com
            </p>
            <p>
              Furthermore the user is able to edit or delete is comments, when
              signed in.
            </p>
            <h2>Cookies</h2>
            <p>
              Cookies are small text-files that many sites place on the users
              computer.
            </p>
            <p>
              We are placing a cookie called "__cfduid" on your computer. This
              cookies is placed by our Data Processor Cloudflare and contains an
              Id (unique identifier). This Id is required to prevent malicious
              activity on a per-client basis. Therefore, this cookies is
              strictly necessary for security reasons. The cookie does not
              contain any personally identifiable information. The cookie does
              expire afer one year.
            </p>
            <h2>External Links</h2>
            <p>
              We might link to revelevant content on other sites. We are not
              responsible for these sites or their content. When you visit these
              sites, they might collect your personal data. We do not have any
              control over that.
            </p>
            <h2>Your rights as the data subject</h2>
            <p>
              If personal data are processed by users, they are affected within
              the meaning of the EU-GDPR and they are entitled to the following
              rights vis-à-vis the person responsible, whereby the following
              list includes all their rights, not only the rights arising from
              the use of our services:
            </p>
            <h3>1. Right to information</h3>
            <p>
              Users may request confirmation from those responsible as to
              whether personal data concerning them are processed by us.
            </p>
            <p>
              Once such processing has taken place, users can request the
              following information from the person responsible:
            </p>
            <ul>
              <li>
                (1) the purposes for which the personal data is processed;
              </li>
              <li>(2) the categories of personal data being processed;</li>
              <li>
                (3) the recipients or categories of recipients to whom the
                personal data concerning you have been or are still being
                disclosed;
              </li>
              <li>
                (4) the planned duration of the storage of the personal data
                concerning you or, if specific information on this is not
                possible, criteria for determining the storage period;
              </li>
              <li>
                (5) the existence of a right to rectification or deletion of
                personal data concerning you, a right to limitation of
                processing by the controller or a right to object to such
                processing;
              </li>
              <li>
                (6) the existence of a right of appeal to a supervisory
                authority;
              </li>
              <li>
                (7) any available information on the origin of the data if the
                personal data are not collected from the data subject;
              </li>
              <li>
                (8) the existence of automated decision-making including
                profiling in accordance with Art. 22 para. 1 and 4 EU-GDPR and -
                at least in these cases - meaningful information on the logic
                involved and the scope and intended effects of such processing
                for the data subject.
              </li>
            </ul>
            <h3>2. Right to correction</h3>
            <p>
              Users have a right of rectification and/or completion vis-à-vis
              those responsible if the personal data processed concerning them
              are incorrect or incomplete. The person responsible shall make the
              correction without delay.
            </p>
            <h3>3. Right to limitation of processing</h3>
            <p>
              Users may request that the processing of personal data concerning
              them be restricted under the following conditions:
            </p>
            <ul>
              <li>
                (1) if users dispute the accuracy of the personal data
                concerning them for a period that enables the data controller to
                verify the accuracy of the personal data;
              </li>
              <li>
                (2) the processing is unlawful and users refuse to delete the
                personal data and instead request the restriction of the use of
                the personal data;
              </li>
              <li>
                (3) the controller no longer needs the personal data for the
                purposes of the processing, but users need them to assert,
                exercise or defend legal claims, or
              </li>
              <li>
                (4) if users have filed an objection to the processing pursuant
                to Art. 21 para. 1 EU-GDPR and it has not yet been determined
                whether the legitimate reasons of the person responsible
                outweigh their reasons.
              </li>
            </ul>
            <p>
              Where the processing of personal data relating to users has been
              restricted, such data may be processed only with their consent or
              for the purpose of asserting, exercising or defending rights or
              protecting the rights of another natural or legal person or on
              grounds of an important public interest of the Union or a Member
              State, other than their storage.
            </p>
            <p>
              If the restriction of processing has been restricted in accordance
              with the above conditions, users will be informed by the person
              responsible before the restriction is lifted.
            </p>
            <h3>4. Right to cancellation</h3>
            <h4>a) Duty to delete</h4>
            <p>
              Users may request the data controller to delete personal data
              concerning them immediately and the controller is obliged to
              delete such data immediately if one of the following reasons
              applies:
            </p>
            <ul>
              <li>
                (1) Personal data relating to users are no longer necessary for
                the purposes for which they were collected or otherwise
                processed.
              </li>
              <li>
                (2) Users revoke their consent on which the processing was based
                pursuant to Art. 6 para. 1 lit. a or Art. 9 para. 2 lit. a
                DSBER, and there is no other legal basis for the processing.
              </li>
              <li>
                (3) Users file an objection to processing pursuant to Art. 21
                para. 1 EU-GDPR and there are no overriding legitimate grounds
                for processing, or they file an objection to processing pursuant
                to Art. 21 para. 2 EU-GDPR.
              </li>
              <li>
                (4) Personal data relating to users have been processed
                unlawfully.
              </li>
              <li>
                (5). The deletion of personal data relating to users shall be
                necessary to fulfil a legal obligation under Union law or the
                law of the Member States to which the controller is subject.
              </li>
              <li>
                (6) Personal data relating to users have been collected in
                relation to information society services offered pursuant to
                Art. 8 para. 1 EU-GDPR.
              </li>
            </ul>
            <h4>b) Information to third parties</h4>
            <p>
              If the data controller has made personal data relating to users
              public and is obliged to delete them pursuant to Art. 17 para. 1
              EU-GDPR, he shall take appropriate measures, including technical
              measures, taking into account the available technology and the
              implementation costs, to inform those responsible for data
              processing who process the personal data that you as the data
              subject have requested the deletion of all links to this personal
              data or of copies or replications of this personal data.
            </p>
            <h4>c) Exceptions</h4>
            <p>
              The right to cancellation does not exist insofar as the processing
              is necessary
            </p>
            <ul>
              <li>(1) to exercise freedom of expression and information;</li>
              <li>
                (2) for the performance of a legal obligation required for
                processing under the law of the Union or of the Member States to
                which the controller is subject or for the performance of a task
                in the public interest or in the exercise of official authority
                conferred on the controller;
              </li>
              <li>
                (3) for reasons of public interest in the field of public health
                pursuant to Art. 9 para. 2 lit. h and i and Art. 9 para. 3
                EU-GDPR;
              </li>
              <li>
                (4) for archiving purposes in the public interest, scientific or
                historical research purposes or for statistical purposes
                pursuant to Art. 89 para. 1 EU-GDPR, insofar as the law referred
                to under a) is likely to make it impossible or seriously impair
                the attainment of the objectives of such processing, or
              </li>
              <li>(5) to assert, exercise or defend legal claims.</li>
            </ul>
            <h3>5. Right to information</h3>
            <p>
              If users have exercised their right of rectification, cancellation
              or restriction of the processing with respect to the controller,
              the controller shall be obliged to notify all recipients to whom
              personal data relating to the users have been disclosed of such
              rectification or cancellation of the data or restriction of the
              processing, unless this proves impossible or involves
              disproportionate effort.
            </p>
            <p>
              Users have the right vis-à-vis the person responsible to be
              informed about these recipients.
            </p>
            <h3>6. Right to Data Portability</h3>
            <p>
              Users have the right to receive personally identifiable
              information they provide to the controller in a structured, common
              and machine-readable format. In addition, users have the right to
              transfer this data to another person without hindrance by the
              person responsible for providing the personal data, provided that
            </p>
            <ul>
              <li>
                (1) the processing on a consent acc. Art. 6 para. 1 lit. a GDPR
                or Art. 9 para. 2 lit. a EU-GDPR or on a contract acc. Art. 6
                para. 1 lit. b EU-GDPR is based and
              </li>
              <li>(2) the processing is done by automated means.</li>
            </ul>
            <p>
              In exercising this right, users also have the right to obtain that
              personal data relating to them be transmitted directly from one
              controller to another, where technically feasible. Freedoms and
              rights of other persons may not be affected.
            </p>
            <p>
              The right to data portability does not apply to the processing of
              personal data necessary for the performance of a task in the
              public interest or in the exercise of official authority delegated
              to the controller.
            </p>
            <h3>7. Right to object</h3>
            <p>
              Users have the right, for reasons of their own special
              circumstances, to object at any time to the processing of personal
              data relating to you pursuant to Article 6 (1) (e) or (f) of the
              GDPR; this also applies to profiling based on these provisions.
            </p>
            <p>
              The controller will no longer process personal data concerning
              users unless he can demonstrate compelling legitimate grounds for
              processing that outweigh their interests, rights and freedoms, or
              the processing is intended to assert, exercise or defend legal
              claims.
            </p>
            <p>
              If the personal data relating to the users is processed in order
              to operate direct mail, users have the right to object at any time
              to the processing of the personal data concerning them for the
              purpose of such advertising; this also applies to profiling
              insofar as it is associated with such direct mail.
            </p>
            <p>
              If users object to the processing for direct marketing purposes,
              the personal data concerned will no longer be processed for these
              purposes.
            </p>
            <p>
              Users have the option, in the context of the use of information
              society services, of exercising their right of opposition through
              automated procedures that use technical specifications, regardless
              of Directive 2002/58 / EC.
            </p>
            <h3>
              8. Right to revoke the data protection declaration of consent
            </h3>
            <p>
              Users have the right to revoke their data protection declaration
              of consent at any time. The revocation of consent shall not affect
              the legality of the processing carried out on the basis of the
              consent until revocation.
            </p>
            <h3>
              9. Automated decision in individual cases including profiling
            </h3>
            <p>
              Users have the right not to be subject to a decision based
              exclusively on automated processing - including profiling - which
              has legal effect against them or significantly impairs them in a
              similar manner. This does not apply if the decision
            </p>
            <ul>
              <li>
                (1) is necessary for the conclusion or performance of a contract
                between them and the person responsible,
              </li>
              <li>
                (2) the legislation of the Union or of the Member States to
                which the person responsible is subject is admissible and that
                legislation contains appropriate measures to safeguard their
                rights, freedoms and legitimate interests; or
              </li>
              <li>(3) with their express consent.</li>
            </ul>
            <p>
              However, these decisions may not be based on special categories of
              personal data pursuant to Art. 9 para. 1 EU-GDPR, unless Art. 9
              para. 2 lit. a or g EU-GDPR applies and appropriate measures have
              been taken to protect your rights and freedoms and your legitimate
              interests.
            </p>
            <p>
              In the cases referred to in (1) and (3), the person responsible
              shall take appropriate measures to safeguard the rights and
              freedoms and their legitimate interests, including at least the
              right to obtain the intervention of a person by the person
              responsible, to state his own position and to challenge the
              decision.
            </p>
            <h3>10. Right of appeal to a supervisory authority</h3>
            <p>
              Without prejudice to any other administrative or judicial remedy,
              users have the right of appeal to a supervisory authority, in
              particular in the Member State where they reside, work or suspect
              of infringement, if they consider that the processing of personal
              data concerning them is contrary to the EU-GDPR.
            </p>
            <p>
              The supervisory authority to which the complaint has been lodged
              shall inform the complainant of the status and results of the
              complaint, including the possibility of a judicial remedy under
              Article 78 EU-GDPR.
            </p>
          </div>
        </div>
      </HeaderFooterLayout>
    )
  }
}

export default PrivacyPage
