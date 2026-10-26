import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LinkButton } from "./components/LinkButton";
import { ContactDetail } from "./components/ContactDetail";
import { websiteLink, socialLinks, contactDetails } from "./data/links";

const LOGO_URL = "/Logo_(2)_(1).png";

export function App() {
  const reduceMotion = useReducedMotion();
  const item = (i: number) =>
  reduceMotion ?
  {} :
  {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.24, delay: 0.05 + i * 0.04, ease: [0.23, 1, 0.32, 1] }
  };

  return (
    <div className="min-h-screen w-full bg-white font-sans text-ink">
      <main className="mx-auto grid min-h-screen w-full max-w-5xl items-center gap-12 px-6 py-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-10">
        <header className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <img src={LOGO_URL} alt="TUNAV — Connected operations. Intelligent action" className="-my-8 w-64 lg:-mx-12 lg:-my-14 lg:w-96" />
          <h1 className="mt-8 font-display text-3xl font-semibold leading-tight text-ink lg:text-4xl">
            Stay connected with <span className="text-brand">TUNAV</span>
          </h1>
          <p className="mt-3 max-w-sm text-base text-ink-muted">
            Follow our news and get in touch with our team.
          </p>

          <div className="mt-8 hidden w-full max-w-sm divide-y divide-brand/10 border-y border-brand/10 lg:block">
            <ContactDetail label="Email" value={contactDetails.email} href={`mailto:${contactDetails.email}`} />
            <ContactDetail label="Phone" value={contactDetails.phone} href={contactDetails.phoneHref} />
            <ContactDetail label="Agent" value={contactDetails.agentPhone} href={contactDetails.agentPhoneHref} />
          </div>
        </header>

        <section aria-label="Our links" className="mx-auto w-full max-w-md lg:max-w-none">
          <motion.div {...item(0)}>
            <LinkButton link={websiteLink} primary />
          </motion.div>

          <h2 className="mb-3 mt-8 text-sm font-medium text-ink-muted">Follow us</h2>
          <ul className="flex flex-col gap-3">
            {socialLinks.map((link, i) =>
            <motion.li key={link.id} {...item(i + 1)}>
                <LinkButton link={link} />
              </motion.li>
            )}
          </ul>

          <div className="mt-8 divide-y divide-brand/10 border-y border-brand/10 lg:hidden">
            <ContactDetail label="Email" value={contactDetails.email} href={`mailto:${contactDetails.email}`} />
            <ContactDetail label="Phone" value={contactDetails.phone} href={contactDetails.phoneHref} />
            <ContactDetail label="Agent" value={contactDetails.agentPhone} href={contactDetails.agentPhoneHref} />
          </div>
        </section>
      </main>
      <footer className="pb-6 text-center text-xs text-ink-muted">© {new Date().getFullYear()} TUNAV</footer>
    </div>);

}