"use client";
import React, { useEffect } from "react";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

// Reusable component for policy section headings
const PolicySection = ({ title, children }) => (
  <div className="policy-container">
    <h1 className="description">{title}</h1>
    {children}
  </div>
);

// Reusable component for paragraphs
const PolicyParagraph = ({ text }) => (
  <p className="small-description grey">{text}</p>
);

// Reusable component for list items
const PolicyList = ({ items }) => (
  <ul className="policy-list">
    {items.map((item, index) => (
      <li key={index} className="policy-list-item">
        {item}
      </li>
    ))}
  </ul>
);

const PrivacyPolicyPage = () => {

    useEffect(() => {
        // Scroll to the top of the page when the component mounts or updates
        window.scrollTo(0, 0);
      }, []);

  return (
  <ReactLenis root>
    <section className="section policy">
      <div className="policy-content">
        <h1 className="headline">Privacy Policy</h1>

        <PolicySection title="Introduction">
          <PolicyParagraph text="Welcome to DIALEDweb. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website dialedweb.com. If you do not agree with our policies and practices, please do not use our services. If you have any questions, please contact us at support@dialedworldwide.com." />
        </PolicySection>

        <PolicySection title="Summary of Key Points">
          <PolicyList
            items={[
              "Information We Collect: We collect personal information that you voluntarily provide and automatically through cookies and similar technologies.",
              "Use of Information: We use your information to provide and improve our services, communicate with you, and ensure security.",
              "Sharing Information: We may share information with third parties for business purposes and comply with legal requirements.",
              "Your Rights: Depending on your location, you have certain rights regarding your personal information.",
              "Security: We implement measures to protect your information but cannot guarantee complete security.",
            ]}
          />
        </PolicySection>

        <PolicySection title="1. Information We Collect">
          <PolicyParagraph text="Personal Information: We collect personal information that you voluntarily provide to us, such as email addresses when you contact us or subscribe to our newsletter." />
          <PolicyParagraph text="Automatically Collected Information: We automatically collect certain information when you visit, use, or navigate our website. This information does not reveal your specific identity (e.g., name or contact information) but may include device and usage information, such as your IP address, browser type, operating system, language preferences, referring URLs, device name, country, location, and usage details." />
          <PolicyParagraph text="Cookies and Tracking Technologies: We use cookies, Google Analytics, and Meta Pixels to collect information about your interaction with our website. Cookies help us understand website usage, improve user experience, and deliver personalized content and advertisements. You can manage your cookie preferences through your browser settings." />
        </PolicySection>

        <PolicySection title="2. How We Use Your Information">
          <PolicyParagraph text="We process your information to:" />
          <PolicyList
            items={[
              "Communicate with you and respond to your inquiries.",
              "Improve and customize our website and services.",
              "Ensure security and prevent fraud.",
              "Analyze usage trends and monitor website performance.",
            ]}
          />
        </PolicySection>

        <PolicySection title="3. Legal Bases for Processing (GDPR)">
          <PolicyParagraph text="If you are located in the European Economic Area (EEA) or UK, we process your personal information under the following legal bases:" />
          <PolicyList
            items={[
              "Consent: You have given us permission to process your data.",
              "Legitimate Interests: Processing is necessary for our legitimate business interests.",
              "Legal Obligations: Compliance with our legal obligations.",
            ]}
          />
        </PolicySection>

        <PolicySection title="4. Sharing Your Information">
          <PolicyParagraph text="We may share your information with third parties in the following situations:" />
          <PolicyList
            items={[
              "Service Providers: We may share information with third-party vendors who perform services on our behalf, such as hosting, data analysis, email delivery, and customer service.",
              "Legal Requirements: We may disclose information if required to do so by law or in response to valid requests by public authorities.",
              "Business Transfers: We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.",
            ]}
          />
        </PolicySection>

        <PolicySection title="5. Security of Your Information">
          <PolicyParagraph text="We use administrative, technical, and physical security measures to protect your personal information. While we have taken steps to secure the personal information you provide, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse." />
        </PolicySection>

        <PolicySection title="6. Your Privacy Rights">
          <PolicyParagraph text="Depending on your location, you may have the following rights regarding your personal information:" />
          <PolicyList
            items={[
              "Access: You have the right to request access to the personal information we collect from you.",
              "Correction: You have the right to request correction of any inaccurate information.",
              "Deletion: You have the right to request deletion of your personal information.",
              "Objection: You have the right to object to the processing of your data or request restriction of processing.",
              "Data Portability: You have the right to request a copy of your personal information in a structured, commonly used, and machine-readable format.",
              "Withdraw Consent: If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time.",
            ]}
          />
            <PolicyParagraph text="To exercise these rights, please contact us at support@dialedworldwide.com." />
        </PolicySection>

        <PolicySection title="7. Children's Privacy">
          <PolicyParagraph text="We do not knowingly collect or solicit information from anyone under the age of 13. If we learn that personal information from users under age 13 has been collected, we will delete that information as quickly as possible. If you become aware of any data we have collected from children under age 13, please contact us at support@dialedworldwide.com." />
        </PolicySection>

        <PolicySection title="8. Updates to This Privacy Policy">
          <PolicyParagraph text="We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically." />
        </PolicySection>

        <PolicySection title="9. Contact Us">
          <PolicyParagraph text="If you have any questions or comments about this Privacy Policy, please contact us at:" />
          <PolicyList
            items={[
              "DIALEDweb",
              "Email: support@dialedworldwide.com",
            ]}
          />
        </PolicySection>

        <PolicySection title="Last updated: August 6, 2024" />
      </div>
    </section>
  </ReactLenis>
  );
};

export default PrivacyPolicyPage;