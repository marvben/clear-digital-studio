import type { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Terms of Service — Clear Digital Studio",
  description:
    "Terms of Service for Clear Digital Studio, an Edmonton-based web design agency for local service businesses.",
};

export default function TermsOfServicePage() {
  const headingClass =
    "font-heading text-lg font-semibold text-ink mt-10 mb-3";
  const paragraphClass = "text-[15px] leading-relaxed text-gray-600 mb-4";
  const listClass =
    "text-[15px] leading-relaxed text-gray-600 mb-4 list-disc pl-6 space-y-2";
  const orderedListClass =
    "text-[15px] leading-relaxed text-gray-600 mb-4 list-decimal pl-6 space-y-2";

  return (
    <>
      {/* Hero */}
      <section className="bg-ink py-24 md:py-32 text-center">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-lg">
            Effective Date: March 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          {/* Agreement to Terms */}
          <h2 className={headingClass}>1. Agreement to Terms</h2>
          <p className={paragraphClass}>
            By engaging Clear Digital Studio (&quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;) for any services, you (&quot;Client,&quot;
            &quot;you,&quot; or &quot;your&quot;) agree to be bound by these
            Terms of Service. If you do not agree to these terms, please do not
            use our services. These terms apply to all work performed by Clear
            Digital Studio, including but not limited to web design, development,
            search engine optimization, and ongoing maintenance.
          </p>

          {/* Services */}
          <h2 className={headingClass}>2. Services</h2>
          <p className={paragraphClass}>
            Clear Digital Studio is an Edmonton-based web design agency
            specializing in digital solutions for local service businesses. Our
            services include:
          </p>
          <ul className={listClass}>
            <li>Custom website design and development</li>
            <li>Responsive and mobile-friendly builds</li>
            <li>Search engine optimization (SEO) for local visibility</li>
            <li>Website maintenance and ongoing support</li>
            <li>Performance optimization and page speed improvements</li>
            <li>Content updates and site management</li>
          </ul>
          <p className={paragraphClass}>
            The specific scope of work for each project will be outlined in a
            separate project proposal or agreement provided before work begins.
          </p>

          {/* Client Responsibilities */}
          <h2 className={headingClass}>3. Client Responsibilities</h2>
          <p className={paragraphClass}>
            To ensure projects are completed on time and to a high standard,
            clients are responsible for the following:
          </p>
          <ul className={listClass}>
            <li>
              Providing all necessary content, including text, images, logos, and
              branding materials, in a timely manner.
            </li>
            <li>
              Reviewing deliverables and providing clear, consolidated feedback
              within the agreed-upon timeframes.
            </li>
            <li>
              Supplying accurate business information, including contact details,
              service descriptions, and any legal or compliance requirements
              specific to your industry.
            </li>
            <li>
              Ensuring that all content provided to us does not infringe on any
              third-party intellectual property rights.
            </li>
            <li>
              Designating a single point of contact to streamline communication
              and approvals.
            </li>
          </ul>

          {/* Pricing & Payment */}
          <h2 className={headingClass}>4. Pricing and Payment</h2>
          <p className={paragraphClass}>
            Clear Digital Studio operates on a fixed-pricing model. All project
            costs will be clearly outlined in your proposal before work begins.
            There are no hidden fees.
          </p>
          <ul className={listClass}>
            <li>
              A deposit of 50% of the total project cost is required before work
              commences.
            </li>
            <li>
              The remaining balance is due upon project completion and before the
              final site is published or transferred.
            </li>
            <li>
              Invoices are payable within 14 days of the invoice date unless
              otherwise agreed in writing.
            </li>
            <li>
              Late payments may incur a fee of 1.5% per month on the outstanding
              balance.
            </li>
          </ul>
          <p className={paragraphClass}>
            <strong className="text-ink">Refund Policy:</strong> If you choose
            to cancel a project after work has begun, any completed work up to
            the point of cancellation is non-refundable. Refunds on deposits are
            provided only if cancellation occurs before any design or
            development work has started.
          </p>

          {/* Intellectual Property */}
          <h2 className={headingClass}>5. Intellectual Property</h2>
          <p className={paragraphClass}>
            Upon receipt of full payment, the Client owns all rights to the
            final deliverables, including the completed website design, custom
            graphics created specifically for the project, and written content
            produced on the Client&apos;s behalf.
          </p>
          <p className={paragraphClass}>
            Clear Digital Studio retains ownership of all proprietary code
            frameworks, development tools, reusable components, and
            methodologies used in the creation of your project. We reserve the
            right to reuse these assets in future projects for other clients.
          </p>
          <p className={paragraphClass}>
            We also reserve the right to display completed work in our portfolio
            and marketing materials unless you request otherwise in writing.
          </p>

          {/* Project Timeline */}
          <h2 className={headingClass}>6. Project Timeline</h2>
          <p className={paragraphClass}>
            All project timelines provided by Clear Digital Studio are
            estimates. While we strive to deliver every project on schedule,
            actual completion dates depend on several factors, including the
            complexity of the project and the timeliness of client feedback and
            content delivery.
          </p>
          <p className={paragraphClass}>
            Delays caused by late feedback, incomplete content, or changes to
            the original project scope may extend the estimated timeline. We
            will communicate any changes to the schedule promptly and work with
            you to minimize disruptions.
          </p>

          {/* Revisions */}
          <h2 className={headingClass}>7. Revisions</h2>
          <p className={paragraphClass}>
            Each project includes a defined number of revision rounds as
            specified in your project proposal. Revisions refer to minor
            adjustments to the approved design or content, such as color
            changes, text edits, or layout tweaks.
          </p>
          <p className={paragraphClass}>
            Additional revisions beyond the included rounds, or requests that
            constitute significant changes to the agreed-upon scope, will be
            billed at our standard hourly rate. We will notify you before any
            additional charges are incurred and obtain your approval to proceed.
          </p>

          {/* Hosting & Maintenance */}
          <h2 className={headingClass}>8. Hosting and Maintenance</h2>
          <p className={paragraphClass}>
            Clear Digital Studio offers optional ongoing hosting and maintenance
            services. These services are billed on a monthly or annual basis, as
            outlined in your maintenance agreement. Hosting and maintenance plans
            typically include:
          </p>
          <ul className={listClass}>
            <li>Website hosting and uptime monitoring</li>
            <li>Regular software and security updates</li>
            <li>Periodic content updates as specified in your plan</li>
            <li>Performance monitoring and optimization</li>
            <li>Regular backups and disaster recovery</li>
          </ul>
          <p className={paragraphClass}>
            <strong className="text-ink">Cancellation:</strong> Hosting and
            maintenance services may be cancelled with 30 days&apos; written
            notice. Upon cancellation, we will provide you with a full backup of
            your website files and assist with migration to another provider if
            requested.
          </p>

          {/* Limitation of Liability */}
          <h2 className={headingClass}>9. Limitation of Liability</h2>
          <p className={paragraphClass}>
            To the fullest extent permitted by applicable law, Clear Digital
            Studio shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages arising from or related to the
            use of our services, including but not limited to loss of revenue,
            loss of data, or business interruption.
          </p>
          <p className={paragraphClass}>
            Our total liability for any claim arising from a project shall not
            exceed the total amount paid by the Client for that specific
            project. This limitation applies regardless of the legal theory on
            which the claim is based.
          </p>
          <p className={paragraphClass}>
            We are not responsible for any losses resulting from third-party
            services, including hosting providers, domain registrars, or
            third-party plugins and integrations.
          </p>

          {/* Termination */}
          <h2 className={headingClass}>10. Termination</h2>
          <p className={paragraphClass}>
            Either party may terminate a project agreement with written notice.
            In the event of termination:
          </p>
          <ol className={orderedListClass}>
            <li>
              The Client is responsible for payment of all work completed up to
              the date of termination.
            </li>
            <li>
              Clear Digital Studio will deliver all completed work and
              associated files to the Client upon receipt of outstanding
              payments.
            </li>
            <li>
              Any unused portion of a deposit may be refunded at our discretion,
              based on the amount of work already completed.
            </li>
          </ol>
          <p className={paragraphClass}>
            We reserve the right to terminate a project immediately if the
            Client engages in behaviour that is abusive, fraudulent, or in
            violation of these terms.
          </p>

          {/* Governing Law */}
          <h2 className={headingClass}>11. Governing Law</h2>
          <p className={paragraphClass}>
            These Terms of Service shall be governed by and construed in
            accordance with the laws of the Province of Alberta and the federal
            laws of Canada applicable therein. Any disputes arising from these
            terms or our services shall be subject to the exclusive jurisdiction
            of the courts located in Edmonton, Alberta, Canada.
          </p>

          {/* Changes to Terms */}
          <h2 className={headingClass}>12. Changes to Terms</h2>
          <p className={paragraphClass}>
            Clear Digital Studio reserves the right to update or modify these
            Terms of Service at any time. Changes will be posted on this page
            with an updated effective date. Your continued use of our services
            after any changes constitutes acceptance of the revised terms. We
            encourage you to review this page periodically.
          </p>

          {/* Contact Us */}
          <h2 className={headingClass}>13. Contact Us</h2>
          <p className={paragraphClass}>
            If you have any questions about these Terms of Service, please
            contact us:
          </p>
          <ul className={`${listClass} list-none pl-0`}>
            <li>
              <strong className="text-ink">Clear Digital Studio</strong>
            </li>
            <li>Edmonton, Alberta, Canada</li>
            <li>
              Email:{" "}
              <a
                href="mailto:hello@cleardigitalstudio.com"
                className="text-amber underline hover:text-amber-dark transition-colors"
              >
                hello@cleardigitalstudio.com
              </a>
            </li>
            <li>
              Website:{" "}
              <a
                href="https://cleardigitalstudio.com"
                className="text-amber underline hover:text-amber-dark transition-colors"
              >
                cleardigitalstudio.com
              </a>
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
}
