import type { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Privacy Policy — Clear Digital Studio",
  description:
    "Privacy Policy for Clear Digital Studio. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden bg-ink">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-36 md:pb-32 md:pt-44">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="reveal font-display text-[clamp(32px,5vw,56px)] font-semibold leading-[1.1] tracking-tight text-white">
              Privacy Policy
            </h1>
            <p className="reveal reveal-delay-1 mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-white/60">
              Last updated: March 2026
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
            Clear Digital Studio (&quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;) operates the website cleardigitalstudio.com. This
            Privacy Policy explains how we collect, use, and protect your
            personal information when you visit our website or use our services.
          </p>
          <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
            By using our website, you agree to the collection and use of
            information in accordance with this policy.
          </p>

          {/* Information We Collect */}
          <h2 className="font-heading text-lg font-semibold text-ink mt-10 mb-3">
            Information We Collect
          </h2>
          <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
            We collect information that you provide directly to us through our
            contact form, including:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[15px] leading-relaxed text-gray-600 mb-4">
            <li>Your name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Business name</li>
            <li>Any additional details you include in your message</li>
          </ul>
          <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
            We also collect certain information automatically when you visit our
            website, including:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[15px] leading-relaxed text-gray-600 mb-4">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on each page</li>
            <li>Referring website or source</li>
            <li>Device type and screen resolution</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          {/* How We Use Your Information */}
          <h2 className="font-heading text-lg font-semibold text-ink mt-10 mb-3">
            How We Use Your Information
          </h2>
          <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[15px] leading-relaxed text-gray-600 mb-4">
            <li>To respond to your inquiries and provide project quotes</li>
            <li>To communicate with you about ongoing projects and updates</li>
            <li>
              To improve our website, services, and overall user experience
            </li>
            <li>To analyze website traffic and usage patterns</li>
            <li>
              To send occasional project updates or service-related
              communications
            </li>
          </ul>

          {/* Information Sharing */}
          <h2 className="font-heading text-lg font-semibold text-ink mt-10 mb-3">
            Information Sharing
          </h2>
          <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
            We do not sell, rent, or trade your personal information to third
            parties. We may share your information only with trusted service
            providers who assist us in operating our website and delivering our
            services, including:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[15px] leading-relaxed text-gray-600 mb-4">
            <li>Website hosting providers</li>
            <li>Email delivery services</li>
            <li>Analytics platforms</li>
          </ul>
          <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
            These service providers are obligated to protect your information and
            may only use it to perform services on our behalf.
          </p>
          <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
            We may also disclose your information if required to do so by law or
            in response to a valid legal request.
          </p>

          {/* Cookies & Analytics */}
          <h2 className="font-heading text-lg font-semibold text-ink mt-10 mb-3">
            Cookies and Analytics
          </h2>
          <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
            Our website uses cookies and similar technologies to enhance your
            browsing experience and collect analytical data. Specifically, we
            use:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[15px] leading-relaxed text-gray-600 mb-4">
            <li>
              <strong>Google Analytics</strong> to understand how visitors
              interact with our website, including page views, session duration,
              and traffic sources. Google Analytics uses cookies to collect
              anonymized data.
            </li>
            <li>
              <strong>Google reCAPTCHA</strong> to protect our contact form from
              spam and abuse. reCAPTCHA may collect hardware and software
              information and send it to Google for analysis.
            </li>
          </ul>
          <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
            You can control cookie preferences through your browser settings.
            Disabling cookies may affect certain features of our website.
          </p>

          {/* Data Security */}
          <h2 className="font-heading text-lg font-semibold text-ink mt-10 mb-3">
            Data Security
          </h2>
          <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
            We take reasonable measures to protect your personal information from
            unauthorized access, alteration, disclosure, or destruction. Our
            website uses SSL encryption to secure data transmitted between your
            browser and our servers.
          </p>
          <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
            However, no method of transmission over the internet or electronic
            storage is completely secure. While we strive to protect your
            personal information, we cannot guarantee its absolute security.
          </p>

          {/* Your Rights */}
          <h2 className="font-heading text-lg font-semibold text-ink mt-10 mb-3">
            Your Rights
          </h2>
          <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[15px] leading-relaxed text-gray-600 mb-4">
            <li>
              Request access to the personal information we hold about you
            </li>
            <li>Request correction of any inaccurate or incomplete data</li>
            <li>Request deletion of your personal information</li>
            <li>
              Withdraw consent for any processing based on your consent
            </li>
          </ul>
          <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
            To exercise any of these rights, please contact us at{" "}
            <a
              href="mailto:hello@cleardigitalstudio.com"
              className="text-amber underline underline-offset-2 hover:text-amber/80 transition-colors"
            >
              hello@cleardigitalstudio.com
            </a>
            . We will respond to your request within a reasonable timeframe.
          </p>

          {/* Third-Party Links */}
          <h2 className="font-heading text-lg font-semibold text-ink mt-10 mb-3">
            Third-Party Links
          </h2>
          <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
            Our website may contain links to third-party websites or services
            that are not operated by us. We have no control over the content,
            privacy policies, or practices of these third-party sites and assume
            no responsibility for them. We encourage you to review the privacy
            policy of any website you visit.
          </p>

          {/* Children's Privacy */}
          <h2 className="font-heading text-lg font-semibold text-ink mt-10 mb-3">
            Children&apos;s Privacy
          </h2>
          <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
            Our website and services are not directed at individuals under the
            age of 13. We do not knowingly collect personal information from
            children under 13. If we become aware that we have collected personal
            information from a child under 13, we will take steps to delete that
            information promptly.
          </p>

          {/* Changes to This Policy */}
          <h2 className="font-heading text-lg font-semibold text-ink mt-10 mb-3">
            Changes to This Policy
          </h2>
          <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for legal, operational, or regulatory
            reasons. Any changes will be posted on this page with an updated
            revision date. We encourage you to review this policy periodically.
          </p>

          {/* Contact Us */}
          <h2 className="font-heading text-lg font-semibold text-ink mt-10 mb-3">
            Contact Us
          </h2>
          <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
            If you have any questions or concerns about this Privacy Policy or
            how we handle your personal information, please contact us:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[15px] leading-relaxed text-gray-600 mb-4">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:hello@cleardigitalstudio.com"
                className="text-amber underline underline-offset-2 hover:text-amber/80 transition-colors"
              >
                hello@cleardigitalstudio.com
              </a>
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a
                href="https://cleardigitalstudio.com"
                className="text-amber underline underline-offset-2 hover:text-amber/80 transition-colors"
              >
                cleardigitalstudio.com
              </a>
            </li>
            <li>
              <strong>Location:</strong> Edmonton, Alberta, Canada
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
}
